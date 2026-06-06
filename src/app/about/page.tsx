'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Users, Globe, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const values = [
  { icon: Target, title: 'Excellence', desc: 'Unwavering commitment to delivering the highest quality advisory services.' },
  { icon: Users, title: 'Partnership', desc: 'We invest in long-term relationships, becoming an extension of your team.' },
  { icon: Globe, title: 'Innovation', desc: 'Forward-thinking solutions that anticipate market shifts and opportunities.' },
  { icon: Award, title: 'Integrity', desc: 'Transparent, ethical consulting with your best interests at the core.' },
];

const milestones = [
  { year: '2010', title: 'Founded', desc: 'Talent Centre established in Gaborone, Botswana.' },
  { year: '2013', title: 'Regional Expansion', desc: 'Extended services across Southern Africa.' },
  { year: '2016', title: '100+ Clients', desc: 'Reached a milestone of 100 corporate clients served.' },
  { year: '2019', title: 'Training Division', desc: 'Launched dedicated Training & Development unit.' },
  { year: '2022', title: 'Digital Transformation', desc: 'Integrated digital advisory and AI-powered consulting.' },
  { year: '2024', title: '200+ Clients', desc: 'Serving over 200 organizations across the region.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent-red/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium tracking-wider uppercase mb-6">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              Building the Future of <span className="gradient-text">Business Excellence</span>
            </h1>
            <p className="text-lg text-steel-300 max-w-2xl">
              For over 15 years, Talent Centre has been the trusted advisory partner for organizations seeking transformative growth across Southern Africa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeading badge="Our Mission" title="Empowering Organizations to Thrive" align="left" />
              <p className="text-steel-600 leading-relaxed mb-6">
                Talent Centre was founded with a singular vision: to provide world-class consultancy services that enable organizations to navigate complexity, unlock potential, and achieve sustainable growth.
              </p>
              <p className="text-steel-600 leading-relaxed mb-8">
                We combine deep industry expertise with innovative thinking to deliver advisory solutions that create measurable impact. Our approach is collaborative, results-driven, and tailored to each client&apos;s unique context and objectives.
              </p>
              <div className="space-y-3">
                {['Evidence-based strategic advisory', 'Measurable outcomes and ROI', 'Cross-sector expertise', 'Long-term partnership model'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-red flex-shrink-0" />
                    <span className="text-steel-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-steel-50 to-white rounded-3xl p-8 border border-steel-100">
                <div className="grid grid-cols-2 gap-6">
                  {[{ val: '15+', lbl: 'Years Experience' }, { val: '200+', lbl: 'Clients Served' }, { val: '50+', lbl: 'Active Projects' }, { val: '98%', lbl: 'Satisfaction Rate' }].map((s) => (
                    <div key={s.lbl} className="text-center p-4">
                      <p className="text-3xl font-heading font-bold gradient-text-blue">{s.val}</p>
                      <p className="text-steel-500 text-sm mt-1">{s.lbl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-steel-50" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading badge="Leadership" title="Meet Our Leadership Team" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="h-full bg-white rounded-3xl border border-steel-200 p-8 md:p-10 text-center shadow-premium">
                <div className="relative w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-premium overflow-hidden">
                  <Image
                    src="/humphrey.png"
                    alt="Humphrey Chawafambira"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-charcoal-700 mb-2">Humphrey Chawafambira</h3>
                <p className="text-accent-red font-semibold mb-4">Business Development Consultant & Founder</p>
                <p className="text-steel-600 leading-relaxed mb-6">
                  With over 15 years of experience in business development, organizational consulting, and strategic advisory, Humphrey has guided hundreds of organizations across Southern Africa toward sustainable growth. His expertise spans government, corporate, SME, and NGO sectors, with a proven track record of delivering transformative outcomes.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {['Strategic Planning', 'Business Development', 'Organizational Change', 'Executive Coaching'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-accent-red/10 text-accent-red text-xs font-semibold">{s}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="h-full bg-white rounded-3xl border border-steel-200 p-8 md:p-10 text-center shadow-premium flex flex-col">
                <div className="relative w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-premium overflow-hidden">
                  <Image
                    src="/tafadzwa.png"
                    alt="Tafadzwa Chawafambira"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-charcoal-700 mb-2">Tafadzwa Chawafambira</h3>
                <p className="text-accent-red font-semibold mb-4">Financial Consultant</p>
                <p className="text-steel-600 leading-relaxed mb-6">
                  Tafadzwa brings extensive expertise in corporate finance, financial planning, and risk management. She partners with organizations to optimize their financial strategies, ensuring sustainable growth, robust financial health, and operational efficiency across both SME and corporate sectors.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {['Corporate Finance', 'Financial Planning', 'Risk Management', 'Operational Efficiency'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-accent-red/10 text-accent-red text-xs font-semibold">{s}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading badge="Our Values" title="What Drives Us" subtitle="Our core values guide every engagement and define the Talent Centre difference." />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-steel-50 border border-steel-100 hover:border-accent-red/20 hover:shadow-glow-blue transition-all duration-400">
                  <div className="w-14 h-14 rounded-2xl bg-accent-red/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-accent-red" />
                  </div>
                  <h3 className="font-heading font-bold text-charcoal-700 mb-2">{v.title}</h3>
                  <p className="text-steel-500 text-sm">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-steel-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading badge="Our Journey" title="Milestones & Growth" />
          </AnimatedSection>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.08}>
                <div className="flex gap-6 items-start">
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className="font-heading font-bold text-accent-red text-lg">{m.year}</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-accent-red mt-2 flex-shrink-0 relative">
                    {i < milestones.length - 1 && <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-16 bg-steel-200" />}
                  </div>
                  <div className="pb-8">
                    <h4 className="font-heading font-semibold text-charcoal-700">{m.title}</h4>
                    <p className="text-steel-500 text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-steel-300 mb-8">
              Let&apos;s discuss how Talent Centre can support your organization&apos;s growth journey.
            </p>
            <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight className="w-5 h-5" />}>
              Get in Touch
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
