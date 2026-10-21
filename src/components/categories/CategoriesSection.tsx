"use client";

import { categories } from "@/data/categories";
import { CategoryCard } from "./CategoryCard";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { Sprout } from "lucide-react";

export function CategoriesSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="categories"
      className="py-24 bg-gradient-to-b from-white via-gray-50/70 to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header with intersection observer fade-in */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-6 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          {/* Small pill badge at top */}
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200/60 px-4 py-1.5 rounded-full text-brand-700 text-xs sm:text-sm font-bold mb-4 shadow-xs">
            <Sprout className="w-4 h-4 text-brand-600" />
            <span style={{ fontFamily: "Cairo, sans-serif" }}>حلول زراعية متخصصة</span>
            <span>•</span>
            <span>Solutions de Précision</span>
          </div>

          {/* Large title in Cairo font with subtitle in brand-600 */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
            style={{ fontFamily: "Cairo, sans-serif" }}
          >
            مجالات خبرتنا الزراعية
            <span className="block text-2xl sm:text-3xl font-bold text-brand-600 mt-1">
              Nos Gammes de Solutions
            </span>
          </h2>

          {/* Gradient divider line */}
          <div className="h-1.5 w-24 bg-gradient-to-r from-brand-500 to-emerald-400 mx-auto rounded-full mb-5" />

          {/* Subtitle paragraph in gray-600 */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            حلول مبتكرة مصممة خصيصاً لتلبية متطلبات الفلاحة العصرية بالمغرب، لمضاعفة المردودية وحماية محاصيلكم.
          </p>
        </div>

        {/* Categories Grid (2 columns for the 2 categories) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id || index}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
