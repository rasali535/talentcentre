import os

def create_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

admin_blogs = """'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, Video } from 'lucide-react';

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.blogs || []);
        setLoading(false);
      });
  }, []);

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
"""

create_blog = """'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from '@/components/blog/RichTextEditor';

export default function CreateBlogPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '', slug: '', author: '', excerpt: '', status: 'draft'
  });
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const slug = formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, slug, content })
      });
      if (res.ok) {
        router.push('/admin/blogs');
      } else {
        alert('Failed to save blog.');
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
        <h1 className="text-3xl font-heading font-bold text-charcoal-700 mb-8">Create Article</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-steel-200 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Title</label>
              <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" placeholder="Enter article title..." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-steel-700 mb-1">URL Slug (Optional)</label>
                <input value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" placeholder="auto-generated-if-empty" />
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
            <RichTextEditor onChange={setContent} />
          </div>

          <div className="flex justify-end gap-4">
            <button type="button" onClick={() => router.back()} className="px-6 py-3 border border-steel-200 rounded-xl font-medium text-steel-600 hover:bg-steel-50">Cancel</button>
            <button type="submit" disabled={loading} className="px-6 py-3 bg-accent-red text-white rounded-xl font-semibold hover:bg-accent-red-dark disabled:opacity-50">
              {loading ? 'Saving...' : 'Save Article'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
"""

editor_comp = """'use client';
import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';

export default function RichTextEditor({ onChange }: { onChange?: (html: string) => void }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link,
      Youtube,
    ],
    content: '',
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] px-4 py-2',
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="border border-steel-200 rounded-xl overflow-hidden">
      <div className="bg-steel-50 border-b border-steel-200 p-2 flex flex-wrap gap-2">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`p-2 rounded ${editor.isActive('bold') ? 'bg-steel-200' : 'hover:bg-steel-200'}`}><b>B</b></button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`p-2 rounded ${editor.isActive('italic') ? 'bg-steel-200' : 'hover:bg-steel-200'}`}><i>I</i></button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-steel-200' : 'hover:bg-steel-200'}`}>H2</button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={`p-2 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-steel-200' : 'hover:bg-steel-200'}`}>H3</button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-steel-200' : 'hover:bg-steel-200'}`}>• List</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
"""

create_file('src/app/admin/blogs/page.tsx', admin_blogs)
create_file('src/app/admin/blogs/create/page.tsx', create_blog)
create_file('src/components/blog/RichTextEditor.tsx', editor_comp)

print("Updated admin blogs and editor")
