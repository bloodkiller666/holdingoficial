import type { Metadata } from "next";
import JoinPage from "@/components/JoinPage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/unete-a-nosotros");
}

export default function Page() {
  return <JoinPage />;
}
