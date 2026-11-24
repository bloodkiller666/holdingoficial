import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseArticle from "@/components/CaseArticle";
import { caseContent, caseSlugs } from "@/lib/casesData";
import { dictionaries } from "@/lib/dictionaries";
import { detailPageMeta } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

const indexOf = (slug: string) => caseSlugs.indexOf(slug as (typeof caseSlugs)[number]);

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  return detailPageMeta(params, "/caso-de-exito", (lang, slug) => {
    const i = indexOf(slug);
    return i < 0 ? null : { title: dictionaries[lang].cases.items[i], description: caseContent[lang][i].problem.text };
  });
}

async function Article({ params }: { params: Params }) {
  const { slug } = await params;
  const i = indexOf(slug);
  if (i < 0) notFound();
  return <CaseArticle index={i} />;
}

export default function Page({ params }: { params: Params }) {
  return (
    <Suspense fallback={<div className="min-h-svh" />}>
      <Article params={params} />
    </Suspense>
  );
}
