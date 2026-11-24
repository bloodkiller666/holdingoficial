import type { Metadata } from "next";
import SolutionsPage from "@/components/SolutionsPage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/solucion");
}

export default function Page() {
  return <SolutionsPage />;
}
