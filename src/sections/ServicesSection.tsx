import React, { useState } from "react";
import { FadeIn } from "../components/FadeIn";
import { servicesData, pricingPlans } from "../data/servicesData";
import { Check, Sparkles, Clock, ArrowRight } from "lucide-react";
import { ContactButton } from "../components/ContactButton";

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenContact,
}) => {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 shadow-2xl"
    >
      {/* Anchor for Price link in navbar */}
      <div id="price" className="absolute -top-10" />

      <div className="max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {/* 1. SECTION: SERVICES */}
        <div>
          <FadeIn delay={0} y={30} className="text-center mb-16 sm:mb-20">
            <h2
              className="text-[#0C0C0C] font-kanit font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Services
            </h2>
            <p className="mt-4 text-xs sm:text-sm uppercase tracking-widest font-kanit font-medium text-black/50">
              End-to-End Design Craft • From Concept to Code
            </p>
          </FadeIn>

          {/* 5 service items in vertical list */}
          <div className="divide-y divide-[rgba(12,12,12,0.12)] border-t border-b border-[rgba(12,12,12,0.12)]">
            {servicesData.map((service, index) => (
              <FadeIn
                key={service.number}
                delay={index * 0.08}
                y={25}
                className="py-8 sm:py-10 md:py-12 group cursor-pointer transition-colors duration-300 hover:bg-black/[0.02] px-2 sm:px-6 rounded-2xl"
              >
                <div
                  onClick={onOpenContact}
                  className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12"
                >
                  {/* Number on left */}
                  <div
                    className="font-kanit font-black text-[#0C0C0C] leading-none shrink-0 transition-transform duration-300 group-hover:translate-x-2"
                    style={{ fontSize: "clamp(3rem, 9vw, 130px)" }}
                  >
                    {service.number}
                  </div>

                  {/* Name + Description stacked vertically on right */}
                  <div className="flex flex-col justify-center space-y-2 md:pt-4 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3
                        className="font-kanit font-medium uppercase text-[#0C0C0C] tracking-wide"
                        style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" }}
                      >
                        {service.name}
                      </h3>
                      {service.startingPrice && (
                        <span className="text-xs uppercase font-kanit font-semibold tracking-wider px-3 py-1 rounded-full bg-black/5 text-black/70 border border-black/10">
                          Starts at {service.startingPrice}
                        </span>
                      )}
                    </div>

                    <p
                      className="font-kanit font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60"
                      style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.2rem)" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 2. SECTION: PRICING PLANS */}
        <div className="pt-8 border-t border-black/10">
          <FadeIn delay={0} y={30} className="text-center mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs uppercase tracking-widest text-[#B600A8] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Transparent Pricing &amp; Packages
            </div>
            <h3
              className="text-[#0C0C0C] font-kanit font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 8vw, 90px)" }}
            >
              Simple Pricing
            </h3>
            <p className="mt-3 text-sm sm:text-base text-black/60 font-light max-w-lg mx-auto">
              Clear deliverables, fixed scope, and guaranteed on-time delivery. No hidden costs.
            </p>

            {/* Currency Switcher */}
            <div className="mt-6 inline-flex items-center p-1 rounded-full bg-black/5 border border-black/10">
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  currency === "USD"
                    ? "bg-black text-white shadow-md"
                    : "text-black/60 hover:text-black"
                }`}
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  currency === "INR"
                    ? "bg-black text-white shadow-md"
                    : "text-black/60 hover:text-black"
                }`}
              >
                INR (₹)
              </button>
            </div>
          </FadeIn>

          {/* 3 Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {pricingPlans.map((plan, idx) => (
              <FadeIn
                key={plan.id}
                delay={idx * 0.1}
                y={30}
                className={`relative rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#0C0C0C] text-white shadow-2xl scale-[1.02] border-2 border-[#B600A8]"
                    : "bg-[#F7F8FA] text-[#0C0C0C] border border-black/10 hover:shadow-xl"
                }`}
              >
                {/* Popular Pill Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#B600A8] to-[#FF5722] text-white text-[11px] font-bold uppercase tracking-widest shadow-lg">
                    ★ Most Popular
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
                        plan.popular
                          ? "bg-white/10 text-[#D7E2EA]"
                          : "bg-black/5 text-black/70"
                      }`}
                    >
                      {plan.badge}
                    </span>

                    <span
                      className={`text-xs flex items-center gap-1 font-medium ${
                        plan.popular ? "text-white/60" : "text-black/50"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 text-[#B600A8]" />
                      {plan.deliveryTime}
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-kanit font-bold uppercase tracking-tight mb-2">
                    {plan.name}
                  </h4>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      plan.popular ? "text-white/70 font-light" : "text-black/60 font-light"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-black/10 dark:border-white/10">
                    <span className="text-4xl sm:text-5xl font-kanit font-black tracking-tight">
                      {currency === "USD" ? plan.priceUSD : plan.priceINR}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-wider ${
                        plan.popular ? "text-white/50" : "text-black/50"
                      }`}
                    >
                      / {plan.period}
                    </span>
                  </div>

                  {/* Feature Checkmarks */}
                  <div className="space-y-3 mb-8">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        plan.popular ? "text-white/80" : "text-black/80"
                      }`}
                    >
                      What&apos;s Included:
                    </p>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.popular
                              ? "bg-[#B600A8] text-white"
                              : "bg-black/10 text-black"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span
                          className={
                            plan.popular ? "text-white/80 font-light" : "text-black/70 font-light"
                          }
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-2">
                  {plan.popular ? (
                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#FF5722] text-white font-kanit font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                      Choose Plan <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="w-full py-4 rounded-full border-2 border-black bg-transparent text-black font-kanit font-medium text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Bottom custom quote note */}
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-black/60 font-light">
              Need a tailored enterprise engagement or custom monthly retainer?{" "}
              <button
                type="button"
                onClick={onOpenContact}
                className="font-semibold text-black underline hover:text-[#B600A8] transition-colors cursor-pointer"
              >
                Let&apos;s talk about your custom scope
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
