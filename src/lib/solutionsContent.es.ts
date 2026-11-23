import type { SolutionContent } from "./solutionsData";

const sectorsRoad = ["Autopistas", "Vías colectoras o interestatales", "Vías interurbanas", "Vías de bajo volumen de tránsito", "Aeropuertos y Puertos", "Almacenes logísticos"];
const sectorsGranular = ["Vialidad", "Minería", "Energía", "Hidrocarburos", "Agricultura", "Puertos y Aeropuertos", "Desarrollo Urbano"];
const sectorsConc = ["Concesiones: Viales, Puertos y Aeropuertos", "Vías nacionales e interurbanas", "Minería"];

const durable = { t: "Durabilidad estructural con respaldo técnico", d: "Solución de larga vida útil; su efectividad depende del diseño de la mezcla y del diseño estructural del pavimento." };
const functional = { t: "Superficie funcional de alto desempeño", d: "Capa de rodadura uniforme y homogénea, con propiedades que mejoran la fricción, controlan la rugosidad y maximizan el desempeño de la mezcla en todo tipo de condiciones." };
const protect = { t: "Protección integral de las capas inferiores", d: "Barrera funcional que resguarda eficientemente las capas granulares del sistema vial, preservando su estabilidad frente al tránsito y las cargas." };

const rutasLima = {
  title: "Panamericana Sur con mezcla SMA 8, Lima, Perú",
  text: ["Proyecto en Lima, en un tramo concesionado por Rutas de Lima, donde se implementó por primera vez una mezcla asfáltica discontinua tipo SMA 8, reconocida por su alto desempeño en vías de alto tráfico.", "Se usaron aditivos estabilizantes, mejoradores de adherencia, tecnologías de mezcla tibia y asfaltos modificados con polímeros, para mejorar durabilidad, adherencia y comportamiento mecánico."],
};

export const solutionsEs: SolutionContent[] = [
  {
    desc: ["El bacheo asfáltico en frío es una técnica de reparación localizada de pavimentos con mezclas fabricadas con emulsiones asfálticas. Se compone de agregados minerales (gruesos y finos), emulsión asfáltica, cemento, agua y, si se requiere, aditivos específicos.", "Permite intervenciones rápidas y seguras sin equipos térmicos, lo que la hace ideal para el mantenimiento urbano o de zonas de difícil acceso."],
    products: ["Emulsión asfáltica de rotura lenta"],
    advantages: [
      { t: "Producción a temperatura ambiente", d: "Se elabora con emulsiones, sin temperaturas elevadas." },
      { t: "Versatilidad en múltiples capas del pavimento", d: "Se puede usar en capa de rodadura, capas intermedias o bermas." },
      { t: "Alta facilidad de aplicación en campo", d: "Su colocación sencilla permite intervenciones ágiles." },
      { t: "Solución con bajo impacto ambiental", d: "Minimiza las emisiones y el consumo energético." },
      { t: "Seguridad y salud para el equipo aplicador", d: "No genera vapores ni requiere altas temperaturas." },
    ],
    sectors: ["Vialidad", "Puertos y Aeropuertos", "Desarrollo Urbano"],
    projects: [{ title: "Concesión vial de la Panamericana Sur, Perú", text: ["Partida de mezcla asfáltica en frío para el tratamiento de bermas, para el concesionario COVINCA, con emulsión de rotura lenta a temperatura ambiente.", "Se logró cohesión, durabilidad y un entorno de trabajo más seguro."] }],
  },
  {
    desc: ["Las emulsiones de rotura lenta mejoran las propiedades físicas y mecánicas de las capas granulares, ya sea incorporando RAP (pavimento asfáltico reciclado) o material granular de préstamo.", "Las capas estabilizadas tienen mayor estabilidad mecánica, mejor comportamiento frente a la humedad inducida y mayor densificación, lo que mejora el desempeño a largo plazo."],
    products: ["Emulsión asfáltica de rotura lenta"],
    advantages: [
      { t: "Mayor resistencia mecánica en capas granulares", d: "Mejora la capacidad portante del material estabilizado." },
      { t: "Densificación eficiente y sellado parcial", d: "Mejor compactación e impermeabilización, con menor permeabilidad." },
      { t: "Estabilidad estructural mejorada", d: "Más resistencia a cargas dinámicas y mayor durabilidad del paquete granular." },
      { t: "Desempeño superior frente a la humedad", d: "Mayor resistencia al agua y menor riesgo de pérdida de soporte." },
      { t: "Revalorización de materiales disponibles", d: "Permite incluir RAP, con soluciones más sostenibles y económicas." },
    ],
    sectors: sectorsGranular,
    projects: [{ title: "Tramo Panamericana Sur entre Marcona - Puerto Lomas, Ica, Perú", text: ["Reciclado a profundidad en la carretera del Desvío Marcona a Puerto Lomas, con emulsión de rotura lenta como agente estabilizante.", "Mejoró la cohesión, la resistencia mecánica y la estabilidad frente a la humedad."] }],
  },
  {
    desc: ["La estabilización de capas granulares con emulsiones de rotura lenta mejora de forma integral sus propiedades físicas y mecánicas.", "Aumenta la estabilidad estructural, mejora la densificación y mantiene la integridad ante la humedad inducida, dando una base más resistente y durable para condiciones de carga y clima exigentes."],
    products: ["Emulsión asfáltica de rotura lenta"],
    advantages: [
      { t: "Mayor resistencia mecánica de la base granular", d: "Refuerza la capacidad estructural ante cargas repetidas." },
      { t: "Mejora en la densificación e impermeabilización", d: "Compactación más eficiente y menor permeabilidad, con más vida útil." },
      { t: "Estabilidad mejorada en condiciones operativas", d: "Más cohesión y una plataforma estable para las capas superiores." },
      { t: "Comportamiento superior frente a la humedad inducida", d: "Minimiza la pérdida de integridad por efecto del agua." },
    ],
    sectors: sectorsGranular,
    projects: [
      { title: "Panamericana Sur - Puerto Maldonado, Madre de Dios, Perú", text: ["Parte del megaproyecto Interoceánica Sur, concesionado por IIRSA Sur. Se estabilizó la base granular con emulsión de rotura lenta."] },
      { title: "Tramo Challapalca – Apacheta, Tacna, Perú", text: ["Ejecutado en colaboración con el Consorcio Santa Rosa. Una revisión de junio de 2025 constató la integridad del tramo."] },
      { title: "Tramo Trujillo – Shorey, La Libertad, Perú", text: ["Ejecutado en coordinación con la empresa Obrainsa."] },
    ],
  },
  {
    desc: ["Alternativa sostenible dentro de la nueva generación de soluciones viales. Incorpora materiales reciclados, principalmente RAP (pavimento recuperado), reduciendo el consumo de materias primas no renovables.", "Con dosificaciones controladas y aditivos especializados se mantiene un desempeño técnico óptimo."],
    products: ["Asfalto modificado con polímeros Betutec", "Aditivos"],
    advantages: [
      durable,
      { t: functional.t, d: "Capa de rodadura uniforme y homogénea, que mejora la fricción y controla la rugosidad." },
      { t: protect.t, d: "Barrera funcional que protege las capas granulares." },
      { t: "Aprovechamiento eficiente de materiales reciclados", d: "Reutiliza RAP, que conserva sus propiedades físicas y mecánicas." },
      { t: "Responsabilidad con el medio ambiente", d: "Uso responsable de materiales no renovables y menor emisión de gases de efecto invernadero." },
    ],
    sectors: sectorsRoad,
    projects: [
      { title: "Aplicación de mezcla asfáltica reciclada en bermas, Lima, Perú", text: ["Mezclas con 15 % de RAP, con una dosificación controlada que cumple los estándares estructurales."] },
      { title: "Fresado de pavimento asfáltico en Panamericana Sur, Lima, Perú", text: ["Trabajos de fresado antes de la nueva capa de rodadura en la Panamericana Sur; el RAP se integró a las mezclas recicladas."] },
    ],
  },
  {
    desc: ["La pavimentación con mezclas asfálticas es clave para la capa de rodadura del pavimento flexible. Normalmente se ejecuta en caliente con un tren de pavimentación que extiende la mezcla, la precompacta y la compacta hasta alcanzar las densidades especificadas.", "Da superficies de alto desempeño, mayor resistencia al tránsito y vida útil prolongada, lo que es clave para la funcionalidad y durabilidad de la infraestructura vial."],
    products: ["Asfalto modificado", "Emulsión asfáltica", "Asfalto convencional"],
    advantages: [durable, functional, protect],
    sectors: sectorsRoad,
    projects: [{ ...rutasLima, title: "Recapeo Panamericana Sur con mezcla SMA, Lima, Perú" }],
  },
  {
    desc: ["Las mezclas en caliente con asfaltos modificados son soluciones de alto desempeño para infraestructura vial muy exigente. Su formulación da mayor resistencia a deformaciones permanentes, fisuración por fatiga y daños por humedad inducida.", "También mejora el comportamiento elástico de la estructura asfáltica, con más durabilidad frente a cargas pesadas, tránsito lento o estacionario y condiciones críticas en vías urbanas e industriales."],
    products: ["Asfalto modificado con polímeros Betutec", "Aditivos"],
    advantages: [durable, { t: functional.t, d: "Capa de rodadura uniforme y homogénea, con propiedades que mejoran la fricción, controlan la rugosidad y maximizan el desempeño en todo tipo de condiciones." }, { t: protect.t, d: "Resguarda eficientemente las capas granulares de la estructura del pavimento, preservando su integridad frente al tránsito y las cargas." }],
    sectors: sectorsRoad,
    projects: [rutasLima],
  },
  {
    desc: ["La imprimación asfáltica es clave para preparar la superficie de apoyo (normalmente la capa base). Forma una capa impermeable con cohesión superficial adecuada.", "Se hace con una emulsión formulada para imprimación, impregnación o impermeabilización, Primetec®, cuya función principal es mejorar la adherencia entre la base y la capa de rodadura, para un buen desempeño estructural."],
    products: ["Emulsión asfáltica para imprimación Primetec"],
    advantages: [
      { t: "Preparación eficaz de la base granular", d: "Genera una capa impermeable que sirve de puente de adherencia entre la base granular y las capas superiores." },
      { t: "Curado rápido que optimiza plazos de obra", d: "Permite avanzar antes a las siguientes etapas de pavimentación, con más eficiencia operativa." },
      { t: "Aplicación práctica a temperatura ambiente", d: "No requiere calentamiento previo, simplifica la ejecución en campo y reduce costos energéticos." },
      { t: "Solución sostenible con menor impacto ambiental", d: "Minimiza emisiones y residuos, con prácticas de pavimentación más limpias." },
      { t: "Seguridad para el equipo aplicador", d: "No emite vapores nocivos ni requiere temperaturas elevadas, lo que protege la salud de los operarios." },
    ],
    sectors: sectorsRoad,
    projects: [
      { title: "Proyecto altoandino del Cusco – CONCAR, Perú", text: ["Partida de imprimación asfáltica en un tramo del corredor altoandino de Cusco, con emulsión Primetec®, para acondicionar la base y mejorar la adherencia con las capas superiores.", "Se eligió porque genera una mezcla uniforme a temperatura ambiente, útil en zonas de difícil acceso y clima variable."] },
      { title: "Proyecto Cora Cora – CONCAR, Cusco, Perú", text: ["Partida de imprimación asfáltica en la carretera Cora Cora (Cusco) con Primetec®, para asegurar la adherencia entre base y rodadura en un entorno geográfico exigente.", "Primetec® optimizó los tiempos de curado y dio continuidad al proceso constructivo, compatible con el clima de la zona."] },
    ],
  },
  {
    desc: ["Solución rentable y versátil para extender la vida útil del pavimento, ya sea como técnica de mantenimiento o como superficie de rodadura.", "Se pueden aplicar tratamientos simples (una capa, monocapa), dobles (dos capas, bicapa) o múltiples (más de dos capas), según las condiciones de tráfico y los requisitos del proyecto."],
    products: ["Emulsión asfáltica de rotura rápida tipo 2 (CRS-2h)", "Emulsión asfáltica de rotura rápida tipo 2 (CRS-2hP)"],
    advantages: [
      { t: "Aplicación práctica y sin requerimientos térmicos elevados", d: "La colocación en frío simplifica la obra y optimiza tiempos sin comprometer la calidad." },
      { t: "Tecnología en frío con menor impacto ambiental y operativo", d: "Al usar emulsiones se reduce la emisión de vapores y se mejora la seguridad y comodidad del personal técnico." },
      { t: "Alta tolerancia a deformaciones en condiciones de carga", d: "La formulación con ligante asfáltico en frío y agregado grueso absorbe mayores deflexiones sin perder desempeño estructural." },
    ],
    sectors: ["Vialidad", "Vías de bajo volumen de tránsito", "Desarrollo Urbano", "Vías alternas o momentáneas"],
    projects: [{ title: "Carretera Sicuani - La Raya, Tramo Cusco – Puno, Perú", text: ["Tratamiento superficial doble en la carretera Cusco–Puno, con emulsión de rotura rápida tipo 2 (CRS-2), que permite habilitar el tránsito rápido.", "Es una técnica eficiente y rentable para vías interprovinciales con cargas y clima variables."] }],
  },
  {
    desc: ["Los amortiguadores de impacto absorben parte de la energía de una colisión y detienen el vehículo de forma controlada. Reducen el riesgo de impacto contra estructuras fijas peligrosas, lo que ayuda a salvar vidas y a disminuir lesiones graves del conductor y los pasajeros.", "Su desempeño está validado por certificaciones internacionales NCHRP Report 350, MASH y EN 1317."],
    products: ["Amortiguadores de impacto TL2-TL3"],
    advantages: [
      { t: "Reducción efectiva del riesgo ante estructuras rígidas", d: "Alto nivel de seguridad al minimizar el impacto contra objetos fijos y reducir la probabilidad de accidentes graves." },
      { t: "Protección especializada para infraestructura crítica", d: "Barrera de resguardo en zonas sensibles, evita daños estructurales y refuerza la seguridad operativa." },
      { t: "Instalación ágil y mantenimiento eficiente", d: "Optimiza recursos y tiempos, con puesta en servicio rápida y mantenimiento simplificado." },
    ],
    sectors: sectorsConc,
    projects: [{ title: "Amortiguadores en Panamericana Norte, Lima, Perú", text: ["El eje tiene puntos críticos de alto riesgo de impacto vehicular.", "Grupo TDM suministró e instaló amortiguadores de impacto TL-3, certificados, para disipar la energía del choque y reducir la gravedad de los accidentes."] }],
  },
  {
    desc: ["Las barreras metálicas certificadas son sistemas de contención vehicular evaluados con pruebas de impacto. Cumplen NCHRP Report 350 (EE. UU.), EN 1317 (Comunidad Europea) y la Directiva N.º 007-2008-MTC/02.", "Ofrecen tipologías según el proyecto: barreras de borde lateral (instaladas por hincado), de borde puente (ancladas sobre estructuras de concreto armado) y medianeras (doble viga que separa flujos en sentidos opuestos)."],
    products: ["Barrera borde lateral", "Barrera borde puente", "Barrera medianera"],
    advantages: [
      { t: "Alto nivel de contención vehicular", d: "Diseñadas para impactos severos, con capacidad comprobada para contener vehículos en situaciones críticas." },
      { t: "Redireccionamiento seguro tras el impacto", d: "Guían el vehículo de forma controlada después del choque y reducen el riesgo de invadir carriles contiguos y de colisiones secundarias." },
      { t: "Mayor protección para los ocupantes", d: "Atenúan la severidad del impacto frente a sistemas rígidos tradicionales y reducen lesiones." },
    ],
    sectors: sectorsConc,
    projects: [
      { title: "Carretera Canta-Huayllay, Junín, Perú", text: ["Alternativa moderna que descongestiona la Carretera Central y mejora la conectividad de regiones postergadas.", "Grupo TDM ejecutó el suministro e instalación de más de 16 km de barreras de borde de puente y laterales."] },
      { title: "Carretera Tacna – Collpa, Perú - Bolivia", text: ["Eje comercial y logístico entre Perú y Bolivia, clave para la integración regional sudamericana.", "Grupo TDM suministró e instaló más de 15 km de barreras de borde lateral y borde puente, y ejecutó la señalización horizontal y vertical integral."] },
    ],
  },
  {
    desc: ["Producción, suministro e instalación de señales preventivas, reglamentarias e informativas, junto con sus estructuras de soporte como postes y pórticos.", "También incluye hitos kilométricos, postes delineadores rígidos y flexibles, y pórticos pasavías, que refuerzan la orientación visual y la seguridad en todo tipo de vías."],
    products: ["Señales reglamentarias", "Señales preventivas", "Señales informativas", "Pórticos pasavías", "Hitos kilométricos"],
    advantages: [
      { t: "Incremento inmediato en la seguridad vial", d: "Solución visible y efectiva que refuerza la protección desde su implementación." },
      { t: "Durabilidad en condiciones exigentes", d: "Materiales resistentes al desgaste y a la exposición ambiental." },
      { t: "Eficiencia en costos operativos", d: "Inversión accesible y bajo mantenimiento, lo que optimiza el presupuesto." },
    ],
    sectors: ["Concesiones: Viales, Puertos y Aeropuertos", "Vías nacionales, interurbanas, rutas vecinales", "Minería"],
    projects: [
      { title: "Carretera Tacna – Collpa, Perú – Bolivia", text: ["Eje comercial y logístico entre Perú y Bolivia, clave para la integración regional sudamericana.", "Grupo TDM suministró e instaló más de 15 km de barreras de borde lateral y borde puente, y ejecutó la señalización horizontal y vertical integral."] },
      { title: "Línea Amarilla, Lima, Perú", text: ["Eje de alto flujo vehicular, hoy denominado Lima Expresa.", "Grupo TDM ejecutó la señalización vertical integral, desde señales uniposte hasta pórticos pasavías, pórticos bandera y paneles de peaje, entre otros elementos."] },
    ],
  },
  {
    desc: ["Sistemas de revestimiento con paneles metálicos y/o compuestos que mejoran la seguridad en túneles mediante más luminosidad, facilidad de limpieza y protección pasiva contra incendios."],
    products: ["Paneles vitrificados"],
    advantages: [
      { t: "Acabado vitrificado estético, duradero y seguro", d: "Alta permanencia del color en el tiempo; clasificación ignífuga A1 y sin emisión de gases tóxicos." },
      { t: "Mejora la percepción espacial y la seguridad en túneles", d: "Aumenta notablemente la luminosidad interior y da sensación de amplitud, evitando la claustrofobia." },
      { t: "Transición visual uniforme sin efecto de «agujero negro»", d: "Reflexión homogénea que evita contrastes bruscos de luz al entrar, reduciendo accidentes por pérdida de visibilidad." },
      { t: "Superficie vitrificada de fácil limpieza", d: "El esmalte técnico permite remover grafitis con disolventes sin dañar el acabado." },
    ],
    sectors: ["Vialidad", "Desarrollo Urbano", "Puertos y Aeropuertos"],
    projects: [{ title: "Revestimiento de Túnel Benavides, Lima, Perú", text: ["Obra: Intercambio Vial a Desnivel Benavides, con un falso túnel de 820 m de recorrido total (incluye rampas). Conecta el flujo de la Panamericana Sur (sentido norte-sur) hacia San Juan de Miraflores, para mejorar la fluidez y reducir la congestión.", "Revestimiento interior con paneles de acero vitrificado sobre una estructura portante de perfiles de acero galvanizado, anclada mecánicamente a las paredes. En el tramo interior, los paneles miden 3.257 m de altura sobre un zócalo de concreto de 1 m. Las rampas usan paneles de altura variable. Total instalado: 4,508 m², color blanco RAL 9016, brillo entre 80 % y 95 %."] }],
  },
  {
    desc: ["Soluciones para mitigar la contaminación sonora en entornos urbanos, industriales o de transporte, por reflexión o absorción del ruido. Mejoran la calidad acústica y ayudan a cumplir normas de salud y seguridad.", "Están formados por planchas o paneles de distintos espesores, colores y materiales, adaptables a requisitos técnicos y estéticos."],
    products: ["Barreras absorbentes", "Barreras reflectantes"],
    advantages: [
      { t: "Cumplimiento normativo en control del ruido", d: "Reduce los niveles sonoros a rangos aceptables según las normas de salud y seguridad." },
      { t: "Entornos urbanos más silenciosos y habitables", d: "Bloquea el ruido del tránsito o de la industria, para zonas residenciales más tranquilas." },
      { t: "Función disuasiva y control de accesos", d: "Además de lo acústico, restringe el paso no autorizado en áreas sensibles." },
      { t: "Adaptabilidad estética con bajo impacto visual", d: "Variedad de materiales y diseños que se integran al entorno con mínima intervención paisajística." },
    ],
    sectors: sectorsConc,
    projects: [{ title: "Barrera acústica Tren Maya, México", text: ["En el proyecto Tren Maya se suministró una pantalla acústica para mitigar el ruido del paso constante del tren.", "Consiste en paneles acústicos de 3 m de alto por 2.5 m de largo, de materiales especializados, montados sobre una estructura de perfiles metálicos. Cumple los estándares ambientales del desarrollo ferroviario."] }],
  },
];
