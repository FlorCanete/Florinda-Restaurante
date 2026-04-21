import { useState, useEffect } from "react";
import { AppLinks } from "../atoms/navLink/NavLink";
import { NavMenu, NAV_LINKS } from "../molecules/navMenu/NavMenu";
import { Text } from "../atoms/Text";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Cierra el menú al agrandar la pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Bloquea el scroll mientras el menú está abierto
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">

            <div className="flex justify-between items-center px-6 lg:px-10 py-4 w-full">
                <AppLinks to="/" as="Link" variant="nav_link" aditionalClassName="flex items-center gap-2 after:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#36E27B">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 19v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-1zm-10 -1c-.89 0 -1.337 -1.077 -.707 -1.707l2.855 -2.857l-1.464 -.487a1 1 0 0 1 -.472 -1.565l.08 -.091l3.019 -3.02l-.758 -.379a1 1 0 0 1 -.343 -1.507l.083 -.094l4 -4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 -.26 1.601l-.759 .379l3.02 3.02a1 1 0 0 1 -.279 1.61l-.113 .046l-1.465 .487l2.856 2.857c.603 .602 .22 1.614 -.593 1.701l-.114 .006z" />
                    </svg>
                    <Text as="p" variant="p" className="text-white text-xl">Florinda Restaurante</Text>
                </AppLinks>

                <nav className="hidden md:block">
                    <NavMenu />
                </nav>

                <div className="hidden md:block">
                    <AppLinks as="ExternalLink" to="https://wa.me/549112345678" variant="button_primary">Reservar Mesa</AppLinks>
                </div>

                <button
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer"
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
            >
                <nav className="flex flex-col items-center gap-6 px-6 py-8 border-t border-white/10">
                    <ul className="flex flex-col items-center gap-6 w-full">
                        {NAV_LINKS.map(link => (
                            <li key={link.name}>
                                <AppLinks
                                    to={link.path}
                                    as="NavLink"
                                    variant="nav_link"
                                    aditionalClassName="text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </AppLinks>
                            </li>
                        ))}
                    </ul>
                    <AppLinks as="ExternalLink" to="https://wa.me/549112345678" variant="button_primary">Reservar Mesa</AppLinks>
                </nav>
            </div>

        </header>
    );
};