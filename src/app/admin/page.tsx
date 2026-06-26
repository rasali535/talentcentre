'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Users, Calendar, FileText, Video, LogIn, Shield, RefreshCw, LayoutDashboard, Plus } from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  
  // Login State
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Dashboard Data State
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    leads: 0,
    events: 0,
    articles: 0,
    videos: 0,
  });
  
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [recentEvents, setRecentEvents] = useState<any[]>([]);

  const fetchDashboardData = useCallback(async () => {
    setLoading(true);
    try {
      const [leadsRes, eventsRes, blogsRes, videoBlogsRes] = await Promise.all([
        fetch('/api/leads', { headers: { 'Authorization': `Bearer ${localStorage.getItem('admin_token') || ''}` } }),
        fetch('/api/events'),
        fetch('/api/blogs'),
        fetch('/api/video-blogs'),
      ]);

      const leadsData = leadsRes.ok ? await leadsRes.json() : { leads: [] };
      const eventsData = eventsRes.ok ? await eventsRes.json() : { registrations: [] };
      const blogsData = blogsRes.ok ? await blogsRes.json() : { blogs: [] };
      const videoBlogsData = videoBlogsRes.ok ? await videoBlogsRes.json() : { videoBlogs: [] };

      const leadsArr = leadsData.leads || [];
      const eventsArr = eventsData.registrations || [];

      setStats({
        leads: leadsArr.length,
        events: eventsArr.length,
        articles: blogsData.blogs?.length || 0,
        videos: videoBlogsData.videoBlogs?.length || 0,
      });
      
      setRecentLeads(leadsArr.slice(0, 5));
      setRecentEvents(eventsArr.slice(0, 5));
    } catch (err) {
      console.error('Failed to fetch dashboard data', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const name = localStorage.getItem('admin_name');
    if (token) {
      setAuthenticated(true);
      if (name) setUserName(name);
      fetchDashboardData();
    }
  }, [fetchDashboardData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    let name = '';
    
    // Auth Check
    if (usernameInput === 'admin' && passwordInput === 'TalentCentre2026!') name = 'Admin';
    else if (usernameInput === 'admin@test.com' && passwordInput === 'admin123') name = 'Admin';
    else if (usernameInput === 'tafadzwa@talentcentre.co.za' && passwordInput === 'Fadzi@2016') name = 'Tafadzwa';
    else if (usernameInput === 'humphrey@talentcentre.co.za' && passwordInput === 'Talent2016') name = 'Humphrey';

    if (name) {
      localStorage.setItem('admin_token', process.env.JWT_SECRET || 'tc-jwt-secret-dev-only-change-in-prod');
      localStorage.setItem('admin_name', name);
      setUserName(name);
      setAuthenticated(true);
      setAuthError('');
      fetchDashboardData();
    } else {
      setAuthError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_name');
    setAuthenticated(false);
    setUserName('');
    setUsernameInput('');
    setPasswordInput('');
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-600 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-white">Admin Portal</h1>
            <p className="text-steel-400 text-sm mt-2">Talent Centre Management</p>
          </div>
          <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
            {authError && <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm text-center">{authError}</div>}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-steel-300 mb-1.5">Email / Username</label>
                <input value={usernameInput} onChange={e => setUsernameInput(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-steel-500 focus:outline-none focus:border-accent-red transition-colors" placeholder="admin@talentcentre.co.za" />
              </div>
              <div>
                <label className="block text-sm font-medium text-steel-300 mb-1.5">Password</label>
                <input type="password" value={passwordInput} onChange={e => setPasswordInput(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-steel-500 focus:outline-none focus:border-accent-red transition-colors" placeholder="••••••••" />
              </div>
              <button type="submit" className="w-full px-4 py-3.5 mt-2 rounded-xl bg-accent-red text-white font-semibold hover:bg-accent-red-dark transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-accent-red/20">
                <LogIn className="w-4 h-4" /> Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-steel-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-heading font-bold text-charcoal-700 tracking-tight">
              Welcome back{userName ? `, ${userName}` : ''}! 👋
            </h1>
            <p className="text-steel-500 mt-2 text-lg">Here's what's happening with Talent Centre today.</p>
          </div>
          <div className="flex gap-3 items-center">
            <Link href="/admin/blogs/create" className="px-5 py-2.5 rounded-xl bg-accent-red text-white text-sm font-medium hover:bg-accent-red-dark transition-colors shadow-sm flex items-center gap-2 hidden sm:flex">
              <Plus className="w-4 h-4" /> New Article
            </Link>
            <button onClick={fetchDashboardData} disabled={loading} className="px-5 py-2.5 rounded-xl bg-white border border-steel-200 text-steel-600 text-sm font-medium hover:bg-steel-50 transition-colors shadow-sm flex items-center gap-2">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
            </button>
            <button onClick={handleLogout} className="px-5 py-2.5 rounded-xl bg-white border border-steel-200 text-steel-600 text-sm font-medium hover:bg-steel-50 transition-colors shadow-sm">
              Logout
            </button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Link href="/admin/leads" className="bg-white rounded-2xl border border-steel-200 p-6 shadow-sm hover:shadow-md transition-shadow group block">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent-red group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <p className="text-3xl font-heading font-bold text-charcoal-800">{loading ? '-' : stats.leads}</p>
            <p className="text-steel-500 font-medium mt-1">Total Leads</p>
          </Link>
          
          <Link href="/admin/events" className="bg-white rounded-2xl border border-steel-200 p-6 shadow-sm hover:shadow-md transition-shadow group block">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <p className="text-3xl font-heading font-bold text-charcoal-800">{loading ? '-' : stats.events}</p>
            <p className="text-steel-500 font-medium mt-1">Event Registrations</p>
          </Link>

          <Link href="/admin/blogs" className="bg-white rounded-2xl border border-steel-200 p-6 shadow-sm hover:shadow-md transition-shadow group block">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <p className="text-3xl font-heading font-bold text-charcoal-800">{loading ? '-' : stats.articles}</p>
            <p className="text-steel-500 font-medium mt-1">Published Articles</p>
          </Link>

          <Link href="/admin/blogs" className="bg-white rounded-2xl border border-steel-200 p-6 shadow-sm hover:shadow-md transition-shadow group block">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <Video className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <p className="text-3xl font-heading font-bold text-charcoal-800">{loading ? '-' : stats.videos}</p>
            <p className="text-steel-500 font-medium mt-1">Video Blogs</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Recent Leads */}
          <div className="bg-white rounded-2xl border border-steel-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-steel-100 flex justify-between items-center">
              <h2 className="text-xl font-heading font-bold text-charcoal-700 flex items-center gap-2">
                <Users className="w-5 h-5 text-accent-red" /> Recent Leads
              </h2>
              <Link href="/admin/leads" className="text-sm font-medium text-accent-red hover:text-accent-red-dark">View All ➔</Link>
            </div>
            <div className="flex-1 p-0 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-steel-50">
                  <tr>
                    <th className="px-6 py-3 text-xs font-semibold text-steel-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-xs font-semibold text-steel-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-xs font-semibold text-steel-500 uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-50">
                  {loading ? (
                    <tr><td colSpan={3} className="p-6 text-center text-steel-500">Loading...</td></tr>
                  ) : recentLeads.length === 0 ? (
                    <tr><td colSpan={3} className="p-6 text-center text-steel-400">No leads found.</td></tr>
                  ) : (
                    recentLeads.map((lead: any) => (
                      <tr key={lead.id} className="hover:bg-steel-50/50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-charcoal-700">{lead.fullName}</div>
                          <div className="text-xs text-steel-500">{lead.email}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${lead.inquiryType === 'consultation' ? 'bg-blue-100 text-blue-700' : lead.inquiryType === 'partnership' ? 'bg-amber-100 text-amber-700' : 'bg-purple-100 text-purple-700'}`}>
                            {lead.inquiryType}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-steel-500">{new Date(lead.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Event Registrations */}
          <div className="bg-white rounded-2xl border border-steel-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-steel-100 flex justify-between items-center">
              <h2 className="text-xl font-heading font-bold text-charcoal-700 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" /> Recent Event Registrations
              </h2>
              <Link href="/admin/events" className="text-sm font-medium text-blue-600 hover:text-blue-800">View All ➔</Link>
            </div>
            <div className="flex-1 p-0 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-steel-50">
                  <tr>
                    <th className="px-6 py-3 text-xs font-semibold text-steel-500 uppercase">Attendee</th>
                    <th className="px-6 py-3 text-xs font-semibold text-steel-500 uppercase">Event</th>
                    <th className="px-6 py-3 text-xs font-semibold text-steel-500 uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-50">
                  {loading ? (
                    <tr><td colSpan={3} className="p-6 text-center text-steel-500">Loading...</td></tr>
                  ) : recentEvents.length === 0 ? (
                    <tr><td colSpan={3} className="p-6 text-center text-steel-400">No registrations found.</td></tr>
                  ) : (
                    recentEvents.map((reg: any) => (
                      <tr key={reg.id} className="hover:bg-steel-50/50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-charcoal-700">{reg.fullName}</div>
                          <div className="text-xs text-steel-500">{reg.email}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-charcoal-700 font-medium truncate max-w-[150px]">{reg.eventName}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-steel-500">{new Date(reg.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
