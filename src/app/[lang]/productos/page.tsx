import type { Metadata } from "next";
import ProductsPage from "@/components/ProductsPage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/productos");
}

export default function Page() {
  return <ProductsPage />;
}
