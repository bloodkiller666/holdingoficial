import type { Metadata } from "next";
import JoinPage from "@/components/JoinPage";

export const metadata: Metadata = {
  title: "Únete a nosotros | TDM Asfaltos",
  description: "Sé parte del equipo TDM Asfaltos: talento, principios, historias de crecimiento y vacantes disponibles.",
};

export default function Page() {
  return <JoinPage />;
}
