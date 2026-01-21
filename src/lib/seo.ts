import type { Metadata } from "next";

import type { LanguageCode } from "@/data/translations";
import { translations } from "@/data/translations";
import { buildLanguageAlternates } from "@/lib/i18n";

const siteName = "uDrive.az";
const baseUrl = "https://udrive.az";

export function getSeoConfig(language: LanguageCode) {
  return translations[language].seo;
}

export function buildPageMetadata({
  language,
  pathname,
  title,
  description,
}: {
  language: LanguageCode;
  pathname: string;
  title: string;
  description: string;
}): Metadata {
  const seo = getSeoConfig(language);
  const canonical = `/${language}${pathname === "/" ? "" : pathname}`;
  const alternates = buildLanguageAlternates(pathname);

  return {
    title: `${title} | uDrive`,
    description,
    keywords: seo.keywords,
    alternates: {
      canonical,
      languages: alternates,
    },
    openGraph: {
      title: `${title} | uDrive`,
      description,
      url: `${baseUrl}${canonical}`,
      siteName,
      locale: seo.locale,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "uDrive",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | uDrive`,
      description,
      images: ["/og-image.jpg"],
    },
  };
}
