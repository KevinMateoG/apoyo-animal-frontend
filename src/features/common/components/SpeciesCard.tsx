import Image from "next/image";
import Link from "next/link";

export interface Species {
  scientificName: string;
  usualName: string;
  description: string;
  dataMorphology: string;
  dataHabitat: string;
  dataDiet: string;
  imageUrl?: string;
}

export default function SpeciesCard({ species }: { species: Species }) {
  const imageSrc =
    species.imageUrl ||
    `/${species.scientificName.toLowerCase().replace(/\s+/g, "-")}.jpg`;

  return (
    <article className="group flex flex-col gap-[var(--space-sm)] rounded-[var(--radius-2xl)] border border-[var(--clr-border)] bg-[color-mix(in_srgb,var(--clr-bg)_60%,var(--clr-surface-card))] p-[var(--space-lg)] transition-[border-color,background] duration-300 ease-in-out hover:border-[var(--clr-text-muted)]">
      <header>
        <div className="relative mb-[var(--space-xs)] aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--clr-bg-elevated)]">
          <Image
            src={imageSrc}
            alt={species.usualName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="mb-[0.15rem]">
          <span className="font-[family-name:var(--font-serif)] text-[0.75rem] italic text-[var(--clr-text-muted)]">
            {species.scientificName}
          </span>
        </div>
      </header>

      <h3 className="font-[family-name:var(--font-serif)] text-[1.15rem] font-normal text-[var(--clr-text)]">
        {species.usualName}
      </h3>

      <p className="text-[0.8rem] font-light leading-[1.65] text-[var(--clr-text-secondary)]">
        {species.description}
      </p>

      <div className="flex flex-col border-t border-[var(--clr-border)] pt-[var(--space-sm)]">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.04em] text-[var(--clr-text)]">
          Morfología
        </span>
        <span className="mt-[0.1rem] text-[0.78rem] font-light text-[var(--clr-text-muted)]">
          {species.dataMorphology}
        </span>
      </div>

      <div className="flex flex-col border-t border-[var(--clr-border)] pt-[var(--space-sm)]">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.04em] text-[var(--clr-text)]">
          Hábitat
        </span>
        <span className="mt-[0.1rem] text-[0.78rem] font-light text-[var(--clr-text-muted)]">
          {species.dataHabitat}
        </span>
      </div>

      <div className="flex flex-col border-t border-[var(--clr-border)] pt-[var(--space-sm)]">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.04em] text-[var(--clr-text)]">
          Dieta
        </span>
        <span className="mt-[0.1rem] text-[0.78rem] font-light text-[var(--clr-text-muted)]">
          {species.dataDiet}
        </span>
      </div>

      <div className="border-t border-[var(--clr-border)] pt-[var(--space-sm)]">
        <Link
          href="/catalogo"
          className="inline-block text-[0.78rem] font-medium text-[var(--clr-primary)] [transition:opacity_var(--transition)] hover:underline hover:opacity-75"
        >
          Ver ejemplares de {species.usualName.toLowerCase()}
        </Link>
      </div>
    </article>
  );
}
