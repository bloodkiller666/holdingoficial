import type Lenis from "lenis";

/** Instancia compartida de Lenis para poder hacer scroll programático desde cualquier componente. */
export const lenisRef: { current: Lenis | null } = { current: null };

export function scrollToY(y: number) {
  if (lenisRef.current) lenisRef.current.scrollTo(y, { duration: 1.1 });
  else window.scrollTo({ top: y, behavior: "smooth" });
}

/** Lleva a una sección por su hash (#id), descontando la altura del header fijo. */
export function goTo(hash: string) {
  if (!hash || hash === "#") return;
  if (hash === "#top") return scrollToY(0);
  const el = document.querySelector(hash);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 64;
  scrollToY(y);
}
