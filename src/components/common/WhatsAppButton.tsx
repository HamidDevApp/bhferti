"use client";

import { useLang, whatsappLink } from "@/lib/i18n";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  const { t, isAr } = useLang();
  return (
    <a
      href={whatsappLink(t("wa.generalMsg"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("wa.button")}
      className={`fixed bottom-5 z-40 group flex items-center gap-3 ${isAr ? "left-5 flex-row-reverse" : "right-5"}`}
    >
      <span className="hidden sm:block bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-gray-100 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
        {t("wa.button")}
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform duration-200 group-hover:scale-110">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <WhatsAppIcon className="relative w-8 h-8" />
      </span>
    </a>
  );
}
