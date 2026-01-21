"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { addLanguagePrefix } from "@/lib/i18n";

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const whatsappLink = "https://wa.me/994999797799";
  const withLang = (href: string) => addLanguagePrefix(href, language);

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/video.MP4" type="video/mp4" />
        </video>
        {/* Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-2 text-primary font-medium tracking-wider uppercase text-sm sm:text-base"
            >
              <Star className="w-4 h-4 fill-primary" />
              <span>{t.heroBadge}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              {t.heroTitle} <br />
              <span className="text-gradient-primary">{t.heroTitleHighlight}</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {t.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 text-base font-bold text-primary-foreground transition-all duration-200 bg-primary rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                {t.heroCtas.primary}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href={withLang("/cars")}
                className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 text-base font-bold text-foreground transition-all duration-200 bg-card/80 border border-border rounded-xl hover:bg-muted backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/20"
              >
                {t.heroCtas.secondary}
              </Link>
            </div>
            
            {/* Stats / Trust items could go here */}
            <div className="pt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground sm:gap-8 sm:text-base">
              {t.heroBullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
