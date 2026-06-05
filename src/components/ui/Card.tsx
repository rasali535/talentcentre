import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}: CardProps) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10',
  };

  return (
    <div
      className={`
        bg-white rounded-2xl border border-steel-200
        ${hover ? 'card-premium' : ''}
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
