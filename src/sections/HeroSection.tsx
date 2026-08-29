import React from "react";
import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/ContactButton";

interface HeroSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  const navLinks = [
    { label: "About", id: "about" },
    { label: "Price", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none"
    >
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <header className="w-full px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                if (link.id === "contact") {
                  onOpenContact();
                } else {
                  onNavigate(link.id);
                }
              }}
              className="text-[#D7E2EA] font-kanit font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
        </header>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden flex items-center justify-center pointer-events-none z-0">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-kanit font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m aayush
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait with Mouse Magnet Effect */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#B600A8]/20 via-[#7621B0]/10 to-transparent blur-2xl -z-10 group-hover:scale-110 transition-transform duration-500" />
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Aayush Thakur - UI/UX Designer"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-none select-none transition-transform duration-500"
              loading="eager"
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* 4. Bottom bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-kanit font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[300px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a ui/ux designer driven by crafting intuitive, clean and meaningful digital experiences
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};
