import '../App.css'
import { Text } from '../assets/components/atoms/Text'
import { Utensils } from 'lucide-react'
import ImageHero from '../assets/images/asado.png'
import { ServiceCardsSection } from '@/assets/components/templates/CardServicesSection'
import { serviceCards } from '@/assets/data/servicesCards'
import { LocationSection } from '@/assets/components/templates/LocationSection'
import { Hero } from '@/assets/components/organisms/Hero'

function Home() {

  return (
    <>
        <Hero
            image={ImageHero}
            altText='Imagen de comida del restaurante'
            tag='Parque Nacional Iguazu'
            title='Donde la selva se encuentra con el fuego'
            description='Vivi la experiencia gastronomica mas iconica de las Cataratas del Iguazu. Sabores autenticos, tradicion parrillera y un entorno natural unico'
            actions
        >
        </Hero>

        <section className="h-auto px-7 md:px-15 py-20 flex flex-col gap-10">
            <div className='flex flex-wrap justify-between items-end gap-1 border-b-1 border-[#3d3f38] pb-8'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Utensils className='text-[#36E27B] w-5 h-5'/>
                        <Text as="small" variant="small" className='text-[#36E27B] font-black text-md tracking-widest underline'>Nuestra Propuesta</Text>
                    </div>

                    <Text as='h2' variant='h2'>Experiencias Unicas</Text>
                </div>

                <Text as="small" variant="small" className='w-120'>Desde cortes premium hasta cocteles de autor, diseñados para complementar la majestuosidad de la selva.</Text>
            </div>

            <ServiceCardsSection cards={serviceCards} />
        </section>

        <LocationSection />
    </>
  )
}

export default Home
