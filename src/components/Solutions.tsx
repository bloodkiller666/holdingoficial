"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import { solutionTabHref } from "@/lib/solutionsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useI18n } from "@/lib/i18n";
import { r2, solutionImages } from "@/lib/r2";
import { scrollToY } from "@/lib/lenis";
import { prefersReducedMotion } from "@/lib/useReveal";

export default function Solutions() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const count = t.solutions.items.length;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        stRef.current = ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: `+=${count * 70}%`,
          pin: true,
          onUpdate: (self) => setActive(Math.min(count - 1, Math.floor(self.progress * count))),
        });
        return () => { stRef.current?.kill(); stRef.current = null; };
      });
      gsap.from("[data-sol-intro]", {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [count] },
  );

  // Transición entre tarjetas
  useEffect(() => {
    const cards = root.current?.querySelectorAll<HTMLElement>("[data-sol-card]");
    cards?.forEach((c, i) => {
      const on = i === active;
      gsap.to(c, { autoAlpha: on ? 1 : 0, scale: on ? 1 : 0.94, y: on ? 0 : (i < active ? -40 : 40), duration: 0.6, ease: "power3.out" });
    });
  }, [active]);

  const go = (i: number) => {
    const next = Math.max(0, Math.min(count - 1, i));
    const st = stRef.current;
    if (st) scrollToY(st.start + (st.end - st.start) * ((next + 0.5) / count));
    else setActive(next);
  };

  const arrowCls = "grid h-9 w-9 place-items-center rounded-full border-2 border-brand text-brand transition hover:bg-brand hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand";

  return (
    <section ref={root} id="soluciones" className="bg-bg">
      <div className="mx-auto grid min-h-svh max-w-[1400px] items-center gap-10 px-5 py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:px-10 lg:py-0">
        <div>
          <h2 data-sol-intro className="font-display text-4xl font-extrabold uppercase leading-tight text-brand sm:text-5xl">{t.solutions.title}</h2>
          <p data-sol-intro className="mt-5 max-w-sm text-lg leading-relaxed text-heading">{t.solutions.text}</p>
          <div data-sol-intro className="mt-8 flex items-center gap-3">
            <button type="button" aria-label="Anterior" className={arrowCls} disabled={active === 0} onClick={() => go(active - 1)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 15l-6-6-6 6" /></svg>
            </button>
            <button type="button" aria-label="Siguiente" className={arrowCls} disabled={active === count - 1} onClick={() => go(active + 1)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <span className="ml-2 font-display text-sm font-bold text-heading">0{active + 1} / 0{count}</span>
          </div>
        </div>

        <div data-sol-intro className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-navy/20 sm:aspect-[16/10]">
          {t.solutions.items.map((label, i) => (
            <Link key={label} href={solutionTabHref(i)} data-sol-card className="absolute inset-0 block" style={{ opacity: i === 0 ? 1 : 0, visibility: i === 0 ? "visible" : "hidden" }}>
              <Image src={r2(solutionImages[i % solutionImages.length])} alt="" fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-card px-6 py-5 text-white">
                <span className="text-lg font-medium">{label}</span>
                <span aria-hidden className="text-2xl">→</span>
              </div>
            </Link>
          ))}
          <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2">
            {t.solutions.items.map((l, i) => (
              <button key={l} type="button" aria-label={l} onClick={() => go(i)} className={`w-1.5 rounded-full transition-all ${i === active ? "h-8 bg-brand" : "h-3 bg-white/70"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
