import type { Metadata } from "next";
import { getAnimals } from "@/src/features/catalogo/services/animal.service";
import SponsorshipPage from "@/src/features/interaccion/components/SponsorshipPage";

export const metadata: Metadata = { title: "Apadrinar y donar" };

export default async function Page() {
  const animals = await getAnimals();
  return <SponsorshipPage animals={animals} />;
}

