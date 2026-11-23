import type { Locale } from "./dictionaries";

/** Texto íntegro de la política (versión original en español). **negrita** se interpreta en el render. */
export const SECTIONS = [
  "Descripción",
  "Definiciones",
  "Ámbito de aplicación",
  "Fines del tratamiento de datos personales",
  "Principios",
  "Calidad de los datos personales",
  "Transferencia y comunicación de datos personales",
  "Confidencialidad de los datos personales",
  "Seguridad de los datos personales",
  "Ejercicio de derechos",
  "Menores de edad",
  "Consentimiento",
  "Roles y responsabilidades",
  "Incumplimientos y sanciones",
  "Información de contacto",
  "Vigencia",
];

export type Block =
  | { k: "h"; n: number }
  | { k: "p"; text: string }
  | { k: "def"; term: string; text: string }
  | { k: "li"; text: string };

export type LegalPage = { cont?: number; blocks: Block[] };

const h = (n: number): Block => ({ k: "h", n });
const p = (text: string): Block => ({ k: "p", text });
const def = (term: string, text: string): Block => ({ k: "def", term, text });
const li = (text: string): Block => ({ k: "li", text });

export const legalPages: LegalPage[] = [
  {
    blocks: [
      h(0),
      p("En **GRUPO TDM** somos conscientes de la importancia que tiene la privacidad sobre la información personal de todos nuestros colaboradores, así como de nuestros clientes, proveedores y demás titulares de datos personales, en adelante “Usuarios”; por ello, tenemos el compromiso de respetar la privacidad de los datos personales compartidos con nuestra organización, protegiendo la confidencialidad de los mismos."),
      p("En ese sentido, el objetivo de esta política de privacidad es dar a conocer la forma en que se recogen, gestionan y protegen los datos personales compartidos mediante el llenado de formatos o información solicitada vía intranet."),
      p("En **GRUPO TDM** venimos desarrollando una labor de concientización interna, con el expreso objetivo de realizar un uso adecuado de los datos personales. Para ello, venimos también adoptando buenas prácticas en el tratamiento de la información de Usuarios."),
    ],
  },
  {
    cont: 0,
    blocks: [
      p("Cabe señalar que la información personal privada no incluye información que está disponible a través de fuentes accesibles al público."),
      p("Asimismo, la implementación y el uso de los bancos de datos personales se realizan con el propósito mantener actualizada la información personal de los Usuarios, para así brindar el seguimiento y atención adecuado en caso de requerirse su recuperación."),
      h(1),
      def("Datos personales", "De acuerdo con la Ley N° 29733 – Ley de Protección de Datos Personales y su Reglamento, aprobado por el Decreto Supremo N° 016-2024-JUS, se entiende por datos personales toda información numérica, alfabética, gráfica, fotográfica, acústica, sobre hábitos personales, o de cualquier otro tipo concerniente a una persona natural que la identifica o la hace identificable a través de medios que pueden ser razonablemente utilizados."),
    ],
  },
  {
    cont: 1,
    blocks: [
      def("Banco de datos personales", "Es el conjunto organizado de datos personales, automatizado o no, cualquiera que fuere la forma o modalidad de su creación, formación, almacenamiento, organización y acceso."),
      def("Datos sensibles", "Es aquella información relativa a datos genéticos o biométricos del usuario, datos neuronales, datos morales o emocionales, hechos o circunstancias de su vida afectiva o familiar, los hábitos personales que corresponden a la esfera más íntima, la información relativa a la afiliación sindical, salud física o mental u otras análogas que afecten su intimidad."),
      def("Tratamiento de datos personales", "Se entiende por Tratamiento de Datos Personales a cualquier operación o procedimiento técnico, automatizado o no, que permite la recopilación, registro, organización, almacenamiento, conservación, elaboración, modificación, extracción, consulta, utilización, bloqueo, supresión, comunicación por transferencia o por difusión o cualquier otra forma de procesamiento que facilite el acceso, correlación o interconexión de los datos personales."),
      def("Usuario", "Son nuestros colaboradores, clientes, proveedores y demás titulares de datos personales, quienes comparten su información con la organización."),
    ],
  },
  {
    blocks: [
      h(2),
      p("La política sobre protección de datos personales de **GRUPO TDM** es aplicable a todos nuestros Usuarios."),
      p("Los tipos de datos personales recabados podrán ser los siguientes:"),
      def("Datos personales de colaboradores", "Datos de identificación, datos laborales, datos financieros, datos familiares, datos de salud (información sensible)."),
      def("Datos comerciales", "Nombres y datos de contacto de personas relacionadas a clientes y proveedores de **GRUPO TDM**."),
      li("Otros datos personales de otros Usuarios."),
      h(3),
      p("En el **Grupo TDM** se realiza el tratamiento de datos personales por las siguientes razones:"),
    ],
  },
  {
    cont: 3,
    blocks: [
      def("Respecto a los colaboradores", "Gestión de relación laboral, cumplimiento de obligaciones legales, contactos de emergencia y fines estadísticos."),
      def("Respecto a clientes y/o proveedores", "Gestión de la relación comercial, también para fines estadísticos."),
      def("Respecto de otros Usuarios", "Gestiones diversas, también para fines estadísticos."),
      p("En ese sentido, **GRUPO TDM** realiza el tratamiento de datos personales de sus Usuarios con los que mantiene alguna relación jurídica o comercial, o para cumplir ya sea con la legislación vigente, u otra que sea lícita y debidamente informada al titular de datos personales."),
      p("Teniendo en cuenta lo anterior, **GRUPO TDM** maneja bancos de datos personales tanto de colaboradores como de proveedores y clientes, los cuales se encuentran inscritos en el Registro Nacional de Protección de Datos Personales."),
    ],
  },
  {
    cont: 3,
    blocks: [
      p("Asimismo, los datos personales que faciliten nuestros Usuarios podrán ser conocidos y manejados por el personal del **GRUPO TDM**, en caso necesiten conocer dicha información. Estos datos personales serán tratados de forma leal, lícita, y no serán utilizados para finalidades incompatibles con las especificadas."),
      h(4),
      p("**GRUPO TDM** desarrolla su política de tratamiento de datos personales en atención a los principios rectores establecidos en la Ley Nº 29733 – Ley de Protección de Datos Personales y su Reglamento, conforme al siguiente detalle:"),
      def("Legalidad", "De acuerdo al principio de “Legalidad”, rechaza la recopilación de los datos personales de nuestros Usuarios por medios fraudulentos, desleales o ilícitos."),
      def("Consentimiento", "Conforme al principio de “Consentimiento” en el tratamiento de los datos personales de nuestros Usuarios, se solicitará su consentimiento."),
    ],
  },
  {
    cont: 4,
    blocks: [
      def("Finalidad", "Los datos personales de nuestros Usuarios se recopilarán para una finalidad determinada, explícita y lícita, y no se extenderá a otra finalidad que no haya sido la establecida de manera inequívoca como tal al momento de su recopilación, excluyendo los casos de actividades de valor histórico, estadístico o científico cuando se utilice un procedimiento de disociación o anonimización."),
      def("Proporcionalidad", "Todo tratamiento de datos personales de nuestros Usuarios será adecuado, relevante y no excesivo a la finalidad para la que estos hubiesen sido recopilados."),
      def("Calidad", "Los datos personales que vayan a ser tratados serán veraces, exactos y, en la medida de lo posible, actualizados, necesarios, pertinentes y adecuados respecto de la finalidad para la que fueron recopilados. Se conservarán de forma tal que se garantice su seguridad y solo por el tiempo necesario para cumplir con la finalidad del tratamiento."),
    ],
  },
  {
    cont: 4,
    blocks: [
      def("Seguridad", "**GRUPO TDM** y, en su caso, los encargados de tratamiento, adoptan las medidas técnicas, organizativas y legales necesarias para garantizar la seguridad y confidencialidad de los datos personales. **GRUPO TDM** cuenta con las medidas de seguridad apropiadas y acordes con el tratamiento que se vaya a efectuar y con la categoría de datos personales de que se trate."),
      def("Disposición de recurso", "**GRUPO TDM** informa a sus Usuarios que pueden ejercer sus derechos constitucionales a la protección de datos personales en sede administrativa ante la Autoridad Nacional de Protección de Datos y en sede jurisdiccional ante el Poder Judicial a los efectos del inicio del correspondiente proceso de Habeas Data."),
      def("Nivel de protección adecuado", "**GRUPO TDM** garantiza el nivel adecuado de protección de los datos personales de sus Usuarios para el flujo transfronterizo de datos personales, con un mínimo de protección equiparable a lo previsto por la Ley Nº 29733 o por los estándares internacionales de la materia."),
    ],
  },
  {
    blocks: [
      h(5),
      p("Los datos personales a los que **GRUPO TDM** tendrá acceso, serán aquellos que el Usuario facilite voluntariamente, rellenando los formularios puestos a tal efecto."),
      p("**GRUPO TDM** proporciona los recursos técnicos adecuados para que los titulares de datos personales tomen conocimiento de la presente Política de Privacidad y de cualquier otra información que pueda ser relevante; constituyendo el ingreso de Datos Personales o información confidencial en el sistema, la manifestación expresa de su consentimiento a la presente Política de Privacidad."),
      li("Los datos personales facilitados por los Usuarios, tienen que ser exactos y correctos, de forma que respondan con veracidad a su situación actual. En caso contrario, estos datos serán cancelados."),
      li("Los datos personales facilitados por los Usuarios son recopilados para el cumplimiento de las finalidades expuestas en este documento y no se usarán para otras finalidades incompatibles con las especificadas."),
    ],
  },
  {
    cont: 5,
    blocks: [
      li("Los datos personales serán cancelados cuando hayan dejado de ser necesarios para las finalidades para las cuales han sido recopilados. Sin embargo, se conservarán durante el tiempo en que pueda exigirse algún tipo de responsabilidad a **GRUPO TDM** derivada de esta relación con los Usuarios."),
      h(6),
      p("**GRUPO TDM** respeta la privacidad de sus Usuarios, por lo que no compartirá su información con terceros, si el usuario no desea expresamente que lo hagamos."),
      p("Informamos a los Usuarios que los datos personales que nos faciliten, no serán comunicados a ningún tercero, salvo los expresamente consentidos por ellos. Asimismo, se informa a los Usuarios, que sus datos personales podrán ser comunicados a las entidades administrativas, autoridades judiciales y/o policiales, siempre y cuando esté establecido por Ley."),
    ],
  },
  {
    cont: 6,
    blocks: [
      p("Asimismo, informamos a los Usuarios que los datos personales brindados podrán ser transferidos internacionalmente a las filiales de **GRUPO TDM**. Esta transferencia se daría a países con un nivel de protección de datos personales adecuado. De esta forma se busca consolidar los datos de la organización."),
      p("Cabe señalar que en los contratos nacionales e internacionales se incluirá una cláusula de protección de datos personales."),
      h(7),
      p("Los datos personales facilitados por los Usuarios serán tratados con total confidencialidad. **GRUPO TDM** se compromete a guardar secreto profesional indefinidamente, respecto de los mismos y en cumplimiento de su deber, los guardará y firmará acuerdos de confidencialidad con aquellos que puedan tener acceso, entre otras medidas de seguridad necesarias."),
    ],
  },
  {
    blocks: [
      h(8),
      p("En cumplimiento de la normativa vigente, **GRUPO TDM** ha adoptado las medidas técnicas de seguridad y confidencialidad apropiadas a la categoría de los datos personales, necesarias para mantener el nivel de seguridad requerido con el objetivo de evitar la alteración, pérdida o el tratamiento o accesos no autorizados, que puedan afectar a la integridad, confidencialidad y disponibilidad de la información."),
      p("**GRUPO TDM** tiene implementadas todas las medidas de índole técnica y organizativa necesarias para dotar de seguridad de los datos personales, y evitar su alteración, pérdida y tratamiento y/o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos, ya sea que provengan de la acción humana, del medio físico o natural, tal y como establece la legislación peruana vigente de protección de datos personales."),
    ],
  },
  {
    cont: 8,
    blocks: [
      p("La empresa también tiene implementadas medidas de seguridad adicionales, para reforzar la confidencialidad e integridad de la información, y continuamente mantiene la supervisión, control y evaluación de los procesos para asegurar la privacidad de los datos personales."),
      p("El personal que maneja los datos personales de los Usuarios es constantemente capacitado. De igual forma, contamos con protocolos para la detección, gestión y notificación de brechas de seguridad. **GRUPO TDM** cuenta con procedimientos de respaldo y protección de datos, además de que realiza evaluaciones periódicas de vulnerabilidad de nuestro sistema de seguridad."),
      p("Sin embargo, la transmisión de información mediante las redes de comunicación y de Internet no es totalmente segura; por eso, y a pesar de que **GRUPO TDM** realizará sus mejores esfuerzos para proteger los datos personales, no puede garantizar la seguridad de los mismos durante el tránsito hasta el sitio Web. En tal sentido, toda la información que los Usuarios proporcionen, se enviará por su cuenta y riesgo."),
    ],
  },
  {
    cont: 8,
    blocks: [
      p("Es por ello que **GRUPO TDM** recomienda la máxima diligencia a sus Usuarios cuando trasladen a terceros o publiquen información personal para evitar poner en riesgo sus datos personales, eludiendo **GRUPO TDM** toda responsabilidad en caso de sustracciones, modificaciones o pérdidas de datos ilícitas."),
      h(9),
      p("Los Usuarios que hayan facilitado sus datos personales a **GRUPO TDM** pueden dirigirse a este con el fin de poder ejercer sus derechos de información, acceso, rectificación, cancelación, oposición y portabilidad del suministro de sus datos personales, conforme a los términos recogidos en la legislación peruana vigente."),
      p("Para poder ejercer estos derechos, los Usuarios pueden dirigirse, por cualquier medio que permita acreditar el envío y la recepción de la solicitud a la dirección domicilio principal de **GRUPO TDM** ubicado en Alameda Los Horizontes Nro. 905, Urb. Huertos de Villa, distrito de Chorrillos, Lima, y/o al correo electrónico: protecciondedatos@grupotdm.com, con la referencia “Protección de Datos Personales”, especificando sus datos, acreditando su identidad y los motivos de su solicitud."),
    ],
  },
  {
    cont: 9,
    blocks: [
      p("De igual forma, los usuarios tienen la posibilidad de acudir a la Autoridad Nacional de Protección de Datos Personales en caso su solicitud no sea atendida por **GRUPO TDM**."),
      h(10),
      p("**GRUPO TDM** entiende la importancia de proteger la privacidad de los niños, especialmente en un entorno online. Por este motivo, el almacenamiento de datos personales de **GRUPO TDM** no está diseñado ni dirigido a menores de 14 años, salvo en el caso de los hijos menores de edad de los colaboradores."),
      p("**GRUPO TDM** no llevará a cabo voluntariamente el tratamiento de datos personales relativos a menores de edad. Si tomara conocimiento que los datos personales recogidos corresponden a un menor de edad sin autorización, se adoptarán las medidas oportunas para eliminar estos datos tan pronto como sea posible."),
    ],
  },
  {
    blocks: [
      h(11),
      p("Al aceptar esta Política de Privacidad, los Usuarios están de acuerdo con todos los aspectos expuestos en este documento, y nos autorizan a tratar sus datos personales para las finalidades expuestas anteriormente."),
      p("Este consentimiento será libre, expreso, informado y previo a la obtención de los datos personales."),
      h(12),
      p("**GRUPO TDM** ha designado a un oficial de protección de datos personales. Sus funciones son supervisar el cumplimiento de dicha protección y asesorar a los usuarios y al personal encargado del manejo de los mismos. Además, es intermediario entre la organización, los usuarios y la Autoridad Nacional de Protección de Datos Personales."),
      p("En tal sentido, se designa al Sr. William Alejandro Idiáquez Rodriguez, identificado con DNI N° 41379173 y correo corporativo widiaquez@grupotdm.com."),
    ],
  },
  {
    blocks: [
      h(13),
      p("En caso se incumpla lo dispuesto en las presente Política de Privacidad, **GRUPO TDM** se someterá a las sanciones establecidas en la Ley de Protección de Datos Personales y su Reglamento."),
      h(14),
      p("Para realizar cualquier tipo de consulta respecto a esta política puede dirigirse a la siguiente dirección de correo electrónico: protecciondedatos@grupotdm.com"),
      h(15),
      p("La presente Política tiene vigencia desde el 15 octubre de 2025."),
    ],
  },
];

export const privacyText: Record<
  Locale,
  {
    home: string;
    title: string;
    cover: string;
    coverSub: string;
    validFrom: string;
    index: string;
    indexNote: string;
    prev: string;
    next: string;
    toIndex: string;
    pages: string;
    cont: string;
    hint: string;
    hintTouch: string;
    backCoverNote: string;
    contact: string;
  }
> = {
  es: {
    home: "Inicio",
    title: "Políticas de privacidad",
    cover: "Políticas de privacidad",
    coverSub: "Política sobre protección de datos personales",
    validFrom: "Vigente desde el 15 de octubre de 2025",
    index: "Contenido",
    indexNote: "",
    prev: "Página anterior",
    next: "Página siguiente",
    toIndex: "Ir al índice",
    pages: "Páginas",
    cont: "continuación",
    hint: "Haz clic en la página derecha para avanzar y en la izquierda para volver.",
    hintTouch: "Desliza hacia la izquierda para avanzar y hacia la derecha para volver.",
    backCoverNote: "Gracias por confiar en nosotros",
    contact: "protecciondedatos@grupotdm.com",
  },
  en: {
    home: "Home",
    title: "Privacy policy",
    cover: "Privacy policy",
    coverSub: "Personal data protection policy",
    validFrom: "In force since October 15, 2025",
    index: "Contents",
    indexNote: "The legal text is presented in its original Spanish version.",
    prev: "Previous page",
    next: "Next page",
    toIndex: "Go to contents",
    pages: "Pages",
    cont: "continued",
    hint: "Click the right page to move forward and the left page to go back.",
    hintTouch: "Swipe left to move forward and right to go back.",
    backCoverNote: "Thank you for trusting us",
    contact: "protecciondedatos@grupotdm.com",
  },
  pt: {
    home: "Início",
    title: "Políticas de privacidade",
    cover: "Políticas de privacidade",
    coverSub: "Política de proteção de dados pessoais",
    validFrom: "Em vigor desde 15 de outubro de 2025",
    index: "Conteúdo",
    indexNote: "O texto legal é apresentado em sua versão original em espanhol.",
    prev: "Página anterior",
    next: "Próxima página",
    toIndex: "Ir ao índice",
    pages: "Páginas",
    cont: "continuação",
    hint: "Clique na página direita para avançar e na esquerda para voltar.",
    hintTouch: "Deslize para a esquerda para avançar e para a direita para voltar.",
    backCoverNote: "Obrigado por confiar em nós",
    contact: "protecciondedatos@grupotdm.com",
  },
};
