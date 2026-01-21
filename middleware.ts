import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLanguage, supportedLanguages } from "./src/lib/i18n";

const publicFile = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/.well-known") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    publicFile.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocale = supportedLanguages.some(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLanguage}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}
