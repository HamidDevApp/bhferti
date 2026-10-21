"use client";

import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import QuoteForm from "./QuoteForm";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function QuoteSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="devis"
      className="relative py-24 bg-brand-950 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }}
      />
      
      <div ref={ref} className={cn("container mx-auto px-4 relative z-10 transition-all duration-1000 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Demandez un Devis</h2>
          <div className="h-1 w-24 bg-brand-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Recevez une offre personnalisée pour vos besoins agricoles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>

          <div className="lg:col-span-2 space-y-8 bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <div>
              <img
                src="/images/logo-light.png"
                alt="BH FERTI"
                className="h-16 md:h-20 w-auto object-contain mb-6 drop-shadow-md"
              />
              <h3 className="text-2xl font-semibold mb-6">Pourquoi BHFERTI?</h3>
              <ul className="space-y-4">
                {[
                  "Expertise agronomique de plus de 15 ans",
                  "Produits certifiés et testés en conditions réelles",
                  "Accompagnement technique personnalisé",
                  "Livraison rapide sur tout le territoire"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-brand-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-white/90 group-hover:text-white transition-colors">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-white/10"></div>

            <div className="space-y-6">
              <a href="tel:+212661982832" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 transition-colors">
                  <Phone className="w-5 h-5 text-brand-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Téléphone / WhatsApp</p>
                  <p className="font-medium text-white group-hover:text-brand-300 transition-colors">0661-982832</p>
                </div>
              </a>
              
              <a href="mailto:bhferti@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 transition-colors">
                  <Mail className="w-5 h-5 text-brand-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <p className="font-medium text-white group-hover:text-brand-300 transition-colors">bhferti@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 transition-colors">
                  <MapPin className="w-5 h-5 text-brand-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Adresse</p>
                  <p className="font-medium text-white group-hover:text-brand-300 transition-colors">Aït Melloul, Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
