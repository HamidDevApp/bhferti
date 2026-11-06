"use client";

import { useState, useMemo, useEffect } from "react";
import { products } from "@/data/products";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import { useLang } from "@/lib/i18n";

export default function ProductsSection() {
  const { t } = useLang();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedCropTypes, setSelectedCropTypes] = useState<string[]>([]);
  const [selectedPurposes, setSelectedPurposes] = useState<string[]>([]);

  // Listen for category selection event from external components (e.g. CategoryCard)
  useEffect(() => {
    const handleCategoryEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedCategories([customEvent.detail]);
        setSelectedSubcategories([]);
        const elem = document.getElementById("produits");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("select-category", handleCategoryEvent);
    return () => {
      window.removeEventListener("select-category", handleCategoryEvent);
    };
  }, []);

  // Listen for subcategory selection event from external components
  useEffect(() => {
    const handleSubcategoryEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedSubcategories([customEvent.detail]);
        const elem = document.getElementById("produits");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("select-subcategory", handleSubcategoryEvent);
    return () => {
      window.removeEventListener("select-subcategory", handleSubcategoryEvent);
    };
  }, []);

  // Filter products by category, subcategory, cropType, purpose (empty means no filter)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.categoryId);

      const matchSubcategory =
        selectedSubcategories.length === 0 ||
        selectedSubcategories.includes(product.subcategoryId);

      const matchCropType =
        selectedCropTypes.length === 0 ||
        product.cropTypes?.some((ct) => selectedCropTypes.includes(ct));

      const matchPurpose =
        selectedPurposes.length === 0 ||
        product.purposes?.some((p) => selectedPurposes.includes(p));

      return matchCategory && matchSubcategory && matchCropType && matchPurpose;
    });
  }, [selectedCategories, selectedSubcategories, selectedCropTypes, selectedPurposes]);

  return (
    <section id="produits" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {t("prod.title")}
          </h2>
          <p className="text-lg text-gray-600 mb-6">{t("prod.subtitle")}</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-emerald-400 mx-auto rounded-full" />
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-72 shrink-0">
            <FilterSidebar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedSubcategories={selectedSubcategories}
              setSelectedSubcategories={setSelectedSubcategories}
              selectedCropTypes={selectedCropTypes}
              setSelectedCropTypes={setSelectedCropTypes}
              selectedPurposes={selectedPurposes}
              setSelectedPurposes={setSelectedPurposes}
              totalResults={filteredProducts.length}
            />
          </div>
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </section>
  );
}
