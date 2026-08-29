import React from "react";
import { ContactButton } from "./ContactButton";
import { ArrowUp, Github, Instagram, Twitter, Linkedin, Sparkles, Mail } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#080808] border-t border-[#1C1F26] text-[#D7E2EA] pt-20 pb-12 px-6 md:px-12 z-30 select-none">
      <div className="max-w-6xl mx-auto flex flex-col space-y-16">
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 border-b border-[#1C1F26]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B600A8] mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Open For Opportunities
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-kanit font-black uppercase text-white tracking-tight">
              Have an Idea in Mind?
            </h3>
            <p className="text-sm sm:text-base text-[#D7E2EA]/60 font-light mt-2 max-w-lg">
              Let&apos;s collaborate to craft award-winning visual experiences, product designs, and interactive interfaces.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="mailto:ayushrajput20005@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#B600A8]" />
              ayushrajput20005@gmail.com
            </a>
            <ContactButton onClick={onOpenContact} label="Get In Touch" />
          </div>
        </div>

        {/* Middle row: Brand & Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-2xl font-kanit font-black uppercase tracking-tight text-white">
              Aayush Thakur
            </div>
            <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-light mt-1">
              UI/UX Designer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:ayushrajput20005@gmail.com"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#D7E2EA] transition-colors"
              aria-label="Email"
              title="ayushrajput20005@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#D7E2EA] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#D7E2EA] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#D7E2EA] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#D7E2EA] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom row: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#D7E2EA]/40 font-light">
          <p>© {new Date().getFullYear()} Aayush Thakur. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
