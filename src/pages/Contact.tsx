import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600">We're here to help with your logistics and business consulting needs.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200"
            >
              <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white">
                    <option>Logistics Inquiry</option>
                    <option>Consulting Inquiry</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Sunrise Logistics</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Physical Address</p>
                      <p className="text-slate-600">Plot 21571, Phakalane<br/>Gaborone, Botswana</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <a href="tel:+26778729907" className="text-slate-600 hover:text-orange-600">+267 787 299 07</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a href="mailto:admin@sunriselogistics.co.bw" className="text-slate-600 hover:text-orange-600">admin@sunriselogistics.co.bw</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-200 w-full"></div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Talent Centre</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Physical Address</p>
                      <p className="text-slate-600">Plot 104, Unit 15B, GICP<br/>Gaborone, Botswana</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <a href="tel:+27865511594" className="text-slate-600 hover:text-orange-600">+27 86 551 1594</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a href="mailto:info@talentcentre.co.za" className="text-slate-600 hover:text-orange-600">info@talentcentre.co.za</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
