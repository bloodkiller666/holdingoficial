import type { Metadata } from "next";
import SustainPage from "@/components/SustainPage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/sostenibilidad");
}

export default function Page() {
  return <SustainPage />;
}
