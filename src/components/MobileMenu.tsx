"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import gsap from "gsap";
import { useI18n } from "@/lib/i18n";
import { solutionChildren } from "@/lib/menuData";
import { solutionHref, solutionIndex, solutionTabHref } from "@/lib/solutionsData";
import { productHref, productTabHref } from "@/lib/productsData";
import { GEO_URL } from "@/lib/links";
import { IMG, r2 } from "@/lib/r2";
import { lenisRef } from "@/lib/lenis";
import { useNavTo } from "@/lib/useNavTo";

type Props = { open: boolean; onClose: () => void };

const EASE = "power4.out";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 10 6" fill="currentColor" className={`transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}><path d="M0 0h10L5 6z" /></svg>
  );
}

/**
 * Menú móvil. Se renderiza en un portal sobre <body>: el <header> tiene backdrop-filter,
 * que convierte a un hijo `fixed` en un elemento relativo al header (65px) y lo recorta.
 */
const casesPath = "/caso-de-exito";
const contactPath = "/contacto";

export default function MobileMenu({ open, onClose }: Props) {
  const { t, locale, href: lh } = useI18n();
  const panel = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [acc, setAcc] = useState<string | null>(null);
  const pending = useRef<string | null>(null);
  const navTo = useNavTo();

  // eslint-disable-next-line react-hooks/set-state-in-effect -- el portal solo existe en el cliente
  useEffect(() => setMounted(true), []);

  const close = useCallback(() => {
    const el = panel.current;
    if (!el) return onClose();
    gsap.to(el, { xPercent: -100, duration: 0.28, ease: "power3.in", onComplete: onClose });
    gsap.to("[data-mm-scrim]", { opacity: 0, duration: 0.28 });
  }, [onClose]);

  // Entrada
  useEffect(() => {
    if (!open || !panel.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.style.overflow = "hidden";
    lenisRef.current?.stop();
    const ctx = gsap.context(() => {
      if (reduce) return;
      gsap.fromTo(panel.current, { xPercent: -100 }, { xPercent: 0, duration: 0.45, ease: EASE });
      gsap.fromTo("[data-mm-scrim]", { opacity: 0 }, { opacity: 1, duration: 0.35 });
      gsap.from("[data-mm-item]", { opacity: 0, x: -24, stagger: 0.05, duration: 0.5, ease: EASE, delay: 0.1 });
    }, panel);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      ctx.revert();
      document.documentElement.style.overflow = "";
      lenisRef.current?.start();
      if (pending.current) {
        const h = pending.current;
        pending.current = null;
        requestAnimationFrame(() => navTo(h));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- navTo solo cambia con la ruta
  }, [open, close]);

  const go = (hash: string) => {
    pending.current = hash;
    close();
  };

  if (!mounted || !open) return null;

  const nav = t.nav;
  const row = "flex w-full items-center justify-between border-b border-line py-4 text-left font-display text-lg font-bold text-heading active:text-brand";
  const sub = "block py-2.5 pl-3 text-[15px] text-fg active:text-brand";

  const toggle = (id: string) => setAcc((a) => (a === id ? null : id));

  const productGroups = t.products.tabs.map((tab, i) => ({ tab, items: t.products.items.filter((p) => p.tab === i) }));

  return createPortal(
    <div className="fixed inset-0 z-[100] xl:hidden" role="dialog" aria-modal="true" aria-label={nav.menu}>
      <div data-mm-scrim onClick={close} className="absolute inset-0 bg-black/50" />
      <div ref={panel} className="absolute inset-y-0 left-0 flex w-[min(88vw,380px)] flex-col overflow-y-auto overscroll-contain bg-bg shadow-2xl">
        <div className="flex h-16 shrink-0 items-center justify-between px-5">
          <Image src={r2(IMG.logo)} alt="TDM Asfaltos" width={48} height={48} unoptimized className="h-11 w-11" />
          <button type="button" aria-label={nav.close} onClick={close} className="grid h-11 w-11 place-items-center rounded-full text-heading active:scale-95 active:bg-alt">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col px-5 pb-8">
          <div data-mm-item><a href="#propuesta" onClick={(e) => { e.preventDefault(); go("#propuesta"); }} className={row}>{nav.value}</a></div>

          <div data-mm-item>
            <button type="button" aria-expanded={acc === "sol"} onClick={() => toggle("sol")} className={row}>{nav.solutions}<Chevron open={acc === "sol"} /></button>
            {acc === "sol" && (
              <div className="border-b border-line pb-3">
                {t.solutions.items.map((cat, i) => (
                  <div key={cat} className="pt-3">
                    <a href={lh(solutionTabHref(i))} onClick={(e) => { e.preventDefault(); go(solutionTabHref(i)); }} className="block text-sm font-bold uppercase tracking-wide text-brand">{cat}</a>
                    {solutionChildren[locale][i].map((s, k) => <a key={s} href={lh(solutionHref(solutionIndex(i, k)))} onClick={(e) => { e.preventDefault(); go(solutionHref(solutionIndex(i, k))); }} className={sub}>{s}</a>)}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div data-mm-item>
            <button type="button" aria-expanded={acc === "prod"} onClick={() => toggle("prod")} className={row}>{nav.products}<Chevron open={acc === "prod"} /></button>
            {acc === "prod" && (
              <div className="border-b border-line pb-3">
                {productGroups.map((g) => (
                  <div key={g.tab} className="pt-3">
                    <a href={lh(productTabHref(productGroups.indexOf(g)))} onClick={(e) => { e.preventDefault(); go(productTabHref(productGroups.indexOf(g))); }} className="block text-sm font-bold uppercase tracking-wide text-brand">{g.tab}</a>
                    {g.items.map((p) => <a key={p.name} href={lh(productHref(t.products.items.indexOf(p)))} onClick={(e) => { e.preventDefault(); go(productHref(t.products.items.indexOf(p))); }} className={sub}>{p.name}</a>)}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div data-mm-item><a href={lh(casesPath)} onClick={(e) => { e.preventDefault(); go(casesPath); }} className={row}>{nav.cases}</a></div>

          <div data-mm-item>
            <button type="button" aria-expanded={acc === "know"} onClick={() => toggle("know")} className={row}>{nav.know}<Chevron open={acc === "know"} /></button>
            {acc === "know" && (
              <div className="border-b border-line pb-2">
                {[nav.aboutUs, nav.cdt, nav.sustain, nav.join].map((l, i) => i >= 0
                  ? <a key={l} href={lh(["/nosotros", "/centro-de-desarrollo-tecnologico", "/sostenibilidad", "/unete-a-nosotros"][i])} onClick={(e) => { e.preventDefault(); go(["/nosotros", "/centro-de-desarrollo-tecnologico", "/sostenibilidad", "/unete-a-nosotros"][i]); }} className={sub}>{l}</a>
                  : <a key={l} href="#" onClick={(e) => e.preventDefault()} className={sub}>{l}</a>)}
              </div>
            )}
          </div>

          <div data-mm-item><a href={lh(contactPath)} onClick={(e) => { e.preventDefault(); go(contactPath); }} className={row}>{nav.contact}</a></div>

          <div data-mm-item className="mt-6">
            <a href={GEO_URL} target="_blank" rel="noopener noreferrer" className="block rounded-full border-2 border-navy px-5 py-3 text-center text-sm font-bold tracking-wide text-heading active:scale-[0.97] active:bg-navy active:text-white">{nav.geo}</a>
          </div>
        </nav>
      </div>
    </div>,
    document.body,
  );
}
