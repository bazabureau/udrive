"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";

export function TestimonialsSection() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-24 sm:py-32 bg-primary/5">
            <div className="container mx-auto">
                <div className="text-center mb-20 space-y-6">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                        {t.testimonialsTitle} <span className="text-primary">{t.testimonialsTitleHighlight}</span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground">
                        {t.testimonialsDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {t.testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-card border border-border relative"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-base text-muted-foreground mb-6 italic leading-relaxed">&quot;{item.content}&quot;</p>
                            <div>
                                <h4 className="font-bold text-foreground">{item.name}</h4>
                                <p className="text-base text-primary">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
