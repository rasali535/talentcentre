import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Map, 
  FileText, 
  Snowflake, 
  Warehouse, 
  CheckCircle2,
  Sun,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Package,
  Search,
  Briefcase,
  Users,
  LineChart,
  Lightbulb,
  LogIn
} from 'lucide-react';

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

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'logistics' | 'consulting'>('logistics');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Sun className="w-8 h-8 text-orange-500" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-slate-900 leading-none uppercase">Sunrise &</span>
                <span className="font-bold text-lg tracking-tight text-slate-500 leading-none uppercase">Talent Centre</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Who We Are</a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Our Services</a>
              <a href="#growth" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Growth Plan</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">
                <LogIn className="w-4 h-4" />
                Client Portal
              </Link>
              <a href="#contact" className="bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/20">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-orange-500/20 blur-[120px]" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-slate-600/20 blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/truck-sunset/1920/1080?blur=2')] opacity-30 mix-blend-overlay bg-cover bg-center" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-orange-300 mb-8 backdrop-blur-sm uppercase tracking-widest">
              <Sun className="w-4 h-4" />
              Integrated Logistics & Business Consulting
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Beyond Transportation. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Beyond Talent.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              From moving your cargo across the SADC region to scaling your business with expert advisory, we are your comprehensive growth partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#services" className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25">
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are & Values */}
      <section className="py-24 bg-white" id="about">
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

      {/* Services */}
      <section className="py-24 bg-slate-100" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-slate-600">From physical transportation to strategic business advisory, choose the division that meets your current needs.</p>
          </div>

          {/* Custom Tabs */}
          <div className="flex justify-center mb-12">
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

      {/* Growth Plan (Logistics Focus) */}
      <section className="py-24 bg-white" id="growth">
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

      {/* Contact / Footer */}
      <footer className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 mb-16 pb-16 border-b border-slate-800">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-8">
                <Sun className="w-10 h-10 text-orange-500" fill="currentColor" />
                <div className="flex flex-col">
                  <span className="font-bold text-xl tracking-tight text-white leading-none uppercase">Sunrise &</span>
                  <span className="font-bold text-xl tracking-tight text-slate-500 leading-none uppercase">Talent Centre</span>
                </div>
              </div>
              <p className="text-slate-400 mb-8">
                Beyond Transportation. Beyond Talent. Your trusted partners for comprehensive transport, logistics, and business consulting in Botswana and the SADC region.
              </p>
              <div className="flex items-start gap-4 mb-4">
                <Mail className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Shared Postal Address</p>
                  <p className="text-slate-400">P. O. Box 45441, Riverwalk<br/>Gaborone, Botswana</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Truck className="w-5 h-5 text-orange-500" /> Sunrise Logistics
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-sm">Plot 21571, Phakalane<br/>Gaborone, Botswana</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                  <a href="tel:+26778729907" className="text-slate-400 text-sm hover:text-orange-400 transition-colors">+267 787 299 07</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                  <a href="mailto:admin@sunriselogistics.co.bw" className="text-slate-400 text-sm hover:text-orange-400 transition-colors">admin@sunriselogistics.co.bw</a>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-orange-500" /> Talent Centre
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-sm">Plot 104, Unit 15B, GICP<br/>Gaborone, Botswana</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                  <a href="tel:+27865511594" className="text-slate-400 text-sm hover:text-orange-400 transition-colors">+27 86 551 1594</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                  <a href="mailto:info@talentcentre.co.za" className="text-slate-400 text-sm hover:text-orange-400 transition-colors">info@talentcentre.co.za</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} Sunrise Logistics & Talent Centre. All rights reserved. Web Dev by Ras Ali.
            </div>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
