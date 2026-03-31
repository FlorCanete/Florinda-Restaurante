import { Text } from "../atoms/Text"

export interface InformationCardProps {
  title: string
  description: React.ReactNode
  icon: React.ReactNode
}

export function InformationCard({ title, description, icon }: InformationCardProps){
    return (
        <article className="bg-[#1C2620] border border-[#2a3320] rounded-2xl px-8 py-12 flex flex-col gap-6 hover:border-[#36E27B]/30 transition-colors duration-300 w-full">
            <div className="bg-[#1D392A] w-12 h-12 flex justify-center items-center rounded-full">
                {icon}
            </div>

            <Text as="h2" variant="h2">
                {title}
            </Text>

            <Text as="p" variant="p"  className="text-[#9aaa8e]">
                {description}
            </Text>
        </article>
    )
}