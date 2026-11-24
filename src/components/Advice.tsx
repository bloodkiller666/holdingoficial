"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import { useI18n } from "@/lib/i18n";
import { IMG, r2 } from "@/lib/r2";
import { useParallax, useReveal } from "@/lib/useReveal";

export default function Advice() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  useParallax(root);

  return (
    <section ref={root} id="asesoria" className="relative isolate overflow-hidden py-28 text-white lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div data-parallax="10" className="absolute inset-[-12%]">
          <Image src={r2(IMG.advice)} alt="" fill sizes="100vw" className="object-cover" />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a2a5c]/90 via-[#034ea2]/70 to-transparent" />
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <h2 data-reveal className="max-w-2xl font-display text-4xl font-extrabold sm:text-6xl">{t.advice.title}</h2>
        <p data-reveal className="mt-5 max-w-lg text-xl text-white/90">{t.advice.text}</p>
        <Link data-reveal href="/contacto" className="mt-8 inline-block rounded-full bg-brand px-9 py-4 text-base font-bold shadow-xl shadow-black/30 transition hover:-translate-y-1 hover:bg-brand-dark">{t.advice.cta}</Link>
      </div>
    </section>
  );
}
