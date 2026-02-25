import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, LogIn, Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const closeMenu = () => setIsMobileMenuOpen(false);
  
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 sm:gap-4" onClick={closeMenu}>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Talent Centre" className="h-12 sm:h-16 object-contain shrink-0" onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }} />
              <div className="hidden flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-red-800 leading-none uppercase">Talent</span>
                <span className="font-bold text-sm sm:text-base tracking-tight text-slate-500 leading-none uppercase">Centre</span>
              </div>
            </div>
            <div className="h-6 sm:h-8 w-px bg-slate-300 shrink-0"></div>
            <div className="flex items-center gap-1.5 sm:gap-2 opacity-70">
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0">
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900 leading-none uppercase">Sunrise</span>
                <span className="font-bold text-[8px] sm:text-[9px] tracking-tight text-slate-500 leading-none uppercase">Logistics</span>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'}`}>Home</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'}`}>Who We Are</Link>
            <Link to="/services" className={`text-sm font-medium transition-colors ${isActive('/services') ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'}`}>Our Services</Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'}`}>Contact</Link>
          </div>
          
          {/* Desktop Right Buttons & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/login" className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">
              <LogIn className="w-4 h-4" />
              Client Portal
            </Link>
            <Link to="/book" className="hidden sm:flex bg-orange-500 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/20 whitespace-nowrap">
              Book a Service
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 -mr-2 text-slate-600 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-xl absolute w-full max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" onClick={closeMenu} className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive('/') ? 'text-orange-600 bg-orange-50' : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'}`}>Home</Link>
            <Link to="/about" onClick={closeMenu} className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive('/about') ? 'text-orange-600 bg-orange-50' : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'}`}>Who We Are</Link>
            <Link to="/services" onClick={closeMenu} className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive('/services') ? 'text-orange-600 bg-orange-50' : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'}`}>Our Services</Link>
            <Link to="/contact" onClick={closeMenu} className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive('/contact') ? 'text-orange-600 bg-orange-50' : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'}`}>Contact</Link>
            
            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link to="/login" onClick={closeMenu} className="flex items-center justify-center gap-2 w-full px-4 py-3.5 text-base font-medium text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
                <LogIn className="w-5 h-5" /> Client Portal
              </Link>
              <Link to="/book" onClick={closeMenu} className="flex items-center justify-center w-full bg-orange-500 text-white px-4 py-3.5 rounded-xl text-base font-bold hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/20">
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
