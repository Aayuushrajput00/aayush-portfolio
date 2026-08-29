import React from "react";

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = "",
  label = "Contact Me",
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`relative group inline-flex items-center justify-center rounded-full font-kanit font-medium uppercase tracking-widest text-white transition-all duration-300 transform active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer shadow-lg hover:shadow-[0px_0px_25px_rgba(182,0,168,0.5)] ${className}`}
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid #FFFFFF",
        outlineOffset: "-3px",
      }}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
      />
    </button>
  );
};
