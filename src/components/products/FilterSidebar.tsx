"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown, RotateCcw, X } from "lucide-react";
import { categories, cropTypes, purposes } from "@/data/categories";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;
  selectedSubcategories: string[];
  setSelectedSubcategories: (val: string[]) => void;
  selectedCropTypes: string[];
  setSelectedCropTypes: (val: string[]) => void;
  selectedPurposes: string[];
  setSelectedPurposes: (val: string[]) => void;
  totalResults: number;
}

export default function FilterSidebar({
  selectedCategories,
  setSelectedCategories,
  selectedSubcategories,
  setSelectedSubcategories,
  selectedCropTypes,
  setSelectedCropTypes,
  selectedPurposes,
  setSelectedPurposes,
  totalResults,
}: FilterSidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState({
    categories: true,
    cropTypes: true,
    purposes: true,
  });

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setSelectedCropTypes([]);
    setSelectedPurposes([]);
  };

  const toggleGroup = (group: keyof typeof openGroups) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const handleCheckboxChange = (
    value: string,
    selectedList: string[],
    setList: (val: string[]) => void
  ) => {
    if (selectedList.includes(value)) {
      setList(selectedList.filter((item) => item !== value));
    } else {
      setList([...selectedList, value]);
    }
  };

  const handleCategoryToggle = (categoryId: string) => {
    const isSelected = selectedCategories.includes(categoryId);
    handleCheckboxChange(categoryId, selectedCategories, setSelectedCategories);
    // If deselecting a category, remove its subcategories as well
    if (isSelected) {
      const category = categories.find((c) => c.id === categoryId);
      if (category) {
        const subIds = new Set(category.subcategories.map((s) => s.id));
        setSelectedSubcategories(
          selectedSubcategories.filter((id) => !subIds.has(id))
        );
      }
    }
  };

  const totalActiveFilters =
    selectedCategories.length +
    selectedSubcategories.length +
    selectedCropTypes.length +
    selectedPurposes.length;

  const renderFilterGroups = () => (
    <div className="space-y-6">
      {/* 1. Catégories & Nested Sous-Catégories */}
      <div>
        <button
          type="button"
          onClick={() => toggleGroup("categories")}
          className="flex w-full items-center justify-between font-semibold text-gray-800 mb-2 py-1 select-none hover:text-brand-600 transition-colors"
        >
          <span className="text-sm">
            Catégories{" "}
            {selectedCategories.length > 0 && (
              <span className="text-xs font-normal text-brand-600">
                ({selectedCategories.length})
              </span>
            )}
          </span>
          <ChevronDown
            size={16}
            className={cn(
              "transition-transform duration-200 text-gray-500",
              openGroups.categories && "rotate-180"
            )}
          />
        </button>

        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            openGroups.categories ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-2.5 pt-1">
              {categories.map((cat) => {
                const isCatChecked = selectedCategories.includes(cat.id);
                const showSubcategories =
                  isCatChecked ||
                  cat.subcategories.some((s) =>
                    selectedSubcategories.includes(s.id)
                  );

                return (
                  <div key={cat.id} className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group select-none">
                      <div className="relative flex items-center justify-center shrink-0">
                        <input
                          type="checkbox"
                          className="peer appearance-none w-4 h-4 border-2 border-gray-300 rounded cursor-pointer checked:bg-brand-500 checked:border-brand-500 transition-colors focus:ring-2 focus:ring-brand-500/20"
                          checked={isCatChecked}
                          onChange={() => handleCategoryToggle(cat.id)}
                        />
                        <svg
                          className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                        {cat.nameFr}
                      </span>
                    </label>

                    {/* Indented Subcategories */}
                    {showSubcategories &&
                      cat.subcategories &&
                      cat.subcategories.length > 0 && (
                        <div className="ml-6 space-y-2 border-l-2 border-brand-100 pl-3 pt-1">
                          {cat.subcategories.map((sub) => {
                            const isSubChecked =
                              selectedSubcategories.includes(sub.id);
                            return (
                              <label
                                key={sub.id}
                                className="flex items-center gap-2.5 cursor-pointer group select-none"
                              >
                                <div className="relative flex items-center justify-center shrink-0">
                                  <input
                                    type="checkbox"
                                    className="peer appearance-none w-3.5 h-3.5 border-2 border-gray-300 rounded cursor-pointer checked:bg-brand-500 checked:border-brand-500 transition-colors focus:ring-2 focus:ring-brand-500/20"
                                    checked={isSubChecked}
                                    onChange={() =>
                                      handleCheckboxChange(
                                        sub.id,
                                        selectedSubcategories,
                                        setSelectedSubcategories
                                      )
                                    }
                                  />
                                  <svg
                                    className="absolute w-2 h-2 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>
                                <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                                  {sub.nameFr}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Type de Culture */}
      <div className="border-t border-gray-100 pt-4">
        <button
          type="button"
          onClick={() => toggleGroup("cropTypes")}
          className="flex w-full items-center justify-between font-semibold text-gray-800 mb-2 py-1 select-none hover:text-brand-600 transition-colors"
        >
          <span className="text-sm">
            Type de Culture{" "}
            {selectedCropTypes.length > 0 && (
              <span className="text-xs font-normal text-brand-600">
                ({selectedCropTypes.length})
              </span>
            )}
          </span>
          <ChevronDown
            size={16}
            className={cn(
              "transition-transform duration-200 text-gray-500",
              openGroups.cropTypes && "rotate-180"
            )}
          />
        </button>

        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            openGroups.cropTypes ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-2 pt-1">
              {cropTypes.map((ct) => (
                <label
                  key={ct.id}
                  className="flex items-center gap-3 cursor-pointer group select-none"
                >
                  <div className="relative flex items-center justify-center shrink-0">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-4 h-4 border-2 border-gray-300 rounded cursor-pointer checked:bg-brand-500 checked:border-brand-500 transition-colors focus:ring-2 focus:ring-brand-500/20"
                      checked={selectedCropTypes.includes(ct.id)}
                      onChange={() =>
                        handleCheckboxChange(
                          ct.id,
                          selectedCropTypes,
                          setSelectedCropTypes
                        )
                      }
                    />
                    <svg
                      className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {ct.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Usage */}
      <div className="border-t border-gray-100 pt-4">
        <button
          type="button"
          onClick={() => toggleGroup("purposes")}
          className="flex w-full items-center justify-between font-semibold text-gray-800 mb-2 py-1 select-none hover:text-brand-600 transition-colors"
        >
          <span className="text-sm">
            Usage{" "}
            {selectedPurposes.length > 0 && (
              <span className="text-xs font-normal text-brand-600">
                ({selectedPurposes.length})
              </span>
            )}
          </span>
          <ChevronDown
            size={16}
            className={cn(
              "transition-transform duration-200 text-gray-500",
              openGroups.purposes && "rotate-180"
            )}
          />
        </button>

        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            openGroups.purposes ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-2 pt-1">
              {purposes.map((p) => (
                <label
                  key={p.id}
                  className="flex items-center gap-3 cursor-pointer group select-none"
                >
                  <div className="relative flex items-center justify-center shrink-0">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-4 h-4 border-2 border-gray-300 rounded cursor-pointer checked:bg-brand-500 checked:border-brand-500 transition-colors focus:ring-2 focus:ring-brand-500/20"
                      checked={selectedPurposes.includes(p.id)}
                      onChange={() =>
                        handleCheckboxChange(
                          p.id,
                          selectedPurposes,
                          setSelectedPurposes
                        )
                      }
                    />
                    <svg
                      className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {p.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ─── Mobile Toggle Button ─── */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-xs border border-gray-100 hover:border-brand-500 transition-colors"
        >
          <div className="flex items-center gap-2 font-semibold text-gray-900">
            <SlidersHorizontal size={20} className="text-brand-500" />
            <span>Filtres</span>
            {totalActiveFilters > 0 && (
              <span className="ml-1 px-2 py-0.5 text-xs font-bold rounded-full bg-brand-500 text-white">
                {totalActiveFilters}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-500">
            {totalResults} {totalResults > 1 ? "produits" : "produit"}
          </span>
        </button>
      </div>

      {/* ─── Mobile Slide-in Panel ─── */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col",
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Mobile Panel Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <SlidersHorizontal size={18} className="text-brand-500" />
            <span>Filtres</span>
            {totalActiveFilters > 0 && (
              <span className="ml-1 px-2 py-0.5 text-xs font-semibold rounded-full bg-brand-50 text-brand-600 border border-brand-200">
                {totalActiveFilters}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {totalActiveFilters > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-gray-500 hover:text-brand-500 flex items-center gap-1 transition-colors"
                title="Réinitialiser"
              >
                <RotateCcw size={14} />
                <span>Effacer</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="p-1.5 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Fermer les filtres"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Panel Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {renderFilterGroups()}
        </div>

        {/* Mobile Panel Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between gap-3">
          <span className="text-xs text-gray-600 font-medium">
            {totalResults} {totalResults > 1 ? "produits trouvés" : "produit trouvé"}
          </span>
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-xs"
          >
            Voir les résultats
          </button>
        </div>
      </div>

      {/* ─── Desktop Sticky Sidebar ─── */}
      <div className="hidden lg:block lg:sticky lg:top-24">
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={20} className="text-brand-500" />
              <h3 className="font-bold text-gray-900">Filtres Avancés</h3>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-brand-500 transition-colors cursor-pointer"
              title="Réinitialiser"
            >
              <RotateCcw size={16} />
              <span>Réinitialiser</span>
            </button>
          </div>

          {renderFilterGroups()}

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-600 text-center">
              {totalResults} {totalResults > 1 ? "produits trouvés" : "produit trouvé"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
