import type { SolutionContent } from "./solutionsData";

const sectorsRoad = ["Highways", "Collector or interstate roads", "Intercity roads", "Low-traffic roads", "Airports and Ports", "Logistics warehouses"];
const sectorsGranular = ["Roadways", "Mining", "Energy", "Hydrocarbons", "Agriculture", "Ports and Airports", "Urban Development"];
const sectorsConc = ["Concessions: Roads, Ports and Airports", "National and intercity roads", "Mining"];

const durable = { t: "Structural durability with technical backing", d: "A long-life solution; its effectiveness depends on the mix design and on the structural design of the pavement." };
const functional = { t: "High-performance functional surface", d: "A uniform, homogeneous wearing course with properties that improve friction, control roughness and maximize mix performance under all conditions." };
const protect = { t: "Full protection of the lower layers", d: "A functional barrier that efficiently shields the granular layers of the road system, preserving their stability under traffic and loads." };

const rutasLima = {
  title: "Panamericana Sur with SMA 8 mix, Lima, Peru",
  text: ["A project in Lima, on a stretch operated by Rutas de Lima, where a gap-graded SMA 8 asphalt mix, known for its high performance on heavy-traffic roads, was implemented for the first time.", "Stabilizing additives, adhesion promoters, warm mix technologies and polymer-modified asphalts were used to improve durability, adhesion and mechanical behavior."],
};

export const solutionsEn: SolutionContent[] = [
  {
    desc: ["Cold asphalt patching is a technique for localized pavement repair with mixes made from asphalt emulsions. It consists of mineral aggregates (coarse and fine), asphalt emulsion, cement, water and, if required, specific additives.", "It allows quick, safe interventions without thermal equipment, making it ideal for urban maintenance or hard-to-reach areas."],
    products: ["Slow-setting asphalt emulsion"],
    advantages: [
      { t: "Production at ambient temperature", d: "It is made with emulsions, without high temperatures." },
      { t: "Versatility across several pavement layers", d: "It can be used in the wearing course, intermediate layers or shoulders." },
      { t: "Easy application in the field", d: "Simple placement allows agile interventions." },
      { t: "Low environmental impact solution", d: "It minimizes emissions and energy consumption." },
      { t: "Safety and health for the application crew", d: "It produces no fumes and needs no high temperatures." },
    ],
    sectors: ["Roadways", "Ports and Airports", "Urban Development"],
    projects: [{ title: "Panamericana Sur road concession, Peru", text: ["Cold asphalt mix item for shoulder treatment, for the concessionaire COVINCA, with slow-setting emulsion at ambient temperature.", "It delivered cohesion, durability and a safer work environment."] }],
  },
  {
    desc: ["Slow-setting emulsions improve the physical and mechanical properties of granular layers, whether by incorporating RAP (reclaimed asphalt pavement) or borrowed granular material.", "Stabilized layers have greater mechanical stability, better behavior against moisture-induced damage and higher densification, which improves long-term performance."],
    products: ["Slow-setting asphalt emulsion"],
    advantages: [
      { t: "Greater mechanical strength in granular layers", d: "Improves the bearing capacity of the stabilized material." },
      { t: "Efficient densification and partial sealing", d: "Better compaction and waterproofing, with lower permeability." },
      { t: "Improved structural stability", d: "More resistance to dynamic loads and greater durability of the granular package." },
      { t: "Superior performance against moisture", d: "Greater water resistance and lower risk of loss of support." },
      { t: "Revaluation of available materials", d: "Allows RAP to be included, with more sustainable and economical solutions." },
    ],
    sectors: sectorsGranular,
    projects: [{ title: "Panamericana Sur stretch between Marcona - Puerto Lomas, Ica, Peru", text: ["Full-depth recycling on the road from the Marcona junction to Puerto Lomas, with slow-setting emulsion as the stabilizing agent.", "It improved cohesion, mechanical strength and stability against moisture."] }],
  },
  {
    desc: ["Stabilizing granular layers with slow-setting emulsions comprehensively improves their physical and mechanical properties.", "It increases structural stability, improves densification and maintains integrity under moisture-induced damage, giving a stronger, more durable base for demanding load and climate conditions."],
    products: ["Slow-setting asphalt emulsion"],
    advantages: [
      { t: "Greater mechanical strength of the granular base", d: "Reinforces structural capacity under repeated loads." },
      { t: "Improved densification and waterproofing", d: "More efficient compaction and lower permeability, with longer service life." },
      { t: "Improved stability in operating conditions", d: "More cohesion and a stable platform for the upper layers." },
      { t: "Superior behavior against moisture-induced damage", d: "Minimizes loss of integrity caused by water." },
    ],
    sectors: sectorsGranular,
    projects: [
      { title: "Panamericana Sur - Puerto Maldonado, Madre de Dios, Peru", text: ["Part of the Interoceánica Sur megaproject, operated by IIRSA Sur. The granular base was stabilized with slow-setting emulsion."] },
      { title: "Challapalca – Apacheta stretch, Tacna, Peru", text: ["Carried out in collaboration with Consorcio Santa Rosa. A review in June 2025 confirmed the integrity of the stretch."] },
      { title: "Trujillo – Shorey stretch, La Libertad, Peru", text: ["Carried out in coordination with Obrainsa."] },
    ],
  },
  {
    desc: ["A sustainable alternative within the new generation of road solutions. It incorporates recycled materials, mainly RAP (reclaimed pavement), reducing the consumption of non-renewable raw materials.", "With controlled dosages and specialized additives, optimal technical performance is maintained."],
    products: ["Betutec polymer-modified asphalt", "Additives"],
    advantages: [
      durable,
      { t: functional.t, d: "A uniform, homogeneous wearing course that improves friction and controls roughness." },
      { t: protect.t, d: "A functional barrier that protects the granular layers." },
      { t: "Efficient use of recycled materials", d: "Reuses RAP, which keeps its physical and mechanical properties." },
      { t: "Responsibility toward the environment", d: "Responsible use of non-renewable materials and lower greenhouse gas emissions." },
    ],
    sectors: sectorsRoad,
    projects: [
      { title: "Recycled asphalt mix on shoulders, Lima, Peru", text: ["Mixes with 15% RAP, with a controlled dosage that meets structural standards."] },
      { title: "Asphalt pavement milling on Panamericana Sur, Lima, Peru", text: ["Milling works before the new wearing course on the Panamericana Sur; the RAP was integrated into the recycled mixes."] },
    ],
  },
  {
    desc: ["Paving with asphalt mixes is key to the wearing course of flexible pavement. It is normally carried out hot with a paving train that spreads the mix, pre-compacts it and compacts it until the specified densities are reached.", "It gives high-performance surfaces, greater resistance to traffic and a long service life, which is key to the functionality and durability of road infrastructure."],
    products: ["Modified asphalt", "Asphalt emulsion", "Conventional asphalt"],
    advantages: [durable, functional, protect],
    sectors: sectorsRoad,
    projects: [{ ...rutasLima, title: "Resurfacing of Panamericana Sur with SMA mix, Lima, Peru" }],
  },
  {
    desc: ["Hot mixes with modified asphalts are high-performance solutions for very demanding road infrastructure. Their formulation gives greater resistance to permanent deformation, fatigue cracking and moisture-induced damage.", "It also improves the elastic behavior of the asphalt structure, with more durability under heavy loads, slow or stationary traffic and critical conditions on urban and industrial roads."],
    products: ["Betutec polymer-modified asphalt", "Additives"],
    advantages: [durable, { t: functional.t, d: "A uniform, homogeneous wearing course with properties that improve friction, control roughness and maximize performance under all kinds of conditions." }, { t: protect.t, d: "Efficiently shields the granular layers of the pavement structure, preserving their integrity under traffic and loads." }],
    sectors: sectorsRoad,
    projects: [rutasLima],
  },
  {
    desc: ["Asphalt priming is key to preparing the support surface (normally the base course). It forms a waterproof layer with suitable surface cohesion.", "It is done with an emulsion formulated for priming, impregnation or waterproofing, Primetec®, whose main function is to improve adhesion between the base and the wearing course, for good structural performance."],
    products: ["Primetec asphalt priming emulsion"],
    advantages: [
      { t: "Effective preparation of the granular base", d: "Creates a waterproof layer that acts as an adhesion bridge between the granular base and the upper layers." },
      { t: "Fast curing that optimizes work schedules", d: "Lets the following paving stages start sooner, with more operational efficiency." },
      { t: "Practical application at ambient temperature", d: "It needs no prior heating, simplifies field execution and reduces energy costs." },
      { t: "Sustainable solution with lower environmental impact", d: "Minimizes emissions and waste, with cleaner paving practices." },
      { t: "Safety for the application crew", d: "It emits no harmful fumes and needs no high temperatures, protecting operators' health." },
    ],
    sectors: sectorsRoad,
    projects: [
      { title: "Cusco high-Andean project – CONCAR, Peru", text: ["Asphalt priming item on a stretch of the Cusco high-Andean corridor, with Primetec® emulsion, to condition the base and improve adhesion with the upper layers.", "It was chosen because it produces a uniform mix at ambient temperature, useful in hard-to-reach areas and variable climate."] },
      { title: "Cora Cora project – CONCAR, Cusco, Peru", text: ["Asphalt priming item on the Cora Cora road (Cusco) with Primetec®, to ensure adhesion between base and wearing course in a demanding geographic setting.", "Primetec® optimized curing times and kept the construction process continuous, compatible with the area's climate."] },
    ],
  },
  {
    desc: ["A cost-effective, versatile solution to extend pavement life, either as a maintenance technique or as a wearing surface.", "Single (one layer), double (two layers) or multiple (more than two layers) treatments can be applied, depending on traffic conditions and project requirements."],
    products: ["Rapid-setting type 2 asphalt emulsion (CRS-2h)", "Rapid-setting type 2 asphalt emulsion (CRS-2hP)"],
    advantages: [
      { t: "Practical application with no high thermal requirements", d: "Cold placement simplifies the work and optimizes times without compromising quality." },
      { t: "Cold technology with lower environmental and operational impact", d: "Using emulsions reduces fume emissions and improves the safety and comfort of technical staff." },
      { t: "High tolerance to deformation under load", d: "The formulation with cold asphalt binder and coarse aggregate absorbs larger deflections without losing structural performance." },
    ],
    sectors: ["Roadways", "Low-traffic roads", "Urban Development", "Alternate or temporary roads"],
    projects: [{ title: "Sicuani - La Raya road, Cusco – Puno stretch, Peru", text: ["Double surface treatment on the Cusco–Puno road, with rapid-setting type 2 emulsion (CRS-2), which allows traffic to be opened quickly.", "It is an efficient, cost-effective technique for inter-provincial roads with variable loads and climate."] }],
  },
  {
    desc: ["Impact attenuators absorb part of the energy of a collision and stop the vehicle in a controlled way. They reduce the risk of impact against dangerous fixed structures, helping to save lives and reduce serious injuries to drivers and passengers.", "Their performance is validated by the international certifications NCHRP Report 350, MASH and EN 1317."],
    products: ["TL2-TL3 impact attenuators"],
    advantages: [
      { t: "Effective risk reduction against rigid structures", d: "A high level of safety by minimizing impact against fixed objects and reducing the likelihood of serious accidents." },
      { t: "Specialized protection for critical infrastructure", d: "A protective barrier in sensitive areas that prevents structural damage and strengthens operational safety." },
      { t: "Agile installation and efficient maintenance", d: "Optimizes resources and time, with fast commissioning and simplified maintenance." },
    ],
    sectors: sectorsConc,
    projects: [{ title: "Attenuators on Panamericana Norte, Lima, Peru", text: ["The corridor has critical points with a high risk of vehicle impact.", "Grupo TDM supplied and installed certified TL-3 impact attenuators to dissipate crash energy and reduce the severity of accidents."] }],
  },
  {
    desc: ["Certified metal barriers are vehicle containment systems evaluated through impact tests. They comply with NCHRP Report 350 (USA), EN 1317 (European Community) and Directive No. 007-2008-MTC/02.", "They come in types according to the project: roadside barriers (installed by driving), bridge-edge barriers (anchored to reinforced concrete structures) and median barriers (double beam separating opposing traffic flows)."],
    products: ["Roadside barrier", "Bridge-edge barrier", "Median barrier"],
    advantages: [
      { t: "High level of vehicle containment", d: "Designed for severe impacts, with proven capacity to contain vehicles in critical situations." },
      { t: "Safe redirection after impact", d: "They guide the vehicle in a controlled way after the crash and reduce the risk of crossing into adjacent lanes and of secondary collisions." },
      { t: "Greater protection for occupants", d: "They lessen impact severity compared with traditional rigid systems and reduce injuries." },
    ],
    sectors: sectorsConc,
    projects: [
      { title: "Canta-Huayllay road, Junín, Peru", text: ["A modern alternative that relieves congestion on the Carretera Central and improves connectivity for neglected regions.", "Grupo TDM carried out the supply and installation of more than 16 km of bridge-edge and roadside barriers."] },
      { title: "Tacna – Collpa road, Peru - Bolivia", text: ["A commercial and logistics corridor between Peru and Bolivia, key to South American regional integration.", "Grupo TDM supplied and installed more than 15 km of roadside and bridge-edge barriers, and carried out the full horizontal and vertical signage."] },
    ],
  },
  {
    desc: ["Production, supply and installation of warning, regulatory and informational signs, together with their support structures such as posts and gantries.", "It also includes kilometer markers, rigid and flexible delineator posts and overhead gantries, which strengthen visual guidance and safety on all kinds of roads."],
    products: ["Regulatory signs", "Warning signs", "Informational signs", "Overhead gantries", "Kilometer markers"],
    advantages: [
      { t: "Immediate increase in road safety", d: "A visible, effective solution that strengthens protection from the moment it is implemented." },
      { t: "Durability in demanding conditions", d: "Materials resistant to wear and environmental exposure." },
      { t: "Efficiency in operating costs", d: "An affordable investment with low maintenance, which optimizes the budget." },
    ],
    sectors: ["Concessions: Roads, Ports and Airports", "National and intercity roads, local routes", "Mining"],
    projects: [
      { title: "Tacna – Collpa road, Peru – Bolivia", text: ["A commercial and logistics corridor between Peru and Bolivia, key to South American regional integration.", "Grupo TDM supplied and installed more than 15 km of roadside and bridge-edge barriers, and carried out the full horizontal and vertical signage."] },
      { title: "Línea Amarilla, Lima, Peru", text: ["A high-traffic corridor, now called Lima Expresa.", "Grupo TDM carried out the full vertical signage, from single-post signs to overhead gantries, cantilever gantries and toll panels, among other elements."] },
    ],
  },
  {
    desc: ["Cladding systems with metal and/or composite panels that improve tunnel safety through more brightness, ease of cleaning and passive fire protection."],
    products: ["Vitrified panels"],
    advantages: [
      { t: "Aesthetic, durable and safe vitrified finish", d: "High color retention over time; A1 fire rating and no toxic gas emission." },
      { t: "Improves spatial perception and safety in tunnels", d: "Notably increases interior brightness and gives a sense of spaciousness, avoiding claustrophobia." },
      { t: "Uniform visual transition with no «black hole» effect", d: "Homogeneous reflection that avoids sharp light contrasts on entry, reducing accidents caused by loss of visibility." },
      { t: "Easy-to-clean vitrified surface", d: "The technical enamel allows graffiti to be removed with solvents without damaging the finish." },
    ],
    sectors: ["Roadways", "Urban Development", "Ports and Airports"],
    projects: [{ title: "Benavides Tunnel cladding, Lima, Peru", text: ["Project: Benavides grade-separated interchange, with a 820 m cut-and-cover tunnel (including ramps). It connects the Panamericana Sur flow (north-south direction) to San Juan de Miraflores, to improve traffic flow and reduce congestion.", "Interior cladding with vitrified steel panels on a supporting structure of galvanized steel profiles, mechanically anchored to the walls. In the interior section, the panels are 3.257 m high above a 1 m concrete plinth. The ramps use panels of variable height. Total installed: 4,508 m², white RAL 9016, gloss between 80% and 95%."] }],
  },
  {
    desc: ["Solutions to mitigate noise pollution in urban, industrial or transport settings, by reflecting or absorbing noise. They improve acoustic quality and help meet health and safety standards.", "They are made of sheets or panels of different thicknesses, colors and materials, adaptable to technical and aesthetic requirements."],
    products: ["Absorptive barriers", "Reflective barriers"],
    advantages: [
      { t: "Regulatory compliance in noise control", d: "Reduces sound levels to acceptable ranges under health and safety standards." },
      { t: "Quieter, more livable urban environments", d: "Blocks traffic or industrial noise, for calmer residential areas." },
      { t: "Deterrent function and access control", d: "Beyond acoustics, it restricts unauthorized passage into sensitive areas." },
      { t: "Aesthetic adaptability with low visual impact", d: "A variety of materials and designs that blend into the surroundings with minimal landscape intervention." },
    ],
    sectors: sectorsConc,
    projects: [{ title: "Tren Maya acoustic barrier, Mexico", text: ["On the Tren Maya project, an acoustic screen was supplied to mitigate the noise of passing trains.", "It consists of acoustic panels 3 m high by 2.5 m long, made of specialized materials and mounted on a structure of metal profiles. It meets the environmental standards of the railway development."] }],
  },
];
