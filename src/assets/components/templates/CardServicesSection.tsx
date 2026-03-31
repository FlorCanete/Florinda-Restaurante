import { ServiceCard, type RestaurantCardProps } from "../organisms/ServiceCard";

interface ServiceCardsSectionProps {
  cards: RestaurantCardProps[];
}

export const ServiceCardsSection = ({ cards }: ServiceCardsSectionProps) => (
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
    {cards.map((card) => (
      <ServiceCard key={card.title} {...card} />
    ))}
  </section>
);