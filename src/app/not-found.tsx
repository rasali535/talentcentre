import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="max-w-md w-full text-center relative z-10">
        <div className="w-20 h-20 rounded-2xl bg-white shadow-premium flex items-center justify-center mx-auto mb-8 relative">
          <span className="text-4xl font-heading font-bold gradient-text-blue">404</span>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-slate rounded-full animate-ping" />
        </div>
        
        <h1 className="text-3xl font-heading font-bold text-charcoal-700 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-steel-500 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" href="/" icon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
          <Button variant="outline" href="/contact" icon={<ArrowLeft className="w-4 h-4" />}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
