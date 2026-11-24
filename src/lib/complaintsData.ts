import type { Locale } from "./dictionaries";

/** Datos del proveedor que exige el Libro de Reclamaciones. */
export const PROVIDER = {
  name: "TDM ASFALTOS S.A.C.",
  ruc: "20514831620",
  office: "Alameda Marqués de la Bula 339, Chorrillos - Lima",
  fiscal: "Mza. A Lote 12, Z.I. Las Praderas de Lurín (Centro Industrial Las Praderas de Lurín), Lima - Lima - Lurín",
};

type Text = {
  title: string; home: string; lead: string;
  providerTitle: string; razon: string; ruc: string; office: string; fiscal: string;
  s1: string; s2: string; s3: string;
  docType: string; docTypes: string[]; docNumber: string; name: string; address: string; phone: string; email: string;
  minor: string; guardian: string;
  goodType: string; goodTypes: string[]; amount: string; amountPh: string; goodDescription: string;
  claimType: string; claimTypes: string[]; claimHelp: [string, string];
  detail: string; request: string;
  legal: string[]; privacyBefore: string; privacyLink: string; privacyAfter: string;
  send: string; sending: string;
  errRequired: string; errEmail: string; errPhone: string; errDoc: string; errPrivacy: string; errSend: string;
  doneTitle: string; doneText: string; doneCode: string; doneAgain: string;
  date: string;
};

export const complaintsText: Record<Locale, Text> = {
  es: {
    title: "Libro de Reclamaciones", home: "Inicio",
    lead: "Conforme al Código de Protección y Defensa del Consumidor, ponemos a tu disposición nuestro Libro de Reclamaciones virtual. Completa la hoja de reclamación y recibirás una copia en tu correo.",
    providerTitle: "Datos del proveedor", razon: "Razón social", ruc: "RUC", office: "Oficina", fiscal: "Domicilio fiscal",
    s1: "1. Identificación del consumidor", s2: "2. Identificación del bien contratado", s3: "3. Detalle de la reclamación y pedido del consumidor",
    docType: "Tipo de documento", docTypes: ["DNI", "Carné de extranjería", "Pasaporte", "RUC"], docNumber: "N.º de documento",
    name: "Nombre completo o razón social", address: "Domicilio", phone: "Teléfono", email: "Correo electrónico",
    minor: "Soy menor de edad", guardian: "Nombre completo del padre, madre o apoderado",
    goodType: "Bien contratado", goodTypes: ["Producto", "Servicio"], amount: "Monto reclamado (opcional)", amountPh: "Ej. S/ 1,500.00", goodDescription: "Descripción del producto o servicio",
    claimType: "Tipo", claimTypes: ["Reclamo", "Queja"],
    claimHelp: ["Reclamo: disconformidad relacionada con los productos o servicios.", "Queja: malestar o descontento no relacionado con los productos o servicios, o con la atención al público."],
    detail: "Detalle", request: "Pedido del consumidor",
    legal: [
      "La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.",
      "El proveedor debe dar respuesta al reclamo en un plazo no mayor a treinta (30) días calendario, pudiendo ampliarse hasta por treinta (30) días más, previa comunicación al consumidor.",
      "La recepción del reclamo no significa que se acepte su contenido.",
    ],
    privacyBefore: "He leído y acepto las ", privacyLink: "condiciones de privacidad", privacyAfter: " y el tratamiento de mis datos, y declaro que la información consignada es verdadera.",
    send: "Enviar hoja de reclamación", sending: "Enviando…",
    errRequired: "Campo obligatorio", errEmail: "Ingresa un correo válido", errPhone: "Ingresa un teléfono válido", errDoc: "Ingresa un número de documento válido", errPrivacy: "Debes aceptar las condiciones", errSend: "No pudimos registrar tu hoja de reclamación. Inténtalo de nuevo o escríbenos a contactenos@tdmasfaltos.com.",
    doneTitle: "Hoja de reclamación registrada", doneText: "Enviamos una copia a tu correo. Te responderemos en un plazo máximo de 30 días calendario.", doneCode: "N.º de registro", doneAgain: "Registrar otra hoja",
    date: "Fecha",
  },
  en: {
    title: "Complaints Book", home: "Home",
    lead: "In accordance with Peru's Consumer Protection and Defense Code, we provide our online Complaints Book. Fill in the claim form and you will receive a copy by email.",
    providerTitle: "Provider details", razon: "Company name", ruc: "Tax ID (RUC)", office: "Office", fiscal: "Registered address",
    s1: "1. Consumer identification", s2: "2. Contracted good or service", s3: "3. Claim details and consumer's request",
    docType: "Document type", docTypes: ["DNI", "Foreigner ID", "Passport", "RUC"], docNumber: "Document number",
    name: "Full name or company name", address: "Address", phone: "Phone", email: "Email",
    minor: "I am a minor", guardian: "Full name of parent or legal guardian",
    goodType: "Contracted good", goodTypes: ["Product", "Service"], amount: "Amount claimed (optional)", amountPh: "e.g. S/ 1,500.00", goodDescription: "Description of the product or service",
    claimType: "Type", claimTypes: ["Claim", "Complaint"],
    claimHelp: ["Claim: disagreement related to the products or services.", "Complaint: discontent not related to the products or services, or to customer service."],
    detail: "Details", request: "Consumer's request",
    legal: [
      "Filing a claim does not prevent you from using other dispute resolution channels, nor is it a prerequisite for filing a report with INDECOPI.",
      "The provider must respond to the claim within thirty (30) calendar days, extendable by another thirty (30) days with prior notice to the consumer.",
      "Receipt of the claim does not mean its content is accepted.",
    ],
    privacyBefore: "I have read and accept the ", privacyLink: "privacy conditions", privacyAfter: " and the processing of my data, and I declare that the information provided is true.",
    send: "Submit claim form", sending: "Sending…",
    errRequired: "Required field", errEmail: "Enter a valid email", errPhone: "Enter a valid phone number", errDoc: "Enter a valid document number", errPrivacy: "You must accept the conditions", errSend: "We could not register your claim form. Please try again or write to contactenos@tdmasfaltos.com.",
    doneTitle: "Claim form registered", doneText: "We sent a copy to your email. We will respond within 30 calendar days at most.", doneCode: "Registration no.", doneAgain: "Register another form",
    date: "Date",
  },
  pt: {
    title: "Livro de Reclamações", home: "Início",
    lead: "Em conformidade com o Código de Proteção e Defesa do Consumidor do Peru, disponibilizamos nosso Livro de Reclamações virtual. Preencha a folha de reclamação e você receberá uma cópia no seu e-mail.",
    providerTitle: "Dados do fornecedor", razon: "Razão social", ruc: "RUC", office: "Escritório", fiscal: "Endereço fiscal",
    s1: "1. Identificação do consumidor", s2: "2. Identificação do bem contratado", s3: "3. Detalhe da reclamação e pedido do consumidor",
    docType: "Tipo de documento", docTypes: ["DNI", "Carteira de estrangeiro", "Passaporte", "RUC"], docNumber: "N.º do documento",
    name: "Nome completo ou razão social", address: "Endereço", phone: "Telefone", email: "E-mail",
    minor: "Sou menor de idade", guardian: "Nome completo do pai, mãe ou responsável",
    goodType: "Bem contratado", goodTypes: ["Produto", "Serviço"], amount: "Valor reclamado (opcional)", amountPh: "Ex.: S/ 1.500,00", goodDescription: "Descrição do produto ou serviço",
    claimType: "Tipo", claimTypes: ["Reclamação", "Queixa"],
    claimHelp: ["Reclamação: discordância relacionada aos produtos ou serviços.", "Queixa: insatisfação não relacionada aos produtos ou serviços, ou ao atendimento ao público."],
    detail: "Detalhe", request: "Pedido do consumidor",
    legal: [
      "A apresentação da reclamação não impede o recurso a outras vias de solução de controvérsias, nem é requisito prévio para apresentar uma denúncia ao INDECOPI.",
      "O fornecedor deve responder à reclamação em prazo não superior a trinta (30) dias corridos, podendo ser prorrogado por mais trinta (30) dias, mediante comunicação prévia ao consumidor.",
      "O recebimento da reclamação não significa que seu conteúdo seja aceito.",
    ],
    privacyBefore: "Li e aceito as ", privacyLink: "condições de privacidade", privacyAfter: " e o tratamento dos meus dados, e declaro que as informações fornecidas são verdadeiras.",
    send: "Enviar folha de reclamação", sending: "Enviando…",
    errRequired: "Campo obrigatório", errEmail: "Informe um e-mail válido", errPhone: "Informe um telefone válido", errDoc: "Informe um número de documento válido", errPrivacy: "Você deve aceitar as condições", errSend: "Não foi possível registrar sua folha de reclamação. Tente novamente ou escreva para contactenos@tdmasfaltos.com.",
    doneTitle: "Folha de reclamação registrada", doneText: "Enviamos uma cópia para o seu e-mail. Responderemos em no máximo 30 dias corridos.", doneCode: "N.º de registro", doneAgain: "Registrar outra folha",
    date: "Data",
  },
};
