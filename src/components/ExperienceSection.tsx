import React from 'react';

interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
  highlighted?: boolean;
}

export const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Founder & Senior Engineer',
      organization: 'Apex Realms Studios',
      period: 'Jun 2025 – Present',
      location: 'Lahore, Pakistan',
      summary:
        'Founded an independent Roblox studio building custom obbies, platformers, and competitive experiences from scratch, including Pixel Climb.',
      tags: ['Luau', 'Roblox Studio', 'Game Systems'],
      highlighted: true,
    },
    {
      role: 'Game Jam & Hackathon Developer',
      organization: 'Hack Club (Campfire & Haven)',
      period: '2026',
      location: 'Lahore, Pakistan',
      summary:
        'Teamed up under tight deadlines to build and ship indie games and interactive projects across hackathons and game jams.',
      tags: ['GameMaker', 'Rapid Prototyping', 'Teamwork'],
    },
    {
      role: 'Developer Contributor',
      organization: 'Aethur Community Network',
      period: '2026',
      location: 'Remote',
      summary:
        'Contributed development work and technical support across community-driven experiences and tools.',
      tags: ['Development', 'Community', 'Web & Games'],
    },
    {
      role: 'Indie Game & Web Developer',
      organization: 'Personal & Web Projects',
      period: '2025 – Present',
      location: 'Lahore, Pakistan',
      summary:
        'Built web applications, interactive simulators, and small games focused on clean UI, clarity, and responsive interactions.',
      tags: ['TypeScript', 'React', 'Web Apps'],
    },
  ];

  return (
    <section id="experience" className="py-16 border-t border-slate-100 scroll-mt-20">
      <div className="mb-10">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#9D00FF]/10 border border-[#9D00FF]/30 text-[#9D00FF] font-bold text-sm mb-6">
          ✦
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight mb-2">
          Experience.
        </h2>
        <p className="text-2xl sm:text-3xl text-slate-400 font-normal tracking-tight leading-snug">
          Building games, web apps, and shipping projects
        </p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`rounded-3xl border p-6 sm:p-7 transition-all duration-200 ${
              exp.highlighted
                ? 'bg-[#9D00FF]/10 border-[#9D00FF]/30 shadow-[0_2px_8px_rgba(0,0,0,0.02)]'
                : 'bg-white border-slate-200/80 hover:border-[#9D00FF]/30 shadow-xs'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-slate-400 font-medium">·</span>
                  <span className="text-sm sm:text-base font-semibold text-[#9D00FF]">
                    {exp.organization}
                  </span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1.5 max-w-3xl">
                  {exp.summary}
                </p>
              </div>

              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-1 shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <span className="text-slate-800">{exp.period}</span>
                <span>{exp.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200/60">
              {exp.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-medium text-slate-700"
                >
                  {tag}{tIdx < exp.tags.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
