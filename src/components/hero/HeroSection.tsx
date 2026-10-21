"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Drone Video & Fallback */}
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
        {/* Cinematic Overlay: dark on top for navbar, clear in middle for video, subtle brand gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-brand-950/85 pointer-events-none" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-20">
        {/* Badge */}
        <div
          className={cn(
            "mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md transition-all duration-1000 transform shadow-xl shadow-black/25",
            isMounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          )}
        >
          <img
            src="/images/logo-icon.png"
            alt="BH FERTI"
            className="w-5 h-5 object-contain"
          />
          <span className="text-sm font-semibold text-white tracking-wide">
            Solutions Agricoles Innovantes
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={cn(
            "mb-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl transition-all duration-1000 delay-150 transform drop-shadow-lg",
            isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          Cultivons l&apos;Excellence,<br className="hidden sm:block" />
          <span className="text-brand-400">Naturellement</span>
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            "mb-10 max-w-3xl text-lg text-gray-100 sm:text-xl transition-all duration-1000 delay-300 transform leading-relaxed drop-shadow",
            isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          BHFERTI propose des solutions de biocontrôle, des produits naturels et
          des engrais de haute performance pour une agriculture durable et
          productive.
        </p>

        {/* CTA Buttons */}
        <div
          className={cn(
            "flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 transition-all duration-1000 delay-500 transform",
            isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <Link
            href="#produits"
            className="inline-flex h-14 items-center justify-center rounded-full bg-brand-500 hover:bg-brand-600 px-8 text-base font-semibold text-white shadow-xl shadow-brand-900/40 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Découvrir Nos Produits
          </Link>
          <Link
            href="#devis"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-xl"
          >
            Demander un Devis
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-700",
          isMounted ? "opacity-100" : "opacity-0"
        )}
      >
        <Link
          href="#produits"
          className="inline-flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25 border border-white/20"
          aria-label="Défiler vers le bas"
        >
          <ChevronDown className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}
