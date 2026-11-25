"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SiteShell from "./SiteShell";
import { useI18n } from "@/lib/i18n";
import { UrlTab, writeUrlTab } from "@/lib/urlTab";
import { r2 } from "@/lib/r2";
import { solutionHref, solutionLabels, solutionMeta, solutionTitles } from "@/lib/solutionsData";
import { prefersReducedMotion } from "@/lib/useReveal";

export default function SolutionsPage() {
  const { locale } = useI18n();
  const L = solutionLabels[locale];
  const titles = solutionTitles(locale);
  const root = useRef<HTMLElement>(null);
  const [tab, setTab] = useState(0);

  const items = solutionMeta.map((s, i) => ({ ...s, i, title: titles[i] })).filter((s) => s.cat === tab);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-sp-title] span", { yPercent: 110, duration: 1, ease: "power4.out", delay: 0.1 });
      gsap.from("[data-sp-intro]", { opacity: 0, y: 24, duration: 0.9, ease: "power3.out", delay: 0.4 });
      gsap.from("[data-sp-crumb]", { opacity: 0, duration: 0.8, delay: 0.2 });
    },
    { scope: root, dependencies: [locale] },
  );

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-sp-card]", { opacity: 0, y: 28, duration: 0.6, ease: "power3.out", stagger: 0.07, overwrite: "auto", clearProps: "opacity,transform" });
    },
    { scope: root, dependencies: [tab, locale] },
  );

  return (
    <SiteShell>
      <main id="contenido" tabIndex={-1} ref={root}>
        <UrlTab onTab={setTab} />
        <section className="bg-gradient-to-br from-[#c9500f] via-brand to-[#ff7a3c] pb-16 pt-32 text-white lg:pb-24 lg:pt-44">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <nav data-sp-crumb aria-label="breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">{L.home}</Link>
              <span aria-hidden>/</span>
              <span className="font-semibold text-white">{L.title}</span>
            </nav>
            <h1 data-sp-title className="font-display text-5xl font-extrabold uppercase leading-none sm:text-8xl lg:text-9xl">
              <span className="block overflow-hidden pb-2"><span className="block">{L.title}</span></span>
            </h1>
            <p data-sp-intro className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{L.intro}</p>
          </div>
        </section>

        <section className="bg-bg pb-20 pt-10 lg:pb-28 lg:pt-14">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div role="group" aria-label={L.title} className="flex flex-wrap gap-2.5">
              {L.tabs.map((name, k) => (
                <button
                  key={name}
                  type="button"
                  aria-pressed={tab === k}
                  onClick={() => { setTab(k); writeUrlTab(k); }}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold transition duration-200 active:scale-[0.97] ${
                    tab === k ? "border-brand bg-brand text-white shadow-md shadow-brand/30" : "border-line bg-surface text-heading hover:border-brand hover:text-brand"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <div key={`${tab}-${s.i}`} data-sp-card className="flex">
                  <Link href={solutionHref(s.i)} className="group flex w-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden bg-alt">
                      <Image src={r2(s.hero)} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h2 className="font-display text-xl font-bold leading-snug text-heading">{s.title}</h2>
                      <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-brand transition-all group-hover:gap-3">{L.view} <span aria-hidden>→</span></span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
