import { Text } from "../atoms/Text";
import { LocationItem } from "../molecules/LocationItems";
import { LocationActions } from "../molecules/LocationAction";
import { MapPin } from 'lucide-react'

export function LocationCard() {
    return (
        <>
            <div className="absolute bottom-10 h-auto md:top-1/2 md:-translate-y-1/2 md:left-10 z-10 backdrop-blur-sm border border-[#2a3320] bg-[#0e1409]/50 rounded-2xl p-8 max-w-xs md:max-w-md flex flex-col gap-6">
                <Text as="p" variant="p" className="text-center text-[#36E27B]  font-semibold tracking-wide">
                    - Ubicacion Privilegiada -
                </Text>

                <Text as="h2" variant="h2" className="text-center text-white PlayFair-Italic ">
                    Estamos donde empieza la aventura.
                </Text>

                <hr className="border-gray-600" />

                <div className="flex flex-col gap-5">
                    <LocationItem
                        icon={<MapPin className="text-[#36E27B] w-5 h-5" />}
                        title="Parque Nacional Iguazú"
                        description="Ubicados estratégicamente dentro del parque, a pasos de los principales circuitos."
                    />
                    <LocationItem
                        icon={<MapPin className="text-[#36E27B] w-5 h-5" />}
                        title="Punto de Encuentro"
                        description="El descanso perfecto antes o después de visitar la Garganta del Diablo."
                    />
                </div>

                <LocationActions />
            </div>
        </>
    )
}