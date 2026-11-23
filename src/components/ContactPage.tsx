"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SiteShell from "./SiteShell";
import { InstagramIcon, LinkedInIcon, MailIcon, NavIcon, PhoneIcon, PinIcon, TikTokIcon, WhatsAppIcon } from "./icons";
import { useI18n } from "@/lib/i18n";
import { IMG, r2 } from "@/lib/r2";
import { CONTACT, COUNTRY_CODES, contactText } from "@/lib/contactData";
import { prefersReducedMotion, useParallax, useReveal } from "@/lib/useReveal";

const socialIcons = { LinkedIn: LinkedInIcon, Instagram: InstagramIcon, TikTok: TikTokIcon } as const;

const input =
  "h-12 w-full rounded-xl border border-line bg-bg px-4 text-fg placeholder:text-muted transition-[border-color,box-shadow] duration-150 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/10";

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "phone" | "country" | "topic" | "message" | "privacy", string>>;

function ContactForm() {
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

export default function ContactPage() {
  const { locale } = useI18n();
  const c = contactText[locale];
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  useParallax(root);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-ct-bg]", { scale: 1.15, duration: 1.8, ease: "power2.out" }, 0)
        .from("[data-ct-crumb]", { opacity: 0, y: 12, duration: 0.6 }, 0.15)
        .from("[data-ct-title] span", { yPercent: 115, duration: 1 }, 0.25)
        .from("[data-ct-tag]", { opacity: 0, y: 16, duration: 0.7 }, 0.6);
    },
    { scope: root, dependencies: [locale] },
  );

  const items = [
    { Icon: PhoneIcon, name: c.phone, value: CONTACT.phone.label, href: CONTACT.phone.href, ext: false },
    { Icon: WhatsAppIcon, name: c.whatsapp, value: CONTACT.whatsapp.label, href: CONTACT.whatsapp.href, ext: true },
    { Icon: MailIcon, name: c.email, value: CONTACT.email.label, href: CONTACT.email.href, ext: false },
  ];

  return (
    <SiteShell>
      <main ref={root} className="bg-bg">
        {/* Encabezado con imagen */}
        <section className="relative isolate flex min-h-[360px] items-end overflow-hidden bg-[#0a2a5c] pt-16 text-white lg:min-h-[460px]">
          <div data-ct-bg className="absolute inset-0 -z-10">
            <div data-parallax="8" className="absolute inset-[-10%]">
              <Image src={r2(IMG.plant)} alt="" fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a2a5c] via-[#0a2a5c]/60 to-[#034ea2]/30" />
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-12 lg:px-10 lg:pb-16">
            <nav data-ct-crumb aria-label="breadcrumb" className="mb-5 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">{c.home}</Link>
              <span aria-hidden>/</span>
              <span className="font-semibold text-white">{c.title}</span>
            </nav>
            <h1 data-ct-title className="font-display text-6xl font-extrabold uppercase leading-none sm:text-8xl">
              <span className="block overflow-hidden pb-2"><span className="block">{c.title}</span></span>
            </h1>
            <span data-ct-tag className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              <PinIcon size={16} /> {c.country}
            </span>
          </div>
        </section>

        {/* Información + formulario */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-10">
            <div className="space-y-12">
              <div>
                <h2 data-reveal className="font-display text-3xl font-extrabold uppercase leading-tight text-brand sm:text-4xl">{c.adviceTitle}</h2>
                <p data-reveal className="mt-3 max-w-md text-lg text-heading">{c.adviceText}</p>
                <ul className="mt-8 space-y-3">
                  {items.map(({ Icon, name, value, href, ext }) => (
                    <li key={href} data-reveal>
                      <a href={href} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})} className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-lg">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white"><Icon size={22} /></span>
                        <span className="min-w-0">
                          <span className="block text-xs font-bold uppercase tracking-wider text-muted">{name}</span>
                          <span className="block truncate font-display text-lg font-bold text-heading">{value}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 data-reveal className="font-display text-2xl font-extrabold text-heading">{c.findUs}</h2>
                <p data-reveal className="mt-3 flex items-start gap-3 text-lg text-fg">
                  <PinIcon className="mt-1 shrink-0 text-brand" size={22} /> {CONTACT.address}
                </p>
                <div data-reveal className="mt-6 flex flex-wrap gap-3">
                  <a href={CONTACT.googleMaps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark">
                    <PinIcon size={18} /> {c.maps}
                  </a>
                  <a href={CONTACT.waze} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-6 py-3 text-sm font-bold text-heading transition hover:-translate-y-0.5 hover:bg-navy hover:text-white">
                    <NavIcon size={18} /> {c.waze}
                  </a>
                </div>
              </div>

              <div data-reveal>
                <h2 className="font-display text-2xl font-extrabold text-heading">{c.follow}</h2>
                <div className="mt-4 flex gap-3">
                  {CONTACT.social.map((s) => {
                    const Icon = socialIcons[s.name as keyof typeof socialIcons];
                    return (
                      <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="grid h-12 w-12 place-items-center rounded-full border border-line text-heading transition duration-200 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white">
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div data-reveal className="h-fit rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-10 lg:sticky lg:top-24">
              <h2 className="mb-8 font-display text-2xl font-extrabold leading-snug text-heading sm:text-3xl">{c.formTitle}</h2>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div data-reveal className="overflow-hidden rounded-3xl border border-line shadow-lg shadow-navy/10">
              <iframe
                title={c.mapTitle}
                src={CONTACT.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[380px] w-full border-0 sm:h-[460px] dark:[filter:invert(.9)_hue-rotate(180deg)_contrast(.9)]"
              />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
