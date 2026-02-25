import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, LogIn } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Sun className="w-8 h-8 text-orange-500" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-slate-900 leading-none uppercase">Sunrise</span>
                <span className="font-bold text-xs tracking-tight text-slate-500 leading-none uppercase">Logistics</span>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Talent Centre" className="h-10 object-contain" onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }} />
              <div className="hidden flex-col">
                <span className="font-bold text-lg tracking-tight text-red-800 leading-none uppercase">Talent</span>
                <span className="font-bold text-xs tracking-tight text-slate-500 leading-none uppercase">Centre</span>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'}`}>Home</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'}`}>Who We Are</Link>
            <Link to="/services" className={`text-sm font-medium transition-colors ${isActive('/services') ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'}`}>Our Services</Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'}`}>Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">
              <LogIn className="w-4 h-4" />
              Client Portal
            </Link>
            <Link to="/book" className="bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/20">
              Book a Service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
