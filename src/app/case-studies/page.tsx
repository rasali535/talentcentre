'use client';

import React from 'react';
import { TrendingUp, Users, BarChart3, Building, Target, Award, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const caseStudies = [
  {
    category: 'Business Strategy', icon: TrendingUp,
    title: 'Market Expansion for Regional FMCG Enterprise',
    client: 'Leading FMCG Company', industry: 'Consumer Goods',
    challenge: 'The client needed to expand into three new Southern African markets but lacked local market intelligence and entry strategy.',
    solution: 'We conducted comprehensive market analysis, developed entry strategies for each target market, and facilitated key distribution partnerships.',
    results: ['+47% revenue growth within 18 months', '3 new markets successfully entered', '12 strategic partnerships established', 'Sustainable supply chain infrastructure built'],
    testimonial: 'Talent Centre provided the strategic clarity and local expertise we needed to execute a complex multi-market expansion.',
  },
  {
    category: 'Organizational Development', icon: Users,
    title: 'Cultural Transformation for Government Agency',
    client: 'National Government Agency', industry: 'Public Sector',
    challenge: 'Low employee engagement, outdated processes, and resistance to change were impacting service delivery and organizational effectiveness.',
    solution: 'We designed and executed a 12-month organizational development program covering culture assessment, change management, and leadership development.',
    results: ['92% employee satisfaction achieved', 'Service delivery improved by 35%', 'Leadership pipeline of 20+ future leaders', 'New performance management system implemented'],
    testimonial: 'The transformation program completely changed how our organization operates. Employee morale and service quality have never been higher.',
  },
  {
    category: 'Training & Development', icon: BarChart3,
    title: 'Executive Leadership Program for Mining Corporation',
    client: 'Major Mining Corporation', industry: 'Mining & Resources',
    challenge: 'The company faced a leadership gap with retiring senior executives and needed to develop the next generation of leaders quickly.',
    solution: 'We designed a bespoke 6-module executive development program covering strategic thinking, operational excellence, and people leadership.',
    results: ['35 executives completed the program', '100% completion rate', '8 participants promoted within 12 months', 'Leadership competency scores improved by 40%'],
    testimonial: 'The program exceeded our expectations. We now have a robust leadership pipeline that gives us confidence in our future.',
  },
  {
    category: 'Strategic Advisory', icon: Target,
    title: 'Investment Readiness Program for Tech Startup Portfolio',
    client: 'Venture Capital Fund', industry: 'Technology & Innovation',
    challenge: 'A portfolio of 8 early-stage startups needed to improve their investment readiness for Series A funding rounds.',
    solution: 'We provided tailored advisory to each startup covering financial modeling, pitch development, governance, and growth strategy.',
    results: ['6 out of 8 startups secured Series A funding', '$12M total capital raised', 'Average valuation increased by 3x', 'Board governance structures established'],
    testimonial: 'Talent Centre understood the startup ecosystem and provided practical, actionable guidance that directly led to funding success.',
  },
  {
    category: 'Talent & HR Advisory', icon: Building,
    title: 'Workforce Strategy for Financial Services Group',
    client: 'Regional Banking Group', industry: 'Financial Services',
    challenge: 'High employee turnover, skills gaps in digital banking, and inability to attract top talent were limiting the bank\'s digital transformation efforts.',
    solution: 'We conducted a comprehensive workforce analysis, redesigned the talent value proposition, and implemented a skills development roadmap.',
    results: ['Employee turnover reduced by 40%', 'Digital skills gaps closed within 9 months', 'Employer brand ranking improved from #12 to #3', 'Time-to-hire reduced by 50%'],
    testimonial: 'The strategic workforce plan Talent Centre developed has been transformational for our people strategy and digital ambitions.',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium tracking-wider uppercase mb-6">Case Studies</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              Real Results, <span className="gradient-text">Proven Impact</span>
            </h1>
            <p className="text-lg text-steel-300 max-w-2xl">Explore how we&apos;ve helped organizations across Southern Africa overcome challenges and achieve transformative outcomes.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {caseStudies.map((cs, idx) => (
            <AnimatedSection key={idx} delay={0.1}>
              <div className="bg-white rounded-2xl border border-steel-200 overflow-hidden hover:shadow-premium-lg transition-all duration-400">
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent-red/10 flex items-center justify-center">
                      <cs.icon className="w-5 h-5 text-accent-red" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-accent-red/10 text-accent-red text-xs font-semibold">{cs.category}</span>
                    <span className="px-3 py-1 rounded-full bg-steel-100 text-steel-600 text-xs font-medium">{cs.industry}</span>
                  </div>

                  <h2 className="text-2xl font-heading font-bold text-charcoal-700 mb-2">{cs.title}</h2>
                  <p className="text-steel-400 text-sm mb-6">Client: {cs.client}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-heading font-semibold text-charcoal-700 mb-2 text-sm uppercase tracking-wider">Challenge</h4>
                      <p className="text-steel-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-charcoal-700 mb-2 text-sm uppercase tracking-wider">Solution</h4>
                      <p className="text-steel-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-charcoal-700 to-charcoal-600 rounded-xl p-6 mb-6">
                    <h4 className="font-heading font-semibold text-white mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent-slate" /> Results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cs.results.map((r) => (
                        <div key={r} className="flex items-center gap-2 text-steel-200 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-slate flex-shrink-0" />
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="border-l-3 border-accent-red pl-4 italic text-steel-600 text-sm">
                    &ldquo;{cs.testimonial}&rdquo;
                    <span className="block text-steel-400 mt-1 not-italic text-xs">— {cs.client}</span>
                  </blockquote>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Want Results Like These?</h2>
            <p className="text-steel-300 mb-8">Let&apos;s discuss how we can deliver similar outcomes for your organization.</p>
            <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight className="w-5 h-5" />}>Book a Strategy Session</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
