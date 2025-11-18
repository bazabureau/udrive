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
              ? "border-emerald-600 bg-emerald-50 text-emerald-700"
              : "border-slate-200 text-slate-500 hover:bg-slate-100"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
