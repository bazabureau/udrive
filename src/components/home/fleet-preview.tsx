"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CarCard } from "@/components/car/car-card";
import { cars } from "@/data/cars";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";
import { addLanguagePrefix } from "@/lib/i18n";

export function FleetPreview() {
    const { language } = useLanguage();
    const t = translations[language];
    const withLang = (href: string) => addLanguagePrefix(href, language);

    // Get top 3 most expensive cars as "Featured"
    const featuredCars = useMemo(() => {
        return [...cars]
            .sort((a, b) => b.pricePerDay - a.pricePerDay)
            .slice(0, 3);
    }, []);

    return (
        <section className="py-24 sm:py-32 lg:py-36 bg-muted/40 relative">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                            {t.fleetTitle} <span className="text-primary">{t.fleetTitleHighlight}</span>
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                            {t.fleetDescription}
                        </p>
                    </div>

                    <Link
                        href={withLang("/cars")}
                        className="group flex items-center gap-2 text-base font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                        {t.fleetCtaLabel}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <motion.div
                    className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {featuredCars.map((car, i) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <CarCard
                              car={car}
                              labels={t.carLabels}
                              categoryLabel={t.filterLabels[car.category]}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
