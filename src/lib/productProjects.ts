import type { Locale } from "./dictionaries";
import { projectImages } from "./solutionsData";
import { solutionsEs } from "./solutionsContent.es";
import { solutionsEn } from "./solutionsContent.en";
import { solutionsPt } from "./solutionsContent.pt";

export type ProductProject = { title: string; text: string[]; image: string | null };
type Text = { title: string; text: string[] };

/** Productos cuyos proyectos son los mismos que los de una solución: producto → solución (índices de menú). */
const sharedWithSolution: Record<number, number> = { 7: 9, 8: 8, 9: 10, 11: 12, 12: 11 };
const solutionContent = { es: solutionsEs, en: solutionsEn, pt: solutionsPt };

const sma = {
  es: { title: "Mantenimiento de la Panamericana Sur y Norte con mezcla SMA, Lima, Perú", text: ["Proyecto ejecutado en Lima, en un tramo concesionado por Rutas de Lima, donde se implementó por primera vez una mezcla asfáltica discontinua tipo SMA 8, reconocida por su alto desempeño en vías de alto tráfico.", "Para potenciar sus propiedades, se emplearon aditivos estabilizantes, mejoradores de adherencia, tecnologías de mezcla tibia y asfaltos modificados con polímeros, logrando una solución integral que refuerza la durabilidad, adherencia y comportamiento mecánico del pavimento."] },
  en: { title: "Maintenance of the Panamericana Sur and Norte with SMA mix, Lima, Peru", text: ["Project carried out in Lima, on a section under concession to Rutas de Lima, where a gap-graded SMA 8 asphalt mix, recognized for its high performance on heavy-traffic roads, was implemented for the first time.", "To enhance its properties, stabilizing additives, adhesion improvers, warm-mix technologies and polymer-modified asphalts were used, achieving a comprehensive solution that strengthens the durability, adhesion and mechanical behavior of the pavement."] },
  pt: { title: "Manutenção da Panamericana Sul e Norte com mistura SMA, Lima, Peru", text: ["Projeto executado em Lima, em um trecho concedido à Rutas de Lima, onde foi implementada pela primeira vez uma mistura asfáltica descontínua tipo SMA 8, reconhecida por seu alto desempenho em vias de alto tráfego.", "Para potencializar suas propriedades, foram empregados aditivos estabilizantes, melhoradores de adesividade, tecnologias de mistura morna e asfaltos modificados com polímeros, obtendo uma solução integral que reforça a durabilidade, a adesividade e o comportamento mecânico do pavimento."] },
} satisfies Record<Locale, Text>;

const own: Record<number, Record<Locale, Text[]>> = {
  // Emulsiones asfálticas
  1: {
    es: [
      { title: "Tramo puente Arica - puente Pucusana, Lima, Perú", text: ["En el tramo de la Panamericana Sur, desde el puente Pucusana en dirección a Lurín, Lima, se ejecutó la aplicación de micropavimento tipo III como solución técnica para el mantenimiento vial.", "Esta intervención se diseñó considerando las altas exigencias de tránsito que presenta la vía. Se utilizó emulsión asfáltica catiónica de rotura controlada, aplicada en un espesor de 10 mm, lo que permitió mejorar la durabilidad del pavimento y garantizar una superficie uniforme, resistente y de rápida habilitación al tráfico."] },
      { title: "Tramo: Desvío a Marcona - Puerto Lomas, Ica, Perú", text: ["Se ejecutó la partida de reciclado a profundidad en la carretera del Desvío Marcona a Puerto Lomas, utilizando emulsión asfáltica de rotura lenta como agente estabilizante.", "La aplicación de emulsión de rotura lenta favoreció una mejor cohesión del material reciclado, elevando su resistencia mecánica y estabilidad frente a la humedad, lo que contribuye a una solución más sostenible y eficiente en el tiempo."] },
    ],
    en: [
      { title: "Arica bridge – Pucusana bridge section, Lima, Peru", text: ["On the Panamericana Sur section from the Pucusana bridge toward Lurín, Lima, a type III micro-surfacing was applied as a technical solution for road maintenance.", "This intervention was designed considering the high traffic demands of the road. A cationic controlled-setting asphalt emulsion was used, applied at a thickness of 10 mm, which improved pavement durability and ensured a uniform, resistant surface that could be opened to traffic quickly."] },
      { title: "Section: Marcona Junction – Puerto Lomas, Ica, Peru", text: ["Deep recycling was carried out on the road from the Marcona Junction to Puerto Lomas, using slow-setting asphalt emulsion as the stabilizing agent.", "The slow-setting emulsion promoted better cohesion of the recycled material, raising its mechanical strength and stability against moisture, which contributes to a more sustainable and long-lasting solution."] },
    ],
    pt: [
      { title: "Trecho ponte Arica – ponte Pucusana, Lima, Peru", text: ["No trecho da Panamericana Sul, a partir da ponte Pucusana em direção a Lurín, Lima, foi executada a aplicação de microrrevestimento tipo III como solução técnica para a manutenção viária.", "Essa intervenção foi projetada considerando as altas exigências de tráfego da via. Foi utilizada emulsão asfáltica catiônica de ruptura controlada, aplicada em uma espessura de 10 mm, o que permitiu melhorar a durabilidade do pavimento e garantir uma superfície uniforme, resistente e de rápida liberação ao tráfego."] },
      { title: "Trecho: Desvio para Marcona – Puerto Lomas, Ica, Peru", text: ["Foi executado o serviço de reciclagem em profundidade na rodovia do Desvio Marcona a Puerto Lomas, utilizando emulsão asfáltica de ruptura lenta como agente estabilizante.", "A aplicação da emulsão de ruptura lenta favoreceu uma melhor coesão do material reciclado, elevando sua resistência mecânica e estabilidade frente à umidade, o que contribui para uma solução mais sustentável e eficiente ao longo do tempo."] },
    ],
  },
  // Asfaltos modificados
  2: {
    es: [
      sma.es,
      { title: "Mejoramiento de la Av. Néstor Gambetta con asfalto altamente modificado con polímero HIMA", text: ["Se ejecutó la partida de mezcla asfáltica en caliente utilizando un asfalto altamente modificado con polímero, seleccionado para responder a las altas exigencias del proyecto en cuanto a tránsito pesado, condiciones climáticas cambiantes y velocidades bajas de la operación.", "Esta solución permitió incrementar la resistencia del pavimento frente a la fatiga, el ahuellamiento y el envejecimiento prematuro, asegurando un desempeño superior y una mayor vida útil en un entorno de alta demanda estructural."] },
    ],
    en: [
      sma.en,
      { title: "Improvement of Av. Néstor Gambetta with HIMA highly polymer-modified asphalt", text: ["The hot asphalt mix item was carried out using a highly polymer-modified asphalt, selected to meet the project's high demands in terms of heavy traffic, changing weather conditions and low operating speeds.", "This solution increased the pavement's resistance to fatigue, rutting and premature aging, ensuring superior performance and a longer service life in a setting of high structural demand."] },
    ],
    pt: [
      sma.pt,
      { title: "Melhoria da Av. Néstor Gambetta com asfalto altamente modificado com polímero HIMA", text: ["Foi executado o serviço de mistura asfáltica a quente utilizando um asfalto altamente modificado com polímero, selecionado para atender às altas exigências do projeto em termos de tráfego pesado, condições climáticas variáveis e baixas velocidades de operação.", "Essa solução permitiu aumentar a resistência do pavimento à fadiga, ao afundamento de trilha de roda e ao envelhecimento prematuro, garantindo um desempenho superior e maior vida útil em um ambiente de alta demanda estrutural."] },
    ],
  },
  // Mejorador de adherencia
  4: { es: [sma.es], en: [sma.en], pt: [sma.pt] },
};

const ownImages: Record<number, (string | null)[]> = {
  1: ["IMG_9365.webp", "wqg464wqg464wqg4.png"],
  2: ["z0njs2z0njs2z0nj.png", "DSC_0936-1.webp"],
  4: ["z0njs2z0njs2z0nj.png"],
};

/** Proyectos realizados de un producto (vacío si el original no muestra la sección). */
export function productProjects(index: number, locale: Locale): ProductProject[] {
  const sol = sharedWithSolution[index];
  if (sol !== undefined) {
    return solutionContent[locale][sol].projects.map((p, k) => ({ ...p, image: projectImages[sol]?.[k] ?? null }));
  }
  const items = own[index]?.[locale] ?? [];
  return items.map((p, k) => ({ ...p, image: ownImages[index]?.[k] ?? null }));
}
