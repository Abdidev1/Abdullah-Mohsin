import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  PenTool,
  Tv,
  ArrowLeftRight,
  BarChart2,
  Layout,
  Smartphone,
  Sparkles,
  Activity,
  LineChart,
  Search,
} from 'lucide-react';

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

interface WorkSectionProps {
  onSelectProject: (project: ProjectData) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const marqueeRow1 = [
    { label: 'Copywriting', icon: PenTool },
    { label: 'Motion Graphics', icon: Tv },
    { label: 'Framer Migration', icon: ArrowLeftRight },
    { label: 'Data Visualisation', icon: BarChart2 },
    { label: 'Copywriting', icon: PenTool },
    { label: 'Motion Graphics', icon: Tv },
    { label: 'Framer Migration', icon: ArrowLeftRight },
    { label: 'Data Visualisation', icon: BarChart2 },
  ];

  const marqueeRow2 = [
    { label: 'Landing Pages', icon: Layout },
    { label: 'Mobile Apps', icon: Smartphone },
    { label: 'Design Systems', icon: Sparkles },
    { label: 'Saas Platforms', icon: Activity },
    { label: 'Research-backed', icon: LineChart },
    { label: 'SEO Optimization', icon: Search },
    { label: 'Landing Pages', icon: Layout },
    { label: 'Mobile Apps', icon: Smartphone },
    { label: 'Design Systems', icon: Sparkles },
    { label: 'Saas Platforms', icon: Activity },
  ];

  const projects: ProjectData[] = [
    {
      id: 'jadawel',
      title: 'Jadawel Saas Platform',
      subtitle: 'Unlocked data table streamlining through user research and prioritization.',
      bullets: [
        'UX Auditing',
        'UX Research',
        'User Testing',
        'Design Sytem',
        'UX/UI Design',
      ],
      billboardImage: '/assets/portfolio/billboard_jadawel.png',
      role: 'Lead UX/UI Designer & Systems Architect',
      timeline: '4 Months (Q2-Q3)',
      overview:
        'Jadawel is a high-volume data-table workflow platform built for operations and enterprise finance teams who needed to migrate away from messy, fragile spreadsheets into an audit-proof, real-time collaborative tool.',
      challenge:
        'Users were overwhelmed by dense data tables with 50+ attributes per record, experiencing cognitive overload, duplicate entry errors, and sluggish cell rendering on legacy browsers.',
      solution:
        'Conducted generative interviews with 24 power users across 3 enterprise tiers. Restructured the table information architecture with customizable column views, keyboard shortcuts, inline cell validations, and real-time activity audit trails.',
      impact: [
        '43% reduction in record creation latency',
        'Zero critical data entry rollback incidents in first 90 days',
        'Adopted by over 12 enterprise corporate clients within 6 months',
      ],
    },
    {
      id: 'satha',
      title: 'Satha Mobile App',
      subtitle:
        'Redefined roadside assistance through a UX-driven approach and created the first app in Oman to book tow trucks.',
      bullets: [
        'UX Strategy & Research',
        'End-to-end Experience',
        'Product Design',
        'Design System',
        'UX/UI Design',
      ],
      billboardImage: '/assets/portfolio/billboard_satha.png',
      role: 'Principal Mobile UX Designer',
      timeline: '6 Months',
      overview:
        'Satha is the first on-demand roadside assistance and tow-truck dispatch mobile application engineered specifically for the Sultanate of Oman.',
      challenge:
        'Drivers stranded on remote desert highways suffered high anxiety with unreliable call-center phone dispatches, inaccurate location descriptions, and non-transparent pricing.',
      solution:
        'Engineered an ultra-simplified 2-tap breakdown dispatch flow with automatic GPS pinning, vehicle diagnostic tagging, real-time live tow truck tracking, and upfront fixed fare calculations.',
      impact: [
        '4.9/5 App Store rating across 2,400+ consumer reviews',
        'Average tow-truck arrival dispatch time cut from 55 mins to 18 mins',
        'Over 18,000 successful roadside rescues facilitated in Year 1',
      ],
    },
    {
      id: 'mathstack',
      title: 'MathStack Framer Website',
      subtitle: 'Helped Math Stack Tutor Go Global: A Clean, Conversion-Focused Framer Site.',
      bullets: [
        'Framer Website',
        'SEO Optimization',
        'Brand Identity',
        'UX/UI Design',
      ],
      billboardImage: '/assets/portfolio/billboard_mathstack.png',
      role: 'Brand & Framer Developer / Designer',
      timeline: '6 Weeks',
      overview:
        'MathStack provides premium online 1-on-1 and cohort mathematics tutoring from middle school to IB Diploma, GRE, Calculus, and university engineering levels.',
      challenge:
        'The previous site had high bounce rates (72%) and low international trial lesson bookings due to clunky scheduling and unclear curriculum breakdowns.',
      solution:
        'Designed an educational visual identity with responsive curriculum pathways, tutor credibility proof-points, interactive booking calendars, and 100% lighthouse SEO performance.',
      impact: [
        '310% increase in free trial lesson conversion inquiries',
        'Organic search rankings on page 1 for IB Math & Calculus tutoring queries',
        'International student acquisition across 14 countries',
      ],
    },
  ];

  return (
    <section id="work" className="pt-12 pb-8 scroll-mt-20">
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

      {/* Section Title */}
      <div className="mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight mb-1">
          Work.
        </h2>
        <p className="text-3xl sm:text-4xl font-normal text-slate-400 tracking-tight">
          A few recent projects.
        </p>
      </div>

      {/* Infinite Dual Marquee */}
      <div className="relative overflow-hidden py-4 my-8 border-y border-slate-100 flex flex-col gap-3">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Row 1 */}
        <div className="overflow-hidden">
          <div className="animate-marquee-left flex gap-3">
            {[...marqueeRow1, ...marqueeRow1].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`m1-${idx}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#fef2f4] border border-[#fed7dc] text-slate-800 text-sm font-medium whitespace-nowrap shadow-xs hover:bg-pink-100/70 transition-colors"
                >
                  <IconComp className="w-4 h-4 text-slate-700" strokeWidth={1.75} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="overflow-hidden">
          <div className="animate-marquee-right flex gap-3">
            {[...marqueeRow2, ...marqueeRow2].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`m2-${idx}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#fef2f4] border border-[#fed7dc] text-slate-800 text-sm font-medium whitespace-nowrap shadow-xs hover:bg-pink-100/70 transition-colors"
                >
                  <IconComp className="w-4 h-4 text-slate-700" strokeWidth={1.75} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3 Featured Project Showcase Rows */}
      <div className="space-y-16 mt-14">
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 first:pt-0 border-t first:border-t-0 border-slate-100"
          >
            {/* Left Column: Project Details */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                  {project.subtitle}
                </p>

                {/* Checklist with Purple Circles */}
                <ul className="space-y-2.5 mb-8">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2.5 text-slate-800 text-sm font-medium">
                      <CheckCircle2
                        className="w-4 h-4 text-[#4338ca] shrink-0"
                        strokeWidth={2}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Project Link Button */}
              <div>
                <button
                  onClick={() => onSelectProject(project)}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#4338ca] hover:text-indigo-800 transition-colors cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Billboard Mockup Card */}
            <div className="lg:col-span-7">
              <div
                onClick={() => onSelectProject(project)}
                className="group relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-slate-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-slate-300"
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={project.billboardImage}
                    alt={`${project.title} outdoor billboard mockup`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900 shadow-md">
                    Explore Case Study ↗
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
