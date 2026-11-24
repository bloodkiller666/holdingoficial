"use client";

import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Lenis from "lenis";
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
    if (reduce) return;

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
  return null;
}

export default function Providers({ children, lang }: { children: React.ReactNode; lang: Locale }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <I18nProvider lang={lang}>
        <SmoothScroll />
        {children}
        <Loader />
      </I18nProvider>
    </ThemeProvider>
  );
}
