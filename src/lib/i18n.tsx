"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, type Dictionary, type Locale } from "./dictionaries";

type Ctx = { locale: Locale; t: Dictionary; setLocale: (l: Locale) => void };
const I18nContext = createContext<Ctx | null>(null);
const KEY = "tdm-locale";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY) as Locale | null;
      /* eslint-disable react-hooks/set-state-in-effect -- idioma guardado, solo disponible tras hidratar */
      if (saved && saved in dictionaries) setLocaleState(saved);
      else {
        const nav = navigator.language.slice(0, 2) as Locale;
        if (nav in dictionaries) setLocaleState(nav);
        /* eslint-enable react-hooks/set-state-in-effect */
      }
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {}
  }, []);

  const value = useMemo(() => ({ locale, t: dictionaries[locale], setLocale }), [locale, setLocale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
