import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { productSlugs, productTitles } from "@/lib/productsData";
import { productsEs } from "@/lib/productsContent.es";

type Params = Promise<{ slug: string }>;

const indexOf = (slug: string) => (productSlugs as readonly string[]).indexOf(slug);

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const i = indexOf(slug);
  if (i < 0) return {};
  return { title: `${productTitles("es")[i]} | TDM Asfaltos`, description: productsEs[i].desc[0] };
}

async function Article({ params }: { params: Params }) {
  const { slug } = await params;
  const i = indexOf(slug);
  if (i < 0) notFound();
  return <ProductPage index={i} />;
}

export default function Page({ params }: { params: Params }) {
  return (
    <Suspense fallback={<div className="min-h-svh" />}>
      <Article params={params} />
    </Suspense>
  );
}
