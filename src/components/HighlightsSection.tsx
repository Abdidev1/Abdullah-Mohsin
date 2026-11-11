import React from 'react';

interface HighlightsSectionProps {
  onSelectHighlight: (id: string) => void;
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ onSelectHighlight }) => {
  const highlights = [
    {
      id: 'udacity',
      title: 'Mentoring 40+ UX students at Udacity',
      image: '/assets/portfolio/highlight_udacity.png',
      alt: 'Mentoring UX students workspace setup',
      badge: 'Mentorship & Education',
    },
    {
      id: 'rihal',
      title: 'Leading design for a core product at Rihal',
      image: '/assets/portfolio/highlight_rihal.png',
      alt: 'Rihal modern tech office interior',
      badge: 'Enterprise SaaS & Strategy',
    },
    {
      id: 'satha',
      title: "Designing Oman's first roadside assistance app",
      image: '/assets/portfolio/highlight_satha.png',
      alt: 'Satha roadside assistance app billboard',
      badge: 'Consumer Mobile App',
    },
  ];

  return (
    <section className="my-8">
      <div className="bg-[#dfe3fd] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#d2d8fc] shadow-xs">
        {/* Header with italic editorial script and doodle arrow */}
        <div className="flex items-center gap-2 mb-8">
          <h2 className="font-newsreader italic text-xl sm:text-2xl text-slate-800 tracking-tight">
            Some highlights from the past year
          </h2>
          <svg
            className="w-8 h-8 text-slate-800 transform rotate-6"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 15 C 15 10, 20 25, 30 18" />
            <path d="M26 12 L 32 18 L 27 24" />
          </svg>
        </div>

        {/* 3 Offset/Layered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectHighlight(item.id)}
              className="relative group cursor-pointer"
            >
              {/* Offset colored background card that gives the playful stacked effect */}
              <div
                className="absolute inset-0 bg-[#3f4be8] rounded-3xl transform rotate-1 translate-x-1 translate-y-1.5 transition-transform duration-300 group-hover:rotate-2 group-hover:translate-x-2 group-hover:translate-y-2 -z-0 opacity-90"
                aria-hidden="true"
              />

              {/* Main Card Content */}
              <div className="relative z-10 aspect-[4/4.4] sm:aspect-[4/4.5] w-full rounded-3xl overflow-hidden shadow-md bg-slate-900 border border-white/20 transition-transform duration-300 group-hover:-translate-y-1">
                <img
                  src={item.image}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback gradient if image load fails
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Dark gradient bottom bar with title */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 pt-12 flex flex-col justify-end">
                  <p className="text-white font-bold text-base sm:text-lg leading-snug drop-shadow-sm group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
