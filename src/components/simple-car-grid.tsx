"use client";

import { useMemo, useState } from "react";

import type { Car } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/car/car-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCurrency } from "@/contexts/currency-context";
import type { CarCardLabels, FilterId } from "@/data/translations";

const filterOrder: FilterId[] = ["all", "sedan", "suv", "lux"];

interface SimpleCarGridProps {
  cars: Car[];
  filterLabels: Record<FilterId, string>;
  cardLabels: CarCardLabels;
  searchLabel: string;
  searchPlaceholder: string;
  sortLabel: string;
  sortOptions: CarSortOptions;
  resultsLabelRange: string;
  resultsLabelSingle: string;
  clearFiltersLabel: string;
  noResultsLabel: string;
}

type SortOption = "featured" | "priceLow" | "priceHigh" | "newest" | "name";

interface CarSortOptions {
  featured: string;
  priceLow: string;
  priceHigh: string;
  newest: string;
  name: string;
}

export function SimpleCarGrid({
  cars,
  filterLabels,
  cardLabels,
  searchLabel,
  searchPlaceholder,
  sortLabel,
  sortOptions,
  resultsLabelRange,
  resultsLabelSingle,
  clearFiltersLabel,
  noResultsLabel,
}: SimpleCarGridProps) {
  const { currency, rates } = useCurrency();
  const [active, setActive] = useState<FilterId>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchInputId = "car-search";

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesCategory = active === "all" || car.category === active;
      if (!matchesCategory) {
        return false;
      }
      if (!normalizedQuery) {
        return true;
      }
      const searchable = `${car.brand} ${car.model} ${car.year} ${car.category}`.toLowerCase();
      return searchable.includes(normalizedQuery);
    });
  }, [active, cars, normalizedQuery]);

  const sortedCars = useMemo(() => {
    const next = [...filteredCars];
    switch (sortOption) {
      case "priceLow":
        next.sort((a, b) => a.pricePerDay - b.pricePerDay);
        break;
      case "priceHigh":
        next.sort((a, b) => b.pricePerDay - a.pricePerDay);
        break;
      case "newest":
        next.sort((a, b) => b.year - a.year);
        break;
      case "name":
        next.sort((a, b) =>
          `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`)
        );
        break;
      default:
        break;
    }
    return next;
  }, [filteredCars, sortOption]);

  const [minPrice, maxPrice] = useMemo(() => {
    if (sortedCars.length === 0) {
      return [0, 0];
    }
    return sortedCars.reduce<[number, number]>(
      (acc, car) => [Math.min(acc[0], car.pricePerDay), Math.max(acc[1], car.pricePerDay)],
      [Number.POSITIVE_INFINITY, 0]
    );
  }, [sortedCars]);

  const convertedMinPrice = (minPrice * rates[currency]).toFixed(0);
  const convertedMaxPrice = (maxPrice * rates[currency]).toFixed(0);
  const resultsLabelTemplate =
    minPrice === maxPrice ? resultsLabelSingle : resultsLabelRange;
  const resultsLabel = resultsLabelTemplate
    .replace("{count}", String(sortedCars.length))
    .replace("{min}", convertedMinPrice)
    .replace("{max}", convertedMaxPrice)
    .replace("{currency}", currency)
    .replace("{perDay}", cardLabels.perDay);
  const showClearFilters =
    searchQuery.trim().length > 0 ||
    active !== "all" ||
    sortOption !== "featured";

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div className="space-y-2">
            <Label htmlFor={searchInputId} className="text-foreground">
              {searchLabel}
            </Label>
            <Input
              id={searchInputId}
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-foreground">{sortLabel}</Label>
            <Select
              value={sortOption}
              onValueChange={(value) => setSortOption(value as SortOption)}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">{sortOptions.featured}</SelectItem>
                <SelectItem value="priceLow">{sortOptions.priceLow}</SelectItem>
                <SelectItem value="priceHigh">{sortOptions.priceHigh}</SelectItem>
                <SelectItem value="newest">{sortOptions.newest}</SelectItem>
                <SelectItem value="name">{sortOptions.name}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
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

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>{sortedCars.length > 0 ? resultsLabel : noResultsLabel}</span>
          {showClearFilters && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActive("all");
                setSortOption("featured");
              }}
              className="font-semibold text-primary transition hover:text-primary/80"
            >
              {clearFiltersLabel}
            </button>
          )}
        </div>
      </div>

      {sortedCars.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border bg-card/60 p-8 text-center sm:p-12">
          <p className="text-lg font-semibold text-foreground">
            {noResultsLabel}
          </p>
          {showClearFilters && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActive("all");
                setSortOption("featured");
              }}
              className="mt-4 inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              {clearFiltersLabel}
            </button>
          )}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              labels={cardLabels}
              categoryLabel={filterLabels[car.category]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
