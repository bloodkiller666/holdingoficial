import type { Metadata } from "next";
import type { Locale } from "./dictionaries";
import { LOCALE_CODES, toLocalePath } from "./routes";

export const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000";
const BRAND = "TDM Asfaltos";

/** canonical + hreflang de una página, a partir de su ruta canónica (española). */
export function alternates(canonical: string, lang: Locale): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of LOCALE_CODES) languages[l] = toLocalePath(canonical, l);
  languages["x-default"] = toLocalePath(canonical, "es");
  return { canonical: toLocalePath(canonical, lang), languages };
}

/** Metadatos completos de una página: título, descripción, canonical y alternates por idioma. */
export function pageMeta(lang: Locale, canonical: string, title: string, description?: string): Metadata {
  const full = canonical === "/" ? title : `${title} | ${BRAND}`;
  return {
    title: full,
    description,
    alternates: alternates(canonical, lang),
    openGraph: { title: full, description, locale: lang, siteName: BRAND, type: "website", url: toLocalePath(canonical, lang) },
  };
}

type Text = Record<Locale, { title: string; description: string }>;

/** Título y descripción de las páginas estáticas, por ruta canónica. */
export const staticMeta: Record<string, Text> = {
  "/": {
    es: { title: "TDM Asfaltos | Asfaltos a la medida", description: "Más de 20 años desarrollando soluciones asfálticas para la construcción y mantenimiento de infraestructura vial en el Perú." },
    en: { title: "TDM Asfaltos | Tailor-made asphalts", description: "Over 20 years developing asphalt solutions for the construction and maintenance of road infrastructure in Peru." },
    pt: { title: "TDM Asfaltos | Asfaltos sob medida", description: "Mais de 20 anos desenvolvendo soluções asfálticas para a construção e manutenção de infraestrutura viária no Peru." },
  },
  "/nosotros": {
    es: { title: "Sobre nosotros", description: "Líderes en soluciones asfálticas en Perú con más de 20 años en el sector vial: propósito, principios culturales, soluciones integrales y certificaciones." },
    en: { title: "About us", description: "Leaders in asphalt solutions in Peru with over 20 years in the road sector: purpose, cultural principles, comprehensive solutions and certifications." },
    pt: { title: "Sobre nós", description: "Líderes em soluções asfálticas no Peru com mais de 20 anos no setor viário: propósito, princípios culturais, soluções integrais e certificações." },
  },
  "/centro-de-desarrollo-tecnologico": {
    es: { title: "Centro de Desarrollo Tecnológico", description: "Laboratorios Superpave, de desempeño mecanístico, de control de calidad y de diseño de mezclas asfálticas. Certificaciones ISO 9001, 14001 y 45001." },
    en: { title: "Technological Development Center", description: "Superpave, mechanistic performance, quality control and asphalt mix design laboratories. ISO 9001, 14001 and 45001 certifications." },
    pt: { title: "Centro de Desenvolvimento Tecnológico", description: "Laboratórios Superpave, de desempenho mecanicista, de controle de qualidade e de projeto de misturas asfálticas. Certificações ISO 9001, 14001 e 45001." },
  },
  "/sostenibilidad": {
    es: { title: "Sostenibilidad", description: "Asfaltos modificados con polímeros: menos impacto, más eficiencia. Menor huella de carbono, mayor durabilidad y desarrollo sostenible de la sociedad." },
    en: { title: "Sustainability", description: "Polymer-modified asphalts: less impact, more efficiency. A smaller carbon footprint, greater durability and sustainable development of society." },
    pt: { title: "Sustentabilidade", description: "Asfaltos modificados com polímeros: menos impacto, mais eficiência. Menor pegada de carbono, maior durabilidade e desenvolvimento sustentável da sociedade." },
  },
  "/unete-a-nosotros": {
    es: { title: "Únete a nosotros", description: "Sé parte del equipo TDM Asfaltos: talento, principios, historias de crecimiento y vacantes disponibles." },
    en: { title: "Join us", description: "Be part of the TDM Asfaltos team: talent, principles, growth stories and open positions." },
    pt: { title: "Junte-se a nós", description: "Faça parte da equipe TDM Asfaltos: talento, princípios, histórias de crescimento e vagas disponíveis." },
  },
  "/contacto": {
    es: { title: "Contacto", description: "Contáctanos: teléfono, WhatsApp, correo, ubicación en Chorrillos - Lima y formulario de consulta." },
    en: { title: "Contact", description: "Get in touch: phone, WhatsApp, email, location in Chorrillos - Lima and inquiry form." },
    pt: { title: "Contato", description: "Entre em contato: telefone, WhatsApp, e-mail, localização em Chorrillos - Lima e formulário de consulta." },
  },
  "/politicas-de-privacidad": {
    es: { title: "Políticas de privacidad", description: "Política sobre protección de datos personales de GRUPO TDM: definiciones, principios, derechos de los usuarios y contacto." },
    en: { title: "Privacy policies", description: "GRUPO TDM personal data protection policy: definitions, principles, user rights and contact." },
    pt: { title: "Políticas de privacidade", description: "Política de proteção de dados pessoais do GRUPO TDM: definições, princípios, direitos dos usuários e contato." },
  },
  "/libro-de-reclamaciones": {
    es: { title: "Libro de Reclamaciones", description: "Libro de Reclamaciones virtual de TDM ASFALTOS S.A.C. (RUC 20514831620): registra un reclamo o una queja conforme al Código de Protección y Defensa del Consumidor." },
    en: { title: "Complaints Book", description: "Online Complaints Book of TDM ASFALTOS S.A.C. (RUC 20514831620): file a claim or a complaint under Peru's Consumer Protection and Defense Code." },
    pt: { title: "Livro de Reclamações", description: "Livro de Reclamações virtual da TDM ASFALTOS S.A.C. (RUC 20514831620): registre uma reclamação ou queixa conforme o Código de Proteção e Defesa do Consumidor do Peru." },
  },
  "/solucion": {
    es: { title: "Soluciones", description: "Soluciones integrales de pavimentación, señalización y seguridad vial, y otras soluciones de infraestructura." },
    en: { title: "Solutions", description: "Comprehensive paving, signage and road safety solutions, and other infrastructure solutions." },
    pt: { title: "Soluções", description: "Soluções integrais de pavimentação, sinalização e segurança viária, e outras soluções de infraestrutura." },
  },
  "/productos": {
    es: { title: "Productos", description: "Asfaltos, emulsiones, señalización y seguridad vial, y otros productos de TDM Asfaltos." },
    en: { title: "Products", description: "Asphalts, emulsions, signage and road safety, and other TDM Asfaltos products." },
    pt: { title: "Produtos", description: "Asfaltos, emulsões, sinalização e segurança viária, e outros produtos da TDM Asfaltos." },
  },
  "/caso-de-exito": {
    es: { title: "Casos de éxito", description: "Descubre cómo nuestras soluciones innovadoras han llevado al éxito a nuestros clientes en diversos proyectos." },
    en: { title: "Success stories", description: "Discover how our innovative solutions have led our clients to success in a variety of projects." },
    pt: { title: "Casos de sucesso", description: "Descubra como nossas soluções inovadoras levaram nossos clientes ao sucesso em diversos projetos." },
  },
  "/noticia": {
    es: { title: "Noticias", description: "Mantente al día con los últimos avances y eventos de TDM Asfaltos." },
    en: { title: "News", description: "Stay up to date with the latest developments and events at TDM Asfaltos." },
    pt: { title: "Notícias", description: "Fique por dentro dos últimos avanços e eventos da TDM Asfaltos." },
  },
};

const isLocale = (v: string): v is Locale => (LOCALE_CODES as string[]).includes(v);

/** generateMetadata de una página estática. */
export async function staticPageMeta(params: Promise<{ lang: string }>, canonical: string): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = staticMeta[canonical][lang];
  return pageMeta(lang, canonical, m.title, m.description);
}

/** generateMetadata de una página de detalle: título y descripción ya resueltos por idioma. */
export async function detailPageMeta(
  params: Promise<{ lang: string; slug: string }>,
  section: string,
  resolve: (lang: Locale, slug: string) => { title: string; description?: string } | null,
): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const r = resolve(lang, slug);
  return r ? pageMeta(lang, `${section}/${slug}`, r.title, r.description) : {};
}
