import { LegacySection } from "@/assets/components/organisms/LegacySection";
import { Hero } from "@/assets/components/organisms/Hero";
import ImageHero from '../assets/images/our.png'
import { QuoteSection } from "@/assets/components/organisms/QuoteSection";
import { PillarsCardsSection } from "@/assets/components/organisms/PillarCardSection";
import { pillarCardData } from "@/assets/data/PillarCardData";
import { GallerySection } from "@/assets/components/organisms/GallerySection";


export default function Our() {
    return (
        <>
            <Hero
                image={ImageHero}
                altText='Imagen de los empleadores del restaurante Florinda'
                title='Una historia de pasion y excelencia'
                description='Donde la selva se encuentra con el fuego, nace una historia de pasion y excelencia. Florinda Restaurante es el legado de una familia dedicada a la hospitalidad, fusionando sabores autenticos con un compromiso inquebrantable con la calidad y la sostenibilidad en el corazon de Iguazu'
            >
            </Hero>
            <LegacySection></LegacySection>
            <QuoteSection></QuoteSection>
            <PillarsCardsSection pillars={pillarCardData} ></PillarsCardsSection>
            <GallerySection></GallerySection>
        </>
    )
}