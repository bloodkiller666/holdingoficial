import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale, parseLocalePath, toLocalePath } from "@/lib/routes";

/**
 * Rutas por idioma. Las páginas viven en /[lang]/<ruta española>; aquí se traduce la URL visible:
 *   /nosotros → /es/nosotros     /en/us → /en/nosotros     /pt/nos → /pt/nosotros
 * Si alguien entra con la ruta española bajo otro idioma (/en/nosotros) se le redirige a la traducida (/en/us).
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split("/").filter(Boolean)[0];

  // /es/... no es una URL pública: el español va sin prefijo.
  if (first === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/es/, "") || "/";
    return NextResponse.redirect(url, 308);
  }

  const parsed = parseLocalePath(pathname);
  if (!parsed) {
    // Ruta desconocida: dejamos que Next muestre el 404 dentro del idioma correspondiente.
    const lang = first && isLocale(first) ? first : DEFAULT_LOCALE;
    const url = request.nextUrl.clone();
    url.pathname = first && isLocale(first) ? pathname : `/${lang}${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  const visible = toLocalePath(parsed.canonical, parsed.locale);
  if (!parsed.exact) {
    const url = request.nextUrl.clone();
    url.pathname = visible;
    url.search = search;
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${parsed.locale}${parsed.canonical === "/" ? "" : parsed.canonical}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Todo menos archivos estáticos (con extensión) y el interior de Next.
  matcher: ["/((?!_next|api|.*\\.[a-zA-Z0-9]+$).*)"],
};
