import { SectionTemplate } from "../templates/SectionTemplate";
import ImageInspiration from '../../images/cataratasIguazu.png'
import { Text } from "../atoms/Text";
import { MapPin } from "lucide-react";

export function InspirationSection() {
    return (
        <SectionTemplate>
            <div className="flex  gap-15 flex-wrap items-start justify-center">
                <div className="relative">
                    <img src={ImageInspiration} alt="" className="rounded-2xl max-h-120"/>
                    <Text variant="span" as="span" className='absolute bottom-0 left-0 text-[#585858] p-2 flex items-center gap-1'>
                        <MapPin /> Cataratas del Iguazu, Argentina
                    </Text>
                </div>

                <div className="max-w-140">
                    <Text variant='h2' as="h2" className='PlayFair'>La Selva Iguazu <span className='text-yellow-700'>es nuestra inspiracion.</span></Text>

                    <Text variant='p' as="p" className="text-white mt-5">
                        No solo cocinamos en la selva, somos parte de ella. Cada decision que tomamos en Florinda esta guiada por el respeto profundo hacia el ecosistema que nos ecoge.
                    </Text>
                     <Text variant='p' as="p" className="text-white mt-5">
                        Desde el manejo de resuidos hasta la educacion de nuestros visitantes, cada accion es una oportunidad para proteger y celebrar la biodiversidad unica de Iguazu.
                    </Text>
                </div>
            </div>
        </SectionTemplate>
    )}