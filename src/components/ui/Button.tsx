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
      'bg-accent-red text-white hover:bg-accent-red-dark focus:ring-accent-red shadow-lg shadow-accent-red/20 hover:shadow-xl hover:shadow-accent-red/30 hover:-translate-y-0.5',
    secondary:
      'bg-charcoal-700 text-white hover:bg-charcoal-600 focus:ring-charcoal-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    outline:
      'bg-transparent border-2 border-steel-300 text-steel-700 hover:border-accent-red hover:text-accent-red focus:ring-accent-red',
    ghost:
      'bg-transparent text-steel-600 hover:bg-steel-100 hover:text-charcoal-700 focus:ring-steel-300',
    gold:
      'bg-gradient-to-r from-accent-slate to-accent-slate-dark text-white hover:from-accent-slate-dark hover:to-accent-slate focus:ring-accent-slate shadow-lg shadow-accent-slate/20 hover:shadow-xl hover:-translate-y-0.5',
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
