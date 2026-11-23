import type { Metadata } from "next";
import { Barlow, Cairo } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow" });
const cairo = Cairo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: "TDM Asfaltos | Asfaltos a la medida",
  description:
    "Más de 20 años desarrollando soluciones asfálticas para la construcción y mantenimiento de infraestructura vial en el Perú.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${barlow.variable} ${cairo.variable}`}>
      <head>
        <noscript><style>{".tdm-loader{display:none!important}"}</style></noscript>
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
