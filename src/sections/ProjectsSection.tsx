import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { projectsData, ProjectItem } from "../data/projectsData";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onSelectProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[580px] flex items-center justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(215,226,234,0.15)]"
      >
        {/* Top Row: Number, category label, project name, Live Project button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#242933]">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-kanit font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {project.number}
            </span>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-kanit">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-kanit font-medium uppercase text-white tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveProjectButton
              onClick={() => onSelectProject(project)}
              label="Live Project"
            />
          </div>
        </div>

        {/* Bottom Row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 pt-6">
          {/* Left column (40% width) has 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A20] border border-white/5 group cursor-pointer"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A20] border border-white/5 group cursor-pointer"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right column (60% width) has 1 tall image */}
          <div className="md:col-span-7">
            <div
              className="w-full h-full min-h-[280px] md:min-h-[460px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A20] border border-white/5 group cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.col2Img}
                alt={`${project.name} full preview`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-36 px-4 sm:px-8 md:px-10 z-20"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={30} className="text-center mb-16 sm:mb-24">
          <h2
            className="hero-heading font-kanit font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Project
          </h2>
        </FadeIn>

        <div className="relative space-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projectsData.length}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
