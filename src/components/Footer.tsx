"use client";

import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { categories } from "@/data/categories";
import { useLang, whatsappLink, PHONE_DISPLAY, EMAIL, type DictKey } from "@/lib/i18n";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

const quickLinks: { key: DictKey; href: string }[] = [
  { key: "nav.home", href: "#accueil" },
  { key: "nav.categories", href: "#categories" },
  { key: "nav.products", href: "#produits" },
  { key: "nav.contact", href: "#devis" },
];

export function Footer() {
  const { t, isAr } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-950 text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col gap-5">
            <a href="#accueil" className="inline-block">
              <img src="/images/logo-light.png" alt="BH FERTI" className="h-20 sm:h-24 w-auto object-contain" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{t("footer.about")}</p>
            <div className="flex gap-3">
              <a href={whatsappLink(t("wa.generalMsg"))} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#25D366] hover:text-white transition-colors">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              {[{ Icon: Facebook, label: "Facebook" }, { Icon: Instagram, label: "Instagram" }].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-brand-500 hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-brand-400">{t("footer.links")}</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.key}>
                  <a href={l.href} className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    {t(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-brand-400">{t("footer.categories")}</h3>
            <ul className="flex flex-col gap-2.5">
              {categories.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent("select-category", { detail: c.id }))}
                    className="text-gray-400 hover:text-white transition-colors text-sm text-start"
                  >
                    {isAr ? c.nameAr : c.nameFr}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-brand-400">{t("footer.contact")}</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><Phone className="w-4 h-4 text-brand-400" /></span>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{t("quote.phone")}</p>
                  <a href="tel:+212661982832" className="text-gray-200 text-sm hover:text-white font-medium ltr-value">{PHONE_DISPLAY}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><Mail className="w-4 h-4 text-brand-400" /></span>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{t("quote.email")}</p>
                  <a href={`mailto:${EMAIL}`} className="text-gray-200 text-sm hover:text-white">{EMAIL}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><MapPin className="w-4 h-4 text-brand-400" /></span>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{t("quote.address")}</p>
                  <span className="text-gray-200 text-sm">{t("quote.addressValue")}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <p>© {year} BH FERTI. {t("footer.rights")}</p>
          <p>{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
