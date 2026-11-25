"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

/** Lee la pestaña de la URL (`?tab-2`, como en el sitio original) y avisa cada vez que cambia, incluso al navegar dentro de la misma página. */
function Reader({ onTab }: { onTab: (tab: number) => void }) {
  const params = useSearchParams();
  let tab = 0;
  for (const key of params.keys()) {
    const m = /^tab-([1-3])$/.exec(key);
    if (m) tab = Number(m[1]) - 1;
  }
  useEffect(() => onTab(tab), [tab, onTab]);
  return null;
}

/**
 * Sincroniza la pestaña con la URL. Va en su propio `Suspense` para que solo este fragmento sea dinámico
 * y el resto de la página siga prerenderizado.
 */
export function UrlTab({ onTab }: { onTab: (tab: number) => void }) {
  return (
    <Suspense fallback={null}>
      <Reader onTab={onTab} />
    </Suspense>
  );
}

/** Refleja en la URL la pestaña elegida con los botones (sin recargar ni añadir al historial). */
export function writeUrlTab(tab: number) {
  window.history.replaceState(window.history.state, "", `?tab-${tab + 1}`);
}
