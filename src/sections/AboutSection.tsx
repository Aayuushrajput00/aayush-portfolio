import React from "react";
import { FadeIn } from "../components/FadeIn";
import { AnimatedText } from "../components/AnimatedText";
import { ContactButton } from "../components/ContactButton";

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const aboutText =
    "I’m Aayush Thakur, a UI/UX Designer passionate about creating clean, intuitive, and meaningful digital experiences. I combine thoughtful problem-solving with strong visual design to turn complex ideas into simple experiences people enjoy using.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* 4 Decorative 3D images positioned absolutely in corners */}
      {/* Top-left: Moon icon */}
      <FadeIn
        delay={0.1}
        duration={0.9}
        x={-80}
        y={0}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        duration={0.9}
        x={-80}
        y={0}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
        />
      </FadeIn>

      {/* Top-right: Lego icon */}
      <FadeIn
        delay={0.15}
        duration={0.9}
        x={80}
        y={0}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        duration={0.9}
        x={80}
        y={0}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
        />
      </FadeIn>

      {/* Heading: About me */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-kanit font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading/text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph: character-by-character scroll opacity */}
        <div className="max-w-[580px] px-4">
          <AnimatedText
            text={aboutText}
            className="text-center font-medium leading-relaxed"
          />
        </div>

        {/* Gap between text block and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={onOpenContact} label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};
