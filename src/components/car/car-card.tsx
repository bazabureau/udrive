import Image from "next/image";
import Link from "next/link";
import { Fuel, Gauge, Settings, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const whatsappLink = `https://wa.me/994999797799?text=${encodeURIComponent(
    `Salam, ${car.brand} ${car.model} (${car.year}) üçün rezervasiya etmək istəyirəm.`
  )}`;
  const convertedPrice = (car.pricePerDay * rates[currency]).toFixed(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-emerald-500/20 bg-emerald-950/60 shadow-lg shadow-emerald-500/10 transition-all duration-300 active:scale-95 sm:hover:-translate-y-1 sm:hover:shadow-glow-md perspective"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-emerald-900/50 shimmer">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <motion.div
          className="absolute right-2 top-2 sm:right-3 sm:top-3 rounded-full border border-emerald-500/30 bg-black/70 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
        >
          {car.category}
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col gap-3 sm:gap-4 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300/80">
              {car.brand}
            </p>
            <h3 className="text-base sm:text-lg font-bold text-emerald-50">
              {car.model}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-base sm:text-lg font-bold text-emerald-300">
              {convertedPrice} <span className="text-xs sm:text-sm font-medium text-emerald-200/80">{currency}</span>
            </p>
            <p className="text-[9px] sm:text-[10px] text-emerald-300/70">/ gün</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-2 gap-x-3 sm:gap-x-4 border-y border-emerald-500/20 py-2.5 sm:py-3">
          <Spec icon={Settings} value={car.year} />
          <Spec icon={Gauge} value={car.engine} />
          <Spec icon={Fuel} value={car.type} />
          <Spec icon={Users} value={`${car.seats} yer`} />
        </div>

        <div className="mt-auto flex gap-2">
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="w-full bg-emerald-400 text-emerald-950 hover:bg-emerald-300 shadow-lg shadow-emerald-500/30 shimmer h-11 sm:h-auto text-sm sm:text-base">
              <Link href={whatsappLink} target="_blank" rel="noreferrer">
                {labels.orderCta}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.article>
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
    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-emerald-200">
      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-300/70 flex-shrink-0" />
      <span className="font-medium text-emerald-50 truncate">{value}</span>
    </div>
  );
}
