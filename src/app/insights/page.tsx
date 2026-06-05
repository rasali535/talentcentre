'use client';

import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

const articles = [
  {
    title: '5 Signs Your Organization Needs Strategic Consulting',
    excerpt: 'Many businesses wait too long to seek external advisory. Here are the key indicators that it\'s time to bring in strategic consulting support.',
    category: 'Strategy', date: 'May 2026', readTime: '5 min read',
  },
  {
    title: 'Building Resilient Organizations in Uncertain Markets',
    excerpt: 'How forward-thinking companies are future-proofing their operations through adaptive strategy and organizational agility.',
    category: 'Leadership', date: 'Apr 2026', readTime: '7 min read',
  },
  {
    title: 'The Executive\'s Guide to Talent Retention in Africa',
    excerpt: 'Talent retention remains one of the biggest challenges for African businesses. Here\'s a data-driven approach to keeping your best people.',
    category: 'HR Advisory', date: 'Mar 2026', readTime: '6 min read',
  },
  {
    title: 'Why Culture Eats Strategy for Breakfast — And What To Do About It',
    excerpt: 'Understanding the critical relationship between organizational culture and strategic execution, and how to align the two.',
    category: 'Culture', date: 'Feb 2026', readTime: '8 min read',
  },
  {
    title: 'Market Entry Strategies for Southern African Expansion',
    excerpt: 'A practical framework for businesses looking to expand into new markets across the Southern African region.',
    category: 'Growth', date: 'Jan 2026', readTime: '10 min read',
  },
  {
    title: 'The ROI of Leadership Development Programs',
    excerpt: 'Measuring the real business impact of investing in executive development and leadership training.',
    category: 'Training', date: 'Dec 2025', readTime: '5 min read',
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium tracking-wider uppercase mb-6">Insights</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              Thought <span className="gradient-text">Leadership</span>
            </h1>
            <p className="text-lg text-steel-300 max-w-2xl">Expert perspectives on business strategy, organizational development, and leadership for Southern African markets.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.08}>
                <article className="bg-white rounded-2xl border border-steel-200 overflow-hidden hover:border-accent-blue/30 hover:shadow-premium-lg transition-all duration-400 group h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-navy-700 to-navy-600 relative">
                    <div className="absolute inset-0 grid-pattern opacity-20" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm">{article.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-steel-400 mb-3">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                      <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{article.date}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-navy-700 mb-3 group-hover:text-accent-blue transition-colors">{article.title}</h3>
                    <p className="text-steel-500 text-sm leading-relaxed flex-1">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-accent-blue text-sm font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-steel-50 border-t border-steel-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-heading font-bold text-navy-700 mb-4">Stay Informed</h2>
            <p className="text-steel-500 mb-6">Subscribe to receive our latest insights and industry perspectives directly in your inbox.</p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-xl bg-white border border-steel-200 text-sm" />
              <Button variant="primary" size="md">Subscribe</Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
