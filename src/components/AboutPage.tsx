"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SiteShell from "./SiteShell";
import Advice from "./Advice";
import { DownloadIcon, LabsArt, ProductsArt, ProfessionalsArt, Seal, StatAwardIcon, StatTonsIcon } from "./AboutArt";
import { useI18n } from "@/lib/i18n";
import { r2 } from "@/lib/r2";
import { aboutFiles, aboutImages, aboutText } from "@/lib/aboutData";
import { prefersReducedMotion, useParallax, useReveal } from "@/lib/useReveal";

gsap.registerPlugin(ScrollTrigger);

const fmt = (n: number) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

// Disposición «bento» de los 5 principios (escritorio, 4 columnas x 2 filas)
const bento = [
  "lg:col-start-1 lg:row-start-1 lg:row-span-2",
  "lg:col-start-2 lg:row-start-1 lg:col-span-2",
  "lg:col-start-4 lg:row-start-1 lg:row-span-2",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
];
const order = [0, 1, 3, 4, 2]; // orden de pintado para que el grid se acomode: 1, 2, 4, 5, 3

const certFiles = [aboutFiles.iso9001, aboutFiles.iso14001, aboutFiles.iso45001, aboutFiles.oeaImportador, aboutFiles.oeaExportador];
const certCols = ["lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2 lg:col-start-2", "lg:col-span-2 lg:col-start-4"];

export default function AboutPage() {
  const { locale } = useI18n();
  const t = aboutText[locale];
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  useParallax(root);

  useGSAP(
    () => {
      const reduce = prefersReducedMotion();
      if (!reduce) {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.from("[data-ab-bg]", { scale: 1.12, duration: 1.8, ease: "power2.out" }, 0)
          .from("[data-ab-crumb]", { opacity: 0, y: 12, duration: 0.6 }, 0.15)
          .from("[data-ab-title] span", { yPercent: 110, duration: 1 }, 0.25)
          .from("[data-ab-lead]", { opacity: 0, y: 18, duration: 0.8 }, 0.55);
      }
      // contadores
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const to = Number(el.dataset.count);
        const prefix = el.dataset.prefix ?? "";
        if (reduce) { el.textContent = prefix + fmt(to); return; }
        const o = { v: 0 };
        gsap.to(o, {
          v: to,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => { el.textContent = prefix + fmt(o.v); },
        });
      });
    },
    { scope: root, dependencies: [locale] },
  );

  const h2 = "font-display text-4xl font-extrabold leading-[1.1] text-heading sm:text-5xl lg:text-[3.4rem]";
  const sols = [ProfessionalsArt, ProductsArt, LabsArt];
  const sectionLead = "mt-5 text-lg leading-8 text-fg lg:text-xl lg:leading-9";

  return (
    <SiteShell>
      <main id="contenido" tabIndex={-1} ref={root} className="bg-bg">
        {/* Encabezado */}
        <section className="relative isolate flex min-h-[460px] items-end overflow-hidden bg-[#0a2a5c] pt-16 text-white lg:min-h-[600px]">
          <div data-ab-bg className="absolute inset-0 -z-10">
            <div data-parallax="8" className="absolute inset-[-10%]">
              <Image src={r2(aboutImages.hero)} alt="" fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a2a5c]/95 via-[#0a2a5c]/55 to-[#0a2a5c]/10" />
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-12 lg:px-10 lg:pb-20">
            <nav data-ab-crumb aria-label="breadcrumb" className="mb-5 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">{t.home}</Link>
              <span aria-hidden>/</span>
              <span className="font-semibold text-white">{locale === "en" ? "About us" : locale === "pt" ? "Sobre nós" : "Sobre nosotros"}</span>
            </nav>
            <h1 data-ab-title className="max-w-4xl font-display text-4xl font-extrabold leading-[1.05] [text-shadow:0_2px_24px_rgb(0_0_0/.35)] sm:text-6xl lg:text-7xl">
              <span className="block overflow-hidden pb-2"><span className="block">{t.title}</span></span>
            </h1>
            <p data-ab-lead className="mt-5 max-w-2xl text-lg text-white/90 [text-shadow:0_1px_14px_rgb(0_0_0/.5)] sm:text-xl">{t.lead}</p>
          </div>
        </section>

        {/* Cifras */}
        <section className="relative z-10 -mt-10 px-5 lg:px-10">
          <div className="mx-auto grid max-w-[1000px] gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-xl shadow-navy/10 sm:grid-cols-2">
            {[
              { Icon: StatTonsIcon, n: 500000, prefix: "+ ", unit: " tn", label: t.stats.tn },
              { Icon: StatAwardIcon, n: 5, prefix: "", unit: "", label: t.stats.certs },
            ].map(({ Icon, n, prefix, unit, label }, i) => (
              <div key={i} data-reveal className="flex items-center gap-5 bg-surface p-6 sm:p-8">
                <span className="h-14 w-14 shrink-0 rounded-2xl bg-brand/10 p-3 text-brand"><Icon /></span>
                <div>
                  <p className="font-display text-4xl font-extrabold leading-none text-brand sm:text-5xl">
                    <span data-count={n} data-prefix={prefix}>{prefix}{fmt(n)}</span>{unit}
                  </p>
                  <p className="mt-2 text-base text-fg">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Historia */}
        <section className="py-16 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <div>
              <h2 data-reveal className={h2}>{t.historyTitle}</h2>
              <p data-reveal className={`${sectionLead} max-w-xl`}>{t.historyText}</p>
            </div>
            <div data-reveal className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl shadow-navy/10">
              <Image src={r2(aboutImages.history)} alt="" fill sizes="(min-width:1024px) 48vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
            </div>
          </div>
        </section>

        {/* Propósito */}
        <section className="px-5 pb-16 lg:px-10 lg:pb-28">
          <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[2rem] bg-alt lg:grid-cols-2">
            <div className="group relative min-h-[280px] overflow-hidden lg:min-h-[460px]">
              <Image src={r2(aboutImages.purpose)} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <h2 data-reveal className={h2}><span className="text-brand">{t.purposeA}</span> {t.purposeB}</h2>
              <p data-reveal className={`${sectionLead} max-w-lg`}>{t.purposeText}</p>
            </div>
          </div>
        </section>

        {/* Principios culturales */}
        <section className="pb-16 lg:pb-28">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16">
              <h2 data-reveal className={`${h2} uppercase`}>{t.principlesTitle}</h2>
              <p data-reveal className="text-lg leading-8 text-fg lg:text-xl lg:leading-9">{t.principlesText}</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:h-[680px] lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
              {order.map((i) => (
                <div key={i} data-reveal className={`group relative isolate min-h-[260px] overflow-hidden rounded-3xl bg-navy text-white ${bento[i]} ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                  <Image src={r2(aboutImages.principles[i])} alt="" fill sizes="(min-width:1024px) 25vw, 50vw" className="-z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a2a5c]/92 via-[#0a2a5c]/35 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="flex h-full flex-col justify-between p-6">
                    <span className="font-display text-sm font-bold tracking-widest text-white/70">0{i + 1}</span>
                    <div className="flex items-end justify-between gap-4">
                      <h3 className="font-display text-xl font-bold leading-snug sm:text-2xl">{t.principles[i]}</h3>
                      <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur transition duration-300 group-hover:translate-x-1 group-hover:bg-brand">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soluciones integrales */}
        <section className="bg-alt py-16 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 data-reveal className={h2}>{t.solTitle}</h2>
              <p data-reveal className={sectionLead}>{t.solText}</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-8">
              {t.sol.map((s, i) => {
                const Art = sols[i];
                return (
                  <article key={i} data-reveal className="group rounded-3xl border border-line bg-surface p-8 text-center transition duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-xl hover:shadow-navy/10">
                    <div className="mx-auto h-36 w-36 text-brand transition-transform duration-500 ease-out group-hover:scale-105"><Art /></div>
                    <h3 className="mt-6 font-display text-2xl font-extrabold text-heading">{s.title}</h3>
                    <p className="mt-3 leading-7 text-fg">{s.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="relative isolate overflow-hidden bg-[#071d44] py-16 text-white lg:py-28">
          <div aria-hidden className="absolute -left-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-brand/20 blur-[120px]" />
          <div aria-hidden className="absolute -bottom-48 -right-32 -z-10 h-[560px] w-[560px] rounded-full bg-[#3571b4]/30 blur-[130px]" />
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 data-reveal className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">{t.certTitle}</h2>
              <span aria-hidden className="mx-auto mt-5 block h-1 w-16 rounded-full bg-brand" />
              <p data-reveal className="mt-6 text-lg leading-8 text-white/80 lg:text-xl lg:leading-9">{t.certText}</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-6">
              {t.certs.map((c, i) => (
                <article key={i} data-reveal className={`group relative flex flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand/60 hover:bg-white/[0.08] ${certCols[i]} ${i === 4 ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md lg:max-w-none" : ""}`}>
                  <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="h-40 w-40 transition-transform duration-700 ease-out group-hover:rotate-[8deg]"><Seal code={c.code} id={`c${i}`} /></div>
                  <h3 className="mt-6 font-display text-xl font-extrabold leading-snug sm:text-2xl">{c.title}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand">{c.sub}</p>
                  <a
                    href={r2(certFiles[i])}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold transition duration-200 hover:border-brand hover:bg-brand active:scale-[0.97]"
                  >
                    <DownloadIcon /> {t.download}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Asesoramiento */}
        <Advice />

        {/* Brochures */}
        <section className="py-16 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-10">
            <div>
              <h2 data-reveal className={h2}>{t.broTitle}</h2>
              <p data-reveal className={`${sectionLead} max-w-md`}>{t.broText}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:gap-8">
              {t.brochures.map((b, i) => (
                <article key={i} data-reveal className="group flex flex-col rounded-3xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-alt">
                    <Image src={r2(aboutImages.brochures[i])} alt={b.title} fill sizes="(min-width:1024px) 22vw, 90vw" className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-brand">{b.sub}</p>
                  <h3 className="mt-1 font-display text-xl font-extrabold leading-snug text-heading">{b.title}</h3>
                  <div className="mt-auto pt-5" />
                  <a
                    href={r2(i === 0 ? aboutFiles.brochureCdt : aboutFiles.brochureProductos)}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark active:scale-[0.97]"
                  >
                    <DownloadIcon /> {t.broDownload}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
