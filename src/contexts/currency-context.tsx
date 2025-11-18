"use client";

import { createContext, useContext, useState } from "react";

import type { CurrencyCode } from "@/data/translations";

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  rates: Record<CurrencyCode, number>;
}

const defaultRates: Record<CurrencyCode, number> = {
  AZN: 1,
  USD: 0.59,
  EUR: 0.55,
  RUB: 51.2,
};

const CurrencyContext = createContext<CurrencyContextValue | undefined>(
  undefined
);

export function CurrencyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currency, setCurrency] = useState<CurrencyCode>("AZN");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rates: defaultRates }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
}
