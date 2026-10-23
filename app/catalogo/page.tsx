import type { Metadata } from "next";
import CatalogPage from "@/src/features/catalogo/components/CatalogPage";
import { getAnimals } from "@/src/features/catalogo/services/animal.service";

export const metadata: Metadata = { title: "Ejemplares" };

export default async function Page() {
  const animals = await getAnimals();
  return <CatalogPage animals={animals} />;
}
