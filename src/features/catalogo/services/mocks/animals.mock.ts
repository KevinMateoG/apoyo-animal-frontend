import { type Animal, toAnimalId } from "../../domain/animal";

type AnimalData = Omit<Animal, "id">;

const DATA: AnimalData[] = [
  {
    name: "Rosi",
    typeAnimal: "tejon melero",
    age: 2,
    gender: "Hembra",
    description: "Dieta enriquecida con miel pura y raíces silvestres.",
  },
  {
    name: "Boc",
    typeAnimal: "panda rojo",
    age: 3,
    gender: "Macho",
    description: "prioriza brotes de bambú tierno seleccionados",
  },
  {
    name: "Nami",
    typeAnimal: "león marino",
    age: 4,
    gender: "Hembra",
    description:
      "Disfruta nadar a alta velocidad y alimentarse con pescado fresco.",
  },
  {
    name: "Kabu",
    typeAnimal: "tejon melero",
    age: 5,
    gender: "Macho",
    description:
      "Muy activo y curioso, explora constantemente los refugios del recinto.",
  },
  {
    name: "Mei",
    typeAnimal: "panda rojo",
    age: 1,
    gender: "Hembra",
    description:
      "Suele descansar en las ramas altas tras consumir sus hojas de bambú.",
  },
  {
    name: "Tritón",
    typeAnimal: "león marino",
    age: 6,
    gender: "Macho",
    description:
      "Responde bien al entrenamiento de enriquecimiento con pelotas acuáticas.",
  },
  {
    name: "Bruno",
    typeAnimal: "tejon melero",
    age: 3,
    gender: "Macho",
    description:
      "Posee un carácter audaz y le encanta cavar en su zona de tierra.",
  },
  {
    name: "Jin",
    typeAnimal: "panda rojo",
    age: 2,
    gender: "Macho",
    description:
      "Prefiere las horas frescas de la mañana para comer sus frutos secos.",
  },
  {
    name: "Cora",
    typeAnimal: "león marino",
    age: 3,
    gender: "Hembra",
    description: "Le gusta tomar el sol sobre las rocas después de nadar.",
  },
  {
    name: "Zuri",
    typeAnimal: "tejon melero",
    age: 4,
    gender: "Hembra",
    description:
      "Inspecciona metódicamente cada rincón en busca de raíces e insectos.",
  },
  {
    name: "Ling",
    typeAnimal: "panda rojo",
    age: 5,
    gender: "Hembra",
    description:
      "Tranquila y trepadora ágil; adora los brotes más suaves del día.",
  },
];

export const ANIMALS_MOCK: Animal[] = DATA.map((animal) => ({
  ...animal,
  id: toAnimalId(animal.name),
}));

