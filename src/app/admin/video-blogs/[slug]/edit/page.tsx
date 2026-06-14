'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EditVideoBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [slug, setSlug] = useState<string | null>(null);
  const [initialFetchDone, setInitialFetchDone] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '', slug: '', description: '', videoUrl: '', status: 'draft'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
      params.then(p => {
        setSlug(p.slug);
        fetch(`/api/video-blogs/${p.slug}`)
          .then(res => res.json())
          .then(data => {
            if (data && !data.error) {
              setFormData({
                title: data.title || '',
                slug: data.slug || '',
                description: data.description || '',
                videoUrl: data.videoUrl || '',
                status: data.status || 'draft'
              });
            }
            setInitialFetchDone(true);
          })
          .catch(err => {
            console.error('Failed to load video blog data', err);
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
      const res = await fetch(`/api/video-blogs/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        router.push('/admin/blogs');
      } else {
        alert('Failed to update video blog.');
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
        <h1 className="text-3xl font-heading font-bold text-charcoal-700 mb-8">Edit Video Blog</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-steel-200 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Title</label>
              <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" placeholder="Enter video title..." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-steel-700 mb-1">URL Slug</label>
                <input value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl bg-steel-50" readOnly />
                <p className="text-xs text-steel-400 mt-1">Slug cannot be changed after creation.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-steel-700 mb-1">Video URL (YouTube)</label>
                <input required value={formData.videoUrl} onChange={e => setFormData({...formData, videoUrl: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" placeholder="https://youtube.com/watch?v=..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Description</label>
              <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" rows={4} placeholder="Detailed description of the video content..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Status</label>
              <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
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
