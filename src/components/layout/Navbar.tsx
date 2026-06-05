'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Business Consultancy', href: '/services/business-consultancy' },
      { label: 'Talent & HR Advisory', href: '/services/talent-hr-advisory' },
      { label: 'Training & Development', href: '/services/training-development' },
      { label: 'Organizational Development', href: '/services/organizational-development' },
      { label: 'Strategic Advisory', href: '/services/strategic-advisory' },
      { label: 'Empowerment Programs', href: '/services/empowerment-programs' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-premium border-b border-steel-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-blue-dark flex items-center justify-center shadow-lg shadow-accent-blue/20 group-hover:shadow-xl group-hover:shadow-accent-blue/30 transition-all duration-300">
                <span className="text-white font-heading font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-heading font-bold text-lg leading-tight transition-colors duration-300 ${
                    scrolled ? 'text-navy-700' : 'text-white'
                  }`}
                >
                  Talent Centre
                </span>
                <span
                  className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                    scrolled ? 'text-steel-400' : 'text-white/60'
                  }`}
                >
                  Consultancy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      scrolled
                        ? 'text-steel-600 hover:text-navy-700 hover:bg-steel-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-premium-xl border border-steel-100 overflow-hidden py-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-steel-600 hover:text-accent-blue hover:bg-accent-blue/5 transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+26775618647'}`}
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-steel-500 hover:text-navy-700' : 'text-white/70 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+267 75 618 647</span>
              </a>
              <Button variant="primary" size="sm" href="/contact">
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? 'text-navy-700 hover:bg-steel-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-premium-xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-steel-100">
                <span className="font-heading font-bold text-navy-700">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-steel-500 hover:bg-steel-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="py-4 px-4 overflow-y-auto max-h-[calc(100vh-80px)]">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-steel-700 font-medium hover:text-accent-blue hover:bg-accent-blue/5 rounded-lg transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 border-l-2 border-steel-100">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-sm text-steel-500 hover:text-accent-blue transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-6 px-4">
                  <Button variant="primary" size="lg" href="/contact" className="w-full">
                    Book Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
