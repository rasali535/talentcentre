import os

def create_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

files = {
    "src/app/blogs/page.tsx": """import React from 'react';

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-steel-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-heading font-bold text-charcoal-700 mb-8">Insights & News</h1>
        <p>Coming soon...</p>
      </div>
    </div>
  );
}
""",
    "src/app/blog/[slug]/page.tsx": """import React from 'react';

export default function SingleBlogPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-steel-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-heading font-bold text-charcoal-700 mb-8">Blog Post</h1>
      </div>
    </div>
  );
}
""",
    "src/app/admin/blogs/page.tsx": """'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  
  return (
    <div className="min-h-screen bg-steel-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-charcoal-700">Manage Blogs</h1>
          <Link href="/admin/blogs/create" className="px-4 py-2 bg-accent-red text-white rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4"/> Create Blog
          </Link>
        </div>
        <div className="bg-white rounded-2xl border border-steel-200 p-6">
          <p>No blogs yet.</p>
        </div>
      </div>
    </div>
  );
}
""",
    "src/app/admin/blogs/create/page.tsx": """'use client';
import React from 'react';
import RichTextEditor from '@/components/blog/RichTextEditor';

export default function CreateBlogPage() {
  return (
    <div className="min-h-screen bg-steel-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-heading font-bold text-charcoal-700 mb-8">Create New Blog</h1>
        <div className="bg-white p-6 rounded-2xl border border-steel-200">
           <RichTextEditor />
        </div>
      </div>
    </div>
  );
}
""",
    "src/components/blog/RichTextEditor.tsx": """'use client';
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function RichTextEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start writing your blog...</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px]',
      },
    },
  });

  return (
    <div className="border border-steel-200 rounded-xl p-4">
      <EditorContent editor={editor} />
    </div>
  );
}
""",
    "src/components/blog/BlogCard.tsx": """import React from 'react';
import Link from 'next/link';

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <div className="bg-white rounded-2xl border border-steel-200 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-steel-100"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
        <p className="text-steel-600 mb-4">{blog.excerpt}</p>
        <Link href={`/blog/${blog.slug}`} className="text-accent-red font-semibold hover:underline">Read More</Link>
      </div>
    </div>
  );
}
"""
}

for path, content in files.items():
    create_file(path, content)
    print(f"Created {path}")

