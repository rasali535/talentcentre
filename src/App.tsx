import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  BarChart3, 
  Truck, 
  Layers, 
  Search, 
  Settings, 
  PlayCircle, 
  Activity, 
  ShieldCheck, 
  Snowflake, 
  Store, 
  CheckCircle2,
  Globe,
  TrendingUp,
  Map
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

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">OmniStream</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#process" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Process</a>
              <a href="#infrastructure" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Infrastructure</a>
              <a href="#industries" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Industries</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden md:block text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                Client Login
              </button>
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20">
                Request Audit
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600/20 blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/logistics/1920/1080?blur=4')] opacity-20 mix-blend-overlay bg-cover bg-center" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-200 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Intelligence in Motion
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Precision Logistics Meets <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Strategic Business Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              We don't just move your cargo. We engineer the supply chain strategies that make every movement more profitable, efficient, and scalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25">
                Explore Managed Solutions
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                Request a Strategic Audit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Strategic Edge */}
      <section className="py-24 bg-white" id="edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                The "Why" of Consulting.<br />
                <span className="text-blue-600">The "How" of Logistics.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We bridge the gap between boardroom strategy and ground-level execution. By integrating high-level advisory with physical transportation, we turn your supply chain from a cost center into a competitive advantage.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Strategy (The Why)</h3>
                    <p className="text-slate-600">Market Research, Financial Advisory, and comprehensive Supply Chain Audits to uncover hidden efficiencies.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Execution (The How)</h3>
                    <p className="text-slate-600">Global Freight Management, Advanced Warehousing, and strict Cold Chain Integrity to deliver flawlessly.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/strategy/800/600" 
                  alt="Strategic Logistics" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">22%</div>
                        <div className="text-sm text-blue-200">Average Cost Reduction</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">Achieved through our integrated advisory and execution model.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Unified Service Tiers */}
      <section className="py-24 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Unified Service Tiers</h2>
            <p className="text-lg text-slate-600">Choose the level of integration that fits your growth phase. From pure advisory to fully managed 4PL solutions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Tier 1: Strategic Advisory",
                focus: "Growth-driven advisory and optimization.",
                features: ["Supply Chain Audits", "Route Optimization", "Financial & Cost Analysis", "Market Expansion Strategy"],
                color: "blue"
              },
              {
                icon: Truck,
                title: "Tier 2: Operational Execution",
                focus: "Flawless physical movement and storage.",
                features: ["Global Freight Forwarding", "Advanced Warehousing", "Cold Chain Management", "Last-Mile Delivery"],
                color: "indigo"
              },
              {
                icon: Layers,
                title: "Tier 3: Managed Solutions",
                focus: "The hybrid powerhouse. We consult AND execute.",
                features: ["Fully Integrated 4PL Services", "Dedicated Account Management", "Continuous Performance Monitoring", "Dynamic Route Adjustment"],
                color: "slate",
                featured: true
              }
            ].map((tier, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`h-full rounded-2xl p-8 border ${tier.featured ? 'bg-slate-900 text-white border-slate-800 shadow-xl' : 'bg-white text-slate-900 border-slate-200 shadow-sm'}`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${tier.featured ? 'bg-blue-600' : 'bg-slate-100'}`}>
                    <tier.icon className={`w-7 h-7 ${tier.featured ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{tier.title}</h3>
                  <p className={`mb-8 ${tier.featured ? 'text-slate-300' : 'text-slate-600'}`}>{tier.focus}</p>
                  <ul className="space-y-4">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${tier.featured ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className={`text-sm ${tier.featured ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Integrated Process */}
      <section className="py-24 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Intelligence in Motion: Our 4-Step Methodology</h2>
            <p className="text-lg text-slate-600">How we merge consulting frameworks with physical delivery milestones.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />
            
            {[
              { icon: Search, title: "1. Discovery & Audit", desc: "Deep-dive analysis of your current supply chain and financial bottlenecks.", type: "Consulting" },
              { icon: Settings, title: "2. Strategy Development", desc: "Designing a custom logistics blueprint optimized for cost, speed, and scale.", type: "Consulting" },
              { icon: PlayCircle, title: "3. Flawless Implementation", desc: "Deploying our advanced fleet and warehousing network to execute the plan.", type: "Logistics" },
              { icon: Activity, title: "4. Real-Time Monitoring", desc: "24/7 GPS tracking combined with continuous strategic refinement.", type: "Hybrid" }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full shadow-lg flex items-center justify-center mb-6 relative z-10">
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600 mb-3 uppercase tracking-wider">
                      {step.type}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Excellence */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden" id="infrastructure">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Infrastructure Built for <br/>Reliability & Innovation
              </h2>
              <p className="text-lg text-slate-300 mb-10">
                Our strategic insights are powered by a world-class physical infrastructure. We own the assets, the technology, and the expertise to guarantee performance.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">99.9% On-Time Delivery Rate</h4>
                    <p className="text-slate-400">Precision scheduling backed by predictive analytics and dynamic routing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                    <Map className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Real-Time GPS & Telematics</h4>
                    <p className="text-slate-400">Total visibility from origin to destination via our proprietary client portal.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                    <Truck className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Diverse, Climate-Controlled Fleet</h4>
                    <p className="text-slate-400">Equipped for the most sensitive cargo, from pharmaceuticals to perishables.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/fleet1/400/500" alt="Fleet" className="rounded-2xl object-cover h-full w-full" referrerPolicy="no-referrer" />
                <div className="grid grid-rows-2 gap-4">
                  <img src="https://picsum.photos/seed/warehouse/400/240" alt="Warehouse" className="rounded-2xl object-cover h-full w-full" referrerPolicy="no-referrer" />
                  <div className="bg-blue-600 rounded-2xl p-6 flex flex-col justify-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-blue-100 font-medium">Active Fleet Assets</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-24 bg-slate-50" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Specialized Solutions for Critical Sectors</h2>
            <p className="text-lg text-slate-600">Our Consultancy + Transport model is specifically tailored to industries where precision is non-negotiable.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Pharmaceuticals", desc: "Strict temperature controls, regulatory compliance, and secure, audited routing for life-saving cargo." },
              { icon: Snowflake, title: "Food & Beverage", desc: "Cold chain mastery ensuring farm-to-shelf freshness, minimal spoilage, and rapid distribution." },
              { icon: Store, title: "Retail & FMCG", desc: "Agile, scalable distribution models designed to meet fluctuating consumer demands and seasonal peaks." }
            ].map((ind, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <ind.icon className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{ind.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{ind.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Proven Results in Strategy and Delivery</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200 relative">
                <div className="absolute top-8 right-8 text-6xl text-slate-200 font-serif leading-none">"</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">Strategic Win</span>
                  </div>
                  <p className="text-xl text-slate-700 font-medium mb-8 leading-relaxed">
                    "OmniStream didn't just give us trucks; they restructured our entire distribution model, reducing our supply chain costs by 22% in the first year."
                  </p>
                  <div>
                    <div className="font-bold text-slate-900">Sarah Jenkins</div>
                    <div className="text-sm text-slate-500">VP of Operations, Global Retailer</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200 relative">
                <div className="absolute top-8 right-8 text-6xl text-slate-200 font-serif leading-none">"</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full">Operational Win</span>
                  </div>
                  <p className="text-xl text-slate-700 font-medium mb-8 leading-relaxed">
                    "Their cold chain integrity is unmatched. Zero temperature excursions and 100% on-time delivery for our critical vaccine rollout."
                  </p>
                  <div>
                    <div className="font-bold text-slate-900">Dr. Marcus Chen</div>
                    <div className="text-sm text-slate-500">Director of Logistics, PharmaCorp</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 pb-16 border-b border-slate-800">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Ready to optimize your supply chain?</h2>
              <p className="text-lg text-slate-400">Let's build a strategic logistics plan tailored to your growth goals.</p>
            </div>
            <div className="flex justify-md-end">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
                Request a Strategic Audit
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">OmniStream</span>
            </div>
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} OmniStream Logistics & Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
