'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-700">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Radial glow - top right */}
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent-blue/8 rounded-full blur-3xl" />
        
        {/* Radial glow - bottom left */}
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-3xl" />

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-20 h-20 border border-white/5 rounded-2xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-1/3 w-14 h-14 border border-accent-blue/10 rounded-full"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/6 w-3 h-3 bg-accent-gold/30 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium tracking-wider uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse-soft" />
                Premium Consultancy Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
            >
              Strategic Consultancy for{' '}
              <span className="gradient-text">Sustainable Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-steel-300 leading-relaxed mb-10 max-w-xl"
            >
              We partner with forward-thinking organizations to build resilient strategies,
              develop exceptional talent, and drive transformative business outcomes across
              Southern Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight className="w-4 h-4" />}>
                Book a Consultation
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/services"
                className="text-white/80 hover:text-white hover:bg-white/10"
                icon={<Play className="w-4 h-4" />}
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-8 mt-14 pt-10 border-t border-white/10"
            >
              <div>
                <p className="text-3xl font-heading font-bold text-white">15+</p>
                <p className="text-xs text-steel-400 mt-1">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-3xl font-heading font-bold text-white">200+</p>
                <p className="text-xs text-steel-400 mt-1">Clients Served</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-3xl font-heading font-bold text-white">98%</p>
                <p className="text-xs text-steel-400 mt-1">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main decorative card */}
              <div className="absolute inset-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-white font-heading font-semibold text-lg mb-2">Business Growth Strategy</h3>
                    <p className="text-steel-400 text-sm">End-to-end advisory that transforms your organization&apos;s trajectory</p>
                  </div>
                  
                  {/* Mini chart bars */}
                  <div className="flex items-end gap-2 mt-8">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 75, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.8 + i * 0.08 }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-blue/40 to-accent-blue/80"
                        style={{ maxHeight: `${h}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 px-5 py-3"
              >
                <p className="text-accent-gold font-heading font-bold text-xl">+47%</p>
                <p className="text-white/60 text-xs">Revenue Growth</p>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 px-5 py-3"
              >
                <p className="text-green-400 font-heading font-bold text-xl">A+</p>
                <p className="text-white/60 text-xs">Client Rating</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
