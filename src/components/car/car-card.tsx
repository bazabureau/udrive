import Image from "next/image";
import Link from "next/link";

import type { Car } from "@/data/cars";
import type { CarCardLabels } from "@/data/translations";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/currency-context";

interface CarCardProps {
  car: Car;
  labels: CarCardLabels;
}

export function CarCard({ car, labels }: CarCardProps) {
  const { currency, rates } = useCurrency();
  const whatsappLink = `https://wa.me/994999797799?text=${encodeURIComponent(
    `Salam, ${car.brand} ${car.model} (${car.year}) üçün rezervasiya etmək istəyirəm.`
  )}`;
  const convertedPrice = (car.pricePerDay * rates[currency]).toFixed(1);

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            {car.brand}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {car.model}
          </h3>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-wide text-slate-500">
          {car.category}
        </span>
      </div>

      <div className="relative h-36 w-full overflow-hidden rounded-lg bg-slate-100">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      <dl className="space-y-2 text-sm text-slate-600">
        <Spec label={labels.specs.year} value={car.year} />
        <Spec label={labels.specs.type} value={car.type} />
        <Spec label={labels.specs.seats} value={car.seats} />
        <Spec label={labels.specs.engine} value={car.engine} />
        <Spec label={labels.specs.gear} value={car.gear} />
        <Spec
          label={labels.specs.price}
          value={`${convertedPrice} ${currency}`}
          emphasize
        />
      </dl>

      <div className="space-y-2">
        <Button asChild className="w-full">
          <Link href={whatsappLink} target="_blank" rel="noreferrer">
            {labels.orderCta}
          </Link>
        </Button>
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="block text-center text-sm font-medium text-slate-500 underline-offset-4 hover:underline"
        >
          {labels.more}
        </Link>
      </div>
    </article>
  );
}

function Spec({
  label,
  value,
  emphasize,
}: {
  label: string;
  value: string | number;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs uppercase tracking-wide text-slate-400">
        {label}
      </span>
      <span
        className={emphasize ? "text-base font-semibold text-slate-900" : ""}
      >
        {value}
      </span>
    </div>
  );
}
