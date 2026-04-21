import { AppLinks } from '../atoms/navLink/NavLink'
import { ChevronDown } from 'lucide-react'
import { Text } from '../atoms/Text';
import { HeroTemplate } from '../templates/HeroTemplate';
import type React from 'react';

interface HeroProps {
    image: string
    altText?: string
    tag?: string
    title: string
    description: string
    height?: 'full' | 'medium'
    actions?: string | React.ReactNode
}

export function Hero ({
    image,
    altText,
    tag,
    title,
    description,
    actions,
} : HeroProps) {
    return (
        <HeroTemplate image={image} altText={altText}>
            {tag && (
                <Text as="p" variant="p" className="text-[#36E27B] font-black text-md tracking-widest">
                    {tag}
                </Text>
            )}
            <Text as="h1" variant="h1" className='max-w-4xl'>{title}</Text>
            <Text as="p" variant="p" className='max-w-4xl text-white'>{description}</Text>

            {actions && (
                <div className='flex justify-center items-center gap-5 flex-wrap'>
                    <AppLinks as="ExternalLink" to="https://wa.me/549112345678" variant="button_primary">Reservar mi mesa</AppLinks>
                    <AppLinks as="Link" to="/menu" variant="button_secondary">Explorar el menu</AppLinks>
                </div>
            )}

            <ChevronDown className="text-white absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce size-8" />
        </HeroTemplate>
    );
}