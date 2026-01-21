import type { Metadata } from "next";

import { TransferContent } from "@/components/transfer-content";
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
    pathname: "/transfer",
    title: t.transferTitle,
    description: t.transferDescription,
  });
}

export default function LocalizedTransferPage() {
  return <TransferContent />;
}
