'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, Phone, Calendar, Briefcase, ArrowRight } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const quickActions = [
  { label: 'Book Consultation', icon: Calendar, message: 'I would like to book a consultation.' },
  { label: 'Business Advice', icon: Briefcase, message: 'I need business advice for my organization.' },
  { label: 'Services Overview', icon: Sparkles, message: 'Can you tell me about your services?' },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  
  // Lead Collection State
  const [hasCollectedLeadInfo, setHasCollectedLeadInfo] = useState(false);
  const [leadInfo, setLeadInfo] = useState({ name: '', email: '', phone: '' });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  useEffect(() => {
    if (isOpen && !hasGreeted && hasCollectedLeadInfo) {
      // eslint-disable-next-line
      setHasGreeted(true);
      setShowPulse(false);
      const timer = setTimeout(() => {
        setMessages([{
          id: '1',
          role: 'assistant',
          content: `Welcome ${leadInfo.name}! I'm your dedicated business consultant. How can we help your business grow today?`,
          timestamp: new Date(),
        }]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, hasGreeted, hasCollectedLeadInfo, leadInfo.name]);

  useEffect(() => {
    if (isOpen && hasCollectedLeadInfo) inputRef.current?.focus();
  }, [isOpen, hasCollectedLeadInfo]);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadInfo.name || !leadInfo.email) return;
    setHasCollectedLeadInfo(true);
  };

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map(m => ({ role: m.role, content: m.content })),
          leadInfo: leadInfo,
        }),
      });

      const data = await res.json();

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response || "I'd be happy to help. Could you tell me more about your business needs?",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMsg]);
    } catch {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I appreciate your interest. For the best experience, please reach out to us directly at info@talentcentre.co.za or call +267 75 618 647.",
        timestamp: new Date(),
      }]);
    } finally {
      setIsTyping(false);
    }
  }, [messages, leadInfo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-24 left-4 sm:left-6 w-[360px] sm:w-[400px] h-[560px] bg-white rounded-2xl shadow-premium-xl border border-steel-200 flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-charcoal-700 to-charcoal-600 p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-semibold text-sm">Talent Centre Advisor</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-soft" />
                    <span className="text-white/60 text-xs">Online • Ready to assist</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!hasCollectedLeadInfo ? (
              /* Lead Collection Form */
              <div className="flex-1 flex flex-col items-center justify-center p-6 bg-steel-50/50">
                <div className="w-full max-w-sm space-y-6">
                  <div className="text-center space-y-2">
                    <h4 className="text-lg font-heading font-semibold text-charcoal-700">Let's get started</h4>
                    <p className="text-sm text-steel-500">Please provide your details so we can better assist you and follow up if we get disconnected.</p>
                  </div>
                  
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-medium text-charcoal-600 ml-1">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={leadInfo.name}
                        onChange={(e) => setLeadInfo(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-steel-200 text-sm focus:border-accent-red focus:ring-2 focus:ring-accent-red/10 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-medium text-charcoal-600 ml-1">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={leadInfo.email}
                        onChange={(e) => setLeadInfo(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-steel-200 text-sm focus:border-accent-red focus:ring-2 focus:ring-accent-red/10 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-xs font-medium text-charcoal-600 ml-1">Phone Number (Optional)</label>
                      <input
                        id="phone"
                        type="tel"
                        value={leadInfo.phone}
                        onChange={(e) => setLeadInfo(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-steel-200 text-sm focus:border-accent-red focus:ring-2 focus:ring-accent-red/10 transition-all"
                        placeholder="+267 ..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!leadInfo.name || !leadInfo.email}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent-red text-white font-medium hover:bg-accent-red-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 mt-2"
                    >
                      Start Chat <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              /* Chat Interface */
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-steel-50/50">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex items-start gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-accent-red' : 'bg-charcoal-700'}`}>
                          {msg.role === 'user' ? <User className="w-3.5 h-3.5 text-white" /> : <Bot className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <div className={`px-4 py-2.5 text-sm leading-relaxed ${msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start gap-2">
                        <div className="w-7 h-7 rounded-lg bg-charcoal-700 flex items-center justify-center">
                          <Bot className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="chat-bubble-bot px-4 py-3">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-steel-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-2 h-2 rounded-full bg-steel-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-2 h-2 rounded-full bg-steel-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Quick Actions (shown when no user messages yet) */}
                  {messages.length <= 1 && !isTyping && (
                    <div className="space-y-2 pt-2">
                      {quickActions.map((action) => (
                        <button
                          key={action.label}
                          onClick={() => sendMessage(action.message)}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-steel-200 text-sm text-steel-700 font-medium hover:border-accent-red/30 hover:text-accent-red hover:shadow-sm transition-all duration-200"
                        >
                          <action.icon className="w-4 h-4" />
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* WhatsApp fallback */}
                <div className="px-4 py-2 bg-white border-t border-steel-100 flex-shrink-0">
                  <a
                    href="https://wa.me/26775618647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-xs text-green-700 font-medium hover:text-green-800 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    Prefer WhatsApp? Chat with us directly
                  </a>
                </div>

                {/* Input Area */}
                <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-steel-100 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2.5 rounded-xl bg-steel-50 border border-steel-200 text-sm text-charcoal-700 placeholder:text-steel-400 focus:border-accent-red focus:ring-2 focus:ring-accent-red/10"
                      disabled={isTyping}
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isTyping}
                      className="p-2.5 rounded-xl bg-accent-red text-white hover:bg-accent-red-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-4 sm:left-6 z-50 w-14 h-14 rounded-full shadow-premium-xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-steel-700 hover:bg-steel-800' : 'bg-accent-red hover:bg-accent-red-dark'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
        {showPulse && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent-slate border-2 border-white animate-pulse-soft" />
        )}
      </motion.button>

      {/* Welcome tooltip (only on first visit before opening) */}
      <AnimatePresence>
        {showPulse && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="fixed bottom-8 left-24 z-50 bg-white rounded-xl shadow-premium-lg border border-steel-200 px-4 py-3 max-w-[220px]"
          >
            <p className="text-sm text-charcoal-700 font-medium">How can we help your business grow today?</p>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-white border-l border-b border-steel-200 rotate-[45deg]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

