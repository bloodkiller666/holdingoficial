"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import { useI18n } from "@/lib/i18n";
import { newsImages, r2 } from "@/lib/r2";
import { newsHref } from "@/lib/newsData";
import { useReveal } from "@/lib/useReveal";

export default function News() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="noticias" className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 data-reveal className="font-display text-4xl font-extrabold uppercase text-brand sm:text-5xl">{t.news.title}</h2>
            <p data-reveal className="mt-3 max-w-xl text-lg text-heading">{t.news.text}</p>
          </div>
          <Link data-reveal href="/noticia" className="rounded-full bg-navy px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand dark:bg-card">{t.news.all}</Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.news.items.map((n, i) => (
            <Link key={i} data-reveal href={newsHref(i)} className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition hover:-translate-y-1.5 hover:shadow-xl">
              <div className="relative aspect-square overflow-hidden">
                <Image src={r2(newsImages[i % newsImages.length].src)} alt="" fill sizes="(min-width:1024px) 25vw, 50vw" style={{ objectPosition: newsImages[i % newsImages.length].pos }} className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <time className="text-xs font-bold uppercase tracking-wider text-brand">{n.date}</time>
                <h3 className="font-display text-lg font-bold leading-snug text-heading">{n.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
