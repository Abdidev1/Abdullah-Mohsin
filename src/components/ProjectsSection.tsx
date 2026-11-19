import React from 'react';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  billboardImage: string;
  role: string;
  timeline: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
}

interface ProjectsSectionProps {
  onSelectProject?: (project: ProjectData) => void;
}

interface ProjectItem {
  name: string;
  category: string;
  period: string;
  description: string;
  link?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const projects: ProjectItem[] = [
    {
      name: 'Pixel Climb',
      category: 'Roblox Experience · Apex Realms Studios',
      period: '2025 – Present',
      description:
        'A 240+ stage platforming obby built from scratch in Roblox Studio with stage progression, checkpoints, and UI.',
    },
    {
      name: 'Deflecto',
      category: 'Game Jam Project · Team Sonion',
      period: 'Nov 2026',
      description:
        'A river-obstacle game created for Hackclub Haven under the bounce back theme.',
    },
    {
      name: 'Dungeon Crawler',
      category: 'Game Jam Project · Team Dungeons',
      period: 'Feb 2026',
      description:
        'A 2D maze game built for Hackclub Campfire Flagship under the below the surface theme.',
    },
    {
      name: 'Creest',
      category: 'Web Application',
      period: '2026',
      description:
        'A privacy-focused wishlist and gifting web app built with modern web tools and clean UI.',
    },
    {
      name: "90's Era Web OS",
      category: 'Browser Simulator',
      period: '2026',
      description:
        'A retro desktop experience running in the browser with windowed apps and classic UI styling.',
    },
  ];

  return (
    <section id="projects" className="py-16 border-t border-slate-100 scroll-mt-20">
      <div className="mb-10">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#9D00FF]/10 border border-[#9D00FF]/30 text-[#9D00FF] font-bold text-sm mb-6">
          ✦
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight mb-2">
          Projects.
        </h2>
        <p className="text-2xl sm:text-3xl text-slate-400 font-normal tracking-tight leading-snug">
          Games, web apps, and things I&apos;ve built
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-3xl border bg-white border-slate-200/80 hover:border-[#9D00FF]/30 shadow-xs p-6 sm:p-7 transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                    {project.name}
                  </h3>
                  <span className="text-slate-400 font-medium">·</span>
                  <span className="text-sm sm:text-base font-semibold text-[#9D00FF]">
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1.5 max-w-3xl">
                  {project.description}
                </p>
              </div>

              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-1 shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <span className="text-slate-800">{project.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
