'use client';

import React from 'react';
import { Shield, Target, Award, TrendingUp, Clock, HeartHandshake } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const reasons = [
  {
    icon: Shield,
    title: 'Proven Track Record',
    description: '15+ years of delivering measurable results across diverse industries in Southern Africa.',
  },
  {
    icon: Target,
    title: 'Results-Driven Approach',
    description: 'Every engagement is structured around your specific objectives and desired business outcomes.',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Deep domain knowledge across government, corporate, SME, and NGO sectors.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Frameworks and strategies that grow with your organization from startup to enterprise.',
  },
  {
    icon: Clock,
    title: 'Responsive Partnership',
    description: 'Dedicated consultant engagement with fast turnaround and ongoing support.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-Centric Model',
    description: 'We become an extension of your team, invested in your long-term success.',
  },
];

const stats = [
  { value: '200+', label: 'Clients Served' },
  { value: '15+', label: 'Years Experience' },
  { value: '95%', label: 'Repeat Clients' },
  { value: '50+', label: 'Active Projects' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-steel-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Why Talent Centre"
            title="Your Trusted Advisory Partner"
            subtitle="We combine deep expertise with a client-first approach to deliver consulting that creates lasting impact."
          />
        </AnimatedSection>

        {/* Stats Bar */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-white border border-steel-200 shadow-premium"
              >
                <p className="text-3xl lg:text-4xl font-heading font-bold gradient-text-blue mb-2">
                  {stat.value}
                </p>
                <p className="text-steel-500 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} delay={index * 0.08}>
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-steel-100 hover:border-accent-blue/20 hover:shadow-glow-blue transition-all duration-400">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy-700 mb-1">{reason.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
