import { Text } from "../atoms/Text";
import { SectionTemplate } from "../templates/SectionTemplate";
import { ScrollText } from "lucide-react";
import imageLegacy from '../../images/restaurant.png'

export function LegacySection() {
    return (
        <>
            <SectionTemplate>
                <div className="grid md:grid-cols-2 gap-10 md:px-20 justify-items-center">
                    <div className="flex flex-col gap-5 flex-1">
                        <div className="flex justify-start items-center gap-2">
                            <ScrollText className="text-[#36E27B]"/>

                            <Text as="small" variant="small" className="text-[#36E27B] font-bold tracking-widest uppercase">
                                Nuestra Historia
                            </Text>
                        </div>
                        <Text as="h2" variant="h2" >Legado Familiar</Text>
                        <Text as="p" variant="p" className="text-white">
                            Con mas de 30 anos en el corazon del Parque Nacional Iguazu, Florinda es el legado de una tradicion familiar dedicada a la hospitalidad. Nuestra cocina es el homenaje a los sabores de la tierra, preparados con la paciencia que exige la excelencia
                        </Text>
                        <Text as="p" variant="p" className="text-white">
                            Cada plato cuenta una historia de generaciones, fusionando las tecnicas ancestrales de la parrilla argentina con los ingredientes autoctonos de la selva misionera
                        </Text>

                        <div className="flex gap-10 mt-10 justify-center">
                            <div className="border-l-2 border-[#36E27B] pl-4">
                                <p className="text-white text-3xl font-black">30+</p>
                                <p className="text-[#9aaa8e] text-xs tracking-wide">Años de trayectoria</p>
                            </div>

                            <div className="w-0.5 bg-[#2a3320]" />

                            <div>
                                <p className="text-white text-3xl font-black">1M+</p>
                                <p className="text-[#9aaa8e] text-xs tracking-wide">Visitantes felices</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:ml-20 relative rounded-2xl max-h-120 max-w-80 before:content-[''] before:absolute before:-bottom-3 before:-right-3 before:w-full before:h-full before:rounded-2xl before:border  before:border-[#36E27B]/40 before:z-0">
                        <img src={imageLegacy} alt="Interior del restaurante" className="md:ml-10 h-full object-cover rounded-2xl relative z-10"/>
                    </div>
                </div>
            </SectionTemplate>
        </>
    );
}