import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsArticle from "@/components/NewsArticle";
import { newsArticles, newsSlugs } from "@/lib/newsData";

type Params = Promise<{ slug: string }>;

const indexOf = (slug: string) => newsSlugs.indexOf(slug as (typeof newsSlugs)[number]);

export function generateStaticParams() {
  return newsSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const i = indexOf(slug);
  if (i < 0) return {};
  return { title: `${newsArticles.es[i].title} | TDM Asfaltos`, description: newsArticles.es[i].body[0] };
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
