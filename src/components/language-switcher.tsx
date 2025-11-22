"use client";

import { languageOptions } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2">
      {languageOptions.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setLanguage(option.id)}
          className={`rounded-full border px-3 py-1 text-sm font-medium transition ${
            option.id === language
              ? "border-emerald-400 bg-emerald-500 text-black shadow-[0_0_30px_rgba(52,211,153,0.4)]"
              : "border-emerald-500/30 text-emerald-100 hover:bg-emerald-500/10"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
