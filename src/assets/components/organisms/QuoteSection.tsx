import { Quote } from "lucide-react";
import { SectionTemplate } from "../templates/SectionTemplate";
import { Text } from "../atoms/Text";

export function QuoteSection() {
    return (
        <>
            <SectionTemplate additionalClassName="items-center">
                <Quote className="text-white size-12"/>

                <blockquote className="text-white text-xl md:text-3xl font-semibold leading-snug max-w-3xl italic text-center">
                    "No solo servimos comida; garantizamos seguridad y frescura. Nos avalan los más altos estándares
                    internacionales de higiene y compromiso turístico."
                </blockquote>

                <div className="w-20 h-1 bg-[#36E27B] mt-4 rounded-full"></div>

                <Text as="p" variant="p" className="text-gray-300">Direccion General</Text>
            </SectionTemplate>
        </>
    )
}