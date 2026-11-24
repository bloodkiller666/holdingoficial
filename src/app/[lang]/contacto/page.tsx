import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import { staticPageMeta } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return staticPageMeta(params, "/contacto");
}

export default function Page() {
  return <ContactPage />;
}
