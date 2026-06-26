'use client';
import React, { useState, useEffect } from 'react';
import { Link as LinkIcon, Check } from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

export default function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const shareFacebook = () => {
    if (!url) return;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
  };

  const shareYoutube = () => {
    // YouTube doesn't have a direct share link for external articles
    // So we copy the link to the clipboard and open YouTube.
    copyLink();
    window.open('https://youtube.com', '_blank');
  };

  const copyLink = () => {
    if (!url) return;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={shareFacebook} className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] transition-colors" title="Share to Facebook">
        <FacebookIcon />
      </button>
      <button onClick={shareYoutube} className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000] transition-colors" title="Share to YouTube">
        <YoutubeIcon />
      </button>
      <button onClick={copyLink} className="flex items-center gap-2 px-4 py-2 rounded-full bg-steel-50 hover:bg-steel-100 transition-colors text-charcoal-700 font-medium text-sm ml-2">
        {copied ? <><Check className="w-4 h-4 text-green-600" /> Copied!</> : <><LinkIcon className="w-4 h-4" /> Copy Link</>}
      </button>
    </div>
  );
}
