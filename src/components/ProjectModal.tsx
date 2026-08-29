import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUpRight, Globe } from "lucide-react";
import { ProjectItem } from "../data/projectsData";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onLaunchDemo?: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onLaunchDemo,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#121212] border-2 border-[#D7E2EA]/30 rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 shadow-2xl overflow-hidden z-10 text-[#D7E2EA] my-auto max-h-[90vh] overflow-y-auto"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7621B0]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-[#2A2E39]">
              <div className="flex items-center gap-3">
                <span className="font-kanit font-black text-2xl sm:text-3xl text-white">
                  {project.number}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#D7E2EA]">
                  {project.category}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#D7E2EA] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-kanit font-black uppercase text-white tracking-tight">
                  {project.name}
                </h2>
                <p className="text-base sm:text-lg text-[#D7E2EA]/80 font-normal mt-1">
                  {project.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#D7E2EA]/70 font-light leading-relaxed">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.id === "delm-marketing" && onLaunchDemo && (
                  <button
                    onClick={() => {
                      onClose();
                      onLaunchDemo(project.id);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#E63956] text-white font-kanit font-medium text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95"
                  >
                    <Globe className="w-4 h-4" /> Open Full Interactive Website
                  </button>
                )}

                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white font-kanit font-medium text-sm uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 text-[#B600A8]" /> Figma Prototype
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="space-y-4">
                  <img
                    src={project.col1Img1}
                    alt={`${project.name} preview 1`}
                    className="w-full h-48 sm:h-64 object-cover rounded-2xl border border-white/10 shadow-lg"
                  />
                  <img
                    src={project.col1Img2}
                    alt={`${project.name} preview 2`}
                    className="w-full h-48 sm:h-64 object-cover rounded-2xl border border-white/10 shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src={project.col2Img}
                    alt={`${project.name} full preview`}
                    className="w-full h-full min-h-[300px] object-cover rounded-2xl border border-white/10 shadow-lg"
                  />
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#D7E2EA]/50 uppercase tracking-widest">
                  Featured Case Study - Designed by Aayush Thakur
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 rounded-full border border-white/20 text-white font-kanit uppercase tracking-wider text-sm hover:bg-white/10 transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
