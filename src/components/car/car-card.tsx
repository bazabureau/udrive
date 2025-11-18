import Image from "next/image";
import Link from "next/link";
import { Fuel, Gauge, Settings, Users } from "lucide-react";

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
  const convertedPrice = (car.pricePerDay * rates[currency]).toFixed(0);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 backdrop-blur-sm">
          {car.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {car.brand}
            </p>
            <h3 className="text-lg font-bold text-slate-900">
              {car.model}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-emerald-600">
              {convertedPrice} <span className="text-sm font-medium">{currency}</span>
            </p>
            <p className="text-[10px] text-slate-400">/ gün</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-2 gap-x-4 border-y border-slate-50 py-3">
          <Spec icon={Settings} value={car.year} />
          <Spec icon={Gauge} value={car.engine} />
          <Spec icon={Fuel} value={car.type} />
          <Spec icon={Users} value={`${car.seats} yer`} />
        </div>

        <div className="mt-auto flex gap-2">
          <Button asChild className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-100">
            <Link href={whatsappLink} target="_blank" rel="noreferrer">
              {labels.orderCta}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

function Spec({
  icon: Icon,
  value,
}: {
  icon: any;
  value: string | number;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-500">
      <Icon className="h-4 w-4 text-slate-400" />
      <span className="font-medium">{value}</span>
    </div>
  );
}
