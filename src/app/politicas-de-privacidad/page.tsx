import type { Metadata } from "next";
import PrivacyPage from "@/components/PrivacyPage";

export const metadata: Metadata = {
  title: "Políticas de privacidad | TDM Asfaltos",
  description: "Política sobre protección de datos personales de GRUPO TDM: definiciones, principios, derechos de los usuarios y contacto.",
};

export default function Page() {
  return <PrivacyPage />;
}
