"use client";

import { cn } from "@/lib/utils";
import { FileText, Plus, Leaf, ImageOff } from "lucide-react";
import { Product } from "@/data/products";
import { allSubcategories, categories, cropTypes as allCropTypes } from "@/data/categories";
import { useLang } from "@/lib/i18n";

export const badgeColorMap: Record<string, string> = {
  "Best-seller": "bg-amber-500 text-white",
  Nouveau: "bg-sky-600 text-white",
  Populaire: "bg-brand-600 text-white",
  Bio: "bg-green-600 text-white",
};

export const badgeAr: Record<string, string> = {
  "Best-seller": "الأكثر مبيعاً",
  Nouveau: "جديد",
  Populaire: "مطلوب",
  Bio: "بيولوجي",
};

export function openProduct(id: string) {
  window.dispatchEvent(new CustomEvent("open-product", { detail: id }));
}

export function addToQuote(id: string) {
  window.dispatchEvent(new CustomEvent("add-to-quote", { detail: id }));
  document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
}

export default function ProductCard({ product }: { product: Product }) {
  const { t, isAr } = useLang();
  const subcategory = allSubcategories.find((s) => s.id === product.subcategoryId);
  const category = categories.find((c) => c.id === product.categoryId);
  const subcategoryName = isAr
    ? subcategory?.nameAr || category?.nameAr
    : subcategory?.nameFr || category?.nameFr;

  const hasImage = Boolean(product.image && product.image.trim() !== "");

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full group overflow-hidden">
      <button
        type="button"
        onClick={() => openProduct(product.id)}
        className="relative w-full aspect-square bg-gradient-to-b from-white to-gray-50 p-6 flex items-center justify-center overflow-hidden cursor-pointer"
        aria-label={`${t("prod.details")} ${product.name}`}
      >
        <span className="absolute top-3 start-3 bg-white/95 border border-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm z-10">
          {subcategoryName}
        </span>

        <span className="absolute top-3 end-3 flex items-center gap-1.5 z-10">
          {product.isBio && (
            <span className="bg-white/95 p-1 rounded-full shadow-sm flex" title={t("prod.bio")}>
              <Leaf size={14} className="text-green-600" />
            </span>
          )}
          {product.badge && (
            <span className={cn("px-2.5 py-1 rounded-full text-xs font-bold shadow-md", badgeColorMap[product.badge] || "bg-brand-500 text-white")}>
              {isAr ? badgeAr[product.badge] || product.badge : product.badge}
            </span>
          )}
        </span>

        {hasImage ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.12)] transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full rounded-xl border-2 border-dashed border-gray-200 bg-white flex flex-col items-center justify-center gap-3 text-gray-400">
            <span className="text-3xl font-extrabold text-brand-700/70 tracking-tight px-4 text-center">{product.name}</span>
            <span className="flex items-center gap-1.5 text-xs">
              <ImageOff size={14} /> {t("prod.photoSoon")}
            </span>
          </div>
        )}
      </button>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-brand-700 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {isAr ? product.shortDescriptionAr : product.shortDescription}
        </p>

        {product.cropTypes.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {product.cropTypes.slice(0, 3).map((ctId) => {
              const ct = allCropTypes.find((c) => c.id === ctId);
              return (
                <span key={ctId} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-xs font-medium">
                  {ct ? (isAr ? ct.labelAr : ct.label) : ctId}
                </span>
              );
            })}
            {product.cropTypes.length > 3 && (
              <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md text-xs font-medium">
                +{product.cropTypes.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 p-4 flex items-center justify-between gap-2 bg-gray-50/60">
        <button
          type="button"
          onClick={() => openProduct(product.id)}
          className="text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <FileText size={16} />
          <span>{t("prod.details")}</span>
        </button>
        <button
          type="button"
          onClick={() => addToQuote(product.id)}
          className="bg-white border border-gray-200 hover:border-brand-500 hover:text-brand-700 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5"
        >
          <Plus size={16} />
          <span>{t("prod.addQuote")}</span>
        </button>
      </div>
    </div>
  );
}
