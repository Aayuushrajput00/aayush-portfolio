import React, { useState } from "react";
import { HeroSection } from "./sections/HeroSection";
import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";
import { ProjectModal } from "./components/ProjectModal";
import { ProjectItem } from "./data/projectsData";

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit selection:bg-[#B600A8] selection:text-white"
      style={{ overflowX: "clip" }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. SERVICES SECTION */}
      <ServicesSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* FOOTER */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* CONTACT MODAL */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* PROJECT DETAIL MODAL */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
