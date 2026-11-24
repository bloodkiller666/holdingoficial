import { dictionaries, type Locale } from "./dictionaries";
import { solutionChildren } from "./menuData";
import { solutionSlugs } from "./solutionsData";
import { productSlugs } from "./productsData";
import { caseSlugs } from "./casesData";
import { newsSlugs } from "./newsData";

/**
 * Rutas por idioma. Internamente cada página vive en `/[lang]/<ruta en español>`; hacia fuera:
 *   es → /nosotros            en → /en/us            pt → /pt/nos
 * La ruta «canónica» es siempre la española (la que usan todos los enlaces del código); `toLocalePath`
 * la traduce y `parseLocalePath` hace el camino inverso (lo usa el proxy).
 */

export const DEFAULT_LOCALE: Locale = "es";
export const LOCALE_CODES: Locale[] = ["es", "en", "pt"];
export const isLocale = (v: string): v is Locale => (LOCALE_CODES as string[]).includes(v);

/** Páginas estáticas: slug español → slug por idioma. */
const staticPages: Record<string, Record<Locale, string>> = {
  nosotros: { es: "nosotros", en: "us", pt: "nos" },
  "centro-de-desarrollo-tecnologico": { es: "centro-de-desarrollo-tecnologico", en: "technological-development-center", pt: "centro-de-desenvolvimento-tecnologico" },
  sostenibilidad: { es: "sostenibilidad", en: "sustainability", pt: "sustentabilidade" },
  "unete-a-nosotros": { es: "unete-a-nosotros", en: "join-us", pt: "junte-se-a-nos" },
  contacto: { es: "contacto", en: "contact", pt: "contato" },
  "politicas-de-privacidad": { es: "politicas-de-privacidad", en: "privacy-policies", pt: "politicas-de-privacidade" },
  "libro-de-reclamaciones": { es: "libro-de-reclamaciones", en: "complaints-book", pt: "livro-de-reclamacoes" },
};

/** Secciones con listado y detalle: segmento español → segmento por idioma. */
const sections: Record<string, Record<Locale, string>> = {
  solucion: { es: "solucion", en: "solutions", pt: "solucoes" },
  productos: { es: "productos", en: "products", pt: "produtos" },
  "caso-de-exito": { es: "caso-de-exito", en: "success-stories", pt: "casos-de-sucesso" },
  noticia: { es: "noticia", en: "news", pt: "noticias" },
};

export const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90)
    .replace(/-+$/g, "");

/** Slugs de cada elemento por idioma (es = los slugs actuales; en/pt = título traducido). Mismo orden que los datos. */
function itemSlugs(): Record<string, Record<Locale, string[]>> {
  const titles = (l: Locale) => ({
    solucion: solutionChildren[l].flat(),
    productos: dictionaries[l].products.items.map((p) => p.name),
    "caso-de-exito": dictionaries[l].cases.items as string[],
    noticia: dictionaries[l].news.items.map((n) => n.title),
  });
  const es = { solucion: [...solutionSlugs], productos: [...productSlugs], "caso-de-exito": [...caseSlugs], noticia: [...newsSlugs] } as Record<string, string[]>;
  const out: Record<string, Record<Locale, string[]>> = {};
  for (const key of Object.keys(sections)) {
    out[key] = { es: es[key], en: [], pt: [] };
    for (const l of ["en", "pt"] as const) {
      const seen = new Set<string>();
      out[key][l] = (titles(l) as Record<string, string[]>)[key].map((title, i) => {
        let slug = slugify(title) || `${key}-${i + 1}`;
        if (seen.has(slug)) slug = `${slug}-${i + 1}`;
        seen.add(slug);
        return slug;
      });
    }
  }
  return out;
}
const items = itemSlugs();

const join = (...p: string[]) => "/" + p.filter(Boolean).join("/");

/** Ruta canónica (española, sin query ni hash) → ruta visible en el idioma indicado. */
export function toLocalePath(canonical: string, locale: Locale): string {
  const parts = canonical.split("/").filter(Boolean);
  const prefix = locale === DEFAULT_LOCALE ? [] : [locale];
  if (parts.length === 0) return join(...prefix);
  const [head, rest] = parts;
  if (staticPages[head] && parts.length === 1) return join(...prefix, staticPages[head][locale]);
  if (sections[head]) {
    const seg = sections[head][locale];
    if (rest === undefined) return join(...prefix, seg);
    const i = items[head].es.indexOf(rest);
    if (i >= 0 && parts.length === 2) return join(...prefix, seg, items[head][locale][i]);
  }
  return join(...prefix, ...parts);
}

/** Ruta visible (con o sin prefijo de idioma) → idioma y ruta canónica. `null` si la ruta no existe. */
export function parseLocalePath(pathname: string): { locale: Locale; canonical: string; exact: boolean } | null {
  const parts = pathname.split("/").filter(Boolean);
  let locale: Locale = DEFAULT_LOCALE;
  if (parts[0] && isLocale(parts[0]) && parts[0] !== DEFAULT_LOCALE) locale = parts.shift() as Locale;
  else if (parts[0] === DEFAULT_LOCALE) parts.shift(); // /es/... solo existe internamente (el proxy lo redirige)
  const done = (canonical: string) => ({ locale, canonical, exact: toLocalePath(canonical, locale) === (pathname.replace(/\/+$/, "") || "/") });
  if (parts.length === 0) return done("/");
  const [head, rest] = parts;
  for (const [es, byLocale] of Object.entries(staticPages)) {
    if (parts.length === 1 && (byLocale[locale] === head || es === head)) return done(`/${es}`);
  }
  for (const [es, byLocale] of Object.entries(sections)) {
    if (byLocale[locale] !== head && es !== head) continue;
    if (rest === undefined) return done(`/${es}`);
    if (parts.length > 2) return null;
    const i = items[es][locale].indexOf(rest);
    const j = i >= 0 ? i : items[es].es.indexOf(rest);
    if (j >= 0) return done(`/${es}/${items[es].es[j]}`);
  }
  return null;
}

/** Traduce un enlace interno (`/ruta?query#hash`) al idioma indicado. Los enlaces externos y los `#` se dejan igual. */
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const m = /^([^?#]*)(.*)$/.exec(href)!;
  return toLocalePath(m[1] || "/", locale) + m[2];
}
