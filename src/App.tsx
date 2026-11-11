import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HighlightsSection } from './components/HighlightsSection';
import { WorkSection, ProjectData } from './components/WorkSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'contact') {
      setIsContactModalOpen(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll spy to update active navbar pill based on viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const homeEl = document.getElementById('home');
      const workEl = document.getElementById('work');
      const aboutEl = document.getElementById('about');

      if (aboutEl && scrollPosition >= aboutEl.offsetTop) {
        setActiveSection('about');
      } else if (workEl && scrollPosition >= workEl.offsetTop) {
        setActiveSection('work');
      } else if (homeEl) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map highlight IDs to projects if clicked
  const handleSelectHighlight = (id: string) => {
    const highlightProjects: Record<string, ProjectData> = {
      udacity: {
        id: 'udacity',
        title: 'Mentoring 40+ UX students at Udacity',
        subtitle: 'Unblocking complex design projects, leading UX critique circles, and coaching aspiring designers.',
        bullets: ['UX Mentorship', 'Design Critiques', 'Student Portfolios', 'Heuristic Audits'],
        billboardImage: '/assets/portfolio/highlight_udacity.png',
        role: 'UX Mentor & Session Lead',
        timeline: '1 Year+',
        overview:
          'Leading regular 1-on-1 and group coaching sessions for over 120 global students in the Udacity UX Designer Nanodegree program. Guided students through complete end-to-end user research, information architecture, wireframing, and interactive prototyping.',
        challenge:
          'Students struggled with synthesizing user research into actionable wireframes and understanding business constraints in product design.',
        solution:
          'Created repeatable design audit templates, run design sprints, and provided hands-on Figma component library guidance.',
        impact: [
          '40+ students successfully certified and placed in tech roles',
          '98% positive mentorship feedback rating',
          'Coached students across 15+ countries',
        ],
      },
      rihal: {
        id: 'rihal',
        title: 'Leading design for a core product at Rihal',
        subtitle: 'Enterprise workflow management and digital transformation tools.',
        bullets: ['Core Product UX', 'Design Systems', 'Enterprise Strategy', 'User Research'],
        billboardImage: '/assets/portfolio/highlight_rihal.png',
        role: 'Lead Product Designer',
        timeline: '10 Months',
        overview:
          'Rihal is an Omani tech leader in data management and enterprise digital solutions. Led the design and systems architecture for flagship operational software.',
        challenge:
          'Complex enterprise workflows required high accuracy, stringent permission models, and fast data processing.',
        solution:
          'Architected cohesive multi-platform interfaces with unified design tokens, accessible components, and contextual inline guidance.',
        impact: [
          'Unified design system across 4 engineering teams',
          '50% reduction in new feature onboarding time',
          'Deployed to major regional organizations in the GCC',
        ],
      },
      satha: {
        id: 'satha',
        title: "Designing Oman's first roadside assistance app",
        subtitle: 'Redefined roadside assistance through a UX-driven approach and created the first app in Oman to book tow trucks.',
        bullets: ['UX Strategy & Research', 'End-to-end Experience', 'Product Design', 'UX/UI Design'],
        billboardImage: '/assets/portfolio/highlight_satha.png',
        role: 'Principal Mobile UX Designer',
        timeline: '6 Months',
        overview:
          'Satha is the first on-demand roadside assistance and tow-truck dispatch mobile application engineered specifically for the Sultanate of Oman.',
        challenge:
          'Stranded drivers on remote highways needed immediate, stress-free vehicle towing with clear pricing and reliable tracking.',
        solution:
          'Designed a 2-tap dispatch flow with automatic GPS pinning, vehicle diagnostic tagging, real-time live tow truck tracking, and upfront fixed fare calculations.',
        impact: [
          '4.9/5 App Store rating across 2,400+ reviews',
          'Average tow truck dispatch arrival cut from 55 to 18 mins',
          'Over 18,000 roadside rescues completed',
        ],
      },
    };

    if (highlightProjects[id]) {
      setSelectedProject(highlightProjects[id]);
    }
  };

  const handleSelectProjectById = (id: string) => {
    handleSelectHighlight(id);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 relative selection:bg-pink-100 selection:text-pink-900">
      {/* Background architectural guideline borders */}
      <div className="fixed inset-0 pointer-events-none max-w-6xl mx-auto border-x border-slate-100/80 -z-10" />

      {/* Floating Centered Pill Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Main Content Container matching video proportions */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection onOpenContact={() => setIsContactModalOpen(true)} />

        <HighlightsSection onSelectHighlight={handleSelectHighlight} />

        <WorkSection onSelectProject={(project) => setSelectedProject(project)} />

        <ExpertiseSection />

        <AboutSection onOpenContact={() => setIsContactModalOpen(true)} />

        <Footer
          onOpenContact={() => setIsContactModalOpen(true)}
          onSelectProjectById={handleSelectProjectById}
        />
      </main>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => {
          setSelectedProject(null);
          setIsContactModalOpen(true);
        }}
      />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
