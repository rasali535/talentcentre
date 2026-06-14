'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

type FormType = 'consultation' | 'inquiry' | 'partnership';

export default function ContactPage() {
  const [formType, setFormType] = useState<FormType>('consultation');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', companyName: '', message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, inquiryType: formType, source: 'website' }),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error('Submit error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@talentcentre.co.za', href: 'mailto:info@talentcentre.co.za' },
    { icon: Phone, label: 'South Africa', value: '+27 86 551 1594', href: 'tel:+27865511594' },
    { icon: Phone, label: 'Botswana', value: '+267 75 618 647', href: 'tel:+26775618647' },
    { icon: MapPin, label: 'Office', value: 'Plot 104, Unit 15B, GICP, Gaborone, Botswana', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Mon - Fri: 08:00 - 17:00 (CAT)', href: '#' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium tracking-wider uppercase mb-6">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Let&apos;s Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-steel-300 max-w-xl">
              Whether you need accounting services, company secretarial services, training, strategic advice, want to explore a partnership, or have a question — we&apos;re here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-heading font-bold text-charcoal-700 mb-6">Get in Touch</h2>
                <div className="space-y-5 mb-10">
                  {contactInfo.map((c) => (
                    <a key={c.label} href={c.href} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-accent-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-red/20 transition-colors">
                        <c.icon className="w-5 h-5 text-accent-red" />
                      </div>
                      <div>
                        <p className="text-xs text-steel-400 font-medium uppercase tracking-wider">{c.label}</p>
                        <p className="text-steel-700 font-medium text-sm">{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/26775618647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-green-50 border border-green-200 text-green-700 font-semibold text-sm hover:bg-green-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.15}>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-heading font-bold text-charcoal-700 mb-2">Thank You!</h3>
                    <p className="text-steel-600">Your inquiry has been received. Our team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <div className="bg-steel-50 rounded-2xl border border-steel-100 p-8">
                    {/* Form Type Tabs */}
                    <div className="flex gap-2 mb-8 flex-wrap">
                      {([['consultation', 'Book Consultation'], ['inquiry', 'General Inquiry'], ['partnership', 'Partnership']] as [FormType, string][]).map(([type, label]) => (
                        <button
                          key={type}
                          onClick={() => setFormType(type)}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${formType === type ? 'bg-accent-red text-white shadow-lg shadow-accent-red/20' : 'bg-white text-steel-600 border border-steel-200 hover:border-accent-red/30'}`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-steel-700 mb-1.5">Full Name *</label>
                          <input name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white border border-steel-200 text-charcoal-700 text-sm" placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-steel-700 mb-1.5">Email *</label>
                          <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white border border-steel-200 text-charcoal-700 text-sm" placeholder="you@company.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-steel-700 mb-1.5">Phone</label>
                          <input name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white border border-steel-200 text-charcoal-700 text-sm" placeholder="+267..." />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-steel-700 mb-1.5">Company</label>
                          <input name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white border border-steel-200 text-charcoal-700 text-sm" placeholder="Your organization" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-steel-700 mb-1.5">
                          {formType === 'consultation' ? 'What would you like to discuss? *' : formType === 'partnership' ? 'Partnership proposal *' : 'Your message *'}
                        </label>
                        <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-xl bg-white border border-steel-200 text-charcoal-700 text-sm resize-none" placeholder="Tell us about your needs..." />
                      </div>
                      <Button variant="primary" size="lg" className="w-full" icon={<Send className="w-4 h-4" />} disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                      </Button>
                    </form>
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
