"use client";

import { useState, FocusEvent } from "react";
import { 
  Send, Loader2, CheckCircle, AlertCircle, 
  Building2, Mail, Phone, MessageSquare, Package 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

interface FormData {
  company: string;
  email: string;
  phone: string;
  products: string[];
  message: string;
}

interface FormErrors {
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  products?: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    company: "",
    email: "",
    phone: "",
    products: [],
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateField = (name: keyof FormData, value: any): string | undefined => {
    switch (name) {
      case "company":
        if (typeof value !== "string" || !value.trim()) return "Le nom de l'entreprise est requis";
        break;
      case "email":
        if (!value) return "L'email est requis";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string)) return "Format d'email invalide";
        break;
      case "phone":
        if (!value) return "Le téléphone est requis";
        if (!/^[+\d\s-]{8,15}$/.test(value as string)) return "Format de téléphone invalide";
        break;
      case "message":
        if (value && typeof value === "string" && value.length > 0 && value.length < 10) {
          return "Le message doit contenir au moins 10 caractères";
        }
        break;
    }
    return undefined;
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const toggleProduct = (productId: string) => {
    setFormData((prev) => {
      const newProducts = prev.products.includes(productId)
        ? prev.products.filter(id => id !== productId)
        : [...prev.products, productId];
      return { ...prev, products: newProducts };
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched({
      company: true, email: true, phone: true, message: true, products: true
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      
      // Reset after 3s
      setTimeout(() => {
        setFormData({
          company: "",
          email: "",
          phone: "",
          products: [],
          message: ""
        });
        setTouched({});
        setSubmitStatus("idle");
      }, 3000);
      
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Group products by category
  const productsByCategory = categories.map(cat => ({
    ...cat,
    items: products.filter(p => p.categoryId === cat.id),
  })).filter(group => group.items.length > 0);

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      
      {submitStatus === "success" && (
        <div className="mb-6 bg-green-500/20 border border-green-500 text-green-300 p-4 rounded-xl flex items-start gap-3 transition-all">
          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>Votre demande a été envoyée avec succès!</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-xl flex items-start gap-3 transition-all">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>Une erreur est survenue. Veuillez réessayer.</p>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
            <Building2 className="w-4 h-4 text-brand-400" /> Nom de l'Entreprise *
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="SARL AgroTech"
            className={cn(
              "w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none transition-all",
              errors.company && touched.company 
                ? "border-red-400 ring-2 ring-red-400/20" 
                : "border-white/20 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20"
            )}
          />
          {errors.company && touched.company && (
            <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.company}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
              <Mail className="w-4 h-4 text-brand-400" /> Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="contact@entreprise.com"
              className={cn(
                "w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none transition-all",
                errors.email && touched.email 
                  ? "border-red-400 ring-2 ring-red-400/20" 
                  : "border-white/20 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20"
              )}
            />
            {errors.email && touched.email && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
              <Phone className="w-4 h-4 text-brand-400" /> Téléphone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+212 661 123 456"
              className={cn(
                "w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none transition-all",
                errors.phone && touched.phone 
                  ? "border-red-400 ring-2 ring-red-400/20" 
                  : "border-white/20 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20"
              )}
            />
            {errors.phone && touched.phone && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
            <Package className="w-4 h-4 text-brand-400" /> Produits Sélectionnés
          </label>
          <div className="bg-white/5 border border-white/20 rounded-xl p-4 max-h-40 overflow-y-auto space-y-4">
            {productsByCategory.map((category) => (
              <div key={category.id}>
                <h4 className="text-sm font-semibold text-brand-300 mb-2">{category.nameFr}</h4>
                <div className="space-y-2">
                  {category.items.map(product => (
                    <label key={product.id} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={formData.products.includes(product.id)}
                        onChange={() => toggleProduct(product.id)}
                      />
                      <div className={cn(
                        "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                        formData.products.includes(product.id)
                          ? "bg-brand-500 border-brand-500"
                          : "border-white/40 group-hover:border-white/60 bg-transparent"
                      )}>
                        {formData.products.includes(product.id) && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                        {product.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            {productsByCategory.length === 0 && (
              <p className="text-sm text-white/40 italic">Aucun produit disponible</p>
            )}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
            <MessageSquare className="w-4 h-4 text-brand-400" /> Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
            placeholder="Détaillez vos besoins (superficie, type de culture, etc.)..."
            className={cn(
              "w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none transition-all resize-none",
              errors.message && touched.message 
                ? "border-red-400 ring-2 ring-red-400/20" 
                : "border-white/20 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20"
            )}
          />
          {errors.message && touched.message && (
            <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-500 hover:bg-brand-600 disabled:bg-brand-500/50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Envoyer la demande
            </>
          )}
        </button>
      </div>
    </form>
  );
}
