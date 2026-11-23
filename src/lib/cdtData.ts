import type { Locale } from "./dictionaries";

export const cdtImages = {
  hero: "IMG_7391_imgupscaler.ai_General_.webp",
  lab: "IMG_5261-2.webp",
  research: "Investigacion-y-desarrollo.webp",
};

/** PDFs de certificación en R2 (el nombre lleva «°», se codifica al armar la URL). */
export const cdtCertFiles = ["Certif-N°031-2025-TDM-9001-1.pdf", "Certif-N°032-2025-TDM-14001-2.pdf", "Certif-N°033-2025-TDM-45001-3.pdf"];

type Lab = { title: string; text: string };

export const cdtText: Record<
  Locale,
  {
    home: string;
    title: string;
    lead: string;
    leadersTitle: string;
    leadersP1: string;
    leadersP2: string;
    centerTitle: string;
    labsA: Lab[];
    labsB: Lab[];
    certTitle: string;
    certText: string;
    certs: { code: string; title: string; text: string }[];
    download: string;
  }
> = {
  es: {
    home: "Inicio",
    title: "Centro de Desarrollo Tecnológico",
    lead: "Transformamos tecnología y conocimiento en soluciones de ingeniería con impacto en la región.",
    leadersTitle: "Líderes en la investigación y desarrollo tecnológico para la innovación",
    leadersP1: "En TDM Asfaltos nos dedicamos a impulsar la innovación y la excelencia a través de nuestro avanzado Centro de Desarrollo Tecnológico especializado en asfaltos.",
    leadersP2: "Contamos con tecnología avanzada y un equipo multidisciplinario de especialistas que trabajan con los más estrictos estándares de calidad para garantizar la excelencia en cada uno de nuestros productos. Además, ofrecemos soluciones integrales mediante el uso de asfaltos y emulsiones según las necesidades de tu proyecto.",
    centerTitle: "Nuestro Centro de Desarrollo Tecnológico",
    labsA: [
      { title: "Laboratorio Superpave", text: "Especializado en el análisis reológico de los ligantes asfálticos que contempla equipos de última generación, asegurando estándares internacionales de clasificación de ligantes asfálticos basados en el grado de desempeño, así como las respuestas frente a la demanda del tráfico." },
      { title: "Laboratorio de desempeño mecanístico", text: "Orientado a la evaluación del desempeño de las mezclas asfálticas, donde analizamos las resistencias a los principales problemas de deterioro de los pavimentos, como la deformación permanente, la fisuración por fatiga y la fractura térmica, así como la respuesta estructural de las mezclas asfálticas en términos de módulo dinámico o resiliente." },
    ],
    labsB: [
      { title: "Laboratorio de control de calidad", text: "Enfocado en asegurar la calidad de las materias primas y los productos terminados bajo estándares internacionales y en base a los requerimientos de nuestros clientes." },
      { title: "Laboratorio de diseño de mezclas asfálticas", text: "Dedicado al desarrollo y optimización de diseños de mezclas solicitados por nuestros clientes. Este laboratorio elabora soluciones a la medida para cada cantera y proyecto. Además, desarrollamos diseños de tratamiento superficiales, micropavimentos, sellos asfálticos, mezclas asfálticas en frío, mezclas asfálticas tibias y mezclas asfálticas en caliente." },
    ],
    certTitle: "Certificaciones",
    certText: "Estamos comprometidos con la calidad y la seguridad, así como con el cuidado del medio ambiente, lo que se refleja en nuestras certificaciones:",
    certs: [
      { code: "ISO 9001", title: "ISO 9001:2015", text: "Garantiza alta eficiencia y calidad en nuestros procesos de fabricación." },
      { code: "ISO 14001", title: "ISO 14001:2015", text: "Afirma nuestro compromiso con una gestión ambiental responsable, minimizando el impacto de nuestras operaciones." },
      { code: "ISO 45001", title: "ISO 45001:2018", text: "Respalda nuestro enfoque por un entorno de trabajo seguro y saludable para nuestros colaboradores y contratistas." },
    ],
    download: "Descargar",
  },
  en: {
    home: "Home",
    title: "Technology Development Center",
    lead: "We turn technology and knowledge into engineering solutions with an impact on the region.",
    leadersTitle: "Leaders in technological research and development for innovation",
    leadersP1: "At TDM Asfaltos we are dedicated to driving innovation and excellence through our advanced Technology Development Center specialized in asphalts.",
    leadersP2: "We have advanced technology and a multidisciplinary team of specialists who work to the strictest quality standards to guarantee excellence in each of our products. We also offer comprehensive solutions through the use of asphalts and emulsions according to your project's needs.",
    centerTitle: "Our Technology Development Center",
    labsA: [
      { title: "Superpave Laboratory", text: "Specialized in the rheological analysis of asphalt binders, with state-of-the-art equipment that ensures international binder classification standards based on performance grade, as well as responses to traffic demand." },
      { title: "Mechanistic performance laboratory", text: "Focused on evaluating the performance of asphalt mixtures, where we analyze their resistance to the main pavement distresses, such as permanent deformation, fatigue cracking and thermal fracture, as well as the structural response of the mixtures in terms of dynamic or resilient modulus." },
    ],
    labsB: [
      { title: "Quality control laboratory", text: "Focused on ensuring the quality of raw materials and finished products under international standards and according to our customers' requirements." },
      { title: "Asphalt mix design laboratory", text: "Dedicated to developing and optimizing mix designs requested by our customers. This laboratory creates tailor-made solutions for each quarry and project. We also develop designs for surface treatments, micropaving, asphalt seals, cold mixes, warm mixes and hot mixes." },
    ],
    certTitle: "Certifications",
    certText: "We are committed to quality, safety and caring for the environment, as reflected in our certifications:",
    certs: [
      { code: "ISO 9001", title: "ISO 9001:2015", text: "Ensures high efficiency and quality in our manufacturing processes." },
      { code: "ISO 14001", title: "ISO 14001:2015", text: "Affirms our commitment to responsible environmental management, minimizing the impact of our operations." },
      { code: "ISO 45001", title: "ISO 45001:2018", text: "Supports our focus on a safe and healthy work environment for our employees and contractors." },
    ],
    download: "Download",
  },
  pt: {
    home: "Início",
    title: "Centro de Desenvolvimento Tecnológico",
    lead: "Transformamos tecnologia e conhecimento em soluções de engenharia com impacto na região.",
    leadersTitle: "Líderes em pesquisa e desenvolvimento tecnológico para a inovação",
    leadersP1: "Na TDM Asfaltos nos dedicamos a impulsionar a inovação e a excelência por meio do nosso avançado Centro de Desenvolvimento Tecnológico especializado em asfaltos.",
    leadersP2: "Contamos com tecnologia avançada e uma equipe multidisciplinar de especialistas que trabalham com os mais rigorosos padrões de qualidade para garantir a excelência em cada um de nossos produtos. Além disso, oferecemos soluções integrais por meio do uso de asfaltos e emulsões de acordo com as necessidades do seu projeto.",
    centerTitle: "Nosso Centro de Desenvolvimento Tecnológico",
    labsA: [
      { title: "Laboratório Superpave", text: "Especializado na análise reológica dos ligantes asfálticos, com equipamentos de última geração, assegurando padrões internacionais de classificação de ligantes asfálticos baseados no grau de desempenho, bem como as respostas diante da demanda do tráfego." },
      { title: "Laboratório de desempenho mecanicista", text: "Voltado à avaliação do desempenho das misturas asfálticas, onde analisamos a resistência aos principais problemas de deterioração dos pavimentos, como deformação permanente, fissuração por fadiga e fratura térmica, bem como a resposta estrutural das misturas em termos de módulo dinâmico ou resiliente." },
    ],
    labsB: [
      { title: "Laboratório de controle de qualidade", text: "Focado em assegurar a qualidade das matérias-primas e dos produtos acabados sob padrões internacionais e conforme os requisitos de nossos clientes." },
      { title: "Laboratório de projeto de misturas asfálticas", text: "Dedicado ao desenvolvimento e otimização de projetos de misturas solicitados por nossos clientes. Este laboratório elabora soluções sob medida para cada pedreira e projeto. Também desenvolvemos projetos de tratamentos superficiais, microrrevestimentos, selagens asfálticas, misturas a frio, mornas e a quente." },
    ],
    certTitle: "Certificações",
    certText: "Estamos comprometidos com a qualidade e a segurança, bem como com o cuidado com o meio ambiente, o que se reflete em nossas certificações:",
    certs: [
      { code: "ISO 9001", title: "ISO 9001:2015", text: "Garante alta eficiência e qualidade em nossos processos de fabricação." },
      { code: "ISO 14001", title: "ISO 14001:2015", text: "Afirma nosso compromisso com uma gestão ambiental responsável, minimizando o impacto de nossas operações." },
      { code: "ISO 45001", title: "ISO 45001:2018", text: "Respalda nosso foco em um ambiente de trabalho seguro e saudável para nossos colaboradores e contratados." },
    ],
    download: "Baixar",
  },
};
