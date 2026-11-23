"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

/** Marco común de todas las páginas: header fijo, boletín y footer. */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  // Las posiciones de los ScrollTrigger se calculan al montar; al cargar fuentes e imágenes la página
  // cambia de altura, así que se recalculan para que ningún efecto quede desfasado.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    const timers = [400, 1200].map((ms) => setTimeout(refresh, ms));
    return () => {
      window.removeEventListener("load", refresh);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
}
