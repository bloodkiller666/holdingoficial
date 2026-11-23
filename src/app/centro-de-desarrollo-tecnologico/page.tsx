import type { Metadata } from "next";
import CdtPage from "@/components/CdtPage";

export const metadata: Metadata = {
  title: "Centro de Desarrollo Tecnológico | TDM Asfaltos",
  description: "Laboratorios Superpave, de desempeño mecanístico, de control de calidad y de diseño de mezclas asfálticas. Certificaciones ISO 9001, 14001 y 45001.",
};

export default function Page() {
  return <CdtPage />;
}
