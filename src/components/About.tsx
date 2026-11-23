"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useI18n } from "@/lib/i18n";
import { prefersReducedMotion } from "@/lib/useReveal";

export default function About() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  const words = t.about.text.split(" ");

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-about-line]", {
        scaleX: 0, transformOrigin: "left", duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from("[data-about-title]", {
        opacity: 0, x: -60, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
      // El texto se "enciende" palabra por palabra con el scroll
      gsap.fromTo(
        "[data-about-word]",
        { opacity: 0.25 },
        {
          opacity: 1, stagger: 0.05, ease: "none",
          scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 45%", scrub: true },
        },
      );
    },
    { scope: root, dependencies: [t.about.text] },
  );

  return (
    <section ref={root} id="nosotros" className="bg-gradient-to-br from-[#c9500f] via-brand to-[#ff7a3c] py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:px-10">
        <div>
          <h2 data-about-title className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">{t.about.title}</h2>
          <div data-about-line className="mt-5 h-[3px] w-20 bg-white" />
        </div>
        <p className="text-lg leading-relaxed sm:text-xl">
          {words.map((w, i) => (
            <span key={i} data-about-word className="inline-block pr-[0.28em]">{w}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
