import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-accent-blue text-white hover:bg-accent-blue-dark focus:ring-accent-blue shadow-lg shadow-accent-blue/20 hover:shadow-xl hover:shadow-accent-blue/30 hover:-translate-y-0.5',
    secondary:
      'bg-navy-700 text-white hover:bg-navy-600 focus:ring-navy-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    outline:
      'bg-transparent border-2 border-steel-300 text-steel-700 hover:border-accent-blue hover:text-accent-blue focus:ring-accent-blue',
    ghost:
      'bg-transparent text-steel-600 hover:bg-steel-100 hover:text-navy-700 focus:ring-steel-300',
    gold:
      'bg-gradient-to-r from-accent-gold to-accent-gold-dark text-white hover:from-accent-gold-dark hover:to-accent-gold focus:ring-accent-gold shadow-lg shadow-accent-gold/20 hover:shadow-xl hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon}
      {children}
    </button>
  );
}
