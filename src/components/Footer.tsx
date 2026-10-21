import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "Produits", href: "#produits" },
  { name: "Catégories", href: "#categories" },
  { name: "Contact", href: "#devis" },
];

const categoryLinks = [
  { name: "المكافحة البيولوجية", href: "#produits" },
  { name: "المنتجات الطبيعية", href: "#produits" },
  { name: "الأسمدة والتغذية الزراعية", href: "#produits" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-brand-950 text-white pt-16 pb-8 border-t border-brand-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <a href="#accueil" className="inline-block group focus:outline-none">
              <img
                src="/images/logo-light.png"
                alt="BH FERTI"
                className="h-20 sm:h-24 md:h-26 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Des solutions agricoles innovantes pour une meilleure productivité
              et protection des cultures. Votre partenaire de confiance pour
              l&apos;agriculture durable et performante.
            </p>
            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-white tracking-wide uppercase text-brand-400">
              Liens Rapides
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 transition-transform group-hover:scale-150" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-white tracking-wide uppercase text-brand-400">
              Catégories
            </h3>
            <ul className="flex flex-col gap-2.5">
              {categoryLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-[Cairo] hover:underline"
                    dir="rtl"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-white tracking-wide uppercase text-brand-400">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-brand-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <a href="mailto:bhferti@gmail.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                    bhferti@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-brand-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Téléphone / WhatsApp</p>
                  <a href="tel:+212661982832" className="text-gray-300 text-sm hover:text-white transition-colors font-medium">
                    0661-982832
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-brand-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Adresse</p>
                  <span className="text-gray-300 text-sm">Aït Melloul, Maroc</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <p>© {currentYear} BHFERTI. Tous droits réservés.</p>
          <p className="text-gray-500">Solutions Agricoles Innovantes</p>
        </div>
      </div>
    </footer>
  );
}
