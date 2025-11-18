"use client";

import { useMemo } from "react";
import Link from "next/link";

import { CarCard } from "@/components/car/car-card";
import { CurrencySwitcher } from "@/components/currency-switcher";
import { cars } from "@/data/cars";
import type { CarCategory } from "@/data/cars";
import { translations } from "@/data/translations";
import { useCurrency } from "@/contexts/currency-context";
import { useLanguage } from "@/contexts/language-context";

const categories: CarCategory[] = ["sedan", "suv", "lux"];
const whatsappLink = "https://wa.me/994999797799";

export function HomeContent() {
  const { language } = useLanguage();
  const t = translations[language];

  const topCars = useMemo(() => {
    return [...cars]
      .sort((a, b) => b.pricePerDay - a.pricePerDay)
      .slice(0, 3);
  }, []);

  const categoryGroups = useMemo(
    () =>
      categories.map((category) => ({
        category,
        cars: cars.filter((car) => car.category === category).slice(0, 3),
      })),
    []
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center gap-3">
        <CurrencySwitcher />
      </div>
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
            uDrive
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            {t.heroTitle}
          </h1>
          <p className="text-base text-slate-600">{t.heroDescription}</p>
          <ul className="flex flex-wrap gap-4 text-sm text-slate-500">
            {t.heroBullets.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link
              href={whatsappLink}
              className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              target="_blank"
              rel="noreferrer"
            >
              {t.heroCtas.primary}
            </Link>
            <Link
              href="/cars"
              className="inline-flex items-center rounded-full border border-slate-200 px-6 py-2 text-sm font-semibold text-slate-700 hover:border-slate-300"
            >
              {t.heroCtas.secondary}
            </Link>
          </div>
          <p className="text-sm text-slate-500">{t.heroPhone}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center"
              >
                <p className="text-2xl font-semibold text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Bizi fərqləndirən üstünlüklər
          </h2>
          <div className="space-y-4">
            {t.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {feature.title}
                </p>
                <p className="text-sm text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-slate-900">
            {t.topPicksTitle}
          </h2>
          <p className="text-slate-600">{t.topPicksDescription}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topCars.map((car) => (
            <CarCard key={car.id} car={car} labels={t.carLabels} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              {t.categoriesTitle}
            </h2>
            <p className="text-slate-600">{t.categoriesDescription}</p>
          </div>
          <Link
            href="/cars"
            className="text-sm font-semibold text-emerald-600 underline-offset-4 hover:underline"
          >
            {t.heroCtas.secondary}
          </Link>
        </div>
        <div className="space-y-8">
          {categoryGroups.map(({ category, cars: list }) =>
            list.length ? (
              <div key={category} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {t.filterLabels[category]}
                  </h3>
                  <Link
                    href="/cars"
                    className="text-sm text-slate-500 hover:text-emerald-600"
                  >
                    {t.heroCtas.secondary}
                  </Link>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {list.map((car) => (
                    <CarCard key={car.id} car={car} labels={t.carLabels} />
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

      <section className="rounded-2xl bg-emerald-600 px-6 py-8 text-white shadow-lg">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">{t.finalCtaTitle}</h2>
          <p className="text-sm text-emerald-100">{t.finalCtaDescription}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-emerald-700"
          >
            {t.heroCtas.primary}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/50 px-6 py-2 text-sm font-semibold text-white"
          >
            {t.finalCtaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
