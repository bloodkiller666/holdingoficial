"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useI18n } from "@/lib/i18n";

/** `next/link` que traduce los enlaces internos al idioma actual (/nosotros → /en/us). Los externos y `#` quedan igual. */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const { href: localize } = useI18n();
  return <NextLink href={typeof href === "string" ? localize(href) : href} {...props} />;
}
