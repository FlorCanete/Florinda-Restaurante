import { MapPin, Trees } from 'lucide-react'
import { AppLinks } from '../atoms/navLink/NavLink'

export function LocationActions() {
  return (
    <div className="flex gap-3">
      <AppLinks as="ExternalLink" variant="button_primary" to="https://maps.google.com/?q=Viejo+Hotel+Cataratas" aditionalClassName='w-full'>
        <MapPin className="w-5 h-5" /> Cómo llegar
      </AppLinks>
      <AppLinks as="ExternalLink" variant="button_secondary" to="https://maps.google.com/?q=Parque+Nacional+Iguazú" aditionalClassName='w-full text-center items-center justify-center'>
        <Trees className="w-8 h-8" /> Ver Mapa Completo
      </AppLinks>
    </div>
  )
}