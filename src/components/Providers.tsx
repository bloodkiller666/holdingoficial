"use client";

import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { I18nProvider } from "@/lib/i18n";
import type { Locale } from "@/lib/dictionaries";
import { lenisRef } from "@/lib/lenis";
import Loader from "@/components/Loader";

gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // En móviles y tablets (puntero táctil) el scroll nativo ya es fluido: no se descarga Lenis.
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || touch) return;

    let cancelled = false;
    let cleanup = () => {};
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      lenisRef.current = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      cleanup = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
        lenisRef.current = null;
      };
    });
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);
  return null;
}

const skipText = { es: "Saltar al contenido", en: "Skip to content", pt: "Ir para o conteúdo" } as const;

/** Enlace para teclado y lectores de pantalla: salta el menú y va directo al contenido. */
function SkipLink({ lang }: { lang: Locale }) {
  return (
    <a href="#contenido" className="fixed left-3 top-3 z-[300] -translate-y-24 rounded-full bg-[#0b2a5a] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-transform focus:translate-y-0">
      {skipText[lang]}
    </a>
  );
}

export default function Providers({ children, lang }: { children: React.ReactNode; lang: Locale }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <I18nProvider lang={lang}>
        <SkipLink lang={lang} />
        <SmoothScroll />
        {children}
        <Loader />
      </I18nProvider>
    </ThemeProvider>
  );
}
