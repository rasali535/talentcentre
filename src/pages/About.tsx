import React from 'react';
import { motion } from 'motion/react';
import { Truck, Briefcase, Search, Star, Sun, ShieldCheck, CheckCircle2, Lightbulb, Snowflake, Warehouse } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function About() {
  return (
    <div className="pt-20">
      {/* Who We Are & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">
                Two Divisions. One Goal.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We bring together two powerhouse divisions to serve your business holistically. <strong>Sunrise Logistics</strong> ensures your physical supply chain operates flawlessly across Botswana and the SADC region.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Meanwhile, <strong>Talent Centre</strong> provides the management and training consultancy you need to overcome business challenges, optimize operations, and empower your workforce. We help to grow your business from the inside out.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sunrise Logistics</h3>
                    <p className="text-slate-600">To be the preferred transport and logistics company in the SADC region, offering value-added services that go 'beyond transportation'.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Talent Centre</h3>
                    <p className="text-slate-600">The ideal business consulting agency offering skills to match your industry requirements. We deliver value-adding solutions that better your ROI.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold mb-8 text-center">Our Shared Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Transparency", icon: Search },
                    { title: "Quality Service", icon: Star },
                    { title: "Innovation", icon: Sun },
                    { title: "Integrity", icon: ShieldCheck },
                    { title: "Reliability", icon: CheckCircle2 }
                  ].map((val, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                        <val.icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="font-semibold text-slate-800">{val.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CEO Profile */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500 rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
                  <img 
                    src="/ceo.jpg" 
                    alt="Humphrey Chawafambira" 
                    className="relative rounded-3xl object-cover w-full shadow-xl aspect-[3/4]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ceo/600/800';
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-900">Humphrey Chawafambira</h3>
                    <p className="text-orange-600 font-medium">Managing Director & Lead Consultant</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">
                  Message from the CEO
                </h2>
                <div className="space-y-4 text-lg text-slate-600 mb-8 leading-relaxed">
                  <p>
                    Humphrey Chawafambira is a Business Development Consultant and corporate trainer with over 16 years of managerial and leadership experience. His background spans Finance Executive, Business Development Executive, and Managing Director roles.
                  </p>
                  <p>
                    With a passion for entrepreneurial activities, Humphrey is a seasoned business coach, mentor, and motivational speaker. He specializes in transforming struggling businesses into efficient, effective, and profitable enterprises by focusing on performance, controls, and continuous improvement.
                  </p>
                  <p>
                    He holds a B. Acc degree, ZCTA, AAFFA, CICP, and COP. As a certified Internal Control professional, he firmly believes in establishing robust processes and procedures to multiply the bottom line in the shortest possible time.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-orange-500" />
                    Facilitated Modules & Programs
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Building your powerful, productive positive team",
                      "Creating and implementing your fast growth business plan",
                      "Determining your entrepreneurship passion level",
                      "Getting on my side hustle",
                      "20 Months Entrepreneurship Success Strategies",
                      "MySuccess Game Plan – Enjoying side hustle income",
                      "MySuccess 2023 Project – Personal Development"
                    ].map((module, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                        <span className="text-sm text-slate-700">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Plan (Logistics Focus) */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/coldchain/400/500" alt="Cold Chain" className="rounded-2xl object-cover h-full w-full" referrerPolicy="no-referrer" />
                <div className="grid grid-rows-2 gap-4">
                  <img src="https://picsum.photos/seed/warehouse2/400/240" alt="Warehouse" className="rounded-2xl object-cover h-full w-full" referrerPolicy="no-referrer" />
                  <div className="bg-slate-900 rounded-2xl p-6 flex flex-col justify-center text-white">
                    <Sun className="w-10 h-10 text-orange-500 mb-4" />
                    <div className="text-2xl font-bold mb-1">Future Ready</div>
                    <div className="text-slate-400 text-sm">Expanding across the SADC region</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Our Logistics Growth Plan
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Sunrise Logistics is continuously evolving to meet the complex demands of the modern supply chain. We are expanding our capabilities to serve a wider range of industries.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Snowflake className="w-7 h-7 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Cold Chain Logistics</h4>
                    <p className="text-slate-600 mb-3">We envision to grow and be capable of handling a variety of temperature-sensitive products.</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Perishable foods to pharmaceutical products</li>
                      <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Special packing materials & thermal control</li>
                      <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-orange-500"/> High-quality temperature-controlled transport</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <Warehouse className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Warehousing & Storage Facilities</h4>
                    <p className="text-slate-600">As some companies will not have adequate storage facilities in some areas, we will also be offering warehousing and storage facilities in key cities and towns within the SADC region.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
