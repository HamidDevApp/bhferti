"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "Produits", href: "#produits" },
  { name: "Catégories", href: "#categories" },
  { name: "Contact", href: "#devis" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
        isScrolled
          ? "backdrop-blur-xl bg-white/90 shadow-md py-2.5"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#accueil"
          className="flex items-center gap-3 group focus:outline-none py-1"
          aria-label="BH FERTI Accueil"
        >
          <div className="relative flex items-center">
            <img
              src={isScrolled ? "/images/logo.png" : "/images/logo-light.png"}
              alt="BH FERTI"
              className={cn(
                "w-auto object-contain transition-all duration-300 group-hover:scale-105",
                isScrolled
                  ? "h-13 sm:h-15 md:h-16 drop-shadow-sm"
                  : "h-16 sm:h-20 md:h-22 lg:h-24 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
              )}
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium text-sm lg:text-base tracking-wide transition-all duration-200 hover:-translate-y-0.5",
                isScrolled
                  ? "text-gray-700 hover:text-brand-600"
                  : "text-white/90 hover:text-white drop-shadow-sm hover:drop-shadow"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#devis"
            className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all hover:scale-105 shadow-lg shadow-brand-600/30"
          >
            Demande un Devis
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors",
            isScrolled
              ? "text-gray-900 hover:bg-gray-100"
              : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl transition-transform duration-300 md:hidden flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="BH FERTI"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-5 gap-1.5 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium text-base hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="p-5 border-t border-gray-100">
          <a
            href="#devis"
            className="block bg-brand-600 text-white text-center px-5 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors shadow-md shadow-brand-600/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Demande un Devis
          </a>
        </div>
      </div>
    </header>
  );
}
