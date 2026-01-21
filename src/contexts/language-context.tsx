"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import type { LanguageCode } from "@/data/translations";
import { addLanguagePrefix, getLanguageFromPathname, supportedLanguages } from "@/lib/i18n";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguageState] = useState<LanguageCode>(
    getLanguageFromPathname(pathname || "/")
  );

  useEffect(() => {
    setLanguageState(getLanguageFromPathname(pathname || "/"));
  }, [pathname]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const handleLanguageChange = (lang: LanguageCode) => {
    if (!supportedLanguages.includes(lang)) {
      return;
    }
    const nextPath = addLanguagePrefix(pathname || "/", lang);
    if (nextPath !== (pathname || "/")) {
      router.push(nextPath);
    }
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
