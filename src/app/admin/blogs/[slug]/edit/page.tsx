'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from '@/components/blog/RichTextEditor';

export default function EditBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [slug, setSlug] = useState<string | null>(null);
  const [initialFetchDone, setInitialFetchDone] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '', slug: '', author: '', excerpt: '', status: 'draft'
  });
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
      params.then(p => {
        setSlug(p.slug);
        fetch(`/api/blogs/${p.slug}`)
          .then(res => res.json())
          .then(data => {
            if (data && !data.error) {
              setFormData({
                title: data.title || '',
                slug: data.slug || '',
                author: data.author || '',
                excerpt: data.excerpt || '',
                status: data.status || 'draft'
              });
              setContent(data.content || '');
            }
            setInitialFetchDone(true);
          })
          .catch(err => {
            console.error('Failed to load blog data', err);
            setInitialFetchDone(true);
          });
      });
    }
  }, [router, params]);

  if (!isAuthenticated || !initialFetchDone) return <div className="min-h-screen bg-steel-50 pt-24 text-center">Loading...</div>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, content })
      });
      if (res.ok) {
        router.push('/admin/blogs');
      } else {
        alert('Failed to update blog.');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-steel-50 pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-heading font-bold text-charcoal-700 mb-8">Edit Article</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-steel-200 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Title</label>
              <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" placeholder="Enter article title..." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-steel-700 mb-1">URL Slug</label>
                <input value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl bg-steel-50" readOnly />
                <p className="text-xs text-steel-400 mt-1">Slug cannot be changed after creation.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-steel-700 mb-1">Author</label>
                <input required value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" placeholder="John Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Excerpt</label>
              <textarea value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" rows={3} placeholder="Brief summary for the listing page..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Status</label>
              <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-steel-200 shadow-sm">
            <label className="block text-sm font-medium text-steel-700 mb-3">Content</label>
            <RichTextEditor initialContent={content} onChange={setContent} />
          </div>

          <div className="flex justify-end gap-4">
            <button type="button" onClick={() => router.back()} className="px-6 py-3 border border-steel-200 rounded-xl font-medium text-steel-600 hover:bg-steel-50">Cancel</button>
            <button type="submit" disabled={loading} className="px-6 py-3 bg-accent-red text-white rounded-xl font-semibold hover:bg-accent-red-dark disabled:opacity-50">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
