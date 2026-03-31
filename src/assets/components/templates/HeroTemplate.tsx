
interface HeroProps {
  image: string;
  children?: React.ReactNode;
  altText?: string;
}

export function HeroTemplate ({ image, children, altText }: HeroProps) {
    return (
        <section className="hero mx-auto px-6 lg:px-10 text-center flex flex-col justify-center items-center gap-6 h-200 relative">
            <img src={image} alt={altText} className="absolute size-full object-cover z-[-1] left-0 right-0  mask-b-from-50% mask-radial-to-80%"/>
            {children}
        </section>
    );
}