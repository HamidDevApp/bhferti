"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "ar";

export const WHATSAPP_NUMBER = "212661982832";
export const PHONE_DISPLAY = "0661-982832";
export const EMAIL = "bhferti@gmail.com";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const dict = {
  // Navigation
  "nav.home": { fr: "Accueil", ar: "الرئيسية" },
  "nav.products": { fr: "Produits", ar: "المنتجات" },
  "nav.categories": { fr: "Gammes", ar: "مجالاتنا" },
  "nav.contact": { fr: "Contact", ar: "اتصل بنا" },
  "nav.quote": { fr: "Demander un devis", ar: "اطلب عرض سعر" },
  "nav.openMenu": { fr: "Ouvrir le menu", ar: "فتح القائمة" },
  "nav.closeMenu": { fr: "Fermer le menu", ar: "إغلاق القائمة" },
  "lang.switch": { fr: "العربية", ar: "Français" },

  // Hero
  "hero.badge": { fr: "Intrants agricoles professionnels", ar: "مدخلات فلاحية احترافية" },
  "hero.title1": { fr: "Cultivons l'excellence,", ar: "نزرع التميز،" },
  "hero.title2": { fr: "naturellement", ar: "بشكل طبيعي" },
  "hero.subtitle": {
    fr: "BH FERTI distribue des engrais de haute performance, des biostimulants et des solutions de protection biologique pour une agriculture marocaine durable et rentable.",
    ar: "بي إتش فيرتي توزع أسمدة عالية الأداء، محفزات حيوية وحلول حماية بيولوجية من أجل فلاحة مغربية مستدامة ومربحة.",
  },
  "hero.ctaProducts": { fr: "Découvrir nos produits", ar: "اكتشف منتجاتنا" },
  "hero.ctaWhatsapp": { fr: "Parler à un conseiller", ar: "تحدث مع مستشار" },
  "hero.scroll": { fr: "Défiler vers le bas", ar: "انزل للأسفل" },

  // Trust strip
  "trust.1.title": { fr: "Produits certifiés", ar: "منتجات معتمدة" },
  "trust.1.text": { fr: "Formulations testées au champ", ar: "تركيبات مجربة في الحقل" },
  "trust.2.title": { fr: "Conseil technique", ar: "استشارة تقنية" },
  "trust.2.text": { fr: "Accompagnement par nos agronomes", ar: "مواكبة من طرف مهندسينا الزراعيين" },
  "trust.3.title": { fr: "Livraison au Maroc", ar: "توصيل لكل المغرب" },
  "trust.3.text": { fr: "Rapide, depuis Aït Melloul", ar: "سريع، من أيت ملول" },
  "trust.4.title": { fr: "Réponse sur WhatsApp", ar: "رد عبر واتساب" },
  "trust.4.text": { fr: "Devis et conseils en direct", ar: "عروض أسعار ونصائح مباشرة" },

  // Categories
  "cat.pill": { fr: "Solutions de précision", ar: "حلول زراعية متخصصة" },
  "cat.title": { fr: "Nos gammes de solutions", ar: "مجالات خبرتنا الزراعية" },
  "cat.subtitle": {
    fr: "Des solutions conçues pour l'agriculture marocaine moderne : plus de rendement, des cultures mieux protégées.",
    ar: "حلول مبتكرة مصممة خصيصاً لتلبية متطلبات الفلاحة العصرية بالمغرب، لمضاعفة المردودية وحماية محاصيلكم.",
  },
  "cat.subcategories": { fr: "Sous-catégories", ar: "الأصناف" },
  "cat.explore": { fr: "Voir les produits", ar: "استكشف المنتجات" },
  "cat.product": { fr: "produit", ar: "منتج" },
  "cat.products": { fr: "produits", ar: "منتجات" },

  // Products section
  "prod.title": { fr: "Nos produits", ar: "منتجاتنا" },
  "prod.subtitle": { fr: "Catalogue de solutions agricoles professionnelles", ar: "كتالوج الحلول الفلاحية الاحترافية" },
  "prod.showing": { fr: "produit(s) affiché(s)", ar: "منتج معروض" },
  "prod.none.title": { fr: "Aucun produit trouvé", ar: "لا توجد منتجات" },
  "prod.none.text": {
    fr: "Modifiez ou réinitialisez vos filtres pour voir plus de résultats.",
    ar: "غيّر الفلاتر أو أعد ضبطها لرؤية نتائج أكثر.",
  },
  "prod.details": { fr: "Fiche technique", ar: "البطاقة التقنية" },
  "prod.addQuote": { fr: "Devis", ar: "عرض سعر" },
  "prod.bio": { fr: "Biologique", ar: "بيولوجي" },
  "prod.photoSoon": { fr: "Photo bientôt disponible", ar: "الصورة قريباً" },

  // Filters
  "filter.title": { fr: "Filtres", ar: "الفلاتر" },
  "filter.advanced": { fr: "Filtres avancés", ar: "فلاتر متقدمة" },
  "filter.reset": { fr: "Réinitialiser", ar: "إعادة الضبط" },
  "filter.clear": { fr: "Effacer", ar: "مسح" },
  "filter.categories": { fr: "Catégories", ar: "الفئات" },
  "filter.crops": { fr: "Type de culture", ar: "نوع الزراعة" },
  "filter.usage": { fr: "Usage", ar: "الاستعمال" },
  "filter.found": { fr: "produit(s) trouvé(s)", ar: "منتج" },
  "filter.see": { fr: "Voir les résultats", ar: "عرض النتائج" },
  "filter.close": { fr: "Fermer les filtres", ar: "إغلاق الفلاتر" },

  // Product modal
  "sheet.title": { fr: "Fiche technique", ar: "البطاقة التقنية" },
  "sheet.description": { fr: "Description", ar: "الوصف" },
  "sheet.composition": { fr: "Composition", ar: "التركيبة" },
  "sheet.usage": { fr: "Mode d'emploi", ar: "طريقة الاستعمال" },
  "sheet.doses": { fr: "Cultures et doses", ar: "الزراعات والجرعات" },
  "sheet.culture": { fr: "Culture", ar: "الزراعة" },
  "sheet.dose": { fr: "Dose", ar: "الجرعة" },
  "sheet.when": { fr: "Application", ar: "التطبيق" },
  "sheet.benefits": { fr: "Avantages", ar: "المزايا" },
  "sheet.precautions": { fr: "Précautions", ar: "احتياطات" },
  "sheet.packaging": { fr: "Conditionnement", ar: "التعبئة" },
  "sheet.formulation": { fr: "Formulation", ar: "الشكل" },
  "sheet.crops": { fr: "Cultures", ar: "الزراعات" },
  "sheet.onRequest": {
    fr: "La fiche technique complète de ce produit est disponible sur demande. Contactez-nous sur WhatsApp pour recevoir les doses adaptées à votre culture.",
    ar: "البطاقة التقنية الكاملة متوفرة عند الطلب. راسلنا عبر واتساب لتحصل على الجرعات المناسبة لزراعتك.",
  },
  "sheet.techNote": {
    fr: "Doses indicatives. À adapter selon l'état de la culture et du sol.",
    ar: "جرعات تقريبية، تُعدَّل حسب حالة الزراعة والتربة. التفاصيل التقنية بالفرنسية.",
  },
  "sheet.orderWhatsapp": { fr: "Commander sur WhatsApp", ar: "اطلب عبر واتساب" },
  "sheet.addQuote": { fr: "Ajouter au devis", ar: "أضف لطلب السعر" },
  "sheet.close": { fr: "Fermer", ar: "إغلاق" },
  "wa.productMsg": {
    fr: "Bonjour BH FERTI, je suis intéressé(e) par le produit : ",
    ar: "السلام عليكم BH FERTI، أنا مهتم بالمنتج: ",
  },
  "wa.generalMsg": {
    fr: "Bonjour BH FERTI, j'aimerais avoir des informations sur vos produits.",
    ar: "السلام عليكم BH FERTI، بغيت معلومات على المنتجات ديالكم.",
  },
  "wa.button": { fr: "Écrivez-nous sur WhatsApp", ar: "راسلنا على واتساب" },

  // Quote
  "quote.title": { fr: "Demandez un devis", ar: "اطلب عرض سعر" },
  "quote.subtitle": { fr: "Recevez une offre personnalisée pour vos besoins agricoles", ar: "احصل على عرض مخصص لاحتياجاتك الفلاحية" },
  "quote.why": { fr: "Pourquoi BH FERTI ?", ar: "لماذا BH FERTI؟" },
  "quote.why.1": { fr: "Expertise agronomique de terrain", ar: "خبرة زراعية ميدانية" },
  "quote.why.2": { fr: "Produits certifiés et testés en conditions réelles", ar: "منتجات معتمدة ومجربة في ظروف حقيقية" },
  "quote.why.3": { fr: "Accompagnement technique personnalisé", ar: "مواكبة تقنية مخصصة" },
  "quote.why.4": { fr: "Livraison rapide partout au Maroc", ar: "توصيل سريع لكل أنحاء المغرب" },
  "quote.phone": { fr: "Téléphone / WhatsApp", ar: "الهاتف / واتساب" },
  "quote.email": { fr: "Email", ar: "البريد الإلكتروني" },
  "quote.address": { fr: "Adresse", ar: "العنوان" },
  "quote.addressValue": {
    fr: "3ème étage, Résidence Rizq, Bloc A, N°A21, Av Hassan 2, Aït Melloul",
    ar: "الطابق 3، إقامة رزق، بلوك A، رقم A21، شارع الحسن الثاني، أيت ملول",
  },
  "form.company": { fr: "Nom / Entreprise *", ar: "الاسم / الشركة *" },
  "form.email": { fr: "Email", ar: "البريد الإلكتروني" },
  "form.phone": { fr: "Téléphone *", ar: "الهاتف *" },
  "form.products": { fr: "Produits sélectionnés", ar: "المنتجات المختارة" },
  "form.message": { fr: "Message", ar: "الرسالة" },
  "form.messagePh": {
    fr: "Détaillez vos besoins (superficie, type de culture, etc.)...",
    ar: "اكتب احتياجاتك (المساحة، نوع الزراعة...)",
  },
  "form.send": { fr: "Envoyer la demande sur WhatsApp", ar: "أرسل الطلب عبر واتساب" },
  "form.sent": { fr: "WhatsApp s'est ouvert avec votre demande. Il ne reste qu'à appuyer sur Envoyer.", ar: "تم فتح واتساب مع طلبك. اضغط فقط على إرسال." },
  "form.err.company": { fr: "Le nom est requis", ar: "الاسم مطلوب" },
  "form.err.email": { fr: "Format d'email invalide", ar: "صيغة البريد غير صحيحة" },
  "form.err.phone": { fr: "Le téléphone est requis", ar: "رقم الهاتف مطلوب" },
  "form.err.phoneFormat": { fr: "Format de téléphone invalide", ar: "رقم الهاتف غير صحيح" },
  "form.none": { fr: "Aucun produit disponible", ar: "لا توجد منتجات" },
  "form.waIntro": { fr: "Demande de devis BH FERTI", ar: "طلب عرض سعر BH FERTI" },

  // Footer
  "footer.about": {
    fr: "Distributeur d'intrants agricoles à Aït Melloul : engrais, biostimulants et protection biologique. Votre partenaire pour une agriculture performante et durable.",
    ar: "موزع المدخلات الفلاحية بأيت ملول: أسمدة، محفزات حيوية وحماية بيولوجية. شريككم من أجل فلاحة ناجحة ومستدامة.",
  },
  "footer.links": { fr: "Liens rapides", ar: "روابط سريعة" },
  "footer.categories": { fr: "Gammes", ar: "مجالاتنا" },
  "footer.contact": { fr: "Contact", ar: "اتصل بنا" },
  "footer.rights": { fr: "Tous droits réservés.", ar: "جميع الحقوق محفوظة." },
  "footer.tagline": { fr: "Intrants agricoles professionnels", ar: "مدخلات فلاحية احترافية" },
} as const;

export type DictKey = keyof typeof dict;

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
  isAr: boolean;
}

const LangContext = createContext<LangContextValue>({
  lang: "fr",
  setLang: () => {},
  t: (key) => dict[key].fr,
  isAr: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("bhferti-lang");
      if (saved === "ar" || saved === "fr") setLangState(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-ar", lang === "ar");
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("bhferti-lang", l);
    } catch {
      /* storage unavailable */
    }
  };

  const t = (key: DictKey) => dict[key][lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t, isAr: lang === "ar" }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
