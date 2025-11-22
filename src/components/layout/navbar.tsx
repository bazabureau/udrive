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
    <header className="sticky top-0 z-50 w-full border-b border-emerald-500/20 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/70">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 transition-all">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <Image
            src="/udrivelogo.png"
            alt="uDrive"
            width={160}
            height={45}
            className="h-10 w-auto brightness-0 invert"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-emerald-100 md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="relative transition-colors hover:text-emerald-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <a
            href="tel:+994509799797"
            className="group flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition-all hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-500/20 hover:text-emerald-50"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span>+994 50 979 97 97</span>
          </a>
        </div>
      </div>
    </header>
  );
}
