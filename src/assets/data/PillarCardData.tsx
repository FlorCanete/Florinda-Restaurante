
import type { InformationCardProps } from "../components/organisms/InformationCard";
import  {Leaf, ShieldPlus, UtensilsCrossed} from "lucide-react";

export const pillarCardData: InformationCardProps[] = [
   {
    icon: <UtensilsCrossed className="text-[#36E27B]"/>,
    title: "Sello CocinAR",
    description: "Reconocido por el plan de turismo gastronómico del Ministerio de Turismo y Deportes de Argentina, garantizando calidad y autenticidad en cada plato.",
  },
  {
    icon: <Leaf className="text-[#36E27B]"/>,
    title: "Sostenibilidad",
    description: "Comprometidos con las directrices de sostenibilidad turistica, implementando prácticas responsables para preservar el entorno natural del Parque Nacional Iguazú. ",
  },
  {
    icon: <ShieldPlus className="text-[#36E27B]"/>,
    title: "Seguridad e Higiene",
    description: "Estructuras de manipulación de alimentos para garantizar la máxima frescura y seguridad en cada plato.",
  },
]