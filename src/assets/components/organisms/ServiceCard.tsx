import { ArrowRight } from "lucide-react";
import { Text } from "../atoms/Text";
import { AppLinks } from "../atoms/navLink/NavLink";

export interface RestaurantCardProps {
  category: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  imageUrl: string;
}

export const ServiceCard = (
  {
    category,
    title,
    description,
    linkLabel,
    linkHref,
    imageUrl,
  }: RestaurantCardProps) => {
  return (
    <article className="relative cursor-pointer rounded-4xl min-h-120 md:min-w-100 flex flex-col justify-end gap-2 border border-[#3d3f38] overflow-hidden p-5">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 flex flex-col gap-2">
        <Text as="h3" variant="h3" className="font-bold">{title}</Text>
        <Text as="p" variant="p" className="text-[#CCCCCC]">{description}</Text>
        <AppLinks as="Link" to={linkHref} variant="link_underline" aditionalClassName="flex items-center gap-1 font-bold text-[#36E27B]">
          {linkLabel} <ArrowRight size={16} />
        </AppLinks>
      </div>
    </article>
  )
}