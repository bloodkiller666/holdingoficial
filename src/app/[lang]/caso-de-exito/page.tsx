import type { Metadata } from "next";
import CasesPage from "@/components/CasesPage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/caso-de-exito");
}

export default function Page() {
  return <CasesPage />;
}
