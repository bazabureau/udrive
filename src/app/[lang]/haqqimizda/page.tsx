import type { Metadata } from "next";

import { AboutContent } from "@/components/about-content";
import { translations, type LanguageCode } from "@/data/translations";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata({
  params,
}: {
  params: { lang: LanguageCode };
}): Metadata {
  const t = translations[params.lang];
  return buildPageMetadata({
    language: params.lang,
    pathname: "/haqqimizda",
    title: t.aboutTitle,
    description: t.aboutIntro,
  });
}

export default function LocalizedAboutPage() {
  return <AboutContent />;
}
