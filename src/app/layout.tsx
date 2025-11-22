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
    default: "uDrive Rent-a-Car | Bakıda Premium Avtomobil Kirayəsi",
    template: "%s | uDrive Rent-a-Car",
  },
  description:
    "uDrive.az – Bakıda və regionlarda premium avtomobil kirayəsi. Ekonomdan lüks SUV modellərinə qədər geniş seçim, sərfəli qiymətlər, 24/7 dəstək və çatdırılma xidməti.",
  keywords: [
    "rent a car baku",
    "avtomobil kirayəsi",
    "maşın arendası",
    "baku car rental",
    "udrive",
    "premium rent a car",
    "ucuz masinlar",
    "suv kirayesi",
    "sedan kirayesi",
    "azerbaijan car rental"
  ],
  authors: [{ name: "uDrive Team" }],
  creator: "uDrive.az",
  publisher: "uDrive.az",
  metadataBase: new URL("https://udrive.az"),
  alternates: {
    canonical: "/",
    languages: {
      "az-AZ": "/",
      "en-US": "/en",
      "ru-RU": "/ru",
    },
  },
  openGraph: {
    title: "uDrive Rent-a-Car | Sərfəli və Komfortlu Avtomobillər",
    description:
      "Bakıda ən sərfəli qiymətlərlə premium avtomobil kirayəsi. İndi bron edin, ünvana çatdıraq.",
    url: "https://udrive.az",
    siteName: "uDrive Rent-a-Car",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // We should probably ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "uDrive Rent-a-Car Baku",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "uDrive Rent-a-Car | Bakıda Avtomobil Kirayəsi",
    description: "Premium avtomobil kirayəsi, sərfəli qiymətlər və yüksək keyfiyyətli xidmət.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Placeholder
    yandex: "yandex-verification-code", // Placeholder
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "uDrive Rent-a-Car",
  image: "https://udrive.az/udrivelogo.png",
  "@id": "https://udrive.az",
  url: "https://udrive.az",
  telephone: "+994509799797",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bakı şəhəri",
    addressLocality: "Baku",
    postalCode: "AZ1000",
    addressCountry: "AZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.4093,
    longitude: 49.8671,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.instagram.com/udrive.az",
    "https://www.facebook.com/udrive.az",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={`${fontSans.variable} flex min-h-screen flex-col bg-black`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
