"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

const whatsappLink = "https://wa.me/994999797799";
type IconType = typeof Phone;

export function ContactContent() {
  const { language } = useLanguage();
  const t = translations[language];
  const contact = t.contact;
  const phoneHref = `tel:${contact.phoneValue.replace(/\\s+/g, "")}`;

  const contactCards = [
    {
      icon: Phone,
      label: contact.phoneLabel,
      value: contact.phoneValue,
      href: phoneHref,
    },
    {
      icon: Mail,
      label: contact.emailLabel,
      value: contact.emailValue,
      href: `mailto:${contact.emailValue}`,
    },
    {
      icon: Clock,
      label: contact.hoursLabel,
      value: contact.hoursValue,
      wide: true,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,241,149,0.12),_transparent_45%)]" />
      </div>

      <div className="container mx-auto relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold heading-gradient">
                {contact.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                {contact.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={phoneHref}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm sm:text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" />
                {contact.phoneLabel}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3 text-sm sm:text-base font-semibold text-foreground backdrop-blur-sm transition hover:border-primary"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                {t.contactWhatsappLabel}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => (
                <ContactCard
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                  className={item.wide ? "sm:col-span-2" : ""}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-6 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
              <div className="relative space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {contact.addressLabel}
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-foreground">
                      {contact.addressValue}
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative h-44 rounded-2xl border border-border bg-gradient-to-br from-muted/60 via-card to-muted/40 overflow-hidden">
                  <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(15,23,42,0.12)_1px,transparent_1px)] [background-size:24px_24px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_8px_rgba(20,241,149,0.2)] animate-pulse-glow" />
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {contact.hoursLabel}
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      {contact.hoursValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  className = "",
}: {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
  className?: string;
}) {
  const cardClasses = `group flex items-start gap-4 rounded-2xl border border-border bg-card/80 p-5 transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-lg ${className}`;
  const content = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
        <p className="text-base font-semibold text-foreground">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={cardClasses}>
        {content}
      </a>
    );
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
}
