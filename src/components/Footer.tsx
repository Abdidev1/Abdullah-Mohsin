import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Linkedin, Instagram, Mail } from 'lucide-react';
import { ProjectData } from './WorkSection';

interface FooterProps {
  onOpenContact: () => void;
  onSelectProjectById: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onSelectProjectById }) => {
  const [germanyTime, setGermanyTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Europe/Berlin',
      };
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
      setGermanyTime(`${timeStr} GMT+1`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="pt-12 pb-6 border-t border-slate-200">
      {/* 3-Column Info & Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-16">
        {/* Column 1: I'll be there for youuu... */}
        <div className="md:col-span-4 pr-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            I'll be there for youuu...
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Got a project in mind? Need fresh design advice? Or just want to chat about all things
            UX? Let's connect, I love yapping :D
          </p>
        </div>

        {/* Column 2: Explore Projects */}
        <div className="md:col-span-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            Explore Projects
          </h3>
          <ul className="space-y-3">
            {[
              { id: 'jadawel', label: 'Jadawel Saas Platform' },
              { id: 'satha', label: 'Satha Mobile App' },
              { id: 'mathstack', label: 'Mathstack Framer Website' },
            ].map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => onSelectProjectById(p.id)}
                  className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#4338ca] hover:text-indigo-800 transition-colors cursor-pointer"
                >
                  <span>{p.label}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Let's work together */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
              Let's work together
            </p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Got an Idea?
              </span>
              <button
                onClick={onOpenContact}
                aria-label="Contact Javeria"
                className="w-12 h-12 rounded-full bg-[#4338ca] hover:bg-indigo-700 text-white flex items-center justify-center shadow-md transition-all hover:scale-110 cursor-pointer group"
              >
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Social Badges Row */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <a
              href="https://linkedin.com/in/javeria-syed"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 transition-colors shadow-xs"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
              <span>Connect!</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 transition-colors shadow-xs"
            >
              <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
              <span>Instagram</span>
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 transition-colors shadow-xs cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-slate-700" />
              <span>Email me!</span>
            </button>
          </div>
        </div>
      </div>

      {/* Giant Typographic Serif Wordmark */}
      <div className="w-full overflow-hidden select-none border-t border-slate-100 pt-6 pb-2">
        <h2 className="font-serif-display font-black text-slate-950 text-[18vw] leading-[0.8] tracking-tighter text-center whitespace-nowrap">
          Javeria S.
        </h2>
      </div>

      {/* Bottom Copyright & Live Clock */}
      <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-medium text-slate-500">
        <div>2025 © Javeria Syed</div>
        <div className="tabular-nums font-mono text-slate-600">
          {germanyTime || '3:56 PM GMT+1'}
        </div>
      </div>
    </footer>
  );
};
