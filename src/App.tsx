import React, { useState, useEffect } from "react";
import { HeroSection } from "./sections/HeroSection";
import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";
import { ProjectModal } from "./components/ProjectModal";
import { ProjectItem } from "./data/projectsData";
import { DelmMarketing } from "./projects/DelmMarketing";

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#delm-marketing") {
        setActiveDemo("delm-marketing");
      } else if (window.location.hash === "") {
        setActiveDemo(null);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenDemo = (projectId: string) => {
    if (projectId === "delm-marketing") {
      window.location.hash = "#delm-marketing";
      setActiveDemo("delm-marketing");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToPortfolio = () => {
    window.location.hash = "";
    setActiveDemo(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If Delm Marketing interactive demo is active
  if (activeDemo === "delm-marketing") {
    return <DelmMarketing onBack={handleBackToPortfolio} />;
  }

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
        onSelectProject={(project) => {
          if (project.id === "delm-marketing") {
            setSelectedProject(project);
          } else {
            setSelectedProject(project);
          }
        }}
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
        onLaunchDemo={handleOpenDemo}
      />
    </div>
  );
}

export default App;
