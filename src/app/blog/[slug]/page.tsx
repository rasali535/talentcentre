import React from 'react';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const prisma = process.env.DATABASE_URL ? new PrismaClient() : null;

export const dynamic = 'force-dynamic';

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  let blog: any = null;
  try {
    if (prisma) {
      blog = await prisma.blog.findUnique({
        where: { slug }
      });
      if (blog) {
        blog.contentType = 'Article';
      } else {
        blog = await prisma.videoBlog.findUnique({
          where: { slug }
        });
        if (blog) blog.contentType = 'Video';
      }
    }
  } catch (err) {
    console.error(err);
  }

  if (!blog || blog.status !== 'published') {
    notFound();
  }

  return (
    <>
      <Navbar />
      <article className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-steel-500 hover:text-accent-red font-medium mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
          
          <header className="mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal-800 mb-8 leading-tight">{blog.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-steel-600 pb-8 border-b border-steel-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-steel-100 flex items-center justify-center">
                  <User className="w-6 h-6 text-steel-400" />
                </div>
                <div>
                  <p className="text-charcoal-800 font-bold text-base">{blog.author || "Admin"}</p>
                  <p>Talent Centre Expert</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-8 bg-steel-200"></div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4"/> {new Date(blog.createdAt).toLocaleDateString()}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4"/> {blog.contentType === "Video" ? "Video Content" : "5 min read"}</div>
              <div className="ml-auto">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-steel-50 hover:bg-steel-100 transition-colors text-charcoal-700">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>
          </header>

          {blog.contentType === 'Video' ? (
            <div className="space-y-8">
              <div className="aspect-video bg-charcoal-800 rounded-3xl overflow-hidden shadow-xl">
                <iframe 
                  src={blog.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')} 
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-xl text-steel-700 leading-relaxed">{blog.description}</p>
            </div>
          ) : (
            <div className="prose prose-lg md:prose-xl max-w-none text-steel-800 marker:text-accent-red prose-headings:font-heading prose-headings:text-charcoal-800 prose-a:text-accent-red hover:prose-a:text-accent-red-dark prose-img:rounded-3xl prose-img:shadow-xl" dangerouslySetInnerHTML={{ __html: blog.content }} />
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}
