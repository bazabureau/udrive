"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { languageOptions } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = languageOptions.find((opt) => opt.id === language) || languageOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-100 transition-all hover:border-emerald-400/50 hover:bg-emerald-500/20"
      >
        <span>{currentOption.label}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-28 overflow-hidden rounded-xl border border-emerald-500/30 bg-black/95 backdrop-blur-xl shadow-lg shadow-emerald-500/10"
          >
            {languageOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setLanguage(option.id);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-center px-4 py-2.5 text-sm font-medium transition-colors ${language === option.id
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "text-emerald-100 hover:bg-emerald-500/10"
                  }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
