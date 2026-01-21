"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  transferPackages,
  type TransferPackage,
  type TransferRoute,
} from "@/data/transfer-cars";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type TransferCategory = "all" | "vans" | "minibus" | "sedan";
type TransferPackageView = TransferPackage & { visibleRoutes: TransferRoute[] };

export function TransferContent() {
  const { language } = useLanguage();
  const t = translations[language];
  const whatsappLink = "https://wa.me/994999797799";
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<TransferCategory>("all");

  const quickRoutes = useMemo(() => {
    const seen = new Set<string>();
    const routes: string[] = [];

    for (const transfer of transferPackages) {
      for (const route of transfer.routes) {
        if (seen.has(route.destination)) {
          continue;
        }
        seen.add(route.destination);
        routes.push(route.destination);
        if (routes.length === 6) {
          return routes;
        }
      }
    }

    return routes;
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const categories = [
    { id: "all", label: t.transferTabs.all },
    { id: "vans", label: t.transferTabs.vans },
    { id: "minibus", label: t.transferTabs.minibus },
    { id: "sedan", label: t.transferTabs.sedan },
  ] satisfies { id: TransferCategory; label: string }[];

  const filteredPackages = useMemo<TransferPackageView[]>(() => {
    const resolveCategory = (name: string): TransferCategory => {
      const lowerName = name.toLowerCase();
      if (lowerName.includes("sprinter")) {
        return "minibus";
      }
      if (lowerName.includes("v-class") || lowerName.includes("viano")) {
        return "vans";
      }
      return "sedan";
    };

    return transferPackages.flatMap((transfer) => {
      const matchesCategory =
        activeCategory === "all" ||
        resolveCategory(transfer.name) === activeCategory;

      if (!matchesCategory) {
        return [];
      }

      if (!normalizedQuery) {
        return [{ ...transfer, visibleRoutes: transfer.routes }];
      }

      const matchesName = transfer.name
        .toLowerCase()
        .includes(normalizedQuery);
      const matchingRoutes = transfer.routes.filter((route) =>
        route.destination.toLowerCase().includes(normalizedQuery)
      );

      if (matchesName) {
        return [{ ...transfer, visibleRoutes: transfer.routes }];
      }

      if (matchingRoutes.length > 0) {
        return [{ ...transfer, visibleRoutes: matchingRoutes }];
      }

      return [];
    });
  }, [activeCategory, normalizedQuery]);

  const totalRoutes = useMemo(
    () =>
      filteredPackages.reduce(
        (sum, transfer) => sum + transfer.visibleRoutes.length,
        0
      ),
    [filteredPackages]
  );
  const resultsLabel = t.transferResultsLabel
    .replace("{cars}", String(filteredPackages.length))
    .replace("{routes}", String(totalRoutes));
  const showClearFilters =
    searchQuery.trim().length > 0 || activeCategory !== "all";
  const searchInputId = "transfer-search";

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-40" />
      <div className="container mx-auto relative space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {t.transferPriceBadge}
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
              {t.transferTitle}
            </h1>
          </div>

          <aside className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {t.transferCityPackageTitle}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.transferCityPackageLabel}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
              {t.transferPriceBadge}
            </div>
            <div className="space-y-3">
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                {t.heroCtas.primary}
              </Link>
              <Link
                href={`tel:${t.contact.phoneValue.replace(/\\s+/g, "")}`}
                className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition hover:bg-muted"
              >
                {t.contact.phoneLabel}: {t.contact.phoneValue}
              </Link>
            </div>
          </aside>
        </div>

        <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <Label htmlFor={searchInputId} className="text-foreground">
                  {t.transferSearchLabel}
                </Label>
                <Input
                  id={searchInputId}
                  placeholder={t.transferSearchPlaceholder}
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <span>{t.transferQuickLabel}</span>
                {quickRoutes.map((route) => (
                  <button
                    key={route}
                    type="button"
                    onClick={() => setSearchQuery(route)}
                    className={cn(
                      "rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground transition hover:bg-muted",
                      searchQuery === route &&
                        "border-primary bg-primary/10 text-primary"
                    )}
                  >
                    {route}
                  </button>
                ))}
              </div>
            </div>
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label={t.transferTitle}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted",
                    activeCategory === category.id &&
                      "border-primary bg-primary text-primary-foreground shadow-sm"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
            <span>{resultsLabel}</span>
            {showClearFilters && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="font-semibold text-primary transition hover:text-primary/80"
              >
                {t.transferClearFilters}
              </button>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {filteredPackages.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card/60 p-8 text-center sm:p-12">
              <p className="text-lg font-semibold text-foreground">
                {t.transferNoResults}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.transferDescription}
              </p>
              {showClearFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  {t.transferClearFilters}
                </button>
              )}
            </div>
          ) : (
            filteredPackages.map((transfer) => (
              <article
                key={`${transfer.name}-${transfer.years}`}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="border-b border-border bg-muted/40 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                      {transfer.name}{" "}
                      <span className="text-base font-medium text-muted-foreground">
                        {transfer.years}
                      </span>
                    </h2>
                    {transfer.passengers && (
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-sm font-semibold text-foreground">
                        {transfer.passengers} {t.transferPassengersUnit}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <div className="rounded-2xl border border-border bg-background px-4 py-3">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {t.transferCityPackageTitle}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t.transferCityPackageLabel}
                      </p>
                    </div>
                    <span className="text-2xl font-bold text-primary">
                      {transfer.cityPackagePrice}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {t.transferDestinationsLabel}
                    </h3>
                    <span className="text-sm text-muted-foreground">AZN</span>
                  </div>
                  <div className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border">
                    {transfer.visibleRoutes.map((route) => (
                      <div
                        key={`${transfer.name}-${route.destination}`}
                        className="flex items-center justify-between gap-3 px-4 py-3 text-sm sm:text-base odd:bg-muted/40"
                      >
                        <span className="font-medium text-foreground">
                          {route.destination}
                        </span>
                        <span className="font-semibold text-primary">
                          {route.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href={whatsappLink}
                      target="_blank"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary/90 sm:w-auto"
                    >
                      {t.heroCtas.primary}
                    </Link>
                    <span className="text-sm text-muted-foreground">
                      {t.contact.phoneLabel}: {t.contact.phoneValue}
                    </span>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
