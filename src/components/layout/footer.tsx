"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { addLanguagePrefix } from "@/lib/i18n";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];
  const footer = t.footer;
  const copyright = footer.copyright.replace("{year}", String(currentYear));
  const withLang = (href: string) => addLanguagePrefix(href, language);

  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link href={withLang("/")} className="block">
              <span className="text-xl font-bold text-primary tracking-tight">uDrive</span>
            </Link>
            <p className="text-muted-foreground text-base leading-relaxed">
              {footer.descriptionLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < footer.descriptionLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6">{footer.exploreTitle}</h3>
            <ul className="space-y-4 text-base text-muted-foreground">
              {footer.exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={withLang(link.href)} className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-6">{footer.contactTitle}</h3>
            <ul className="space-y-4 text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`tel:${footer.contactPhone.replace(/\s+/g, "")}`}
                  className="hover:text-foreground transition-colors"
                >
                  {footer.contactPhone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`mailto:${footer.contactEmail}`}
                  className="hover:text-foreground transition-colors"
                >
                  {footer.contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>{footer.contactAddress}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-foreground mb-6">{footer.legalTitle}</h3>
            <ul className="space-y-4 text-base text-muted-foreground">
              {footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={withLang(link.href)} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{copyright}</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>{footer.status}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
