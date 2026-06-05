'use client';

import React from 'react';
import { Briefcase, Users, GraduationCap, Building2, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const services = [
  {
    slug: 'business-consultancy',
    icon: Briefcase,
    title: 'Business Consultancy',
    tagline: 'Accelerate growth through strategic insight',
    description: 'We help organizations define strategy, enter new markets, optimize operations, and drive sustainable business development.',
    deliverables: ['Market Entry Strategy', 'Business Model Optimization', 'Growth Roadmaps', 'Competitive Analysis', 'Operational Efficiency Audits'],
    color: 'text-accent-blue', bg: 'bg-accent-blue/10',
  },
  {
    slug: 'talent-hr-advisory',
    icon: Users,
    title: 'Talent & HR Advisory',
    tagline: 'Build high-performance teams',
    description: 'Strategic workforce consulting that helps you attract, develop, and retain the talent needed to execute your business strategy.',
    deliverables: ['Workforce Strategy', 'Recruitment Advisory', 'Retention Consulting', 'HR Policy Development', 'Compensation Benchmarking'],
    color: 'text-purple-600', bg: 'bg-purple-100',
  },
  {
    slug: 'training-development',
    icon: GraduationCap,
    title: 'Training & Development',
    tagline: 'Invest in your people, transform your outcomes',
    description: 'Customized learning programs that build leadership capability, technical skills, and organizational capacity.',
    deliverables: ['Executive Leadership Programs', 'Skills Development Training', 'Capacity Building Workshops', 'Mentoring Programs', 'Train-the-Trainer'],
    color: 'text-emerald-600', bg: 'bg-emerald-100',
  },
  {
    slug: 'organizational-development',
    icon: Building2,
    title: 'Organizational Development',
    tagline: 'Transform your organization from the inside out',
    description: 'We guide organizations through complex change, helping build cultures, systems, and governance structures that enable sustained excellence.',
    deliverables: ['Culture Transformation', 'Change Management', 'Performance Systems', 'Governance Frameworks', 'Team Effectiveness'],
    color: 'text-amber-600', bg: 'bg-amber-100',
  },
  {
    slug: 'strategic-advisory',
    icon: Compass,
    title: 'Strategic Advisory',
    tagline: 'Navigate complexity with confidence',
    description: 'Board-level advisory services that help leaders make informed decisions about investments, partnerships, and organizational direction.',
    deliverables: ['Board Advisory', 'Investment Readiness', 'Partnership Facilitation', 'Expansion Strategy', 'Risk Management'],
    color: 'text-rose-600', bg: 'bg-rose-100',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium tracking-wider uppercase mb-6">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              Comprehensive <span className="gradient-text">Advisory Solutions</span>
            </h1>
            <p className="text-lg text-steel-300 max-w-2xl">
              From strategic planning to organizational transformation — we deliver consulting services that create measurable business impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, idx) => (
            <AnimatedSection key={service.slug} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-navy-700 mb-2">{service.title}</h2>
                  <p className="text-accent-blue font-semibold text-sm mb-4">{service.tagline}</p>
                  <p className="text-steel-600 leading-relaxed mb-6">{service.description}</p>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className={`bg-steel-50 rounded-2xl p-8 border border-steel-100 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="font-heading font-semibold text-navy-700 mb-4">Key Deliverables</h4>
                  <div className="space-y-3">
                    {service.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${service.color} flex-shrink-0`} />
                        <span className="text-steel-700 text-sm font-medium">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {idx < services.length - 1 && <hr className="mt-16 border-steel-100" />}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Need a Tailored Solution?
            </h2>
            <p className="text-steel-300 mb-8">
              Every organization is unique. Let&apos;s discuss your specific challenges and design a consulting engagement that delivers results.
            </p>
            <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight className="w-5 h-5" />}>
              Book a Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
