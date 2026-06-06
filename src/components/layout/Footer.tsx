import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  Globe,
  ExternalLink,
} from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-700 text-white relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
            
            {/* Left: Logo & Socials */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <Link href="/" className="inline-block bg-white/90 p-1.5 rounded-xl border border-white/20 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden rounded-lg">
                  <Image src="/logo.png" alt="Talent Centre Logo" fill className="object-contain" />
                </div>
              </Link>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-accent-red/20 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/rasali535/talentcentre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300"
                  title="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a
                  href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+26775618647').replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-400 hover:text-green-300 transition-all duration-300"
                  title="Chat on WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Middle: Company Links */}
            <ul className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-steel-300 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right: Contact */}
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
              <a
                href="mailto:info@talentcentre.co.za"
                className="flex items-center gap-2 text-sm text-steel-300 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-accent-red" />
                info@talentcentre.co.za
              </a>
              <a
                href="tel:+26775618647"
                className="flex items-center gap-2 text-sm text-steel-300 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-accent-red" />
                +267 75 618 647
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-steel-400 text-xs text-center sm:text-left">
              © {currentYear} Talent Centre. All rights reserved. | Web dev by Ras Ali Labs
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-steel-400 hover:text-white text-xs transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-steel-400 hover:text-white text-xs transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
