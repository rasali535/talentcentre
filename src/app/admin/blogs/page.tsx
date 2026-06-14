'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, Video } from 'lucide-react';

import { useRouter } from 'next/navigation';

export default function AdminBlogsPage() {
  const router = useRouter();
  const [contentList, setContentList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
      Promise.all([
        fetch('/api/blogs').then(res => res.json()),
        fetch('/api/video-blogs').then(res => res.json())
      ]).then(([blogsData, videoData]) => {
        const textBlogs = (blogsData.blogs || []).map((b: any) => ({ ...b, contentType: 'Article' }));
        const videoBlogs = (videoData.videoBlogs || []).map((v: any) => ({ ...v, contentType: 'Video' }));
        const combined = [...textBlogs, ...videoBlogs].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setContentList(combined);
        setLoading(false);
      }).catch(err => {
        console.error(err);
        setLoading(false);
      });
    }
  }, [router]);

  if (!isAuthenticated) return null;

  const deleteContent = async (slug: string, contentType: string) => {
    if (!confirm(`Are you sure you want to delete this ${contentType}?`)) return;
    const endpoint = contentType === 'Video' ? `/api/video-blogs/${slug}` : `/api/blogs/${slug}`;
    await fetch(endpoint, { method: 'DELETE' });
    setContentList(contentList.filter(item => item.slug !== slug));
  };

  const togglePublish = async (slug: string, contentType: string, currentStatus: string) => {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published';
    const endpoint = contentType === 'Video' ? `/api/video-blogs/${slug}` : `/api/blogs/${slug}`;
    
    try {
      const res = await fetch(endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setContentList(contentList.map(item => 
          item.slug === slug ? { ...item, status: newStatus } : item
        ));
      }
    } catch (err) {
      console.error('Failed to toggle publish status', err);
    }
  };

  return (
    <div className="min-h-screen bg-steel-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-charcoal-700">Content Dashboard</h1>
            <p className="text-steel-500 mt-1">Manage articles and video blogs</p>
          </div>
          <div className="flex gap-3 items-center">
            <Link href="/admin" className="text-sm font-medium text-steel-600 hover:text-charcoal-800 transition-colors">Go to Leads ➔</Link>
            <Link href="/admin/events" className="text-sm font-medium text-steel-600 hover:text-charcoal-800 mr-4 transition-colors">Go to Events ➔</Link>
            <Link href="/admin/video-blogs/create" className="px-4 py-2 bg-charcoal-800 text-white rounded-xl flex items-center gap-2 hover:bg-charcoal-700 transition text-sm">
              <Video className="w-4 h-4"/> New Video
            </Link>
            <Link href="/admin/blogs/create" className="px-4 py-2 bg-accent-red text-white rounded-xl flex items-center gap-2 hover:bg-accent-red-dark transition text-sm">
              <Plus className="w-4 h-4"/> New Article
            </Link>
            <button onClick={() => { localStorage.removeItem('admin_token'); window.location.href = '/admin'; }} className="px-4 py-2 rounded-xl bg-white border border-steel-200 text-steel-600 text-sm font-medium hover:bg-steel-50 transition-colors ml-2">
              Logout
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl border border-steel-200 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-steel-500">Loading content...</div>
          ) : contentList.length === 0 ? (
            <div className="p-16 text-center">
              <p className="text-steel-500 font-medium">No articles found</p>
              <p className="text-steel-400 text-sm mt-1">Create your first thought leadership piece.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-steel-50 border-b border-steel-100">
                  <th className="p-4 font-semibold text-steel-600">Title</th>
                  <th className="p-4 font-semibold text-steel-600">Type</th>
                  <th className="p-4 font-semibold text-steel-600">Status</th>
                  <th className="p-4 font-semibold text-steel-600">Date</th>
                  <th className="p-4 font-semibold text-steel-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contentList.map(item => (
                  <tr key={item.id + item.contentType} className="border-b border-steel-50 hover:bg-steel-50 transition">
                    <td className="p-4 font-medium text-charcoal-700">{item.title}</td>
                    <td className="p-4 text-steel-500">{item.contentType}</td>
                    <td className="p-4">
                      <button 
                        onClick={() => togglePublish(item.slug, item.contentType, item.status)}
                        className={`px-2 py-1 text-xs rounded-full cursor-pointer transition-opacity hover:opacity-80 ${item.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}
                      >
                        {item.status}
                      </button>
                    </td>
                    <td className="p-4 text-steel-500">{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td className="p-4 text-right flex justify-end gap-2">
                      <Link href={`/blog/${item.slug}`} target="_blank" className="p-2 text-steel-400 hover:text-blue-500 bg-steel-50 rounded-lg"><Eye className="w-4 h-4"/></Link>
                      <Link href={`/admin/${item.contentType === 'Video' ? 'video-blogs' : 'blogs'}/${item.slug}/edit`} className="p-2 text-steel-400 hover:text-amber-500 bg-steel-50 rounded-lg"><Edit className="w-4 h-4"/></Link>
                      <button onClick={() => deleteContent(item.slug, item.contentType)} className="p-2 text-steel-400 hover:text-red-500 bg-steel-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
