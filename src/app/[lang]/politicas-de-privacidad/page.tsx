import type { Metadata } from "next";
import PrivacyPage from "@/components/PrivacyPage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/politicas-de-privacidad");
}

export default function Page() {
  return <PrivacyPage />;
}
