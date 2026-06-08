import React from 'react';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const prisma = new PrismaClient();

export const revalidate = 60; // revalidate every minute

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    where: { status: 'published' },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-steel-50 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal-800 mb-6 tracking-tight">Insights & Perspectives</h1>
            <p className="text-xl text-steel-600 max-w-3xl mx-auto">Expert analysis, thought leadership, and industry trends from the Talent Centre team.</p>
          </div>

          {blogs.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-steel-200">
              <p className="text-xl text-steel-500">New insights are being prepared. Check back soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map(blog => (
                <Link href={`/blog/${blog.slug}`} key={blog.id} className="group bg-white rounded-3xl border border-steel-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="aspect-[16/9] bg-steel-200 relative overflow-hidden">
                    {/* Placeholder for featured image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-red/20 to-transparent group-hover:scale-105 transition-transform duration-500"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-semibold text-steel-500 uppercase tracking-wider mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {new Date(blog.createdAt).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> 5 min read</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-charcoal-800 mb-4 group-hover:text-accent-red transition-colors">{blog.title}</h3>
                    <p className="text-steel-600 mb-8 line-clamp-3 flex-grow">{blog.excerpt}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-steel-100 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-steel-200 flex items-center justify-center"><User className="w-4 h-4 text-steel-500"/></div>
                        <span className="text-sm font-medium text-charcoal-700">{blog.author}</span>
                      </div>
                      <span className="text-accent-red font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight className="w-4 h-4"/></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
