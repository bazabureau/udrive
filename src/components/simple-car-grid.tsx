"use client";

import { useMemo, useState } from "react";

import type { Car } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/car/car-card";
import type { CarCardLabels, FilterId } from "@/data/translations";

const filterOrder: FilterId[] = ["all", "sedan", "suv", "lux"];

interface SimpleCarGridProps {
  cars: Car[];
  filterLabels: Record<FilterId, string>;
  cardLabels: CarCardLabels;
}

export function SimpleCarGrid({
  cars,
  filterLabels,
  cardLabels,
}: SimpleCarGridProps) {
  const [active, setActive] = useState<FilterId>("all");

  const visibleCars = useMemo(() => {
    if (active === "all") return cars;
    return cars.filter((car) => car.category === active);
  }, [active, cars]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {filterOrder.map((id) => (
          <Button
            key={id}
            variant={id === active ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => setActive(id)}
          >
            {filterLabels[id]}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleCars.map((car) => (
          <CarCard key={car.id} car={car} labels={cardLabels} />
        ))}
      </div>
    </div>
  );
}
