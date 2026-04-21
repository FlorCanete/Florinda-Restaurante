import { LocationCard } from '../organisms/LocationCard'
import { LocationMap } from '../organisms/LocationMap'

export function LocationTemplate() {
    return (
        <section className="relative h-screen">
            <LocationMap />
            <LocationCard />
        </section>
    )
}