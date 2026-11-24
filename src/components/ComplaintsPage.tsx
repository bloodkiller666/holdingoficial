"use client";

import { useEffect, useId, useState } from "react";
import Link from "@/components/Link";
import SiteShell from "./SiteShell";
import { useI18n } from "@/lib/i18n";
import { CONTACT, COUNTRY_CODES } from "@/lib/contactData";
import { PROVIDER, complaintsText } from "@/lib/complaintsData";
import { submitForm } from "@/lib/submitForm";

const input =
  "h-12 w-full rounded-xl border border-line bg-bg px-4 text-fg placeholder:text-muted transition-[border-color,box-shadow] duration-150 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/10";

type Name = "docType" | "docNumber" | "name" | "address" | "phone" | "email" | "guardian" | "goodType" | "goodDescription" | "claimType" | "detail" | "request" | "privacy";
type Errors = Partial<Record<Name, string>>;

export default function ComplaintsPage() {
  const { locale } = useI18n();
  const t = complaintsText[locale];
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [dial, setDial] = useState("PE");
  const [minor, setMinor] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [code, setCode] = useState("");

  // La fecha se calcula en el navegador (no en el prerender).
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(new Date().toLocaleDateString(locale === "en" ? "en-US" : locale === "pt" ? "pt-BR" : "es-PE", { day: "2-digit", month: "long", year: "numeric" }));
  }, [locale]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const next: Errors = {};
    (["docNumber", "name", "address", "goodDescription", "detail", "request"] as const).forEach((k) => { if (!get(k)) next[k] = t.errRequired; });
    if (get("docNumber") && get("docNumber").length < 6) next.docNumber = t.errDoc;
    if (!get("email")) next.email = t.errRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next.email = t.errEmail;
    if (!get("phone")) next.phone = t.errRequired;
    else if (get("phone").replace(/\D/g, "").length < 6) next.phone = t.errPhone;
    if (minor && !get("guardian")) next.guardian = t.errRequired;
    if (!d.get("privacy")) next.privacy = t.errPrivacy;
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }
    setStatus("sending");
    const dialCode = COUNTRY_CODES.find((k) => k.code === dial)?.dial ?? "";
    const res = await submitForm("complaint", locale, {
      docType: get("docType"), docNumber: get("docNumber"), name: get("name"), address: get("address"),
      phone: `${dialCode} ${get("phone")}`, email: get("email"), guardian: minor ? get("guardian") : "",
      goodType: get("goodType"), amount: get("amount"), goodDescription: get("goodDescription"),
      claimType: get("claimType"), detail: get("detail"), request: get("request"), website: get("website"),
    });
    if (res.ok) { setCode(res.code ?? ""); setStatus("sent"); form.reset(); setMinor(false); setDial("PE"); window.scrollTo({ top: 0, behavior: "smooth" }); }
    else setStatus("error");
  };

  const field = (name: Name, label: string, node: React.ReactNode) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={`${uid}-${name}`} className="text-sm font-semibold text-heading">{label}</label>
      {node}
      {errors[name] && <p id={`${uid}-${name}-err`} role="alert" className="text-sm text-red-600 dark:text-red-400">{errors[name]}</p>}
    </div>
  );
  const aria = (name: Name) => ({ id: `${uid}-${name}`, name, "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `${uid}-${name}-err` : undefined });
  const select = (name: Name, options: string[]) => (
    <select {...aria(name)} defaultValue={options[0]} className={input}>{options.map((o) => <option key={o}>{o}</option>)}</select>
  );
  const h2 = "font-display text-lg font-extrabold uppercase text-heading sm:col-span-2";

  return (
    <SiteShell>
      <main className="relative isolate overflow-hidden bg-bg">
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-[#0a2a5c] via-[#0f3d82] to-transparent dark:from-[#050d1f] dark:via-[#0a1d42]" />

        <section className="mx-auto max-w-[1400px] px-5 pb-8 pt-24 text-white lg:px-10 lg:pt-28">
          <nav aria-label="breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="transition hover:text-white">{t.home}</Link>
            <span aria-hidden>/</span>
            <span className="font-semibold text-white">{t.title}</span>
          </nav>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">{t.title}</h1>
          <p className="mt-5 max-w-3xl text-white/85">{t.lead}</p>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:pb-28">
          <div className="rounded-3xl border border-line bg-surface p-6 shadow-xl sm:p-10">
            {status === "sent" ? (
              <div role="status" className="py-6 text-center">
                <h2 className="font-display text-2xl font-extrabold uppercase text-heading">{t.doneTitle}</h2>
                <p className="mt-3 text-muted">{t.doneText}</p>
                {code && <p className="mt-5 text-sm text-muted">{t.doneCode}: <strong className="select-all font-mono text-base text-heading">{code}</strong></p>}
                <button type="button" onClick={() => setStatus("idle")} className="mt-8 rounded-full border border-line px-6 py-2.5 text-sm font-bold text-heading transition hover:border-brand hover:text-brand">{t.doneAgain}</button>
              </div>
            ) : (
              <>
                <dl className="mb-8 grid gap-x-8 gap-y-3 rounded-2xl bg-alt p-5 text-sm sm:grid-cols-2">
                  <div className="sm:col-span-2"><dt className="font-bold uppercase tracking-wider text-brand">{t.providerTitle}</dt></div>
                  <div><dt className="text-muted">{t.razon}</dt><dd className="font-semibold text-heading">{PROVIDER.name}</dd></div>
                  <div><dt className="text-muted">{t.ruc}</dt><dd className="font-semibold text-heading">{PROVIDER.ruc}</dd></div>
                  <div><dt className="text-muted">{t.office}</dt><dd className="font-semibold text-heading">{PROVIDER.office}</dd></div>
                  <div><dt className="text-muted">{t.fiscal}</dt><dd className="font-semibold text-heading">{PROVIDER.fiscal}</dd></div>
                  <div><dt className="text-muted">{t.date}</dt><dd className="min-h-5 font-semibold text-heading">{today}</dd></div>
                </dl>

                <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <h2 className={h2}>{t.s1}</h2>
                  {field("docType", t.docType, select("docType", t.docTypes))}
                  {field("docNumber", t.docNumber, <input {...aria("docNumber")} type="text" inputMode="text" autoComplete="off" className={input} />)}
                  <div className="sm:col-span-2">{field("name", t.name, <input {...aria("name")} type="text" autoComplete="name" className={input} />)}</div>
                  <div className="sm:col-span-2">{field("address", t.address, <input {...aria("address")} type="text" autoComplete="street-address" className={input} />)}</div>
                  {field("email", t.email, <input {...aria("email")} type="email" autoComplete="email" className={input} />)}
                  {field(
                    "phone",
                    t.phone,
                    <div className="flex gap-2">
                      <select aria-label="+" value={dial} onChange={(e) => setDial(e.target.value)} className={`${input} w-[7.5rem]! flex-none px-3`}>
                        {COUNTRY_CODES.map((k) => <option key={k.code} value={k.code}>{k.code} {k.dial}</option>)}
                      </select>
                      <input {...aria("phone")} type="tel" inputMode="tel" autoComplete="tel-national" className={`${input} min-w-0 flex-1`} />
                    </div>,
                  )}
                  <label className="flex cursor-pointer items-center gap-3 text-sm text-fg sm:col-span-2">
                    <input type="checkbox" checked={minor} onChange={(e) => setMinor(e.target.checked)} className="h-5 w-5 cursor-pointer accent-[#ff6e00]" />
                    {t.minor}
                  </label>
                  {minor && <div className="sm:col-span-2">{field("guardian", t.guardian, <input {...aria("guardian")} type="text" className={input} />)}</div>}

                  <h2 className={`${h2} mt-4`}>{t.s2}</h2>
                  {field("goodType", t.goodType, select("goodType", t.goodTypes))}
                  {field("amount" as Name, t.amount, <input id={`${uid}-amount`} name="amount" type="text" inputMode="decimal" placeholder={t.amountPh} className={input} />)}
                  <div className="sm:col-span-2">{field("goodDescription", t.goodDescription, <textarea {...aria("goodDescription")} rows={3} className={`${input} h-auto resize-y py-3`} />)}</div>

                  <h2 className={`${h2} mt-4`}>{t.s3}</h2>
                  <div className="sm:col-span-2">
                    {field("claimType", t.claimType, select("claimType", t.claimTypes))}
                    <ul className="mt-2 space-y-1 text-sm text-muted">{t.claimHelp.map((h) => <li key={h}>{h}</li>)}</ul>
                  </div>
                  <div className="sm:col-span-2">{field("detail", t.detail, <textarea {...aria("detail")} rows={5} className={`${input} h-auto resize-y py-3`} />)}</div>
                  <div className="sm:col-span-2">{field("request", t.request, <textarea {...aria("request")} rows={3} className={`${input} h-auto resize-y py-3`} />)}</div>

                  <ul className="list-disc space-y-1.5 rounded-2xl bg-alt p-5 pl-9 text-sm text-muted sm:col-span-2">{t.legal.map((l) => <li key={l}>{l}</li>)}</ul>

                  <div className="sm:col-span-2">
                    <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-fg">
                      <input name="privacy" type="checkbox" aria-invalid={!!errors.privacy} className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#ff6e00]" />
                      <span>
                        {t.privacyBefore}
                        <Link href={CONTACT.privacy} target="_blank" className="font-semibold text-brand underline-offset-4 hover:underline">{t.privacyLink}</Link>
                        {t.privacyAfter}
                      </span>
                    </label>
                    {errors.privacy && <p role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.privacy}</p>}
                  </div>

                  <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />

                  <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                    <button type="submit" disabled={status === "sending"} className="h-13 w-full rounded-full bg-brand px-10 py-3.5 text-base font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:opacity-60 sm:w-auto">{status === "sending" ? t.sending : t.send}</button>
                    {status === "error" && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{t.errSend}</p>}
                  </div>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
