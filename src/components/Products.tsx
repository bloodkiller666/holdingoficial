"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import Link from "@/components/Link";
import { r2 } from "@/lib/r2";
import { productHref, productMeta } from "@/lib/productsData";
import { prefersReducedMotion, useReveal } from "@/lib/useReveal";

export default function Products() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState(0);
  useReveal(root);

  const items = t.products.items.filter((p) => p.tab === tab);

  // Entrada escalonada de tarjetas al cambiar de pestaña
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      track.current?.scrollTo({ left: 0 });
      gsap.from("[data-prod-card]", { opacity: 0, y: 50, scale: 0.94, stagger: 0.07, duration: 0.7, ease: "power3.out" });
    },
    { scope: root, dependencies: [tab] },
  );

  const scrollBy = (dir: number) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <section ref={root} id="productos" className="overflow-hidden bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-reveal className="font-display text-4xl font-extrabold uppercase text-brand sm:text-5xl">{t.products.title}</h2>
          <p data-reveal className="mt-4 text-lg text-muted">{t.products.text}</p>
        </div>

        <div data-reveal role="tablist" className="mt-8 flex flex-wrap justify-center gap-3">
          {t.products.tabs.map((label, i) => (
            <button
              key={label}
              role="tab"
              aria-selected={tab === i}
              type="button"
              onClick={() => setTab(i)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 ${tab === i ? "bg-brand shadow-brand/30" : "bg-navy dark:bg-card"}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div data-reveal className="relative mt-12">
          <div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {items.map((p, i) => (
              <Link
                key={p.name}
                href={productHref(t.products.items.indexOf(p))}
                data-prod-card
                className="group relative flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-sm transition-shadow hover:shadow-xl sm:w-[44%] lg:w-[30%]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-card">
                  <Image src={r2(productMeta[t.products.items.indexOf(p)].image)} alt="" fill sizes="(min-width:1024px) 30vw, (min-width:640px) 44vw, 78vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span aria-hidden className="absolute bottom-3 left-4 font-display text-4xl font-extrabold leading-none text-white/90">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <h3 className="font-display text-lg font-bold leading-tight text-heading">{p.name}</h3>
                  <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button type="button" aria-label="Anterior" onClick={() => scrollBy(-1)} className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand text-brand transition hover:bg-brand hover:text-white">←</button>
            <button type="button" aria-label="Siguiente" onClick={() => scrollBy(1)} className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand text-brand transition hover:bg-brand hover:text-white">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

