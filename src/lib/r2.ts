import optimized from "./r2Optimized.json";

const optimizedKeys: Record<string, string> = optimized;

/**
 * Devuelve la URL pública de un objeto en Cloudflare R2.
 * Si existe una versión optimizada (generada con `scripts/optimize-r2.mjs`) se usa esa; los originales siguen intactos en R2.
 * Para volver a los originales basta con vaciar `r2Optimized.json` (`{}`).
 */
export const r2 = (key: string) =>
  `${(process.env.NEXT_PUBLIC_R2_DOMAIN ?? "").replace(/\/$/, "")}/${optimizedKeys[key] ?? key}`;

export const IMG = {
  logo: "Logo-TDM_Asfaltos.svg",
  hero: "iStock-607903888.webp",
  guarantee: "IMG_9334-3.webp",
  roller: "iStock-519281889.webp",
  aerial: "ipygtaipygtaipyg-e1772750833686.webp",
  tunnel: "IMG_6857.webp",
  paver: "iStock-1027698222_5.webp",
  rollerHighway: "iStock-1050888172_4.webp",
  crackSeal: "iStock-1802468337_6.webp",
  mountain: "obqxhtobqxhtobqx_2.webp",
  bridge: "wzvfuqwzvfuqwzvf_3.webp",
  coldMix: "3s9ycz3s9ycz3s9y-Photoroom_7.webp",
  lasTorres: "wk40lwk40lwk40lw-Photoroom-1.-fotor-enhance-20260305115633.webp",
  airport: "4wtlc14wt.webp",
  archBridge: "ki-1.webp",
  nightRoller: "zezp0fzez.webp",
  vogele: "pavimentacion_2-cde.webp",
  advice: "iStock-1574034729-e1773270672887.webp",
  seminar: "1.jpeg",
  cila: "e1768237118507.webp",
  cilaAwards: "PM.webp",
  safetyPoster: "1-76.webp",
  standTdm: "e1768238545675.webp",
  plant: "DSC_0596.webp",
} as const;

/** Una imagen por solución (mismo orden que dictionaries.solutions.items). */
export const solutionImages = [IMG.paver, IMG.mountain, IMG.tunnel];

/** Una imagen por caso de éxito (mismo orden que dictionaries.cases.items). */
export const caseImages = [IMG.lasTorres, IMG.airport, IMG.archBridge, IMG.nightRoller, IMG.vogele];

/** Una imagen por noticia (mismo orden que dictionaries.news.items). */
export const newsImages: { src: string; pos: string }[] = [
  { src: IMG.seminar, pos: "50% 40%" },
  { src: IMG.cila, pos: "50% 45%" },
  { src: IMG.standTdm, pos: "50% 40%" },
  { src: IMG.safetyPoster, pos: "50% 92%" }, // el póster: se recorta a la foto del equipo
];

/** Una imagen por producto (mismo orden que dictionaries.products.items). Provisional hasta tener fotos de cada producto. */
export const productImages = [
  IMG.rollerHighway, // Asfalto convencional
  IMG.guarantee, // Emulsiones asfálticas
  IMG.hero, // Asfaltos modificados
  IMG.paver, // Asfaltos aditivados
  IMG.aerial, // Mejorador de adherencia
  IMG.crackSeal, // Sellador de grietas
  IMG.coldMix, // Mezcla en frío
  IMG.mountain, // Barreras metálicas certificadas
  IMG.bridge, // Amortiguadores de impacto
  IMG.mountain, // Señalización vertical
  IMG.roller, // Estabilizador de suelos
  IMG.bridge, // Barreras acústicas
  IMG.tunnel, // Paneles vitrificados
];
