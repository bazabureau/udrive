"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="border-t border-emerald-500/20 bg-emerald-900/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="block">
                <Image
                  src="/newlogo.png"
                  alt="uDrive"
                  width={140}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </motion.div>
            <p className="text-sm text-emerald-300">
              Premium Rent-a-Car xidməti. <br />
              Sizin rahatlığınız bizim prioritetimizdir.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-emerald-300 sm:flex-row sm:gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-emerald-50">Əlaqə</span>
              <Link href="tel:+994509799797" className="group relative inline-block hover:text-emerald-400 transition-colors">
                +994 50 979 97 97
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="mailto:info@udrive.az" className="group relative inline-block hover:text-emerald-400 transition-colors">
                info@udrive.az
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-emerald-50">Ünvan</span>
              <p>Bakı şəhəri, Azərbaycan</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-emerald-500/20 pt-8 text-sm text-emerald-300/80 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} uDrive.az. Bütün hüquqlar qorunur.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="group relative hover:text-emerald-400 transition-colors">
              İstifadə qaydaları
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/privacy" className="group relative hover:text-emerald-400 transition-colors">
              Məxfilik siyasəti
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
