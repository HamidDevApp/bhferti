export interface Product {
  id: string;
  name: string;
  categoryId: string;
  subcategoryId: string;
  cropTypes: string[];
  purposes: string[];
  description: string;
  shortDescription: string;
  image: string;
  badge?: string;
  isBio?: boolean;
}

export const products: Product[] = [
  /* ═══════════════════════════════════════════════════════
     CATÉGORIE 1 : PROTECTION BIOLOGIQUE
     ═══════════════════════════════════════════════════════ */

  // ── Nématicides ──
  {
    id: "musigel-gold",
    name: "Musigel GOLD",
    categoryId: "protection",
    subcategoryId: "nematicides",
    cropTypes: ["fruits", "vegetables", "olives", "vines"],
    purposes: ["protection", "soil"],
    description:
      "Nématicide biologique à base d'acides aminés et de potassium. Solution d'engrais NPK spéciale qui combat les nématodes tout en stimulant la croissance racinaire et la vigueur végétative.",
    shortDescription: "Nématicide bio — Engrais NPK + acides aminés",
    image: "/images/products/musigel-gold.png",
    badge: "Bio",
    isBio: true,
  },

  // ── Fongicide ──
  {
    id: "remedier",
    name: "Remedier",
    categoryId: "protection",
    subcategoryId: "fongicide",
    cropTypes: ["vegetables", "fruits", "vines", "olives"],
    purposes: ["protection", "soil"],
    description:
      "Biofongicide de référence à base de souches antagonistes sélectionnées (Trichoderma). Protège efficacement le système racinaire contre les maladies telluriques (Fusarium, Pythium, Rhizoctonia).",
    shortDescription: "Biofongicide Trichoderma — protection racinaire",
    image: "/images/products/remedier.png",
    badge: "Bio",
    isBio: true,
  },
  {
    id: "horticure-gel",
    name: "Horticure Gel",
    categoryId: "protection",
    subcategoryId: "fongicide",
    cropTypes: ["fruits", "vegetables", "vines", "citrus"],
    purposes: ["protection"],
    description:
      "Fongicide biologique à base d'oxychlorure de cuivre en formulation gel. Protection préventive et curative contre le mildiou, l'oïdium et les bactérioses. Application foliaire ou par badigeonnage.",
    shortDescription: "Fongicide bio — oxychlorure de cuivre gel",
    image: "",
    badge: "Bio",
    isBio: true,
  },

  // ── Acaricide ──
  {
    id: "sapicorne",
    name: "Sapicorne",
    categoryId: "protection",
    subcategoryId: "acaricide",
    cropTypes: ["fruits", "vegetables", "citrus", "vines"],
    purposes: ["protection"],
    description:
      "Acaricide biologique à large spectre pour le contrôle des acariens (araignées rouges, tétranyques). Formulation respectueuse des auxiliaires et de l'environnement, adaptée à l'agriculture biologique.",
    shortDescription: "Acaricide bio — contrôle des acariens",
    image: "",
    badge: "Bio",
    isBio: true,
  },

  // ── Traitement du Bassin ──
  {
    id: "aquaclean",
    name: "AQUACLEAN",
    categoryId: "protection",
    subcategoryId: "traitement-bassin",
    cropTypes: ["cereals", "fruits", "vegetables", "citrus", "olives", "vines"],
    purposes: ["protection", "soil"],
    description:
      "Solution liquide de 5ème génération pour le traitement des bassins d'eau agricole, l'élimination des algues et l'entretien préventif des réseaux d'irrigation et goutteurs contre le colmatage.",
    shortDescription: "Traitement bassins & réseaux d'irrigation",
    image: "/images/products/aquaclean.png",
  },

  // ── Anti Salinité du Sol ──
  {
    id: "horti-sol",
    name: "Horti Sol",
    categoryId: "protection",
    subcategoryId: "anti-salinite",
    cropTypes: ["cereals", "fruits", "vegetables", "olives"],
    purposes: ["soil", "growth"],
    description:
      "Correcteur de salinité du sol à base d'acides organiques et de calcium. Réduit la conductivité électrique (CE), débloque les nutriments piégés et améliore la structure physique des sols salins et sodiques.",
    shortDescription: "Anti-salinité — correcteur de sol salin",
    image: "",
  },

  // ── Rouleaux Adhésifs ──
  {
    id: "rouleau-noir",
    name: "Rouleau Adhésif Noir",
    categoryId: "protection",
    subcategoryId: "rouleaux-adhesifs",
    cropTypes: ["fruits", "vegetables", "olives"],
    purposes: ["protection"],
    description:
      "Rouleau adhésif chromatique noir pour le piégeage des thrips et autres insectes ravageurs. Méthode de lutte intégrée non-toxique, idéale pour les serres et les cultures sous abri.",
    shortDescription: "Piège chromatique noir — thrips & ravageurs",
    image: "",
  },
  {
    id: "rouleau-bleu",
    name: "Rouleau Adhésif Bleu",
    categoryId: "protection",
    subcategoryId: "rouleaux-adhesifs",
    cropTypes: ["fruits", "vegetables", "olives"],
    purposes: ["protection"],
    description:
      "Rouleau adhésif chromatique bleu pour le piégeage sélectif des thrips (Frankliniella occidentalis). Couleur bleue spécifiquement attractive pour ces ravageurs.",
    shortDescription: "Piège chromatique bleu — thrips",
    image: "",
  },
  {
    id: "rouleau-jaune",
    name: "Rouleau Adhésif Jaune",
    categoryId: "protection",
    subcategoryId: "rouleaux-adhesifs",
    cropTypes: ["fruits", "vegetables", "citrus"],
    purposes: ["protection"],
    description:
      "Rouleau adhésif chromatique jaune pour le piégeage des aleurodes (mouches blanches), pucerons et mineuses. Piège de référence en lutte intégrée sous serre et plein champ.",
    shortDescription: "Piège chromatique jaune — aleurodes & pucerons",
    image: "",
  },

  /* ═══════════════════════════════════════════════════════
     CATÉGORIE 2 : ENGRAIS & NUTRITION
     ═══════════════════════════════════════════════════════ */

  // ── Acide Fulvique ──
  {
    id: "bh-fulvique",
    name: "BH Fulvique",
    categoryId: "fertilizers",
    subcategoryId: "acide-fulvique",
    cropTypes: ["cereals", "fruits", "vegetables", "olives", "vines"],
    purposes: ["nutrition", "soil", "growth"],
    description:
      "Acide fulvique concentré de haute pureté. Améliore la structure du sol, stimule l'activité microbienne, augmente la capacité d'échange cationique (CEC) et facilite l'assimilation des éléments nutritifs.",
    shortDescription: "Acide fulvique concentré — amélioration du sol",
    image: "",
  },

  // ── Enracineur ──
  {
    id: "horti-root",
    name: "Horti Root",
    categoryId: "fertilizers",
    subcategoryId: "enracineur",
    cropTypes: ["fruits", "vegetables", "olives", "vines", "citrus"],
    purposes: ["growth", "soil"],
    description:
      "Enracineur professionnel à base de phosphore assimilable, acides aminés et extraits d'algues. Stimule la prolifération racinaire, le chevelu radiculaire et l'établissement rapide des jeunes plants.",
    shortDescription: "Enracineur pro — phosphore + acides aminés",
    image: "",
  },

  // ── Biostimulants / Anti Stress ──
  {
    id: "aminozine",
    name: "Aminozine",
    categoryId: "fertilizers",
    subcategoryId: "biostimulants",
    cropTypes: ["fruits", "vegetables", "olives", "vines", "cereals"],
    purposes: ["growth", "nutrition"],
    description:
      "Biostimulant et anti-stress à base d'acides aminés libres d'origine végétale. Stimule le métabolisme, renforce la résistance au stress hydrique et thermique, et optimise la récupération après gel ou grêle.",
    shortDescription: "Biostimulant anti-stress — acides aminés libres",
    image: "",
  },

  // ── Floraison ──
  {
    id: "sap-floraison",
    name: "SAP Floraison",
    categoryId: "fertilizers",
    subcategoryId: "floraison",
    cropTypes: ["fruits", "vegetables", "citrus", "olives", "vines"],
    purposes: ["yield", "growth"],
    description:
      "Solution nutritive spéciale floraison riche en phosphore et bore. Favorise l'induction florale, améliore la nouaison, réduit la coulure des fleurs et augmente le taux de fructification.",
    shortDescription: "Spécial floraison — phosphore + bore",
    image: "",
  },

  // ── Grossissement Fruit ──
  {
    id: "sap-grossissement",
    name: "SAP Grossissement",
    categoryId: "fertilizers",
    subcategoryId: "grossissement",
    cropTypes: ["fruits", "vegetables", "citrus", "olives"],
    purposes: ["yield", "growth"],
    description:
      "Solution nutritive spéciale grossissement des fruits à base de potassium et calcium. Augmente le calibre, le poids, la fermeté et la teneur en sucres des fruits pour une meilleure valorisation commerciale.",
    shortDescription: "Spécial grossissement — calibre & poids des fruits",
    image: "",
  },

  // ── Correcteur de Carences ──
  {
    id: "hierrostrene",
    name: "Hierrostrene",
    categoryId: "fertilizers",
    subcategoryId: "correcteur-carences",
    cropTypes: ["cereals", "fruits", "vegetables", "olives", "citrus"],
    purposes: ["nutrition", "growth"],
    description:
      "Correcteur de carences en poudre à base d'oligo-éléments équilibrés (Fe, Mn, Zn, Mg, B, Cu). Corrige efficacement les carences multiples et optimise le métabolisme enzymatique des cultures.",
    shortDescription: "Oligo-éléments équilibrés (Fe, Mn, Zn, Mg, B, Cu) — 5 KG",
    image: "/images/products/hierrostrene.png",
    badge: "Populaire",
  },
  {
    id: "fertibore",
    name: "FertiBore 17%",
    categoryId: "fertilizers",
    subcategoryId: "correcteur-carences",
    cropTypes: ["fruits", "vegetables", "olives", "vines", "citrus"],
    purposes: ["nutrition", "yield"],
    description:
      "Correcteur de carence en bore (17%) sous forme de poudre soluble. Essentiel pour la synthèse des parois cellulaires, la division cellulaire, la nouaison et la fertilité pollinique.",
    shortDescription: "Bore 17% soluble — floraison & qualité fruits — 5 KG",
    image: "/images/products/fertibore.png",
  },
  {
    id: "fertimix",
    name: "FertiMix",
    categoryId: "fertilizers",
    subcategoryId: "correcteur-carences",
    cropTypes: ["cereals", "fruits", "vegetables", "olives"],
    purposes: ["nutrition", "growth"],
    description:
      "Formulation complète en poudre à base d'oligo-éléments pour stimuler le métabolisme végétal. Correcteur polyvalent pour fertigation ou pulvérisation foliaire.",
    shortDescription: "Formulation complète oligo-éléments — 5 KG",
    image: "/images/products/fertimix.png",
  },
  {
    id: "citocal",
    name: "Citocal",
    categoryId: "fertilizers",
    subcategoryId: "correcteur-carences",
    cropTypes: ["fruits", "vegetables", "citrus", "olives"],
    purposes: ["nutrition", "yield"],
    description:
      "Correcteur de carence en calcium hautement assimilable. Renforce les parois cellulaires, prévient le Blossom End Rot (cul noir) sur tomate et l'éclatement des fruits. Formulation adaptée à la fertigation et l'application foliaire.",
    shortDescription: "Calcium assimilable — anti-éclatement & qualité",
    image: "",
  },
  {
    id: "pomax-l33",
    name: "POMAX L33",
    categoryId: "fertilizers",
    subcategoryId: "correcteur-carences",
    cropTypes: ["cereals", "fruits", "vegetables", "citrus", "olives"],
    purposes: ["nutrition", "growth", "yield"],
    description:
      "Chélate de potassium pour application foliaire et fertirrigation. Formulation avancée pour une assimilation ultra-rapide par la plante, améliorant la fermeté, la teneur en sucres et la coloration des fruits.",
    shortDescription: "Chélate de potassium foliaire & fertirrigation — 5L",
    image: "/images/products/pomax-l33.png",
    badge: "Best-seller",
  },
];
