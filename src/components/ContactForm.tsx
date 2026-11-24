"use client";

import { useId, useState } from "react";
import { useI18n } from "@/lib/i18n";
import Link from "@/components/Link";
import { CONTACT, COMPLAINT_TOPIC, COUNTRY_CODES, contactText } from "@/lib/contactData";
import { submitForm } from "@/lib/submitForm";

const input =
  "h-12 w-full rounded-xl border border-line bg-bg px-4 text-fg placeholder:text-muted transition-[border-color,box-shadow] duration-150 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/10";

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "phone" | "country" | "topic" | "message" | "privacy", string>>;

export default function ContactForm() {
  const { locale } = useI18n();
  const c = contactText[locale];
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [dial, setDial] = useState("PE");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const d = new FormData(form);
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
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    const dialCode = COUNTRY_CODES.find((k) => k.code === dial)?.dial ?? "";
    const res = await submitForm("contact", locale, {
      firstName: get("firstName"), lastName: get("lastName"), email: get("email"),
      phone: `${dialCode} ${get("phone")}`, country: get("country"), topic: get("topic"),
      topicIndex: String(c.topics.indexOf(get("topic"))), message: get("message"), website: get("website"),
    });
    if (res.ok) { setStatus("sent"); form.reset(); setTopic(""); setDial("PE"); } else setStatus("error");
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-line bg-alt p-8 text-center">
        <h3 className="font-display text-2xl font-extrabold text-heading">{c.sentTitle}</h3>
        <p className="mt-2 text-muted">{c.sentText}</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 rounded-full border border-line px-6 py-2.5 text-sm font-bold text-heading transition hover:border-brand hover:text-brand">{c.sentAgain}</button>
      </div>
    );
  }

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
        <select {...aria("topic")} value={topic} onChange={(e) => setTopic(e.target.value)} className={input}>
          <option value="" disabled>{c.topicPh}</option>
          {c.topics.map((n) => <option key={n}>{n}</option>)}
        </select>,
      )}
      {topic === c.topics[COMPLAINT_TOPIC] && (
        <p role="note" className="rounded-xl border border-brand/30 bg-brand/5 px-4 py-3 text-sm text-fg sm:col-span-2">
          {c.complaintHint}
          <Link href="/libro-de-reclamaciones" className="font-semibold text-brand underline-offset-4 hover:underline">{c.complaintLink}</Link>.
        </p>
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

      {/* Campo trampa para bots: las personas no lo ven */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="h-13 w-full rounded-full bg-brand px-10 py-3.5 text-base font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:opacity-60 sm:w-auto">{status === "sending" ? c.sending : c.send}</button>
        {status === "error" && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{c.errSend}</p>}
      </div>
    </form>
  );
}
