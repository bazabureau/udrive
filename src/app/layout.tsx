import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { CurrencyProvider } from "@/contexts/currency-context";
import { LanguageProvider } from "@/contexts/language-context";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "uDrive Rent-a-Car | Premium Avtomobil Kirayəsi",
    template: "%s | uDrive Rent-a-Car",
  },
  description:
    "uDrive.az – Bakıda və regionlarda premium avtomobil kirayəsi. Sedandan lüks SUV modellərinə qədər müasir park, çevik rezervasiya və 24/7 dəstək.",
  metadataBase: new URL("https://udrive.az"),
  openGraph: {
    title: "uDrive Rent-a-Car",
    description:
      "Premium servis, müasir park və çevik rezervasiya təcrübəsi ilə seçilən rent-a-car platforması.",
    url: "https://udrive.az",
    siteName: "uDrive Rent-a-Car",
    locale: "az_AZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={`${fontSans.variable} flex min-h-screen flex-col bg-slate-50`}>
        <LanguageProvider>
          <CurrencyProvider>
            <Navbar />
            <main className="flex-1">
              <div className="mx-auto w-full max-w-6xl px-6 py-10">
                {children}
              </div>
            </main>
            <Footer />
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
