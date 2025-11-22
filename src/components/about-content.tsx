"use client";

import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

export function AboutContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-emerald-50">Haqqımızda</h1>
      <p className="text-emerald-200">{t.aboutIntro}</p>
      <div className="grid gap-4 md:grid-cols-3">
        {t.features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-emerald-500/20 bg-emerald-950/60 p-5 shadow-sm"
          >
            <p className="text-sm font-semibold text-emerald-50">
              {feature.title}
            </p>
            <p className="text-sm text-emerald-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
