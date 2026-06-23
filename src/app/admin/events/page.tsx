'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Users, RefreshCw } from 'lucide-react';

interface Registration {
  id: string; fullName: string; email: string; phone?: string; company?: string;
  eventName: string; eventType?: string; createdAt: string;
}

export default function AdminEventsPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyTo, setReplyTo] = useState<{email: string, subject: string} | null>(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [userName, setUserName] = useState('');

  const handleSendReply = async () => {
    if (!replyTo || !replyMessage) return;
    setSending(true);
    try {
      const res = await fetch('/api/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: replyTo.email, subject: replyTo.subject, message: replyMessage }),
      });
      if (res.ok) {
        setReplyTo(null);
        setReplyMessage('');
        alert('Response sent successfully!');
      } else {
        alert('Failed to send response.');
      }
    } catch {
      alert('An error occurred.');
    } finally {
      setSending(false);
    }
  };

  const fetchRegistrations = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/events');
      if (res.ok) {
        const data = await res.json();
        setRegistrations(data.registrations || []);
      }
    } catch {
      console.error('Failed to fetch event registrations');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const name = localStorage.getItem('admin_name');
    if (!token) {
      router.push('/admin');
    } else {
      setAuthenticated(true);
      if (name) setUserName(name);
      fetchRegistrations();
    }
  }, [router, fetchRegistrations]);

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-steel-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-charcoal-700">Event Registrations</h1>
            <p className="text-steel-600 mt-2">View all attendees who have registered for upcoming events.</p>
          </div>
          <div className="flex gap-4 items-center">
            {userName && <span className="text-sm font-medium text-steel-500 hidden sm:inline-block">Logged in as <strong className="text-charcoal-700">{userName}</strong></span>}
            <Link href="/admin" className="text-sm font-medium text-steel-600 hover:text-charcoal-800 transition-colors">➔ Dashboard</Link>
            <button onClick={fetchRegistrations} disabled={loading} className="px-4 py-2 rounded-xl bg-white border border-steel-200 text-steel-600 text-sm font-medium hover:bg-steel-50 transition-colors flex items-center gap-2">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
            </button>
            <button onClick={() => { localStorage.removeItem('admin_token'); localStorage.removeItem('admin_name'); setAuthenticated(false); router.push('/admin'); }} className="px-4 py-2 rounded-xl bg-white border border-steel-200 text-steel-600 text-sm font-medium hover:bg-steel-50 transition-colors">
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-premium border border-steel-200 overflow-hidden">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-8 text-center text-steel-500">Loading registrations...</div>
            ) : registrations.length === 0 ? (
              <div className="p-16 text-center">
                <Users className="w-12 h-12 text-steel-300 mx-auto mb-4" />
                <p className="text-steel-500 font-medium">No registrations found</p>
                <p className="text-steel-400 text-sm mt-1">Registrations will appear here when submitted.</p>
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-steel-50 border-b border-steel-200">
                    <th className="px-6 py-4 text-xs font-semibold text-steel-600 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-semibold text-steel-600 uppercase tracking-wider">Attendee</th>
                    <th className="px-6 py-4 text-xs font-semibold text-steel-600 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-4 text-xs font-semibold text-steel-600 uppercase tracking-wider">Event Details</th>
                    <th className="px-6 py-4 text-xs font-semibold text-steel-600 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-100">
                  {registrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-steel-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-steel-600">
                        {new Date(reg.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-charcoal-700">{reg.fullName}</div>
                        {reg.company && <div className="text-xs text-steel-500">{reg.company}</div>}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-charcoal-700">{reg.email}</div>
                        {reg.phone && <div className="text-xs text-steel-500">{reg.phone}</div>}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-charcoal-700">{reg.eventName}</div>
                        {reg.eventType && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent-red/10 text-accent-red mt-1">
                            {reg.eventType}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => setReplyTo({ email: reg.email, subject: `Talent Centre - Your Registration for ${reg.eventName}` })}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-steel-100 text-steel-700 hover:bg-steel-200 text-sm font-medium transition-colors"
                        >
                          Respond ➔
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {replyTo && (
        <div className="fixed inset-0 bg-charcoal-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-steel-100">
              <h2 className="text-xl font-heading font-bold text-charcoal-800">Send Response</h2>
              <p className="text-sm text-steel-500 mt-1">To: {replyTo.email}</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-steel-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  value={replyTo.subject} 
                  onChange={e => setReplyTo({...replyTo, subject: e.target.value})}
                  className="w-full px-4 py-2 border border-steel-200 rounded-xl bg-steel-50 focus:bg-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-steel-700 mb-1">Message</label>
                <textarea 
                  rows={6}
                  value={replyMessage}
                  onChange={e => setReplyMessage(e.target.value)}
                  placeholder="Type your response here..."
                  className="w-full px-4 py-3 border border-steel-200 rounded-xl focus:bg-white"
                />
              </div>
            </div>
            <div className="p-6 border-t border-steel-100 bg-steel-50 flex justify-end gap-3">
              <button 
                onClick={() => { setReplyTo(null); setReplyMessage(''); }}
                className="px-4 py-2 text-steel-600 font-medium hover:bg-steel-200 rounded-xl transition"
              >
                Cancel
              </button>
              <button 
                onClick={handleSendReply}
                disabled={sending}
                className="px-6 py-2 bg-accent-red text-white font-medium rounded-xl hover:bg-accent-red-dark disabled:opacity-50 transition"
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
