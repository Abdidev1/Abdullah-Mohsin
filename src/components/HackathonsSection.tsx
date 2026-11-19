import React from 'react';

interface HackathonItem {
  title: string;
  event: string;
  period: string;
  summary: string;
}

export const HackathonsSection: React.FC = () => {
  const items: HackathonItem[] = [
    {
      title: 'Co-Creator · Dungeon Crawler',
      event: 'Hack Club Campfire',
      period: '2026',
      summary:
        'Teamed up to build and ship a 2D maze game on Itch.io under game jam constraints.',
    },
    {
      title: 'Co-Creator · Deflecto',
      event: 'Hack Club Haven Hackathon & Game Jam',
      period: 'Nov 2026',
      summary:
        'Built and shipped a river-obstacle game collaboratively during the event in Lahore.',
    },
  ];

  return (
    <section id="hackathons" className="py-16 border-t border-slate-100 scroll-mt-20">
      <div className="mb-10">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#9D00FF]/10 border border-[#9D00FF]/30 text-[#9D00FF] font-bold text-sm mb-6">
          ✦
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight mb-2">
          Hackathons/Game-Jam&apos;s Participation:
        </h2>
        <p className="text-2xl sm:text-3xl text-slate-400 font-normal tracking-tight leading-snug">
          Shipping games and projects under tight deadlines
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl border bg-white border-slate-200/80 hover:border-[#9D00FF]/30 shadow-xs p-6 sm:p-7 transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-slate-400 font-medium">·</span>
                  <span className="text-sm sm:text-base font-semibold text-[#9D00FF]">
                    {item.event}
                  </span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1.5 max-w-3xl">
                  {item.summary}
                </p>
              </div>

              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-1 shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <span className="text-slate-800">{item.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
