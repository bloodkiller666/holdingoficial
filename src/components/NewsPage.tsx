"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SiteShell from "./SiteShell";
import { useI18n } from "@/lib/i18n";
import { newsImages, r2 } from "@/lib/r2";
import { newsHref } from "@/lib/newsData";
import { prefersReducedMotion, useReveal } from "@/lib/useReveal";

export default function NewsPage() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  const all = t.news.items.map((n, i) => ({ ...n, i, img: newsImages[i % newsImages.length] }));
  const [featured, ...rest] = all;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-np-title] span", { yPercent: 110, duration: 1, ease: "power4.out", stagger: 0.08, delay: 0.1 });
      gsap.from("[data-np-intro]", { opacity: 0, y: 24, duration: 0.9, ease: "power3.out", delay: 0.45 });
      gsap.from("[data-np-crumb]", { opacity: 0, duration: 0.8, delay: 0.2 });
      // Imagen destacada: parallax suave
      gsap.fromTo(
        "[data-np-feat-img]",
        { yPercent: -7, scale: 1.12 },
        { yPercent: 7, scale: 1.12, ease: "none", scrollTrigger: { trigger: "[data-np-feat]", start: "top bottom", end: "bottom top", scrub: true } },
      );
    },
    { scope: root, dependencies: [t.news.title] },
  );

  return (
    <SiteShell>
      <main ref={root}>
        {/* Cabecera de página */}
        <section className="bg-gradient-to-br from-[#c9500f] via-brand to-[#ff7a3c] pb-16 pt-32 text-white lg:pb-24 lg:pt-44">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <nav data-np-crumb aria-label="breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">{t.news.page.home}</Link>
              <span aria-hidden>/</span>
              <span className="font-semibold text-white">{t.news.title}</span>
            </nav>
            <h1 data-np-title className="font-display text-6xl font-extrabold uppercase leading-none sm:text-8xl lg:text-9xl">
              <span className="block overflow-hidden pb-2"><span className="block">{t.news.title}</span></span>
            </h1>
            <p data-np-intro className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">{t.news.page.intro}</p>
          </div>
        </section>

        {/* Noticia destacada */}
        <section className="bg-bg py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <Link data-reveal data-np-feat href={newsHref(featured.i)} className="group grid overflow-hidden rounded-3xl border border-line bg-surface shadow-sm transition-shadow duration-300 hover:shadow-2xl lg:grid-cols-[1.25fr_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[460px]">
                <div data-np-feat-img className="absolute inset-[-8%]">
                  <Image src={r2(featured.img.src)} alt="" fill priority sizes="(min-width:1024px) 60vw, 100vw" style={{ objectPosition: featured.img.pos }} className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5 p-7 sm:p-10 lg:p-14">
                <time className="text-xs font-bold uppercase tracking-wider text-brand">{featured.date}</time>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-heading sm:text-4xl">{featured.title}</h2>
                {featured.excerpt && <p className="text-lg leading-relaxed text-fg">{featured.excerpt}</p>}
                <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white shadow-md shadow-brand/30 transition-all group-hover:gap-3 group-hover:bg-brand-dark">
                  {t.news.view} <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Últimas noticias */}
        <section className="bg-alt pb-20 pt-16 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <h2 data-reveal className="font-display text-3xl font-extrabold uppercase text-brand sm:text-4xl">{t.news.page.latest}</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((n, i) => (
                <Link key={i} data-reveal href={newsHref(n.i)} className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={r2(n.img.src)} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" style={{ objectPosition: n.img.pos }} className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <time className="text-xs font-bold uppercase tracking-wider text-brand">{n.date}</time>
                    <h3 className="font-display text-xl font-bold leading-snug text-heading">{n.title}</h3>
                    {n.excerpt && <p className="line-clamp-3 text-[15px] leading-relaxed text-fg">{n.excerpt}</p>}
                    <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-brand transition-all group-hover:gap-3">{t.news.view} <span aria-hidden>→</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
