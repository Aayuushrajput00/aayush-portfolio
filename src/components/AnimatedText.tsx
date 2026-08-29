import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-20">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#D7E2EA]"
      >
        {children}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");
  const total = characters.length;

  return (
    <p
      ref={containerRef}
      className={`font-kanit font-medium leading-relaxed ${className}`}
    >
      {characters.map((char, index) => {
        const start = index / total;
        const end = start + 1 / total;
        return (
          <Char key={index} progress={scrollYProgress} range={[start, end]}>
            {char === " " ? "\u00A0" : char}
          </Char>
        );
      })}
    </p>
  );
};
