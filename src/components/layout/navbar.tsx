import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { LanguageSwitcher } from "@/components/language-switcher";

const navLinks = [
  { href: "/", label: "Ana səhifə" },
  { href: "/cars", label: "Avtomobillər" },
  { href: "/haqqimizda", label: "Haqqımızda" },
  { href: "/korporativ", label: "Korporativ" },
  { href: "/transfer", label: "Transfer" },
  { href: "/contact", label: "Əlaqə" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 transition-all">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <Image
            src="/udrivelogo.png"
            alt="uDrive"
            width={160}
            height={45}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="relative transition-colors hover:text-emerald-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <a
            href="tel:+994999797799"
            className="group flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition-all hover:bg-emerald-100 hover:text-emerald-800"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span>+994 999 79 77 99</span>
          </a>
        </div>
      </div>
    </header>
  );
}
