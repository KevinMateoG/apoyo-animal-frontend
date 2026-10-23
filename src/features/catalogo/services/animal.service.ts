import type { Animal } from "../domain/animal";
import { ANIMALS_MOCK } from "./mocks/animals.mock";

export async function getAnimals(): Promise<Animal[]> {
  return ANIMALS_MOCK;
}

