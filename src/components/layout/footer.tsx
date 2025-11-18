import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image
                src="/udrivelogo.png"
                alt="uDrive"
                width={140}
                height={40}
                className="h-8 w-auto opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </Link>
            <p className="text-sm text-slate-500">
              Premium Rent-a-Car xidməti. <br />
              Sizin rahatlığınız bizim prioritetimizdir.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-slate-900">Əlaqə</span>
              <a href="tel:+994999797799" className="hover:text-emerald-600">+994 999 79 77 99</a>
              <a href="mailto:info@udrive.az" className="hover:text-emerald-600">info@udrive.az</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-slate-900">Ünvan</span>
              <p>Bakı şəhəri, Azərbaycan</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
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
