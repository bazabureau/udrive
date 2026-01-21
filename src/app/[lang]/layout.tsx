import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import type { LanguageCode } from "@/data/translations";
import { supportedLanguages } from "@/lib/i18n";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default function LanguageLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  if (!supportedLanguages.includes(params.lang as LanguageCode)) {
    notFound();
  }
  return children;
}
