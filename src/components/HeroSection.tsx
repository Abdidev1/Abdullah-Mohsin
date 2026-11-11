import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [germanyTime, setGermanyTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Germany time zone (Europe/Berlin, typically GMT+1 or GMT+2 depending on DST)
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
    <section id="home" className="relative pt-6 pb-4">
      {/* Main Headline */}
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950 mb-3 font-sans">
          Hi! Abdullah here
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-slate-700 tracking-tight leading-snug flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span>I</span>
          <span className="relative inline-block px-1.5 py-0.5 z-0 font-medium text-slate-900">
            <span
              className="absolute inset-0 bg-[#fde2e9] rounded-md -z-10 transform -rotate-1"
              aria-hidden="true"
            />
            coding,
          </span>
          <span className="relative inline-block px-1.5 py-0.5 z-0 font-medium text-slate-900">
            <span
              className="absolute inset-0 bg-[#fde2e9] rounded-md -z-10 transform rotate-1"
              aria-hidden="true"
            />
            building,
          </span>
          <span>and</span>
          <span className="relative inline-block px-2 py-0.5 z-0 font-medium text-slate-900">
            <span
              className="absolute inset-0 bg-[#fde2e9] rounded-md -z-10"
              aria-hidden="true"
            />
            engineering the future.
          </span>
        </h2>
      </div>

      {/* 3 Action Buttons / Pills in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-8">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white hover:bg-slate-50 border border-slate-300/80 hover:border-slate-400 rounded-2xl text-slate-800 text-sm font-semibold transition-all hover:shadow-xs group cursor-pointer"
        >
          <Linkedin className="w-4 h-4 text-[#0077b5] group-hover:scale-110 transition-transform" />
          <span>Let's Connect!</span>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white hover:bg-slate-50 border border-slate-300/80 hover:border-slate-400 rounded-2xl text-slate-800 text-sm font-semibold transition-all hover:shadow-xs group cursor-pointer"
        >
          <Instagram className="w-4 h-4 text-[#e1306c] group-hover:scale-110 transition-transform" />
          <span>Instagram</span>
        </a>

        <button
          onClick={onOpenContact}
          className="flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white hover:bg-slate-50 border border-slate-300/80 hover:border-slate-400 rounded-2xl text-slate-800 text-sm font-semibold transition-all hover:shadow-xs group cursor-pointer"
        >
          <Mail className="w-4 h-4 text-slate-700 group-hover:scale-110 transition-transform" />
          <span>Email me!</span>
        </button>
      </div>

      {/* 2 Content Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
        {/* Left card: I'm glad you're here! */}
        <div className="lg:col-span-8 p-7 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            I'm glad you're here!
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From designing multiple end-to-end products to leading UX Design sessions at Udacity to
            120+ students, I've worked across the spectrum. I care deeply about creating products
            that are clear, research-backed, highly-converting and make the most complex problems
            feel simple.
          </p>
        </div>

        {/* Right card: What am i up to right now? */}
        <div className="lg:col-span-4 p-7 md:p-8 bg-[#fdeef2] rounded-3xl border border-[#fbdbd3] shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-center">
          <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-3 flex items-center gap-1.5">
            <span className="text-pink-600 font-bold text-lg">✦</span>
            <span>What am i up to right now?</span>
          </h3>
          <p className="text-slate-800 text-sm md:text-base leading-relaxed">
            Doing my masters at{' '}
            <strong className="font-bold text-slate-950">University of Siegen</strong> and a working
            student at{' '}
            <strong className="font-bold text-slate-950">Siemens Healthineers! :D</strong>
          </p>
        </div>
      </div>

      {/* Location & Time bar with thin hairline borders */}
      <div className="pt-3 pb-6 border-t border-b border-slate-200/80 flex items-center justify-between text-xs tracking-wider font-semibold text-slate-500 uppercase">
        <div className="flex items-center gap-2">
          <span>GERMANY</span>
        </div>
        <div className="tabular-nums font-mono text-slate-600">
          {germanyTime || '1:55 PM GMT+1'}
        </div>
      </div>
    </section>
  );
};
