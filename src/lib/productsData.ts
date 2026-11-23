import type { Locale } from "./dictionaries";
import { dictionaries } from "./dictionaries";

/** Un registro por producto, en el mismo orden que dictionaries.products.items. */
export const productMeta = [
  { slug: "asfalto-convencional", tab: 0, image: "iStock-1048992274-e1779134112479-768x319.jpg", intro: "iStock-978535424.webp" },
  { slug: "emulsiones-asfalticas", tab: 0, image: "obqxhtobqxhtobqx.webp", intro: "1339096195.webp" },
  { slug: "asfaltos-modificados", tab: 0, image: "wzvfuqwzvfuqwzvf.webp", intro: "iStock-1250173988.webp" },
  { slug: "asfaltos-aditivados", tab: 0, image: "iStock-1050888172.webp", intro: "1132001996.webp" },
  { slug: "mejorador-de-adherencia", tab: 0, image: "1027698222.webp", intro: "844481952.jpg" },
  { slug: "sellador-de-grietas", tab: 0, image: "1802468337.webp", intro: "1023903760.webp" },
  { slug: "mezcla-en-frio", tab: 0, image: "3s9ycz3s9ycz3s9y.webp", intro: "iStock-2220248002-Photoroom-1.webp" },
  { slug: "barreras-metalicas-certificadas", tab: 1, image: "789v69789v69789v.webp", intro: null },
  { slug: "amortiguadores-de-impacto", tab: 1, image: "upscayl_2x_upscayl-lite-4x.webp", intro: "7oaug37oaug37oau.png" },
  { slug: "senalizacion-vertical", tab: 1, image: "evomeyevomeyevom.webp", intro: null },
  { slug: "estabilizador-de-suelos", tab: 2, image: "5cpxk05cpxk05cpx.webp", intro: null },
  { slug: "barreras-acusticas", tab: 2, image: "5vmakw5vmakw5vma.webp", intro: null },
  { slug: "paneles-vitrificados", tab: 2, image: "21aag21aag21aag2.png", intro: "xm2m8rxm2m8rxm2mjujuu.jpg" },
] as const;

export const productSlugs = productMeta.map((p) => p.slug);
export const productHref = (i: number) => `/productos/${productMeta[i].slug}`;
export const productTabHref = (tab: number) => `/productos?tab-${tab + 1}`;

/** Banner de cada pestaña del listado (el de Señalización conserva el nombre mal codificado con el que se subió a R2). */
export const productTabBanners = ["asfalto-convencional_intro.webp", "Banner_seguridad-vial-y-seA%C2%B1alizaciA%C2%B3n.webp", "Banner_otros-productos.webp"];

export const productTitles = (locale: Locale) => dictionaries[locale].products.items.map((p) => p.name);

/** Iconos de sectores (en /public/sectores), alineados con `sectors` de cada producto. */
export const productSectorIcons: string[][] = [["pavimentacion-vias-nacionales","pavimentacion-de-vias-interdepartamentales","pavimentacion-puertos","pavimentacion-vias-interurbanas","vias-interurbanas-27"],["pavimentacion-vias-nacionales","pavimentacion-de-vias-interdepartamentales","pavimentacion-puertos","pavimentacion-vias-interurbanas"],["pavimentacion-vias-nacionales","pavimentacion-de-vias-interdepartamentales","pavimentacion-puertos","pavimentacion-vias-interurbanas"],["pavimentacion-vias-nacionales","pavimentacion-de-vias-interdepartamentales","pavimentacion-puertos","pavimentacion-vias-interurbanas","vias-interurbanas-27"],["pavimentacion-vias-nacionales","pavimentacion-de-vias-interdepartamentales","pavimentacion-puertos","pavimentacion-vias-interurbanas","vias-interurbanas-27"],["pavimentacion-vias-nacionales","pavimentacion-de-vias-interdepartamentales","pavimentacion-puertos","pavimentacion-vias-interurbanas","vias-interurbanas-27"],["pavimentacion-vias-nacionales","pavimentacion-de-vias-interdepartamentales","vias-interurbanas-27"],["vialidad","pavimentacion-vias-nacionales","mineria-28"],["vialidad","pavimentacion-vias-nacionales","mineria-28"],["vialidad","pavimentacion-vias-nacionales","mineria-28"],["carreteras-22","via-ferrea","patio-de-contenedores-19","puertos-y-aeropuertos-30"],["vialidad","pavimentacion-vias-nacionales","mineria-28"],["vialidad","urbano","puertos-y-aeropuertos-30"]];

export type ProductContent = {
  desc: string[];
  benefits: { t: string; d?: string }[];
  apps: string[];
  sectors: string[];
};

type Labels = {
  home: string;
  title: string;
  view: string;
  selectProduct: string;
  benefits: string;
  apps: string;
  sectors: string;
  adviceText: string;
  empty: string;
};

export const productLabels: Record<Locale, Labels> = {
  es: { home: "Inicio", title: "Productos", view: "Ver producto", selectProduct: "Seleccionar producto", benefits: "Beneficios", apps: "Aplicaciones", sectors: "Sectores de aplicación", adviceText: "Nuestro equipo de expertos está listo para asesorarte y ayudarte a encontrar la mejor opción para tu proyecto.", empty: "No se encontraron productos en esta categoría." },
  en: { home: "Home", title: "Products", view: "View product", selectProduct: "Select product", benefits: "Benefits", apps: "Applications", sectors: "Application sectors", adviceText: "Our team of experts is ready to advise you and help you find the best option for your project.", empty: "No products found in this category." },
  pt: { home: "Início", title: "Produtos", view: "Ver produto", selectProduct: "Selecionar produto", benefits: "Benefícios", apps: "Aplicações", sectors: "Setores de aplicação", adviceText: "Nossa equipe de especialistas está pronta para assessorá-lo e ajudá-lo a encontrar a melhor opção para o seu projeto.", empty: "Nenhum produto encontrado nesta categoria." },
};
