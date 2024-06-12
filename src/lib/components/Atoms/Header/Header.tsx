import { ReactNode } from 'react';

interface HeaderProps {
  Variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Header = ({ Variant = 'h1', children, size = 'xl' }: HeaderProps) => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return <Variant className={`font-hind ${sizes[size]}`}>{children}</Variant>;
};
