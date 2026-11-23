import type { Locale } from "./dictionaries";

/** Slugs de los casos, en el mismo orden que dictionaries.cases.items y r2.caseImages. */
export const caseSlugs = [
  "proyecto-intercambio-vial-las-torres-solucion-para-mejorar-la-movilidad-urbana",
  "estandares-internacionales-en-el-nuevo-aeropuerto-jorge-chavez-pavimentacion-de-alta-performance-bajo-normativa-faa",
  "construccion-del-nuevo-puente-montalvo",
  "el-desafio-de-rutas-de-lima-en-la-panamericana-sur",
  "pavimentacion-con-mezclas-asfalticas-modificadas-con-polimeros",
] as const;

export const caseHref = (i: number) => `/caso-de-exito/${caseSlugs[i]}`;

/** Filtros (mismo orden que el sitio original, con «Todos» al inicio). */
export const caseFilterIds = ["all", "conv", "adit", "mod", "emul", "adh", "frio", "otros", "vial", "sell"] as const;
export type CaseFilter = (typeof caseFilterIds)[number];

/** Categorías de cada caso (según la ficha de cada caso en el sitio original). */
export const caseCategories: Exclude<CaseFilter, "all">[][] = [
  ["mod"], // Las Torres
  ["conv", "mod"], // Aeropuerto Jorge Chávez
  ["emul"], // Puente Montalvo
  ["mod"], // Rutas de Lima
  ["mod"], // Pavimentación con polímeros
];

/** Imagen interior opcional de cada caso (solo las que ya están en R2). */
export const caseInlineImages: (string | null)[] = [null, "96qfok96q-1.webp", null, null, "96qfok96q-1.webp"];

type Block = { text?: string; items?: string[]; after?: string };
export type Case = { problem: Block; solution: Block; benefits: Block };

type Labels = {
  home: string;
  title: string;
  intro: string;
  filters: Record<CaseFilter, string>;
  filterLabel: string;
  empty: string;
  problem: string;
  solution: string;
  benefits: string;
  back: string;
  share: string;
  copied: string;
  related: string;
  adviceTitle: string;
  adviceText: string;
  adviceCta: string;
};

export const caseLabels: Record<Locale, Labels> = {
  es: {
    home: "Inicio",
    title: "Casos de éxito",
    intro: "Descubre cómo nuestras soluciones innovadoras han llevado al éxito a nuestros clientes en diversos proyectos.",
    filters: { all: "Todos", conv: "Asfalto convencional", adit: "Asfaltos aditivados", mod: "Asfaltos modificados", emul: "Emulsiones asfálticas", adh: "Mejorador de adherencia", frio: "Mezcla asfáltica en frío", otros: "Otros productos", vial: "Seguridad vial", sell: "Sellador de grietas" },
    filterLabel: "Filtrar casos por producto",
    empty: "Pronto compartiremos casos de éxito de esta categoría.",
    problem: "El problema",
    solution: "La solución",
    benefits: "Beneficios",
    back: "Volver",
    share: "Compartir:",
    copied: "Enlace copiado",
    related: "Otros casos relacionados",
    adviceTitle: "¿Necesitas asesoramiento?",
    adviceText: "Nuestro equipo está listo para asesorarte y ayudarte a encontrar la mejor opción para tu proyecto.",
    adviceCta: "Solicitar asesoría",
  },
  en: {
    home: "Home",
    title: "Success stories",
    intro: "Discover how our innovative solutions have led our customers to success across a range of projects.",
    filters: { all: "All", conv: "Conventional asphalt", adit: "Additive asphalts", mod: "Modified asphalts", emul: "Asphalt emulsions", adh: "Adhesion promoter", frio: "Cold asphalt mix", otros: "Other products", vial: "Road safety", sell: "Crack sealant" },
    filterLabel: "Filter cases by product",
    empty: "We will soon share success stories for this category.",
    problem: "The problem",
    solution: "The solution",
    benefits: "Benefits",
    back: "Back",
    share: "Share:",
    copied: "Link copied",
    related: "Other related cases",
    adviceTitle: "Need advice?",
    adviceText: "Our team is ready to advise you and help you find the best option for your project.",
    adviceCta: "Request advice",
  },
  pt: {
    home: "Início",
    title: "Casos de sucesso",
    intro: "Descubra como nossas soluções inovadoras levaram ao sucesso os nossos clientes em diversos projetos.",
    filters: { all: "Todos", conv: "Asfalto convencional", adit: "Asfaltos aditivados", mod: "Asfaltos modificados", emul: "Emulsões asfálticas", adh: "Melhorador de adesividade", frio: "Mistura asfáltica a frio", otros: "Outros produtos", vial: "Segurança viária", sell: "Selante de trincas" },
    filterLabel: "Filtrar casos por produto",
    empty: "Em breve compartilharemos casos de sucesso desta categoria.",
    problem: "O problema",
    solution: "A solução",
    benefits: "Benefícios",
    back: "Voltar",
    share: "Compartilhar:",
    copied: "Link copiado",
    related: "Outros casos relacionados",
    adviceTitle: "Precisa de assessoria?",
    adviceText: "Nossa equipe está pronta para assessorar você e ajudar a encontrar a melhor opção para o seu projeto.",
    adviceCta: "Solicitar assessoria",
  },
};

export const caseContent: Record<Locale, Case[]> = {
  es: [
    {
      problem: { text: "Mejoramiento y ampliación del servicio de movilidad urbana en el cruce de la Av. Ramiro Prialé con la Av. Las Torres, con un by-pass en Lurigancho, en una zona de transitabilidad exigente. Circula un alto volumen de vehículos, muchos de gran tonelaje, que cargan el pavimento de forma constante. La congestión hace que los vehículos se detengan o avancen lento por periodos largos, aumentando la presión sobre la superficie, y las altas temperaturas de la zona exigen un pavimento que resista el calor sin deformarse. Se necesitaba una solución para prevenir fallas prematuras y reducir cierres futuros por mantenimiento." },
      solution: { text: "TDM propuso una mezcla asfáltica en caliente modificada con polímeros SBS Betutec PG 76-22 + Adhesol 10000, desarrollada con la metodología de Diseño Balanceado de Mezclas (BMD, enfoque A). Mediante un estudio de Grado de Desempeño (PG), complementado con diseño Marshall y evaluaciones de desempeño con metodología Superpave, se determinó el ligante asfáltico modificado más adecuado. El resultado es un diseño de mezcla robusto y técnicamente adecuado." },
      benefits: { items: ["Diseño específico según las condiciones técnicas, climáticas y de tránsito del proyecto.", "Mayor durabilidad: el asfalto modificado contribuye a una mayor vida útil del pavimento.", "Desempeño confiable: los análisis Superpave prevén un mejor comportamiento frente a fatiga, deformaciones permanentes y daños por humedad inducida."] },
    },
    {
      problem: {
        text: "La construcción de la nueva pista de aterrizaje del Aeropuerto Internacional Jorge Chávez exigía los niveles más rigurosos de ingeniería a nivel global. Los pavimentos aeroportuarios deben soportar:",
        items: ["Presiones de inflado de neumáticos y pesos de aeronaves muy superiores a los del transporte terrestre.", "El cumplimiento estricto de la normativa FAA (Federal Aviation Administration), con tolerancias y exigencias de calidad que superan ampliamente estándares nacionales como la EG-2013.", "Cero margen de error para evitar desprendimientos de material que puedan comprometer las turbinas de los aviones."],
      },
      solution: {
        text: "TDM propuso un paquete estructural de alta resistencia con 10 cm de Mezcla Asfáltica en Caliente (MAC) modificada con polímeros de última generación. Sus elementos diferenciadores:",
        items: ["Asfalto Modificado con Polímero (AMP) diseñado para cumplir los parámetros de viscosidad, recuperación elástica y punto de ablandamiento exigidos por la FAA.", "Selección y diseño de materiales según los protocolos internacionales para aeropuertos, con una mezcla más densa, impermeable y resistente a la fatiga.", "Incorporación de la línea Betutec, que da mayor cohesión a la mezcla para que el ligante soporte los esfuerzos tangenciales del frenado y el despegue."],
      },
      benefits: { items: ["Al superar la EG-2013 y alinearse con la FAA, el pavimento tiene una vida útil prolongada y necesita menos mantenimiento correctivo.", "La robustez de la mezcla modificada minimiza fisuras y ahuellamiento bajo el clima y las cargas del Callao.", "El sistema Betutec mantiene la flexibilidad y resistencia del pavimento, absorbiendo cargas dinámicas extremas.", "La obra se posiciona como referente de infraestructura aeroportuaria moderna, regulada con los mismos estándares que los aeropuertos más importantes del mundo."] },
    },
    {
      problem: { text: "El Consorcio Puente Montalvo debía construir el nuevo puente tras el colapso del anterior, afectado por huaicos y desbordes, que interrumpió el tránsito. La obra está en el km 1146 de la Panamericana Sur, distrito de Moquegua, e incluye la pavimentación de rampas, carriles de aproximación, accesos y el propio puente. Exigía resiliencia frente a lluvias, crecidas y huaicos, continuidad del tránsito durante la obra y altos estándares de ingeniería para una infraestructura duradera y segura." },
      solution: { text: "TDM propuso una mezcla asfáltica en caliente con asfalto modificado con polímeros SBS Betutec IC PG 76-22 + Adhesol 10000. Se recomendó tras un estudio de Grado de Desempeño (PG) que consideró 9 años de temperaturas máximas y mínimas del lugar, lo que permitió elegir el ligante más adecuado para el clima y el tránsito." },
      benefits: { text: "La mezcla en caliente con el ligante SBS Betutec IC PG 76-22 cumplió todas las exigencias técnicas del diseño volumétrico Marshall y del desempeño Superpave. El resultado es un pavimento altamente resistente y duradero, con módulos de rigidez elevados y buena recuperación elástica, capaz de soportar altas temperaturas y condiciones extremas de clima y tránsito, lo que garantiza seguridad y continuidad de la infraestructura." },
    },
    {
      problem: {
        text: "La concesionaria Rutas de Lima necesitaba una intervención funcional en tramos de alto volumen de tráfico de la Panamericana Sur y Norte (400,000 m2 aproximadamente), con un flujo de carga pesada muy elevado. La solución debía cumplir cuatro condiciones críticas:",
        items: ["Ser funcional, con una mezcla asfáltica ultradelgada que diera un nivel de servicio de alta calidad para una vía de altísimo tráfico.", "Ser muy resistente a la deformación permanente y, a la vez, tener excelente resistencia a la reflexión de fisuras.", "Tener un nivel de fricción excelente, para dar confort y seguridad a los usuarios.", "Poder aplicarse de noche (de 11:00 pm a 4:00 am), en una jornada corta con buen rendimiento, y liberar el tráfico al terminar la jornada."],
      },
      solution: {
        text: "La concesionaria, en alianza estratégica con la empresa COPAVEL y con el soporte técnico de TDM, eligió una mezcla asfáltica ultradelgada tibia, denominada micropavimento en caliente. Cumple los requisitos de una mezcla ultradelgada tipo SMA 8 (Stone Mastic Asphalt) de 1 pulgada de espesor. El ligante usado fue Betutec 60/85 PG 76-22E warm mix, producido por TDM, que atiende el grado de desempeño PG requerido por el clima y el tránsito. Componentes clave:",
        items: ["Gradación discontinua de agregados para un esqueleto mineral resistente, igual al de una mezcla SMA.", "Fibras de celulosa para estabilizar el ligante, evitar el escurrimiento y lograr una mezcla homogénea con buena resistencia a la deformación permanente y a la reflexión de fisuras.", "Combinación precisa de finos, fibra y ligante modificado, que forma una matriz capaz de absorber esfuerzos sin fisurarse.", "Tecnología warm mix, que permitió aplicar la mezcla de noche, con tiempos largos de transporte y espera, y lograr las densidades de compactación previstas."],
      },
      benefits: { items: ["Desempeño extraordinario, igual al de una mezcla ultradelgada SMA 8, ideal para el altísimo tráfico de la Panamericana Sur y Norte.", "La tecnología warm mix permitió tiempos prolongados de transporte y espera, garantizando calidad y colocación en obra durante las jornadas nocturnas.", "Los ensayos de desempeño del control de calidad en obra garantizan excelente resistencia a la deformación permanente, a la reflexión de fisuras y alta resistencia al derrapamiento.", "La gradación igual a la del SMA, junto con el asfalto modificado, asegura un alto desempeño; tras un año de monitoreo, los resultados siguen siendo excelentes."] },
    },
    {
      problem: {
        text: "La longitud total del proyecto (428 km) estuvo dividida en los siguientes subtramos:",
        items: ["Dv. Quilca – Dv. Arequipa (Repartición): 121.549 km", "Dv. Matarani – Dv. Moquegua: 158.234 km", "Dv. Ilo – Tacna: 113.310 km", "Tacna – La Concordia: 35.520 km"],
        after: "La mezcla asfáltica convencional del estudio de ingeniería inicial no cumplía el desempeño a largo plazo que exigía el tráfico de la concesión, y la solución planteaba una carpeta asfáltica delgada de 4 cm. Además, algunos tramos tenían distancias de transporte mayores a 4 horas, lo que enfriaba la mezcla y no permitía alcanzar las densidades de compactación deseadas.",
      },
      solution: { text: "TDM propuso una solución de alto desempeño, con durabilidad a largo plazo para sostener el rendimiento de la concesión: asfalto modificado con polímeros y aditivos de última generación para mezclas tibias, que resolvió los problemas de compactación." },
      benefits: { items: ["Mejora el desempeño de la mezcla asfáltica.", "Disminuye la susceptibilidad térmica.", "Disminuye la susceptibilidad a la humedad inducida.", "Permite transportar la mezcla a grandes distancias y por más tiempo.", "Permite mantener un mismo punto de ubicación de la planta.", "Resistencia al ahuellamiento, a la fisuración por fatiga y a la fisuración térmica.", "Mejora la adherencia con el agregado."] },
    },
  ],
  en: [
    {
      problem: { text: "Improvement and expansion of urban mobility at the junction of Av. Ramiro Prialé and Av. Las Torres, with a by-pass in Lurigancho, in a demanding traffic zone. A high volume of vehicles, many of them heavy, constantly loads the pavement. Congestion makes vehicles stop or crawl for long periods, increasing pressure on the surface, and the area's high temperatures call for a pavement that resists heat without deforming. A solution was needed to prevent premature failures and reduce future closures for maintenance." },
      solution: { text: "TDM proposed a hot mix asphalt modified with SBS polymers Betutec PG 76-22 + Adhesol 10000, developed with the Balanced Mix Design methodology (BMD, approach A). A Performance Grade (PG) study, complemented by Marshall design and Superpave performance evaluations, determined the most suitable modified binder. The result is a robust, technically sound mix design." },
      benefits: { items: ["A specific design for the project's technical, climate and traffic conditions.", "Greater durability: the modified asphalt contributes to a longer pavement life.", "Reliable performance: Superpave analyses predict better behavior against fatigue, permanent deformation and moisture-induced damage."] },
    },
    {
      problem: {
        text: "Building the new runway at Jorge Chávez International Airport demanded the most rigorous engineering levels worldwide. Airport pavements must withstand:",
        items: ["Tire inflation pressures and aircraft weights far above those of road transport.", "Strict compliance with FAA (Federal Aviation Administration) regulations, with tolerances and quality requirements that far exceed national standards such as EG-2013.", "Zero margin for error, to avoid material loss that could compromise aircraft turbines."],
      },
      solution: {
        text: "TDM proposed a high-strength structural package with 10 cm of Hot Mix Asphalt (HMA) modified with latest-generation polymers. Its distinguishing elements:",
        items: ["Polymer Modified Asphalt (PMA) designed to meet the viscosity, elastic recovery and softening point parameters required by the FAA.", "Material selection and design according to international airport protocols, with a denser, waterproof and fatigue-resistant mix.", "Incorporation of the Betutec line, which gives the mix greater cohesion so the binder withstands the tangential stresses of braking and takeoff."],
      },
      benefits: { items: ["By exceeding EG-2013 and aligning with the FAA, the pavement has a long service life and needs less corrective maintenance.", "The robustness of the modified mix minimizes cracking and rutting under Callao's climate and loads.", "The Betutec system maintains the pavement's flexibility and strength, absorbing extreme dynamic loads.", "The project stands as a benchmark of modern airport infrastructure, governed by the same standards as the world's most important airports."] },
    },
    {
      problem: { text: "Consorcio Puente Montalvo had to build the new bridge after the previous one collapsed, hit by mudslides and overflows, which interrupted traffic. The work is at km 1146 of the Panamericana Sur, in the district of Moquegua, and includes paving ramps, approach lanes, access roads and the bridge itself. It required resilience against rain, floods and mudslides, traffic continuity during construction and high engineering standards for durable, safe infrastructure." },
      solution: { text: "TDM proposed a hot mix asphalt with SBS polymer-modified asphalt Betutec IC PG 76-22 + Adhesol 10000. It was recommended after a Performance Grade (PG) study that considered 9 years of maximum and minimum temperatures at the site, which made it possible to choose the binder best suited to the climate and traffic." },
      benefits: { text: "The hot mix with the SBS Betutec IC PG 76-22 binder met all the technical requirements of the Marshall volumetric design and Superpave performance. The result is a highly resistant, durable pavement with high stiffness moduli and good elastic recovery, able to withstand high temperatures and extreme weather and traffic conditions, ensuring the safety and continuity of the infrastructure." },
    },
    {
      problem: {
        text: "The concessionaire Rutas de Lima needed a functional intervention on high-traffic stretches of the Panamericana Sur and Norte (approximately 400,000 m2), with a very high heavy-load flow. The solution had to meet four critical conditions:",
        items: ["Be functional, with an ultra-thin asphalt mix delivering a high-quality level of service for a very-high-traffic road.", "Be highly resistant to permanent deformation and, at the same time, have excellent resistance to reflective cracking.", "Have an excellent friction level, for user comfort and safety.", "Be applicable at night (11:00 pm to 4:00 am), in a short shift with good output, and reopen traffic when the shift ends."],
      },
      solution: {
        text: "The concessionaire, in a strategic alliance with COPAVEL and with TDM's technical support, chose a warm ultra-thin asphalt mix, called hot micropaving. It meets the requirements of an SMA 8 (Stone Mastic Asphalt) ultra-thin mix, 1 inch thick. The binder was Betutec 60/85 PG 76-22E warm mix, produced by TDM, which meets the PG performance grade required by the climate and traffic. Key components:",
        items: ["Gap-graded aggregates for a strong mineral skeleton, the same as an SMA mix.", "Cellulose fibers to stabilize the binder, prevent drain-down and achieve a homogeneous mix with good resistance to permanent deformation and reflective cracking.", "A precise combination of fines, fiber and modified binder, forming a matrix able to absorb stress without cracking.", "Warm mix technology, which allowed night placement, with long haul and waiting times, and achieved the planned compaction densities."],
      },
      benefits: { items: ["Outstanding performance, equal to an SMA 8 ultra-thin mix, ideal for the very high traffic of the Panamericana Sur and Norte.", "Warm mix technology allowed long haul and waiting times, guaranteeing quality and placement on site during night shifts.", "On-site quality control performance tests ensure excellent resistance to permanent deformation and reflective cracking, and high skid resistance.", "The SMA-type gradation together with the modified asphalt ensures high performance; after a year of monitoring, results remain excellent."] },
    },
    {
      problem: {
        text: "The project's total length (428 km) was divided into the following sub-sections:",
        items: ["Dv. Quilca – Dv. Arequipa (Repartición): 121.549 km", "Dv. Matarani – Dv. Moquegua: 158.234 km", "Dv. Ilo – Tacna: 113.310 km", "Tacna – La Concordia: 35.520 km"],
        after: "The conventional asphalt mix from the initial engineering study did not meet the long-term performance required by the concession's traffic, and the proposal called for a thin 4 cm asphalt layer. In addition, some sections had haul distances of more than 4 hours, which cooled the mix and prevented the desired compaction densities.",
      },
      solution: { text: "TDM proposed a high-performance solution with long-term durability to sustain the concession's performance: polymer-modified asphalt with latest-generation warm mix additives, which solved the compaction problems." },
      benefits: { items: ["Improves the performance of the asphalt mix.", "Lowers thermal susceptibility.", "Lowers moisture-induced susceptibility.", "Allows the mix to be hauled over long distances and for longer.", "Allows the plant to stay at the same location.", "Resistance to rutting, fatigue cracking and thermal cracking.", "Improves adhesion with the aggregate."] },
    },
  ],
  pt: [
    {
      problem: { text: "Melhoria e ampliação do serviço de mobilidade urbana no cruzamento da Av. Ramiro Prialé com a Av. Las Torres, com um by-pass em Lurigancho, em uma zona de trafegabilidade exigente. Circula um alto volume de veículos, muitos de grande tonelagem, que carregam o pavimento de forma constante. O congestionamento faz os veículos pararem ou avançarem devagar por longos períodos, aumentando a pressão sobre a superfície, e as altas temperaturas da zona exigem um pavimento que resista ao calor sem se deformar. Era necessária uma solução para prevenir falhas prematuras e reduzir futuros fechamentos para manutenção." },
      solution: { text: "A TDM propôs uma mistura asfáltica a quente modificada com polímeros SBS Betutec PG 76-22 + Adhesol 10000, desenvolvida com a metodologia de Projeto Balanceado de Misturas (BMD, abordagem A). Por meio de um estudo de Grau de Desempenho (PG), complementado com projeto Marshall e avaliações de desempenho com metodologia Superpave, determinou-se o ligante asfáltico modificado mais adequado. O resultado é um projeto de mistura robusto e tecnicamente adequado." },
      benefits: { items: ["Projeto específico conforme as condições técnicas, climáticas e de tráfego do projeto.", "Maior durabilidade: o asfalto modificado contribui para uma maior vida útil do pavimento.", "Desempenho confiável: as análises Superpave preveem melhor comportamento frente à fadiga, deformações permanentes e danos por umidade induzida."] },
    },
    {
      problem: {
        text: "A construção da nova pista de pouso do Aeroporto Internacional Jorge Chávez exigia os níveis mais rigorosos de engenharia em escala global. Os pavimentos aeroportuários devem suportar:",
        items: ["Pressões de enchimento de pneus e pesos de aeronaves muito superiores aos do transporte terrestre.", "O cumprimento estrito da norma FAA (Federal Aviation Administration), com tolerâncias e exigências de qualidade que superam amplamente padrões nacionais como a EG-2013.", "Margem de erro zero para evitar desprendimentos de material que possam comprometer as turbinas dos aviões."],
      },
      solution: {
        text: "A TDM propôs um pacote estrutural de alta resistência com 10 cm de Mistura Asfáltica a Quente (MAQ) modificada com polímeros de última geração. Seus elementos diferenciais:",
        items: ["Asfalto Modificado com Polímero (AMP) projetado para cumprir os parâmetros de viscosidade, recuperação elástica e ponto de amolecimento exigidos pela FAA.", "Seleção e projeto de materiais segundo os protocolos internacionais para aeroportos, com uma mistura mais densa, impermeável e resistente à fadiga.", "Incorporação da linha Betutec, que dá maior coesão à mistura para que o ligante suporte os esforços tangenciais da frenagem e da decolagem."],
      },
      benefits: { items: ["Ao superar a EG-2013 e alinhar-se com a FAA, o pavimento tem vida útil prolongada e exige menos manutenção corretiva.", "A robustez da mistura modificada minimiza fissuras e afundamentos sob o clima e as cargas do Callao.", "O sistema Betutec mantém a flexibilidade e a resistência do pavimento, absorvendo cargas dinâmicas extremas.", "A obra se posiciona como referência de infraestrutura aeroportuária moderna, regida pelos mesmos padrões dos aeroportos mais importantes do mundo."] },
    },
    {
      problem: { text: "O Consórcio Ponte Montalvo devia construir a nova ponte após o colapso da anterior, atingida por huaicos e transbordamentos, o que interrompeu o tráfego. A obra fica no km 1146 da Panamericana Sul, distrito de Moquegua, e inclui a pavimentação de rampas, faixas de aproximação, acessos e a própria ponte. Exigia resiliência frente a chuvas, cheias e huaicos, continuidade do tráfego durante a obra e altos padrões de engenharia para uma infraestrutura durável e segura." },
      solution: { text: "A TDM propôs uma mistura asfáltica a quente com asfalto modificado com polímeros SBS Betutec IC PG 76-22 + Adhesol 10000. Foi recomendada após um estudo de Grau de Desempenho (PG) que considerou 9 anos de temperaturas máximas e mínimas do local, o que permitiu escolher o ligante mais adequado ao clima e ao tráfego." },
      benefits: { text: "A mistura a quente com o ligante SBS Betutec IC PG 76-22 cumpriu todas as exigências técnicas do projeto volumétrico Marshall e do desempenho Superpave. O resultado é um pavimento altamente resistente e durável, com módulos de rigidez elevados e boa recuperação elástica, capaz de suportar altas temperaturas e condições extremas de clima e tráfego, o que garante segurança e continuidade da infraestrutura." },
    },
    {
      problem: {
        text: "A concessionária Rutas de Lima precisava de uma intervenção funcional em trechos de alto volume de tráfego da Panamericana Sul e Norte (cerca de 400.000 m2), com um fluxo de carga pesada muito elevado. A solução devia cumprir quatro condições críticas:",
        items: ["Ser funcional, com uma mistura asfáltica ultrafina que desse um nível de serviço de alta qualidade para uma via de altíssimo tráfego.", "Ser muito resistente à deformação permanente e, ao mesmo tempo, ter excelente resistência à reflexão de trincas.", "Ter um nível de atrito excelente, para dar conforto e segurança aos usuários.", "Poder ser aplicada à noite (das 23h às 4h), em uma jornada curta com bom rendimento, e liberar o tráfego ao terminar a jornada."],
      },
      solution: {
        text: "A concessionária, em aliança estratégica com a empresa COPAVEL e com o suporte técnico da TDM, escolheu uma mistura asfáltica ultrafina morna, denominada microrrevestimento a quente. Cumpre os requisitos de uma mistura ultrafina tipo SMA 8 (Stone Mastic Asphalt) de 1 polegada de espessura. O ligante usado foi o Betutec 60/85 PG 76-22E warm mix, produzido pela TDM, que atende ao grau de desempenho PG exigido pelo clima e pelo tráfego. Componentes-chave:",
        items: ["Granulometria descontínua dos agregados para um esqueleto mineral resistente, igual ao de uma mistura SMA.", "Fibras de celulose para estabilizar o ligante, evitar o escorrimento e obter uma mistura homogênea com boa resistência à deformação permanente e à reflexão de trincas.", "Combinação precisa de finos, fibra e ligante modificado, formando uma matriz capaz de absorver esforços sem trincar.", "Tecnologia warm mix, que permitiu aplicar a mistura à noite, com longos tempos de transporte e espera, e atingir as densidades de compactação previstas."],
      },
      benefits: { items: ["Desempenho extraordinário, igual ao de uma mistura ultrafina SMA 8, ideal para o altíssimo tráfego da Panamericana Sul e Norte.", "A tecnologia warm mix permitiu tempos prolongados de transporte e espera, garantindo qualidade e aplicação em obra nas jornadas noturnas.", "Os ensaios de desempenho do controle de qualidade em obra garantem excelente resistência à deformação permanente, à reflexão de trincas e alta resistência à derrapagem.", "A granulometria igual à do SMA, junto com o asfalto modificado, assegura alto desempenho; após um ano de monitoramento, os resultados continuam excelentes."] },
    },
    {
      problem: {
        text: "A extensão total do projeto (428 km) foi dividida nos seguintes subtrechos:",
        items: ["Dv. Quilca – Dv. Arequipa (Repartición): 121,549 km", "Dv. Matarani – Dv. Moquegua: 158,234 km", "Dv. Ilo – Tacna: 113,310 km", "Tacna – La Concordia: 35,520 km"],
        after: "A mistura asfáltica convencional do estudo de engenharia inicial não cumpria o desempenho de longo prazo exigido pelo tráfego da concessão, e a solução previa uma camada asfáltica fina de 4 cm. Além disso, alguns trechos tinham distâncias de transporte superiores a 4 horas, o que esfriava a mistura e não permitia atingir as densidades de compactação desejadas.",
      },
      solution: { text: "A TDM propôs uma solução de alto desempenho, com durabilidade de longo prazo para sustentar o desempenho da concessão: asfalto modificado com polímeros e aditivos de última geração para misturas mornas, que resolveu os problemas de compactação." },
      benefits: { items: ["Melhora o desempenho da mistura asfáltica.", "Diminui a suscetibilidade térmica.", "Diminui a suscetibilidade à umidade induzida.", "Permite transportar a mistura por grandes distâncias e por mais tempo.", "Permite manter a usina no mesmo local.", "Resistência ao afundamento, à fissuração por fadiga e à fissuração térmica.", "Melhora a adesividade com o agregado."] },
    },
  ],
};
