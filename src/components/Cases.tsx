"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import CountryBadge from "./CountryBadge";
import { caseHref } from "@/lib/casesData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useI18n } from "@/lib/i18n";
import { caseImages, r2 } from "@/lib/r2";
import { prefersReducedMotion } from "@/lib/useReveal";

export default function Cases() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const distance = () => Math.max(0, (track.current?.scrollWidth ?? 0) - window.innerWidth + 80);
        gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance() + window.innerHeight * 0.3}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        gsap.utils.toArray<HTMLElement>("[data-case-img]").forEach((img) => {
          gsap.fromTo(img, { xPercent: -8 }, {
            xPercent: 8, ease: "none",
            scrollTrigger: { trigger: root.current, start: "top top", end: () => `+=${distance()}`, scrub: true },
          });
        });
      });
      gsap.from("[data-case-head]", {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="casos" className="overflow-hidden bg-alt py-20 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-0">
      <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-end justify-between gap-x-6 gap-y-8 px-5 lg:px-10">
        <div>
          <h2 data-case-head className="font-display text-4xl font-extrabold uppercase text-brand sm:text-5xl">{t.cases.title}</h2>
          <p data-case-head className="mt-3 max-w-xl text-lg text-heading">{t.cases.text}</p>
        </div>
        <Link data-case-head href="/caso-de-exito" className="rounded-full bg-navy px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand dark:bg-card">{t.cases.all}</Link>
      </div>

      <div className="no-scrollbar mt-14 overflow-x-auto px-5 pb-6 lg:mt-16 lg:overflow-visible lg:px-10 lg:pb-0">
        <div ref={track} className="flex w-max gap-6 will-change-transform">
          {t.cases.items.map((title, i) => (
            <article key={title} className="group relative w-[82vw] shrink-0 overflow-hidden rounded-3xl bg-surface shadow-lg sm:w-[420px] lg:w-[460px]">
              <div className="relative aspect-[16/11] overflow-hidden">
                <div data-case-img className="absolute inset-[-10%]">
                  <Image src={r2(caseImages[i % caseImages.length])} alt="" fill sizes="460px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <CountryBadge name={t.cases.country} className="absolute left-4 top-4" />
              </div>
              <div className="flex min-h-44 flex-col justify-between gap-5 p-6">
                <h3 className="font-display text-xl font-bold leading-snug text-heading">{title}</h3>
                <Link href={caseHref(i)} className="inline-flex items-center gap-2 text-sm font-bold text-brand transition-all group-hover:gap-3 after:absolute after:inset-0">{t.cases.view} <span aria-hidden>→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
