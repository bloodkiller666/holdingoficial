import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/nosotros");
}

export default function Page() {
  return <AboutPage />;
}
