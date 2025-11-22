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
      <section className="relative grid gap-12 overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-black via-emerald-950 to-black p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:p-10">
        {/* Background Gradient */}
        <div className="absolute -left-20 -top-20 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-20 top-40 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="space-y-8 py-8">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1">
              <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase">
                Premium Rent a Car
              </span>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-emerald-50 md:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-emerald-200">
              {t.heroDescription}
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-emerald-300">
              {t.heroBullets.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={whatsappLink}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5"
              target="_blank"
              rel="noreferrer"
            >
              {t.heroCtas.primary}
            </Link>
            <Link
              href="/cars"
              className="inline-flex items-center justify-center rounded-full border border-emerald-500/40 bg-transparent px-8 py-3 text-sm font-semibold text-emerald-100 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-500/10"
            >
              {t.heroCtas.secondary}
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-emerald-500/20 pt-8">
            {t.stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-bold tracking-tight text-emerald-50">
                  {stat.value}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:pt-8">
          <div className="relative z-10 space-y-6 rounded-3xl border border-emerald-500/30 bg-black/60 p-8 shadow-2xl shadow-emerald-500/10 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-emerald-50">
              Bizi fərqləndirən üstünlüklər
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-emerald-500/20 bg-emerald-900/40 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_20px_60px_-30px_rgba(52,211,153,0.6)]"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 transition-colors group-hover:bg-emerald-400 group-hover:text-black">
                    {/* Simple icon placeholder or dynamic icon based on index */}
                    <span className="text-lg font-bold">{i + 1}</span>
                  </div>
                  <h3 className="mb-1 font-semibold text-emerald-50">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-emerald-200">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute right-4 top-0 -z-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-4 left-4 -z-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>
      </section>

      <section className="space-y-8 py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-emerald-50">
              {t.topPicksTitle}
            </h2>
            <p className="max-w-2xl text-lg text-emerald-200">
              {t.topPicksDescription}
            </p>
          </div>
          <Link
            href="/cars"
            className="group flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-100"
          >
            {t.heroCtas.secondary}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topCars.map((car) => (
            <CarCard key={car.id} car={car} labels={t.carLabels} />
          ))}
        </div>
      </section>

      <section className="space-y-12 py-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-50">
            {t.categoriesTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-emerald-200">
            {t.categoriesDescription}
          </p>
        </div>

        <div className="space-y-16">
          {categoryGroups.map(({ category, cars: list }) =>
            list.length ? (
              <div key={category} className="space-y-6">
                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                  <h3 className="text-2xl font-bold text-emerald-50 capitalize">
                    {t.filterLabels[category]}
                  </h3>
                  <Link
                    href="/cars"
                    className="text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-100"
                  >
                    {t.heroCtas.secondary}
                  </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((car) => (
                    <CarCard key={car.id} car={car} labels={t.carLabels} />
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl bg-emerald-900 px-6 py-16 text-center text-white shadow-2xl md:px-12 md:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t.finalCtaTitle}
            </h2>
            <p className="text-lg text-emerald-100/90 md:text-xl">
              {t.finalCtaDescription}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-4 text-base font-bold text-emerald-950 shadow-lg transition-all hover:bg-emerald-300 hover:scale-105"
            >
              {t.heroCtas.primary}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-emerald-950/60/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-emerald-950/60/20"
            >
              {t.finalCtaButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
