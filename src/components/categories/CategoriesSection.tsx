"use client";

import { categories } from "@/data/categories";
import { CategoryCard } from "./CategoryCard";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { Sprout } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function CategoriesSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const { t } = useLang();

  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-white via-gray-50/70 to-gray-50 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-14 opacity-0 translate-y-6 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200/60 px-4 py-1.5 rounded-full text-brand-700 text-xs sm:text-sm font-bold mb-4">
            <Sprout className="w-4 h-4 text-brand-600" />
            <span>{t("cat.pill")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {t("cat.title")}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-brand-500 to-emerald-400 mx-auto rounded-full mb-5" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">{t("cat.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
