"use client";

import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/language-context";

const whatsappLink = "https://wa.me/994999797799";

export function ContactContent() {
  const { language } = useLanguage();
  const t = translations[language];
  const contact = t.contact;

  return (
    <div className="space-y-8">
      <section className="space-y-4 rounded-2xl border border-emerald-500/20 bg-emerald-950/60 p-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-emerald-50">
          {contact.title}
        </h1>
        <p className="text-emerald-200">{contact.description}</p>
        <div className="grid gap-4 md:grid-cols-2">
          <ContactRow label={contact.phoneLabel} value={contact.phoneValue} />
          <ContactRow label={contact.emailLabel} value={contact.emailValue} />
          <ContactRow label={contact.addressLabel} value={contact.addressValue} />
          <ContactRow label={contact.hoursLabel} value={contact.hoursValue} />
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${contact.phoneValue.replace(/\\s+/g, "")}`}
            className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            {contact.phoneLabel}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-emerald-500/20 px-6 py-2 text-sm font-semibold text-emerald-100 hover:border-emerald-400"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-emerald-500/15 bg-emerald-900/30 p-4">
      <p className="text-xs uppercase tracking-wide text-emerald-300/80">{label}</p>
      <p className="text-sm font-medium text-emerald-100">{value}</p>
    </div>
  );
}
