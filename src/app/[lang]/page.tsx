import type { Metadata } from "next";

import { HomeContent } from "@/components/home-content";
import { translations, type LanguageCode } from "@/data/translations";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata({
  params,
}: {
  params: { lang: LanguageCode };
}): Metadata {
  const seo = translations[params.lang].seo;
  return buildPageMetadata({
    language: params.lang,
    pathname: "/",
    title: seo.title,
    description: seo.description,
  });
}

export default function LocalizedHomePage() {
  return <HomeContent />;
}
