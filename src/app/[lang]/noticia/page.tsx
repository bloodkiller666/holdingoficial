import type { Metadata } from "next";
import NewsPage from "@/components/NewsPage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/noticia");
}

export default function Page() {
  return <NewsPage />;
}
