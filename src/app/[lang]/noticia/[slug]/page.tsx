import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsArticle from "@/components/NewsArticle";
import { newsArticles, newsSlugs } from "@/lib/newsData";
import { detailPageMeta } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

const indexOf = (slug: string) => newsSlugs.indexOf(slug as (typeof newsSlugs)[number]);

export function generateStaticParams() {
  return newsSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  return detailPageMeta(params, "/noticia", (lang, slug) => {
    const i = indexOf(slug);
    return i < 0 ? null : { title: newsArticles[lang][i].title, description: newsArticles[lang][i].body[0] };
  });
}

async function Article({ params }: { params: Params }) {
  const { slug } = await params;
  const i = indexOf(slug);
  if (i < 0) notFound();
  return <NewsArticle index={i} />;
}

export default function Page({ params }: { params: Params }) {
  return (
    <Suspense fallback={<div className="min-h-svh" />}>
      <Article params={params} />
    </Suspense>
  );
}
