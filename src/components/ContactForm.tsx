"use client";

import { useId, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { CONTACT, COUNTRY_CODES, contactText } from "@/lib/contactData";

const input =
  "h-12 w-full rounded-xl border border-line bg-bg px-4 text-fg placeholder:text-muted transition-[border-color,box-shadow] duration-150 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/10";

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "phone" | "country" | "topic" | "message" | "privacy", string>>;

export default function ContactForm() {
  const { locale } = useI18n();
  const c = contactText[locale];
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [dial, setDial] = useState("PE");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const next: Errors = {};
    (["firstName", "lastName", "country", "topic", "message"] as const).forEach((k) => { if (!get(k)) next[k] = c.errRequired; });
    if (!get("email")) next.email = c.errRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next.email = c.errEmail;
    if (!get("phone")) next.phone = c.errRequired;
    else if (get("phone").replace(/\D/g, "").length < 6) next.phone = c.errPhone;
    if (!d.get("privacy")) next.privacy = c.errPrivacy;
    setErrors(next);
    if (Object.keys(next).length) {
      // Lleva el foco al primer campo con error
      const first = Object.keys(next)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    // TODO: conectar el envío (correo / API) cuando se indique.
  };

  const field = (name: keyof Errors, label: string, node: React.ReactNode) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={`${uid}-${name}`} className="text-sm font-semibold text-heading">{label}</label>
      {node}
      {errors[name] && <p id={`${uid}-${name}-err`} role="alert" className="text-sm text-red-600 dark:text-red-400">{errors[name]}</p>}
    </div>
  );
  const aria = (name: keyof Errors) => ({ id: `${uid}-${name}`, name, "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `${uid}-${name}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {field("firstName", c.firstName, <input {...aria("firstName")} type="text" autoComplete="given-name" className={input} />)}
      {field("lastName", c.lastName, <input {...aria("lastName")} type="text" autoComplete="family-name" className={input} />)}
      <div className="sm:col-span-2">{field("email", c.emailLabel, <input {...aria("email")} type="email" autoComplete="email" className={input} />)}</div>

      <div className="sm:col-span-2">
        {field(
          "phone",
          c.phoneLabel,
          <div className="flex gap-2">
            <select aria-label={c.countryLabel} value={dial} onChange={(e) => setDial(e.target.value)} className={`${input} w-[7.5rem]! flex-none px-3`}>
              {COUNTRY_CODES.map((k) => <option key={k.code} value={k.code}>{k.code} {k.dial}</option>)}
            </select>
            <input {...aria("phone")} type="tel" inputMode="tel" autoComplete="tel-national" className={`${input} min-w-0 flex-1`} />
          </div>,
        )}
      </div>

      {field(
        "country",
        c.countryLabel,
        <select {...aria("country")} defaultValue="" className={input}>
          <option value="" disabled>{c.countryPh}</option>
          {c.countries.map((n) => <option key={n}>{n}</option>)}
        </select>,
      )}
      {field(
        "topic",
        c.topic,
        <select {...aria("topic")} defaultValue="" className={input}>
          <option value="" disabled>{c.topicPh}</option>
          {c.topics.map((n) => <option key={n}>{n}</option>)}
        </select>,
      )}

      <div className="sm:col-span-2">
        {field("message", c.message, <textarea {...aria("message")} rows={5} className={`${input} h-auto resize-y py-3`} />)}
      </div>

      <div className="sm:col-span-2">
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

      <div className="sm:col-span-2">
        <button type="submit" className="h-13 w-full rounded-full bg-brand px-10 py-3.5 text-base font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark sm:w-auto">{c.send}</button>
      </div>
    </form>
  );
}
