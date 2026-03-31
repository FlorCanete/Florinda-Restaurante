import { Text } from "../atoms/Text";
import { SectionTemplate } from "../templates/SectionTemplate";
import { galleryImages } from "../../data/GalleryImageData";

export interface GalleryImage {
    src: string;
    alt: string;
    span?: 'wide' | 'tall';
}

export function GallerySection() {
    return (
        <SectionTemplate>
            <Text as="h2" variant="h2" className="text-white text-3xl md:text-4xl font-bold">
                Nuestra Atmósfera
            </Text>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]">
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
                <img
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                    <p className="text-white text-sm font-semibold">{galleryImages[0].alt}</p>
                </div>
                </div>

                {galleryImages.slice(1).map((img) => (
                <div key={img.alt} className="col-span-1 row-span-1 rounded-2xl overflow-hidden group">
                    <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                ))}
            </div>
        </SectionTemplate>
    )
}