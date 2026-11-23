import type { Locale } from "./dictionaries";

export const aboutImages = {
  hero: "z40hvsz40hvsz40h-Photoroom.png",
  history: "e1769701934194.webp",
  purpose: "Muro-colombia_proposito.webp",
  // mismo orden que los 5 principios
  principles: [
    "WhatsApp-Image-2025-01-21-at-4.4.webp",
    "mezcla-en-frio.webp",
    "WhatsApp-Image-2025-11-12-at-4.43.40-PM.webp",
    "WhatsApp-Image-2025-01-21-at-4.48.57-PM-1.webp",
    "WhatsApp-Image-2025-11-12-at-4.43.39-PM-1-1-e1769700747907.webp",
  ],
  brochures: ["Captura-de-pantalla-2026-10-01-153504-1.png.webp", "Captura-de-pantalla-2026-10-01-153210.png.webp"],
};

/** PDFs en R2. Los brochures aún no están subidos: ver nota en la entrega. */
export const aboutFiles = {
  iso9001: "ISO-9001.pdf",
  iso14001: "ISO-14001.pdf",
  iso45001: "ISO-45001.pdf",
  oeaImportador: "rin-oea-importador-tdm-asfaltos.pdf",
  oeaExportador: "rin-oea-exportador-tdm-asfaltos.pdf",
  brochureCdt: "Brochure-de-CDT-3.pdf",
  brochureProductos: "Brochure-de-productos-asfalticos-2.pdf",
};

type Text = {
  home: string;
  title: string;
  lead: string;
  stats: { tn: string; certs: string };
  historyTitle: string;
  historyText: string;
  purposeA: string;
  purposeB: string;
  purposeText: string;
  principlesTitle: string;
  principlesText: string;
  principles: string[];
  solTitle: string;
  solText: string;
  sol: { title: string; text: string }[];
  certTitle: string;
  certText: string;
  certs: { code: string; title: string; sub: string }[];
  download: string;
  broTitle: string;
  broText: string;
  brochures: { title: string; sub: string }[];
  broDownload: string;
};

export const aboutText: Record<Locale, Text> = {
  es: {
    home: "Inicio",
    title: "Participamos en los principales proyectos de asfaltos en Perú",
    lead: "En TDM Asfaltos combinamos experiencia sólida con conocimiento técnico que nos permite enfrentar con éxito tus proyectos de infraestructura vial.",
    stats: { tn: "de asfalto industrializado", certs: "certificaciones" },
    historyTitle: "Líderes en soluciones asfálticas en Perú con más de 20 años en el sector vial",
    historyText:
      "En TDM Asfaltos, nuestra propuesta de valor se basa en la innovación, metodologías y procesos especializados con un equipo altamente calificado. La confiabilidad, experiencia comprobada y relaciones a largo plazo con nuestros clientes son los pilares que nos definen.",
    purposeA: "Nuestro",
    purposeB: "Propósito",
    purposeText: "Reimaginar soluciones de ingeniería que impulsen el desarrollo sostenible de la región y mejoren la calidad de vida de las personas.",
    principlesTitle: "Principios culturales",
    principlesText:
      "En TDM Asfaltos, nuestros principios culturales son el pilar que impulsa cada decisión, proyecto y acción. Creemos en el trabajo en equipo, la orientación al cliente, y en generar un impacto positivo en la sociedad.",
    principles: [
      "Impulsamos el desarrollo sostenible de la sociedad",
      "Generamos y abrazamos el cambio para crear valor",
      "Ponemos al cliente en el centro de las acciones",
      "Orientados a la eficiencia y rentabilidad",
      "Somos un solo equipo",
    ],
    solTitle: "Soluciones integrales de ingeniería",
    solText:
      "Explora cómo nuestras soluciones innovadoras han impulsado el desarrollo de grandes proyectos para diversos sectores, asegurando nuestro compromiso por la sostenibilidad, eficiencia y resultados excepcionales.",
    sol: [
      { title: "Profesionales", text: "Contamos con un staff de profesionales especializados, capaces de identificar las necesidades de cada proyecto y cliente para ofrecer soluciones óptimas." },
      { title: "Productos", text: "Los productos que fabricamos y comercializamos cumplen los estándares técnicos de la EG2013 (Especificaciones Técnicas Nacionales) y estándares internacionales." },
      { title: "Laboratorios", text: "Brindamos el servicio de laboratorio e innovación de las soluciones asfálticas a la medida." },
    ],
    certTitle: "Certificaciones",
    certText:
      "Explora cómo en TDM Asfaltos impulsamos el desarrollo de grandes proyectos de infraestructura vial a través de soluciones innovadoras, asegurando nuestro compromiso con la sostenibilidad, la eficiencia y resultados excepcionales.",
    certs: [
      { code: "ISO 9001", title: "ISO 9001:2015", sub: "Gestión de la calidad" },
      { code: "ISO 14001", title: "ISO 14001:2015", sub: "Gestión ambiental" },
      { code: "ISO 45001", title: "ISO 45001:2018", sub: "Seguridad y salud en el trabajo" },
      { code: "OEA", title: "Operador Económico Autorizado", sub: "OEA Importador" },
      { code: "OEA", title: "Operador Económico Autorizado", sub: "OEA Exportador" },
    ],
    download: "Descargar certificación",
    broTitle: "Descarga más información de TDM Asfaltos",
    broText: "Descarga nuestra presentación corporativa y los catálogos de productos para conocer más sobre nuestras soluciones.",
    brochures: [
      { title: "Centro de Desarrollo Tecnológico", sub: "Brochure CDT" },
      { title: "Productos asfálticos de alto desempeño", sub: "Catálogo de productos" },
    ],
    broDownload: "Descargar brochure",
  },
  en: {
    home: "Home",
    title: "We take part in Peru's main asphalt projects",
    lead: "At TDM Asfaltos we combine solid experience with technical knowledge that lets us successfully take on your road infrastructure projects.",
    stats: { tn: "of industrialized asphalt", certs: "certifications" },
    historyTitle: "Leaders in asphalt solutions in Peru with more than 20 years in the road sector",
    historyText:
      "At TDM Asfaltos, our value proposition is built on innovation, specialized methodologies and processes, and a highly qualified team. Reliability, proven experience and long-term relationships with our customers are the pillars that define us.",
    purposeA: "Our",
    purposeB: "Purpose",
    purposeText: "To reimagine engineering solutions that drive the sustainable development of the region and improve people's quality of life.",
    principlesTitle: "Cultural principles",
    principlesText:
      "At TDM Asfaltos, our cultural principles are the pillar behind every decision, project and action. We believe in teamwork, customer orientation, and making a positive impact on society.",
    principles: [
      "We drive the sustainable development of society",
      "We generate and embrace change to create value",
      "We put the customer at the center of our actions",
      "Focused on efficiency and profitability",
      "We are one team",
    ],
    solTitle: "Integrated engineering solutions",
    solText:
      "Explore how our innovative solutions have driven the development of major projects across different sectors, ensuring our commitment to sustainability, efficiency and exceptional results.",
    sol: [
      { title: "Professionals", text: "We have a staff of specialized professionals, able to identify the needs of each project and customer to offer the best solutions." },
      { title: "Products", text: "The products we manufacture and sell meet the technical standards of EG2013 (National Technical Specifications) and international standards." },
      { title: "Laboratories", text: "We provide laboratory services and innovation for tailor-made asphalt solutions." },
    ],
    certTitle: "Certifications",
    certText:
      "Explore how TDM Asfaltos drives major road infrastructure projects through innovative solutions, ensuring our commitment to sustainability, efficiency and exceptional results.",
    certs: [
      { code: "ISO 9001", title: "ISO 9001:2015", sub: "Quality management" },
      { code: "ISO 14001", title: "ISO 14001:2015", sub: "Environmental management" },
      { code: "ISO 45001", title: "ISO 45001:2018", sub: "Occupational health and safety" },
      { code: "OEA", title: "Authorized Economic Operator", sub: "AEO Importer" },
      { code: "OEA", title: "Authorized Economic Operator", sub: "AEO Exporter" },
    ],
    download: "Download certification",
    broTitle: "Download more information about TDM Asfaltos",
    broText: "Download our corporate presentation and product catalogs to learn more about our solutions.",
    brochures: [
      { title: "Technology Development Center", sub: "CDT brochure" },
      { title: "High-performance asphalt products", sub: "Product catalog" },
    ],
    broDownload: "Download brochure",
  },
  pt: {
    home: "Início",
    title: "Participamos dos principais projetos de asfalto no Peru",
    lead: "Na TDM Asfaltos combinamos experiência sólida com conhecimento técnico, o que nos permite enfrentar com sucesso seus projetos de infraestrutura viária.",
    stats: { tn: "de asfalto industrializado", certs: "certificações" },
    historyTitle: "Líderes em soluções asfálticas no Peru com mais de 20 anos no setor viário",
    historyText:
      "Na TDM Asfaltos, nossa proposta de valor se baseia na inovação, em metodologias e processos especializados e em uma equipe altamente qualificada. Confiabilidade, experiência comprovada e relacionamentos de longo prazo com nossos clientes são os pilares que nos definem.",
    purposeA: "Nosso",
    purposeB: "Propósito",
    purposeText: "Reimaginar soluções de engenharia que impulsionem o desenvolvimento sustentável da região e melhorem a qualidade de vida das pessoas.",
    principlesTitle: "Princípios culturais",
    principlesText:
      "Na TDM Asfaltos, nossos princípios culturais são o pilar que impulsiona cada decisão, projeto e ação. Acreditamos no trabalho em equipe, na orientação ao cliente e em gerar um impacto positivo na sociedade.",
    principles: [
      "Impulsionamos o desenvolvimento sustentável da sociedade",
      "Geramos e abraçamos a mudança para criar valor",
      "Colocamos o cliente no centro das ações",
      "Orientados à eficiência e rentabilidade",
      "Somos uma só equipe",
    ],
    solTitle: "Soluções integrais de engenharia",
    solText:
      "Explore como nossas soluções inovadoras impulsionaram o desenvolvimento de grandes projetos em diversos setores, garantindo nosso compromisso com a sustentabilidade, a eficiência e resultados excepcionais.",
    sol: [
      { title: "Profissionais", text: "Contamos com uma equipe de profissionais especializados, capazes de identificar as necessidades de cada projeto e cliente para oferecer as melhores soluções." },
      { title: "Produtos", text: "Os produtos que fabricamos e comercializamos atendem aos padrões técnicos da EG2013 (Especificações Técnicas Nacionais) e a padrões internacionais." },
      { title: "Laboratórios", text: "Oferecemos serviço de laboratório e inovação em soluções asfálticas sob medida." },
    ],
    certTitle: "Certificações",
    certText:
      "Explore como a TDM Asfaltos impulsiona grandes projetos de infraestrutura viária por meio de soluções inovadoras, garantindo nosso compromisso com a sustentabilidade, a eficiência e resultados excepcionais.",
    certs: [
      { code: "ISO 9001", title: "ISO 9001:2015", sub: "Gestão da qualidade" },
      { code: "ISO 14001", title: "ISO 14001:2015", sub: "Gestão ambiental" },
      { code: "ISO 45001", title: "ISO 45001:2018", sub: "Saúde e segurança no trabalho" },
      { code: "OEA", title: "Operador Econômico Autorizado", sub: "OEA Importador" },
      { code: "OEA", title: "Operador Econômico Autorizado", sub: "OEA Exportador" },
    ],
    download: "Baixar certificação",
    broTitle: "Baixe mais informações sobre a TDM Asfaltos",
    broText: "Baixe nossa apresentação corporativa e os catálogos de produtos para conhecer melhor nossas soluções.",
    brochures: [
      { title: "Centro de Desenvolvimento Tecnológico", sub: "Brochure CDT" },
      { title: "Produtos asfálticos de alto desempenho", sub: "Catálogo de produtos" },
    ],
    broDownload: "Baixar brochure",
  },
};
