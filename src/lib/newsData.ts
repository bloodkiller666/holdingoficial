import type { Locale } from "./dictionaries";

/** Slugs de las noticias, en el mismo orden que dictionaries.news.items. */
export const newsSlugs = [
  "presentes-en-el-14-o-seminario-redefiniendo-el-camino",
  "paraguay-asuncion",
  "presente-en-el-convitran-descentralizado-piura-2025",
  "1000-dias-sin-accidentes-en-tdm-asfaltos",
] as const;

export const newsHref = (i: number) => `/noticia/${newsSlugs[i]}`;

type Article = { title: string; category: string; body: string[] };

export const newsArticles: Record<Locale, Article[]> = {
  es: [
    {
      title: "Presentes en el 14.º Seminario «Redefiniendo el Camino»",
      category: "Convitran",
      body: [
        "Jorge Escalante y Alonso Castro representaron a TDM Asfaltos en el 14.º Seminario Internacional «Redefiniendo el Camino», organizado por Kao Chemicals Europe en Cancún, México.",
        "Durante el evento, el equipo actualizó sus conocimientos, compartió experiencias con referentes de la industria y conoció las últimas tendencias e innovaciones en pavimentos asfálticos. Un espacio que impulsa conversaciones clave sobre el futuro de la infraestructura vial y las soluciones cada vez más eficientes y sostenibles.",
        "Agradecemos a Kao Chemicals Europe por un intercambio técnico de este nivel, y a Álvaro Gutiérrez, Raúl Valenzuela, Raymundo Benítez y Víctor Mendoza por las valiosas conversaciones durante el evento.",
        "En TDM Asfaltos seguimos fortaleciendo nuestro conocimiento técnico para responder a los desafíos de una industria en constante evolución.",
      ],
    },
    {
      title: "XXIII Congreso Ibero Latinoamericano del Asfalto CILA en Asunción, Paraguay",
      category: "Asfaltos",
      body: [
        "Del 17 al 21 de noviembre de 2025, durante cinco días, se abordaron temas clave como el diseño y la conservación de pavimentos flexibles, los materiales asfálticos, nuevos modelos de gerenciamiento y soluciones que impulsan la sostenibilidad en la infraestructura.",
        "TDM Asfaltos participó con dos presentaciones técnicas a cargo de Rafael Estrada-Escalante, Ingeniero Especialista Senior, y Jorge Escalante Zegarra, Gerente Técnico Corporativo. También asistieron Rocio Gamarra, Subgerente Comercial, y Alonso Castro Roca, Gerente Comercial, reforzando nuestro compromiso con la innovación técnica y la cercanía comercial.",
      ],
    },
    {
      title: "Presente en el Convitran Descentralizado Piura 2025",
      category: "Convitran",
      body: [
        "TDM Asfaltos estuvo presente en el Convitran Descentralizado Piura 2025, un espacio que reúne a profesionales, empresas e instituciones vinculadas a la infraestructura vial y el transporte.",
        "Desde nuestro stand compartimos con los asistentes nuestras soluciones para pavimentación, asfaltos y productos para la conservación vial, y conversamos sobre los retos de las obras en la región. Seguimos acercándonos a nuestros clientes y aliados para responder con soluciones técnicas confiables.",
      ],
    },
    {
      title: "¡1000 días sin accidentes en TDM Asfaltos!",
      category: "Asfaltos",
      body: [
        "En agosto de 2025, TDM Asfaltos alcanzó un hito que refleja la fuerza de nuestra cultura preventiva: 1000 días sin accidentes. Este logro va más allá de una cifra: representa disciplina operativa, gestión preventiva y el compromiso de cada colaborador de poner la seguridad primero.",
        "A través de una gestión preventiva activa, la participación constante, el liderazgo visible en campo, la tecnología aplicada y programas de bienestar, hemos construido un entorno donde el bienestar de las personas está por encima de cualquier resultado. Nuestras acciones buscan un lugar de trabajo seguro, sostenible e inclusivo, donde el cuidado de las personas es el valor más importante de la operación.",
        "Nos proponemos cerrar nuevos ciclos de operación con cero accidentes, fortaleciendo una gestión que combina prevención, innovación y compromiso humano.",
      ],
    },
  ],
  en: [
    {
      title: "Present at the 14th «Redefining the Road» Seminar",
      category: "Convitran",
      body: [
        "Jorge Escalante and Alonso Castro represented TDM Asfaltos at the 14th International Seminar «Redefining the Road», organized by Kao Chemicals Europe in Cancún, Mexico.",
        "During the event, the team updated its knowledge, shared experiences with industry leaders and learned about the latest trends and innovations in asphalt pavements. A space that drives key conversations about the future of road infrastructure and increasingly efficient and sustainable solutions.",
        "We thank Kao Chemicals Europe for a technical exchange of this level, and Álvaro Gutiérrez, Raúl Valenzuela, Raymundo Benítez and Víctor Mendoza for the valuable conversations during the event.",
        "At TDM Asfaltos we keep strengthening our technical knowledge to meet the challenges of an industry in constant evolution.",
      ],
    },
    {
      title: "XXIII Ibero-Latin American Asphalt Congress CILA in Asunción, Paraguay",
      category: "Asphalts",
      body: [
        "From November 17 to 21, 2025, over five days, key topics were addressed such as the design and maintenance of flexible pavements, asphalt materials, new management models and solutions that advance sustainability in infrastructure.",
        "TDM Asfaltos took part with two technical presentations by Rafael Estrada-Escalante, Senior Specialist Engineer, and Jorge Escalante Zegarra, Corporate Technical Manager. Rocio Gamarra, Commercial Sub-manager, and Alonso Castro Roca, Commercial Manager, also attended, reinforcing our commitment to technical innovation and commercial closeness.",
      ],
    },
    {
      title: "Present at the Piura 2025 Decentralized Convitran",
      category: "Convitran",
      body: [
        "TDM Asfaltos took part in the Piura 2025 Decentralized Convitran, a forum that brings together professionals, companies and institutions linked to road infrastructure and transport.",
        "At our stand we shared with attendees our solutions for paving, asphalts and road maintenance products, and talked about the challenges of projects in the region. We keep getting closer to our customers and partners to respond with reliable technical solutions.",
      ],
    },
    {
      title: "1000 days without accidents at TDM Asfaltos!",
      category: "Asphalts",
      body: [
        "In August 2025, TDM Asfaltos reached a milestone that reflects the strength of our preventive culture: 1000 days without accidents. This achievement goes beyond a number: it represents operational discipline, preventive management and every employee's commitment to putting safety first.",
        "Through active preventive management, constant participation, visible leadership in the field, applied technology and wellbeing programs, we have built an environment where people's wellbeing ranks above any result. Our actions aim at a safe, sustainable and inclusive workplace, where caring for people is the most important value in our operations.",
        "We aim to close new operating cycles with zero accidents, strengthening a management approach that combines prevention, innovation and human commitment.",
      ],
    },
  ],
  pt: [
    {
      title: "Presentes no 14.º Seminário «Redefinindo o Caminho»",
      category: "Convitran",
      body: [
        "Jorge Escalante e Alonso Castro representaram a TDM Asfaltos no 14.º Seminário Internacional «Redefinindo o Caminho», organizado pela Kao Chemicals Europe em Cancún, México.",
        "Durante o evento, a equipe atualizou seus conhecimentos, compartilhou experiências com referências da indústria e conheceu as últimas tendências e inovações em pavimentos asfálticos. Um espaço que impulsiona conversas-chave sobre o futuro da infraestrutura viária e soluções cada vez mais eficientes e sustentáveis.",
        "Agradecemos à Kao Chemicals Europe por um intercâmbio técnico desse nível, e a Álvaro Gutiérrez, Raúl Valenzuela, Raymundo Benítez e Víctor Mendoza pelas valiosas conversas durante o evento.",
        "Na TDM Asfaltos continuamos fortalecendo nosso conhecimento técnico para responder aos desafios de uma indústria em constante evolução.",
      ],
    },
    {
      title: "XXIII Congresso Ibero-Latino-Americano do Asfalto CILA em Assunção, Paraguai",
      category: "Asfaltos",
      body: [
        "De 17 a 21 de novembro de 2025, durante cinco dias, foram abordados temas-chave como o projeto e a conservação de pavimentos flexíveis, os materiais asfálticos, novos modelos de gestão e soluções que impulsionam a sustentabilidade na infraestrutura.",
        "A TDM Asfaltos participou com duas apresentações técnicas a cargo de Rafael Estrada-Escalante, Engenheiro Especialista Sênior, e Jorge Escalante Zegarra, Gerente Técnico Corporativo. Também estiveram presentes Rocio Gamarra, Subgerente Comercial, e Alonso Castro Roca, Gerente Comercial, reforçando nosso compromisso com a inovação técnica e a proximidade comercial.",
      ],
    },
    {
      title: "Presente no Convitran Descentralizado Piura 2025",
      category: "Convitran",
      body: [
        "A TDM Asfaltos esteve presente no Convitran Descentralizado Piura 2025, um espaço que reúne profissionais, empresas e instituições ligadas à infraestrutura viária e ao transporte.",
        "No nosso estande, compartilhamos com os visitantes nossas soluções para pavimentação, asfaltos e produtos para conservação viária, e conversamos sobre os desafios das obras na região. Continuamos nos aproximando de nossos clientes e parceiros para responder com soluções técnicas confiáveis.",
      ],
    },
    {
      title: "1000 dias sem acidentes na TDM Asfaltos!",
      category: "Asfaltos",
      body: [
        "Em agosto de 2025, a TDM Asfaltos alcançou um marco que reflete a força da nossa cultura preventiva: 1000 dias sem acidentes. Essa conquista vai além de um número: representa disciplina operacional, gestão preventiva e o compromisso de cada colaborador de colocar a segurança em primeiro lugar.",
        "Por meio de uma gestão preventiva ativa, participação constante, liderança visível em campo, tecnologia aplicada e programas de bem-estar, construímos um ambiente em que o bem-estar das pessoas está acima de qualquer resultado. Nossas ações buscam um local de trabalho seguro, sustentável e inclusivo, onde o cuidado com as pessoas é o valor mais importante da operação.",
        "Nos propomos a encerrar novos ciclos de operação com zero acidentes, fortalecendo uma gestão que combina prevenção, inovação e compromisso humano.",
      ],
    },
  ],
};

export const articleLabels: Record<Locale, { back: string; share: string; copied: string; related: string; category: string; adviceTitle: string; adviceText: string; adviceCta: string }> = {
  es: { back: "Volver", share: "Compartir:", copied: "Enlace copiado", related: "Otras noticias relacionadas", category: "Categoría", adviceTitle: "¿Necesitas asesoramiento?", adviceText: "Nuestro equipo está listo para asesorarte y ayudarte a encontrar la mejor opción para tu proyecto.", adviceCta: "Solicitar asesoría" },
  en: { back: "Back", share: "Share:", copied: "Link copied", related: "Other related news", category: "Category", adviceTitle: "Need advice?", adviceText: "Our team is ready to advise you and help you find the best option for your project.", adviceCta: "Request advice" },
  pt: { back: "Voltar", share: "Compartilhar:", copied: "Link copiado", related: "Outras notícias relacionadas", category: "Categoria", adviceTitle: "Precisa de assessoria?", adviceText: "Nossa equipe está pronta para assessorar você e ajudar a encontrar a melhor opção para o seu projeto.", adviceCta: "Solicitar assessoria" },
};
