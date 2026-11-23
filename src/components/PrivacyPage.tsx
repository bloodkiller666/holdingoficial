"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SiteShell from "./SiteShell";
import PrivacyBook from "./PrivacyBook";
import { useI18n } from "@/lib/i18n";
import { privacyText } from "@/lib/privacyData";
import { prefersReducedMotion } from "@/lib/useReveal";

export default function PrivacyPage() {
  const { locale } = useI18n();
  const t = privacyText[locale];
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-pv-crumb]", { opacity: 0, y: 12, duration: 0.6 }, 0.1)
        .from("[data-pv-title] span", { yPercent: 110, duration: 1 }, 0.2)
        .from("[data-pv-book]", { opacity: 0, y: 60, rotateX: 8, transformPerspective: 1800, duration: 1.3, ease: "power3.out" }, 0.45);
    },
    { scope: root, dependencies: [locale] },
  );

  return (
    <SiteShell>
      <main ref={root} className="relative isolate overflow-hidden bg-bg">
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-[#0a2a5c] via-[#0f3d82] to-transparent dark:from-[#050d1f] dark:via-[#0a1d42]" />
        <div aria-hidden className="absolute -right-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[120px]" />

        <section className="mx-auto max-w-[1400px] px-5 pb-8 pt-24 text-white lg:px-10 lg:pt-28">
          <nav data-pv-crumb aria-label="breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="transition hover:text-white">{t.home}</Link>
            <span aria-hidden>/</span>
            <span className="font-semibold text-white">{t.title}</span>
          </nav>
          <h1 data-pv-title className="font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">
            <span className="block overflow-hidden pb-2"><span className="block">{t.title}</span></span>
          </h1>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:pb-28">
          <div data-pv-book>
            <PrivacyBook />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
