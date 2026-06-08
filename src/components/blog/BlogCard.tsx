import React from 'react';
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
