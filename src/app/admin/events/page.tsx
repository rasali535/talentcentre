import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const revalidate = 0;

export default async function AdminEventsPage() {
  const registrations = await prisma.eventRegistration.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-charcoal-700">Event Registrations</h1>
        <p className="text-steel-600 mt-2">View all attendees who have registered for upcoming events.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-premium border border-steel-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-steel-50 border-b border-steel-200">
                <th className="px-6 py-4 text-xs font-semibold text-steel-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-steel-600 uppercase tracking-wider">Attendee</th>
                <th className="px-6 py-4 text-xs font-semibold text-steel-600 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-xs font-semibold text-steel-600 uppercase tracking-wider">Event Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-steel-100">
              {registrations.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-steel-500">
                    No registrations found.
                  </td>
                </tr>
              ) : (
                registrations.map((reg) => (
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
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
