import type { Metadata } from "next";
import SolutionsPage from "@/components/SolutionsPage";

export const metadata: Metadata = {
  title: "Soluciones | TDM Asfaltos",
  description: "Soluciones integrales de pavimentación, señalización y seguridad vial, y otras soluciones de infraestructura.",
};

export default function Page() {
  return <SolutionsPage />;
}
