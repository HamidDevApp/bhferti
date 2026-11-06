"use client";

import React from "react";
import { ArrowRight, Sparkles, Tag } from "lucide-react";
import { Category } from "@/data/categories";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

interface CategoryCardProps {
  category: Category;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  const { t, isAr } = useLang();
  const Icon = category.icon;
  const count = products.filter((p) => p.categoryId === category.id).length;
  const name = isAr ? category.nameAr : category.nameFr;

  const handleCardClick = () => {
    window.dispatchEvent(new CustomEvent("select-category", { detail: category.id }));
  };

  const handleSubcategoryClick = (e: React.MouseEvent, subId: string) => {
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent("select-subcategory", { detail: subId }));
  };

  return (
    <div
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden cursor-pointer border border-gray-100 transition-all duration-500 flex flex-col h-full"
      style={{ animation: `fade-in-up 0.6s ease-out ${index * 150}ms forwards` }}
      role="button"
      tabIndex={0}
      aria-label={name}
    >
      <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-gray-900">
        <img
          src={category.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-black/20" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
            {Icon && <Icon className="w-4 h-4 text-brand-600" />}
            <span className="text-xs font-bold text-gray-900 tracking-wide">{isAr ? category.nameFr : category.nameAr}</span>
          </div>
          {count > 0 && (
            <span className="bg-brand-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {count} {count > 1 ? t("cat.products") : t("cat.product")}
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-5 right-5 z-10">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-300" />
            <span className="text-xs font-semibold text-brand-300 tracking-wide drop-shadow">
              {isAr ? category.badgeText : category.badgeTextFr}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md leading-tight">{name}</h3>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between gap-5 bg-white">
        <div className="space-y-4">
          <p className="text-gray-600 text-sm leading-relaxed">{isAr ? category.descriptionAr : category.description}</p>

          {category.subcategories.length > 0 && (
            <div className="space-y-2.5 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                <Tag className="w-3.5 h-3.5 text-brand-600" />
                <span>{t("cat.subcategories")}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={(e) => handleSubcategoryClick(e, sub.id)}
                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold hover:bg-brand-500 hover:text-white transition-colors border border-gray-200 text-gray-700"
                  >
                    {isAr ? sub.nameAr : sub.nameFr}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-gray-100 mt-auto">
          <div className="w-full py-3 px-4 rounded-2xl bg-brand-50 group-hover:bg-brand-600 text-brand-700 group-hover:text-white transition-all duration-300 flex items-center justify-between">
            <span className="text-sm font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {t("cat.explore")}
            </span>
            <div className="w-7 h-7 rounded-full bg-white/80 group-hover:bg-white text-brand-700 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
