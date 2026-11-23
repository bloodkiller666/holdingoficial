"use client";

import { useRef } from "react";
import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";

export default function Newsletter() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const field = "h-12 w-full rounded-full border border-line bg-surface px-5 text-fg placeholder:text-muted focus:border-brand focus:outline-none";

  return (
    <section ref={root} className="bg-gradient-to-br from-[#034ea2] to-[#1e4f8a] py-16 text-white dark:from-[#0f2a55] dark:to-[#14356b] lg:py-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 data-reveal className="font-display text-3xl font-extrabold sm:text-4xl">{t.newsletter.title}</h2>
          <p data-reveal className="mt-3 max-w-md text-lg text-white/85">{t.newsletter.text}</p>
        </div>
        {/* La acción del formulario se conectará cuando se indique */}
        <form data-reveal onSubmit={(e) => e.preventDefault()} className="grid gap-3 sm:grid-cols-[1.4fr_1fr_auto]">
          <input type="email" required aria-label={t.newsletter.email} placeholder={t.newsletter.email} className={field} />
          <select aria-label={t.newsletter.country} defaultValue="" className={field}>
            <option value="" disabled>{t.newsletter.country}</option>
            {t.newsletter.countries.map((c) => <option key={c}>{c}</option>)}
          </select>
          <button type="submit" className="h-12 rounded-full bg-brand px-8 font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark">{t.newsletter.submit}</button>
        </form>
      </div>
    </section>
  );
}
