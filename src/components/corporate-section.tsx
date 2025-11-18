"use client";

import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

export function CorporateSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">
          {t.corporateTitle}
        </h1>
        <p className="text-slate-600">{t.corporateDescription}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {t.corporateBullets.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-semibold text-slate-900">{item}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Process</p>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-600">
          {t.corporateProcess.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
