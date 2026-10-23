"use client";

import type { ReactNode } from "react";
import { ANIMAL_FILTERS, type Animal } from "../domain/animal";
import { useAnimalFilter } from "../hooks/useAnimalFilter";
import AnimalCard from "./AnimalCard";

interface CatalogBrowserProps {
  animals: Animal[];
  children: ReactNode;
}

export default function CatalogBrowser({
  animals,
  children,
}: CatalogBrowserProps) {
  const { filter, setFilter, visibleAnimals } = useAnimalFilter(animals);

  return (
    <>
      <section className="mx-auto max-w-[var(--max-w)] border-b border-[var(--clr-border)] px-[var(--space-lg)] pb-[var(--space-xl)] pt-[var(--space-3xl)]">
        <div className="max-w-[42rem]">{children}</div>

        <div className="mt-[var(--space-xl)] flex flex-wrap items-center gap-[var(--space-sm)] border-t border-[var(--clr-border)] pt-[var(--space-lg)]">
          <div
            role="group"
            aria-label="Filtrar por especie"
            className="flex flex-wrap gap-[var(--space-xs)]"
          >
            {ANIMAL_FILTERS.map(({ value, label }) => {
              const isActive = filter === value;
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(value)}
                  className={`cursor-pointer rounded-[var(--radius-full)] border px-[0.85rem] py-[0.45rem] text-[0.75rem] font-medium [transition:background_var(--transition),border-color_var(--transition),color_var(--transition)] ${
                    isActive
                      ? "border-[var(--clr-primary)] bg-[var(--clr-primary)] text-[var(--clr-primary-text)]"
                      : "border-[var(--clr-border)] bg-[var(--clr-surface-white)] text-[var(--clr-text-secondary)] hover:border-[var(--clr-text-secondary)] hover:text-[var(--clr-text)]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[var(--max-w)] grid-cols-1 gap-[var(--space-xl)] px-[var(--space-lg)] sm:grid-cols-2 lg:grid-cols-3">
          {visibleAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>
    </>
  );
}

