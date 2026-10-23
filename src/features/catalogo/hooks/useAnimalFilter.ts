"use client";

import { useMemo, useState } from "react";
import {
  type Animal,
  type AnimalFilter,
  filterAnimals,
} from "../domain/animal";

export function useAnimalFilter(animals: Animal[]) {
  const [filter, setFilter] = useState<AnimalFilter>("all");

  const visibleAnimals = useMemo(
    () => filterAnimals(animals, filter),
    [animals, filter],
  );

  return { filter, setFilter, visibleAnimals };
}

