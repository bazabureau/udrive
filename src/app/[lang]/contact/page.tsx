import type { Metadata } from "next";

import { ContactContent } from "@/components/contact-content";
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
    pathname: "/contact",
    title: t.contact.title,
    description: t.contact.description,
  });
}

export default function LocalizedContactPage() {
  return <ContactContent />;
}
