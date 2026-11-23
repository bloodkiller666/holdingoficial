import type { Locale } from "./dictionaries";

export const JOIN = {
  jobs: "https://tdm.hiringroom.com/jobs",
  video: "A0SBrI2ASmk", // YouTube (mismo video que la web original)
};

export const joinImages = {
  hero: "IMG_5465-1-e1768428718544.webp",
  team: [
    "28a57be8-0139-495e-a6f4-502e521cd276.webp",
    "412972f5-9d9c-48fa-9123-8e5f71ae8efb.webp",
    "f695353d-9f2e-4993-8ef8-4be74a95dc4b.webp",
    "cedf584e-af54-49f9-b05c-2c603667d650.webp",
  ],
  principles: "RULETA-PRINCIPIOS-1-1-1-e1757636391671.webp",
  stories: ["JORGE-ESCALANTE.webp", "ROCIO-FOTO-FINAL.webp"],
  cta: "unete-a-nosotros.webp",
};

export const joinText: Record<
  Locale,
  {
    home: string;
    title: string;
    lead: string;
    talentTitle: string;
    talentText: string;
    principlesTitle: string;
    principlesText: string;
    storiesKicker: string;
    storiesTitle: string;
    stories: { name: string; role: string }[];
    play: string;
    closeVideo: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  }
> = {
  es: {
    home: "Inicio",
    title: "Únete a nosotros",
    lead: "Sé parte del equipo que transforma desafíos en grandes oportunidades de desarrollo con propósito.",
    talentTitle: "El talento detrás de las grandes soluciones.",
    talentText:
      "Somos un equipo de profesionales que se diferencia por su solidez técnica, enfoque al cliente y trabajo colaborativo, con una alta orientación al logro. Buscamos desafiar el status quo y llevamos a la acción soluciones sostenibles que crean valor en nuestro día a día.",
    principlesTitle: "Nuestros principios, la base de cada logro.",
    principlesText: "En TDM, nuestros principios son el pilar fundamental que guía cada decisión, acción y proyecto.",
    storiesKicker: "Crece con nosotros",
    storiesTitle: "Conoce nuestras historias de crecimiento",
    stories: [
      { name: "Jorge Escalante", role: "Gerente técnico corporativo | TDM Asfaltos" },
      { name: "Rocio Gamarra", role: "Subgerente comercial | TDM Asfaltos" },
    ],
    play: "Reproducir historia de",
    closeVideo: "Cerrar video",
    ctaTitle: "Únete a nuestro equipo",
    ctaText:
      "Explora nuestras oportunidades laborales y sé parte de un equipo que transforma grandes proyectos en realidad. ¡Revisa las vacantes disponibles!",
    ctaButton: "Postula aquí",
  },
  en: {
    home: "Home",
    title: "Join us",
    lead: "Be part of the team that turns challenges into great opportunities for purposeful growth.",
    talentTitle: "The talent behind great solutions.",
    talentText:
      "We are a team of professionals set apart by technical strength, customer focus and collaborative work, with a strong drive for results. We challenge the status quo and put sustainable solutions into action that create value in our day-to-day.",
    principlesTitle: "Our principles, the foundation of every achievement.",
    principlesText: "At TDM, our principles are the cornerstone that guides every decision, action and project.",
    storiesKicker: "Grow with us",
    storiesTitle: "Discover our growth stories",
    stories: [
      { name: "Jorge Escalante", role: "Corporate technical manager | TDM Asfaltos" },
      { name: "Rocio Gamarra", role: "Deputy commercial manager | TDM Asfaltos" },
    ],
    play: "Play the story of",
    closeVideo: "Close video",
    ctaTitle: "Join our team",
    ctaText:
      "Explore our job opportunities and be part of a team that turns big projects into reality. Check the open positions!",
    ctaButton: "Apply here",
  },
  pt: {
    home: "Início",
    title: "Junte-se a nós",
    lead: "Faça parte da equipe que transforma desafios em grandes oportunidades de desenvolvimento com propósito.",
    talentTitle: "O talento por trás das grandes soluções.",
    talentText:
      "Somos uma equipe de profissionais que se diferencia pela solidez técnica, foco no cliente e trabalho colaborativo, com alta orientação a resultados. Buscamos desafiar o status quo e colocamos em ação soluções sustentáveis que criam valor no nosso dia a dia.",
    principlesTitle: "Nossos princípios, a base de cada conquista.",
    principlesText: "Na TDM, nossos princípios são o pilar fundamental que orienta cada decisão, ação e projeto.",
    storiesKicker: "Cresça conosco",
    storiesTitle: "Conheça nossas histórias de crescimento",
    stories: [
      { name: "Jorge Escalante", role: "Gerente técnico corporativo | TDM Asfaltos" },
      { name: "Rocio Gamarra", role: "Subgerente comercial | TDM Asfaltos" },
    ],
    play: "Reproduzir a história de",
    closeVideo: "Fechar vídeo",
    ctaTitle: "Junte-se à nossa equipe",
    ctaText:
      "Explore nossas oportunidades de trabalho e faça parte de uma equipe que transforma grandes projetos em realidade. Confira as vagas disponíveis!",
    ctaButton: "Candidate-se aqui",
  },
};

/** Botón flotante «Postula aquí» (mismo texto que el modal de la web original). */
export const joinFloat: Record<Locale, { label: string; title: string; text: string; cta: string; close: string }> = {
  es: { label: "Postula aquí", title: "Únete a Nosotros", text: "Descubre oportunidades de carrera emocionantes y crece con nosotros.", cta: "Ver empleos", close: "Cerrar" },
  en: { label: "Apply here", title: "Join Us", text: "Discover exciting career opportunities and grow with us.", cta: "View jobs", close: "Close" },
  pt: { label: "Candidate-se", title: "Junte-se a Nós", text: "Descubra oportunidades de carreira empolgantes e cresça conosco.", cta: "Ver vagas", close: "Fechar" },
};
