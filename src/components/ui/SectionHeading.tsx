import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
            light
              ? 'bg-white/10 text-white/80 border border-white/10'
              : 'bg-accent-red/10 text-accent-red border border-accent-red/20'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
          light ? 'text-white' : 'text-charcoal-700'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
            light ? 'text-steel-300' : 'text-steel-500'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`section-divider mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
