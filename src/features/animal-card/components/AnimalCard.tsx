import Link from "next/link";
import Image from "next/image";

interface Animal {
  name: string;
  typeAnimal: string;
  age: number;
  gender: string;
  description: string;
  imageUrl?: string;
}

export default function AnimalCard({ animal }: { animal: Animal }) {
  const imageSrc =
    animal.imageUrl ||
    `/${animal.typeAnimal.toLowerCase().replace(/\s+/g, "-")}.jpg`;

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-[var(--clr-border)] bg-[var(--clr-surface-white)] [transition:border-color_var(--transition),background_var(--transition)] hover:border-[var(--clr-text-muted)]">
      <div>
        <header className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--clr-bg-elevated)]">
          <Image
            src={imageSrc}
            alt={animal.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <span className="absolute top-[var(--space-sm)] left-[var(--space-sm)] rounded-[var(--radius)] border border-[var(--clr-border)] bg-[color-mix(in_srgb,var(--clr-surface-white)_90%,transparent)] px-[0.625rem] py-1 text-[0.7rem] font-semibold uppercase tracking-[0.04em] text-[var(--clr-text)]">
            {animal.typeAnimal}
          </span>
        </header>
        <div className="p-[var(--space-lg)]">
          <div className="mb-[var(--space-sm)] flex items-baseline justify-between gap-[var(--space-sm)]">
            <h2 className="font-[family-name:var(--font-serif)] text-[1.5rem] font-normal leading-[1.2] text-[var(--clr-text)]">
              {animal.name}
            </h2>
            <span className="whitespace-nowrap text-[0.75rem] text-[var(--clr-text-muted)]">
              {animal.gender} - {animal.age}
            </span>
          </div>
          <p className="text-[0.8rem] font-light leading-[1.65] text-[var(--clr-text-secondary)]">
            {animal.description}
          </p>
        </div>
      </div>
      <div className="px-[var(--space-lg)] pb-[var(--space-lg)]">
        <Link
          href="/apadrinar"
          className="inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-[var(--radius-full)] border border-transparent bg-[var(--clr-primary)] px-5 py-[0.55rem] text-sm font-medium text-[var(--clr-primary-text)] [transition:background_var(--transition)] hover:bg-[var(--clr-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--clr-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--clr-bg)]"
        >
          Apadrinar a {animal.name}
        </Link>
      </div>
    </article>
  );
}
