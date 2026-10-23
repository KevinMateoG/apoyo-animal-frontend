import type { Species } from "../domain/species";
import { SPECIES_MOCK } from "./mocks/species.mock";

export async function getSpecies(): Promise<Species[]> {
  return SPECIES_MOCK;
}

