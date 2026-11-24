"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "@/components/Link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SiteShell from "./SiteShell";
import JoinFloat from "./JoinFloat";
import { useI18n } from "@/lib/i18n";
import { r2 } from "@/lib/r2";
import { lenisRef } from "@/lib/lenis";
import { JOIN, joinImages, joinText } from "@/lib/joinData";
import { prefersReducedMotion, useParallax, useReveal } from "@/lib/useReveal";

function VideoModal({ onClose, label }: { onClose: () => void; label: string }) {
  useEffect(() => {
    lenisRef.current?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lenisRef.current?.start();
    };
  }, [onClose]);

  return createPortal(
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <iframe src={`https://www.youtube.com/embed/${JOIN.video}?autoplay=1&rel=0`} title="TDM Asfaltos" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" />
      </div>
      <button type="button" onClick={onClose} aria-label={label} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-2xl leading-none text-white transition hover:bg-white/30 active:scale-95">×</button>
    </div>,
    document.body,
  );
}

export default function JoinPage() {
  const { locale } = useI18n();
  const t = joinText[locale];
  const root = useRef<HTMLElement>(null);
  const [video, setVideo] = useState(false);
  useReveal(root);
  useParallax(root);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-jn-bg]", { scale: 1.15, duration: 1.8, ease: "power2.out" }, 0)
        .from("[data-jn-crumb]", { opacity: 0, y: 12, duration: 0.6 }, 0.15)
        .from("[data-jn-title] span", { yPercent: 115, duration: 1 }, 0.25)
        .from("[data-jn-lead]", { opacity: 0, y: 18, duration: 0.8 }, 0.55);
    },
    { scope: root, dependencies: [locale] },
  );

  const h2 = "font-display text-4xl font-extrabold leading-[1.1] text-heading sm:text-5xl lg:text-6xl";
  const lead = "mt-6 max-w-2xl text-xl leading-9 text-fg lg:text-2xl lg:leading-10";

  return (
    <SiteShell>
      <main ref={root} className="bg-bg">
        {/* Encabezado */}
        <section className="relative isolate flex min-h-[420px] items-end overflow-hidden bg-[#0a2a5c] pt-16 text-white lg:min-h-[540px]">
          <div data-jn-bg className="absolute inset-0 -z-10">
            <div data-parallax="8" className="absolute inset-[-10%]">
              <Image src={r2(joinImages.hero)} alt="" fill priority sizes="100vw" className="object-cover object-[50%_75%]" />
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a2a5c]/90 via-[#0a2a5c]/25 to-transparent" />
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-12 lg:px-10 lg:pb-16">
            <nav data-jn-crumb aria-label="breadcrumb" className="mb-5 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">{t.home}</Link>
              <span aria-hidden>/</span>
              <span className="font-semibold text-white">{t.title}</span>
            </nav>
            <h1 data-jn-title className="[text-shadow:0_2px_24px_rgb(0_0_0/.35)] font-display text-5xl font-extrabold uppercase leading-none sm:text-7xl lg:text-8xl">
              <span className="block overflow-hidden pb-2"><span className="block">{t.title}</span></span>
            </h1>
            <p data-jn-lead className="[text-shadow:0_1px_14px_rgb(0_0_0/.5)] mt-5 max-w-2xl text-lg text-white/90 sm:text-xl">{t.lead}</p>
          </div>
        </section>

        {/* Talento */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <div>
              <h2 data-reveal className={h2}>{t.talentTitle}</h2>
              <p data-reveal className={lead}>{t.talentText}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 pb-8 sm:gap-4">
              {joinImages.team.map((src, i) => (
                <div key={i} data-reveal className={`group relative aspect-[4/5] overflow-hidden rounded-3xl bg-alt ${i % 2 ? "translate-y-6 sm:translate-y-8" : ""}`}>
                  <Image src={r2(src)} alt="" fill sizes="(min-width:1024px) 22vw, 45vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principios */}
        <section className="bg-alt py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <div data-reveal className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-3xl bg-surface shadow-lg shadow-navy/10">
              <Image src={r2(joinImages.principles)} alt={t.principlesTitle} fill sizes="(min-width:1024px) 520px, 90vw" className="object-contain p-2" />
            </div>
            <div>
              <h2 data-reveal className={h2}>{t.principlesTitle}</h2>
              <p data-reveal className={lead}>{t.principlesText}</p>
            </div>
          </div>
        </section>

        {/* Historias */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
            <div className="text-center">
              <p data-reveal className="text-sm font-bold uppercase tracking-[0.2em] text-brand">{t.storiesKicker}</p>
              <h2 data-reveal className={`${h2} mt-3`}>{t.storiesTitle}</h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
              {t.stories.map((s, i) => (
                <button key={i} type="button" data-reveal onClick={() => setVideo(true)} aria-label={`${t.play} ${s.name}`} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy text-left shadow-lg shadow-navy/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.99]">
                  <Image src={r2(joinImages.stories[i])} alt="" fill sizes="(min-width:640px) 45vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#0a2a5c]/90 via-[#0a2a5c]/20 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-white shadow-lg transition duration-300 group-hover:scale-110">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="block font-display text-2xl font-extrabold">{s.name}</span>
                    <span className="mt-1 block text-sm text-white/85">{s.role}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="grid items-stretch overflow-hidden rounded-[2rem] bg-navy text-white lg:grid-cols-2">
              <div className="flex flex-col items-start justify-center p-8 sm:p-12 lg:p-16">
                <h2 data-reveal className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">{t.ctaTitle}</h2>
                <p data-reveal className="mt-5 max-w-lg text-lg leading-8 text-white/85">{t.ctaText}</p>
                <a data-reveal href={JOIN.jobs} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-brand-dark">
                  {t.ctaButton} <span aria-hidden>→</span>
                </a>
              </div>
              <div className="group relative min-h-[260px] overflow-hidden lg:min-h-[420px]">
                <Image src={r2(joinImages.cta)} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <JoinFloat />
      {video && <VideoModal onClose={() => setVideo(false)} label={t.closeVideo} />}
    </SiteShell>
  );
}
