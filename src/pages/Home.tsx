import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-orange-500/20 blur-[120px]" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-slate-600/20 blur-[100px]" />
          {/* Logistics background */}
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] opacity-30 mix-blend-overlay bg-cover bg-center" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-orange-300 mb-8 backdrop-blur-sm uppercase tracking-widest">
              <Sun className="w-4 h-4" />
              Integrated Logistics & Business Consulting
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] perspective-1000">
              <motion.div className="overflow-hidden pb-2">
                <motion.span variants={wordVariants} className="inline-block">Beyond</motion.span>{' '}
                <motion.span variants={wordVariants} className="inline-block">Transportation.</motion.span>
              </motion.div>
              <motion.div className="overflow-hidden pt-2">
                <motion.span variants={wordVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  Beyond
                </motion.span>{' '}
                <motion.span variants={wordVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  Talent.
                </motion.span>
              </motion.div>
            </h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              From moving your cargo across the SADC region to scaling your business with expert advisory, we are your comprehensive growth partner.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services" className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 group">
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-24 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Welcome to Talent Centre Consultancy & Logistics</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            We bring together two powerhouse divisions to serve your business holistically. <strong>Sunrise Logistics</strong> ensures your physical supply chain operates flawlessly across Botswana and the SADC region. Meanwhile, <strong>Talent Centre</strong> provides the management and training consultancy you need to overcome business challenges.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/about" className="group text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2 transition-colors">
              Learn more about us 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
