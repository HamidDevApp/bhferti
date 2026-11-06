"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang, whatsappLink } from "@/lib/i18n";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

export function HeroSection() {
  const { t } = useLang();
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const reveal = (delay: string) =>
    cn("transition-all duration-1000 transform", delay, isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0");

  return (
    <section id="accueil" className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-950 via-brand-900 to-gray-950">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-brand-950/90 pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-24 pb-16">
        <div
          className={cn(
            "mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md shadow-xl shadow-black/25",
            reveal("")
          )}
        >
          <img src="/images/logo-icon.png" alt="" className="w-5 h-5 object-contain" />
          <span className="text-sm font-semibold text-white tracking-wide">{t("hero.badge")}</span>
        </div>

        <h1 className={cn("mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg leading-tight", reveal("delay-150"))}>
          {t("hero.title1")}
          <br className="hidden sm:block" /> <span className="text-brand-400">{t("hero.title2")}</span>
        </h1>

        <p className={cn("mb-10 max-w-3xl text-lg text-gray-100 sm:text-xl leading-relaxed drop-shadow", reveal("delay-300"))}>
          {t("hero.subtitle")}
        </p>

        <div className={cn("flex flex-col gap-4 sm:flex-row", reveal("delay-500"))}>
          <a
            href="#produits"
            className="inline-flex h-14 items-center justify-center rounded-full bg-brand-500 hover:bg-brand-600 px-8 text-base font-semibold text-white shadow-xl shadow-brand-900/40 transition-all hover:scale-105"
          >
            {t("hero.ctaProducts")}
          </a>
          <a
            href={whatsappLink(t("wa.generalMsg"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 shadow-xl"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            {t("hero.ctaWhatsapp")}
          </a>
        </div>
      </div>

      <div className={cn("absolute bottom-6 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-700", isMounted ? "opacity-100" : "opacity-0")}>
        <a
          href="#categories"
          className="inline-flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25 border border-white/20"
          aria-label={t("hero.scroll")}
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
