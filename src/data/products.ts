export interface CompositionRow {
  label: string;
  value: string;
}

export interface DoseRow {
  culture: string;
  dose: string;
  frequency?: string;
}

export interface TechnicalSheet {
  /** Sous-titre affiché sous le nom (ex: "Complexe de calcium chélaté") */
  subtitle?: string;
  composition?: CompositionRow[];
  doses?: DoseRow[];
  /** Mode d'emploi court (fertigation / foliaire) */
  usage?: CompositionRow[];
  benefits?: string[];
  precautions?: string[];
  packaging?: string;
  formulation?: string;
  /** Fiche technique PDF validée (dans /public/fiches) */
  pdf?: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  subcategoryId: string;
  cropTypes: string[];
  purposes: string[];
  description: string;
  descriptionAr: string;
  shortDescription: string;
  shortDescriptionAr: string;
  image: string;
  badge?: string;
  isBio?: boolean;
  sheet?: TechnicalSheet;
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
    descriptionAr:
      "مبيد نيماتود بيولوجي غني بالأحماض الأمينية والبوتاسيوم. سماد NPK خاص يحارب النيماتود ويحفز نمو الجذور وقوة النبات.",
    shortDescription: "Nématicide bio — Engrais NPK + acides aminés",
    shortDescriptionAr: "مبيد نيماتود بيولوجي — سماد NPK + أحماض أمينية",
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
    descriptionAr:
      "مبيد فطري بيولوجي مرجعي يعتمد على سلالات مختارة من الترايكوديرما. يحمي الجذور بفعالية من أمراض التربة (الفيوزاريوم، البيثيوم، الريزوكتونيا).",
    shortDescription: "Biofongicide Trichoderma — protection racinaire",
    shortDescriptionAr: "مبيد فطري بيولوجي بالترايكوديرما — حماية الجذور",
    image: "/images/products/remedier.png",
    badge: "Bio",
    isBio: true,
    sheet: { packaging: "1 kg", formulation: "Poudre" },
  },
  {
    id: "horticure-gel",
    name: "Horticure Gel",
    categoryId: "protection",
    subcategoryId: "fongicide",
    cropTypes: ["fruits", "vegetables", "vines", "citrus"],
    purposes: ["protection"],
    description:
      "Engrais cuprique en formulation gel. Protection préventive et curative contre le mildiou, l'oïdium et les bactérioses. Application foliaire ou par badigeonnage.",
    descriptionAr:
      "سماد نحاسي على شكل جل. وقاية وعلاج ضد البياض الزغبي والبياض الدقيقي والأمراض البكتيرية. يستعمل رشاً على الأوراق أو دهناً.",
    shortDescription: "Engrais cuprique gel — 1, 5 et 20 L",
    shortDescriptionAr: "سماد نحاسي جل — 1 و5 و20 لتر",
    image: "/images/products/horticure-gel.png",
    badge: "Bio",
    isBio: true,
    sheet: { packaging: "1 L · 5 L · 20 L", formulation: "Gel", precautions: ["Agiter avant d'user."] },
  },

  // ── Acaricide ──
  {
    id: "sapacaro",
    name: "Sapacaro",
    categoryId: "protection",
    subcategoryId: "acaricide",
    cropTypes: ["fruits", "vegetables", "citrus", "vines"],
    purposes: ["protection"],
    description:
      "Engrais NPK à action acaricide pour le contrôle des acariens (araignées rouges, tétranyques). Formulation respectueuse des auxiliaires et de l'environnement.",
    descriptionAr:
      "سماد NPK بمفعول مضاد للحلم (العنكبوت الأحمر). تركيبة تحترم الحشرات النافعة والبيئة.",
    shortDescription: "Engrais NPK acaricide — 1 L",
    shortDescriptionAr: "سماد NPK مضاد للحلم — 1 لتر",
    image: "/images/products/sapacaro.png",
    badge: "Bio",
    isBio: true,
    sheet: { packaging: "1 L", formulation: "Liquide" },
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
    descriptionAr:
      "محلول سائل من الجيل الخامس لمعالجة أحواض الماء الفلاحية، القضاء على الطحالب والصيانة الوقائية لشبكات الري والقطارات ضد الانسداد.",
    shortDescription: "Traitement bassins & réseaux d'irrigation",
    shortDescriptionAr: "معالجة الأحواض وشبكات الري",
    image: "/images/products/aquaclean.png",
  },

  // ── Anti Salinité du Sol ──
  {
    id: "hortisal",
    name: "Hortisal",
    categoryId: "protection",
    subcategoryId: "anti-salinite",
    cropTypes: ["cereals", "fruits", "vegetables", "olives"],
    purposes: ["soil", "growth"],
    description:
      "Engrais appliqué au sol à base de calcium complexé par des acides polyhydroxycarboxyliques. Corrige la salinité du sol : le calcium déplace le sodium, réduit la conductivité électrique (CE), améliore la structure des sols salins et sodiques et favorise l'absorption des nutriments.",
    descriptionAr:
      "سماد يضاف للتربة يعتمد على الكالسيوم المركب بأحماض بولي هيدروكسي كربوكسيلية. يصحح ملوحة التربة: الكالسيوم يزيح الصوديوم، يخفض الموصلية الكهربائية، يحسن بنية التربة المالحة ويسهل امتصاص العناصر الغذائية.",
    shortDescription: "Anti-salinité — CaO 7,28 % — 5 L",
    shortDescriptionAr: "مضاد الملوحة — كالسيوم 7,28 % — 5 لتر",
    image: "/images/products/hortisal.png",
    sheet: {
      subtitle: "Engrais appliqué au sol",
      composition: [
        { label: "Oxyde de calcium (CaO)", value: "7,28 % p/p" },
        { label: "Agents complexants", value: "Acides polyhydroxycarboxyliques" },
      ],
      packaging: "5 L",
      formulation: "Liquide",
    },
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
      "Piège chromatique adhésif noir conçu pour cibler des ravageurs spécifiques comme la Tuta absoluta. Sa couleur noire attire ces nuisibles et facilite leur surveillance et leur contrôle, sous serre comme en plein champ.",
    descriptionAr:
      "مصيدة لاصقة سوداء مخصصة لحشرات معينة مثل التوتا أبسولوتا. لونها الأسود يجذب هذه الحشرات ويسهل مراقبتها ومكافحتها في البيوت المغطاة والحقول.",
    shortDescription: "Piège chromatique noir — Tuta absoluta",
    shortDescriptionAr: "مصيدة لاصقة سوداء — التوتا أبسولوتا",
    image: "/images/products/rouleau-noir.png",
  },
  {
    id: "rouleau-bleu",
    name: "Rouleau Adhésif Bleu",
    categoryId: "protection",
    subcategoryId: "rouleaux-adhesifs",
    cropTypes: ["fruits", "vegetables", "olives"],
    purposes: ["protection"],
    description:
      "Outil de piégeage chromatique conçu spécifiquement pour lutter contre les thrips, sous serre et en plein champ. Sa couleur bleue attire ces insectes et permet une surveillance efficace et une réduction des populations, limitant les dommages aux cultures.",
    descriptionAr:
      "لفافة لاصقة زرقاء لاصطياد التريبس بشكل انتقائي. اللون الأزرق جذاب لهذه الحشرة.",
    shortDescription: "Piège chromatique bleu — thrips",
    shortDescriptionAr: "مصيدة لاصقة زرقاء — التريبس",
    image: "/images/products/rouleau-bleu.png",
  },
  {
    id: "rouleau-jaune",
    name: "Rouleau Adhésif Jaune",
    categoryId: "protection",
    subcategoryId: "rouleaux-adhesifs",
    cropTypes: ["fruits", "vegetables", "citrus"],
    purposes: ["protection"],
    description:
      "L'un des pièges chromatiques les plus utilisés contre une large gamme d'insectes volants nuisibles. Très efficace pour la capture des aleurodes, pucerons et mouches blanches : un incontournable sous serre et en plein champ.",
    descriptionAr:
      "لفافة لاصقة صفراء لاصطياد الذبابة البيضاء والمن وحافرات الأوراق. مصيدة مرجعية في المكافحة المتكاملة.",
    shortDescription: "Piège chromatique jaune — aleurodes & pucerons",
    shortDescriptionAr: "مصيدة لاصقة صفراء — الذبابة البيضاء والمن",
    image: "/images/products/rouleau-jaune.png",
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
    cropTypes: ["cereals", "fruits", "vegetables", "olives", "vines", "citrus"],
    purposes: ["nutrition", "soil", "growth"],
    description:
      "Engrais organique et biostimulant d'origine végétale. La combinaison de carboxylates de faible poids moléculaire permet une meilleure assimilation des nutriments, une meilleure réponse au stress hydrique et un développement racinaire renforcé. Source ultra-rapide de carbone organique pour les plantes et les micro-organismes du sol.",
    descriptionAr:
      "سماد عضوي ومحفز حيوي من أصل نباتي. يحسن امتصاص العناصر الغذائية، يقوي مقاومة الإجهاد المائي ويطور الجذور. مصدر سريع للكربون العضوي للنبات ولكائنات التربة الدقيقة.",
    shortDescription: "Extrait humique riche en fulvique — 20 L",
    shortDescriptionAr: "مستخلص هيوميك غني بالفولفيك — 20 لتر",
    image: "/images/products/bh-fulvique.png",
    badge: "Nouveau",
    sheet: {
      pdf: "/fiches/fiche-technique-bh-fulvique.pdf",
      subtitle: "Extrait humique riche en fulvique",
      composition: [
        { label: "Matière sèche", value: "74 %" },
        { label: "Matière organique", value: "67 %" },
        { label: "Extrait humique total", value: "56 %" },
        { label: "Acide fulvique", value: "56 %" },
        { label: "Azote total", value: "0,46 %" },
        { label: "Azote organique", value: "0,46 %" },
        { label: "Protéines brutes", value: "2 %" },
        { label: "Potassium soluble dans l'eau", value: "1 %" },
        { label: "Densité", value: "1,39 g/cc" },
        { label: "pH", value: "4,9" },
      ],
      doses: [
        { culture: "Maraîchères sous serre et plein champ", dose: "2-5 L/ha/semaine · 5-10 L/ha/application · 50-70 L/ha/cycle", frequency: "4-6 applications à partir de la transplantation, tous les 7-15 jours" },
        { culture: "Agrumes, avocatier, fruitiers, oliviers, vignes, cultures subtropicales et fruits rouges", dose: "5-10 L/ha/application · 60-80 L/ha/cycle · 40 à 80 cc/arbre/application", frequency: "À partir du débourrement et des premières pousses, tous les 15-21 jours" },
        { culture: "Grandes cultures et plantes ornementales", dose: "2-5 L/ha/application", frequency: "En mélange avec herbicides et fongicides, tous les 15-21 jours" },
      ],
      benefits: [
        "Augmente la matière organique et améliore la structure des sols",
        "Renforce le développement racinaire",
        "Réduit les blocages et antagonismes entre éléments nutritifs",
        "Améliore la rétention d'eau et la respiration des micro-organismes",
        "Augmente la capacité d'échange cationique (CEC)",
        "Excellent tampon de pH et de la salinité",
      ],
      precautions: [
        "Compatible avec la plupart des engrais et produits phytosanitaires.",
        "Ne pas mélanger avec des huiles minérales et des produits à réaction très alcaline.",
        "Conserver dans l'emballage d'origine, à l'abri du gel (5-30 °C).",
      ],
      packaging: "20 L",
      formulation: "Liquide",
    },
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
    descriptionAr:
      "مُجذِّر احترافي يعتمد على الفوسفور سهل الامتصاص، الأحماض الأمينية ومستخلصات الطحالب. ينشط تكاثر الجذور والشعيرات الجذرية والانطلاقة السريعة للشتلات.",
    shortDescription: "Enracineur pro — 1 L et 5 L",
    shortDescriptionAr: "مُجذِّر احترافي — 1 و5 لتر",
    image: "/images/products/horti-root.png",
    sheet: { packaging: "1 L · 5 L", formulation: "Liquide" },
  },

  // ── Biostimulants / Anti Stress ──
  {
    id: "aminozine",
    name: "Aminozime",
    categoryId: "fertilizers",
    subcategoryId: "biostimulants",
    cropTypes: ["fruits", "vegetables", "olives", "vines", "cereals", "citrus"],
    purposes: ["growth", "nutrition"],
    description:
      "Biostimulant organique à base d'acides aminés d'origine végétale, en application foliaire et racinaire. Son aminogramme complet favorise le métabolisme de la plante, le développement végétatif, la floraison et la nouaison. Recommandé en pleine croissance et en conditions défavorables (basses températures, vent froid, sols appauvris).",
    descriptionAr:
      "محفز حيوي عضوي غني بالأحماض الأمينية من أصل نباتي، يستعمل رشاً على الأوراق أو عبر الري. ينشط نمو النبات، الإزهار والعقد، ويُنصح به في فترات النمو وفي الظروف الصعبة (البرد، الرياح الباردة، التربة الفقيرة).",
    shortDescription: "Biostimulant organique — acides aminés — 5 L",
    shortDescriptionAr: "محفز حيوي عضوي — أحماض أمينية — 5 لتر",
    image: "/images/products/aminozine.png",
    sheet: {
      pdf: "/fiches/fiche-technique-aminozime.pdf",
      subtitle: "Biostimulant organique à base d'acides aminés",
      composition: [
        { label: "Acides aminés libres", value: "18 % P/P" },
        { label: "Carbone organique total", value: "22,70 % P/P" },
        { label: "Azote total (N)", value: "3,31 % P/P" },
        { label: "Anhydride phosphorique (P₂O₅)", value: "0,03 % P/P" },
        { label: "Oxyde de potassium (K₂O)", value: "1,28 % P/P" },
        { label: "Matière organique totale", value: "40,05 % P/P" },
        { label: "Bétaïne", value: "0,004 %" },
        { label: "Densité", value: "1,23" },
        { label: "pH", value: "4,71" },
      ],
      doses: [
        { culture: "Maraîchage", dose: "250-300 cc/hl en foliaire · 2 à 5 L/ha en fertigation", frequency: "Tous les 10-15 jours après la transplantation" },
        { culture: "Fruits rouges et cultures tropicales", dose: "250-300 cc/hl en foliaire · 2 à 5 L/ha en fertigation", frequency: "Tous les 10-15 jours pendant le développement végétatif" },
        { culture: "Arbres fruitiers (avocatier, agrumes et autres)", dose: "200-300 cc/hl · Fertigation : 5 à 10 L/ha", frequency: "Préfloraison, mise à fruit, croissance des fruits" },
        { culture: "Cultures intensives (tournesol, soja, tabac, colza, coton)", dose: "1-2 L/ha", frequency: "En mélange avec les produits phytosanitaires" },
        { culture: "Céréales", dose: "1-2 L/ha", frequency: "Avec herbicides de post-émergence ou fongicide" },
        { culture: "Olivier", dose: "200-300 cc/hl", frequency: "2-4 applications/cycle : croissance végétative, fructification, maturation" },
      ],
      precautions: ["Bien agiter avant emploi.", "Ne pas mélanger avec des huiles."],
      packaging: "5 L",
      formulation: "Liquide",
    },
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
    descriptionAr:
      "محلول غذائي خاص بالإزهار غني بالفوسفور والبور. يحفز الإزهار، يحسن العقد، يقلل تساقط الأزهار ويرفع نسبة الإثمار.",
    shortDescription: "Spécial floraison — phosphore + bore",
    shortDescriptionAr: "خاص بالإزهار — فوسفور + بور",
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
    descriptionAr:
      "محلول غذائي خاص بتضخيم الثمار يعتمد على البوتاسيوم والكالسيوم. يرفع الحجم والوزن والصلابة ونسبة السكر في الثمار.",
    shortDescription: "Spécial grossissement — calibre & poids des fruits",
    shortDescriptionAr: "خاص بتضخيم الثمار — الحجم والوزن",
    image: "",
  },

  // ── Correcteur de Carences ──
  {
    id: "fer-multichelate",
    name: "Fer 4.8%",
    categoryId: "fertilizers",
    subcategoryId: "correcteur-carences",
    cropTypes: ["fruits", "vegetables", "citrus", "olives", "vines"],
    purposes: ["nutrition", "growth"],
    description:
      "Fer multichélaté pour la prévention et la correction de la chlorose ferrique. Reste stable et disponible pour la plante sur une large gamme de pH, y compris en sols calcaires. Application en fertirrigation ou en foliaire.",
    descriptionAr:
      "حديد مخلبي متعدد للوقاية من اصفرار الأوراق (نقص الحديد) وعلاجه. يبقى متاحاً للنبات في مجال واسع من الـ pH، حتى في التربة الكلسية. يستعمل عبر الري أو رشاً على الأوراق.",
    shortDescription: "Fer multichélaté — anti-chlorose — 5 kg",
    shortDescriptionAr: "حديد مخلبي — ضد الاصفرار — 5 كلغ",
    image: "/images/products/fer-multichelate.png",
    badge: "Nouveau",
    sheet: {
      subtitle: "Fer multichélaté — anti-chlorose ferrique",
      composition: [{ label: "Fer (Fe) chélaté", value: "4,8 %" }],
      packaging: "5 kg",
      formulation: "Microgranulés solubles",
    },
  },
  {
    id: "fertibore",
    name: "FertiBore 17%",
    categoryId: "fertilizers",
    subcategoryId: "correcteur-carences",
    cropTypes: ["fruits", "vegetables", "olives", "vines", "citrus"],
    purposes: ["nutrition", "yield"],
    description:
      "Bore 17 % en poudre soluble, essentiel pour la synthèse des parois cellulaires et la division cellulaire. Aide à la pollinisation, au développement des fruits et des graines, à la translocation des sucres, au métabolisme de l'azote et au transport du potassium.",
    descriptionAr:
      "بور 17% على شكل مسحوق قابل للذوبان، ضروري لبناء جدران الخلايا وانقسامها. يساعد على التلقيح ونمو الثمار والبذور ونقل السكريات.",
    shortDescription: "Bore 17% soluble — floraison & qualité fruits — 5 KG",
    shortDescriptionAr: "بور 17% — الإزهار وجودة الثمار — 5 كلغ",
    image: "/images/products/fertibore.png",
    sheet: {
      composition: [{ label: "Bore (B)", value: "17 %" }],
      usage: [
        { label: "Fertigation", value: "1,0 - 1,5 kg/ha" },
        { label: "Foliaire", value: "100 - 200 g/100 L d'eau" },
      ],
      precautions: [
        "Compatible avec la plupart des engrais NPK et produits phytosanitaires, sauf produits cupriques, sulfuriques ou à réaction très acide ou alcaline.",
        "Stocker dans un lieu fermé et frais (moins de 40 °C).",
        "Ne pas dépasser les doses recommandées.",
      ],
      packaging: "5 kg",
      formulation: "Poudre soluble",
    },
  },
  {
    id: "fertimix",
    name: "FertiMix",
    categoryId: "fertilizers",
    subcategoryId: "correcteur-carences",
    cropTypes: ["cereals", "fruits", "vegetables", "olives"],
    purposes: ["nutrition", "growth"],
    description:
      "Produit en poudre à base d'oligo-éléments avec une formulation spécialement équilibrée. Corrige rapidement les carences en oligo-éléments, par injection ou par voie foliaire, pour des plantes saines et productives.",
    descriptionAr:
      "مسحوق بعناصر صغرى بتركيبة متوازنة. يعالج بسرعة نقص العناصر الصغرى عبر الري أو رشاً على الأوراق، لنباتات سليمة ومنتجة.",
    shortDescription: "Formulation complète oligo-éléments — 5 KG",
    shortDescriptionAr: "تركيبة كاملة من العناصر الصغرى — 5 كلغ",
    image: "/images/products/fertimix.png",
    sheet: {
      composition: [
        { label: "Azote total (N)", value: "7 %" },
        { label: "Azote ammoniacal", value: "7 %" },
        { label: "Fer (Fe)", value: "4 %" },
        { label: "Manganèse (Mn)", value: "4 %" },
        { label: "Zinc (Zn)", value: "4 %" },
        { label: "Oxyde de magnésium (MgO)", value: "2 %" },
        { label: "Bore (B)", value: "1 %" },
        { label: "Cuivre (Cu)", value: "1 %" },
      ],
      usage: [
        { label: "Fertigation", value: "1,5 - 2,5 kg/ha" },
        { label: "Foliaire", value: "150 - 250 g/hl" },
      ],
      precautions: [
        "Compatible avec la plupart des engrais NPK et produits phytosanitaires, sauf produits cupriques, sulfuriques ou à réaction très acide ou alcaline.",
        "Stocker dans un lieu fermé et frais (moins de 40 °C).",
        "Ne pas dépasser les doses recommandées.",
      ],
      packaging: "5 kg",
      formulation: "Poudre soluble",
    },
  },
  {
    id: "citocal",
    name: "Cito-Cal",
    categoryId: "fertilizers",
    subcategoryId: "correcteur-carences",
    cropTypes: ["fruits", "vegetables", "citrus", "olives", "vines"],
    purposes: ["nutrition", "yield"],
    description:
      "Complexe de calcium chélaté à absorption et assimilation rapides. Prévient et traite le bitter pit des pommes, la pourriture apicale de la tomate et du poivron, l'éclatement des cerises et fruits à noyau. Améliore la fermeté des fruits et leur durée de conservation. Application foliaire et en fertigation grâce au complexe LSA.",
    descriptionAr:
      "مركب كالسيوم مخلبي سريع الامتصاص. يقي ويعالج تبقع التفاح، تعفن طرف ثمار الطماطم والفلفل، وتشقق الكرز والفواكه ذات النواة. يحسن صلابة الثمار ومدة تخزينها. يستعمل رشاً على الأوراق أو عبر الري.",
    shortDescription: "Complexe de calcium chélaté — 5 L et 20 L",
    shortDescriptionAr: "مركب كالسيوم مخلبي — 5 و20 لتر",
    image: "/images/products/citocal.png",
    sheet: {
      pdf: "/fiches/fiche-technique-cito-cal.pdf",
      subtitle: "Complexe de calcium chélaté",
      composition: [
        { label: "Oxyde de calcium (CaO)", value: "16 % p/p · 20 % p/v" },
        { label: "Matière organique", value: "21 % p/p · 26 % p/v" },
        { label: "Agent complexant", value: "LSA" },
        { label: "Densité", value: "1,23" },
        { label: "pH", value: "5,1" },
      ],
      doses: [
        { culture: "Arbres fruitiers, oliviers et vigne (foliaire)", dose: "200-350 cc/hl", frequency: "Tous les 15 jours dès l'apparition du fruit" },
        { culture: "Citrus et subtropicales — avocatier (foliaire)", dose: "250-500 cc/hl", frequency: "4-5 applications à partir de la nouaison" },
        { culture: "Cultures maraîchères (foliaire)", dose: "200-300 cc/hl", frequency: "Tous les 15 jours dès le développement végétatif" },
        { culture: "Fruits rouges (foliaire)", dose: "200-300 cc/hl", frequency: "Tous les 15 jours dès l'apparition du fruit" },
        { culture: "Légumes feuilles (foliaire)", dose: "250-350 cc/hl", frequency: "Chaque semaine, 10 à 15 jours après le repiquage" },
        { culture: "Arbres fruitiers (fertigation)", dose: "5-7 L/ha/application", frequency: "Après l'apparition des fruits" },
        { culture: "Maraîchères et fruits rouges (fertigation)", dose: "3-5 L/ha/application", frequency: "Après l'apparition du fruit et pendant sa croissance" },
        { culture: "Cultures en rangs (fertigation)", dose: "10 L/ha/application" },
        { culture: "Post-récolte (drencher)", dose: "500 cc/100 L", frequency: "Fruits en contact 20-40 secondes" },
      ],
      precautions: [
        "Traiter en dehors des heures chaudes de la journée.",
        "Ne pas mélanger sans test de compatibilité préalable.",
      ],
      packaging: "5 L · 20 L",
      formulation: "Liquide soluble (L.S.)",
    },
  },
  {
    id: "pomax-l33",
    name: "POMAX L33",
    categoryId: "fertilizers",
    subcategoryId: "correcteur-carences",
    cropTypes: ["cereals", "fruits", "vegetables", "citrus", "olives", "vines"],
    purposes: ["nutrition", "growth", "yield"],
    description:
      "Fertilisant de nouvelle génération riche en potassium, rapidement absorbé et assimilé. Favorise la coloration et le Brix, augmente la taille et la qualité des fruits, avance la maturation et renforce la résistance à la sécheresse, au froid et aux stress hydriques. Sans chlore.",
    descriptionAr:
      "سماد من الجيل الجديد غني بالبوتاسيوم، سريع الامتصاص. يحسن التلوين ونسبة السكر، يكبر حجم الثمار وجودتها، يسرع النضج ويقوي مقاومة الجفاف والبرد والإجهاد. بدون كلور.",
    shortDescription: "Chélate de potassium foliaire & fertirrigation — 5 L et 20 L",
    shortDescriptionAr: "بوتاسيوم مخلبي للرش والري — 5 و20 لتر",
    image: "/images/products/pomax-l33.png",
    badge: "Best-seller",
    sheet: {
      pdf: "/fiches/fiche-technique-pomax-l33.pdf",
      subtitle: "Chélate de potassium pour application foliaire et fertirrigation",
      composition: [
        { label: "Potassium soluble dans l'eau (K₂O)", value: "33 % P/P" },
        { label: "Agent stabilisant", value: "EDTA" },
        { label: "Densité", value: "1,37" },
        { label: "pH", value: "12,76" },
      ],
      doses: [
        { culture: "Maraîchage (tomate, melon, poivron, pastèque…)", dose: "200-300 cc/100 L", frequency: "2 à 3 applications tous les 15 jours à partir de la nouaison" },
        { culture: "Pomme de terre, oignon, carotte", dose: "250-300 cc/hl", frequency: "2 à 3 applications tous les 15 jours dès la tubérisation" },
        { culture: "Agrumes et cultures tropicales", dose: "250-400 cc/100 L", frequency: "3 fois par cycle à partir de la pousse du printemps" },
        { culture: "Arbres fruitiers, oliviers et vignes", dose: "250-400 cc/100 L", frequency: "3 fois par cycle à partir de la fin de nouaison" },
        { culture: "Fruits rouges et avocatier", dose: "250-300 cc/100 L", frequency: "2 à 3 applications à partir de la nouaison" },
        { culture: "Grandes cultures", dose: "1 L/300 L", frequency: "Stades épi 1 cm et/ou épiaison" },
        { culture: "Fertirrigation", dose: "0,5-1 kg/1000 L d'eau ou 5-7 L/ha/application" },
      ],
      precautions: [
        "Bien agiter avant l'emploi. Stocker au frais et au sec (5-25 °C).",
        "Ne pas traiter si la température dépasse 25 °C. Traiter de préférence en fin de journée.",
        "Ne jamais mélanger avec des produits alcalins. Faire un essai de compatibilité.",
        "Tenir hors de la portée des enfants. Éviter le contact avec la peau et les yeux.",
      ],
      packaging: "5 L · 20 L",
      formulation: "Liquide soluble (L.S.)",
    },
  },

  // ── Régulateur de pH ──
  {
    id: "ferti-ph",
    name: "Ferti pH",
    categoryId: "fertilizers",
    subcategoryId: "regulateur-ph",
    cropTypes: ["cereals", "fruits", "vegetables", "citrus", "olives", "vines"],
    purposes: ["nutrition"],
    description:
      "Régulateur de pH à faible poids moléculaire qui améliore l'efficacité des bouillies foliaires en abaissant leur pH. Agit aussi comme complexant : il améliore l'assimilation des éléments nutritifs et des matières actives contenus dans les mélanges.",
    descriptionAr:
      "منظم للحموضة (pH) يحسن فعالية محاليل الرش بخفض الـ pH. يعمل أيضاً كمادة مخلبية تحسن امتصاص العناصر الغذائية والمواد الفعالة في الخليط.",
    shortDescription: "Régulateur de pH & complexant — 5 L",
    shortDescriptionAr: "منظم الحموضة ومادة مخلبية — 5 لتر",
    image: "/images/products/ferti-ph.png",
    badge: "Nouveau",
    sheet: {
      composition: [
        { label: "Phosphore soluble dans l'eau (P₂O₅)", value: "5 %" },
        { label: "Acide carboxylique (agent complexant)", value: "30 %" },
      ],
      usage: [
        { label: "Mode d'emploi", value: "Pulvérisation foliaire" },
        { label: "Dose foliaire", value: "30 à 80 cc/hl selon le pH initial de l'eau" },
        { label: "Limite", value: "Ne pas descendre sous pH 5" },
      ],
      precautions: [
        "Compatible avec la plupart des engrais NPK et produits phytosanitaires, sauf produits cupriques, sulfuriques ou à réaction très acide ou alcaline.",
        "Stocker dans un lieu fermé et frais (moins de 40 °C).",
      ],
      packaging: "5 L",
      formulation: "Liquide",
    },
  },
];
