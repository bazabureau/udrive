import type { Metadata } from "next";

import { CorporateSection } from "@/components/corporate-section";
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
    pathname: "/korporativ",
    title: t.corporateTitle,
    description: t.corporateDescription,
  });
}

export default function LocalizedCorporatePage() {
  return <CorporateSection />;
}
