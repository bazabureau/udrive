"use client";

import { transferCars } from "@/data/transfer-cars";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

export function TransferContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">
          {t.transferTitle}
        </h1>
        <p className="text-slate-600">{t.transferDescription}</p>
        {t.transferIntro.map((paragraph) => (
          <p key={paragraph} className="text-sm text-slate-600">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">{t.transferTable.car}</th>
              <th className="px-4 py-3">{t.transferTable.hours}</th>
              <th className="px-4 py-3">{t.transferTable.transfer}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transferCars.map((car) => (
              <tr key={car.name} className="text-slate-700">
                <td className="px-4 py-3 font-semibold">{car.name}</td>
                <td className="px-4 py-3">{car.hoursRate}</td>
                <td className="px-4 py-3">{car.transferRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
