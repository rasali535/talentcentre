import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-xl bg-accent-red/20 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-accent-red font-heading font-bold text-2xl">T</span>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-slate rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-accent-red rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        </div>
        <p className="text-steel-400 text-sm font-medium tracking-wider uppercase animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
