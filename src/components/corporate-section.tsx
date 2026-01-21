"use client";

import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

export function CorporateSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="container mx-auto space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
            {t.corporateTitle}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">{t.corporateDescription}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {t.corporateBullets.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-base font-semibold text-foreground">{item}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="text-base font-semibold text-foreground">
            {t.corporateProcessTitle}
          </p>
          <ol className="list-decimal space-y-2 pl-5 text-base text-muted-foreground">
            {t.corporateProcess.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
