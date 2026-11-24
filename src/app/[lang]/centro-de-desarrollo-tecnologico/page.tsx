import type { Metadata } from "next";
import CdtPage from "@/components/CdtPage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/centro-de-desarrollo-tecnologico");
}

export default function Page() {
  return <CdtPage />;
}
