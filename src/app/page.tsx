"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteShell from "@/components/SiteShell";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Guarantee from "@/components/Guarantee";
import Products from "@/components/Products";
import Cases from "@/components/Cases";
import Advice from "@/components/Advice";
import News from "@/components/News";
import { useI18n } from "@/lib/i18n";
import { goTo } from "@/lib/lenis";

export default function Home() {
  const { locale } = useI18n();

  // Al cambiar de idioma cambian las alturas del texto: recalcular posiciones de los pins
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => clearTimeout(id);
  }, [locale]);

  // Recalcular cuando terminan de cargar imágenes/fuentes; y, si llegamos desde otra página con /#seccion, ir a ella
  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    let t: ReturnType<typeof setTimeout> | undefined;
    if (window.location.hash) t = setTimeout(() => goTo(window.location.hash), 900);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(t);
    };
  }, []);

  return (
    <SiteShell>
      <main>
        <Hero />
        <About />
        <Solutions />
        <Guarantee />
        <Products />
        <Cases />
        <Advice />
        <News />
      </main>
    </SiteShell>
  );
}
