"use client";

import { ShieldCheck, Sprout, Truck, MessageCircle } from "lucide-react";
import { useLang, type DictKey } from "@/lib/i18n";

const items: { icon: typeof ShieldCheck; title: DictKey; text: DictKey }[] = [
  { icon: ShieldCheck, title: "trust.1.title", text: "trust.1.text" },
  { icon: Sprout, title: "trust.2.title", text: "trust.2.text" },
  { icon: Truck, title: "trust.3.title", text: "trust.3.text" },
  { icon: MessageCircle, title: "trust.4.title", text: "trust.4.text" },
];

export function TrustBar() {
  const { t } = useLang();
  return (
    <section className="relative z-20 -mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl bg-gray-200 shadow-xl ring-1 ring-gray-200">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3 bg-white p-4 sm:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm sm:text-base">{t(title)}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{t(text)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
