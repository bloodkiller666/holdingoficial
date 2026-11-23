"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useI18n } from "@/lib/i18n";
import { IMG, r2 } from "@/lib/r2";
import { prefersReducedMotion } from "@/lib/useReveal";

export default function Hero() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  const words = t.hero.title.split(" ");

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-hero-bg]", { scale: 1.25, duration: 2.2, ease: "power2.out" }, 0)
        .from("[data-hero-word]", { yPercent: 115, duration: 1.1, stagger: 0.12 }, 0.4)
        .from("[data-hero-sub]", { opacity: 0, y: 30, duration: 1 }, 0.9)
        .from("[data-hero-scroll]", { opacity: 0, y: -10, duration: 0.8 }, 1.4);

      gsap.to("[data-hero-bg]", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-hero-content]", {
        yPercent: -25,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom 30%", scrub: true },
      });
    },
    { scope: root, dependencies: [t.hero.title] },
  );

  return (
    <section ref={root} id="top" className="relative flex min-h-[640px] h-svh items-end overflow-hidden bg-[#0b1630] pt-16">
      <div data-hero-bg className="absolute inset-0 will-change-transform">
        <Image src={r2(IMG.hero)} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
      <div data-hero-content className="relative mx-auto w-full max-w-[1400px] px-5 pb-24 lg:px-10 lg:pb-32">
        <h1 className="font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-7xl lg:text-8xl">
          {words.map((w, i) => (
            <span key={`${w}-${i}`} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <span data-hero-word className="inline-block">{w}</span>
            </span>
          ))}
        </h1>
        <p data-hero-sub className="mt-6 max-w-xl text-xl font-medium leading-snug text-white/90 sm:text-2xl">
          {t.hero.subtitle}
        </p>
      </div>
      <a href="#nosotros" data-hero-scroll aria-hidden tabIndex={-1} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <span className="block h-12 w-7 rounded-full border-2 border-white/70 p-1">
          <span className="block h-2 w-full animate-bounce rounded-full bg-white" />
        </span>
      </a>
    </section>
  );
}
