import { SectionTemplate } from "../templates/SectionTemplate";
import { Text } from "../atoms/Text";
import { InformationCard, type InformationCardProps } from "./InformationCard";

interface OurActionSectionProps {
  ourActions: InformationCardProps[];
}

export function OurActionsSection({ ourActions }: OurActionSectionProps) {
    return (
        <SectionTemplate additionalClassName="bg-linear-to-r from-[#1D2C24] to-[#18231D]">
            <Text variant='h2' as="h2">Nuestras Acciones Concretas</Text>
            <Text variant='p' as="p" className="text-white">
                Transformamos nuestra filosofia en acciones tangiebles que protegen la biodiversidad
            </Text>

            <div className="flex flex-col md:flex-row gap-5 justify-items-center m-auto max-w-300">
                {ourActions.map((ourAction) => (
                    <InformationCard  key={ourAction.title} {...ourAction} />
                ))}
            </div>
        </SectionTemplate>
    )
}