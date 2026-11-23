import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contacto | TDM Asfaltos",
  description: "Contáctanos: teléfono, WhatsApp, correo, ubicación en Chorrillos - Lima y formulario de consulta.",
};

export default function Page() {
  return <ContactPage />;
}
