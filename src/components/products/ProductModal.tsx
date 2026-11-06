"use client";

import { useEffect, useState } from "react";
import { X, Leaf, Package, FlaskConical, Droplets, CheckCircle2, AlertTriangle, Sprout, Plus, ImageOff } from "lucide-react";
import { products, type Product } from "@/data/products";
import { allSubcategories, cropTypes as allCropTypes } from "@/data/categories";
import { useLang, whatsappLink } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { addToQuote, badgeAr, badgeColorMap } from "./ProductCard";

const formulationAr: Record<string, string> = {
  Poudre: "مسحوق",
  "Poudre soluble": "مسحوق قابل للذوبان",
  Gel: "جل",
  Liquide: "سائل",
  "Liquide soluble (L.S.)": "سائل قابل للذوبان",
  "Microgranulés solubles": "حبيبات قابلة للذوبان",
};

function SectionTitle({ icon: Icon, children }: { icon: typeof Leaf; children: React.ReactNode }) {
  return (
    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-800 mb-3">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
        <Icon className="h-4 w-4" />
      </span>
      {children}
    </h4>
  );
}

export default function ProductModal() {
  const { t, isAr } = useLang();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      const p = products.find((x) => x.id === id);
      if (p) setProduct(p);
    };
    window.addEventListener("open-product", onOpen);
    return () => window.removeEventListener("open-product", onOpen);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(product));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setProduct(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product]);

  if (!product) return null;

  const sheet = product.sheet;
  const sub = allSubcategories.find((s) => s.id === product.subcategoryId);
  const hasImage = Boolean(product.image);
  const hasTech = Boolean(sheet?.composition?.length || sheet?.doses?.length || sheet?.usage?.length);
  const close = () => setProduct(null);

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6" role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="absolute inset-0 bg-gray-950/70 backdrop-blur-sm" onClick={close} />

      <div className="relative w-full max-w-5xl max-h-[94vh] overflow-hidden rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl flex flex-col animate-scale-in">
        <button
          type="button"
          onClick={close}
          className="absolute top-3 end-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md hover:bg-gray-100"
          aria-label={t("sheet.close")}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto">
          <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            {/* Left: image & key facts */}
            <div className="bg-gradient-to-b from-gray-50 to-white p-6 sm:p-8 md:border-e border-gray-100 md:sticky md:top-0 md:self-start">
              <div className="aspect-square w-full rounded-2xl bg-white ring-1 ring-gray-100 p-6 flex items-center justify-center">
                {hasImage ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.15)]" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <ImageOff className="h-10 w-10" />
                    <span className="text-sm">{t("prod.photoSoon")}</span>
                  </div>
                )}
              </div>

              {(sheet?.packaging || sheet?.formulation) && (
                <dl className="mt-5 grid grid-cols-2 gap-3">
                  {sheet?.packaging && (
                    <div className="rounded-xl bg-white ring-1 ring-gray-100 p-3">
                      <dt className="flex items-center gap-1.5 text-xs text-gray-500"><Package className="h-3.5 w-3.5" />{t("sheet.packaging")}</dt>
                      <dd className="mt-1 font-bold text-gray-900 ltr-value">{sheet.packaging}</dd>
                    </div>
                  )}
                  {sheet?.formulation && (
                    <div className="rounded-xl bg-white ring-1 ring-gray-100 p-3">
                      <dt className="flex items-center gap-1.5 text-xs text-gray-500"><Droplets className="h-3.5 w-3.5" />{t("sheet.formulation")}</dt>
                      <dd className="mt-1 font-bold text-gray-900">{isAr ? formulationAr[sheet.formulation] || sheet.formulation : sheet.formulation}</dd>
                    </div>
                  )}
                </dl>
              )}

              <div className="mt-5">
                <p className="text-xs font-semibold text-gray-500 mb-2">{t("sheet.crops")}</p>
                <div className="flex flex-wrap gap-1.5">
                  {product.cropTypes.map((id) => {
                    const ct = allCropTypes.find((c) => c.id === id);
                    return (
                      <span key={id} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
                        {ct ? (isAr ? ct.labelAr : ct.label) : id}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: technical sheet */}
            <div className="p-6 sm:p-8 space-y-7">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3 pe-10">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    {isAr ? sub?.nameAr : sub?.nameFr}
                  </span>
                  {product.badge && (
                    <span className={cn("rounded-full px-2.5 py-1 text-xs font-bold", badgeColorMap[product.badge] || "bg-brand-500 text-white")}>
                      {isAr ? badgeAr[product.badge] || product.badge : product.badge}
                    </span>
                  )}
                  {product.isBio && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-700">
                      <Leaf className="h-3.5 w-3.5" /> {t("prod.bio")}
                    </span>
                  )}
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{t("sheet.title")}</p>
                <h3 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">{product.name}</h3>
                {sheet?.subtitle && <p className="mt-1 text-base font-semibold text-brand-700"><span className="ltr-value">{sheet.subtitle}</span></p>}
              </div>

              <div>
                <SectionTitle icon={Sprout}>{t("sheet.description")}</SectionTitle>
                <p className="text-gray-700 leading-relaxed">{isAr ? product.descriptionAr : product.description}</p>
              </div>

              {sheet?.composition && sheet.composition.length > 0 && (
                <div>
                  <SectionTitle icon={FlaskConical}>{t("sheet.composition")}</SectionTitle>
                  <div className="overflow-hidden rounded-xl ring-1 ring-gray-200" dir="ltr">
                    <table className="w-full text-sm">
                      <tbody>
                        {sheet.composition.map((row, i) => (
                          <tr key={row.label} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                            <td className="px-4 py-2.5 text-gray-700">{row.label}</td>
                            <td className="px-4 py-2.5 text-end font-bold text-brand-800 whitespace-nowrap">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {sheet?.usage && sheet.usage.length > 0 && (
                <div>
                  <SectionTitle icon={Droplets}>{t("sheet.usage")}</SectionTitle>
                  <div className="grid gap-2 sm:grid-cols-2" dir="ltr">
                    {sheet.usage.map((row) => (
                      <div key={row.label} className="rounded-xl bg-brand-50/60 ring-1 ring-brand-100 px-4 py-3">
                        <p className="text-xs font-semibold text-brand-700">{row.label}</p>
                        <p className="font-bold text-gray-900">{row.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {sheet?.doses && sheet.doses.length > 0 && (
                <div>
                  <SectionTitle icon={Droplets}>{t("sheet.doses")}</SectionTitle>
                  <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200" dir="ltr">
                    <table className="w-full min-w-[520px] text-sm">
                      <thead className="bg-brand-800 text-white">
                        <tr>
                          <th className="px-4 py-2.5 text-start font-semibold">{t("sheet.culture")}</th>
                          <th className="px-4 py-2.5 text-start font-semibold">{t("sheet.dose")}</th>
                          <th className="px-4 py-2.5 text-start font-semibold">{t("sheet.when")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sheet.doses.map((row, i) => (
                          <tr key={row.culture} className={cn("align-top", i % 2 ? "bg-gray-50" : "bg-white")}>
                            <td className="px-4 py-3 font-semibold text-gray-900">{row.culture}</td>
                            <td className="px-4 py-3 text-gray-700">{row.dose}</td>
                            <td className="px-4 py-3 text-gray-600">{row.frequency || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {sheet?.benefits && sheet.benefits.length > 0 && (
                <div>
                  <SectionTitle icon={CheckCircle2}>{t("sheet.benefits")}</SectionTitle>
                  <ul className="grid gap-2 sm:grid-cols-2" dir="ltr">
                    {sheet.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sheet?.precautions && sheet.precautions.length > 0 && (
                <div>
                  <SectionTitle icon={AlertTriangle}>{t("sheet.precautions")}</SectionTitle>
                  <ul className="space-y-1.5 rounded-xl bg-amber-50 ring-1 ring-amber-100 p-4" dir="ltr">
                    {sheet.precautions.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-amber-900">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {hasTech ? (
                <p className="text-xs text-gray-500">{t("sheet.techNote")}</p>
              ) : (
                <p className="rounded-xl bg-gray-50 ring-1 ring-gray-100 p-4 text-sm text-gray-600">{t("sheet.onRequest")}</p>
              )}
            </div>
          </div>
        </div>

        {/* Sticky actions */}
        <div className="border-t border-gray-100 bg-white p-4 sm:px-8 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            type="button"
            onClick={() => {
              addToQuote(product.id);
              close();
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-semibold text-gray-700 hover:border-brand-500 hover:text-brand-700 transition-colors"
          >
            <Plus className="h-4 w-4" /> {t("sheet.addQuote")}
          </button>
          <a
            href={whatsappLink(`${t("wa.productMsg")}${product.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe5a] transition-colors"
          >
            <WhatsAppIcon className="h-5 w-5" /> {t("sheet.orderWhatsapp")}
          </a>
        </div>
      </div>
    </div>
  );
}
