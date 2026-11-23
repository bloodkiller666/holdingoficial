import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseArticle from "@/components/CaseArticle";
import { caseContent, caseSlugs } from "@/lib/casesData";
import { dictionaries } from "@/lib/dictionaries";

type Params = Promise<{ slug: string }>;

const indexOf = (slug: string) => caseSlugs.indexOf(slug as (typeof caseSlugs)[number]);

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const i = indexOf(slug);
  if (i < 0) return {};
  return { title: `${dictionaries.es.cases.items[i]} | TDM Asfaltos`, description: caseContent.es[i].problem.text };
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
