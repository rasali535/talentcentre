import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, ArrowRight, Mail, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would authenticate here.
    // For now, we just redirect to the portal dashboard.
    navigate('/portal');
  };

  return (
    <div className="min-h-screen flex bg-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Left Side - Image/Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/logistics-login/1920/1080?blur=2')] opacity-40 mix-blend-overlay bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <Link to="/" className="flex items-center gap-2">
            <Sun className="w-10 h-10 text-orange-500" fill="currentColor" />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white leading-none uppercase">Sunrise</span>
              <span className="font-bold text-xl tracking-tight text-slate-400 leading-none uppercase">Logistics</span>
            </div>
          </Link>

          <div className="max-w-md">
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Manage your supply chain with precision.
            </h2>
            <p className="text-lg text-slate-300">
              Access real-time tracking, manage documents, and oversee your entire logistics operation from one centralized dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
        >
          <div className="lg:hidden flex items-center gap-2 mb-10 justify-center">
            <Sun className="w-8 h-8 text-orange-500" fill="currentColor" />
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-900 leading-none uppercase">Sunrise</span>
              <span className="font-bold text-lg tracking-tight text-slate-500 leading-none uppercase">Portal</span>
            </div>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h1>
            <p className="text-slate-500">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-700">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-slate-600">Remember me for 30 days</label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-orange-600 hover:text-orange-700 transition-colors">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
