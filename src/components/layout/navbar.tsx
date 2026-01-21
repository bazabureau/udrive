"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { CurrencySwitcher } from "@/components/currency-switcher";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";
import { addLanguagePrefix } from "@/lib/i18n";

export function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];
  const navLinks = t.navLinks;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const withLang = (href: string) => addLanguagePrefix(href, language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent border-transparent py-5"
        }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href={withLang("/")} className="flex-shrink-0 relative z-50">
            <span className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
              uDrive
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={withLang(link.href)}
                className="group relative text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 relative z-50">
            {/* Desktop Switchers */}
            <div className="hidden md:flex items-center gap-4">
              <CurrencySwitcher />
              <div className="h-4 w-px bg-border" />
              <LanguageSwitcher />
            </div>

            {/* CTA Button */}
            <Link
              href="tel:+994509799797"
              className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>+994 50 979 97 97</span>
            </Link>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-none sm:max-w-sm px-0">
                <div className="flex items-center justify-between border-b border-border px-6 py-5">
                  <Link href={withLang("/")} className="flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
                    <span className="text-xl font-bold text-primary tracking-tight">
                      uDrive
                    </span>
                  </Link>
                </div>

                <nav className="flex flex-col gap-2 px-6 py-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={withLang(link.href)}
                        className="px-4 py-4 text-xl font-semibold text-foreground hover:text-primary hover:bg-primary/10 rounded-2xl transition-all"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="px-6">
                  <div className="grid grid-cols-2 gap-3">
                    <CurrencySwitcher />
                    <LanguageSwitcher />
                  </div>
                </div>

                <div className="mt-auto px-6 pb-6">
                  <SheetClose asChild>
                    <Link
                      href="tel:+994509799797"
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg"
                    >
                      <Phone className="w-5 h-5" />
                      +994 50 979 97 97
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
