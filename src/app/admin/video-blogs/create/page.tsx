'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Video, Mic, StopCircle, RefreshCw } from 'lucide-react';

export default function CreateVideoBlogPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const [formData, setFormData] = useState({
    title: '', slug: '', description: '', videoUrl: '', status: 'draft'
  });
  
  // Recording state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [recordedUrl, setRecordedUrl] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthenticated) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const slug = formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    try {
      const res = await fetch('/api/video-blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, slug })
      });
      if (res.ok) {
        router.push('/admin/blogs');
      } else {
        alert('Failed to save video blog.');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
        
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-steel-200 shadow-sm space-y-4 h-fit">
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Title</label>
              <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" placeholder="Video title..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">URL Slug (Optional)</label>
              <input value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" placeholder="auto-generated-if-empty" />
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Description</label>
              <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" rows={4}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">YouTube URL or Storage URL</label>
              <input required value={formData.videoUrl} onChange={e => setFormData({...formData, videoUrl: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl" placeholder="https://youtube.com/watch?v=..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-1">Status</label>
              <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full p-3 border border-steel-200 rounded-xl">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <button type="submit" disabled={loading} className="w-full py-3 bg-accent-red text-white rounded-xl font-semibold mt-4 disabled:opacity-50">
              {loading ? 'Saving...' : 'Save Video Blog'}
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-steel-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Recording Studio</h2>
            <div className="aspect-video bg-charcoal-800 rounded-xl overflow-hidden relative mb-4">
              <video ref={videoRef} autoPlay muted className="w-full h-full object-cover"></video>
              {isRecording && <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>}
            </div>
            
            <div className="flex gap-4">
              <button type="button" onClick={startCamera} className="flex-1 py-3 bg-steel-100 text-steel-700 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-steel-200">
                <Video className="w-4 h-4"/> Start Camera
              </button>
              <button type="button" onClick={toggleRecording} className={`flex-1 py-3 text-white rounded-xl font-medium flex items-center justify-center gap-2 ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-charcoal-700 hover:bg-charcoal-800'}`}>
                {isRecording ? <><StopCircle className="w-4 h-4"/> Stop Recording</> : <><Mic className="w-4 h-4"/> Record</>}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
