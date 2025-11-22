import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-emerald-500/20 bg-emerald-900/30">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image
                src="/udrivelogo.png"
                alt="uDrive"
                width={140}
                height={40}
                className="h-8 w-auto opacity-80 brightness-0 invert transition-all hover:opacity-100"
              />
            </Link>
            <p className="text-sm text-emerald-300">
              Premium Rent-a-Car xidməti. <br />
              Sizin rahatlığınız bizim prioritetimizdir.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-emerald-300 sm:flex-row sm:gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-emerald-50">Əlaqə</span>
              <a href="tel:+994509799797" className="hover:text-emerald-600">+994 50 979 97 97</a>
              <a href="mailto:info@udrive.az" className="hover:text-emerald-600">info@udrive.az</a>
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
            <Link href="/terms" className="hover:text-emerald-600">İstifadə qaydaları</Link>
            <Link href="/privacy" className="hover:text-emerald-600">Məxfilik siyasəti</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
