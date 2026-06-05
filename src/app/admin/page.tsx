'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Users, MessageSquare, TrendingUp, Clock, Search, Filter, LogIn, Shield, RefreshCw } from 'lucide-react';
import Button from '@/components/ui/Button';

interface Lead {
  id: string; fullName: string; email: string; phone?: string; companyName?: string;
  inquiryType: string; message: string; source: string; status: string; createdAt: string;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leads', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('admin_token') || ''}` },
      });
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
      }
    } catch {
      console.error('Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple auth check against env vars (in production, use proper JWT)
    if (username === 'admin' && password === 'TalentCentre2026!') {
      localStorage.setItem('admin_token', process.env.JWT_SECRET || 'tc-jwt-secret-dev-only-change-in-prod');
      setAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid credentials');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (authenticated) fetchLeads();
  }, [authenticated, fetchLeads]);

  const filteredLeads = leads.filter(l => {
    const matchesSearch = l.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (l.companyName || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || l.inquiryType === filterType;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: leads.length,
    consultation: leads.filter(l => l.inquiryType === 'consultation').length,
    inquiry: leads.filter(l => l.inquiryType === 'inquiry').length,
    partnership: leads.filter(l => l.inquiryType === 'partnership').length,
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-white">Admin Dashboard</h1>
            <p className="text-steel-400 text-sm mt-2">Talent Centre Lead Management</p>
          </div>
          <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
            {authError && <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">{authError}</div>}
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-steel-300 mb-1.5">Username</label>
                <input value={username} onChange={e => setUsername(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-steel-500" placeholder="admin" />
              </div>
              <div>
                <label className="block text-sm text-steel-300 mb-1.5">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-steel-500" placeholder="••••••••" />
              </div>
              <button type="submit" className="w-full px-4 py-3 rounded-xl bg-accent-red text-white font-semibold hover:bg-accent-red-dark transition-colors flex items-center justify-center gap-2">
                <LogIn className="w-4 h-4" /> Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-steel-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-charcoal-700">Lead Dashboard</h1>
            <p className="text-steel-500 text-sm mt-1">Manage and track all incoming inquiries</p>
          </div>
          <div className="flex gap-3">
            <button onClick={fetchLeads} disabled={loading} className="px-4 py-2 rounded-xl bg-white border border-steel-200 text-steel-600 text-sm font-medium hover:bg-steel-50 transition-colors flex items-center gap-2">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
            </button>
            <button onClick={() => { localStorage.removeItem('admin_token'); setAuthenticated(false); }} className="px-4 py-2 rounded-xl bg-white border border-steel-200 text-steel-600 text-sm font-medium hover:bg-steel-50 transition-colors">
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Leads', value: stats.total, icon: Users, color: 'text-accent-red bg-accent-red/10' },
            { label: 'Consultations', value: stats.consultation, icon: TrendingUp, color: 'text-emerald-600 bg-emerald-100' },
            { label: 'Inquiries', value: stats.inquiry, icon: MessageSquare, color: 'text-purple-600 bg-purple-100' },
            { label: 'Partnerships', value: stats.partnership, icon: Clock, color: 'text-amber-600 bg-amber-100' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-steel-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg ${s.color.split(' ')[1]} flex items-center justify-center`}>
                  <s.icon className={`w-5 h-5 ${s.color.split(' ')[0]}`} />
                </div>
              </div>
              <p className="text-2xl font-heading font-bold text-charcoal-700">{s.value}</p>
              <p className="text-steel-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel-400" />
            <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search leads..." className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-steel-200 text-sm" />
          </div>
          <select value={filterType} onChange={e => setFilterType(e.target.value)} className="px-4 py-2.5 rounded-xl bg-white border border-steel-200 text-sm text-steel-600">
            <option value="all">All Types</option>
            <option value="consultation">Consultations</option>
            <option value="inquiry">Inquiries</option>
            <option value="partnership">Partnerships</option>
          </select>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-2xl border border-steel-200 overflow-hidden">
          {filteredLeads.length === 0 ? (
            <div className="p-16 text-center">
              <Users className="w-12 h-12 text-steel-300 mx-auto mb-4" />
              <p className="text-steel-500 font-medium">No leads found</p>
              <p className="text-steel-400 text-sm mt-1">Leads will appear here when forms are submitted.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-steel-100">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-steel-500 uppercase tracking-wider">Name</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-steel-500 uppercase tracking-wider">Contact</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-steel-500 uppercase tracking-wider">Type</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-steel-500 uppercase tracking-wider">Source</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-steel-500 uppercase tracking-wider">Date</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-steel-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map(lead => (
                    <tr key={lead.id} className="border-b border-steel-50 hover:bg-steel-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-charcoal-700">{lead.fullName}</p>
                        <p className="text-xs text-steel-400">{lead.companyName || 'No company'}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-steel-600">{lead.email}</p>
                        <p className="text-xs text-steel-400">{lead.phone || '-'}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${lead.inquiryType === 'consultation' ? 'bg-blue-100 text-blue-700' : lead.inquiryType === 'partnership' ? 'bg-amber-100 text-amber-700' : 'bg-purple-100 text-purple-700'}`}>
                          {lead.inquiryType}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-steel-500">{lead.source}</td>
                      <td className="px-6 py-4 text-sm text-steel-500">{new Date(lead.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${lead.status === 'new' ? 'bg-green-100 text-green-700' : 'bg-steel-100 text-steel-600'}`}>
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
