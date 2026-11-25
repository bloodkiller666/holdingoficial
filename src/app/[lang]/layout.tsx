import { ThemeScript } from "@/lib/theme";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Barlow, Cairo } from "next/font/google";
import Providers from "@/components/Providers";
import { LOCALE_CODES, isLocale } from "@/lib/routes";
import { SITE_URL } from "@/lib/seo";
import "../globals.css";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow" });
const cairo = Cairo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-cairo" });

const meta = {
  es: { title: "TDM Asfaltos | Asfaltos a la medida", description: "Más de 20 años desarrollando soluciones asfálticas para la construcción y mantenimiento de infraestructura vial en el Perú." },
  en: { title: "TDM Asfaltos | Tailor-made asphalts", description: "Over 20 years developing asphalt solutions for the construction and maintenance of road infrastructure in Peru." },
  pt: { title: "TDM Asfaltos | Asfaltos sob medida", description: "Mais de 20 anos desenvolvendo soluções asfálticas para a construção e manutenção de infraestrutura viária no Peru." },
} as const;

type Params = Promise<{ lang: string }>;

export function generateStaticParams() {
  return LOCALE_CODES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? { ...meta[lang], metadataBase: new URL(SITE_URL) } : {};
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang} suppressHydrationWarning className={`${barlow.variable} ${cairo.variable}`}>
      <head>
        {process.env.NEXT_PUBLIC_R2_DOMAIN && <link rel="preconnect" href={process.env.NEXT_PUBLIC_R2_DOMAIN} crossOrigin="anonymous" />}

        <noscript><style>{".tdm-loader{display:none!important}"}</style></noscript>
      </head>
      <body className="antialiased">
        <ThemeScript />
        <Providers lang={lang}>{children}</Providers>
      </body>
    </html>
  );
}
