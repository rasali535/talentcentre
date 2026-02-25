import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, Bot, User, ChevronRight, CheckCircle2 } from 'lucide-react';
import { GoogleGenAI, FunctionDeclaration, Type } from '@google/genai';

// Declare process to avoid TS errors since it's injected via Vite
declare const process: any;

const SYSTEM_INSTRUCTION = `You are a helpful customer support chatbot for Sunrise Logistics and Talent Centre Consulting.
Answer questions based ONLY on the following information:
- Sunrise Logistics: Transportation & Cross Border (Tipper, Tautliner, Flat deck), Customs Clearance, Logistics Management, Warehousing & Storage, Cold Chain Logistics. Vision: preferred transport/logistics company in SADC region.
- Talent Centre: Business Advisory & Coaching, Management Services (Bookkeeping, Audits, Secretarial), Training & Wellness (Leadership, Team Building), Empowerment Programs (Incubation hub, Start-up training).
- CEO: Humphrey Chawafambira (Managing Director & Lead Consultant). 16+ years experience. B. Acc, ZCTA, AAFFA, CICP, COP.
- Contact Sunrise: Plot 21571, Phakalane, Gaborone, Botswana. Phone: +267 787 299 07. Email: admin@sunriselogistics.co.bw
- Contact Talent Centre: Plot 104, Unit 15B, GICP, Gaborone, Botswana. Phone: +27 86 551 1594. Email: info@talentcentre.co.za
- Values: Transparency, Quality Service, Innovation, Integrity, Reliability.

IMPORTANT BOOKING INSTRUCTIONS:
You can handle bookings directly! If a user wants to book a service, ask them for:
1. The specific service they need.
2. Their preferred date.
3. Their preferred time.
Once you have ALL this information, use the 'bookService' tool to process the booking and send the email. Do not use the tool until you have the date, time, and service.
Keep answers concise, friendly, and professional.`;

const bookServiceDeclaration: FunctionDeclaration = {
  name: "bookService",
  description: "Book a logistics or consulting service for the user and send an email notification to the admin.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      serviceCategory: { type: Type.STRING, description: "Either 'Logistics' or 'Consulting'" },
      specificService: { type: Type.STRING, description: "The specific service, e.g., 'Customs Clearance' or 'Business Advisory'" },
      date: { type: Type.STRING, description: "Preferred date for the service/consultation" },
      time: { type: Type.STRING, description: "Preferred time" },
    },
    required: ["serviceCategory", "specificService", "date", "time"],
  },
};

type Message = {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  buttons?: string[];
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', contact: '' });
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      role: 'model', 
      text: 'Hello! I am the Sunrise & Talent Centre assistant. How can I help you today?',
      buttons: ['Logistics Services', 'Consulting Services', 'Book a Service', 'Contact Info']
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && hasJoined) {
      scrollToBottom();
    }
  }, [messages, isOpen, hasJoined]);

  const initChat = () => {
    if (!chatRef.current) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        chatRef.current = ai.chats.create({
          model: "gemini-3-flash-preview",
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.2,
            tools: [{ functionDeclarations: [bookServiceDeclaration] }],
          }
        });
      } catch (error) {
        console.error("Failed to initialize chat:", error);
      }
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name.trim() || !leadForm.contact.trim()) return;
    setHasJoined(true);
  };

  const handleSend = async (e?: React.FormEvent, textOverride?: string) => {
    e?.preventDefault();
    const userText = textOverride || input.trim();
    if (!userText || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      initChat();
      if (!chatRef.current) throw new Error("Chat not initialized");
      
      const response = await chatRef.current.sendMessage({ message: userText });
      
      // Handle Function Calls (Booking)
      if (response.functionCalls && response.functionCalls.length > 0) {
        const call = response.functionCalls[0];
        if (call.name === 'bookService') {
          const args = call.args as any;
          
          // --- EMAIL SIMULATION ---
          // In a production app, you would call your backend API or EmailJS here
          console.log("=== NEW BOOKING EMAIL SENT ===");
          console.log("To: admin@sunriselogistics.co.bw, info@talentcentre.co.za");
          console.log("Subject: New Booking Request from Chatbot");
          console.log("Client Name:", leadForm.name);
          console.log("Client Contact:", leadForm.contact);
          console.log("Service Category:", args.serviceCategory);
          console.log("Specific Service:", args.specificService);
          console.log("Date:", args.date);
          console.log("Time:", args.time);
          console.log("==============================");

          // Add a system message to the chat so the user sees the action
          setMessages(prev => [...prev, { 
            id: Date.now().toString(), 
            role: 'system', 
            text: `Booking confirmed for ${args.specificService} on ${args.date} at ${args.time}. An email has been sent to our team with your details (${leadForm.name}, ${leadForm.contact}).` 
          }]);

          // Tell the model the function succeeded
          const followUp = await chatRef.current.sendMessage({ 
            message: "System: The booking was successfully processed and the email was sent to the admin. Please give a brief, friendly confirmation to the user." 
          });
          
          setMessages(prev => [...prev, { 
            id: (Date.now() + 1).toString(), 
            role: 'model', 
            text: followUp.text || "Your booking is all set! Our team will be in touch soon." 
          }]);
          
          setIsLoading(false);
          return;
        }
      }

      let responseText = response.text || "I'm sorry, I couldn't process that request.";
      let buttons: string[] | undefined = undefined;

      const lowerText = userText.toLowerCase();
      if (lowerText.includes('service') || lowerText.includes('what do you do') || lowerText.includes('help')) {
        buttons = ['Logistics Services', 'Consulting Services', 'Book a Service'];
      } else if (lowerText.includes('logistic') || lowerText.includes('transport')) {
        buttons = ['Transportation', 'Customs Clearance', 'Warehousing', 'Book Logistics'];
      } else if (lowerText.includes('consult') || lowerText.includes('advis')) {
        buttons = ['Business Advisory', 'Management Services', 'Training', 'Book Consulting'];
      } else if (lowerText.includes('book') || lowerText.includes('schedule')) {
        buttons = ['Logistics Booking', 'Consulting Booking'];
      }

      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: responseText,
        buttons
      }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us directly." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-orange-500 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-orange-600 hover:scale-105 transition-all z-40 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open chat"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Sunrise Assistant</h3>
                  <p className="text-xs text-slate-400">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!hasJoined ? (
              /* Lead Capture Form */
              <div className="flex-1 p-6 flex flex-col justify-center bg-slate-50 overflow-y-auto">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Welcome to Live Chat</h3>
                  <p className="text-sm text-slate-500 mt-2">Please introduce yourself before we begin so we can follow up if we get disconnected.</p>
                </div>
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                    <input 
                      required 
                      type="text" 
                      value={leadForm.name} 
                      onChange={e => setLeadForm({...leadForm, name: e.target.value})} 
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Email or Phone *</label>
                    <input 
                      required 
                      type="text" 
                      value={leadForm.contact} 
                      onChange={e => setLeadForm({...leadForm, contact: e.target.value})} 
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-orange-500 text-white py-3 rounded-xl text-sm font-bold hover:bg-orange-600 transition-colors mt-2 shadow-lg shadow-orange-500/20"
                  >
                    Start Chat
                  </button>
                </form>
              </div>
            ) : (
              /* Chat Interface */
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                  {messages.map((msg) => (
                    <div key={msg.id} className="flex flex-col gap-2">
                      {msg.role === 'system' ? (
                        <div className="flex justify-center my-2">
                          <div className="bg-green-50 border border-green-200 text-green-800 text-xs px-3 py-2 rounded-lg flex items-center gap-2 shadow-sm max-w-[90%] text-center">
                            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                            {msg.text}
                          </div>
                        </div>
                      ) : (
                        <div className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          {msg.role === 'model' && (
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                              <Bot className="w-4 h-4 text-orange-600" />
                            </div>
                          )}
                          
                          <div 
                            className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                              msg.role === 'user' 
                                ? 'bg-orange-500 text-white rounded-br-sm' 
                                : 'bg-white border border-slate-200 text-slate-700 rounded-bl-sm shadow-sm'
                            }`}
                          >
                            {msg.text}
                          </div>

                          {msg.role === 'user' && (
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                              <User className="w-4 h-4 text-slate-600" />
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Render Buttons if present */}
                      {msg.buttons && msg.buttons.length > 0 && (
                        <div className="flex flex-wrap gap-2 ml-11 mt-1">
                          {msg.buttons.map((btn, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSend(undefined, btn)}
                              className="text-xs font-medium bg-white border border-orange-200 text-orange-600 px-3 py-1.5 rounded-full hover:bg-orange-50 hover:border-orange-300 transition-colors flex items-center gap-1 shadow-sm"
                            >
                              {btn} <ChevronRight className="w-3 h-3" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-orange-600" />
                      </div>
                      <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                        <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-slate-200 shrink-0">
                  <form 
                    onSubmit={handleSend}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-slate-100 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-full px-4 py-2.5 text-sm outline-none transition-all"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 ml-0.5" />}
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
