"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useI18n } from "@/lib/i18n";
import { IMG, r2 } from "@/lib/r2";
import { prefersReducedMotion, useReveal } from "@/lib/useReveal";

export default function Guarantee() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(0);
  useReveal(root);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-g-frame]",
        { clipPath: "inset(18% 12% 18% 12% round 28px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 24px)", ease: "none",
          scrollTrigger: { trigger: root.current, start: "top 85%", end: "top 25%", scrub: true },
        },
      );
      gsap.fromTo(
        "[data-g-img]",
        { yPercent: -8, scale: 1.15 },
        { yPercent: 8, scale: 1.05, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} id="propuesta" className="bg-alt py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div data-g-frame className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <div data-g-img className="absolute inset-[-8%]">
            <Image src={r2(IMG.guarantee)} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>

        <div>
          <h2 data-reveal className="font-display text-4xl font-extrabold uppercase text-brand sm:text-5xl">{t.guarantee.title}</h2>
          <div data-reveal className="mt-6 border-t border-navy">
            {t.guarantee.items.map((item, i) => (
              <AccordionItem key={item.title} title={item.title} text={item.text} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ title, text, open, onToggle }: { title: string; text: string; open: boolean; onToggle: () => void }) {
  const body = useRef<HTMLDivElement>(null);
  const icon = useRef<SVGSVGElement>(null);
  const first = useRef(true);

  useGSAP(() => {
    const dur = first.current ? 0 : 0.5;
    first.current = false;
    gsap.to(body.current, { height: open ? "auto" : 0, opacity: open ? 1 : 0, duration: dur, ease: "power3.inOut" });
    gsap.to(icon.current, { rotate: open ? 180 : 0, duration: dur, ease: "power3.inOut", transformOrigin: "50% 50%" });
  }, { dependencies: [open] });

  return (
    <div className="border-b border-navy">
      <button type="button" aria-expanded={open} onClick={onToggle} className="flex w-full items-center justify-between gap-4 py-6 text-left">
        <h3 className="font-display text-2xl font-bold uppercase text-heading sm:text-3xl">{title}</h3>
        <svg ref={icon} width="18" height="18" viewBox="0 0 10 6" className="shrink-0 text-navy" fill="currentColor"><path d="M0 0h10L5 6z" /></svg>
      </button>
      <div ref={body} style={{ height: 0, opacity: 0, overflow: "hidden" }}>
        <p className="pb-6 text-lg leading-relaxed text-fg">{text}</p>
      </div>
    </div>
  );
}
