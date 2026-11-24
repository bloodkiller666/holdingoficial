import type { Metadata } from "next";
import ComplaintsPage from "@/components/ComplaintsPage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/libro-de-reclamaciones");
}

export default function Page() {
  return <ComplaintsPage />;
}
