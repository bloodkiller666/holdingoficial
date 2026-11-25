"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { THEME_KEY, THEME_SCRIPT } from "./themeScript";

type Theme = "light" | "dark" | "system";

const Ctx = createContext<{ theme: Theme; resolvedTheme?: "light" | "dark"; setTheme: (t: Theme) => void }>({
  theme: "system",
  setTheme: () => {},
});

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
};
const readTheme = (): Theme => {
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === "light" || v === "dark" ? v : "system";
  } catch {
    return "system";
  }
};

const DARK = "(prefers-color-scheme: dark)";
const subscribeSystem = (cb: () => void) => {
  const mq = window.matchMedia(DARK);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "system" as Theme);
  const systemDark = useSyncExternalStore(subscribeSystem, () => window.matchMedia(DARK).matches, () => false);
  const resolvedTheme = theme === "system" ? (systemDark ? "dark" : "light") : theme;

  useEffect(() => {
    const el = document.documentElement;
    el.classList.toggle("dark", resolvedTheme === "dark");
    el.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  const setTheme = useCallback((t: Theme) => {
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch {}
    listeners.forEach((l) => l());
  }, []);

  const value = useMemo(() => ({ theme, resolvedTheme, setTheme }), [theme, resolvedTheme, setTheme]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);

const noop = () => () => {};

/**
 * Aplica el tema antes de pintar. Solo se emite en el HTML del servidor (y durante la hidratación):
 * React 19 no admite crear un `<script>` al renderizar en el navegador (p. ej. al cambiar de idioma).
 */
export function ThemeScript() {
  const server = useSyncExternalStore(noop, () => false, () => true);
  return server ? <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} /> : null;
}
