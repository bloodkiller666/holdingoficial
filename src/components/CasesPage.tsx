"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SiteShell from "./SiteShell";
import CountryBadge from "./CountryBadge";
import { useI18n } from "@/lib/i18n";
import { caseImages, r2 } from "@/lib/r2";
import { caseCategories, caseContent, caseFilterIds, caseHref, caseLabels, type CaseFilter } from "@/lib/casesData";
import { prefersReducedMotion } from "@/lib/useReveal";

export default function CasesPage() {
  const { t, locale } = useI18n();
  const L = caseLabels[locale];
  const root = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<CaseFilter>("all");

  const cases = t.cases.items
    .map((title, i) => ({ title, i, problem: caseContent[locale][i].problem.text ?? "" }))
    .filter((c) => filter === "all" || caseCategories[c.i].includes(filter));

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-cp-title] span", { yPercent: 110, duration: 1, ease: "power4.out", delay: 0.1 });
      gsap.from("[data-cp-intro]", { opacity: 0, y: 24, duration: 0.9, ease: "power3.out", delay: 0.4 });
      gsap.from("[data-cp-crumb]", { opacity: 0, duration: 0.8, delay: 0.2 });
    },
    { scope: root, dependencies: [locale] },
  );

  // Al cambiar de filtro, las tarjetas entran de nuevo con un fade-up escalonado.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-cp-card]", { opacity: 0, y: 28, duration: 0.6, ease: "power3.out", stagger: 0.07, overwrite: "auto", clearProps: "opacity,transform" });
    },
    { scope: root, dependencies: [filter, locale] },
  );

  return (
    <SiteShell>
      <main ref={root}>
        {/* Cabecera de página */}
        <section className="bg-gradient-to-br from-[#c9500f] via-brand to-[#ff7a3c] pb-16 pt-32 text-white lg:pb-24 lg:pt-44">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <nav data-cp-crumb aria-label="breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">{L.home}</Link>
              <span aria-hidden>/</span>
              <span className="font-semibold text-white">{L.title}</span>
            </nav>
            <h1 data-cp-title className="font-display text-5xl font-extrabold uppercase leading-none sm:text-8xl lg:text-9xl">
              <span className="block overflow-hidden pb-2"><span className="block">{L.title}</span></span>
            </h1>
            <p data-cp-intro className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{L.intro}</p>
          </div>
        </section>

        {/* Filtros + casos */}
        <section className="bg-bg pb-20 pt-10 lg:pb-28 lg:pt-14">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div role="group" aria-label={L.filterLabel} className="flex flex-wrap gap-2.5">
              {caseFilterIds.map((id) => {
                const active = filter === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(id)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-bold transition duration-200 active:scale-[0.97] ${
                      active ? "border-brand bg-brand text-white shadow-md shadow-brand/30" : "border-line bg-surface text-heading hover:border-brand hover:text-brand"
                    }`}
                  >
                    {L.filters[id]}
                  </button>
                );
              })}
            </div>

            {cases.length === 0 ? (
              <p aria-live="polite" className="mt-14 rounded-3xl border border-dashed border-line bg-alt px-6 py-16 text-center text-lg text-fg">{L.empty}</p>
            ) : (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cases.map((c) => (
                  // El contenedor externo solo lo anima GSAP; el hover (CSS) va en el Link interno para que no compitan por el transform.
                  <div key={`${filter}-${c.i}`} data-cp-card className="flex">
                    <Link href={caseHref(c.i)} className="group flex w-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image src={r2(caseImages[c.i])} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                        <CountryBadge name={t.cases.country} className="absolute left-4 top-4" />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-6">
                        <h2 className="font-display text-xl font-bold leading-snug text-heading">{c.title}</h2>
                        <p className="line-clamp-3 text-[15px] leading-relaxed text-fg"><strong className="font-bold uppercase text-heading">{L.problem}:</strong> {c.problem}</p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-brand transition-all group-hover:gap-3">{t.cases.view} <span aria-hidden>→</span></span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
