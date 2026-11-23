import type { Metadata } from "next";
import NewsPage from "@/components/NewsPage";

export const metadata: Metadata = {
  title: "Noticias | TDM Asfaltos",
  description: "Mantente al día con los últimos avances y eventos de TDM Asfaltos.",
};

export default function Page() {
  return <NewsPage />;
}
