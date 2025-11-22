"use client";

import { CurrencySwitcher } from "@/components/currency-switcher";
import { SimpleCarGrid } from "@/components/simple-car-grid";
import { cars } from "@/data/cars";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

export function CarsContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <CurrencySwitcher />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-emerald-50">
          {t.categoriesTitle}
        </h1>
        <p className="text-emerald-200">{t.categoriesDescription}</p>
      </div>
      <SimpleCarGrid
        cars={cars}
        filterLabels={t.filterLabels}
        cardLabels={t.carLabels}
      />
    </div>
  );
}
