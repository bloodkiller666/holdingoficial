"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import { useTheme } from "@/lib/theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useI18n } from "@/lib/i18n";
import { LOCALES } from "@/lib/dictionaries";
import { solutionChildren } from "@/lib/menuData";
import { solutionHref, solutionIndex, solutionTabHref } from "@/lib/solutionsData";
import { productHref, productTabHref } from "@/lib/productsData";
import { IMG, r2 } from "@/lib/r2";
import { useNavTo } from "@/lib/useNavTo";
import MobileMenu from "./MobileMenu";

type Mega = "solutions" | "products" | "know" | null;

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- evita desajuste de hidratación del tema
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      aria-label={t.nav.theme}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-heading transition hover:border-brand hover:text-brand"
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
      )}
    </button>
  );
}

function LanguageSelector() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  const current = LOCALES.find((l) => l.code === locale)!;
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
        onClick={() => setOpen((o) => !o)}
        className="flex h-9 items-center gap-1.5 rounded-full border border-line px-3 text-xs font-semibold text-heading transition hover:border-brand hover:text-brand"
      >
        {current.label}
        <svg width="9" height="9" viewBox="0 0 10 6" fill="currentColor"><path d="M0 0h10L5 6z" /></svg>
      </button>
      {open && (
        <ul role="listbox" className="absolute right-0 top-11 z-50 min-w-36 overflow-hidden rounded-xl border border-line bg-surface shadow-xl">
          {LOCALES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === locale}>
              <button
                type="button"
                onClick={() => { setLocale(l.code); setOpen(false); }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition hover:bg-alt ${l.code === locale ? "font-bold text-brand" : "text-fg"}`}
              >
                {l.name}<span className="text-xs opacity-60">{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const { t, locale } = useI18n();
  const [mega, setMega] = useState<Mega>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      if (Math.abs(y - last) > 6) {
        setHidden(y > 240 && y > last);
        last = y;
      }
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const navTo = useNavTo();
  const jump = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const hash = e.currentTarget.getAttribute("href") ?? "";
    if (hash.startsWith("#") && hash.length > 1) {
      e.preventDefault();
      setMega(null);
      navTo(hash);
    }
  };

  useGSAP(() => {
    gsap.from(barRef.current, { yPercent: -100, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.1 });
  }, []);

  useGSAP(() => {
    if (mega && megaRef.current) {
      gsap.fromTo(megaRef.current, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(megaRef.current.querySelectorAll("[data-mega-col]"), { opacity: 0, y: 14 }, { opacity: 1, y: 0, stagger: 0.07, duration: 0.4, ease: "power2.out", delay: 0.05, clearProps: "opacity,transform" });
    }
  }, { dependencies: [mega] });

  const openMega = (m: Mega) => { clearTimeout(closeTimer.current); setMega(m); };
  const delayClose = () => { closeTimer.current = setTimeout(() => setMega(null), 160); };

  const nav = t.nav;
  const linkCls = "relative whitespace-nowrap px-1 py-2 text-[13px] font-bold tracking-wide text-heading transition-colors hover:text-brand after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:after:scale-x-100";

  const knowItems = [
    { name: nav.aboutUs, href: "/nosotros" },
    { name: nav.cdt, href: "/centro-de-desarrollo-tecnologico" },
    { name: nav.sustain, href: "/sostenibilidad" },
    { name: nav.join, href: "/unete-a-nosotros" },
  ];

  const productGroups = t.products.tabs.map((tab, i) => ({
    tab,
    items: t.products.items.filter((p) => p.tab === i),
  }));

  return (
    <>
    <header ref={barRef} className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,translate] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${hidden && !mega ? "-translate-y-full" : ""} ${scrolled || mega ? "border-line bg-bg/95 shadow-sm backdrop-blur" : "border-transparent bg-bg/90 backdrop-blur"}`}>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 lg:px-10">
        <div className="flex shrink-0 items-center gap-3">
          <button type="button" aria-label={nav.menu} onClick={() => setMobile(true)} className="grid h-11 w-11 place-items-center rounded-full text-heading transition-transform duration-150 active:scale-95 active:bg-alt xl:hidden">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
          <a onClick={jump} href="#top" aria-label="TDM Asfaltos" className="block shrink-0">
            <Image src={r2(IMG.logo)} alt="TDM Asfaltos" width={52} height={52} unoptimized priority className="h-12 w-12 min-w-12 shrink-0 transition-transform duration-200 ease-out hover:scale-105" />
          </a>
        </div>

        <nav className="hidden items-center gap-6 xl:flex 2xl:gap-8" onMouseLeave={delayClose}>
          <Link href="/solucion" className={linkCls} onClick={() => setMega(null)} onMouseEnter={() => openMega("solutions")} onFocus={() => openMega("solutions")}>{nav.solutions}</Link>
          <Link href="/productos" className={linkCls} onClick={() => setMega(null)} onMouseEnter={() => openMega("products")} onFocus={() => openMega("products")}>{nav.products}</Link>
          <Link href="/caso-de-exito" className={linkCls} onMouseEnter={() => openMega(null)}>{nav.cases}</Link>
          <button type="button" aria-expanded={mega === "know"} className={linkCls} onMouseEnter={() => openMega("know")} onFocus={() => openMega("know")}>{nav.know}</button>
          <Link href="/contacto" className={linkCls} onMouseEnter={() => openMega(null)}>{nav.contact}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contacto" className="rounded-full bg-brand px-5 py-2 text-xs font-bold text-white shadow-md shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark">{t.topbar.contact}</Link>
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>

      {mega && (
        <div ref={megaRef} onMouseEnter={() => openMega(mega)} onMouseLeave={delayClose} className="absolute inset-x-0 top-full hidden border-t border-line bg-bg shadow-2xl xl:block">
          <div className={`mx-auto grid max-w-[1400px] gap-10 px-10 py-10 ${mega === "know" ? "grid-cols-4 gap-5" : "grid-cols-3"}`}>
            {mega === "know" && knowItems.map((it, i) => (
              <div key={it.name} data-mega-col><Link href={it.href} onClick={() => setMega(null)} className="group relative flex h-full min-h-40 flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-navy/10">
                <span className="font-display text-sm font-bold tracking-widest text-brand">0{i + 1}</span>
                <span className="flex items-end justify-between gap-3">
                  <span className="font-display text-lg font-extrabold leading-snug text-heading">{it.name}</span>
                  <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-alt text-heading transition duration-300 group-hover:translate-x-1 group-hover:bg-brand group-hover:text-white">→</span>
                </span>
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
              </Link></div>
            ))}
            {mega === "solutions" && t.solutions.items.map((cat, i) => (
              <div key={cat} data-mega-col>
                <Link onClick={() => setMega(null)} href={solutionTabHref(i)} className="mb-3 block font-display text-lg font-bold text-brand">{cat}</Link>
                <ul className="space-y-1.5">
                  {solutionChildren[locale][i].map((s, k) => (
                    <li key={s}><Link onClick={() => setMega(null)} href={solutionHref(solutionIndex(i, k))} className="inline-block text-sm text-fg transition hover:translate-x-1 hover:text-brand">{s}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
            {mega === "products" && productGroups.map((g) => (
              <div key={g.tab} data-mega-col>
                <Link onClick={() => setMega(null)} href={productTabHref(productGroups.indexOf(g))} className="mb-3 block font-display text-lg font-bold text-brand">{g.tab}</Link>
                <ul className="space-y-1.5">
                  {g.items.map((p) => (
                    <li key={p.name}><Link onClick={() => setMega(null)} href={productHref(t.products.items.indexOf(p))} className="inline-block text-sm text-fg transition hover:translate-x-1 hover:text-brand">{p.name}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

    </header>
      <MobileMenu open={mobile} onClose={() => setMobile(false)} />
    </>
  );
}
