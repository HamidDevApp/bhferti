"use client";

import { SearchX } from "lucide-react";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";
import { useLang } from "@/lib/i18n";

export default function ProductGrid({ products }: { products: Product[] }) {
  const { t } = useLang();
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
          <SearchX className="text-gray-400 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t("prod.none.title")}</h3>
        <p className="text-gray-500 max-w-md">{t("prod.none.text")}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 text-sm text-gray-500">
        <strong className="text-gray-900">{products.length}</strong> {t("prod.showing")}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
