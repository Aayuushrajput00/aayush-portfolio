import React from "react";
import { FadeIn } from "../components/FadeIn";
import { servicesData } from "../data/servicesData";

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenContact,
}) => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 shadow-2xl"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading: Services */}
        <FadeIn delay={0} y={30} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="text-[#0C0C0C] font-kanit font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 service items in a vertical list */}
        <div className="divide-y divide-[rgba(12,12,12,0.15)] border-t border-b border-[rgba(12,12,12,0.15)]">
          {servicesData.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className="py-8 sm:py-10 md:py-12 group cursor-pointer transition-colors duration-300 hover:bg-black/[0.02] px-2 sm:px-4 rounded-2xl"
            >
              <div
                onClick={onOpenContact}
                className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12"
              >
                {/* Number on left */}
                <div
                  className="font-kanit font-black text-[#0C0C0C] leading-none shrink-0 transition-transform duration-300 group-hover:translate-x-2"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {service.number}
                </div>

                {/* Name + Description stacked vertically on right */}
                <div className="flex flex-col justify-center space-y-2 md:pt-4 flex-1">
                  <h3
                    className="font-kanit font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {service.name}
                  </h3>

                  <p
                    className="font-kanit font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
