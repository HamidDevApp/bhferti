"use client";

import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang, type DictKey } from "@/lib/i18n";

const navLinks: { key: DictKey; href: string }[] = [
  { key: "nav.home", href: "#accueil" },
  { key: "nav.categories", href: "#categories" },
  { key: "nav.products", href: "#produits" },
  { key: "nav.contact", href: "#devis" },
];

function LangToggle({ light }: { light: boolean }) {
  const { lang, setLang, t } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors",
        light
          ? "border-white/40 text-white hover:bg-white/15"
          : "border-gray-200 text-gray-700 hover:border-brand-500 hover:text-brand-700"
      )}
      aria-label={t("lang.switch")}
    >
      <Languages className="w-4 h-4" />
      <span className={lang === "fr" ? "font-arabic" : ""}>{t("lang.switch")}</span>
    </button>
  );
}

export function Navbar() {
  const { t, isAr } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "backdrop-blur-xl bg-white/95 shadow-md py-2" : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <a href="#accueil" className="flex items-center gap-3 group focus:outline-none py-1" aria-label="BH FERTI">
          <img
            src={isScrolled ? "/images/logo.png" : "/images/logo-light.png"}
            alt="BH FERTI"
            className={cn(
              "w-auto object-contain transition-all duration-300 group-hover:scale-105",
              isScrolled ? "h-12 sm:h-14 drop-shadow-sm" : "h-16 sm:h-20 md:h-22 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
            )}
          />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={cn(
                "font-medium text-sm lg:text-base tracking-wide transition-colors duration-200",
                isScrolled ? "text-gray-700 hover:text-brand-600" : "text-white/90 hover:text-white drop-shadow-sm"
              )}
            >
              {t(link.key)}
            </a>
          ))}
          <LangToggle light={!isScrolled} />
          <a
            href="#devis"
            className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all hover:scale-105 shadow-lg shadow-brand-600/30"
          >
            {t("nav.quote")}
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <LangToggle light={!isScrolled} />
          <button
            className={cn(
              "p-2 rounded-xl transition-colors",
              isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label={t("nav.openMenu")}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 bottom-0 z-50 w-72 bg-white shadow-2xl transition-transform duration-300 md:hidden flex flex-col",
          isAr ? "left-0" : "right-0",
          isMobileMenuOpen ? "translate-x-0" : isAr ? "-translate-x-full" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <img src="/images/logo.png" alt="BH FERTI" className="h-14 w-auto object-contain" />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label={t("nav.closeMenu")}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-5 gap-1.5 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-gray-700 font-medium text-base hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
        </div>
        <div className="p-5 border-t border-gray-100">
          <a
            href="#devis"
            className="block bg-brand-600 text-white text-center px-5 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors shadow-md shadow-brand-600/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("nav.quote")}
          </a>
        </div>
      </div>
    </header>
  );
}
