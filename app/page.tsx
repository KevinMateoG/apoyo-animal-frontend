import HomePage from "@/src/features/home-page/components/HomePage";
import { getSpecies } from "@/src/features/catalogo/services/species.service";

export default async function Page() {
  const species = await getSpecies();
  return <HomePage species={species} />;
}
