import type { LanguageCode } from "@/data/translations";

export const supportedLanguages: LanguageCode[] = ["az", "en", "ru"];
export const defaultLanguage: LanguageCode = "az";

export function getLanguageFromPathname(pathname: string): LanguageCode {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segment = normalized.split("/").filter(Boolean)[0];
  if (supportedLanguages.includes(segment as LanguageCode)) {
    return segment as LanguageCode;
  }
  return defaultLanguage;
}

export function stripLanguageFromPathname(pathname: string): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = normalized.split("/").filter(Boolean);
  if (segments.length === 0) {
    return "/";
  }
  if (supportedLanguages.includes(segments[0] as LanguageCode)) {
    segments.shift();
  }
  const rest = segments.join("/");
  return rest ? `/${rest}` : "/";
}

export function addLanguagePrefix(pathname: string, language: LanguageCode): string {
  const stripped = stripLanguageFromPathname(pathname);
  const suffix = stripped === "/" ? "" : stripped;
  return `/${language}${suffix}`;
}

export function buildLanguageAlternates(pathname: string): Record<string, string> {
  const stripped = stripLanguageFromPathname(pathname);
  const suffix = stripped === "/" ? "" : stripped;
  return {
    "az-AZ": `/az${suffix}`,
    "en-US": `/en${suffix}`,
    "ru-RU": `/ru${suffix}`,
  };
}
