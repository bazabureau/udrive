import type { Metadata } from "next";

import { CarsContent } from "@/components/cars-content";
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
    pathname: "/cars",
    title: t.categoriesTitle,
    description: t.categoriesDescription,
  });
}

export default function LocalizedCarsPage() {
  return <CarsContent />;
}
