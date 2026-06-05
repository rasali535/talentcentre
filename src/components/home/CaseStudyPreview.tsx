'use client';

import React from 'react';
import { ArrowUpRight, TrendingUp, BarChart3, Users } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const caseStudies = [
  {
    category: 'Business Strategy',
    title: 'Market Expansion for Regional FMCG Enterprise',
    result: '+47% Revenue Growth',
    description:
      'Developed and executed a comprehensive market entry strategy for a leading FMCG company expanding into three new Southern African markets.',
    icon: TrendingUp,
    metrics: ['3 new markets', '18 months', '47% revenue increase'],
    href: '/case-studies',
  },
  {
    category: 'Organizational Development',
    title: 'Cultural Transformation for Government Agency',
    result: '92% Employee Satisfaction',
    description:
      'Led a 12-month organizational development program that transformed internal culture and improved service delivery.',
    icon: Users,
    metrics: ['500+ employees', '12 months', '92% satisfaction'],
    href: '/case-studies',
  },
  {
    category: 'Training & Development',
    title: 'Executive Leadership Program for Mining Corporation',
    result: '35 Leaders Developed',
    description:
      'Designed and delivered a bespoke executive development program that built a pipeline of future-ready leaders.',
    icon: BarChart3,
    metrics: ['35 executives', '6 modules', '100% completion'],
    href: '/case-studies',
  },
];

export default function CaseStudyPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Success Stories"
            title="Proven Results, Real Impact"
            subtitle="See how we've helped organizations across Southern Africa achieve transformative outcomes."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <AnimatedSection key={study.title} delay={index * 0.15}>
              <a href={study.href} className="group block h-full">
                <div className="h-full bg-white rounded-2xl border border-steel-200 overflow-hidden hover:border-accent-red/30 hover:shadow-premium-lg transition-all duration-400 flex flex-col">
                  {/* Header */}
                  <div className="p-6 pb-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent-red/10 text-accent-red text-xs font-semibold">
                        {study.category}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-steel-300 group-hover:text-accent-red transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-heading font-bold text-charcoal-700 mb-3 group-hover:text-accent-red transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-steel-500 text-sm leading-relaxed mb-6 flex-1">
                      {study.description}
                    </p>

                    {/* Result highlight */}
                    <div className="bg-gradient-to-r from-charcoal-700 to-charcoal-600 rounded-xl p-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          <study.icon className="w-5 h-5 text-accent-slate" />
                        </div>
                        <div>
                          <p className="text-white font-heading font-bold text-lg">{study.result}</p>
                          <p className="text-steel-300 text-xs">Key Outcome</p>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2">
                      {study.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-3 py-1 rounded-full bg-steel-50 text-steel-600 text-xs font-medium border border-steel-100"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 text-accent-red font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Case Studies
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
