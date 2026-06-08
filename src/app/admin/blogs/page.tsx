'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, Video } from 'lucide-react';

import { useRouter } from 'next/navigation';

export default function AdminBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
      fetch('/api/blogs')
        .then(res => res.json())
        .then(data => {
          setBlogs(data.blogs || []);
          setLoading(false);
        }).catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [router]);

  if (!isAuthenticated) return null;

  const deleteBlog = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    await fetch(`/api/blogs/${slug}`, { method: 'DELETE' });
    setBlogs(blogs.filter(b => b.slug !== slug));
  };

  return (
    <div className="min-h-screen bg-steel-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-charcoal-700">Content Dashboard</h1>
            <p className="text-steel-500 mt-1">Manage articles and video blogs</p>
          </div>
          <div className="flex gap-4">
            <Link href="/admin/video-blogs/create" className="px-4 py-2 bg-charcoal-800 text-white rounded-xl flex items-center gap-2 hover:bg-charcoal-700 transition">
              <Video className="w-4 h-4"/> New Video
            </Link>
            <Link href="/admin/blogs/create" className="px-4 py-2 bg-accent-red text-white rounded-xl flex items-center gap-2 hover:bg-accent-red-dark transition">
              <Plus className="w-4 h-4"/> New Article
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl border border-steel-200 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-steel-500">Loading content...</div>
          ) : blogs.length === 0 ? (
            <div className="p-16 text-center">
              <p className="text-steel-500 font-medium">No articles found</p>
              <p className="text-steel-400 text-sm mt-1">Create your first thought leadership piece.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-steel-50 border-b border-steel-100">
                  <th className="p-4 font-semibold text-steel-600">Title</th>
                  <th className="p-4 font-semibold text-steel-600">Author</th>
                  <th className="p-4 font-semibold text-steel-600">Status</th>
                  <th className="p-4 font-semibold text-steel-600">Date</th>
                  <th className="p-4 font-semibold text-steel-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map(blog => (
                  <tr key={blog.id} className="border-b border-steel-50 hover:bg-steel-50 transition">
                    <td className="p-4 font-medium text-charcoal-700">{blog.title}</td>
                    <td className="p-4 text-steel-500">{blog.author}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${blog.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="p-4 text-steel-500">{new Date(blog.createdAt).toLocaleDateString()}</td>
                    <td className="p-4 text-right flex justify-end gap-2">
                      <Link href={`/blog/${blog.slug}`} target="_blank" className="p-2 text-steel-400 hover:text-blue-500 bg-steel-50 rounded-lg"><Eye className="w-4 h-4"/></Link>
                      <button onClick={() => deleteBlog(blog.slug)} className="p-2 text-steel-400 hover:text-red-500 bg-steel-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
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
