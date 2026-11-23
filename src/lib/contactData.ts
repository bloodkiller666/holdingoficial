import type { Locale } from "./dictionaries";

export const CONTACT = {
  phone: { label: "+51 016174700", href: "tel:+51016174700" },
  whatsapp: { label: "+51 966 561 059", href: "https://api.whatsapp.com/send?phone=51966561059" },
  email: { label: "contactenos@tdmasfaltos.com", href: "mailto:contactenos@tdmasfaltos.com" },
  address: "Alameda Marqués de la Bula 339 Chorrillos - Lima",
  googleMaps:
    "https://www.google.com/maps/place/TDM+GRUPO/@-12.2053236,-77.0109824,17z/data=!3m1!4b1!4m6!3m5!1s0x9105b9e25ffb7795:0x328b680b012304eb!8m2!3d-12.2053289!4d-77.0084075!16s%2Fg%2F11bbrnr28_?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
  waze: "https://www.waze.com/es-419/live-map/directions?from=place.w.185468558.1854620044.14415322",
  mapEmbed: "https://maps.google.com/maps?q=-12.2053289,-77.0084075&z=16&hl=es&output=embed",
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/tdm-asfaltos/" },
    { name: "Instagram", href: "https://www.instagram.com/tdm.asfaltos/" },
    { name: "TikTok", href: "https://www.tiktok.com/@tdm.asfaltos" },
  ],
  privacy: "/politicas-de-privacidad",
};

/** Países del formulario: prefijo telefónico y nombre por idioma. */
export const COUNTRY_CODES = [
  { code: "PE", dial: "+51" },
  { code: "CO", dial: "+57" },
  { code: "MX", dial: "+52" },
  { code: "AR", dial: "+54" },
  { code: "BR", dial: "+55" },
  { code: "CL", dial: "+56" },
  { code: "GT", dial: "+502" },
];

type ContactText = {
  title: string; country: string; home: string;
  adviceTitle: string; adviceText: string;
  phone: string; whatsapp: string; email: string;
  findUs: string; maps: string; waze: string; follow: string; mapTitle: string;
  formTitle: string;
  firstName: string; lastName: string; emailLabel: string; phoneLabel: string;
  countryLabel: string; countryPh: string; topic: string; topicPh: string; topics: string[];
  message: string; privacyBefore: string; privacyLink: string; privacyAfter: string; send: string;
  countries: string[];
  errRequired: string; errEmail: string; errPhone: string; errPrivacy: string;
};

export const contactText: Record<Locale, ContactText> = {
  es: {
    title: "Contacto", country: "Perú", home: "Inicio",
    adviceTitle: "¿Necesitas asesoramiento?", adviceText: "Nuestro equipo de expertos está listo para asesorarte en tu proyecto.",
    phone: "Teléfono", whatsapp: "WhatsApp", email: "Correo electrónico",
    findUs: "Encuéntranos en:", maps: "Ver con Google Maps", waze: "Ir con Waze", follow: "Síguenos", mapTitle: "Ubicación de TDM Asfaltos en Google Maps",
    formTitle: "Completa el formulario y te contactaremos pronto.",
    firstName: "Nombres", lastName: "Apellidos", emailLabel: "Correo electrónico", phoneLabel: "Teléfono",
    countryLabel: "País", countryPh: "Seleccione un país", topic: "Seleccione su consulta", topicPh: "Seleccione una opción",
    topics: ["Consulta general", "Presupuesto", "Soporte técnico", "Información del producto"],
    message: "Mensaje", privacyBefore: "He leído y acepto las ", privacyLink: "condiciones de privacidad", privacyAfter: " y tratamiento de mis datos", send: "Enviar",
    countries: ["Perú", "Colombia", "México", "Argentina", "Brasil", "Chile", "Guatemala"],
    errRequired: "Campo obligatorio", errEmail: "Ingresa un correo válido", errPhone: "Ingresa un teléfono válido", errPrivacy: "Debes aceptar las condiciones de privacidad",
  },
  en: {
    title: "Contact", country: "Peru", home: "Home",
    adviceTitle: "Need advice?", adviceText: "Our team of experts is ready to advise you on your project.",
    phone: "Phone", whatsapp: "WhatsApp", email: "Email",
    findUs: "Find us at:", maps: "View on Google Maps", waze: "Go with Waze", follow: "Follow us", mapTitle: "TDM Asfaltos location on Google Maps",
    formTitle: "Fill in the form and we will contact you soon.",
    firstName: "First name", lastName: "Last name", emailLabel: "Email", phoneLabel: "Phone",
    countryLabel: "Country", countryPh: "Select a country", topic: "Select your inquiry", topicPh: "Select an option",
    topics: ["General inquiry", "Quote", "Technical support", "Product information"],
    message: "Message", privacyBefore: "I have read and accept the ", privacyLink: "privacy conditions", privacyAfter: " and the processing of my data", send: "Send",
    countries: ["Peru", "Colombia", "Mexico", "Argentina", "Brazil", "Chile", "Guatemala"],
    errRequired: "Required field", errEmail: "Enter a valid email", errPhone: "Enter a valid phone number", errPrivacy: "You must accept the privacy conditions",
  },
  pt: {
    title: "Contato", country: "Peru", home: "Início",
    adviceTitle: "Precisa de assessoria?", adviceText: "Nossa equipe de especialistas está pronta para assessorar o seu projeto.",
    phone: "Telefone", whatsapp: "WhatsApp", email: "E-mail",
    findUs: "Encontre-nos em:", maps: "Ver no Google Maps", waze: "Ir com o Waze", follow: "Siga-nos", mapTitle: "Localização da TDM Asfaltos no Google Maps",
    formTitle: "Preencha o formulário e entraremos em contato em breve.",
    firstName: "Nome", lastName: "Sobrenome", emailLabel: "E-mail", phoneLabel: "Telefone",
    countryLabel: "País", countryPh: "Selecione um país", topic: "Selecione sua consulta", topicPh: "Selecione uma opção",
    topics: ["Consulta geral", "Orçamento", "Suporte técnico", "Informações do produto"],
    message: "Mensagem", privacyBefore: "Li e aceito as ", privacyLink: "condições de privacidade", privacyAfter: " e o tratamento dos meus dados", send: "Enviar",
    countries: ["Peru", "Colômbia", "México", "Argentina", "Brasil", "Chile", "Guatemala"],
    errRequired: "Campo obrigatório", errEmail: "Informe um e-mail válido", errPhone: "Informe um telefone válido", errPrivacy: "Você deve aceitar as condições de privacidade",
  },
};
