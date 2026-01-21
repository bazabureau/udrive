"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrency } from "@/contexts/currency-context";

const options = [
  { id: "AZN", label: "AZN", symbol: "₼" },
  { id: "USD", label: "USD", symbol: "$" },
  { id: "EUR", label: "EUR", symbol: "€" },
  { id: "RUB", label: "RUB", symbol: "₽" },
] as const;

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = options.find((opt) => opt.id === currency) || options[0];

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
        className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted/80"
      >
        <span>{currentOption.symbol} {currentOption.label}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-32 overflow-hidden rounded-xl border border-border bg-card backdrop-blur-xl shadow-lg"
          >
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setCurrency(option.id);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${currency === option.id
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                  }`}
              >
                <span className="text-base">{option.symbol}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
