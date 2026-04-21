// data/serviceCards.ts
import type { RestaurantCardProps } from "../components/organisms/ServiceCard";

import ImagenExperience1 from "../../assets/images/asadoExperiencia.png";
import ImagenExperience2 from "../../assets/images/coctel.png";
import ImagenExperience3 from "../../assets/images/evento.png";


export const MenuCardData: RestaurantCardProps[] = [
  {
    category: "",
    title: "Florinda Parrilla",
    description: "El ritual del asado argentino en su maxima expresion. Buffet regional y cortes premium a la brasa para una experiencia culinaria unica en la selva.",
    linkLabel: `Ver Carta de Vinos & Carnes`,
    linkHref: "#carta",
    imageUrl: ImagenExperience1,
  },
  {
    category: "",
    title: "Buffet Florinda",
    description: "Sabores de la tierra. Una propuesta buffet diseñada para los paladares que buscan la esencia misionera y natural.",
    linkLabel: "Explorar Buffet",
    linkHref: "#buffet",
    imageUrl: ImagenExperience2,
  },
  {
    category: "",
    title: "Bar Florinda",
    description: "Sabor real en tiempo record. La opcion ideal para disfrutar de un bocado delicioso sin perder tiempo, con la calidad y el sabor que nos caracteriza.",
    linkLabel: "Ver opciones Rapidas",
    linkHref: "#comida_Rapida",
    imageUrl: ImagenExperience3,
  },
];
