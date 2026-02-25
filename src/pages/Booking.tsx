import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Truck, Briefcase, Send, User, Mail, Phone, Building } from 'lucide-react';

export default function Booking() {
  const [category, setCategory] = useState<'logistics' | 'consulting'>('logistics');

  const logisticsServices = [
    "Transportation & Cross Border",
    "Customs Clearance",
    "Logistics Management",
    "Warehousing & Storage",
    "Cold Chain Logistics"
  ];

  const consultingServices = [
    "Business Advisory & Coaching",
    "Management & Financial Services",
    "Training & Employee Wellness",
    "Empowerment & Incubation Programs"
  ];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-slate-50 min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">Book a Service</h1>
            <p className="text-lg text-slate-600">Schedule a consultation or request a logistics service quote.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row border-b border-slate-200">
              <button
                type="button"
                onClick={() => setCategory('logistics')}
                className={`flex-1 py-6 px-6 flex items-center justify-center gap-3 text-lg font-semibold transition-colors ${
                  category === 'logistics' 
                    ? 'bg-orange-50 text-orange-600 border-b-2 border-orange-500' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <Truck className="w-6 h-6" />
                Sunrise Logistics
              </button>
              <button
                type="button"
                onClick={() => setCategory('consulting')}
                className={`flex-1 py-6 px-6 flex items-center justify-center gap-3 text-lg font-semibold transition-colors ${
                  category === 'consulting' 
                    ? 'bg-slate-800 text-white border-b-2 border-slate-900' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <Briefcase className="w-6 h-6" />
                Talent Centre Consulting
              </button>
            </div>

            <form className="p-8 md:p-12 space-y-8">
              {/* Service Selection */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Select a Service</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {(category === 'logistics' ? logisticsServices : consultingServices).map((service, idx) => (
                    <label key={idx} className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-orange-500 hover:bg-orange-50/50 transition-colors has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50 has-[:checked]:ring-1 has-[:checked]:ring-orange-500">
                      <input type="radio" name="service" value={service} className="mt-1 text-orange-500 focus:ring-orange-500" />
                      <span className="font-medium text-slate-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Preferred Date & Time</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" /> Date
                    </label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" /> Time
                    </label>
                    <input type="time" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white" />
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Your Details</h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-400" /> Full Name
                    </label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <Building className="w-4 h-4 text-slate-400" /> Company Name
                    </label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-slate-400" /> Email Address
                    </label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-slate-400" /> Phone Number
                    </label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="+267 71 234 567" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Additional Notes or Requirements</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none" placeholder="Please provide any specific details about your cargo, route, or consulting needs..."></textarea>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button type="button" className={`w-full py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg ${
                  category === 'logistics' 
                    ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/25' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/25'
                }`}>
                  Confirm Booking Request <Send className="w-5 h-5" />
                </button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  Our team will contact you within 24 hours to confirm your booking.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
