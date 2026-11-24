"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { DownloadIcon } from "./AboutArt";
import { useI18n } from "@/lib/i18n";
import { r2 } from "@/lib/r2";
import { CONTACT, COUNTRY_CODES, contactText } from "@/lib/contactData";
import { submitForm } from "@/lib/submitForm";
import { brochurePdf, brochureThumbs, solutionLabels } from "@/lib/solutionsData";

const input =
  "h-12 w-full rounded-xl border border-line bg-bg px-4 text-fg transition-[border-color,box-shadow] duration-150 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/10";

type Errors = Partial<Record<"name" | "email" | "phone" | "privacy", string>>;

/** Tarjeta de brochure: «Descargar» abre un formulario de datos y, al enviarlo, abre el PDF. */
export default function BrochureCard({ thumb = 0, title }: { thumb?: number; title: string }) {
  const { locale } = useI18n();
  const L = solutionLabels[locale];
  const c = contactText[locale];
  const uid = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [dial, setDial] = useState("PE");

  // Cierra al pulsar fuera del cuadro
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const onClick = (e: MouseEvent) => { if (e.target === d) d.close(); };
    d.addEventListener("click", onClick);
    return () => d.removeEventListener("click", onClick);
  }, []);

  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const next: Errors = {};
    if (!get("name")) next.name = c.errRequired;
    if (!get("email")) next.email = c.errRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next.email = c.errEmail;
    if (!get("phone")) next.phone = c.errRequired;
    else if (get("phone").replace(/\D/g, "").length < 6) next.phone = c.errPhone;
    if (!d.get("privacy")) next.privacy = c.errPrivacy;
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }
    // El PDF se abre siempre (no se bloquea la descarga si el registro del lead falla).
    const popup = window.open("", "_blank");
    setSending(true);
    const dialCode = COUNTRY_CODES.find((k) => k.code === dial)?.dial ?? "";
    await submitForm("brochure", locale, { name: get("name"), email: get("email"), phone: `${dialCode} ${get("phone")}`, product: title, website: get("website") });
    setSending(false);
    if (popup) popup.location.href = r2(brochurePdf); else window.open(r2(brochurePdf), "_blank", "noopener,noreferrer");
    dialog.current?.close();
    form.reset();
  };

  const field = (name: keyof Errors, label: string, node: React.ReactNode) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={`${uid}-${name}`} className="text-sm font-semibold text-heading">{label}</label>
      {node}
      {errors[name] && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{errors[name]}</p>}
    </div>
  );
  const aria = (name: keyof Errors) => ({ id: `${uid}-${name}`, name, "aria-invalid": !!errors[name] });

  return (
    <>
      <div className="flex items-center gap-5 rounded-3xl border border-line bg-surface p-4 pr-6 shadow-sm sm:gap-6 sm:p-5">
        <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-alt sm:h-28 sm:w-24">
          <Image src={r2(brochureThumbs[thumb])} alt="" fill sizes="96px" className="object-contain p-1.5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">Brochure</p>
          <h3 className="mt-1 font-display text-lg font-extrabold leading-snug text-heading sm:text-xl">{title}</h3>
        </div>
        <button
          type="button"
          onClick={() => dialog.current?.showModal()}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white shadow-md shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark active:scale-[0.97]"
        >
          <DownloadIcon /> {L.download}
        </button>
      </div>

      <dialog ref={dialog} aria-labelledby={`${uid}-title`} className="m-auto w-[min(92vw,34rem)] rounded-3xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-[#071d44]/70 backdrop:backdrop-blur-sm">
        <form onSubmit={onSubmit} noValidate className="grid gap-5 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id={`${uid}-title`} className="font-display text-2xl font-extrabold uppercase leading-tight text-heading">{L.modalTitle}</h2>
              <p className="mt-2 text-sm text-muted">{L.modalText}</p>
            </div>
            <button type="button" aria-label={L.modalClose} onClick={() => dialog.current?.close()} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-xl leading-none text-heading transition hover:border-brand hover:text-brand">×</button>
          </div>

          {field("name", c.firstName, <input {...aria("name")} type="text" autoComplete="name" className={input} />)}
          {field("email", c.emailLabel, <input {...aria("email")} type="email" autoComplete="email" className={input} />)}
          {field(
            "phone",
            c.phoneLabel,
            <div className="flex gap-2">
              <select aria-label={L.modalCode} value={dial} onChange={(e) => setDial(e.target.value)} className={`${input} w-[7.5rem]! flex-none px-3`}>
                {COUNTRY_CODES.map((k) => <option key={k.code} value={k.code}>{k.code} {k.dial}</option>)}
              </select>
              <input {...aria("phone")} type="tel" inputMode="tel" autoComplete="tel-national" className={`${input} min-w-0 flex-1`} />
            </div>,
          )}

          <div>
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-fg">
              <input name="privacy" type="checkbox" aria-invalid={!!errors.privacy} className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#ff6e00]" />
              <span>
                {c.privacyBefore}
                <a href={CONTACT.privacy} target="_blank" rel="noreferrer" className="font-semibold text-brand underline-offset-4 hover:underline">{c.privacyLink}</a>
                {c.privacyAfter}
              </span>
            </label>
            {errors.privacy && <p role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.privacy}</p>}
          </div>

          <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
          <button type="submit" disabled={sending} className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand px-10 py-3.5 text-base font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:opacity-60">
            <DownloadIcon /> {sending ? c.sending : L.modalSend}
          </button>
        </form>
      </dialog>
    </>
  );
}
