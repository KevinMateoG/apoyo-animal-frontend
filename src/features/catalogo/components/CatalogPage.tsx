import {
  CtaBox,
  CtaDescription,
  CtaTitle,
} from "@/src/features/common/components/CtaBox";
import {
  HeroDescription,
  HeroTitle,
  SectionEyebrow,
} from "@/src/features/common/components/Headings";
import SiteFooter from "@/src/features/common/components/SiteFooter";
import type { Animal } from "../domain/animal";
import CatalogBrowser from "./CatalogBrowser";

export default function CatalogPage({ animals }: { animals: Animal[] }) {
  return (
    <>
      <main className="grow">
        <CatalogBrowser animals={animals}>
          <SectionEyebrow>Custodia individualizada</SectionEyebrow>
          <HeroTitle>Ejemplares residentes</HeroTitle>
          <HeroDescription>
            Cada individuo cuenta con una pauta biomédica y seguimiento
            nutricional personalizado. Al apadrinar con nombre propio, solventas
            de forma directa su estancia, enriquecimiento ambiental y medicina
            preventiva.
          </HeroDescription>
        </CatalogBrowser>

        <section className="mx-auto max-w-[var(--max-w)] px-[var(--space-lg)] pb-[var(--space-2xl)] pt-[var(--space-xl)]">
          <CtaBox>
            <div>
              <CtaTitle>¿Por qué apadrinar de forma individualizada?</CtaTitle>
              <CtaDescription>
                Al apadrinar a un animal específico, aseguras la continuidad
                estricta de sus tratamientos clínicos y sus complementos
                biológicos. Cada trimestre remitimos un balance con su peso,
                progreso conductual y fotografías actualizadas.
              </CtaDescription>
            </div>
          </CtaBox>
        </section>
      </main>

      <SiteFooter>
        <span>Colaboraciones Salvajes</span>
        <p>
          Iniciativa de custodia responsable para la preservación de especies
          amenazadas y atención veterinaria continuada.
        </p>
      </SiteFooter>
    </>
  );
}

