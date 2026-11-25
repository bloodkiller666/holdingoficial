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
import { productHref, productLabels, productMeta, productTabBanners, productTitles } from "@/lib/productsData";
import { prefersReducedMotion } from "@/lib/useReveal";

export default function ProductsPage() {
  const { t, locale } = useI18n();
  const L = productLabels[locale];
  const titles = productTitles(locale);
  const tabs = t.products.tabs;
  const root = useRef<HTMLElement>(null);
  const [tab, setTab] = useState(0);

  const items = productMeta.map((p, i) => ({ ...p, i, title: titles[i] })).filter((p) => p.tab === tab);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-pp-crumb]", { opacity: 0, duration: 0.8, delay: 0.2 });
    },
    { scope: root, dependencies: [locale] },
  );

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo("[data-pp-title]", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power4.out", overwrite: "auto", clearProps: "opacity,transform" });
      gsap.from("[data-pp-card]", { opacity: 0, y: 28, duration: 0.6, ease: "power3.out", stagger: 0.07, overwrite: "auto", clearProps: "opacity,transform" });
    },
    { scope: root, dependencies: [tab, locale] },
  );

  return (
    <SiteShell>
      <main id="contenido" tabIndex={-1} ref={root}>
        <UrlTab onTab={setTab} />
        <section className="relative isolate overflow-hidden bg-[#0a2a5c] pb-16 pt-32 text-white lg:pb-24 lg:pt-44">
          {productTabBanners.map((b, k) => (
            <Image key={b} src={r2(b)} alt="" fill priority={k === 0} sizes="100vw" className={`-z-10 object-cover transition-opacity duration-700 ${tab === k ? "opacity-100" : "opacity-0"}`} />
          ))}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a2a5c]/90 via-[#0a2a5c]/55 to-[#0a2a5c]/30" />
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <nav data-pp-crumb aria-label="breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">{L.home}</Link>
              <span aria-hidden>/</span>
              <span>{L.title}</span>
              <span aria-hidden>/</span>
              <span className="font-semibold text-white">{tabs[tab]}</span>
            </nav>
            <h1 data-pp-title className="font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-7xl lg:text-8xl">{tabs[tab]}</h1>
          </div>
        </section>

        <section className="bg-bg pb-20 pt-10 lg:pb-28 lg:pt-14">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div role="group" aria-label={L.title} className="flex flex-wrap gap-2.5">
              {tabs.map((name, k) => (
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
              {items.map((p) => (
                <div key={`${tab}-${p.i}`} data-pp-card className="flex">
                  <Link href={productHref(p.i)} className="group flex w-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden bg-alt">
                      <Image src={r2(p.image)} alt={p.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h2 className="font-display text-xl font-bold leading-snug text-heading">{p.title}</h2>
                      <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-brand transition-all group-hover:gap-3">{L.view} <span aria-hidden>→</span></span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {items.length === 0 && <p className="mt-10 text-fg">{L.empty}</p>}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
