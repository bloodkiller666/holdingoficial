"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { JOIN, joinFloat } from "@/lib/joinData";

const Briefcase = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.500 4h3A1.5 1.5 0 0 1 15 5.500V7M3 13h18" />
  </svg>
);

/** Botón flotante que acompaña el scroll: aparece tras el encabezado y abre una tarjeta con el enlace a las vacantes. */
export default function JoinFloat() {
  const { locale } = useI18n();
  const f = joinFloat[locale];
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = () => setShown(window.scrollY > 380);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const click = (e: MouseEvent) => box.current && !box.current.contains(e.target as Node) && setOpen(false);
    window.addEventListener("keydown", key);
    document.addEventListener("mousedown", click);
    return () => {
      window.removeEventListener("keydown", key);
      document.removeEventListener("mousedown", click);
    };
  }, [open]);

  const visible = shown || open;

  return (
    <div
      ref={box}
      className={`fixed bottom-24 right-5 z-40 flex flex-col items-end gap-3 transition duration-500 ease-[cubic-bezier(.23,1,.32,1)] lg:bottom-28 lg:right-8 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
    >
      <div
        role="dialog"
        aria-label={f.title}
        aria-hidden={!open}
        className={`w-[min(20rem,calc(100vw-2.5rem))] origin-bottom-right rounded-3xl border border-line bg-surface p-6 shadow-2xl shadow-navy/20 transition duration-300 ease-[cubic-bezier(.23,1,.32,1)] ${open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="font-display text-xl font-extrabold text-heading">{f.title}</p>
          <button type="button" onClick={() => setOpen(false)} aria-label={f.close} tabIndex={open ? 0 : -1} className="-mr-2 -mt-2 grid h-8 w-8 shrink-0 place-items-center rounded-full text-xl leading-none text-muted transition hover:bg-alt hover:text-heading">×</button>
        </div>
        <p className="mt-2 text-[15px] leading-6 text-fg">{f.text}</p>
        <a href={JOIN.jobs} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark">
          {f.cta} <span aria-hidden>→</span>
        </a>
      </div>

      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="group relative flex items-center gap-3 rounded-full border border-line bg-surface/95 py-2 pl-2 pr-5 text-sm font-bold text-heading shadow-xl shadow-navy/15 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-brand active:scale-[0.97]"
      >
        <span className="relative grid h-10 w-10 place-items-center rounded-full bg-brand text-white">
          <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-brand/40 [animation-duration:2.6s]" />
          <span className="relative"><Briefcase /></span>
        </span>
        {f.label}
      </button>
    </div>
  );
}
