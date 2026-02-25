import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Truck, FileText, Package, CheckCircle2, LineChart, Briefcase, Users, Lightbulb } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'logistics' | 'consulting'>('logistics');

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-100 min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Comprehensive Services</h1>
            <p className="text-xl text-slate-600">From physical transportation to strategic business advisory, choose the division that meets your current needs.</p>
          </div>

          {/* Custom Tabs */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white rounded-full p-1 border border-slate-200 shadow-sm">
              <button 
                onClick={() => setActiveTab('logistics')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === 'logistics' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Sunrise Logistics
              </button>
              <button 
                onClick={() => setActiveTab('consulting')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === 'consulting' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Talent Centre Consulting
              </button>
            </div>
          </div>

          {/* Logistics Services */}
          {activeTab === 'logistics' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Truck,
                  title: "Transportation & Cross Border",
                  desc: "Reliable and efficient land transportation for bulk products. We meet delivery dates, volumes, and ensure minimum losses of goods.",
                  features: ["Tipper trailers", "Tautliner trailers", "Flat deck trailers", "Oversized & high-value goods"]
                },
                {
                  icon: FileText,
                  title: "Customs Clearance",
                  desc: "As an expert in international logistics, we support smooth customs clearance. We provide support in accurate and prompt import and export procedures.",
                  features: ["Reviewing shipping documents", "Pre-clearing processes", "Import/Export procedures", "Cross-border compliance"]
                },
                {
                  icon: Package,
                  title: "Logistics Management",
                  desc: "We support a wide range of needs regarding import/export and product management to meet our customers' specific needs.",
                  features: ["Efficient transportation routing", "Information flow & updates", "Complex customs matters", "Joint business growth"]
                }
              ].map((service, i) => (
                <div key={i} className="h-full bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-8">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0 text-orange-500" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          {/* Consulting Services */}
          {activeTab === 'consulting' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: LineChart,
                  title: "Business Advisory",
                  desc: "Strategic guidance to navigate complex business landscapes and drive sustainable growth.",
                  features: ["Business Coaching", "Capacity Development", "Strategy Formation", "Planning & Facilitation"]
                },
                {
                  icon: Briefcase,
                  title: "Management Services",
                  desc: "Comprehensive financial and administrative support to keep your operations compliant and efficient.",
                  features: ["Bookkeeping & Accounting", "Internal Audits", "Company Secretarial", "Financial Statements"]
                },
                {
                  icon: Users,
                  title: "Training & Wellness",
                  desc: "Empowering your workforce through targeted training and holistic employee wellness programs.",
                  features: ["Leadership Training", "Workspace Essentials", "Team Building", "Change Management"]
                },
                {
                  icon: Lightbulb,
                  title: "Empowerment Programs",
                  desc: "Fostering innovation and entrepreneurship through structured incubation and startup support.",
                  features: ["Incubation Hub", "Cooperatives", "Business Start-Up Training", "Mentorship"]
                }
              ].map((service, i) => (
                <div key={i} className="h-full bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-slate-400 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
