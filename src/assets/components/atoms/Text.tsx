
const TextStyles = {
  h1: 'text-5xl md:text-7xl font-black PlayFair-Italic text-white',
  h2: 'text-3xl md:text-4xl font-bold text-white',
  h3: 'text-xl text-white',
  p: 'text-base',
  span: 'text-base',
  small: 'text-sm text-gray-400',
}

type TextVariant = keyof typeof TextStyles;

interface TextProps {
  children: React.ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p' | 'small';
  variant?: TextVariant;
  className?: string;
}


export const Text = (
  {
    children,
    variant = 'h1',
    as: Tag = 'h2',
    className = '' }
    : TextProps
) => {
  const variantStyles = TextStyles[variant];

  if (!variantStyles) {
    throw new Error(`La variante "${variant}" no existe.`);
  }

  return (
    <Tag className={`${variantStyles} ${className} `}>
      {children}
    </Tag>
  )
};