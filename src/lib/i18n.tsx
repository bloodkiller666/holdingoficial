"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { dictionaries, type Dictionary, type Locale } from "./dictionaries";
import { localizeHref, parseLocalePath, toLocalePath } from "./routes";

type Ctx = { locale: Locale; t: Dictionary; setLocale: (l: Locale) => void; href: (path: string) => string };
const I18nContext = createContext<Ctx | null>(null);

/** El idioma viene de la URL (/en/..., /pt/...). Cambiarlo navega a la misma página traducida. */
export function I18nProvider({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = useCallback(
    (l: Locale) => {
      if (l === lang) return;
      const parsed = parseLocalePath(pathname);
      const target = toLocalePath(parsed?.canonical ?? "/", l);
      router.push(target + window.location.search + window.location.hash);
    },
    [lang, pathname, router],
  );

  const href = useCallback((path: string) => localizeHref(path, lang), [lang]);
  const value = useMemo(() => ({ locale: lang, t: dictionaries[lang], setLocale, href }), [lang, setLocale, href]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
