import type { SolutionContent } from "./solutionsData";

const sectorsRoad = ["Rodovias", "Vias coletoras ou interestaduais", "Vias interurbanas", "Vias de baixo volume de tráfego", "Aeroportos e Portos", "Armazéns logísticos"];
const sectorsGranular = ["Viário", "Mineração", "Energia", "Hidrocarbonetos", "Agricultura", "Portos e Aeroportos", "Desenvolvimento Urbano"];
const sectorsConc = ["Concessões: Rodoviárias, Portos e Aeroportos", "Vias nacionais e interurbanas", "Mineração"];

const durable = { t: "Durabilidade estrutural com respaldo técnico", d: "Solução de longa vida útil; sua eficácia depende do projeto da mistura e do projeto estrutural do pavimento." };
const functional = { t: "Superfície funcional de alto desempenho", d: "Camada de rolamento uniforme e homogênea, com propriedades que melhoram o atrito, controlam a rugosidade e maximizam o desempenho da mistura em todo tipo de condição." };
const protect = { t: "Proteção integral das camadas inferiores", d: "Barreira funcional que resguarda eficientemente as camadas granulares do sistema viário, preservando sua estabilidade diante do tráfego e das cargas." };

const rutasLima = {
  title: "Panamericana Sul com mistura SMA 8, Lima, Peru",
  text: ["Projeto em Lima, em um trecho concedido à Rutas de Lima, onde se implementou pela primeira vez uma mistura asfáltica descontínua tipo SMA 8, reconhecida por seu alto desempenho em vias de alto tráfego.", "Foram usados aditivos estabilizantes, melhoradores de adesividade, tecnologias de mistura morna e asfaltos modificados com polímeros, para melhorar a durabilidade, a adesão e o comportamento mecânico."],
};

export const solutionsPt: SolutionContent[] = [
  {
    desc: ["O remendo asfáltico a frio é uma técnica de reparo localizado de pavimentos com misturas fabricadas com emulsões asfálticas. É composto por agregados minerais (graúdos e miúdos), emulsão asfáltica, cimento, água e, se necessário, aditivos específicos.", "Permite intervenções rápidas e seguras sem equipamentos térmicos, o que a torna ideal para a manutenção urbana ou de locais de difícil acesso."],
    products: ["Emulsão asfáltica de ruptura lenta"],
    advantages: [
      { t: "Produção à temperatura ambiente", d: "É elaborada com emulsões, sem temperaturas elevadas." },
      { t: "Versatilidade em várias camadas do pavimento", d: "Pode ser usada na camada de rolamento, em camadas intermediárias ou em acostamentos." },
      { t: "Alta facilidade de aplicação em campo", d: "Sua colocação simples permite intervenções ágeis." },
      { t: "Solução de baixo impacto ambiental", d: "Minimiza as emissões e o consumo de energia." },
      { t: "Segurança e saúde para a equipe aplicadora", d: "Não gera vapores nem exige altas temperaturas." },
    ],
    sectors: ["Viário", "Portos e Aeroportos", "Desenvolvimento Urbano"],
    projects: [{ title: "Concessão rodoviária da Panamericana Sul, Peru", text: ["Item de mistura asfáltica a frio para o tratamento de acostamentos, para a concessionária COVINCA, com emulsão de ruptura lenta à temperatura ambiente.", "Obteve-se coesão, durabilidade e um ambiente de trabalho mais seguro."] }],
  },
  {
    desc: ["As emulsões de ruptura lenta melhoram as propriedades físicas e mecânicas das camadas granulares, seja incorporando RAP (pavimento asfáltico reciclado) ou material granular de empréstimo.", "As camadas estabilizadas têm maior estabilidade mecânica, melhor comportamento frente à umidade induzida e maior densificação, o que melhora o desempenho a longo prazo."],
    products: ["Emulsão asfáltica de ruptura lenta"],
    advantages: [
      { t: "Maior resistência mecânica nas camadas granulares", d: "Melhora a capacidade de suporte do material estabilizado." },
      { t: "Densificação eficiente e selagem parcial", d: "Melhor compactação e impermeabilização, com menor permeabilidade." },
      { t: "Estabilidade estrutural aprimorada", d: "Mais resistência a cargas dinâmicas e maior durabilidade do pacote granular." },
      { t: "Desempenho superior frente à umidade", d: "Maior resistência à água e menor risco de perda de suporte." },
      { t: "Revalorização de materiais disponíveis", d: "Permite incluir RAP, com soluções mais sustentáveis e econômicas." },
    ],
    sectors: sectorsGranular,
    projects: [{ title: "Trecho Panamericana Sul entre Marcona - Puerto Lomas, Ica, Peru", text: ["Reciclagem em profundidade na estrada do Desvio Marcona a Puerto Lomas, com emulsão de ruptura lenta como agente estabilizante.", "Melhorou a coesão, a resistência mecânica e a estabilidade frente à umidade."] }],
  },
  {
    desc: ["A estabilização de camadas granulares com emulsões de ruptura lenta melhora de forma integral suas propriedades físicas e mecânicas.", "Aumenta a estabilidade estrutural, melhora a densificação e mantém a integridade diante da umidade induzida, dando uma base mais resistente e durável para condições exigentes de carga e clima."],
    products: ["Emulsão asfáltica de ruptura lenta"],
    advantages: [
      { t: "Maior resistência mecânica da base granular", d: "Reforça a capacidade estrutural diante de cargas repetidas." },
      { t: "Melhoria na densificação e na impermeabilização", d: "Compactação mais eficiente e menor permeabilidade, com mais vida útil." },
      { t: "Estabilidade aprimorada em condições operacionais", d: "Mais coesão e uma plataforma estável para as camadas superiores." },
      { t: "Comportamento superior frente à umidade induzida", d: "Minimiza a perda de integridade pelo efeito da água." },
    ],
    sectors: sectorsGranular,
    projects: [
      { title: "Panamericana Sul - Puerto Maldonado, Madre de Dios, Peru", text: ["Parte do megaprojeto Interoceânica Sul, concedido à IIRSA Sul. A base granular foi estabilizada com emulsão de ruptura lenta."] },
      { title: "Trecho Challapalca – Apacheta, Tacna, Peru", text: ["Executado em colaboração com o Consórcio Santa Rosa. Uma revisão de junho de 2025 constatou a integridade do trecho."] },
      { title: "Trecho Trujillo – Shorey, La Libertad, Peru", text: ["Executado em coordenação com a empresa Obrainsa."] },
    ],
  },
  {
    desc: ["Alternativa sustentável dentro da nova geração de soluções viárias. Incorpora materiais reciclados, principalmente RAP (pavimento recuperado), reduzindo o consumo de matérias-primas não renováveis.", "Com dosagens controladas e aditivos especializados, mantém-se um desempenho técnico ideal."],
    products: ["Asfalto modificado com polímeros Betutec", "Aditivos"],
    advantages: [
      durable,
      { t: functional.t, d: "Camada de rolamento uniforme e homogênea, que melhora o atrito e controla a rugosidade." },
      { t: protect.t, d: "Barreira funcional que protege as camadas granulares." },
      { t: "Aproveitamento eficiente de materiais reciclados", d: "Reutiliza o RAP, que conserva suas propriedades físicas e mecânicas." },
      { t: "Responsabilidade com o meio ambiente", d: "Uso responsável de materiais não renováveis e menor emissão de gases de efeito estufa." },
    ],
    sectors: sectorsRoad,
    projects: [
      { title: "Aplicação de mistura asfáltica reciclada em acostamentos, Lima, Peru", text: ["Misturas com 15 % de RAP, com dosagem controlada que cumpre os padrões estruturais."] },
      { title: "Fresagem de pavimento asfáltico na Panamericana Sul, Lima, Peru", text: ["Trabalhos de fresagem antes da nova camada de rolamento na Panamericana Sul; o RAP foi integrado às misturas recicladas."] },
    ],
  },
  {
    desc: ["A pavimentação com misturas asfálticas é fundamental para a camada de rolamento do pavimento flexível. Normalmente é executada a quente com um trem de pavimentação que espalha a mistura, a pré-compacta e a compacta até atingir as densidades especificadas.", "Proporciona superfícies de alto desempenho, maior resistência ao tráfego e vida útil prolongada, o que é fundamental para a funcionalidade e a durabilidade da infraestrutura viária."],
    products: ["Asfalto modificado", "Emulsão asfáltica", "Asfalto convencional"],
    advantages: [durable, functional, protect],
    sectors: sectorsRoad,
    projects: [{ ...rutasLima, title: "Recapeamento da Panamericana Sul com mistura SMA, Lima, Peru" }],
  },
  {
    desc: ["As misturas a quente com asfaltos modificados são soluções de alto desempenho para infraestrutura viária muito exigente. Sua formulação dá maior resistência a deformações permanentes, fissuração por fadiga e danos por umidade induzida.", "Também melhora o comportamento elástico da estrutura asfáltica, com mais durabilidade frente a cargas pesadas, tráfego lento ou parado e condições críticas em vias urbanas e industriais."],
    products: ["Asfalto modificado com polímeros Betutec", "Aditivos"],
    advantages: [durable, { t: functional.t, d: "Camada de rolamento uniforme e homogênea, com propriedades que melhoram o atrito, controlam a rugosidade e maximizam o desempenho em todo tipo de condição." }, { t: protect.t, d: "Resguarda eficientemente as camadas granulares da estrutura do pavimento, preservando sua integridade diante do tráfego e das cargas." }],
    sectors: sectorsRoad,
    projects: [rutasLima],
  },
  {
    desc: ["A imprimação asfáltica é fundamental para preparar a superfície de apoio (normalmente a camada de base). Forma uma camada impermeável com coesão superficial adequada.", "É feita com uma emulsão formulada para imprimação, impregnação ou impermeabilização, a Primetec®, cuja função principal é melhorar a adesão entre a base e a camada de rolamento, para um bom desempenho estrutural."],
    products: ["Emulsão asfáltica para imprimação Primetec"],
    advantages: [
      { t: "Preparação eficaz da base granular", d: "Gera uma camada impermeável que serve de ponte de adesão entre a base granular e as camadas superiores." },
      { t: "Cura rápida que otimiza os prazos da obra", d: "Permite avançar antes para as etapas seguintes de pavimentação, com mais eficiência operacional." },
      { t: "Aplicação prática à temperatura ambiente", d: "Não requer aquecimento prévio, simplifica a execução em campo e reduz custos de energia." },
      { t: "Solução sustentável com menor impacto ambiental", d: "Minimiza emissões e resíduos, com práticas de pavimentação mais limpas." },
      { t: "Segurança para a equipe aplicadora", d: "Não emite vapores nocivos nem exige temperaturas elevadas, o que protege a saúde dos operários." },
    ],
    sectors: sectorsRoad,
    projects: [
      { title: "Projeto alto-andino de Cusco – CONCAR, Peru", text: ["Item de imprimação asfáltica em um trecho do corredor alto-andino de Cusco, com emulsão Primetec®, para condicionar a base e melhorar a adesão com as camadas superiores.", "Foi escolhida porque gera uma mistura uniforme à temperatura ambiente, útil em zonas de difícil acesso e clima variável."] },
      { title: "Projeto Cora Cora – CONCAR, Cusco, Peru", text: ["Item de imprimação asfáltica na estrada Cora Cora (Cusco) com Primetec®, para garantir a adesão entre base e camada de rolamento em um ambiente geográfico exigente.", "A Primetec® otimizou os tempos de cura e deu continuidade ao processo construtivo, compatível com o clima da região."] },
    ],
  },
  {
    desc: ["Solução econômica e versátil para estender a vida útil do pavimento, seja como técnica de manutenção ou como superfície de rolamento.", "Podem ser aplicados tratamentos simples (uma camada, monocamada), duplos (duas camadas, bicamada) ou múltiplos (mais de duas camadas), conforme as condições de tráfego e os requisitos do projeto."],
    products: ["Emulsão asfáltica de ruptura rápida tipo 2 (CRS-2h)", "Emulsão asfáltica de ruptura rápida tipo 2 (CRS-2hP)"],
    advantages: [
      { t: "Aplicação prática e sem altas exigências térmicas", d: "A colocação a frio simplifica a obra e otimiza os tempos sem comprometer a qualidade." },
      { t: "Tecnologia a frio com menor impacto ambiental e operacional", d: "Ao usar emulsões, reduz-se a emissão de vapores e melhora-se a segurança e o conforto da equipe técnica." },
      { t: "Alta tolerância a deformações sob carga", d: "A formulação com ligante asfáltico a frio e agregado graúdo absorve maiores deflexões sem perder desempenho estrutural." },
    ],
    sectors: ["Viário", "Vias de baixo volume de tráfego", "Desenvolvimento Urbano", "Vias alternativas ou provisórias"],
    projects: [{ title: "Estrada Sicuani - La Raya, Trecho Cusco – Puno, Peru", text: ["Tratamento superficial duplo na estrada Cusco–Puno, com emulsão de ruptura rápida tipo 2 (CRS-2), que permite liberar o tráfego rapidamente.", "É uma técnica eficiente e econômica para vias interprovinciais com cargas e clima variáveis."] }],
  },
  {
    desc: ["Os amortecedores de impacto absorvem parte da energia de uma colisão e param o veículo de forma controlada. Reduzem o risco de impacto contra estruturas fixas perigosas, o que ajuda a salvar vidas e a diminuir lesões graves do condutor e dos passageiros.", "Seu desempenho é validado pelas certificações internacionais NCHRP Report 350, MASH e EN 1317."],
    products: ["Amortecedores de impacto TL2-TL3"],
    advantages: [
      { t: "Redução efetiva do risco frente a estruturas rígidas", d: "Alto nível de segurança ao minimizar o impacto contra objetos fixos e reduzir a probabilidade de acidentes graves." },
      { t: "Proteção especializada para infraestrutura crítica", d: "Barreira de resguardo em zonas sensíveis, evita danos estruturais e reforça a segurança operacional." },
      { t: "Instalação ágil e manutenção eficiente", d: "Otimiza recursos e tempos, com colocação em serviço rápida e manutenção simplificada." },
    ],
    sectors: sectorsConc,
    projects: [{ title: "Amortecedores na Panamericana Norte, Lima, Peru", text: ["O eixo tem pontos críticos de alto risco de impacto veicular.", "O Grupo TDM forneceu e instalou amortecedores de impacto TL-3, certificados, para dissipar a energia do choque e reduzir a gravidade dos acidentes."] }],
  },
  {
    desc: ["As barreiras metálicas certificadas são sistemas de contenção veicular avaliados com ensaios de impacto. Cumprem a NCHRP Report 350 (EUA), a EN 1317 (Comunidade Europeia) e a Diretiva N.º 007-2008-MTC/02.", "Oferecem tipologias conforme o projeto: barreiras de borda lateral (instaladas por cravação), de borda de ponte (ancoradas em estruturas de concreto armado) e medianas (dupla viga que separa fluxos em sentidos opostos)."],
    products: ["Barreira de borda lateral", "Barreira de borda de ponte", "Barreira mediana"],
    advantages: [
      { t: "Alto nível de contenção veicular", d: "Projetadas para impactos severos, com capacidade comprovada de conter veículos em situações críticas." },
      { t: "Redirecionamento seguro após o impacto", d: "Guiam o veículo de forma controlada após o choque e reduzem o risco de invadir faixas contíguas e de colisões secundárias." },
      { t: "Maior proteção para os ocupantes", d: "Atenuam a severidade do impacto frente a sistemas rígidos tradicionais e reduzem lesões." },
    ],
    sectors: sectorsConc,
    projects: [
      { title: "Estrada Canta-Huayllay, Junín, Peru", text: ["Alternativa moderna que desafoga a Carretera Central e melhora a conectividade de regiões esquecidas.", "O Grupo TDM executou o fornecimento e a instalação de mais de 16 km de barreiras de borda de ponte e laterais."] },
      { title: "Estrada Tacna – Collpa, Peru - Bolívia", text: ["Eixo comercial e logístico entre Peru e Bolívia, fundamental para a integração regional sul-americana.", "O Grupo TDM forneceu e instalou mais de 15 km de barreiras de borda lateral e de borda de ponte, e executou a sinalização horizontal e vertical integral."] },
    ],
  },
  {
    desc: ["Produção, fornecimento e instalação de placas de advertência, regulamentação e indicação, junto com suas estruturas de suporte, como postes e pórticos.", "Inclui também marcos quilométricos, postes delineadores rígidos e flexíveis e pórticos, que reforçam a orientação visual e a segurança em todo tipo de via."],
    products: ["Placas de regulamentação", "Placas de advertência", "Placas de indicação", "Pórticos", "Marcos quilométricos"],
    advantages: [
      { t: "Aumento imediato da segurança viária", d: "Solução visível e eficaz que reforça a proteção desde sua implementação." },
      { t: "Durabilidade em condições exigentes", d: "Materiais resistentes ao desgaste e à exposição ambiental." },
      { t: "Eficiência em custos operacionais", d: "Investimento acessível e baixa manutenção, o que otimiza o orçamento." },
    ],
    sectors: ["Concessões: Rodoviárias, Portos e Aeroportos", "Vias nacionais, interurbanas, rotas vicinais", "Mineração"],
    projects: [
      { title: "Estrada Tacna – Collpa, Peru – Bolívia", text: ["Eixo comercial e logístico entre Peru e Bolívia, fundamental para a integração regional sul-americana.", "O Grupo TDM forneceu e instalou mais de 15 km de barreiras de borda lateral e de borda de ponte, e executou a sinalização horizontal e vertical integral."] },
      { title: "Línea Amarilla, Lima, Peru", text: ["Eixo de alto fluxo veicular, hoje chamado Lima Expresa.", "O Grupo TDM executou a sinalização vertical integral, de placas em poste único a pórticos, pórticos em bandeira e painéis de pedágio, entre outros elementos."] },
    ],
  },
  {
    desc: ["Sistemas de revestimento com painéis metálicos e/ou compostos que melhoram a segurança em túneis com mais luminosidade, facilidade de limpeza e proteção passiva contra incêndios."],
    products: ["Painéis vitrificados"],
    advantages: [
      { t: "Acabamento vitrificado estético, durável e seguro", d: "Alta permanência da cor ao longo do tempo; classificação ignífuga A1 e sem emissão de gases tóxicos." },
      { t: "Melhora a percepção espacial e a segurança em túneis", d: "Aumenta notavelmente a luminosidade interior e dá sensação de amplitude, evitando a claustrofobia." },
      { t: "Transição visual uniforme sem efeito de «buraco negro»", d: "Reflexão homogênea que evita contrastes bruscos de luz na entrada, reduzindo acidentes por perda de visibilidade." },
      { t: "Superfície vitrificada de fácil limpeza", d: "O esmalte técnico permite remover pichações com solventes sem danificar o acabamento." },
    ],
    sectors: ["Viário", "Desenvolvimento Urbano", "Portos e Aeroportos"],
    projects: [{ title: "Revestimento do Túnel Benavides, Lima, Peru", text: ["Obra: Interseção em Desnível Benavides, com um falso túnel de 820 m de extensão total (inclui rampas). Conecta o fluxo da Panamericana Sul (sentido norte-sul) a San Juan de Miraflores, para melhorar a fluidez e reduzir o congestionamento.", "Revestimento interno com painéis de aço vitrificado sobre uma estrutura de suporte de perfis de aço galvanizado, ancorada mecanicamente às paredes. No trecho interno, os painéis medem 3,257 m de altura sobre um rodapé de concreto de 1 m. As rampas usam painéis de altura variável. Total instalado: 4.508 m², cor branca RAL 9016, brilho entre 80 % e 95 %."] }],
  },
  {
    desc: ["Soluções para mitigar a poluição sonora em ambientes urbanos, industriais ou de transporte, por reflexão ou absorção do ruído. Melhoram a qualidade acústica e ajudam a cumprir normas de saúde e segurança.", "São formados por chapas ou painéis de diferentes espessuras, cores e materiais, adaptáveis a requisitos técnicos e estéticos."],
    products: ["Barreiras absorventes", "Barreiras refletoras"],
    advantages: [
      { t: "Conformidade normativa no controle do ruído", d: "Reduz os níveis sonoros a faixas aceitáveis segundo as normas de saúde e segurança." },
      { t: "Ambientes urbanos mais silenciosos e habitáveis", d: "Bloqueia o ruído do trânsito ou da indústria, para zonas residenciais mais tranquilas." },
      { t: "Função dissuasiva e controle de acesso", d: "Além do acústico, restringe a passagem não autorizada em áreas sensíveis." },
      { t: "Adaptabilidade estética com baixo impacto visual", d: "Variedade de materiais e designs que se integram ao entorno com mínima intervenção paisagística." },
    ],
    sectors: sectorsConc,
    projects: [{ title: "Barreira acústica Trem Maia, México", text: ["No projeto Trem Maia foi fornecida uma tela acústica para mitigar o ruído da passagem constante do trem.", "Consiste em painéis acústicos de 3 m de altura por 2,5 m de comprimento, de materiais especializados, montados sobre uma estrutura de perfis metálicos. Cumpre os padrões ambientais do desenvolvimento ferroviário."] }],
  },
];
