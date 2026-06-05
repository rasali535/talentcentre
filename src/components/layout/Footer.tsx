import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Business Consultancy', href: '/services/business-consultancy' },
    { label: 'Talent & HR Advisory', href: '/services/talent-hr-advisory' },
    { label: 'Training & Development', href: '/services/training-development' },
    { label: 'Organizational Development', href: '/services/organizational-development' },
    { label: 'Strategic Advisory', href: '/services/strategic-advisory' },
    { label: 'Empowerment Programs', href: '/services/empowerment-programs' },
  ],
  industries: [
    { label: 'Government & Public Sector', href: '/industries#government' },
    { label: 'Corporate Enterprises', href: '/industries#corporate' },
    { label: 'SMEs & Startups', href: '/industries#sme' },
    { label: 'NGO & Development', href: '/industries#ngo' },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6 bg-white/10 p-2 rounded-xl border border-white/5 hover:bg-white/15 transition-colors">
                <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg bg-white">
                  <Image src="/logo.png" alt="Talent Centre Logo" fill className="object-contain" />
                </div>
                <div>
                  <span className="font-heading font-bold text-lg text-white">Talent Centre</span>
                  <span className="block text-[9px] font-medium tracking-[0.1em] uppercase text-white/50">
                    Training & Management
                  </span>
                </div>
              </Link>
              <p className="text-steel-300 text-sm leading-relaxed mb-6">
                Strategic consultancy and advisory services driving sustainable business growth
                across Southern Africa.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-accent-red/20 hover:border-accent-red/30 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-accent-red/20 hover:border-accent-red/30 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-white/40 mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-steel-300 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-white/40 mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-steel-300 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-white/40 mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@talentcentre.co.za"
                    className="flex items-start gap-3 text-sm text-steel-300 hover:text-white transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 mt-0.5 text-accent-red" />
                    info@talentcentre.co.za
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+27865511594"
                    className="flex items-start gap-3 text-sm text-steel-300 hover:text-white transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-accent-red" />
                    +27 86 551 1594
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+26775618647"
                    className="flex items-start gap-3 text-sm text-steel-300 hover:text-white transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-accent-red" />
                    +267 75 618 647
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-steel-300">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent-red flex-shrink-0" />
                  <span>
                    Plot 104, Unit 15B
                    <br />
                    Gaborone International Commerce Park
                    <br />
                    Botswana
                  </span>
                </li>
              </ul>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+26775618647').replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg bg-green-600/20 border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-600/30 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-steel-400 text-xs">
              © {currentYear} Talent Centre Consultancy. All rights reserved.
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
