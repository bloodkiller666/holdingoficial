import type { Metadata } from "next";
import CasesPage from "@/components/CasesPage";

export const metadata: Metadata = {
  title: "Casos de éxito | TDM Asfaltos",
  description: "Descubre cómo nuestras soluciones innovadoras han llevado al éxito a nuestros clientes en diversos proyectos.",
};

export default function Page() {
  return <CasesPage />;
}
