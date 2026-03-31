import { SectionTemplate } from "../templates/SectionTemplate";
import { Text } from "../atoms/Text";
import { InformationCard, type InformationCardProps } from "./InformationCard";


interface PillarsSectionProps {
  pillars: InformationCardProps[];
}

export function PillarsCardsSection({ pillars }: PillarsSectionProps) {
  return (
    <SectionTemplate>
        <div>
            <Text as="h2" variant="h2">
                Nuestros Pilares de Calidad
            </Text>
            <Text as="p" variant="p" className="text-[#9aaa8e] text-sm mt-3 max-w-lg">
                La excelencia es un acto, un hábito. Estos son los tres fundamentos que respaldan nuestra propuesta.
            </Text>
        </div>

        <div className="grid md:grid-cols-3 gap-5 justify-items-center m-auto ">
            {pillars.map((pillar) => (
                <InformationCard  key={pillar.title} {...pillar} />
            ))}
        </div>
      </SectionTemplate>
  )
}