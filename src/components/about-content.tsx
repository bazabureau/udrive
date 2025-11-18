"use client";

import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

export function AboutContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-slate-900">Haqqımızda</h1>
      <p className="text-slate-600">{t.aboutIntro}</p>
      <div className="grid gap-4 md:grid-cols-3">
        {t.features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-semibold text-slate-900">
              {feature.title}
            </p>
            <p className="text-sm text-slate-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
