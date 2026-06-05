'use client';

import React from 'react';
import {
  Briefcase,
  Users,
  GraduationCap,
  Building2,
  Compass,
  ArrowUpRight,
  Target,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

const services = [
  {
    icon: Briefcase,
    title: 'Business Consultancy',
    description:
      'Strategic planning, market entry strategies, business development, and operational optimization to accelerate growth.',
    href: '/services/business-consultancy',
    color: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
  },
  {
    icon: Users,
    title: 'Talent & HR Advisory',
    description:
      'Workforce strategy, recruitment advisory, talent retention consulting, and HR policy development for high-performance teams.',
    href: '/services/talent-hr-advisory',
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description:
      'Executive training, leadership development programs, skills building, and organizational capacity development.',
    href: '/services/training-development',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
  },
  {
    icon: Building2,
    title: 'Organizational Development',
    description:
      'Culture transformation, change management, performance management systems, and governance frameworks.',
    href: '/services/organizational-development',
    color: 'text-amber-600',
    bg: 'bg-amber-100',
  },
  {
    icon: Compass,
    title: 'Strategic Advisory',
    description:
      'Board-level advisory, investment readiness, partnership facilitation, and market expansion strategy.',
    href: '/services/strategic-advisory',
    color: 'text-rose-600',
    bg: 'bg-rose-100',
  },
  {
    icon: Target,
    title: 'Empowerment Programs',
    description:
      'Behavioral-based empowerment, financial goal setting, startup skills, and specific focus on women and youth workshops.',
    href: '/services/empowerment-programs',
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Advisory Solutions"
            subtitle="We deliver end-to-end consulting services designed to solve complex business challenges and unlock growth opportunities."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <a href={service.href} className="block h-full">
                <Card className="h-full group" padding="lg">
                  <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy-700 mb-3 group-hover:text-accent-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-steel-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent-blue text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Card>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
