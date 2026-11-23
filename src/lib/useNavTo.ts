"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { goTo } from "./lenis";

/** Navega a una sección del home: hace scroll si ya estamos en "/", o va a "/#id" desde otra página. */
export function useNavTo() {
  const pathname = usePathname();
  const router = useRouter();
  return useCallback(
    (hash: string) => {
      if (hash.startsWith("/")) return router.push(hash);
      if (pathname === "/") return goTo(hash);
      router.push(hash === "#top" ? "/" : `/${hash}`);
    },
    [pathname, router],
  );
}
