import { ServiceCard, type RestaurantCardProps } from "../organisms/ServiceCard";

interface ServiceCardsSectionProps {
  cards: RestaurantCardProps[];
}

export const MenuRestaurant = ({ cards }: ServiceCardsSectionProps) => (
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 h-full">
    {cards.map((card) => (
      <ServiceCard key={card.title} {...card} />
    ))}
  </section>
);