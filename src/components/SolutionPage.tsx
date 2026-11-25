"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SiteShell from "./SiteShell";
import BrochureCard from "./BrochureCard";
import ContactForm from "./ContactForm";
import { useI18n } from "@/lib/i18n";
import { caseImages, newsImages, r2 } from "@/lib/r2";
import { caseHref } from "@/lib/casesData";
import { newsHref } from "@/lib/newsData";
import { productImages, productPhotos, projectImages, sectorIcons, solutionHref, solutionLabels, solutionMeta, solutionTitles, type SolutionContent } from "@/lib/solutionsData";
import { solutionsEs } from "@/lib/solutionsContent.es";
import { solutionsEn } from "@/lib/solutionsContent.en";
import { solutionsPt } from "@/lib/solutionsContent.pt";
import { prefersReducedMotion, useParallax, useReveal } from "@/lib/useReveal";

const content = { es: solutionsEs, en: solutionsEn, pt: solutionsPt } satisfies Record<string, SolutionContent[]>;
const highPerf = { es: " de alto desempeño", en: " high-performance", pt: " de alto desempenho" };

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full" aria-hidden>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export default function SolutionPage({ index }: { index: number }) {
  const { t, locale } = useI18n();
  const L = solutionLabels[locale];
  const titles = solutionTitles(locale);
  const meta = solutionMeta[index];
  const c = content[locale][index];
  const title = titles[index];
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  useParallax(root);

  const siblings = solutionMeta.map((s, i) => ({ i, cat: s.cat })).filter((s) => s.cat === meta.cat);
  const brochureTitle = L.brochureTitle + (meta.brochure === 1 ? highPerf[locale] : "");

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-sd-bg]", { scale: 1.12, duration: 1.8, ease: "power2.out" }, 0)
        .from("[data-sd-crumb]", { opacity: 0, y: 12, duration: 0.6 }, 0.15)
        .from("[data-sd-title] span", { yPercent: 110, duration: 1 }, 0.25);
    },
    { scope: root, dependencies: [locale, index] },
  );

  const h2 = "font-display text-3xl font-extrabold uppercase leading-[1.1] text-brand sm:text-4xl";

  return (
    <SiteShell>
      <main id="contenido" tabIndex={-1} ref={root} className="bg-bg">
        {/* Cabecera */}
        <section className="relative isolate flex min-h-[420px] items-end overflow-hidden bg-[#0a2a5c] pt-16 text-white lg:min-h-[560px]">
          <div data-sd-bg className="absolute inset-0 -z-10">
            <div data-parallax="8" className="absolute inset-[-10%]">
              <Image src={r2(meta.hero)} alt="" fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a2a5c]/95 via-[#0a2a5c]/55 to-[#0a2a5c]/15" />
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-12 lg:px-10 lg:pb-20">
            <nav data-sd-crumb aria-label="breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">{L.home}</Link>
              <span aria-hidden>/</span>
              <Link href={`/solucion?tab-${meta.cat + 1}`} className="transition hover:text-white">{L.tabs[meta.cat]}</Link>
              <span aria-hidden>/</span>
              <span className="font-semibold text-white">{title}</span>
            </nav>
            <h1 data-sd-title className="max-w-4xl font-display text-4xl font-extrabold uppercase leading-[1.05] [text-shadow:0_2px_24px_rgb(0_0_0/.35)] sm:text-6xl lg:text-7xl">
              <span className="block overflow-hidden pb-2"><span className="block">{title}</span></span>
            </h1>
          </div>
        </section>

        {/* Selector de soluciones hermanas + brochure */}
        <section className="pt-10 lg:pt-14">
          <div className="mx-auto grid max-w-[1400px] items-center gap-6 px-5 lg:grid-cols-[1fr_minmax(0,32rem)] lg:gap-10 lg:px-10">
            <nav aria-label={L.selectSolution}>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">{L.selectSolution}</p>
              <div className="flex flex-wrap gap-2.5">
                {siblings.map((s) => (
                  <Link
                    key={s.i}
                    href={solutionHref(s.i)}
                    aria-current={s.i === index ? "page" : undefined}
                    className={`rounded-full border px-4 py-2 text-sm font-bold transition duration-200 ${s.i === index ? "border-brand bg-brand text-white" : "border-line bg-surface text-heading hover:border-brand hover:text-brand"}`}
                  >
                    {titles[s.i]}
                  </Link>
                ))}
              </div>
            </nav>
            <BrochureCard thumb={meta.brochure} title={brochureTitle} />
          </div>
        </section>

        {/* Descripción */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
            <h2 data-reveal className="font-display text-3xl font-extrabold leading-[1.1] text-heading sm:text-4xl lg:text-5xl">{title}</h2>
            <div className="mt-6 space-y-5">
              {c.desc.map((p, k) => (
                <p key={k} data-reveal className={`text-lg leading-8 lg:text-xl lg:leading-9 ${k === 0 ? "font-medium text-heading" : "text-fg"}`}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Productos utilizados */}
        <section className="bg-alt py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <h2 data-reveal className={h2}>{L.products}</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.products.map((p, k) => {
                const photo = productImages[index]?.[k] ?? productPhotos[p];
                if (photo) {
                  return (
                    <article key={p} data-reveal className="group overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-navy/10">
                      <div className="relative aspect-[4/3] overflow-hidden bg-alt">
                        <Image src={r2(photo)} alt={p} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                      </div>
                      <h3 className="p-6 font-display text-lg font-extrabold leading-snug text-heading">{p}</h3>
                    </article>
                  );
                }
                return (
                  <article key={p} data-reveal className="group flex items-center gap-5 overflow-hidden rounded-3xl border border-line bg-surface p-4 pr-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-navy/10">
                    {(

                      <span aria-hidden className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-brand/10 font-display text-3xl font-extrabold text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">{String(k + 1).padStart(2, "0")}</span>
                    )}
                    <h3 className="font-display text-lg font-extrabold leading-snug text-heading">{p}</h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <h2 data-reveal className={h2}>{L.advantages}</h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
              {c.advantages.map((a, k) => (
                <li key={k} data-reveal className="flex gap-5 rounded-3xl border border-line bg-surface p-6 sm:p-7">
                  <span className="h-11 w-11 shrink-0 rounded-full bg-brand p-2.5 text-white shadow-md shadow-brand/30"><Check /></span>
                  <div>
                    {a.t && <h3 className="font-display text-xl font-extrabold leading-snug text-heading">{a.t}</h3>}
                    <p className={`${a.t ? "mt-2" : ""} leading-7 text-fg`}>{a.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sectores de aplicación */}
        <section className="relative isolate overflow-hidden bg-[#071d44] py-16 text-white lg:py-24">
          <div aria-hidden className="absolute -left-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-brand/20 blur-[120px]" />
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <h2 data-reveal className="font-display text-3xl font-extrabold uppercase leading-[1.1] sm:text-4xl">{L.sectors}</h2>
            <span aria-hidden className="mt-5 block h-1 w-16 rounded-full bg-brand" />
            <ul className="mt-10 flex flex-wrap gap-4">
              {c.sectors.map((s, k) => {
                const icon = sectorIcons[index]?.[k];
                return (
                  <li key={s} data-reveal className="group flex w-full items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.05] p-4 pr-6 backdrop-blur-sm transition duration-300 hover:border-brand hover:bg-brand/15 sm:w-auto sm:min-w-64">
                    {icon && (
                      <span
                        aria-hidden
                        className="h-14 w-14 shrink-0 bg-brand transition-colors duration-300 group-hover:bg-white"
                        style={{ maskImage: `url(/sectores/${icon}.svg)`, WebkitMaskImage: `url(/sectores/${icon}.svg)`, maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center", maskSize: "contain", WebkitMaskSize: "contain" }}
                      />
                    )}
                    <span className="text-base font-semibold leading-snug">{s}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Proyectos realizados */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <h2 data-reveal className={h2}>{L.projects}</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {c.projects.map((p, k) => {
                const photo = projectImages[index]?.[k];
                return (
                  <article key={p.title} data-reveal className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface">
                    {photo && (
                      <div className="relative aspect-[16/10] overflow-hidden bg-alt">
                        <Image src={r2(photo)} alt={p.title} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                      </div>
                    )}
                    <div className="p-7 sm:p-9">
                      <span aria-hidden className="block h-1 w-12 rounded-full bg-brand" />
                      <h3 className="mt-5 font-display text-2xl font-extrabold leading-snug text-heading">{p.title}</h3>
                      <div className="mt-4 space-y-3 leading-7 text-fg">
                        {p.text.map((x, j) => <p key={j}>{x}</p>)}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Asesoramiento */}
        <section className="bg-alt py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-10">
            <div>
              <h2 data-reveal className="font-display text-4xl font-extrabold leading-[1.1] text-heading sm:text-5xl">{L.adviceTitle}</h2>
              <p data-reveal className="mt-5 max-w-md text-lg leading-8 text-fg">{L.adviceText}</p>
              <div data-reveal className="mt-8 hidden lg:block"><BrochureCard thumb={meta.brochure} title={brochureTitle} /></div>
            </div>
            <div data-reveal className="rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-9">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Casos de éxito y noticias */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 lg:grid-cols-2 lg:gap-12 lg:px-10">
            <div>
              <h2 data-reveal className={h2}>{L.cases}</h2>
              <Link data-reveal href={caseHref(0)} className="group mt-8 flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={r2(caseImages[0])} alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="font-display text-xl font-bold leading-snug text-heading">{t.cases.items[0]}</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-brand transition-all group-hover:gap-3">{t.cases.view} <span aria-hidden>→</span></span>
                </div>
              </Link>
              <Link data-reveal href="/caso-de-exito" className="mt-5 inline-flex rounded-full border border-line px-6 py-3 text-sm font-bold text-heading transition hover:border-brand hover:text-brand">{L.moreCases}</Link>
            </div>
            <div>
              <h2 data-reveal className={h2}>{L.news}</h2>
              <Link data-reveal href={newsHref(0)} className="group mt-8 flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={r2(newsImages[0].src)} alt="" fill sizes="(min-width:1024px) 45vw, 100vw" style={{ objectPosition: newsImages[0].pos }} className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <time className="text-xs font-bold uppercase tracking-wider text-brand">{t.news.items[0].date}</time>
                  <h3 className="font-display text-xl font-bold leading-snug text-heading">{t.news.items[0].title}</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-brand transition-all group-hover:gap-3">{t.news.view} <span aria-hidden>→</span></span>
                </div>
              </Link>
              <Link data-reveal href="/noticia" className="mt-5 inline-flex rounded-full border border-line px-6 py-3 text-sm font-bold text-heading transition hover:border-brand hover:text-brand">{L.moreNews}</Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
