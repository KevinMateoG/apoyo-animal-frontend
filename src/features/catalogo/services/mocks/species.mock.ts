import type { Species } from "../../domain/species";

export const SPECIES_MOCK: Species[] = [
  {
    id: "mellivora-capensis",
    scientificName: "Mellivora capensis",
    usualName: "Tejón Melero",
    description:
      "Mustélido renombrado por su notable resistencia inmunológica, cuero elástico de alta densidad e instinto exploratorio.",
    dataMorphology: "9–14 kg, manto dorsal gris plata y garras de 4 cm.",
    dataHabitat: "Sabana seca, matorrales semiáridos y áreas de roca.",
    dataDiet: "Omnívoro oportunista: miel, raíces, larvas y reptiles.",
    imageUrl: "/tejon-melero.jpg",
    catalogLinkLabel: "ver ejemplares de tejon",
  },
  {
    id: "ailurus-fulgens",
    scientificName: "Ailurus fulgens",
    usualName: "Panda Rojo",
    description:
      "Mamífero arborícola exclusivo de los bosques nubosos del Himalaya, vital para la dispersión de semillas de altura.",
    dataMorphology: "4–6 kg, pelaje castaño rojizo y falso pulgar prensil.",
    dataHabitat: "Bosques templados con sotobosque de bambú (2.200 m).",
    dataDiet: "95% brotes y follaje de bambú, bayas y líquenes frescos.",
    imageUrl: "/panda-rojo.jpg",
    catalogLinkLabel: "ver ejemplares del panda rojo",
  },
  {
    id: "zalophus-californianus",
    scientificName: "Zalophus californianus",
    usualName: "León Marino",
    description:
      "Depredador costero fundamental para regular las comunidades de peces marinos y evaluar la salud del litoral.",
    dataMorphology: "100–300 kg, aletas propulsoras y denso pelaje impermeable.",
    dataHabitat: "Playas protegidas, bahías rocosas e islas del Pacífico.",
    dataDiet: "Arenque, calamar y jurel de captura sustentable.",
    imageUrl: "/sea-lion.png",
    catalogLinkLabel: "ver ejemplares del león marino",
  },
];

