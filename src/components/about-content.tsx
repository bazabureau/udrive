"use client";

import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

export function AboutContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="container mx-auto space-y-10">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
            {t.aboutTitle}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">{t.aboutIntro}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {t.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-base font-semibold text-foreground">
                {feature.title}
              </p>
              <p className="text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
