'use client';

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent-red/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-accent-slate/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-slate animate-pulse-soft" />
            Start Your Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Ready to Accelerate Your{' '}
            <span className="gradient-text">Business Growth?</span>
          </h2>
          <p className="text-lg text-steel-300 max-w-2xl mx-auto mb-10">
            Book a complimentary strategy session with our senior consultants. Let&apos;s discuss your challenges and explore how Talent Centre can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight className="w-5 h-5" />}>
              Book Your Strategy Session
            </Button>
            <Button variant="ghost" size="lg" href={`https://wa.me/26775618647`} className="text-white/80 hover:text-white hover:bg-white/10" icon={<MessageCircle className="w-5 h-5" />}>
              Chat on WhatsApp
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
