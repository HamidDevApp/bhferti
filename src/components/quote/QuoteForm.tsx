"use client";

import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle, Building2, Mail, Phone, MessageSquare, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { useLang, whatsappLink, type DictKey } from "@/lib/i18n";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

interface FormData {
  company: string;
  email: string;
  phone: string;
  products: string[];
  message: string;
}

type Field = "company" | "email" | "phone";

const inputBase =
  "w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none transition-all";
const inputOk = "border-white/20 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20";
const inputErr = "border-red-400 ring-2 ring-red-400/20";

export default function QuoteForm() {
  const { t, isAr } = useLang();
  const [formData, setFormData] = useState<FormData>({ company: "", email: "", phone: "", products: [], message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, DictKey>>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onAdd = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      setFormData((prev) => (prev.products.includes(id) ? prev : { ...prev, products: [...prev.products, id] }));
    };
    window.addEventListener("add-to-quote", onAdd);
    return () => window.removeEventListener("add-to-quote", onAdd);
  }, []);

  const validate = (data: FormData) => {
    const e: Partial<Record<Field, DictKey>> = {};
    if (!data.company.trim()) e.company = "form.err.company";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "form.err.email";
    if (!data.phone.trim()) e.phone = "form.err.phone";
    else if (!/^[+\d\s-]{8,16}$/.test(data.phone)) e.phone = "form.err.phoneFormat";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as Field]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const toggleProduct = (id: string) =>
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(id) ? prev.products.filter((p) => p !== id) : [...prev.products, id],
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const names = formData.products.map((id) => products.find((p) => p.id === id)?.name).filter(Boolean);
    const lines = [
      `*${t("form.waIntro")}*`,
      `${t("form.company").replace(" *", "")}: ${formData.company}`,
      `${t("form.phone").replace(" *", "")}: ${formData.phone}`,
      formData.email ? `${t("form.email")}: ${formData.email}` : "",
      names.length ? `${t("form.products")}: ${names.join(", ")}` : "",
      formData.message ? `${t("form.message")}: ${formData.message}` : "",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const groups = categories
    .map((cat) => ({ ...cat, items: products.filter((p) => p.categoryId === cat.id) }))
    .filter((g) => g.items.length > 0);

  const errorText = (f: Field) =>
    errors[f] && (
      <p className="mt-1 text-sm text-red-300 flex items-center gap-1">
        <AlertCircle className="w-3 h-3" /> {t(errors[f]!)}
      </p>
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
      {sent && (
        <div className="mb-6 bg-green-500/20 border border-green-500 text-green-200 p-4 rounded-xl flex items-start gap-3">
          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{t("form.sent")}</p>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
            <Building2 className="w-4 h-4 text-brand-400" /> {t("form.company")}
          </label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder={isAr ? "مثال: ضيعة الأمل" : "Ex : Domaine Al Amal"} className={cn(inputBase, errors.company ? inputErr : inputOk)} />
          {errorText("company")}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
              <Phone className="w-4 h-4 text-brand-400" /> {t("form.phone")}
            </label>
            <input type="tel" name="phone" dir="ltr" value={formData.phone} onChange={handleChange} placeholder="06 XX XX XX XX" className={cn(inputBase, isAr && "text-end", errors.phone ? inputErr : inputOk)} />
            {errorText("phone")}
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
              <Mail className="w-4 h-4 text-brand-400" /> {t("form.email")}
            </label>
            <input type="email" name="email" dir="ltr" value={formData.email} onChange={handleChange} placeholder="contact@exemple.com" className={cn(inputBase, isAr && "text-end", errors.email ? inputErr : inputOk)} />
            {errorText("email")}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
            <Package className="w-4 h-4 text-brand-400" /> {t("form.products")}
            {formData.products.length > 0 && (
              <span className="rounded-full bg-brand-500 px-2 py-0.5 text-xs font-bold">{formData.products.length}</span>
            )}
          </label>
          <div className="bg-white/5 border border-white/20 rounded-xl p-4 max-h-48 overflow-y-auto space-y-4">
            {groups.map((g) => (
              <div key={g.id}>
                <h4 className="text-sm font-semibold text-brand-300 mb-2">{isAr ? g.nameAr : g.nameFr}</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {g.items.map((p) => {
                    const checked = formData.products.includes(p.id);
                    return (
                      <label key={p.id} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="hidden" checked={checked} onChange={() => toggleProduct(p.id)} />
                        <span className={cn("w-5 h-5 rounded border flex items-center justify-center transition-colors", checked ? "bg-brand-500 border-brand-500" : "border-white/40 group-hover:border-white/60")}>
                          {checked && <CheckCircle className="w-3 h-3 text-white" />}
                        </span>
                        <span className="text-sm text-white/80 group-hover:text-white transition-colors">{p.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
            {groups.length === 0 && <p className="text-sm text-white/40 italic">{t("form.none")}</p>}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
            <MessageSquare className="w-4 h-4 text-brand-400" /> {t("form.message")}
          </label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder={t("form.messagePh")} className={cn(inputBase, "resize-none", inputOk)} />
        </div>

        <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/20">
          <WhatsAppIcon className="w-5 h-5" />
          {t("form.send")}
        </button>
      </div>
    </form>
  );
}
