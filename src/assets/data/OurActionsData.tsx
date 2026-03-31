
import { Text } from "../components/atoms/Text";
import type { InformationCardProps } from "../components/organisms/InformationCard";
import  {Leaf, GraduationCap } from "lucide-react";

export const ourActionsData: InformationCardProps[] = [
   {
    icon: <Leaf className="text-[#36E27B]"/>,
    title: "Gestion Responsable",
    description: (
      <>
        <Text as="p" variant="p">
          Minimizamos nuestra huella de carbono mediante procesos de reciclaje, compostaje y uso eficiente de recursos, contribuyendo a la conservación del entorno natural del Parque Nacional Iguazú.
        </Text>
          <ul className="list-disc ml-10">
            <li>Separacion de residuos</li>
            <li>Compostaje para fertilización</li>
            <li>Iluminacion led de bajo consumo</li>
          </ul>
      </>
    ),
  },
  {
    icon: <GraduationCap className="text-[#36E27B]"/>,
    title: "Conciencia Verde",
    description: (
      <>
        <Text as="p" variant="p">
          Educamos y actuamos para preservar la biodiversidad que nos rodea,
          involucrando a nuestros visitantes y a la comunidad local en la conservación.
        </Text>
        <ul className="list-disc ml-10">
          <li>Educación ambiental para clientes y empleados</li>
          <li>Proteccion de especies nativas</li>
          <li>Apoyo a guardaparques locales</li>
        </ul>
      </>
    ),
  },
]