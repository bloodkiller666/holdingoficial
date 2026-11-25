"use client";

import { Fragment, useRef, useState } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SiteShell from "./SiteShell";
import CountryBadge from "./CountryBadge";
import { ArrowLeftIcon, LinkedInIcon, ShareIcon, WhatsAppIcon } from "./icons";
import { useI18n } from "@/lib/i18n";
import { IMG, caseImages, r2 } from "@/lib/r2";
import { caseCategories, caseContent, caseHref, caseInlineImages, caseLabels } from "@/lib/casesData";
import { prefersReducedMotion, useParallax, useReveal } from "@/lib/useReveal";

export default function CaseArticle({ index }: { index: number }) {
  const { t, locale, href } = useI18n();
  const router = useRouter();
  const root = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  useReveal(root);
  useParallax(root);

  const L = caseLabels[locale];
  const title = t.cases.items[index];
  const c = caseContent[locale][index];
  const inline = caseInlineImages[index];
  const total = t.cases.items.length;
  const related = [1, 2, 3].map((k) => (index + k) % total);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-ar-top]", { opacity: 0, y: 16, duration: 0.6, stagger: 0.08 })
        .from("[data-ar-title] span", { yPercent: 105, duration: 0.9, stagger: 0.04 }, 0.1)
        .from("[data-ar-hero]", { opacity: 0, y: 40, duration: 1 }, 0.35);
    },
    { scope: root, dependencies: [locale, index] },
  );

  const back = () => (window.history.length > 1 ? router.back() : router.push(href("/caso-de-exito")));
  const url = () => window.location.href;
  const open = (href: string) => window.open(href, "_blank", "noopener,noreferrer");
  const share = async () => {
    try {
      if (navigator.share) return await navigator.share({ title, url: url() });
      await navigator.clipboard.writeText(url());
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* el usuario canceló */
    }
  };

  const chip = "inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold text-heading transition-colors hover:border-brand hover:text-brand";
  const h2 = "font-display text-2xl font-extrabold uppercase text-brand sm:text-3xl";
  const p = "text-lg leading-8 text-fg";

  const section = (heading: string, b: { text?: string; items?: string[]; after?: string }) => (
    <div data-reveal>
      <h2 className={h2}>{heading}</h2>
      <div className="mt-4 space-y-4">
        {b.text && <p className={p}>{b.text}</p>}
        {b.items && (
          <ul className="space-y-3">
            {b.items.map((it, k) => (
              <li key={k} className={`${p} flex gap-3`}>
                <span aria-hidden className="mt-3 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        )}
        {b.after && <p className={p}>{b.after}</p>}
      </div>
    </div>
  );

  return (
    <SiteShell>
      <main id="contenido" tabIndex={-1} ref={root} className="bg-bg">
        {/* Cabecera */}
        <section className="pb-10 pt-28 lg:pt-36">
          <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
            <div data-ar-top className="flex flex-wrap items-center justify-between gap-4">
              <button type="button" onClick={back} className={chip}>
                <ArrowLeftIcon size={16} /> {L.back}
              </button>
              <nav aria-label="breadcrumb" className="flex min-w-0 items-center gap-2 text-sm text-muted">
                <Link href="/" className="transition hover:text-brand">{L.home}</Link>
                <span aria-hidden>/</span>
                <Link href="/caso-de-exito" className="transition hover:text-brand">{L.title}</Link>
              </nav>
            </div>

            <div data-ar-top className="mt-10 flex flex-wrap items-center gap-3 text-sm">
              {caseCategories[index].map((id) => (
                <span key={id} className="rounded-full bg-brand/10 px-3.5 py-1.5 font-bold uppercase tracking-wide text-brand">{L.filters[id]}</span>
              ))}
              <CountryBadge name={t.cases.country} />
            </div>

            <h1 data-ar-title className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-heading sm:text-5xl lg:text-6xl">
              {title.split(" ").map((w, i) => (
                <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom"><span className="inline-block">{w}</span></span>
              ))}
            </h1>
          </div>

          <div data-ar-hero className="mx-auto mt-10 max-w-[1100px] px-5 lg:px-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-alt shadow-xl shadow-navy/10 sm:aspect-[2/1]">
              <div data-parallax="6" className="absolute inset-[-7%]">
                <Image src={r2(caseImages[index])} alt="" fill priority sizes="(min-width:1100px) 1020px, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Cuerpo + CTA lateral */}
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto grid max-w-[1100px] gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16 lg:px-10">
            <article className="space-y-10">
              <Fragment>
                {section(L.problem, c.problem)}
                {section(L.solution, c.solution)}
                {inline && (
                  <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg shadow-navy/10">
                    <Image src={r2(inline)} alt="" fill sizes="(min-width:1024px) 720px, 100vw" className="object-cover" />
                  </div>
                )}
                {section(L.benefits, c.benefits)}
              </Fragment>

              <div data-reveal className="flex flex-wrap items-center gap-3 border-t border-line pt-8">
                <span className="mr-1 font-display text-lg font-bold text-heading">{L.share}</span>
                <button type="button" onClick={() => open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url())}`)} className={chip}><LinkedInIcon size={16} /> LinkedIn</button>
                <button type="button" onClick={() => open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url()}`)}`)} className={chip}><WhatsAppIcon size={16} /> WhatsApp</button>
                <button type="button" onClick={share} className={chip}><ShareIcon size={16} /> {copied ? L.copied : L.share.replace(":", "")}</button>
              </div>
            </article>

            <aside>
              <div data-reveal className="relative isolate overflow-hidden rounded-3xl text-white lg:sticky lg:top-24">
                <Image src={r2(IMG.advice)} alt="" fill sizes="340px" className="-z-10 object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a2a5c] via-[#0a2a5c]/80 to-[#034ea2]/40" />
                <div className="flex min-h-[340px] flex-col justify-end gap-4 p-7">
                  <h2 className="font-display text-3xl font-extrabold leading-tight">{L.adviceTitle}</h2>
                  <p className="text-white/85">{L.adviceText}</p>
                  <Link href="/contacto" className="mt-2 inline-block w-fit rounded-full bg-brand px-7 py-3 text-sm font-bold shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-brand-dark">{L.adviceCta}</Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Relacionados */}
        <section className="bg-alt py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <h2 data-reveal className="font-display text-3xl font-extrabold uppercase text-brand sm:text-4xl">{L.related}</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((i) => (
                <Link key={i} data-reveal href={caseHref(i)} className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={r2(caseImages[i])} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="font-display text-xl font-bold leading-snug text-heading">{t.cases.items[i]}</h3>
                    <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-brand transition-all group-hover:gap-3">{t.cases.view} <span aria-hidden>→</span></span>
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
