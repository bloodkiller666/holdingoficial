"use client";

import { Fragment, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useI18n } from "@/lib/i18n";
import { IMG, r2 } from "@/lib/r2";
import { SECTIONS, legalPages, privacyText, type Block } from "@/lib/privacyData";
import { prefersReducedMotion } from "@/lib/useReveal";

/* ---------- utilidades ---------- */

const rich = (s: string): ReactNode[] =>
  s.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i} className="font-bold text-[#0a2a5c] dark:text-white">{part}</strong> : <Fragment key={i}>{part}</Fragment>));

const pad = (n: number) => String(n + 1).padStart(2, "0");

type Face = { kind: "cover" | "toc" | "legal" | "back"; legal?: number };

/* ---------- páginas ---------- */

function PageShell({ n, side, children, label }: { n: number; side: "l" | "r"; children: ReactNode; label: string }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#fbf7ee] text-[#2b3140] dark:bg-[#18212f] dark:text-[#d7deea]">
      {/* sombra del lomo */}
      <div aria-hidden className={`pointer-events-none absolute inset-y-0 z-10 w-[14%] ${side === "r" ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l"} from-black/[0.16] via-black/[0.04] to-transparent dark:from-black/40`} />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-multiply dark:opacity-[0.12] dark:mix-blend-soft-light" style={{ backgroundImage: "radial-gradient(rgba(120,100,60,.10) 1px, transparent 1px)", backgroundSize: "3px 3px" }} />
      <header className={`relative z-20 flex items-center justify-between px-8 pt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8b8576] dark:text-[#7d89a0] ${side === "l" ? "" : "flex-row-reverse"}`}>
        <span>{label}</span>
        <span aria-hidden className="h-px flex-1 mx-4 bg-[#d9d2c1] dark:bg-white/10" />
      </header>
      <div data-lenis-prevent className="book-scroll relative z-20 min-h-0 flex-1 overflow-y-auto px-8 pb-3 pt-4 sm:px-10">{children}</div>
      <footer className={`relative z-20 flex px-8 pb-5 text-xs font-semibold text-[#a29b88] dark:text-[#6c788f] ${side === "l" ? "justify-start" : "justify-end"}`}>
        <span className="font-display tracking-widest">{n}</span>
      </footer>
    </div>
  );
}

function BlockView({ b }: { b: Block }) {
  if (b.k === "h")
    return (
      <div className="mb-2.5 mt-5 first:mt-0">
        <div className="flex items-end gap-3">
          <span className="font-display text-4xl font-extrabold leading-none text-brand/90">{pad(b.n)}</span>
          <h3 className="pb-1 font-display text-[17px] font-extrabold uppercase leading-tight tracking-wide text-[#0a2a5c] dark:text-white">{SECTIONS[b.n]}</h3>
        </div>
        <div aria-hidden className="mt-3 h-[3px] w-10 rounded-full bg-brand" />
      </div>
    );
  if (b.k === "def")
    return (
      <p className="mb-2.5 text-[14px] leading-[1.62]">
        <span className="font-display font-bold text-brand">{b.term}: </span>
        {rich(b.text)}
      </p>
    );
  if (b.k === "li")
    return (
      <p className="mb-2.5 flex gap-3 text-[14px] leading-[1.62]">
        <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
        <span>{rich(b.text)}</span>
      </p>
    );
  return <p className="mb-2.5 text-[14px] leading-[1.62]">{rich(b.text)}</p>;
}

function Cover({ back }: { back?: boolean }) {
  const { locale } = useI18n();
  const t = privacyText[locale];
  return (
    <div className="relative flex h-full flex-col items-center justify-between overflow-hidden bg-gradient-to-br from-[#0b3a7e] via-[#0a2a5c] to-[#061a3d] p-10 text-center text-white">
      <div aria-hidden className="pointer-events-none absolute inset-3 rounded-sm border border-brand/70" />
      <div aria-hidden className="pointer-events-none absolute inset-5 rounded-sm border border-white/15" />
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-black/35 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,.025) 0 2px, transparent 2px 6px)" }} />
      <Image src={r2(IMG.logo)} alt="" width={72} height={72} className="relative mt-4 h-[72px] w-[72px]" />
      <div className="relative">
        {!back ? (
          <>
            <svg aria-hidden viewBox="0 0 120 20" className="mx-auto mb-5 h-4 text-brand"><path d="M0 10h44M76 10h44" stroke="currentColor" strokeWidth="1.5" /><path d="M60 2l8 8-8 8-8-8z" fill="currentColor" /></svg>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-wide sm:text-[2.6rem]">{t.cover}</h2>
            <p className="mx-auto mt-4 max-w-[16rem] text-sm uppercase tracking-[0.18em] text-white/75">{t.coverSub}</p>
          </>
        ) : (
          <>
            <p className="font-display text-2xl font-bold">{t.backCoverNote}</p>
            <p className="mt-3 text-sm text-white/75">{t.contact}</p>
          </>
        )}
      </div>
      <p className="relative mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">{back ? "GRUPO TDM" : t.validFrom}</p>
    </div>
  );
}

/* ---------- libro ---------- */

export default function PrivacyBook() {
  const { locale } = useI18n();
  const t = privacyText[locale];
  const [wide, setWide] = useState<boolean | null>(null);
  const [turned, setTurned] = useState(0);
  const turnedRef = useRef(0);
  const book = useRef<HTMLDivElement>(null);
  const leaves = useRef<(HTMLDivElement | null)[]>([]);
  const busy = useRef(0);

  // páginas lógicas: portada, índice, contenido legal, contraportada (siempre par)
  const faces: Face[] = useMemo(() => {
    const f: Face[] = [{ kind: "cover" }, { kind: "toc" }];
    legalPages.forEach((_, i) => f.push({ kind: "legal", legal: i }));
    f.push({ kind: "back" });
    return f;
  }, []);

  // sección -> número de página (índice en faces)
  const secPage = useMemo(() => {
    const m: number[] = [];
    legalPages.forEach((pg, i) => pg.blocks.forEach((b) => { if (b.k === "h") m[b.n] = i + 2; }));
    return m;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const perLeaf = wide ? 2 : 1;
  const L = Math.ceil(faces.length / perLeaf);

  const applyZ = useCallback(() => {
    leaves.current.forEach((el, i) => {
      if (!el) return;
      el.style.zIndex = String(i < turnedRef.current ? i + 1 : L - i);
    });
  }, [L]);

  const shift = useCallback(
    (to: number, instant?: boolean) => {
      if (!book.current) return;
      const x = wide ? (to === 0 ? -25 : to === L ? 25 : 0) : 0;
      gsap.to(book.current, { xPercent: x, duration: instant || prefersReducedMotion() ? 0 : 1.1, ease: "power3.inOut" });
    },
    [L, wide],
  );

  // reinicio al cambiar de modo (escritorio / móvil)
  useEffect(() => {
    if (wide === null) return;
    turnedRef.current = 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTurned(0);
    leaves.current.forEach((el) => el && gsap.set(el, { rotateY: 0 }));
    applyZ();
    shift(0, true);
  }, [wide, applyZ, shift]);

  const flip = useCallback(
    (i: number, forward: boolean, delay = 0) => {
      const el = leaves.current[i];
      if (!el) return;
      const reduce = prefersReducedMotion();
      const shades = el.querySelectorAll<HTMLElement>("[data-shade]");
      busy.current++;
      el.style.zIndex = String(L + 5);
      const o = { p: 0 };
      gsap.to(el, {
        rotateY: forward ? -180 : 0,
        duration: reduce ? 0 : 1.15,
        delay,
        ease: "power3.inOut",
        onUpdate() {
          const p = this.progress();
          const s = Math.sin(p * Math.PI);
          shades.forEach((sh) => (sh.style.opacity = String(s * 0.55)));
          o.p = p;
        },
        onComplete() {
          shades.forEach((sh) => (sh.style.opacity = "0"));
          busy.current--;
          applyZ();
        },
      });
      // la hoja se "levanta" un poco mientras gira
      if (!reduce) gsap.fromTo(el, { y: 0 }, { y: -6, duration: 0.575, delay, yoyo: true, repeat: 1, ease: "sine.inOut" });
    },
    [L, applyZ],
  );

  const turnTo = useCallback(
    (target: number) => {
      const from = turnedRef.current;
      const to = Math.max(0, Math.min(L, target));
      if (to === from) return;
      const dir = to > from;
      const steps = Math.abs(to - from);
      const gap = steps > 1 ? 0.14 : 0;
      for (let k = 0; k < steps; k++) {
        const idx = dir ? from + k : from - 1 - k;
        flip(idx, dir, k * gap);
      }
      turnedRef.current = to;
      setTurned(to);
      shift(to);
    },
    [L, flip, shift],
  );

  // teclado
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") turnTo(turnedRef.current + 1);
      if (e.key === "ArrowLeft") turnTo(turnedRef.current - 1);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [turnTo]);

  // deslizar (móvil)
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const s = touch.current;
    touch.current = null;
    if (!s || wide) return;
    const dx = e.changedTouches[0].clientX - s.x;
    const dy = e.changedTouches[0].clientY - s.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) turnTo(turnedRef.current + (dx < 0 ? 1 : -1));
  };

  const faceClick = (e: React.MouseEvent, leaf: number, side: "front" | "back") => {
    const el = e.target as HTMLElement;
    if (el.closest("a,button")) return;
    if (window.getSelection()?.toString()) return;
    if (!wide) return; // en móvil se usa deslizar / botones
    turnTo(side === "front" ? leaf + 1 : leaf);
  };

  const renderFace = (f: Face, idx: number): ReactNode => {
    const side: "l" | "r" = wide ? (idx % 2 ? "l" : "r") : "r";
    if (f.kind === "cover") return <Cover />;
    if (f.kind === "back") return <Cover back />;
    if (f.kind === "toc")
      return (
        <PageShell n={idx + 1} side={side} label="GRUPO TDM">
          <h2 className="font-display text-2xl font-extrabold uppercase text-[#0a2a5c] dark:text-white">{t.index}</h2>
          <div aria-hidden className="mb-3 mt-2 h-[3px] w-10 rounded-full bg-brand" />
          {t.indexNote && <p className="mb-3 text-xs italic text-[#8b8576] dark:text-[#7d89a0]">{t.indexNote}</p>}
          <ol>
            {SECTIONS.map((s, n) => (
              <li key={n}>
                <button type="button" onClick={() => turnTo(wide ? Math.ceil(secPage[n] / 2) : secPage[n])} className="group flex w-full items-baseline gap-2.5 rounded-md px-1.5 py-[3px] text-left text-[13px] transition hover:bg-brand/10">
                  <span className="w-6 font-display text-xs font-bold text-brand">{pad(n)}</span>
                  <span className="font-semibold group-hover:text-brand">{s}</span>
                  <span aria-hidden className="mb-1 min-w-4 flex-1 border-b border-dotted border-[#c9c2b0] dark:border-white/20" />
                  <span className="font-display text-xs font-bold text-[#8b8576] dark:text-[#7d89a0]">{secPage[n] + 1}</span>
                </button>
              </li>
            ))}
          </ol>
        </PageShell>
      );
    const pg = legalPages[f.legal!];
    return (
      <PageShell n={idx + 1} side={side} label="Grupo TDM · Datos personales">
        {pg.cont !== undefined && (
          <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8b8576] dark:text-[#7d89a0]">
            <span className="text-brand">{pad(pg.cont)}</span> {SECTIONS[pg.cont]} · {t.cont}
          </p>
        )}
        {pg.blocks.map((b, i) => <BlockView key={i} b={b} />)}
      </PageShell>
    );
  };

  const leafFaces = (i: number) => faces.slice(i * perLeaf, i * perLeaf + perLeaf);

  // texto del indicador
  const leftIdx = wide ? turned * 2 - 1 : turned;
  const rightIdx = wide ? turned * 2 : turned;
  const total = faces.length;
  const label = wide
    ? turned === 0
      ? "1"
      : turned === L
        ? `${total}`
        : `${leftIdx + 1} – ${rightIdx + 1}`
    : `${Math.min(turned + 1, total)}`;

  if (wide === null) return <div className="h-[560px]" />;

  const btn = "grid h-12 w-12 place-items-center rounded-full border border-line bg-surface text-heading shadow-md transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand active:scale-95 disabled:pointer-events-none disabled:opacity-30";

  return (
    <div className="mx-auto w-full max-w-[1180px]" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="relative" style={{ perspective: wide ? 2600 : 1600 }}>
        <div
          ref={book}
          className={`relative mx-auto ${wide ? "w-full" : "w-full max-w-[420px]"}`}
          style={{ height: wide ? "clamp(540px, calc(100svh - 320px), 760px)" : "min(74svh, 640px)", transformStyle: "preserve-3d" }}
        >
          {/* sombra de asiento */}
          <div aria-hidden className="absolute inset-x-[2%] -bottom-6 h-10 rounded-[50%] bg-black/25 blur-2xl dark:bg-black/60" />
          {Array.from({ length: L }).map((_, i) => {
            const fs = leafFaces(i);
            const front = fs[0];
            const back = fs[1];
            const fi = i * perLeaf;
            return (
              <div
                key={`${wide}-${i}`}
                ref={(el) => { leaves.current[i] = el; if (el && !el.style.zIndex) el.style.zIndex = String(L - i); }}
                className={`absolute top-0 h-full ${wide ? "left-1/2 w-1/2" : "left-0 w-full"}`}
                style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-r-md shadow-[0_2px_6px_rgba(0,0,0,.18)]" style={{ backfaceVisibility: "hidden", pointerEvents: i < turned ? "none" : "auto" }} onClick={(e) => faceClick(e, i, "front")}>
                  <div className={wide ? "h-full cursor-[e-resize]" : "h-full"}>{renderFace(front, fi)}</div>
                  <div data-shade aria-hidden className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-l from-black/50 via-black/10 to-transparent opacity-0" />
                </div>
                {back && (
                  <div className="absolute inset-0 overflow-hidden rounded-l-md shadow-[0_2px_6px_rgba(0,0,0,.18)]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", pointerEvents: i < turned ? "auto" : "none" }} onClick={(e) => faceClick(e, i, "back")}>
                    <div className="h-full cursor-[w-resize]">{renderFace(back, fi + 1)}</div>
                    <div data-shade aria-hidden className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-r from-black/50 via-black/10 to-transparent opacity-0" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* controles */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button type="button" onClick={() => turnTo(turned - 1)} disabled={turned === 0} aria-label={t.prev} className={btn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m15 5-7 7 7 7" /></svg>
        </button>
        <div className="min-w-40 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">{t.pages}</p>
          <p className="font-display text-lg font-extrabold text-heading">{label} <span className="text-muted">/ {total}</span></p>
        </div>
        <button type="button" onClick={() => turnTo(turned + 1)} disabled={turned === L} aria-label={t.next} className={btn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m9 5 7 7-7 7" /></svg>
        </button>
        <button type="button" onClick={() => turnTo(1)} className="rounded-full border border-line bg-surface px-5 py-3 text-sm font-bold text-heading transition hover:-translate-y-0.5 hover:border-brand hover:text-brand active:scale-95">
          {t.toIndex}
        </button>
      </div>
      <p className="mt-5 text-center text-sm text-muted">{wide ? t.hint : t.hintTouch}</p>
    </div>
  );
}
