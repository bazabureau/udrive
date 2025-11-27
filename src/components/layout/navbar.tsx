"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { CurrencySwitcher } from "@/components/currency-switcher";

const navLinks = [
  { href: "/", label: "Ana səhifə" },
  { href: "/cars", label: "Avtomobillər" },
  { href: "/haqqimizda", label: "Haqqımızda" },
  { href: "/korporativ", label: "Korporativ" },
  { href: "/transfer", label: "Transfer" },
  { href: "/contact", label: "Əlaqə" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-500/20 bg-black/90 backdrop-blur-xl supports-[backdrop-filter]:bg-black/80">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Main Navigation Bar */}
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex flex-shrink-0 items-center">
              <Image
                src="/udrivelogo.png"
                alt="uDrive"
                width={140}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-emerald-100 transition-colors hover:text-emerald-400"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Currency Switcher - Desktop */}
            <div className="hidden md:block">
              <CurrencySwitcher />
            </div>

            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Phone Button - Desktop */}
            <motion.a
              href="tel:+994509799797"
              className="group hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition-all hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-500/20 hover:text-emerald-50 hover:shadow-glow-sm md:flex shimmer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <Phone className="h-4 w-4" />
              </motion.div>
              <span className="hidden lg:inline">+994 50 979 97 97</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-100 transition-colors hover:bg-emerald-500/20 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="space-y-4 pb-6 pt-4">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg px-4 py-2.5 text-sm font-medium text-emerald-100 transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Switchers */}
                <div className="space-y-3 border-t border-emerald-500/20 pt-4">
                  <div className="px-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-300/70">
                      Valyuta
                    </p>
                    <CurrencySwitcher />
                  </div>
                  <div className="px-4 sm:hidden">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-300/70">
                      Dil
                    </p>
                    <LanguageSwitcher />
                  </div>
                </div>

                {/* Mobile Phone Button */}
                <div className="px-4 md:hidden">
                  <a
                    href="tel:+994509799797"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-100 transition-all hover:bg-emerald-500/20"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+994 50 979 97 97</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
