import React, { useState, useEffect } from 'react';
import { X, Mail, Linkedin, Instagram, Copy, Check, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const email = 'javeria.s.muqtadir@gmail.com';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setUserEmail('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-[#4338ca] border border-pink-100 mb-2">
            Let's Collaborate
          </span>
          <h2 id="contact-title" className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Say hello to Javeria
          </h2>
          <p className="text-slate-600 text-sm mt-1 leading-relaxed">
            Open for product design roles, mentorship sessions, and freelance inquiries.
          </p>
        </div>

        {/* Quick Email Copy Bar */}
        <div className="mb-6 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 truncate">
            <Mail className="w-4 h-4 text-[#4338ca] shrink-0" />
            <span className="text-sm font-semibold text-slate-800 truncate">{email}</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#4338ca] hover:border-indigo-200 transition-colors shadow-xs shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Direct Social Links */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            href="https://linkedin.com/in/javeria-syed"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-800 hover:text-[#0077b5] transition-all shadow-xs"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5]" />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-800 hover:text-[#e1306c] transition-all shadow-xs"
          >
            <Instagram className="w-4 h-4 text-[#e1306c]" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Message Form */}
        {isSubmitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Message received!</h4>
            <p className="text-xs text-slate-600 mt-1">
              Thank you for reaching out. Javeria will get back to you shortly!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label htmlFor="user-name" className="block text-xs font-semibold text-slate-700 mb-1">
                Your Name
              </label>
              <input
                id="user-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="user-email" className="block text-xs font-semibold text-slate-700 mb-1">
                Your Email
              </label>
              <input
                id="user-email"
                type="email"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="jane@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="user-msg" className="block text-xs font-semibold text-slate-700 mb-1">
                Project Details or Note
              </label>
              <textarea
                id="user-msg"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hey Javeria, loved your work on Jadawel! We'd love to collaborate on..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#4338ca] focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#4338ca] hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
