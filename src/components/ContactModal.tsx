import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Mail, Sparkles } from "lucide-react";
import { ContactButton } from "./ContactButton";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "UX / UI design",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", service: "UX / UI design", message: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#141414] border border-[#2A2E39] rounded-[32px] p-6 sm:p-10 shadow-2xl overflow-hidden z-10 text-[#D7E2EA]"
          >
            {/* Ambient glows */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#B600A8]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#7621B0]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#D7E2EA] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#B600A8]/20 border border-[#B600A8] flex items-center justify-center text-[#B600A8]">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-kanit font-black uppercase text-white">
                  Message Sent!
                </h3>
                <p className="text-[#D7E2EA]/70 max-w-md font-light text-sm sm:text-base">
                  Thank you for reaching out, {formData.name || "friend"}! Aayush will get back to you at {formData.email} within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 px-8 py-3 rounded-full border border-[#D7E2EA]/30 hover:bg-white/10 text-white uppercase tracking-wider text-sm font-medium transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#B600A8] font-medium mb-3">
                    <Sparkles className="w-3.5 h-3.5" /> Let&apos;s Collaborate
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-kanit font-black uppercase text-white tracking-tight">
                    Start a Project
                  </h2>
                  <p className="text-sm text-[#D7E2EA]/60 font-light mt-1">
                    Have a concept in mind? Let&apos;s build an extraordinary digital experience together.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Aayush Thakur"
                        className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#2A2E39] rounded-xl text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors font-light text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ayushrajput20005@gmail.com"
                        className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#2A2E39] rounded-xl text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors font-light text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-1.5">
                      Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#2A2E39] rounded-xl text-white focus:outline-none focus:border-[#B600A8] transition-colors font-light text-sm"
                    >
                      <option value="Product thinking">01 - Product thinking</option>
                      <option value="UX / UI design">02 - UX / UI design</option>
                      <option value="Design systems">03 - Design systems</option>
                      <option value="Web experiences">04 - Web experiences</option>
                      <option value="Prototype & refine">05 - Prototype & refine</option>
                      <option value="Full Project Collaboration">Full Project Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your goals, timeline, and inspiration..."
                      className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#2A2E39] rounded-xl text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors font-light text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-xs text-[#D7E2EA]/60">
                      <a
                        href="mailto:ayushrajput20005@gmail.com"
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#B600A8]" /> ayushrajput20005@gmail.com
                      </a>
                    </div>
                    <ContactButton label="Send Proposal" className="w-full sm:w-auto" />
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
