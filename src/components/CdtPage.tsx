"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SiteShell from "./SiteShell";
import { DownloadIcon, Seal } from "./AboutArt";
import { useI18n } from "@/lib/i18n";
import { r2 } from "@/lib/r2";
import { cdtCertFiles, cdtImages, cdtText } from "@/lib/cdtData";
import { prefersReducedMotion, useParallax, useReveal } from "@/lib/useReveal";

gsap.registerPlugin(ScrollTrigger);

const ico = { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 2.6, strokeLinecap: "round", strokeLinejoin: "round", className: "h-full w-full", "aria-hidden": true } as const;

// Iconos de los 4 laboratorios
const icons: ReactNode[] = [
  // Superpave: probeta + gota (análisis del ligante)
  <svg key="a" {...ico}><path d="M18 6h12M20 6v14L10 38a4 4 0 0 0 3.600 6h20.800a4 4 0 0 0 3.600-6L28 20V6" /><path d="M14 32h20" /><path d="M24 24v0" /></svg>,
  // Desempeño mecanístico: prensa
  <svg key="b" {...ico}><path d="M8 6h32M8 42h32M12 6v36M36 6v36" /><rect x="18" y="18" width="12" height="12" rx="2" /><path d="M24 6v12M24 30v12" /></svg>,
  // Control de calidad: lista de verificación
  <svg key="c" {...ico}><rect x="9" y="6" width="30" height="36" rx="4" /><path d="m16 18 3 3 5-6M16 31l3 3 5-6M29 19h4M29 32h4" /></svg>,
  // Diseño de mezclas: capas
  <svg key="d" {...ico}><path d="m24 6 18 9-18 9-18-9z" /><path d="m6 24 18 9 18-9M6 33l18 9 18-9" /></svg>,
];

export default function CdtPage() {
  const { locale } = useI18n();
  const t = cdtText[locale];
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  useParallax(root);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-cd-bg]", { scale: 1.12, duration: 1.8, ease: "power2.out" }, 0)
        .from("[data-cd-crumb]", { opacity: 0, y: 12, duration: 0.6 }, 0.15)
        .from("[data-cd-title] span", { yPercent: 110, duration: 1 }, 0.25)
        .from("[data-cd-lead]", { opacity: 0, y: 18, duration: 0.8 }, 0.55);
    },
    { scope: root, dependencies: [locale] },
  );

  const h2 = "font-display text-4xl font-extrabold leading-[1.1] text-heading sm:text-5xl lg:text-[3.2rem]";
  const body = "text-lg leading-8 text-fg lg:text-xl lg:leading-9";

  const labCard = (l: { title: string; text: string }, n: number) => (
    <article key={n} data-reveal className="group flex gap-5 rounded-3xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-navy/10 sm:p-7">
      <span className="h-14 w-14 shrink-0 rounded-2xl bg-brand/10 p-3 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">{icons[n]}</span>
      <div>
        <h3 className="font-display text-xl font-extrabold leading-snug text-heading">{l.title}</h3>
        <p className="mt-2 leading-7 text-fg">{l.text}</p>
      </div>
    </article>
  );

  return (
    <SiteShell>
      <main id="contenido" tabIndex={-1} ref={root} className="bg-bg">
        {/* Encabezado */}
        <section className="relative isolate flex min-h-[460px] items-end overflow-hidden bg-[#0a2a5c] pt-16 text-white lg:min-h-[600px]">
          <div data-cd-bg className="absolute inset-0 -z-10">
            <div data-parallax="8" className="absolute inset-[-10%]">
              <Image src={r2(cdtImages.hero)} alt="" fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a2a5c]/95 via-[#0a2a5c]/60 to-[#0a2a5c]/20" />
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-12 lg:px-10 lg:pb-20">
            <nav data-cd-crumb aria-label="breadcrumb" className="mb-5 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">{t.home}</Link>
              <span aria-hidden>/</span>
              <span className="font-semibold text-white">{t.title}</span>
            </nav>
            <h1 data-cd-title className="max-w-4xl font-display text-4xl font-extrabold uppercase leading-[1.05] [text-shadow:0_2px_24px_rgb(0_0_0/.35)] sm:text-6xl lg:text-7xl">
              <span className="block overflow-hidden pb-2"><span className="block">{t.title}</span></span>
            </h1>
            <p data-cd-lead className="mt-5 max-w-2xl text-lg text-white/90 [text-shadow:0_1px_14px_rgb(0_0_0/.5)] sm:text-xl">{t.lead}</p>
          </div>
        </section>

        {/* Líderes */}
        <section className="py-16 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] items-start gap-8 px-5 lg:grid-cols-[5fr_6fr] lg:gap-20 lg:px-10">
            <h2 data-reveal className={h2}>{t.leadersTitle}</h2>
            <div>
              <p data-reveal className={`${body} font-medium text-heading`}>{t.leadersP1}</p>
              <p data-reveal className={`${body} mt-5`}>{t.leadersP2}</p>
            </div>
          </div>
        </section>

        {/* Nuestro Centro: laboratorios 1 y 2 */}
        <section className="bg-alt py-16 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <h2 data-reveal className={`${h2} mx-auto max-w-4xl text-center`}>{t.centerTitle}</h2>
            <div className="mt-12 grid items-center gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-14">
              <div data-reveal className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl shadow-navy/10">
                <Image src={r2(cdtImages.lab)} alt="" fill sizes="(min-width:1024px) 48vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
              </div>
              <div className="space-y-5">{t.labsA.map((l, i) => labCard(l, i))}</div>
            </div>
          </div>
        </section>

        {/* Laboratorios 3 y 4 */}
        <section className="py-16 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 lg:grid-cols-2 lg:gap-14 lg:px-10">
            <div className="space-y-5 lg:order-first">{t.labsB.map((l, i) => labCard(l, i + 2))}</div>
            <div data-reveal className="group relative aspect-[3/2] overflow-hidden rounded-[2rem] shadow-xl shadow-navy/10">
              <Image src={r2(cdtImages.research)} alt="" fill sizes="(min-width:1024px) 48vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            </div>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="relative isolate overflow-hidden bg-[#071d44] py-16 text-white lg:py-28">
          <div aria-hidden className="absolute -left-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-brand/20 blur-[120px]" />
          <div aria-hidden className="absolute -bottom-48 -right-32 -z-10 h-[560px] w-[560px] rounded-full bg-[#3571b4]/30 blur-[130px]" />
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 data-reveal className="font-display text-4xl font-extrabold uppercase leading-[1.1] sm:text-5xl lg:text-[3.2rem]">{t.certTitle}</h2>
              <span aria-hidden className="mx-auto mt-5 block h-1 w-16 rounded-full bg-brand" />
              <p data-reveal className="mt-6 text-lg leading-8 text-white/80 lg:text-xl lg:leading-9">{t.certText}</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
              {t.certs.map((c, i) => (
                <article key={i} data-reveal className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand/60 hover:bg-white/[0.08]">
                  <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="h-40 w-40 transition-transform duration-700 ease-out group-hover:rotate-[8deg]"><Seal code={c.code} id={`cd${i}`} /></div>
                  <h3 className="mt-6 font-display text-2xl font-extrabold">{c.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-white/80">{c.text}</p>
                  <a href={r2(encodeURIComponent(cdtCertFiles[i]))} target="_blank" rel="noopener noreferrer" download className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold transition duration-200 hover:border-brand hover:bg-brand active:scale-[0.97]">
                    <DownloadIcon /> {t.download}
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
