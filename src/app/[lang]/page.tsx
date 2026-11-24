import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/");
}

export default function Page() {
  return <HomePage />;
}
