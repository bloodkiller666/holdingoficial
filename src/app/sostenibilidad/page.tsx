import type { Metadata } from "next";
import SustainPage from "@/components/SustainPage";

export const metadata: Metadata = {
  title: "Sostenibilidad | TDM Asfaltos",
  description: "Asfaltos modificados con polímeros: menos impacto, más eficiencia. Menor huella de carbono, mayor durabilidad y desarrollo sostenible de la sociedad.",
};

export default function Page() {
  return <SustainPage />;
}
