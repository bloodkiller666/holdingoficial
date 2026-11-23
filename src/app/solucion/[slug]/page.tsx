import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionPage from "@/components/SolutionPage";
import { solutionSlugs, solutionTitles } from "@/lib/solutionsData";
import { solutionsEs } from "@/lib/solutionsContent.es";

type Params = Promise<{ slug: string }>;

const indexOf = (slug: string) => (solutionSlugs as readonly string[]).indexOf(slug);

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const i = indexOf(slug);
  if (i < 0) return {};
  return { title: `${solutionTitles("es")[i]} | TDM Asfaltos`, description: solutionsEs[i].desc[0] };
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
