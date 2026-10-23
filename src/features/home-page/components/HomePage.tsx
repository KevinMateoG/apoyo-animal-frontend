import { ButtonLink } from "@/src/features/common/components/Button";
import {
  CtaBox,
  CtaDescription,
  CtaTitle,
} from "@/src/features/common/components/CtaBox";
import {
  HeroDescription,
  HeroTitle,
  SectionEyebrow,
  SectionSubtitle,
  SectionTitle,
} from "@/src/features/common/components/Headings";
import SiteFooter from "@/src/features/common/components/SiteFooter";
import SpeciesCard from "@/src/features/catalogo/components/SpeciesCard";
import type { Species } from "@/src/features/catalogo/domain/species";

export default function HomePage({ species }: { species: Species[] }) {
  return (
    <>
      <main className="grow">
        <section className="mx-auto max-w-[var(--max-w)] px-[var(--space-lg)] py-[var(--space-3xl)]">
          <div className="flex max-w-[42rem] flex-col gap-[var(--space-lg)]">
            <HeroTitle>Protege la vida silvestre: Apadrina hoy</HeroTitle>
            <HeroDescription>
              Descubre el fascinante mundo de nuestra fauna rescatada. Con tu
              apadrinamiento, no solo aprendes sobre el hábitat natural, la
              dieta y las características físicas de especies únicas como el
              tejón melero, el panda rojo y el león marino, sino que financias
              directamente su cuidado diario. Conviértete en su mayor aliado.
            </HeroDescription>
            <ButtonLink href="/catalogo">Ver animales para apadrinar</ButtonLink>

            <div className="flex gap-[var(--space-2xl)] border-t border-[var(--clr-border)] pt-[var(--space-lg)]">
              <Stat value="100%" label="Alimentación natural" />
              <Stat value="24/7" label="Monitoreo médico" />
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--clr-border)] bg-[var(--clr-surface-white)] py-[var(--space-3xl)] transition-colors duration-300">
          <div className="mx-auto mb-[var(--space-2xl)] max-w-[var(--max-w)] px-[var(--space-lg)]">
            <SectionEyebrow>Biodiversidad en Custodia</SectionEyebrow>
            <SectionTitle>Especies Representativas</SectionTitle>
            <SectionSubtitle>
              Fichas biológicas de las tres especies clave que estructuran
              nuestros programas de conservación
            </SectionSubtitle>
          </div>

          <div className="mx-auto grid max-w-[var(--max-w)] grid-cols-1 gap-[var(--space-xl)] px-[var(--space-lg)] md:grid-cols-3">
            {species.map((item) => (
              <SpeciesCard key={item.id} species={item} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[var(--max-w)] px-[var(--space-lg)] py-[var(--space-2xl)]">
          <CtaBox>
            <div>
              <CtaTitle>¿Listo para formar parte de la reserva?</CtaTitle>
              <CtaDescription>
                Inicia tu apadrinamiento hoy. Cada donación respalda nutrición
                clínica y hábitats protegidos.
              </CtaDescription>
            </div>
            <div>
              <ButtonLink href="/apadrinar">Comenzar Apadrinamiento</ButtonLink>
            </div>
          </CtaBox>
        </section>
      </main>

      <SiteFooter>
        <div className="flex items-center gap-[var(--space-xs)] text-[0.8rem] font-light text-[var(--clr-text-muted)]">
          <span className="font-medium text-[var(--clr-text)]">
            Colaboraciones Salvajes
          </span>
          <span>Reserva Biológica Certificada</span>
        </div>
        <div className="flex gap-[var(--space-lg)] text-[0.8rem] font-light text-[var(--clr-text-muted)]">
          <span className="cursor-pointer [transition:color_var(--transition)] hover:text-[var(--clr-text)]">
            Privacidad
          </span>
          <span className="cursor-pointer [transition:color_var(--transition)] hover:text-[var(--clr-text)]">
            Transparencia y contacto
          </span>
        </div>
      </SiteFooter>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-[family-name:var(--font-serif)] text-[1.5rem] font-normal leading-none text-[var(--clr-text)]">
        {value}
      </p>
      <p className="mt-1 text-[0.7rem] uppercase tracking-[0.08em] text-[var(--clr-text-muted)]">
        {label}
      </p>
    </div>
  );
}
