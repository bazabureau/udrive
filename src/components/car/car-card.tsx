import Image from "next/image";
import Link from "next/link";
import { Fuel, Gauge, Settings, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { Car } from "@/data/cars";
import type { CarCardLabels } from "@/data/translations";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/currency-context";

interface CarCardProps {
  car: Car;
  labels: CarCardLabels;
  categoryLabel?: string;
}

export function CarCard({ car, labels, categoryLabel }: CarCardProps) {
  const resolvedCategoryLabel = categoryLabel ?? car.category.toUpperCase();
  const { currency, rates } = useCurrency();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [tiltEnabled, setTiltEnabled] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setTiltEnabled(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const whatsappMessage = labels.whatsappTemplate
    .replace("{brand}", car.brand)
    .replace("{model}", car.model)
    .replace("{year}", String(car.year));
  const whatsappLink = `https://wa.me/994999797799?text=${encodeURIComponent(
    whatsappMessage
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
      className="group relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 active:scale-95 sm:hover:-translate-y-1 sm:hover:shadow-glow-md perspective"
      onMouseMove={tiltEnabled ? handleMouseMove : undefined}
      onMouseLeave={tiltEnabled ? handleMouseLeave : undefined}
      style={
        tiltEnabled
          ? {
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }
          : undefined
      }
      whileHover={tiltEnabled ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted shimmer">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <motion.div
          className="absolute right-2 top-2 sm:right-3 sm:top-3 rounded-full border border-border bg-background/80 px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-primary backdrop-blur-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
        >
          {resolvedCategoryLabel}
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col gap-4 sm:gap-5 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {car.brand}
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              {car.model}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-lg sm:text-xl font-bold text-primary">
              {convertedPrice} <span className="text-sm font-medium text-muted-foreground">{currency}</span>
            </p>
            <p className="text-xs text-muted-foreground">{labels.perDay}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-3 gap-x-4 border-y border-border py-3">
          <Spec icon={Settings} value={car.year} />
          <Spec icon={Gauge} value={car.engine} />
          <Spec icon={Fuel} value={car.type} />
          <Spec icon={Users} value={`${car.seats} ${labels.seatsUnit}`} />
        </div>

        <div className="mt-auto flex gap-2">
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shimmer h-11 text-base">
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
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      <span className="font-medium text-foreground truncate">{value}</span>
    </div>
  );
}
