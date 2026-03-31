// data/serviceCards.ts
import type { RestaurantCardProps } from "../components/organisms/ServiceCard";

import ImagenExperience1 from "../../assets/images/asadoExperiencia.png";
import ImagenExperience2 from "../../assets/images/coctel.png";
import ImagenExperience3 from "../../assets/images/evento.png";


export const serviceCards: RestaurantCardProps[] = [
  {
    category: "",
    title: "Parrilla Argentina",
    description: "Cortes premium, asados a la leña en el corazón de la selva. Una tradición de fuego y sabor.",
    linkLabel: `Ver Carta`,
    linkHref: "#carta",
    imageUrl: ImagenExperience1,
  },
  {
    category: "",
    title: "Bar de Autor",
    description: "Cocteles inspirados en los sabores locales, hierbas de la selva y vistas únicas.",
    linkLabel: "Ver Tragos",
    linkHref: "#tragos",
    imageUrl: ImagenExperience2,
  },
  {
    category: "",
    title: "Eventos Exclusivos",
    description: "Celebra momentos inolvidables en un entorno mágico rodeado de naturaleza.",
    linkLabel: "Cotizar Eventos",
    linkHref: "#eventos",
    imageUrl: ImagenExperience3,
  },
];
