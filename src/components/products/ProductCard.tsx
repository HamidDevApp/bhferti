"use client";

import { cn } from "@/lib/utils";
import { Eye, Plus, Leaf } from "lucide-react";
import { Product } from "@/data/products";
import {
  categories,
  allSubcategories,
  cropTypes as allCropTypes,
} from "@/data/categories";

const badgeColorMap: Record<string, string> = {
  "Best-seller": "bg-amber-500 text-white",
  Nouveau: "bg-emerald-600 text-white",
  Populaire: "bg-brand-600 text-white",
  Bio: "bg-green-600 text-white",
};

const placeholderGradients: Record<string, string> = {
  protection: "from-emerald-400 to-teal-600",
  fertilizers: "from-amber-400 to-orange-600",
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const subcategory = allSubcategories.find((s) => s.id === product.subcategoryId);
  const subcategoryName =
    subcategory?.nameFr ||
    categories.find((c) => c.id === product.categoryId)?.nameFr ||
    "Produit";

  const badgeClass = product.badge
    ? badgeColorMap[product.badge] || "bg-brand-500 text-white"
    : "";

  const hasImage = Boolean(product.image && product.image.trim() !== "");
  const gradientClass =
    placeholderGradients[product.categoryId] || "from-emerald-400 to-teal-600";

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full group overflow-hidden">
      {/* Product Image Area */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center overflow-hidden">
        {/* Subcategory Tag (top-left) */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm z-10">
          {subcategoryName}
        </div>

        {/* Badge and isBio (top-right) */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          {product.isBio && (
            <div
              className="bg-white/90 backdrop-blur p-1 rounded-full text-green-600 shadow-sm flex items-center justify-center"
              title="Biologique"
            >
              <Leaf size={14} className="text-green-600" />
            </div>
          )}
          {product.badge && (
            <div
              className={cn(
                "px-2.5 py-1 rounded-full text-xs font-bold shadow-md",
                badgeClass
              )}
            >
              {product.badge}
            </div>
          )}
        </div>

        {/* Image or Gradient Placeholder */}
        {hasImage ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition duration-300 group-hover:scale-110"
          />
        ) : (
          <div
            className={cn(
              "w-full h-full rounded-xl bg-gradient-to-br flex items-center justify-center shadow-inner transition duration-300 group-hover:scale-110",
              gradientClass
            )}
          >
            <span className="text-white text-6xl font-bold opacity-80 select-none">
              {product.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {product.shortDescription}
        </p>

        {/* Crop Type Tags */}
        {product.cropTypes && product.cropTypes.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {product.cropTypes.slice(0, 3).map((ctId) => {
              const ct = allCropTypes.find((c) => c.id === ctId);
              return (
                <span
                  key={ctId}
                  className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-xs font-medium"
                >
                  {ct?.label || ctId}
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

      {/* Footer */}
      <div className="border-t border-gray-100 p-4 flex items-center justify-between bg-gray-50/50 mt-auto">
        <button
          type="button"
          className="text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1.5 transition-colors"
        >
          <Eye size={16} />
          <span>Voir Détails</span>
        </button>
        <a
          href="#devis"
          className="bg-white border border-gray-200 hover:border-brand-500 hover:text-brand-500 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Plus size={16} />
          <span>Ajouter au Devis</span>
        </a>
      </div>
    </div>
  );
}
