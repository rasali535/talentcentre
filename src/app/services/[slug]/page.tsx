'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Briefcase, Users, GraduationCap, Building2, Compass, CheckCircle2, ArrowRight, Target } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

const serviceData: Record<string, {
  icon: React.ComponentType<{ className?: string }>;
  title: string; tagline: string; description: string; longDescription: string;
  deliverables: string[]; process: { step: string; desc: string }[];
  color: string; bg: string;
}> = {
  'business-consultancy': {
    icon: Briefcase, title: 'Business Consultancy', tagline: 'Accelerate growth through strategic insight',
    description: 'We help organizations define strategy, enter new markets, optimize operations, and drive sustainable business development.',
    longDescription: 'Our business consultancy services are designed for organizations at every stage of growth. Whether you are a startup seeking market entry, an SME looking to scale, or a corporation navigating complex competitive landscapes, we provide the strategic frameworks and hands-on support you need to achieve your objectives. Our approach combines rigorous market analysis with practical execution planning, ensuring that every strategy we develop is actionable and measurable.',
    deliverables: ['Strategic Planning & Roadmapping', 'Market Entry & Expansion Strategy', 'Business Model Innovation', 'Competitive Analysis & Positioning', 'Operational Efficiency Audits', 'Growth Strategy Development', 'Partnership & Alliance Strategy', 'Performance Monitoring Frameworks'],
    process: [
      { step: 'Discovery', desc: 'Deep-dive into your business context, challenges, and aspirations' },
      { step: 'Analysis', desc: 'Rigorous market research, data analysis, and strategic assessment' },
      { step: 'Strategy', desc: 'Development of actionable strategies with clear milestones' },
      { step: 'Execution', desc: 'Hands-on support in implementing strategic recommendations' },
      { step: 'Review', desc: 'Ongoing monitoring, measurement, and strategy refinement' },
    ],
    color: 'text-accent-red', bg: 'bg-accent-red/10',
  },
  'talent-hr-advisory': {
    icon: Users, title: 'Talent & HR Advisory', tagline: 'Build high-performance teams',
    description: 'Strategic workforce consulting that helps you attract, develop, and retain the talent needed to execute your business strategy.',
    longDescription: 'People are your organization\'s most valuable asset. Our Talent & HR Advisory services help you build a workforce strategy that aligns with your business objectives, creates a compelling employee value proposition, and establishes the systems and processes needed to attract, develop, and retain top talent. We combine HR best practices with industry-specific insights to deliver practical solutions.',
    deliverables: ['Workforce Strategy & Planning', 'Recruitment Advisory & Process Design', 'Talent Retention Consulting', 'HR Policy Development', 'Compensation & Benefits Benchmarking', 'Employee Engagement Programs', 'Succession Planning', 'Employer Brand Strategy'],
    process: [
      { step: 'Assessment', desc: 'Evaluate current workforce capabilities and HR maturity' },
      { step: 'Benchmark', desc: 'Compare against industry standards and best practices' },
      { step: 'Design', desc: 'Develop tailored HR strategies and policy frameworks' },
      { step: 'Implement', desc: 'Support rollout of new programs and systems' },
      { step: 'Optimize', desc: 'Monitor effectiveness and continuously improve' },
    ],
    color: 'text-purple-600', bg: 'bg-purple-100',
  },
  'training-development': {
    icon: GraduationCap, title: 'Training & Development', tagline: 'Invest in your people, transform your outcomes',
    description: 'Customized learning programs that build leadership capability, technical skills, and organizational capacity.',
    longDescription: 'Our Training & Development division designs and delivers bespoke learning experiences that create lasting behavioral change. From executive leadership programs to technical skills training, we use adult learning principles, experiential methodologies, and practical application to ensure that training translates into real-world performance improvement.',
    deliverables: ['Executive Leadership Programs', 'Management Development', 'Skills Development Training', 'Capacity Building Workshops', 'Coaching & Mentoring Programs', 'Train-the-Trainer Programs', 'E-Learning & Blended Solutions', 'Impact Assessment & ROI Measurement'],
    process: [
      { step: 'Needs Analysis', desc: 'Identify skills gaps and learning objectives' },
      { step: 'Curriculum Design', desc: 'Develop tailored learning content and materials' },
      { step: 'Delivery', desc: 'Facilitate engaging, interactive learning experiences' },
      { step: 'Application', desc: 'Support on-the-job application of new skills' },
      { step: 'Evaluation', desc: 'Measure learning outcomes and business impact' },
    ],
    color: 'text-emerald-600', bg: 'bg-emerald-100',
  },
  'organizational-development': {
    icon: Building2, title: 'Organizational Development', tagline: 'Transform your organization from the inside out',
    description: 'We guide organizations through complex change, helping build cultures, systems, and governance structures.',
    longDescription: 'Organizational Development is about building the internal capability and culture that enables sustained high performance. We work with leadership teams to assess organizational health, design interventions that address root causes of dysfunction, and build the systems and structures needed for long-term excellence. Our OD approach is evidence-based, collaborative, and focused on creating self-sustaining change.',
    deliverables: ['Culture Assessment & Transformation', 'Change Management Programs', 'Performance Management Systems', 'Governance Frameworks', 'Team Effectiveness Interventions', 'Organizational Design & Restructuring', 'Employee Engagement Surveys', 'Leadership Team Alignment'],
    process: [
      { step: 'Diagnose', desc: 'Assess organizational health and identify pain points' },
      { step: 'Design', desc: 'Create targeted interventions and change programs' },
      { step: 'Engage', desc: 'Build stakeholder buy-in and change readiness' },
      { step: 'Transform', desc: 'Execute change programs with structured support' },
      { step: 'Sustain', desc: 'Embed changes and build internal capability' },
    ],
    color: 'text-amber-600', bg: 'bg-amber-100',
  },
  'strategic-advisory': {
    icon: Compass, title: 'Strategic Advisory', tagline: 'Navigate complexity with confidence',
    description: 'Board-level advisory services that help leaders make informed decisions about investments, partnerships, and organizational direction.',
    longDescription: 'Our Strategic Advisory services provide board-level counsel to organizations facing critical decisions. Whether you are preparing for investment, evaluating strategic partnerships, or navigating complex market dynamics, our senior advisors bring the experience, objectivity, and analytical rigor needed to make confident, well-informed decisions.',
    deliverables: ['Board Advisory Services', 'Investment Readiness & Due Diligence', 'Strategic Partnership Facilitation', 'Market Expansion Strategy', 'Risk Assessment & Mitigation', 'Scenario Planning', 'Stakeholder Management', 'Exit Strategy Planning'],
    process: [
      { step: 'Brief', desc: 'Understand the strategic question and decision context' },
      { step: 'Research', desc: 'Conduct thorough market and scenario analysis' },
      { step: 'Advise', desc: 'Present options with clear pros, cons, and recommendations' },
      { step: 'Support', desc: 'Guide implementation of chosen strategic direction' },
      { step: 'Monitor', desc: 'Track outcomes and adjust strategy as needed' },
    ],
    color: 'text-rose-600', bg: 'bg-rose-100',
  },
  'empowerment-programs': {
    icon: Target, title: 'Empowerment Programs', tagline: 'Maximizing potential through behavioral change',
    description: 'We focus on the individual using an attitude- and behavioral-based approach of empowerment to maximize potential, with a dedicated focus on women and youth.',
    longDescription: 'Our Empowerment Programs are designed to unlock individual potential and foster self-reliance. We believe that true organizational and community development starts with empowering people at the individual level. We specialize in workshops targeted at women and youth, focusing on practical life skills, financial literacy, and entrepreneurship. By combining behavioral coaching with actionable business skills, we help participants build confidence and create sustainable livelihoods.',
    deliverables: ['Goal Setting & Financial Planning', 'Budgeting & Personal Finance', 'Business Start-ups & Basic Business Skills', 'Entrepreneurship Development', 'Successful Cooperatives Training', 'Multiple Income Streams Generation', 'Stress Management & Emotional Intelligence', 'Building Self-Confidence'],
    process: [
      { step: 'Assess', desc: 'Identify specific audience needs and behavioral barriers' },
      { step: 'Design', desc: 'Customize workshop content for maximum relevance' },
      { step: 'Engage', desc: 'Deliver interactive, attitude-shifting sessions' },
      { step: 'Equip', desc: 'Provide practical tools, templates, and frameworks' },
      { step: 'Support', desc: 'Facilitate ongoing mentorship and network building' },
    ],
    color: 'text-indigo-600', bg: 'bg-indigo-100',
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-charcoal-700 mb-4">Service Not Found</h1>
          <p className="text-steel-500 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Button variant="primary" href="/services">View All Services</Button>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6`}>
              <ServiceIcon className={`w-8 h-8 ${service.color}`} />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">{service.title}</h1>
            <p className="text-xl text-accent-slate font-semibold mb-4">{service.tagline}</p>
            <p className="text-lg text-steel-300 max-w-2xl">{service.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-heading font-bold text-charcoal-700 mb-6">Overview</h2>
                <p className="text-steel-600 leading-relaxed mb-10">{service.longDescription}</p>
                <h3 className="text-xl font-heading font-bold text-charcoal-700 mb-6">Our Process</h3>
                <div className="space-y-6 mb-10">
                  {service.process.map((p, i) => (
                    <div key={p.step} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent-red font-heading font-bold text-sm">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal-700">{p.step}</h4>
                        <p className="text-steel-500 text-sm">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <div>
              <AnimatedSection delay={0.15}>
                <div className="bg-steel-50 rounded-2xl border border-steel-100 p-8 sticky top-28">
                  <h3 className="font-heading font-bold text-charcoal-700 mb-6">Key Deliverables</h3>
                  <div className="space-y-3 mb-8">
                    {service.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${service.color} flex-shrink-0`} />
                        <span className="text-steel-600 text-sm">{d}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="primary" size="lg" href="/contact" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                    Book a Consultation
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
