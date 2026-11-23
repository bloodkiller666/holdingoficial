import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "Sobre nosotros | TDM Asfaltos",
  description: "Líderes en soluciones asfálticas en Perú con más de 20 años en el sector vial: propósito, principios culturales, soluciones integrales y certificaciones.",
};

export default function Page() {
  return <AboutPage />;
}
