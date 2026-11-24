export type Locale = "es" | "en" | "pt";
export const LOCALES: { code: Locale; label: string; name: string }[] = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
  { code: "pt", label: "PT", name: "Português" },
];

const es = {
  topbar: { about: "Sobre nosotros", contact: "CONTACTO" },
  nav: {
    value: "NUESTRA PROPUESTA DE VALOR",
    solutions: "SOLUCIONES",
    products: "PRODUCTOS",
    cases: "CASOS DE ÉXITO",
    know: "CONÓCENOS",
    contact: "CONTACTO",
    geo: "IR A GEOSINTÉTICOS",
    aboutUs: "SOBRE NOSOTROS",
    cdt: "CENTRO DE DESARROLLO TECNOLÓGICO",
    sustain: "SOSTENIBILIDAD",
    join: "ÚNETE A NOSOTROS",
    menu: "Menú",
    close: "Cerrar",
    theme: "Cambiar tema",
    language: "Idioma",
  },
  hero: {
    title: "Asfaltos a la medida",
    subtitle:
      "Innovación, capacidad industrial y soporte técnico para obras que exigen máximo rendimiento.",
  },
  about: {
    title: "Quienes somos:",
    text: "Con más de 20 años de experiencia, en TDM Asfaltos desarrollamos soluciones asfálticas para la construcción y mantenimiento de infraestructura vial en el Perú. Combinamos capacidad industrial, innovación tecnológica y conocimiento técnico para responder a los desafíos más exigentes del sector.",
  },
  solutions: {
    title: "Nuestras soluciones",
    text: "Las diferentes soluciones que utilizamos nos permiten combinar productos para la ejecución de tu proyecto.",
    items: ["Pavimentación", "Señalización y seguridad vial", "Otras soluciones"],
  },
  guarantee: {
    title: "Te Garantizamos",
    items: [
      {
        title: "Atención al cliente",
        text: "Brindamos un acompañamiento técnico - comercial cercano, comprendiendo a fondo los desafíos y objetivos de cada cliente. Adaptamos nuestras propuestas para ofrecer soluciones personalizadas, garantizando calidad, eficiencia y resultados que respondan a tus necesidades.",
      },
      {
        title: "Soporte técnico",
        text: "Sobre nuestra planta: alta capacidad de producción de emulsiones y asfaltos modificados. Asistencia técnica en obras: asesoría especializada en campo. Laboratorio de calidad: laboratorios equipados para diseño de mezclas y controles de calidad.",
      },
      {
        title: "Investigación y desarrollo",
        text: "Cuatro laboratorios especializados: ligantes Superpave, control de calidad, diseño de mezclas asfálticas y desempeño de mezclas, con profesionales de más de 15 años de experiencia.",
      },
    ],
  },
  products: {
    title: "Productos",
    text: "Fabricamos productos reconocidos mundialmente por sus características técnicas y ventajas según normativas internacionales. Conócelos:",
    tabs: ["Asfaltos", "Señalización y Seguridad vial", "Otros productos"],
    items: [
      { name: "Asfalto convencional", tab: 0 },
      { name: "Emulsiones asfálticas", tab: 0 },
      { name: "Asfaltos modificados", tab: 0 },
      { name: "Asfaltos aditivados", tab: 0 },
      { name: "Mejorador de adherencia", tab: 0 },
      { name: "Sellador de grietas", tab: 0 },
      { name: "Mezcla en frío", tab: 0 },
      { name: "Barreras metálicas certificadas", tab: 1 },
      { name: "Amortiguadores de impacto", tab: 1 },
      { name: "Señalización vertical", tab: 1 },
      { name: "Estabilizador de suelos", tab: 2 },
      { name: "Barreras acústicas", tab: 2 },
      { name: "Paneles vitrificados", tab: 2 },
    ],
  },
  cases: {
    title: "Casos de éxito",
    text: "Conoce proyectos en distintos sectores donde nuestras soluciones llevaron la obra al éxito.",
    country: "Perú",
    view: "Ver caso",
    all: "Ver todos los casos",
    items: [
      "Proyecto Intercambio Vial Las Torres: Solución para mejorar la movilidad urbana",
      "Pavimentación en el nuevo Aeropuerto Jorge Chávez bajo normativa FAA",
      "Construcción del nuevo Puente Montalvo",
      "El desafío de Rutas de Lima en la Panamericana Sur",
      "Pavimentación con mezclas asfálticas modificadas con polímeros",
    ],
  },
  advice: {
    title: "¿Necesitas asesoramiento?",
    text: "Nuestro equipo de expertos está listo para asesorarte en tu proyecto.",
    cta: "Solicitar asesoría",
  },
  news: {
    title: "Noticias",
    text: "Conoce las últimas innovaciones y proyectos de asfaltos de alto desempeño.",
    all: "Ver todas las noticias",
    view: "Ver noticia",
    page: { intro: "Mantente al día con los últimos avances y eventos de TDM. Lee todas nuestras noticias recientes aquí.", home: "Inicio", latest: "Últimas noticias" },
    items: [
      { title: "Presentes en el 14.º Seminario «Redefiniendo el Camino»", date: "2026", excerpt: "Jorge Escalante y Alonso Castro representaron a TDM Asfaltos en el 14.º Seminario Internacional «Redefiniendo el Camino», organizado por Kao Chemicals Europe en Cancún, México. Durante el evento, el equipo…" },
      { title: "XXIII Congreso Ibero Latinoamericano del Asfalto CILA", date: "2025", excerpt: "Del 17 al 21 de noviembre del 2025 durante cinco días, se abordaron temas clave como diseño y conservación de pavimentos flexibles, materiales asfálticos, nuevos modelos de gerenciamiento y soluciones…" },
      { title: "Presente en el Convitran Descentralizado Piura 2025", date: "2025", excerpt: "" },
      { title: "¡1000 días sin accidentes en TDM Asfaltos!", date: "2025", excerpt: "En el mes de agosto del 2025, TDM Asfaltos alcanzó un hito que refleja la fuerza de nuestra cultura preventiva: 1000 días sin accidentes. Este logro va más allá de…" },
    ],
  },
  newsletter: {
    title: "Suscríbete a nuestras novedades",
    text: "Recibe noticias y proyectos destacados directamente en tu correo.",
    email: "Correo electrónico",
    country: "País",
    countries: ["México", "Colombia", "Argentina", "Chile", "Perú", "España", "Estados Unidos", "Otro"],
    submit: "Suscribirme",
  },
  footer: {
    hq: "Sede principal",
    links: ["Sobre nosotros", "Casos de éxito", "Sostenibilidad", "Únete a nosotros", "Políticas de privacidad", "Libro de reclamaciones"],
    rights: "© 2026 Grupo TDM | Todos los derechos reservados.",
    help: "¿Necesitas ayuda?",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  topbar: { about: "About us", contact: "CONTACT" },
  nav: {
    value: "OUR VALUE PROPOSITION",
    solutions: "SOLUTIONS",
    products: "PRODUCTS",
    cases: "SUCCESS STORIES",
    know: "GET TO KNOW US",
    contact: "CONTACT",
    geo: "GO TO GEOSYNTHETICS",
    aboutUs: "ABOUT US",
    cdt: "TECHNOLOGY DEVELOPMENT CENTER",
    sustain: "SUSTAINABILITY",
    join: "JOIN US",
    menu: "Menu",
    close: "Close",
    theme: "Toggle theme",
    language: "Language",
  },
  hero: {
    title: "Tailor-made asphalts",
    subtitle:
      "Innovation, industrial capacity and technical support for works that demand maximum performance.",
  },
  about: {
    title: "Who we are:",
    text: "With more than 20 years of experience, at TDM Asfaltos we develop asphalt solutions for the construction and maintenance of road infrastructure in Peru. We combine industrial capacity, technological innovation and technical knowledge to meet the sector's most demanding challenges.",
  },
  solutions: {
    title: "Our solutions",
    text: "The different solutions we use allow us to combine products for the execution of your project.",
    items: ["Paving", "Road signage and safety", "Other solutions"],
  },
  guarantee: {
    title: "We guarantee you",
    items: [
      {
        title: "Customer service",
        text: "We provide close technical and commercial support, fully understanding each client's challenges and goals. We tailor our proposals to deliver personalized solutions, ensuring quality, efficiency and results that meet your needs.",
      },
      {
        title: "Technical support",
        text: "About our plant: high production capacity of emulsions and modified asphalts. On-site technical assistance: specialized field advice. Quality laboratory: equipped labs for mix design and quality control.",
      },
      {
        title: "Research and development",
        text: "Four specialized laboratories: Superpave binders, quality control, asphalt mix design and mix performance, with professionals of over 15 years of experience.",
      },
    ],
  },
  products: {
    title: "Products",
    text: "We manufacture products recognized worldwide for their technical characteristics and advantages under international standards. Discover them:",
    tabs: ["Asphalts", "Road signage and safety", "Other products"],
    items: [
      { name: "Conventional asphalt", tab: 0 },
      { name: "Asphalt emulsions", tab: 0 },
      { name: "Modified asphalts", tab: 0 },
      { name: "Additivated asphalts", tab: 0 },
      { name: "Adhesion improver", tab: 0 },
      { name: "Crack sealer", tab: 0 },
      { name: "Cold mix", tab: 0 },
      { name: "Certified metal barriers", tab: 1 },
      { name: "Impact attenuators", tab: 1 },
      { name: "Vertical signage", tab: 1 },
      { name: "Soil stabilizer", tab: 2 },
      { name: "Acoustic barriers", tab: 2 },
      { name: "Vitrified panels", tab: 2 },
    ],
  },
  cases: {
    title: "Success stories",
    text: "Discover projects across sectors where our solutions led the work to success.",
    country: "Peru",
    view: "View case",
    all: "View all cases",
    items: [
      "Las Torres Interchange Project: a solution to improve urban mobility",
      "Paving at the new Jorge Chávez Airport under FAA standards",
      "Construction of the new Montalvo Bridge",
      "Rutas de Lima's challenge on the Panamericana Sur",
      "Paving with polymer-modified asphalt mixes",
    ],
  },
  advice: {
    title: "Need advice?",
    text: "Our team of experts is ready to advise you on your project.",
    cta: "Request advice",
  },
  news: {
    title: "News",
    text: "Learn about the latest innovations and high-performance asphalt projects.",
    all: "View all news",
    view: "View news",
    page: { intro: "Stay up to date with the latest TDM advances and events. Read all our recent news here.", home: "Home", latest: "Latest news" },
    items: [
      { title: "Present at the 14th «Redefining the Road» Seminar", date: "2026", excerpt: "Jorge Escalante and Alonso Castro represented TDM Asfaltos at the 14th International Seminar «Redefining the Road», organized by Kao Chemicals Europe in Cancún, Mexico. During the event, the team…" },
      { title: "XXIII Ibero-Latin American Asphalt Congress CILA", date: "2025", excerpt: "From November 17 to 21, 2025, over five days, key topics were addressed such as the design and maintenance of flexible pavements, asphalt materials, new management models and solutions…" },
      { title: "Present at the Piura 2025 Decentralized Convitran", date: "2025", excerpt: "" },
      { title: "1000 days without accidents at TDM Asfaltos!", date: "2025", excerpt: "In August 2025, TDM Asfaltos reached a milestone that reflects the strength of our preventive culture: 1000 days without accidents. This achievement goes beyond…" },
    ],
  },
  newsletter: {
    title: "Subscribe to our updates",
    text: "Receive news and featured projects directly in your inbox.",
    email: "Email address",
    country: "Country",
    countries: ["Mexico", "Colombia", "Argentina", "Chile", "Peru", "Spain", "United States", "Other"],
    submit: "Subscribe",
  },
  footer: {
    hq: "Headquarters",
    links: ["About us", "Success stories", "Sustainability", "Join us", "Privacy policy", "Complaints book"],
    rights: "© 2026 Grupo TDM | All rights reserved.",
    help: "Need help?",
  },
};

const pt: Dictionary = {
  topbar: { about: "Sobre nós", contact: "CONTATO" },
  nav: {
    value: "NOSSA PROPOSTA DE VALOR",
    solutions: "SOLUÇÕES",
    products: "PRODUTOS",
    cases: "CASOS DE SUCESSO",
    know: "CONHEÇA-NOS",
    contact: "CONTATO",
    geo: "IR PARA GEOSSINTÉTICOS",
    aboutUs: "SOBRE NÓS",
    cdt: "CENTRO DE DESENVOLVIMENTO TECNOLÓGICO",
    sustain: "SUSTENTABILIDADE",
    join: "JUNTE-SE A NÓS",
    menu: "Menu",
    close: "Fechar",
    theme: "Alternar tema",
    language: "Idioma",
  },
  hero: {
    title: "Asfaltos sob medida",
    subtitle:
      "Inovação, capacidade industrial e suporte técnico para obras que exigem máximo desempenho.",
  },
  about: {
    title: "Quem somos:",
    text: "Com mais de 20 anos de experiência, na TDM Asfaltos desenvolvemos soluções asfálticas para a construção e manutenção de infraestrutura viária no Peru. Combinamos capacidade industrial, inovação tecnológica e conhecimento técnico para responder aos desafios mais exigentes do setor.",
  },
  solutions: {
    title: "Nossas soluções",
    text: "As diferentes soluções que utilizamos nos permitem combinar produtos para a execução do seu projeto.",
    items: ["Pavimentação", "Sinalização e segurança viária", "Outras soluções"],
  },
  guarantee: {
    title: "Garantimos a você",
    items: [
      {
        title: "Atendimento ao cliente",
        text: "Oferecemos um acompanhamento técnico e comercial próximo, compreendendo a fundo os desafios e objetivos de cada cliente. Adaptamos nossas propostas para oferecer soluções personalizadas, garantindo qualidade, eficiência e resultados que atendam às suas necessidades.",
      },
      {
        title: "Suporte técnico",
        text: "Sobre nossa planta: alta capacidade de produção de emulsões e asfaltos modificados. Assistência técnica em obras: assessoria especializada em campo. Laboratório de qualidade: laboratórios equipados para dosagem de misturas e controles de qualidade.",
      },
      {
        title: "Pesquisa e desenvolvimento",
        text: "Quatro laboratórios especializados: ligantes Superpave, controle de qualidade, dosagem de misturas asfálticas e desempenho de misturas, com profissionais com mais de 15 anos de experiência.",
      },
    ],
  },
  products: {
    title: "Produtos",
    text: "Fabricamos produtos reconhecidos mundialmente por suas características técnicas e vantagens conforme normas internacionais. Conheça-os:",
    tabs: ["Asfaltos", "Sinalização e Segurança viária", "Outros produtos"],
    items: [
      { name: "Asfalto convencional", tab: 0 },
      { name: "Emulsões asfálticas", tab: 0 },
      { name: "Asfaltos modificados", tab: 0 },
      { name: "Asfaltos aditivados", tab: 0 },
      { name: "Melhorador de adesividade", tab: 0 },
      { name: "Selante de trincas", tab: 0 },
      { name: "Mistura a frio", tab: 0 },
      { name: "Barreiras metálicas certificadas", tab: 1 },
      { name: "Atenuadores de impacto", tab: 1 },
      { name: "Sinalização vertical", tab: 1 },
      { name: "Estabilizador de solos", tab: 2 },
      { name: "Barreiras acústicas", tab: 2 },
      { name: "Painéis vitrificados", tab: 2 },
    ],
  },
  cases: {
    title: "Casos de sucesso",
    text: "Conheça projetos em diferentes setores nos quais nossas soluções levaram a obra ao sucesso.",
    country: "Peru",
    view: "Ver caso",
    all: "Ver todos os casos",
    items: [
      "Projeto Intercâmbio Viário Las Torres: solução para melhorar a mobilidade urbana",
      "Pavimentação no novo Aeroporto Jorge Chávez sob norma FAA",
      "Construção da nova Ponte Montalvo",
      "O desafio da Rutas de Lima na Panamericana Sul",
      "Pavimentação com misturas asfálticas modificadas com polímeros",
    ],
  },
  advice: {
    title: "Precisa de assessoria?",
    text: "Nossa equipe de especialistas está pronta para assessorar o seu projeto.",
    cta: "Solicitar assessoria",
  },
  news: {
    title: "Notícias",
    text: "Conheça as últimas inovações e projetos de asfaltos de alto desempenho.",
    all: "Ver todas as notícias",
    view: "Ver notícia",
    page: { intro: "Fique por dentro dos últimos avanços e eventos da TDM. Leia aqui todas as nossas notícias recentes.", home: "Início", latest: "Últimas notícias" },
    items: [
      { title: "Presentes no 14.º Seminário «Redefinindo o Caminho»", date: "2026", excerpt: "Jorge Escalante e Alonso Castro representaram a TDM Asfaltos no 14.º Seminário Internacional «Redefinindo o Caminho», organizado pela Kao Chemicals Europe em Cancún, México. Durante o evento, a equipe…" },
      { title: "XXIII Congresso Ibero-Latino-Americano do Asfalto CILA", date: "2025", excerpt: "De 17 a 21 de novembro de 2025, durante cinco dias, foram abordados temas-chave como projeto e conservação de pavimentos flexíveis, materiais asfálticos, novos modelos de gestão e soluções…" },
      { title: "Presente no Convitran Descentralizado Piura 2025", date: "2025", excerpt: "" },
      { title: "1000 dias sem acidentes na TDM Asfaltos!", date: "2025", excerpt: "Em agosto de 2025, a TDM Asfaltos alcançou um marco que reflete a força da nossa cultura preventiva: 1000 dias sem acidentes. Essa conquista vai além de…" },
    ],
  },
  newsletter: {
    title: "Assine nossas novidades",
    text: "Receba notícias e projetos de destaque diretamente no seu e-mail.",
    email: "E-mail",
    country: "País",
    countries: ["México", "Colômbia", "Argentina", "Chile", "Peru", "Espanha", "Estados Unidos", "Outro"],
    submit: "Assinar",
  },
  footer: {
    hq: "Sede principal",
    links: ["Sobre nós", "Casos de sucesso", "Sustentabilidade", "Junte-se a nós", "Políticas de privacidade", "Livro de reclamações"],
    rights: "© 2026 Grupo TDM | Todos os direitos reservados.",
    help: "Precisa de ajuda?",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en, pt };
