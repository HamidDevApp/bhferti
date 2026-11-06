import { Shield, FlaskConical, type LucideIcon } from "lucide-react";

/* ─── Subcategory ─── */
export interface Subcategory {
  id: string;
  nameFr: string;
  nameAr: string;
}

/* ─── Category ─── */
export interface Category {
  id: string;
  slug: string;
  nameAr: string;
  nameFr: string;
  badgeText: string;
  badgeTextFr: string;
  description: string;
  descriptionAr: string;
  icon: LucideIcon;
  image: string;
  productCount: number;
  color: string;
  gradient: string;
  subcategories: Subcategory[];
}

/* ═══════════════════════════════════════════════════════
   CATEGORIES
   ═══════════════════════════════════════════════════════ */
export const categories: Category[] = [
  {
    id: "protection",
    slug: "protection-biologique",
    nameAr: "منتجات الحماية البيولوجية",
    nameFr: "Protection Biologique",
    badgeText: "حماية طبيعية • 0 متبقيات",
    badgeTextFr: "Protection naturelle • 0 résidu",
    description:
      "Solutions biologiques certifiées pour la protection des cultures : nématicides, fongicides, acaricides, traitement des bassins et anti-salinité du sol.",
    descriptionAr:
      "حلول بيولوجية متطورة لحماية المحاصيل من الأمراض والآفات بدون متبقيات كيميائية. تشمل مبيدات النيماتود، مبيدات الفطريات، مبيدات الحلم، معالجة الأحواض ومكافحة ملوحة التربة.",
    icon: Shield,
    image: "/images/categories/biocontrol.jpg",
    productCount: 9,
    color: "text-emerald-600",
    gradient: "from-emerald-600 via-teal-600 to-emerald-800",
    subcategories: [
      { id: "nematicides", nameFr: "Nématicides", nameAr: "مبيدات النيماتود" },
      { id: "fongicide", nameFr: "Fongicide", nameAr: "مبيدات الفطريات" },
      { id: "acaricide", nameFr: "Acaricide", nameAr: "مبيدات الحلم" },
      { id: "traitement-bassin", nameFr: "Traitement du Bassin", nameAr: "معالجة الأحواض" },
      { id: "anti-salinite", nameFr: "Anti Salinité du Sol", nameAr: "مكافحة ملوحة التربة" },
      { id: "rouleaux-adhesifs", nameFr: "Rouleaux Adhésifs", nameAr: "لفائف لاصقة" },
    ],
  },
  {
    id: "fertilizers",
    slug: "engrais-nutrition",
    nameAr: "الأسمدة والتغذية الزراعية",
    nameFr: "Engrais & Nutrition",
    badgeText: "إنتاجية قصوى • جودة الثمار",
    badgeTextFr: "Rendement maximal • Qualité des fruits",
    description:
      "Engrais spéciaux, acides fulviques, enracineurs, biostimulants, correcteurs de carences et solutions de floraison et grossissement des fruits.",
    descriptionAr:
      "تركيبات متكاملة من الأسمدة المتخصصة : أحماض فولفيك، مُجَذِّرات، محفزات حيوية، مصححات نقص العناصر وحلول الإزهار وتضخيم الثمار.",
    icon: FlaskConical,
    image: "/images/categories/fertilizers.jpg",
    productCount: 10,
    color: "text-amber-600",
    gradient: "from-amber-600 via-orange-600 to-amber-800",
    subcategories: [
      { id: "acide-fulvique", nameFr: "Acide Fulvique", nameAr: "حمض الفولفيك" },
      { id: "enracineur", nameFr: "Enracineur", nameAr: "مُجَذِّر" },
      { id: "biostimulants", nameFr: "Biostimulants / Anti Stress", nameAr: "محفزات حيوية / مضاد الإجهاد" },
      { id: "floraison", nameFr: "Floraison", nameAr: "إزهار" },
      { id: "grossissement", nameFr: "Grossissement Fruit", nameAr: "تضخيم الثمار" },
      { id: "correcteur-carences", nameFr: "Correcteur de Carences", nameAr: "مصحح نقص العناصر" },
      { id: "regulateur-ph", nameFr: "Régulateur de pH", nameAr: "منظم الحموضة" },
    ],
  },
];

/* ─── All subcategories flat (for filtering) ─── */
export const allSubcategories: Subcategory[] = categories.flatMap(
  (c) => c.subcategories
);

/* ─── Crop Types ─── */
export const cropTypes = [
  { id: "cereals", label: "Céréales", labelAr: "الحبوب" },
  { id: "fruits", label: "Fruits", labelAr: "الفواكه" },
  { id: "vegetables", label: "Légumes", labelAr: "الخضر" },
  { id: "olives", label: "Oliviers", labelAr: "الزيتون" },
  { id: "vines", label: "Vignobles", labelAr: "الكروم" },
  { id: "citrus", label: "Agrumes", labelAr: "الحوامض" },
] as const;

/* ─── Purposes ─── */
export const purposes = [
  { id: "nutrition", label: "Nutrition", labelAr: "التغذية" },
  { id: "protection", label: "Protection", labelAr: "الحماية" },
  { id: "growth", label: "Croissance", labelAr: "النمو" },
  { id: "yield", label: "Rendement", labelAr: "المردودية" },
  { id: "soil", label: "Sol", labelAr: "التربة" },
] as const;
