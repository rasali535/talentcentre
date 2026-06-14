'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown in this session/browser
    const hasSeenPopup = localStorage.getItem('hasSeenEventPopup');
    
    if (!hasSeenPopup) {
      // Delay showing the popup slightly for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000); // 3 seconds delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenEventPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-premium-xl overflow-hidden border border-steel-200"
          >
            {/* Header / Banner */}
            <div className="bg-gradient-to-r from-charcoal-800 to-charcoal-600 p-6 text-center relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="inline-block px-3 py-1 bg-accent-red/20 border border-accent-red/30 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
                Upcoming Event
              </span>
              <h2 className="text-2xl font-heading font-bold text-white">
                'Tsala Ya Nnete'
              </h2>
              <p className="text-steel-300 text-sm mt-1">Business Sessions</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-red/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-accent-red" />
                  </div>
                  <div>
                    <p className="text-xs text-steel-500 font-medium uppercase tracking-wider">Date</p>
                    <p className="text-steel-700 font-medium">Second Thursday of the month</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-steel-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-steel-600" />
                  </div>
                  <div>
                    <p className="text-xs text-steel-500 font-medium uppercase tracking-wider">Time</p>
                    <p className="text-steel-700 font-medium">17:30hrs - 19:30hrs</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-steel-500 font-medium uppercase tracking-wider">Location</p>
                    <p className="text-steel-700 font-medium">Physical & Online Groups Available</p>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                href="/events"
                className="w-full"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => localStorage.setItem('hasSeenEventPopup', 'true')}
              >
                Register Now
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
