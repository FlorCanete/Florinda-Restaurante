interface SectionTemplateProps {
    children: React.ReactNode,
    additionalClassName?: string
}

export function SectionTemplate({children, additionalClassName} : SectionTemplateProps) {
    return (
        <>
            <section className={`h-auto px-7 md:px-15 py-20 flex flex-col gap-10 ${additionalClassName || ''}`}>
                {children}
            </section>
        </>
    );
}