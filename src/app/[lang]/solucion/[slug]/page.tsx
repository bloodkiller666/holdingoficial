import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionPage from "@/components/SolutionPage";
import { solutionSlugs, solutionTitles } from "@/lib/solutionsData";
import { solutionsEs } from "@/lib/solutionsContent.es";
import { solutionsEn } from "@/lib/solutionsContent.en";
import { solutionsPt } from "@/lib/solutionsContent.pt";
import { detailPageMeta } from "@/lib/seo";

const solutionContent = { es: solutionsEs, en: solutionsEn, pt: solutionsPt };

type Params = Promise<{ slug: string }>;

const indexOf = (slug: string) => (solutionSlugs as readonly string[]).indexOf(slug);

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  return detailPageMeta(params, "/solucion", (lang, slug) => {
    const i = indexOf(slug);
    return i < 0 ? null : { title: solutionTitles(lang)[i], description: solutionContent[lang][i].desc[0] };
  });
}

async function Article({ params }: { params: Params }) {
  const { slug } = await params;
  const i = indexOf(slug);
  if (i < 0) notFound();
  return <SolutionPage index={i} />;
}

export default function Page({ params }: { params: Params }) {
  return (
    <Suspense fallback={<div className="min-h-svh" />}>
      <Article params={params} />
    </Suspense>
  );
}
