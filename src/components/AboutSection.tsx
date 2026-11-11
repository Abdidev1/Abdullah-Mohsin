import React from 'react';
import {
  Code2,
  Check,
  Palette,
  Scan,
  Network,
  Search,
  FileText,
  Hammer,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="pt-12 pb-16 scroll-mt-20">
      {/* Top Left decorative logo button */}
      <div className="mb-6">
        <a
          href="#home"
          aria-label="Back to top"
          className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-pink-50/80 border border-pink-200/80 text-[#4338ca] hover:scale-105 transition-all shadow-xs"
        >
          <Code2 className="w-5 h-5 text-[#4338ca]" strokeWidth={2.5} />
        </a>
      </div>

      {/* Main Container with light lavender background & dog-ear corner effect */}
      <div className="relative bg-[#eef1fe] rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#dce3fe] shadow-xs overflow-hidden">
        {/* Decorative dog-ear / folded paper corner at top right */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-[#dfe4fd] border-b border-l border-[#c8d2fa] rounded-bl-2xl shadow-xs pointer-events-none" />

        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight mb-1">
            Get to know me.
          </h2>
          <p className="text-3xl sm:text-4xl font-normal text-slate-400 tracking-tight">
            Who am I?
          </p>
        </div>

        {/* Bento Grid */}
        <div className="space-y-6">
          {/* Top Row: Process Card (Left) & Empathy / Skyline Card (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 1: My process (ever-changing) */}
            <div className="lg:col-span-6 relative bg-gradient-to-br from-[#fdeef2] to-[#fce4ec] rounded-3xl p-7 sm:p-8 border border-[#fad2dd] shadow-xs overflow-hidden flex flex-col justify-between">
              {/* Subtle decorative concentric waves on the right */}
              <div className="absolute right-4 bottom-4 w-40 h-40 border-8 border-pink-200/40 rounded-3xl pointer-events-none transform rotate-12 -z-0 opacity-50" />
              <div className="absolute right-8 bottom-8 w-28 h-28 border-8 border-pink-200/40 rounded-2xl pointer-events-none transform rotate-12 -z-0 opacity-50" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
                  My <span className="font-extrabold">process</span> (ever-changing)
                </h3>

                <ul className="space-y-3.5">
                  {[
                    'Understand the "why" behind the ask',
                    'Map the journey',
                    'Sketch, test, and test again',
                    'Design with precision',
                    'Collaborate, ship, and iterate',
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-white shadow-xs flex items-center justify-center text-[#4338ca] shrink-0 border border-pink-200">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Standing out through empathy & systems thinking (with skyline photo) */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#525de8] shadow-md min-h-[320px] flex flex-col justify-between p-7 sm:p-8 bg-[#3f4be8]">
              {/* Background Skyline Image with purple overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/assets/portfolio/about_skyline.png"
                  alt="City skyline at dusk"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-40 scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c37cf] via-[#3f4be8]/80 to-[#4338ca]/60" />
              </div>

              {/* Top icon */}
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center mb-6">
                  <Palette className="w-5 h-5 text-[#4338ca]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug max-w-md">
                  Standing out through <strong className="font-extrabold text-white">empathy & systems thinking</strong>
                </h3>
              </div>

              {/* Bottom Testimonial Glass Pill */}
              <div className="relative z-10 mt-8 self-start">
                <div className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 shadow-lg">
                  <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white/50 shrink-0">
                    <img
                      src="/assets/portfolio/highlight_udacity.png"
                      alt="Student reviewer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white">5/5</span>
                      <div className="flex text-amber-300 text-xs">★★★★★</div>
                    </div>
                    <p className="text-[12px] text-white/90 font-medium">Loved by many hehe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: Bringing clarity to complexity (Full-Width White Card) */}
          <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/80 shadow-xs">
            <div className="w-11 h-11 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center mb-5">
              <Scan className="w-5 h-5 text-[#4338ca]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-4">
              Bringing <span className="font-extrabold underline decoration-pink-300 decoration-wavy decoration-2">clarity to complexity</span>, one interface at a time!
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
              We already see enough friction in life; my work is about removing it in digital spaces :D
              I’m driven by curiosity, a lot of empathy, and a deep need to make things that are both
              beautiful to look at and extremely usable. Design allows me to build more humane,
              intuitive, and empowering applications in a world that too often feels monotone.
            </p>
          </div>

          {/* Bottom Row 1: My super powers... (Full-Width Royal Blue Card) */}
          <div className="bg-[#3f4be8] rounded-3xl p-7 sm:p-10 text-white shadow-md border border-[#323ecf]">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
              My super powers...
            </h3>

            <div className="space-y-6">
              {[
                {
                  title: 'Systems thinking',
                  desc: 'I see the big picture and the tiny edge cases.',
                  icon: Network,
                },
                {
                  title: 'Research-driven craft',
                  desc: 'I design with intention, backed by research and feasibility.',
                  icon: Search,
                },
                {
                  title: 'Copy-aware design',
                  desc: "I write as I wireframe, always with the user's mindset.",
                  icon: FileText,
                },
                {
                  title: 'Craft-focused',
                  desc: 'I sweat the details keeping things collaborative and open.',
                  icon: Hammer,
                },
                {
                  title: 'Storytelling through design',
                  desc: 'I simplify complex ideas using visual narratives, motion, etc.',
                  icon: Sparkles,
                },
              ].map((power, idx) => {
                const IconComponent = power.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white tracking-tight">
                        {power.title}
                      </h4>
                      <p className="text-white/80 text-sm font-normal leading-relaxed">
                        {power.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Row 2: Beyond Design? (Left) & Let's work together (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Beyond Design? Card with circular painting artwork */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between">
              {/* Circular Painting in top right */}
              <div className="absolute -top-3 -right-3 w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg pointer-events-none">
                <img
                  src="/assets/portfolio/beyond_painting.png"
                  alt="Original canvas painting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="relative z-10 pt-2 pr-28 sm:pr-36">
                <h3 className="text-2xl font-bold text-slate-950 tracking-tight mb-5">
                  Beyond Design?
                </h3>

                <ul className="space-y-3 text-slate-700 text-sm sm:text-base font-normal">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    <span>Painting to unwind.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    <span>
                      Watching <strong className="font-semibold text-slate-900">series</strong>.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    <span>
                      Traveling and <strong className="font-semibold text-slate-900">photography</strong> to get inspired.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Let's work together. Dark Card */}
            <div className="lg:col-span-6 bg-[#18181b] rounded-3xl p-7 sm:p-8 text-white shadow-lg border border-zinc-800 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white mb-3">
                  Let's <strong className="font-bold text-white">work together.</strong>
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Open to projects and teams that care about bringing their products to live through thoughtful design - I'd love to hear from you!
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenContact}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-all shadow-md hover:scale-105 cursor-pointer"
                >
                  <span>Let's connect!</span>
                  <span className="text-lg leading-none transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ⤹
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
