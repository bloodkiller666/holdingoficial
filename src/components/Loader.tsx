"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMG, r2 } from "@/lib/r2";
import { lenisRef } from "@/lib/lenis";

const COLS = 7;
const RING = 2 * Math.PI * 62;
const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Carga de marca con GSAP:
 *  - Primera visita: anillo de progreso + logo + contador y una «pista» de asfalto con la línea central en movimiento.
 *    Sale con una cortina de franjas (como capas de asfalto) que se levantan en cascada.
 *  - Cambio de página: barra naranja superior que avanza mientras carga y cortina de franjas que descubre la nueva página.
 */
export default function Loader() {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  const lastPath = useRef(pathname);
  const barTween = useRef<gsap.core.Tween | null>(null);

  const cols = () => gsap.utils.toArray<HTMLElement>("[data-ld-col]", root.current);

  // ---- primera carga ----
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const seen = (() => { try { return sessionStorage.getItem("tdm-loaded") === "1"; } catch { return false; } })();
    const finish = () => {
      el.style.display = "none";
      document.documentElement.style.overflow = "";
      lenisRef.current?.start();
      ScrollTrigger.refresh();
      try { sessionStorage.setItem("tdm-loaded", "1"); } catch { /* sin storage */ }
    };

    if (reduced()) { finish(); return; }

    lenisRef.current?.stop();
    document.documentElement.style.overflow = "hidden";

    // pausa las animaciones de entrada de la página para que se vean al descubrirse
    const paused: gsap.core.Animation[] = [];
    try {
      gsap.globalTimeline.getChildren(false, true, true).forEach((a) => {
        if (!a.paused() && a.duration() < 10 && a.repeat() === 0) { a.pause(); paused.push(a); }
      });
    } catch { /* ignorar */ }

    let cancelled = false;
    const progress = { v: 0 };
    const ring = el.querySelector<SVGCircleElement>("[data-ld-ring]");
    const num = el.querySelector<HTMLElement>("[data-ld-num]");
    const paint = () => {
      ring?.setAttribute("stroke-dashoffset", String(RING * (1 - progress.v / 100)));
      if (num) num.textContent = String(Math.round(progress.v));
    };

    const ctx = gsap.context(() => {
    const dashes = gsap.to("[data-ld-road]", { backgroundPositionX: "-48px", duration: 0.55, ease: "none", repeat: -1 });
    const tl = gsap.timeline();
    tl.from("[data-ld-core]", { opacity: 0, scale: 0.85, duration: 0.7, ease: "power3.out" })
      .from("[data-ld-letter]", { yPercent: 120, opacity: 0, stagger: 0.05, duration: 0.6, ease: "power3.out" }, 0.25)
      .from("[data-ld-roadwrap]", { scaleX: 0, duration: 0.7, ease: "power3.out" }, 0.35);

    // Solo se esperan las fuentes (con tope de 700 ms): esperar al evento «load» retrasaba la web hasta que bajara cada imagen.
    const ready = Promise.race([
      Promise.resolve(document.fonts?.ready).catch(() => undefined),
      new Promise((r) => setTimeout(r, 700)),
    ]);

    gsap.to(progress, { v: seen ? 100 : 88, duration: seen ? 0.3 : 0.8, ease: "power2.out", onUpdate: paint });

    Promise.all([ready, new Promise((r) => setTimeout(r, seen ? 120 : 800))]).then(() => {
      if (cancelled) return;
      gsap.to(progress, { v: 100, duration: 0.4, ease: "power1.out", onUpdate: paint });
      const out = gsap.timeline({
        delay: seen ? 0.05 : 0.15,
        onComplete: () => { dashes.kill(); finish(); },
      });
      out.to("[data-ld-content]", { opacity: 0, scale: 1.06, duration: 0.45, ease: "power2.in" })
        .add(() => { paused.forEach((a) => a.resume()); }, "-=0.1")
        .to(cols(), { yPercent: -100, duration: seen ? 0.55 : 0.7, ease: "power4.inOut", stagger: { each: 0.05, from: "center" } }, "-=0.1")
        .to("[data-ld-line]", { yPercent: -100, duration: seen ? 0.55 : 0.7, ease: "power4.inOut", stagger: { each: 0.05, from: "center" } }, "<0.05");
    });

    }, root);

    return () => { cancelled = true; ctx.revert(); paused.forEach((a) => a.resume()); };
  }, []);

  // ---- barra de progreso al hacer clic en un enlace interno ----
  useEffect(() => {
    const click = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      if (!bar.current || reduced()) return;
      barTween.current?.kill();
      gsap.set(bar.current, { opacity: 1, scaleX: 0 });
      barTween.current = gsap.to(bar.current, { scaleX: 0.82, duration: 2.4, ease: "power2.out" });
    };
    document.addEventListener("click", click, true);
    return () => document.removeEventListener("click", click, true);
  }, []);

  // ---- cambio de página: cortina que descubre la nueva ruta ----
  useLayoutEffect(() => {
    if (first.current) { first.current = false; lastPath.current = pathname; return; }
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    const el = root.current;
    if (!el || reduced()) return;

    barTween.current?.kill();
    if (bar.current) gsap.to(bar.current, { scaleX: 1, duration: 0.25, ease: "power2.out", onComplete: () => { gsap.to(bar.current, { opacity: 0, duration: 0.3 }); } });

    el.style.display = "block";
    gsap.set("[data-ld-content]", { opacity: 0 });
    gsap.set(cols(), { yPercent: 0 });
    gsap.set("[data-ld-line]", { yPercent: 0 });
    const tl = gsap.timeline({ onComplete: () => { el.style.display = "none"; ScrollTrigger.refresh(); } });
    tl.to(cols(), { yPercent: -100, duration: 0.5, ease: "power4.inOut", stagger: { each: 0.035, from: "start" } })
      .to("[data-ld-line]", { yPercent: -100, duration: 0.55, ease: "power4.inOut", stagger: { each: 0.035, from: "start" } }, "<0.03");
  }, [pathname]);

  return (
    <>
      <div ref={bar} aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[210] h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand to-[#ffb347] opacity-0 shadow-[0_0_12px_rgba(255,110,0,.7)]" />
      <div ref={root} className="tdm-loader fixed inset-0 z-[200]" role="status" aria-label="Cargando">
        {/* franjas */}
        <div aria-hidden className="absolute inset-0 flex">
          {Array.from({ length: COLS }).map((_, i) => (
            <div key={i} className="relative h-full flex-1">
              <div data-ld-col className="absolute inset-0 -mx-px bg-gradient-to-b from-[#0b3a7e] to-[#061a3d]" />
              <div data-ld-line className="absolute inset-y-0 right-0 z-10 w-[3px] bg-brand/80" />
            </div>
          ))}
        </div>

        {/* núcleo */}
        <div className="absolute inset-0 grid place-items-center">
          <div data-ld-content className="flex flex-col items-center">
            <div data-ld-core className="relative grid h-40 w-40 place-items-center">
              <svg viewBox="0 0 140 140" className="absolute inset-0 -rotate-90" fill="none" aria-hidden>
                <circle cx="70" cy="70" r="62" stroke="rgba(255,255,255,.14)" strokeWidth="4" />
                <circle data-ld-ring cx="70" cy="70" r="62" stroke="#ff6e00" strokeWidth="4" strokeLinecap="round" strokeDasharray={RING} strokeDashoffset={RING} />
              </svg>
              <Image src={r2(IMG.logo)} alt="" width={84} height={84} unoptimized priority className="h-[84px] w-[84px]" />
            </div>
            <p className="mt-5 flex font-display text-5xl font-extrabold tabular-nums text-white">
              <span data-ld-num>0</span><span className="ml-1 mt-2 text-xl text-brand">%</span>
            </p>
            <p className="mt-2 flex overflow-hidden font-display text-sm font-bold uppercase tracking-[0.35em] text-white/70" aria-hidden>
              {"TDM ASFALTOS".split("").map((c, i) => <span key={i} data-ld-letter className="inline-block">{c === " " ? " " : c}</span>)}
            </p>
            <div data-ld-roadwrap className="relative mt-6 h-3 w-60 origin-center overflow-hidden rounded-full bg-black/40">
              <div data-ld-road className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2" style={{ backgroundImage: "repeating-linear-gradient(90deg,#ffc400 0 24px,transparent 24px 48px)" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
