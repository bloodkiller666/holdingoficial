"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SiteShell from "./SiteShell";
import { useI18n } from "@/lib/i18n";
import { r2 } from "@/lib/r2";
import { sustainImages, sustainText } from "@/lib/sustainData";
import { prefersReducedMotion, useParallax, useReveal } from "@/lib/useReveal";

gsap.registerPlugin(ScrollTrigger);

/** Globo con hoja: se dibuja trazo a trazo al entrar en pantalla. */
function GlobeLeaf() {
  return (
    <svg data-draw viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-full w-full">
      <circle cx="60" cy="60" r="46" />
      <path d="M14 60h92M60 14c-18 14-18 78 0 92M60 14c18 14 18 78 0 92" opacity=".45" />
      <path d="M44 84c-2-22 10-38 38-42 2 26-8 40-34 44" fill="currentColor" fillOpacity=".15" stroke="var(--color-brand)" />
      <path d="M46 82c8-12 18-22 30-30" stroke="var(--color-brand)" />
    </svg>
  );
}

export default function SustainPage() {
  const { locale } = useI18n();
  const t = sustainText[locale];
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  useParallax(root);

  useGSAP(
    () => {
      const reduce = prefersReducedMotion();
      if (!reduce) {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.from("[data-su-bg]", { scale: 1.12, duration: 1.8, ease: "power2.out" }, 0)
          .from("[data-su-crumb]", { opacity: 0, y: 12, duration: 0.6 }, 0.15)
          .from("[data-su-title] span", { yPercent: 110, duration: 1 }, 0.25)
          .from("[data-su-lead]", { opacity: 0, y: 18, duration: 0.8 }, 0.55);

        // la tarjeta de la imagen grande sube con un ligero desfase respecto al fondo
        gsap.from("[data-su-card]", {
          y: 80,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-su-panel]", start: "top 65%", once: true },
        });

        // trazo del globo
        gsap.utils.toArray<SVGGeometryElement>("[data-draw] path, [data-draw] circle").forEach((el) => {
          const len = el.getTotalLength();
          if (!len) return;
          gsap.fromTo(el, { strokeDasharray: len, strokeDashoffset: len }, {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power2.inOut",
            scrollTrigger: { trigger: "[data-draw]", start: "top 85%", once: true },
          });
        });
      }
    },
    { scope: root, dependencies: [locale] },
  );

  const h2 = "font-display text-4xl font-extrabold leading-[1.1] text-heading sm:text-5xl lg:text-[3.2rem]";

  return (
    <SiteShell>
      <main ref={root} className="bg-bg">
        {/* Encabezado */}
        <section className="relative isolate flex min-h-[460px] items-end overflow-hidden bg-[#0a2a5c] pt-16 text-white lg:min-h-[600px]">
          <div data-su-bg className="absolute inset-0 -z-10">
            <div data-parallax="8" className="absolute inset-[-10%]">
              <Image src={r2(sustainImages.hero)} alt="" fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a2a5c]/92 via-[#0a2a5c]/45 to-[#0a2a5c]/10" />
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-12 lg:px-10 lg:pb-20">
            <nav data-su-crumb aria-label="breadcrumb" className="mb-5 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">{t.home}</Link>
              <span aria-hidden>/</span>
              <span className="font-semibold text-white">{t.title}</span>
            </nav>
            <h1 data-su-title className="font-display text-5xl font-extrabold uppercase leading-none [text-shadow:0_2px_24px_rgb(0_0_0/.35)] sm:text-7xl lg:text-8xl">
              <span className="block overflow-hidden pb-2"><span className="block">{t.title}</span></span>
            </h1>
            <p data-su-lead className="mt-5 max-w-2xl text-lg text-white/90 [text-shadow:0_1px_14px_rgb(0_0_0/.5)] sm:text-xl">{t.lead}</p>
          </div>
        </section>

        {/* Asfaltos modificados */}
        <section className="py-16 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <div>
              <h2 data-reveal className={h2}>{t.s2Title}</h2>
              <p data-reveal className="mt-6 font-display text-xl font-bold text-brand lg:text-2xl">{t.s2Kicker}</p>
              <p data-reveal className="mt-4 max-w-xl text-lg leading-8 text-fg lg:text-xl lg:leading-9">{t.s2P1}</p>
              <p data-reveal className="mt-4 max-w-xl text-lg leading-8 text-fg lg:text-xl lg:leading-9">
                {t.s2P2a}<strong className="font-bold text-heading">{t.s2P2b}</strong>
              </p>
            </div>
            <div data-reveal className="group relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-xl shadow-navy/10">
              <Image src={r2(sustainImages.polymers)} alt="" fill sizes="(min-width:1024px) 48vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            </div>
          </div>
        </section>

        {/* Promovemos... (panel grande) */}
        <section className="bg-alt py-16 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <h2 data-reveal className={`${h2} mx-auto max-w-4xl text-center`}>{t.s3Title}</h2>
            <div data-su-panel className="relative isolate mt-12 flex min-h-[460px] items-end overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/15 lg:mt-16 lg:min-h-[600px]">
              <div className="absolute inset-0 -z-10">
                <div data-parallax="10" className="absolute inset-[-12%]">
                  <Image src={r2(sustainImages.footprint)} alt="" fill sizes="(min-width:1400px) 1320px, 100vw" className="object-cover" />
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a2a5c]/85 via-transparent to-transparent" />
              <div data-su-card className="m-5 max-w-xl rounded-3xl border border-white/20 bg-white/15 p-7 text-white shadow-xl backdrop-blur-md sm:m-8 sm:p-9 lg:m-12">
                <span aria-hidden className="mb-4 block h-1 w-12 rounded-full bg-brand" />
                <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">{t.s3Card}</h3>
                <p className="mt-3 text-base leading-7 text-white/90 sm:text-lg">{t.s3Text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impulsamos */}
        <section className="px-5 py-16 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 overflow-hidden rounded-[2rem] bg-navy p-8 text-white sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-16 lg:p-16">
            <div className="mx-auto h-40 w-40 text-white lg:h-56 lg:w-56"><GlobeLeaf /></div>
            <div>
              <h2 data-reveal className="font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">{t.s4Title}</h2>
              <p data-reveal className="mt-6 max-w-3xl text-lg leading-8 text-white/85 lg:text-xl lg:leading-9">{t.s4Text}</p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
