import { AppLinks } from "../../atoms/navLink/NavLink"

export const NAV_LINKS = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/our' },
    { name: 'Menu', path: '/menu' },
    { name: 'Ecoacciones', path: '/ecoacciones' },
    { name: 'Ubicacion', path: '/location' },
]

export const NavMenu = () => {
    return (
        <ul className="flex gap-4 justify-center items-center">
            {NAV_LINKS.map(link => (
                <li key={link.name}>
                    <AppLinks to={link.path} as="NavLink" variant="nav_link">{link.name}</AppLinks>
                </li>
            ))}
        </ul>
    )
}