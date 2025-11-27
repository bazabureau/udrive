"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { CarCard } from "@/components/car/car-card";
import { cars } from "@/data/cars";
import type { CarCategory } from "@/data/cars";
import { translations } from "@/data/translations";
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
    <div className="space-y-8 md:space-y-12">
      <section className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
        {/* Background Gradient with floating animation */}
        <motion.div
          className="absolute -left-20 -top-20 -z-10 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-emerald-500/20 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 top-40 -z-10 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full bg-emerald-400/10 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Full-width Video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.MP4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-emerald-900/40 mix-blend-multiply" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-700/30 via-transparent to-emerald-500/20" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-black/35 border border-white/10 backdrop-blur-sm p-4 sm:p-6 shadow-glow-sm">
              <Image
                src="/udrivelogo.png"
                alt="Udrive"
                width={180}
                height={60}
                priority
                className="h-auto w-[140px] sm:w-[180px]"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="space-y-6 sm:space-y-8 py-8 sm:py-12">
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-50">
              {t.topPicksTitle}
            </h2>
            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-emerald-200">
              {t.topPicksDescription}
            </p>
          </div>
          <Link
            href="/cars"
            className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-100 min-h-[44px]"
          >
            {t.heroCtas.secondary}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <motion.div
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {topCars.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <CarCard car={car} labels={t.carLabels} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="space-y-8 sm:space-y-12 py-8 sm:py-12">
        <div className="space-y-3 sm:space-y-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-50">
            {t.categoriesTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-emerald-200">
            {t.categoriesDescription}
          </p>
        </div>

        <div className="space-y-10 sm:space-y-16">
          {categoryGroups.map(({ category, cars: list }) =>
            list.length ? (
              <div key={category} className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 sm:pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-emerald-50 capitalize">
                    {t.filterLabels[category]}
                  </h3>
                  <Link
                    href="/cars"
                    className="text-xs sm:text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-100 min-h-[44px] flex items-center"
                  >
                    {t.heroCtas.secondary}
                  </Link>
                </div>
                <motion.div
                  className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {list.map((car, i) => (
                    <motion.div
                      key={car.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <CarCard car={car} labels={t.carLabels} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ) : null
          )}
        </div>
      </section>

      <motion.section
        className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-emerald-900 px-5 sm:px-6 py-12 sm:py-16 text-center text-white shadow-2xl md:px-12 md:py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern with animation */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <motion.div
            className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-emerald-400 blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-emerald-400 blur-3xl"
            animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
              {t.finalCtaTitle}
            </h2>
            <p className="text-base sm:text-lg text-emerald-100/90 md:text-xl">
              {t.finalCtaDescription}
            </p>
          </div>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-full bg-emerald-400 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-emerald-950 shadow-lg shadow-emerald-400/50 transition-all hover:bg-emerald-300 animate-pulse-glow shimmer min-h-[48px]"
              >
                {t.heroCtas.primary}
              </Link>
            </motion.div>
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-full border border-white/30 bg-emerald-950/60/10 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-emerald-950/60/20 hover:shadow-glow-sm min-h-[48px]"
              >
                {t.finalCtaButton}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
