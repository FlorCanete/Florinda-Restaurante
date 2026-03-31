import { Text } from "../atoms/Text"

interface LocationItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function LocationItem({ icon, title, description }: LocationItemProps) {
  return (
    <div className="gap-3 hidden md:flex">
      <div className="mt-1 shrink-0">{icon}</div>
        <div>
            <Text as="p" variant="p" className="text-white font-semibold text-sm hidden md:block">
                {title}
            </Text>
            <Text as="p" variant="p" className="text-[#9aaa8e] text-xs mt-1">
                {description}
            </Text>
        </div>
    </div>
  )
}