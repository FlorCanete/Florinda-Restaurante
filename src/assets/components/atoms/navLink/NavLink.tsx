import { Link, NavLink } from 'react-router-dom';

const LinkStyles = {
  nav_link: 'text-decoration-none text-white relative cursor-pointer py-1.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#36E27B] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left',
  button_primary: 'flex cursor-pointer items-center justify-center rounded-full h-12 px-4 md:px-8 bg-[#36E27B] hover:bg-[#2fd16d] text-background-dark text-base font-bold transition-all transform hover:scale-105',
  button_secondary: 'flex cursor-pointer items-center justify-center rounded-full h-12 px-4 md:px-8 border border-2 border-white text-white hover:bg-white hover:text-slate-800 text-base font-bold transition-all transform hover:scale-105',
  link_underline: 'underline',
}

type LinkVariant = keyof typeof LinkStyles;

interface LinkProps {
  children: React.ReactNode;
  as?: 'NavLink' | 'Link' | 'ExternalLink';
  variant: LinkVariant;
  to: string;
  aditionalClassName?: string;
}

export const AppLinks = ({
  children,
  variant = 'nav_link',
  as: Tag = 'NavLink',
  to,
  aditionalClassName = '',
}: LinkProps) => {
  const variantStyles = LinkStyles[variant];

  if (!variantStyles) {
    throw new Error(`La variante "${variant}" no existe.`);
  }

  if (Tag === 'ExternalLink') {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${variantStyles} ${aditionalClassName}`}
      >
        {children}
      </a>
    )
  }

  if (Tag === 'NavLink') {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${variantStyles} ${aditionalClassName} ${isActive ? 'text-[#36E27B] after:scale-x-100' : ''}`
        }
      >
        {children}
      </NavLink>
    )
  }

  return (
    <Link to={to} className={`${variantStyles} ${aditionalClassName}`}>
      {children}
    </Link>
  )
};