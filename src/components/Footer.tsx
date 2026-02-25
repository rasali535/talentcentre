import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Truck, Briefcase, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16 pb-16 border-b border-slate-800">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Sun className="w-8 h-8 text-orange-500" fill="currentColor" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-tight text-white leading-none uppercase">Sunrise</span>
                </div>
              </div>
              <div className="h-6 w-px bg-slate-700"></div>
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Talent Centre" className="h-8 object-contain brightness-0 invert opacity-90" onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }} />
                <div className="hidden flex-col">
                  <span className="font-bold text-lg tracking-tight text-white leading-none uppercase">Talent Centre</span>
                </div>
              </div>
            </div>
            <p className="text-slate-400 mb-8">
              Beyond Transportation. Beyond Talent. Your trusted partners for comprehensive transport, logistics, and business consulting in Botswana and the SADC region.
            </p>
            <div className="flex items-start gap-4 mb-4">
              <Mail className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">Shared Postal Address</p>
                <p className="text-slate-400">P. O. Box 45441, Riverwalk<br/>Gaborone, Botswana</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Truck className="w-5 h-5 text-orange-500" /> Sunrise Logistics
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm">Plot 21571, Phakalane<br/>Gaborone, Botswana</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                <a href="tel:+26778729907" className="text-slate-400 text-sm hover:text-orange-400 transition-colors">+267 787 299 07</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                <a href="mailto:admin@sunriselogistics.co.bw" className="text-slate-400 text-sm hover:text-orange-400 transition-colors">admin@sunriselogistics.co.bw</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-orange-500" /> Talent Centre
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm">Plot 104, Unit 15B, GICP<br/>Gaborone, Botswana</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                <a href="tel:+27865511594" className="text-slate-400 text-sm hover:text-orange-400 transition-colors">+27 86 551 1594</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                <a href="mailto:info@talentcentre.co.za" className="text-slate-400 text-sm hover:text-orange-400 transition-colors">info@talentcentre.co.za</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Talent Centre Consultancy & Logistics. All rights reserved. Web Dev by Ras Ali.
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
