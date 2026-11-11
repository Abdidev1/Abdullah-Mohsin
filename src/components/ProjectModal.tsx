import React, { useEffect } from 'react';
import { X, CheckCircle2, Calendar, User, ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectData } from './WorkSection';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-white flex items-center justify-center shadow-md transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Billboard Hero Header Image */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
          <img
            src={project.billboardImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md mb-2">
              Featured Case Study
            </span>
            <h2 id="modal-title" className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Metadata bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-100 text-sm">
            <div>
              <p className="text-xs uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>Role</span>
              </p>
              <p className="font-semibold text-slate-900">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Timeline</span>
              </p>
              <p className="font-semibold text-slate-900">{project.timeline}</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs uppercase font-bold text-slate-400 mb-1">Disciplines</p>
              <div className="flex flex-wrap gap-1.5">
                {project.bullets.map((b, i) => (
                  <span
                    key={i}
                    className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Project Overview</h3>
            <p className="text-slate-600 leading-relaxed text-base">{project.overview}</p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className="text-base font-bold text-slate-900 mb-2">The Challenge</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{project.challenge}</p>
            </div>
            <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100">
              <h4 className="text-base font-bold text-[#4338ca] mb-2">The Solution</h4>
              <p className="text-slate-700 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Impact & Metrics */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Key Results & Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.impact.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-slate-800">{stat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">Want to discuss this case study in detail?</p>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4338ca] hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Get in touch with Javeria</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
