'use client';

import React from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const clients = [
  'Enterprise Corp', 'GovTech Partners', 'Southern Mining Ltd', 'AfriGrowth Fund',
  'Metro Holdings', 'Botswana Dev Corp', 'Summit Industries', 'Nexus Solutions',
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-steel-50 border-y border-steel-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-steel-400 text-sm font-medium tracking-wider uppercase mb-10">
            Trusted by Leading Organizations
          </p>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-steel-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-steel-50 to-transparent z-10" />
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client}-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center h-16 px-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-steel-200/50 flex items-center justify-center">
                    <span className="text-steel-400 font-heading font-bold text-sm">{client.charAt(0)}</span>
                  </div>
                  <span className="text-steel-400 font-heading font-semibold text-sm whitespace-nowrap">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
