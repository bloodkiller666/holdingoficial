"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { goTo } from "./lenis";
import { useI18n } from "./i18n";
import { parseLocalePath } from "./routes";

/** Navega a una sección del home: hace scroll si ya estamos en el inicio, o va a "/#id" (en el idioma actual) desde otra página. */
export function useNavTo() {
  const pathname = usePathname();
  const router = useRouter();
  const { href } = useI18n();
  return useCallback(
    (hash: string) => {
      if (hash.startsWith("/")) return router.push(href(hash));
      if (parseLocalePath(pathname)?.canonical === "/") return goTo(hash);
      router.push(href(hash === "#top" ? "/" : `/${hash}`));
    },
    [pathname, router, href],
  );
}
