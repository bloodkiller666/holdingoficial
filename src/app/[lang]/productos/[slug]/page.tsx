import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { productSlugs, productTitles } from "@/lib/productsData";
import { productsEs } from "@/lib/productsContent.es";
import { productsEn } from "@/lib/productsContent.en";
import { productsPt } from "@/lib/productsContent.pt";
import { detailPageMeta } from "@/lib/seo";

const productContent = { es: productsEs, en: productsEn, pt: productsPt };

type Params = Promise<{ slug: string }>;

const indexOf = (slug: string) => (productSlugs as readonly string[]).indexOf(slug);

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  return detailPageMeta(params, "/productos", (lang, slug) => {
    const i = indexOf(slug);
    return i < 0 ? null : { title: productTitles(lang)[i], description: productContent[lang][i].desc[0] };
  });
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
