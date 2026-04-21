import '../App.css'
import { Text } from '../assets/components/atoms/Text'
import { MapPin, Utensils } from 'lucide-react'
import ImageHero from '../assets/images/asado.png'
import { ServiceCardsSection } from '@/assets/components/templates/CardServicesSection'
import { serviceCards } from '@/assets/data/servicesCards'
import { Hero } from '@/assets/components/organisms/Hero'
import { LocationMap } from '@/assets/components/organisms/LocationMap'
import { AppLinks } from '@/assets/components/atoms/navLink/NavLink'

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

        <section className="h-auto px-7 md:px-15 py-20 flex flex-col gap-10 bg-[#192B21]">
            <div className='flex flex-col md:flex-row justify-between items-center gap-1 border-[#3d3f38] pb-8'>
                <div className='flex flex-col gap-6 justify-center'>

                    <Text as='h2' variant='h2'>En el corazon de la maravilla natural</Text>

                    <article className='flex gap-6 items-center'>
                        <div className="bg-[#1D392A] w-12 h-12 flex justify-center items-center rounded-full">
                            <MapPin className='text-[#36E27B]' />
                        </div>
                        <div className="">
                            <Text as="p" variant="p" className='text-white font-bold'>Ubicacion privilegiada</Text>
                            <Text as="small" variant="small"> Dentro del Parque Nacional Iguazu, a metros de los circulos</Text>
                        </div>
                    </article>

                    <article className='flex gap-6 items-center'>
                        <div className="bg-[#1D392A] w-12 h-12 flex justify-center items-center rounded-full">
                            <MapPin className='text-[#36E27B]' />
                        </div>
                        <div className="">
                            <Text as="p" variant="p" className='text-white font-bold'>Horarios</Text>
                            <Text as="small" variant="small">Abierto todos los dias de 11:00 a 18:00 y cenas con reserva</Text>
                        </div>
                    </article>

                    <AppLinks to="/location" variant="link_underline" aditionalClassName="uppercase text-white font-bold mt-4 decoration-[#36E27B] hover:decoration-[#2fd16d]">
                        Ver mapa completo
                    </AppLinks>
                </div>
                <div className="h-140 w-230 rounded-lg overflow-hidden">
                    <LocationMap />
                </div>
            </div>

        </section>
    </>
  )
}

export default Home
