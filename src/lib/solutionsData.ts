import type { Locale } from "./dictionaries";
import { solutionChildren } from "./menuData";

/** Una entrada por solución, en el mismo orden que el menú (menuData.solutionChildren aplanado). */
export const solutionMeta = [
  // Pavimentación
  { slug: "bacheo-con-mezcla-en-frio", cat: 0, hero: "DJDJD.jpg", brochure: 1 },
  { slug: "base-granular-reciclada-con-emulsion-asfaltica", cat: 0, hero: "OHY.png", brochure: 0 },
  { slug: "estabilizacion-de-base-con-emulsiones-asfalticas", cat: 0, hero: "js8cgujs8cgujs8c-Photoroom.png", brochure: 0 },
  { slug: "mezclas-asfalticas-recicladas", cat: 0, hero: "4zl6s64zl6s64zl6-Photoroom.png", brochure: 0 },
  { slug: "pavimentacion-con-mezclas-asfalticas", cat: 0, hero: "vaylaivaylaivayl-Photoroom.png", brochure: 0 },
  { slug: "pavimentacion-con-mezclas-asfalticas-modificadas-con-polimeros", cat: 0, hero: "k6sp6fk6sp6fk6sp.png", brochure: 0 },
  { slug: "riegos-de-imprimacion-asfalticas-y-riego-de-liga", cat: 0, hero: "iStock-186856025.jpg", brochure: 0 },
  { slug: "tratamientos-superficiales", cat: 0, hero: "ho3h2vho3h2vho3h.png", brochure: 0 },
  // Señalización y seguridad vial
  { slug: "amortiguadores-de-impacto", cat: 1, hero: "image-Photoroom-3_upscayl_2x_upscayl-lite-4x.png", brochure: 0 },
  { slug: "barreras-metalicas-certificadas", cat: 1, hero: "789v69789v69789v.png", brochure: 0 },
  { slug: "senalizacion-vertical", cat: 1, hero: "evomeyevomeyevom.png", brochure: 0 },
  // Otras soluciones
  { slug: "revestimiento-de-tuneles", cat: 2, hero: "21aag21aag21aag2.png", brochure: 0 },
  { slug: "sistemas-de-mitigacion-de-ruido", cat: 2, hero: "e1778714150934.png", brochure: 0 },
] as const;

export const solutionSlugs = solutionMeta.map((s) => s.slug);
export const solutionHref = (i: number) => `/solucion/${solutionMeta[i].slug}`;

/** Miniaturas de brochure en R2 (la de «alto desempeño» solo la usa el bacheo, como en el sitio original). */
export const brochureThumbs = ["Captura-de-pantalla-2026-10-01-153504-1.png.webp", "Captura-de-pantalla-2026-10-01-153210.png.webp"];
export const brochurePdf = "Brochure-de-productos-asfalticos-2.pdf";

/** Fotos de productos que ya están en R2 (el resto aún no se sube y se muestra sin foto). */
export const productPhotos: Record<string, string> = { "Paneles vitrificados": "xm2m8rxm2m8rxm2mjujuu.jpg" };

/** Títulos por idioma, aplanados en el orden de solutionMeta. */
export const solutionTitles = (locale: Locale) => solutionChildren[locale].flat();

type Labels = {
  home: string;
  title: string;
  intro: string;
  view: string;
  selectSolution: string;
  products: string;
  advantages: string;
  sectors: string;
  projects: string;
  adviceTitle: string;
  adviceText: string;
  brochureTitle: string;
  download: string;
  modalTitle: string;
  modalText: string;
  modalCode: string;
  modalSend: string;
  modalClose: string;
  cases: string;
  news: string;
  moreCases: string;
  moreNews: string;
  noPhoto: string;
  tabs: string[];
};

export const solutionLabels: Record<Locale, Labels> = {
  es: {
    home: "Inicio", title: "Soluciones", intro: "Soluciones integrales para pavimentación, señalización y seguridad vial, y otras necesidades de infraestructura.",
    view: "Ver solución", selectSolution: "Seleccionar solución",
    products: "Productos utilizados", advantages: "Ventajas", sectors: "Sectores de aplicación", projects: "Algunos proyectos realizados",
    adviceTitle: "¿Necesita asesoramiento?", adviceText: "Cuéntanos sobre tu proyecto y nuestro equipo te contactará.",
    brochureTitle: "Productos asfálticos", download: "Descargar",
    modalTitle: "Completa tus datos para descargar el brochure", modalText: "Ingresa tus datos y descarga el brochure.", modalCode: "Código", modalSend: "Descargar brochure", modalClose: "Cerrar",
    cases: "Casos de éxito", news: "Noticias", moreCases: "Ver más casos", moreNews: "Ver más noticias", noPhoto: "Sin foto",
    tabs: ["Pavimentación", "Señalización y seguridad vial", "Otras soluciones"],
  },
  en: {
    home: "Home", title: "Solutions", intro: "Comprehensive solutions for paving, signage and road safety, and other infrastructure needs.",
    view: "View solution", selectSolution: "Select solution",
    products: "Products used", advantages: "Advantages", sectors: "Application sectors", projects: "Some projects carried out",
    adviceTitle: "Need advice?", adviceText: "Tell us about your project and our team will contact you.",
    brochureTitle: "Asphalt products", download: "Download",
    modalTitle: "Fill in your details to download the brochure", modalText: "Enter your details and download the brochure.", modalCode: "Code", modalSend: "Download brochure", modalClose: "Close",
    cases: "Success stories", news: "News", moreCases: "View more cases", moreNews: "View more news", noPhoto: "No photo",
    tabs: ["Paving", "Signage and road safety", "Other solutions"],
  },
  pt: {
    home: "Início", title: "Soluções", intro: "Soluções integrais para pavimentação, sinalização e segurança viária, e outras necessidades de infraestrutura.",
    view: "Ver solução", selectSolution: "Selecionar solução",
    products: "Produtos utilizados", advantages: "Vantagens", sectors: "Setores de aplicação", projects: "Alguns projetos realizados",
    adviceTitle: "Precisa de assessoria?", adviceText: "Conte-nos sobre o seu projeto e nossa equipe entrará em contato.",
    brochureTitle: "Produtos asfálticos", download: "Baixar",
    modalTitle: "Preencha seus dados para baixar o brochure", modalText: "Informe seus dados e baixe o brochure.", modalCode: "Código", modalSend: "Baixar brochure", modalClose: "Fechar",
    cases: "Casos de sucesso", news: "Notícias", moreCases: "Ver mais casos", moreNews: "Ver mais notícias", noPhoto: "Sem foto",
    tabs: ["Pavimentação", "Sinalização e segurança viária", "Outras soluções"],
  },
};

export type Advantage = { t?: string; d: string };
export type SolutionContent = {
  desc: string[];
  products: string[];
  advantages: Advantage[];
  sectors: string[];
  projects: { title: string; text: string[] }[];
};

/** Índice plano de una solución a partir de su categoría y su posición dentro de ella. */
export const solutionIndex = (cat: number, k: number) => solutionMeta.findIndex((s) => s.cat === cat) + k;
export const solutionTabHref = (cat: number) => `/solucion?tab-${cat + 1}`;

const G = (id: string, suffix = "") => `${id}${suffix}.png`;

/** Foto de cada producto utilizado, por solución (misma posición que `products` del contenido). null = sin foto aún. */
export const productImages: (string | null)[][] = [
  [G("8lyelk8lyelk8lyeuuuj")], // 0 bacheo
  [G("5j7exd5j7exd5j7e")], // 1 base granular
  [G("oizn9oizn9oizn9o")], // 2 estabilización
  ["DSC_0903-1-1.webp", "aditivados.webp"], // 3 mezclas recicladas
  [G("h4nh22h4nh22h4nh"), "053528d0-4101-4bd4-80de-4847db732297.webp", "Acabado-final-1.webp"], // 4 pavimentación
  ["DSC_0903-1-1.webp", "aditivados.webp"], // 5 modificadas con polímeros
  [G("wkma34wkma34wkma")], // 6 riegos
  [G("aezwmoaezwmoaezw"), G("7zuhnz7zuhnz7zuh")], // 7 tratamientos
  [G("7oaug37oaug37oau")], // 8 amortiguadores
  ["Barrera-borde-lateral.webp", "Barrera-borde-puente-1.webp", "barrera-medianera.webp"], // 9 barreras
  ["Captura-de-pantalla-2025-10-07-130535.webp", "Captura-de-pantalla-2025-10-07-130605.webp", "Captura-de-pantalla-2025-10-07-130636.webp", G("tr1xqtr1xqtr1xqt"), "e1778710693904.webp"], // 10 señalización vertical
  ["xm2m8rxm2m8rxm2mjujuu.jpg"], // 11 túneles
  [G("52rn7d52rn7d52rn"), G("wvt0h7wvt0h7wvt0")], // 12 mitigación de ruido
];

/** Foto de cada proyecto realizado, por solución. */
export const projectImages: (string | null)[][] = [
  [G("p88cmzp88cmzp88c")],
  [G("wqg464wqg464wqg4")],
  [G("oizn9oizn9oizn9o"), G("sak788sak788sak7"), G("c646w7c646w7c646")],
  [G("z2byauz2byauz2by"), G("lt5hpblt5hpblt5h")],
  [G("image-Photoroom-1")],
  [G("image-Photoroom-1")],
  [G("wkma34wkma34wkma"), "Proyecto-Cora-Cora-Concar.webp"],
  [G("aezwmoaezwmoaezw")],
  [G("yae8pyae8pyae8py")], // 8 amortiguadores
  ["Foto-Canta-Barreras-2.webp", "PER-Barrera-Certificada-Carretera-Tacna-Collpa-La-Paz-2.webp"], // 9 barreras
  [G("qh9ui0qh9ui0qh9u"), G("tbmtttbmtttbmttt")], // 10 señalización
  [G("nk70h2nk70h2nk70")], // 11 túneles
  [G("t07uoft07uoft07u")], // 12 mitigación de ruido
];

/** Iconos SVG de sectores (copiados del sitio original a /public/sectores), alineados con `sectors` de cada solución. */
const roadIcons = ["autopistas-20", "vias-colectoras-o-interestatales-21", "pavimentacion-vias-interurbanas", "vias-bajo-volumen", "puertos-y-aeropuertos-30", "almacenes-logisticos"];
const granularIcons = ["vialidad", "mineria-28", "energia", "hidrocarburo", "agricultura", "puertos-y-aeropuertos-30", "urbano"];
const concIcons = ["vialidad", "pavimentacion-vias-nacionales", "mineria-28"];
export const sectorIcons: string[][] = [
  ["vialidad", "puertos-y-aeropuertos-30", "urbano"],
  granularIcons, granularIcons,
  roadIcons, roadIcons, roadIcons, roadIcons,
  ["vialidad", "vias-bajo-volumen", "urbano", "vias-alternas-momentaneas-23"],
  concIcons, concIcons, concIcons,
  ["vialidad", "urbano", "puertos-y-aeropuertos-30"],
  concIcons,
];
