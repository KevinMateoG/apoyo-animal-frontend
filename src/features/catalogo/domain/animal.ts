export type AnimalType = "tejon melero" | "panda rojo" | "león marino";
export type AnimalGender = "Macho" | "Hembra";
export type AnimalCategory = "tejon" | "red-panda" | "seal-lion";
export type AnimalFilter = "all" | AnimalCategory;

export interface Animal {
  id: string;
  name: string;
  typeAnimal: AnimalType;
  age: number;
  gender: AnimalGender;
  description: string;
}

const ANIMAL_TYPES: Record<
  AnimalType,
  { category: AnimalCategory; image: string }
> = {
  "tejon melero": { category: "tejon", image: "/tejon-melero.jpg" },
  "panda rojo": { category: "red-panda", image: "/panda-rojo.jpg" },
  "león marino": { category: "seal-lion", image: "/sea-lion.png" },
};

export const ANIMAL_FILTERS: { value: AnimalFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "tejon", label: "Tejon de la miel" },
  { value: "seal-lion", label: "Leon marino" },
  { value: "red-panda", label: "Panda rojo" },
];

export const toAnimalId = (name: string) =>
  name.toLowerCase().replaceAll(" ", "-");

export const getAnimalImage = (type: AnimalType) => ANIMAL_TYPES[type].image;

export const getAnimalCategory = (type: AnimalType) =>
  ANIMAL_TYPES[type].category;

export function filterAnimals(animals: Animal[], filter: AnimalFilter) {
  if (filter === "all") return animals;
  return animals.filter((a) => getAnimalCategory(a.typeAnimal) === filter);
}

