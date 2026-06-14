'use client';

import React from 'react';
import { Calendar, Users, Target, BookOpen, Clock, MapPin, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const productivityProgrammes = [
  { title: 'Dangers of familiarity in the workplace', date: 'Saturday 4 July 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'Action towards your vision', date: 'Saturday 18 July 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'Building your team for better performance towards your vision', date: 'Saturday 1 August 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'The ROI of sharing your vision with your team', date: 'Saturday 15 August 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'Disciplined to achieve success', date: 'Saturday 29 August 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'Sustainability vs Growth - which is better?', date: 'Saturday 12 September 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'Building your brand', date: 'Saturday 26 September 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'Benefits of visibility for better sales', date: 'Saturday 10 October 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'Know how to sell', date: 'Saturday 24 October 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'Retention marketing for increased sales', date: 'Saturday 7 November 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'ROI on networking and partnerships', date: 'Saturday 21 November 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'Balancing technical skills and Business skills', date: 'Saturday 5 December 2026', time: '0900hrs to 1130hrs', price: 'P650' },
  { title: 'Quality vs Quantity for better profitability', date: 'TBD', time: 'TBD', price: 'P650' },
  { title: 'Challenges of labelling', date: 'TBD', time: 'TBD', price: 'P650' },
];

export default function EventsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium tracking-wider uppercase mb-6">Upcoming Events</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              Learn, Connect, and <span className="gradient-text">Grow</span>
            </h1>
            <p className="text-lg text-steel-300 max-w-2xl">
              Join our exclusive business sessions and productivity enhancement programmes designed to help you and your team achieve sustainable success.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tsala Ya Nnete */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading badge="Business Sessions" title="'Tsala Ya Nnete'" align="left" />
            <p className="text-steel-600 leading-relaxed mb-8 max-w-4xl">
              &apos;Tsala Ya Nnete&apos; is a platform designed for business owners, potential business owners and managers, to share ideas in all business related topics, challenges and opportunities, sharing their practical experiences which may help someone who may be facing a similar issue. Industry experts and consultants will be invited to some of the sessions, to share their knowledge for the benefit of the participants.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {/* Physical Sessions */}
            <AnimatedSection delay={0.1}>
              <div className="bg-steel-50 rounded-2xl border border-steel-100 p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-charcoal-700">Physical Sessions</h3>
                    <p className="text-steel-500 text-sm">In-person networking & accountability</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-steel-400 shrink-0" />
                    <p className="text-steel-600 text-sm">Once a month (Second Thursday), 17:30hrs - 19:30hrs</p>
                  </div>
                  <div className="flex gap-3">
                    <Target className="w-5 h-5 text-steel-400 shrink-0" />
                    <p className="text-steel-600 text-sm">Leadership accountability program where leaders take ownership and implement learnings. Meet industry captains and experts.</p>
                  </div>
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-steel-400 shrink-0" />
                    <p className="text-steel-600 text-sm">Runs for 6 months per group.</p>
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-steel-200">
                  <div className="flex justify-between items-center">
                    <span className="text-steel-500 font-medium">Registration Fee</span>
                    <span className="text-2xl font-bold text-charcoal-700">P4,200</span>
                  </div>
                  <p className="text-right text-xs text-steel-400">for 6 months</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Online Sessions */}
            <AnimatedSection delay={0.2}>
              <div className="bg-steel-50 rounded-2xl border border-steel-100 p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-charcoal-700">Online Sessions</h3>
                    <p className="text-steel-500 text-sm">Virtual learning & networking</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-steel-400 shrink-0" />
                    <p className="text-steel-600 text-sm">Twice a month (1st and 3rd Thursday), 17:30hrs - 19:30hrs</p>
                  </div>
                  <div className="flex gap-3">
                    <Target className="w-5 h-5 text-steel-400 shrink-0" />
                    <p className="text-steel-600 text-sm">Accessible from anywhere. Share experiences and learn from experts in a virtual setting.</p>
                  </div>
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-steel-400 shrink-0" />
                    <p className="text-steel-600 text-sm">Runs for 3 months per group.</p>
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-steel-200">
                  <div className="flex justify-between items-center">
                    <span className="text-steel-500 font-medium">Registration Fee</span>
                    <span className="text-2xl font-bold text-charcoal-700">P3,000</span>
                  </div>
                  <p className="text-right text-xs text-steel-400">for 3 months</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Productivity Enhancement */}
      <section className="py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading badge="Online Workshops" title="Productivity Enhancement Programmes" align="center" />
            <p className="text-center text-steel-600 max-w-2xl mx-auto mt-4 mb-12">
              Online sessions designed to be done with a workbook. Enhance your skills and drive better performance in your organization.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productivityProgrammes.map((prog, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl border border-steel-200 p-6 hover:border-accent-red/30 hover:shadow-premium transition-all duration-300 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-accent-red/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-5 h-5 text-accent-red" />
                  </div>
                  <h4 className="font-heading font-bold text-charcoal-700 mb-3 text-lg leading-tight">{prog.title}</h4>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-steel-500">
                      <Calendar className="w-4 h-4" />
                      <span>{prog.date}</span>
                    </div>
                    {prog.time !== 'TBD' && (
                      <div className="flex items-center gap-2 text-sm text-steel-500">
                        <Clock className="w-4 h-4" />
                        <span>{prog.time}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-steel-100 flex justify-between items-center">
                    <span className="text-xs font-medium text-steel-400 uppercase tracking-wider">Fee</span>
                    <span className="font-bold text-accent-red">{prog.price}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Ready to Participate?</h2>
            <p className="text-steel-300 mb-8">Register for an upcoming session or programme to secure your spot.</p>
            <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight className="w-5 h-5" />}>Register Now</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
