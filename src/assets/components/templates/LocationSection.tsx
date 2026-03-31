import { LocationCard } from '../organisms/LocationCard'
import { LocationMap } from '../organisms/LocationMap'

export function LocationSection() {
    return (
        <section className="relative h-screen">
            <LocationMap />
            <LocationCard />
        </section>
    )
}