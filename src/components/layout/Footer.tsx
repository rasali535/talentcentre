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
                <div className="relative w-32 h-14 flex items-center justify-center overflow-hidden rounded-lg">
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
