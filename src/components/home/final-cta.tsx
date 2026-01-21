"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { addLanguagePrefix } from "@/lib/i18n";

export function FinalCTA() {
    const { language } = useLanguage();
    const t = translations[language];
    const withLang = (href: string) => addLanguagePrefix(href, language);

    return (
        <section className="py-24 sm:py-32 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-primary/5">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl sm:text-6xl font-bold text-foreground tracking-tight">
                        {t.finalCtaTitle}
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground">
                        {t.finalCtaDescription}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Link
                            href="https://wa.me/994999797799"
                            target="_blank"
                            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-foreground transition-all duration-200 bg-primary rounded-xl hover:bg-primary/90 shadow-lg focus:outline-none"
                        >
                            {t.heroCtas.primary}
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href={withLang("/contact")}
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-foreground transition-all duration-200 bg-card/80 border border-border rounded-xl hover:bg-muted backdrop-blur-sm"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            {t.finalCtaButton}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
