import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenContactModal,
}) => {
  const [isContactPopoverOpen, setIsContactPopoverOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const email = 'javeria.s.muqtadir@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsContactPopoverOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header className="sticky top-5 z-50 flex justify-center px-4 w-full pointer-events-none">
      <div className="relative pointer-events-auto" ref={popoverRef}>
        {/* Floating Pill Nav */}
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-1.5 p-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setIsContactPopoverOpen(false);
                  onNavigate(item.id);
                }}
                className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#4338ca] text-white shadow-sm'
                    : 'text-slate-800 hover:text-slate-950 hover:bg-slate-100/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Contact Button */}
          <button
            onClick={() => setIsContactPopoverOpen(!isContactPopoverOpen)}
            className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              isContactPopoverOpen || activeSection === 'contact'
                ? 'bg-[#4338ca] text-white shadow-sm'
                : 'text-slate-800 hover:text-slate-950 hover:bg-slate-100/60'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Contact Dropdown Popover */}
        {isContactPopoverOpen && (
          <div
            role="dialog"
            aria-label="Contact options"
            className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 w-72 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-slate-100 animate-in fade-in zoom-in-95 duration-150 z-50"
          >
            <div className="flex flex-col gap-2.5 text-center">
              {/* Email row with quick copy */}
              <button
                onClick={handleCopyEmail}
                className="group flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-100 transition-colors text-left cursor-pointer"
                title="Click to copy email"
              >
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-slate-500 shrink-0 group-hover:text-[#4338ca]" />
                  <span className="text-xs font-medium text-slate-800 group-hover:text-[#4338ca] truncate">
                    {email}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 shrink-0 flex items-center gap-1">
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 group-hover:text-[#4338ca]" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </span>
              </button>

              {/* LinkedIn Row */}
              <a
                href="https://linkedin.com/in/javeria-syed"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:text-[#4338ca] hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              {/* Detailed Message Form Trigger */}
              <button
                onClick={() => {
                  setIsContactPopoverOpen(false);
                  onOpenContactModal();
                }}
                className="mt-1 w-full py-1.5 text-xs font-semibold text-[#4338ca] bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors cursor-pointer"
              >
                Send a quick message 💬
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
