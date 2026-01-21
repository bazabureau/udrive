"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Zap, Award } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";

export function FeaturesSection() {
    const { language } = useLanguage();
    const t = translations[language];
    const icons = [ShieldCheck, Clock, Zap, Award];

    return (
        <section className="py-24 sm:py-32 lg:py-36 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                        {t.featuresTitle} <span className="text-primary">{t.featuresTitleHighlight}</span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground">
                        {t.featuresDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {t.features.map((feature, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group p-7 rounded-2xl bg-card border border-border hover:bg-muted/60 hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{feature.title}</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    );
                    })}
                </div>
            </div>
        </section>
    );
}
