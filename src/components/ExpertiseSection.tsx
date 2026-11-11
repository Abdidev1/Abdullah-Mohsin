import React, { useState } from 'react';
import { Monitor, Box, Users, Search } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(0); // Default first one active as in video

  const skills = [
    {
      id: 0,
      title: 'Website Design',
      icon: Monitor,
      description:
        'I create websites that feel good, beautiful, responsive, and built to help your brand connect with people (and actually convert).',
    },
    {
      id: 1,
      title: 'Product Design',
      icon: Box,
      description:
        'Crafting intuitive SaaS platforms and design systems that streamline complicated workflows into elegant, conversion-focused user experiences.',
    },
    {
      id: 2,
      title: 'UX Design Mentor',
      icon: Users,
      description:
        'Mentoring 120+ students worldwide at Udacity, conducting design audits, unblocking complex design briefs, and nurturing the next generation of designers.',
    },
    {
      id: 3,
      title: 'UX Design Researcher',
      icon: Search,
      description:
        'Grounding every creative decision in deep qualitative user interviews, usability testing, data synthesis, and behavioral psychology.',
    },
  ];

  return (
    <section className="py-16 border-t border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-50 border border-pink-200/80 text-[#4338ca] font-bold text-sm mb-6">
            A
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight mb-2">
            Expertise.
          </h2>
          <p className="text-2xl sm:text-3xl text-slate-400 font-normal tracking-tight leading-snug">
            Solving problems one creative solution at a time
          </p>
        </div>

        {/* Right Column: 2x2 Interactive Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            const isHoveredOrActive = activeCard === skill.id;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setActiveCard(skill.id)}
                onClick={() => setActiveCard(skill.id)}
                className={`relative p-7 rounded-3xl border transition-all duration-300 min-h-[260px] flex flex-col justify-between cursor-pointer ${
                  isHoveredOrActive
                    ? 'bg-[#fdeef2] border-[#fcd8e1] shadow-[0_8px_24px_rgba(253,238,242,0.8)]'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Icon inside soft circle badge */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isHoveredOrActive ? 'bg-white shadow-xs' : 'bg-slate-50'
                  }`}
                >
                  <IconComponent className="w-6 h-6 text-[#4338ca]" strokeWidth={2} />
                </div>

                {/* Text Block */}
                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mb-2">
                    {skill.title}
                  </h3>

                  {isHoveredOrActive ? (
                    <p className="text-slate-700 text-sm leading-relaxed animate-in fade-in duration-200">
                      {skill.description}
                    </p>
                  ) : (
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                      Hover to view details
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
