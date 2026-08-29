import React, { useEffect, useRef, useState } from "react";
import { row1Gifs, row2Gifs } from "../data/marqueeData";

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      
      const calculated = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculated);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const tripledRow1 = [...row1Gifs, ...row1Gifs, ...row1Gifs];
  const tripledRow2 = [...row2Gifs, ...row2Gifs, ...row2Gifs];

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none w-full"
    >
      {/* Row 1: Moves RIGHT on scroll */}
      <div className="overflow-hidden py-1.5 w-full">
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row1Transform,
            transition: "transform 0.1s linear",
          }}
        >
          {tripledRow1.map((gifUrl, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 w-[320px] sm:w-[420px] h-[200px] sm:h-[270px] rounded-2xl overflow-hidden bg-[#16181D] border border-white/5 shadow-2xl relative group"
            >
              <img
                src={gifUrl}
                alt={`3D Animation showcase ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div className="overflow-hidden py-1.5 w-full">
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row2Transform,
            transition: "transform 0.1s linear",
          }}
        >
          {tripledRow2.map((gifUrl, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 w-[320px] sm:w-[420px] h-[200px] sm:h-[270px] rounded-2xl overflow-hidden bg-[#16181D] border border-white/5 shadow-2xl relative group"
            >
              <img
                src={gifUrl}
                alt={`3D Motion showcase ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
