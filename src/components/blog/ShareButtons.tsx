'use client';
import React, { useState, useEffect } from 'react';
import { Facebook, Youtube, Link as LinkIcon, Check } from 'lucide-react';

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
        <Facebook className="w-5 h-5" />
      </button>
      <button onClick={shareYoutube} className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000] transition-colors" title="Share to YouTube">
        <Youtube className="w-5 h-5" />
      </button>
      <button onClick={copyLink} className="flex items-center gap-2 px-4 py-2 rounded-full bg-steel-50 hover:bg-steel-100 transition-colors text-charcoal-700 font-medium text-sm ml-2">
        {copied ? <><Check className="w-4 h-4 text-green-600" /> Copied!</> : <><LinkIcon className="w-4 h-4" /> Copy Link</>}
      </button>
    </div>
  );
}
