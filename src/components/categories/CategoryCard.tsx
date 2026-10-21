"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Sparkles, Tag } from "lucide-react";
import { Category } from "@/data/categories";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  const Icon = category.icon;

  const handleCardClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-category", { detail: category.id })
      );
    }
  };

  const handleSubcategoryClick = (e: React.MouseEvent, subId: string) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-subcategory", { detail: subId })
      );
    }
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
      className={cn(
        "group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2",
        "overflow-hidden cursor-pointer border border-gray-100",
        "transition-all duration-500 flex flex-col h-full"
      )}
      style={{
        animation: `fade-in-up 0.6s ease-out ${index * 150}ms forwards`,
      }}
      role="button"
      tabIndex={0}
      aria-label={`Voir la catégorie ${category.nameFr}`}
    >
      {/* Photo Header with Cinematic Gradient Overlay */}
      <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-gray-900">
        <img
          src={category.image}
          alt={category.nameFr}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
        />

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-black/20 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          {/* French Name Badge Pill */}
          <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
            {Icon && <Icon className="w-4 h-4 text-brand-600" />}
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              {category.nameFr}
            </span>
          </div>

          {/* Product Count Pill */}
          {category.productCount > 0 && (
            <span className="bg-brand-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {category.productCount}{" "}
              {category.productCount > 1 ? "Produits" : "Produit"}
            </span>
          )}
        </div>

        {/* Arabic Name Prominently on Photo Overlay */}
        <div className="absolute bottom-4 left-5 right-5 z-10">
          {category.badgeText && (
            <div className="flex items-center gap-1.5 mb-1.5 justify-end" dir="rtl">
              <Sparkles className="w-3.5 h-3.5 text-brand-300" />
              <span
                className="text-xs font-semibold text-brand-300 tracking-wide drop-shadow"
                style={{ fontFamily: "Cairo, sans-serif" }}
              >
                {category.badgeText}
              </span>
            </div>
          )}
          <h3
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md leading-tight text-right"
            style={{ fontFamily: "Cairo, sans-serif" }}
            dir="rtl"
          >
            {category.nameAr}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-5 bg-white">
        <div className="space-y-4">
          {/* Arabic Description in Cairo Font, RTL */}
          <p
            className="text-gray-600 text-sm leading-relaxed font-medium text-right"
            style={{ fontFamily: "Cairo, sans-serif" }}
            dir="rtl"
          >
            {category.descriptionAr}
          </p>

          {/* Subcategories Pills Section */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div className="space-y-2.5 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-brand-600" />
                  <span>Sous-catégories</span>
                </span>
                <span
                  className="flex items-center gap-1 text-brand-700 font-medium"
                  dir="rtl"
                  style={{ fontFamily: "Cairo, sans-serif" }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                  <span>حلول متخصصة</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={(e) => handleSubcategoryClick(e, sub.id)}
                    className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold hover:bg-brand-500 hover:text-white transition-colors border border-gray-200/90 text-gray-700 shadow-xs"
                  >
                    {sub.nameFr}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Button Transitioning Green on Hover */}
        <div className="pt-3 border-t border-gray-100 mt-auto">
          <div className="w-full py-3 px-4 rounded-2xl bg-brand-50 group-hover:bg-brand-600 text-brand-700 group-hover:text-white hover:bg-brand-600 hover:text-white transition-all duration-300 flex items-center justify-between shadow-xs group-hover:shadow-md">
            <span
              className="text-sm font-bold flex items-center gap-2"
              style={{ fontFamily: "Cairo, sans-serif" }}
              dir="rtl"
            >
              <Sparkles className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
              استكشف منتجات {category.nameAr}
            </span>
            <div className="w-7 h-7 rounded-full bg-white/80 group-hover:bg-white text-brand-700 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
