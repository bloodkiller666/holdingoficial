import type { Locale } from "./dictionaries";

/** Soluciones por categoría (mismo orden que el menú original). Índice = categoría. */
export const solutionChildren: Record<Locale, string[][]> = {
  es: [
    ["Bacheo con mezcla en frío", "Base granular reciclada con emulsión asfáltica", "Estabilización de base con emulsiones asfálticas", "Mezclas asfálticas recicladas", "Pavimentación con mezclas asfálticas", "Pavimentación con mezclas asfálticas modificadas", "Riegos de Imprimación asfálticas y Riego de Liga", "Tratamientos superficiales"],
    ["Amortiguadores de impacto", "Barreras metálicas certificadas", "Señalización vertical"],
    ["Revestimiento de túneles", "Sistemas de mitigación de ruido"],
  ],
  en: [
    ["Cold mix patching", "Recycled granular base with asphalt emulsion", "Base stabilization with asphalt emulsions", "Recycled asphalt mixes", "Paving with asphalt mixes", "Paving with modified asphalt mixes", "Prime coats and tack coats", "Surface treatments"],
    ["Impact attenuators", "Certified metal barriers", "Vertical signage"],
    ["Tunnel lining", "Noise mitigation systems"],
  ],
  pt: [
    ["Remendo com mistura a frio", "Base granular reciclada com emulsão asfáltica", "Estabilização de base com emulsões asfálticas", "Misturas asfálticas recicladas", "Pavimentação com misturas asfálticas", "Pavimentação com misturas asfálticas modificadas", "Pinturas de ligação e imprimação asfálticas", "Tratamentos superficiais"],
    ["Atenuadores de impacto", "Barreiras metálicas certificadas", "Sinalização vertical"],
    ["Revestimento de túneis", "Sistemas de mitigação de ruído"],
  ],
};
