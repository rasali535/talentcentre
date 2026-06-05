'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsented = localStorage.getItem('tc_cookie_consent');
    if (!hasConsented) {
      // Small delay to not overwhelm on immediate page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('tc_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white border border-steel-200 rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-heading font-bold text-charcoal-800 mb-2">
                We value your privacy
              </h3>
              <p className="text-sm text-steel-600 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our <a href="/privacy" className="text-accent-red font-semibold hover:underline">Privacy Policy</a>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsVisible(false)}
                className="px-6 py-2.5 rounded-lg border border-steel-200 text-steel-600 font-medium text-sm hover:bg-steel-50 transition-colors w-full sm:w-auto"
              >
                Manage Settings
              </button>
              <Button
                variant="primary"
                onClick={acceptCookies}
                className="w-full sm:w-auto"
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
