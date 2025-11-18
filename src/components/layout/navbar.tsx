import Image from "next/image";
import Link from "next/link";

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
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/udrivelogo.png"
            alt="uDrive"
            width={140}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-4 text-sm text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-emerald-600">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="tel:+994999797799"
            className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline"
          >
            +994 999 79 77 99
          </a>
        </div>
      </div>
    </header>
  );
}
