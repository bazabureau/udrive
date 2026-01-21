import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { CurrencyProvider } from "@/contexts/currency-context";
import { LanguageProvider } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import "./globals.css";

const azSeo = translations.az.seo;

export const metadata: Metadata = {
  title: `${azSeo.title} | uDrive`,
  description: azSeo.description,
  keywords: azSeo.keywords,
  authors: [{ name: "uDrive Team" }],
  creator: "uDrive.az",
  publisher: "uDrive.az",
  metadataBase: new URL("https://udrive.az"),
  alternates: {
    canonical: "/az",
    languages: {
      "az-AZ": "/az",
      "en-US": "/en",
      "ru-RU": "/ru",
    },
  },
  openGraph: {
    title: azSeo.openGraphTitle,
    description: azSeo.openGraphDescription,
    url: "https://udrive.az/az",
    siteName: "uDrive Rent-a-Car",
    locale: azSeo.locale,
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
    title: azSeo.openGraphTitle,
    description: azSeo.openGraphDescription,
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
  image: "https://udrive.az/newlogo.png",
  "@id": "https://udrive.az",
  url: "https://udrive.az",
  telephone: "+994509799797",
  email: "info@udrive.az",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bakı",
    addressLocality: "Baku",
    postalCode: "AZ1000",
    addressCountry: "AZ",
  },
  areaServed: {
    "@type": "Country",
    name: "Azerbaijan",
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
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+994509799797",
      contactType: "customer service",
      areaServed: "AZ",
      availableLanguage: ["az", "ru", "en"],
    },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans flex min-h-screen flex-col bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <CurrencyProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
