"use client";

import { CurrencySwitcher } from "@/components/currency-switcher";
import { SimpleCarGrid } from "@/components/simple-car-grid";
import { Badge } from "@/components/ui/badge";
import { cars } from "@/data/cars";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

export function CarsContent() {
  const { language } = useLanguage();
  const t = translations[language];
  const fleetBadge = t.carsBadge.replace("{count}", String(cars.length));

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-6%] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-8%] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container mx-auto relative space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <Badge
              variant="secondary"
              className="border-primary/20 bg-primary/10 text-primary"
            >
              {fleetBadge}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
              {t.categoriesTitle}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              {t.categoriesDescription}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <CurrencySwitcher />
          </div>
        </div>
        <SimpleCarGrid
          cars={cars}
          filterLabels={t.filterLabels}
          cardLabels={t.carLabels}
          searchLabel={t.carsSearchLabel}
          searchPlaceholder={t.carsSearchPlaceholder}
          sortLabel={t.carsSortLabel}
          sortOptions={t.carsSortOptions}
          resultsLabelRange={t.carsResultsLabelRange}
          resultsLabelSingle={t.carsResultsLabelSingle}
          clearFiltersLabel={t.carsClearFilters}
          noResultsLabel={t.carsNoResults}
        />
      </div>
    </section>
  );
}
