import { ourActionsData } from '@/assets/data/OurActionsData'
import '../App.css'
import { Hero } from '../assets/components/organisms/Hero'
import ImageHero from '../assets/images/Selva.png'
import { InspirationSection } from '@/assets/components/organisms/InspirationSection'
import { OurActionsSection } from '@/assets/components/organisms/OurActionsSection'

function Ecoacciones() {
  return (
    <>
        <Hero
            image={ImageHero}
            altText='Imagen de comida del restaurante'
            tag='Responsabilidad Ambiental'
            title='Comprometidos con nuestro hogar'
            description='En el corazon de la Selva Iguazu, Florinda Restaurante no solo es un destino gastronomico, sino un compromiso vivo con la preservacion de este ecosistema unico. Nuestra filosofia de sostenibilidad se traduce en acciones concretas que protegen la biodiversidad y promueven un turismo responsable'
            actions
        >
        </Hero>

        <InspirationSection />

        <OurActionsSection ourActions={ourActionsData}/>
    </>
  )
}

export default Ecoacciones
