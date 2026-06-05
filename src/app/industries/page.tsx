'use client';

import React from 'react';
import { Landmark, Building2, Rocket, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const industries = [
  {
    id: 'government',
    icon: Landmark,
    title: 'Government & Public Sector',
    description: 'We help government agencies and public institutions improve service delivery, develop leadership capacity, and implement effective governance frameworks.',
    services: ['Policy Development Advisory', 'Public Sector Reform', 'Capacity Building Programs', 'Performance Management Systems', 'Governance Frameworks'],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'corporate',
    icon: Building2,
    title: 'Corporate Enterprises',
    description: 'We partner with large corporations to drive strategic transformation, optimize operations, and build high-performance organizational cultures.',
    services: ['Strategic Planning', 'Organizational Transformation', 'Executive Development', 'Change Management', 'M&A Advisory Support'],
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'sme',
    icon: Rocket,
    title: 'SMEs & Startups',
    description: 'We provide practical, growth-focused consulting for small and medium enterprises, from business planning to scaling operations.',
    services: ['Business Planning', 'Market Entry Strategy', 'Investment Readiness', 'Operational Setup', 'Growth Strategy'],
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 'ngo',
    icon: Heart,
    title: 'NGO & Development',
    description: 'We support development organizations, NGOs, and donor-funded programs with program design, capacity building, and institutional strengthening.',
    services: ['Program Design & Evaluation', 'Institutional Strengthening', 'Stakeholder Engagement', 'Monitoring & Evaluation Frameworks', 'Grant Management Support'],
    color: 'bg-rose-100 text-rose-600',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium tracking-wider uppercase mb-6">Industries</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              Sector-Specific <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-lg text-steel-300 max-w-2xl">Our consulting experience spans diverse industries, allowing us to bring cross-sector insights to every engagement.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {industries.map((ind, idx) => (
            <AnimatedSection key={ind.id} delay={0.1} className="scroll-mt-24" >
              <div id={ind.id} className="bg-white rounded-2xl border border-steel-200 p-8 md:p-10 hover:shadow-premium-lg transition-all duration-400">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className={`w-14 h-14 rounded-2xl ${ind.color.split(' ')[0]} flex items-center justify-center mb-4`}>
                      <ind.icon className={`w-7 h-7 ${ind.color.split(' ')[1]}`} />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-navy-700 mb-3">{ind.title}</h2>
                    <p className="text-steel-600 leading-relaxed">{ind.description}</p>
                  </div>
                  <div className="bg-steel-50 rounded-xl p-6 border border-steel-100">
                    <h4 className="font-heading font-semibold text-navy-700 mb-4 text-sm">Key Services</h4>
                    <div className="space-y-2">
                      {ind.services.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-blue flex-shrink-0" />
                          <span className="text-steel-600 text-sm">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Don&apos;t See Your Industry?</h2>
            <p className="text-steel-300 mb-8">Our consulting methodologies are adaptable. We tailor our approach to fit your sector&apos;s unique context.</p>
            <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight className="w-5 h-5" />}>Discuss Your Needs</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
