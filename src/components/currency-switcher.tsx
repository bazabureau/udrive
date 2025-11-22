"use client";

import { useCurrency } from "@/contexts/currency-context";

const options = [
  { id: "AZN", label: "AZN" },
  { id: "USD", label: "USD" },
  { id: "EUR", label: "EUR" },
  { id: "RUB", label: "RUB" },
] as const;

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-2">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setCurrency(option.id)}
          className={`rounded-full border px-2 py-1 text-xs font-semibold transition ${
            currency === option.id
              ? "border-emerald-400 bg-emerald-500 text-black shadow-[0_0_20px_rgba(52,211,153,0.35)]"
              : "border-emerald-500/30 text-emerald-100 hover:bg-emerald-500/10"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
