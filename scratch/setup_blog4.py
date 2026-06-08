import os

def create_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

public_blogs = """import React from 'react';
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
"""

single_blog = """import React from 'react';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const prisma = new PrismaClient();

export const revalidate = 60;

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug }
  });

  if (!blog || blog.status !== 'published') {
    notFound();
  }

  return (
    <>
      <Navbar />
      <article className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-steel-500 hover:text-accent-red font-medium mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
          
          <header className="mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal-800 mb-8 leading-tight">{blog.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-steel-600 pb-8 border-b border-steel-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-steel-100 flex items-center justify-center">
                  <User className="w-6 h-6 text-steel-400" />
                </div>
                <div>
                  <p className="text-charcoal-800 font-bold text-base">{blog.author}</p>
                  <p>Talent Centre Expert</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-8 bg-steel-200"></div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4"/> {new Date(blog.createdAt).toLocaleDateString()}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4"/> 5 min read</div>
              <div className="ml-auto">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-steel-50 hover:bg-steel-100 transition-colors text-charcoal-700">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>
          </header>

          <div className="prose prose-lg md:prose-xl max-w-none text-steel-800 marker:text-accent-red prose-headings:font-heading prose-headings:text-charcoal-800 prose-a:text-accent-red hover:prose-a:text-accent-red-dark prose-img:rounded-3xl prose-img:shadow-xl" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </article>
      <Footer />
    </>
  );
}
"""

create_video_blog = """'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Video, Mic, StopCircle, RefreshCw } from 'lucide-react';

export default function CreateVideoBlogPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '', slug: '', description: '', videoUrl: '', status: 'draft'
  });
  
  // Recording state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [recordedUrl, setRecordedUrl] = useState('');

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) setRecordedChunks(prev => [...prev, e.data]);
      };
      recorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setRecordedUrl(url);
      };
      setMediaRecorder(recorder);
    } catch (err) {
      console.error("Camera access denied", err);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      mediaRecorder?.stop();
      setIsRecording(false);
      // In a real app, upload Blob to storage and get URL
      setFormData({...formData, videoUrl: 'https://youtube.com/embed/placeholder'}); 
    } else {
      setRecordedChunks([]);
      mediaRecorder?.start();
      setIsRecording(true);
    }
  };

  return (
    <div className="min-h-screen bg-steel-50 pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-heading font-bold text-charcoal-700 mb-8">Create Video Blog</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-steel-200 shadow-sm space-y-4 h-fit">
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Title</label>
              <input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" placeholder="Video title..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Description</label>
              <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" rows={4}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">YouTube URL or Storage URL</label>
              <input value={formData.videoUrl} onChange={e => setFormData({...formData, videoUrl: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" placeholder="https://youtube.com/watch?v=..." />
            </div>
            <button className="w-full py-3 bg-accent-red text-white rounded-xl font-semibold mt-4">Save Video Blog</button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-steel-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Recording Studio</h2>
            <div className="aspect-video bg-charcoal-800 rounded-xl overflow-hidden relative mb-4">
              <video ref={videoRef} autoPlay muted className="w-full h-full object-cover"></video>
              {isRecording && <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>}
            </div>
            
            <div className="flex gap-4">
              <button onClick={startCamera} className="flex-1 py-3 bg-steel-100 text-steel-700 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-steel-200">
                <Video className="w-4 h-4"/> Start Camera
              </button>
              <button onClick={toggleRecording} className={`flex-1 py-3 text-white rounded-xl font-medium flex items-center justify-center gap-2 ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-charcoal-700 hover:bg-charcoal-800'}`}>
                {isRecording ? <><StopCircle className="w-4 h-4"/> Stop Recording</> : <><Mic className="w-4 h-4"/> Record</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

create_file('src/app/blogs/page.tsx', public_blogs)
create_file('src/app/blog/[slug]/page.tsx', single_blog)
create_file('src/app/admin/video-blogs/create/page.tsx', create_video_blog)

print("Updated public blogs and video blogs")
