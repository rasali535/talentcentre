import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-800 text-white">
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
              <Link to="/services" className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25">
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Welcome to Talent Centre Consultancy & Logistics</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            We bring together two powerhouse divisions to serve your business holistically. <strong>Sunrise Logistics</strong> ensures your physical supply chain operates flawlessly across Botswana and the SADC region. Meanwhile, <strong>Talent Centre</strong> provides the management and training consultancy you need to overcome business challenges.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/about" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2">
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
