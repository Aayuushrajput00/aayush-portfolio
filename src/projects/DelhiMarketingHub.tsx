import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Star,
  Users,
  TrendingUp,
  Award,
  Clock,
  Search,
  Share2,
  MousePointerClick,
  FileText,
  PieChart,
  Code,
  Palette,
  Send,
  Sparkles,
  Rocket,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ExternalLink,
} from "lucide-react";

interface DelhiMarketingHubProps {
  onBack?: () => void;
  showBackBanner?: boolean;
}

export const DelhiMarketingHub: React.FC<DelhiMarketingHubProps> = ({
  onBack,
  showBackBanner = true,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      icon: Search,
      color: "bg-[#7A1CA9]",
      title: "Search Engine Optimization",
      desc: "Rank higher on Google and get found by customers actively searching for your services.",
    },
    {
      icon: Share2,
      color: "bg-[#E91E63]",
      title: "Social Media Marketing",
      desc: "Engage your audience, build your brand, and drive conversions across social platforms.",
    },
    {
      icon: MousePointerClick,
      color: "bg-[#FF5722]",
      title: "Pay-Per-Click Advertising",
      desc: "Drive instant traffic and generate high-quality leads with targeted PPC campaigns.",
    },
    {
      icon: Mail,
      color: "bg-[#0288D1]",
      title: "Email Marketing",
      desc: "Nurture leads and retain customers with personalized, high-converting email sequences.",
    },
    {
      icon: FileText,
      color: "bg-[#43A047]",
      title: "Content Marketing",
      desc: "Build authority and organic traffic with compelling blogs, copy, and visual assets.",
    },
    {
      icon: PieChart,
      color: "bg-[#5E35B1]",
      title: "Analytics & Strategy",
      desc: "Track real-time performance and refine campaigns with deep data intelligence.",
    },
  ];

  const courses = [
    {
      icon: Search,
      color: "bg-[#5E35B1]",
      title: "Digital Marketing",
      desc: "Master SEO, SEM, content strategy, and paid ads with real client campaigns.",
    },
    {
      icon: Code,
      color: "bg-[#C2185B]",
      title: "Web Development",
      desc: "Build modern, responsive, high-speed websites with clean code and conversion design.",
    },
    {
      icon: Palette,
      color: "bg-[#E64A19]",
      title: "Graphic Designing",
      desc: "Create striking brand identities, social creatives, visual ads, and UI elements.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Founder, Bloom Fashion",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      review:
        "Delhi Marketing Hub completely transformed our online presence. Our organic leads doubled in less than 3 months with their exceptional SEO strategy!",
    },
    {
      name: "Marcus Vance",
      role: "CEO, TechNova SaaS",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      review:
        "The PPC campaigns generated a 450% ROI increase for our product launch. Their transparency and weekly reporting kept our entire team aligned.",
    },
    {
      name: "Emily Rodriguez",
      role: "CMO, Nexus Real Estate",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      review:
        "Top-notch social media management and creative storytelling. They helped us build a community of over 50k engaged followers and qualified buyers.",
    },
    {
      name: "David Chen",
      role: "Director, Solace Health",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      review:
        "Working with Delhi Marketing Hub feels like having a dedicated high-performance marketing team right in our office. Highly recommended!",
    },
    {
      name: "Alisha Sharma",
      role: "Head of Growth, FinScale",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      review:
        "Their conversion rate optimization and email sequences turned cold website visitors into high-paying recurring clients.",
    },
    {
      name: "Oliver Knight",
      role: "Managing Partner, Prime Logistics",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      review:
        "Professional, creative, and strictly result-driven. The best digital marketing agency partnership we've ever invested in.",
    },
  ];

  const faqs = [
    {
      q: "Where are your services offered?",
      a: "We offer end-to-end digital marketing solutions globally across India, USA, UK, UAE, and beyond with 24/7 dedicated account managers.",
    },
    {
      q: "What is your pricing structure?",
      a: "Our packages are customized based on your business size, goals, and scope of work. We offer both project-based and monthly retainer models with transparent deliverables.",
    },
    {
      q: "How long does it take to see results?",
      a: "PPC and social ad campaigns generate traffic within 24–48 hours. Long-term strategies like SEO and Content Marketing typically deliver exponential ROI within 2 to 3 months.",
    },
    {
      q: "Can I see examples of your past work?",
      a: "Yes! We have documented case studies showing verified revenue growth, lead generation stats, and UI/UX design transformations across industries.",
    },
    {
      q: "Do you work with small businesses?",
      a: "Absolutely! We work with startups, growing small businesses, and enterprise clients alike to maximize ROI within your budget.",
    },
    {
      q: "How can I get started with you?",
      a: "Simply fill out our contact form or book a free discovery call. Our strategists will review your brand and present a tailored roadmap within 24 hours.",
    },
  ];

  const blogs = [
    {
      title: "10 SEO Strategies to Rank #1 on Google in 2026",
      category: "SEO",
      read: "5 min read",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
    },
    {
      title: "How to Build a High-Converting Social Ad Campaign",
      category: "Paid Media",
      read: "4 min read",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=80",
    },
    {
      title: "The Ultimate Guide to Email Automation for Startups",
      category: "Email",
      read: "6 min read",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80",
    },
    {
      title: "Why Brand Identity Matters More Than Ever in the AI Era",
      category: "Branding",
      read: "4 min read",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=80",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans antialiased selection:bg-[#E91E63] selection:text-white">
      {/* Optional Top Floating Portfolio Back Bar */}
      {showBackBanner && onBack && (
        <div className="sticky top-0 z-50 bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-8 py-3 flex items-center justify-between border-b border-white/10 shadow-lg">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-kanit font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Aayush Portfolio
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-white/60 font-kanit">
              UI/UX Case Study • Live Demo
            </span>
            <a
              href="https://www.figma.com/proto/Taxj7ugM7PXr7ot4z5ah8c/Untitled?node-id=0-1&t=4veZzsT57O4OmjGw-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white font-kanit font-medium text-xs sm:text-sm uppercase tracking-wider hover:opacity-90 transition-opacity shadow-md"
            >
              Figma Prototype <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* 1. NAVBAR - Matching Exact Screenshot */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#6A1B9A] via-[#E91E63] to-[#FF3D00] flex items-center justify-center text-white font-black text-xl shadow-md">
              DM
            </div>
            <div className="leading-tight">
              <span className="block font-black text-lg tracking-tight text-[#0E121E]">
                DELHI
              </span>
              <span className="block text-xs uppercase font-extrabold tracking-wider text-[#0E121E]">
                MARKETING HUB
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <a href="#dm-home" className="text-[#0E121E] hover:text-[#E91E63] transition-colors">
              Home
            </a>
            <a href="#dm-about" className="hover:text-[#E91E63] transition-colors">
              About Us
            </a>
            <a href="#dm-services" className="hover:text-[#E91E63] transition-colors">
              Services
            </a>
            <a href="#dm-courses" className="hover:text-[#E91E63] transition-colors">
              Our Courses
            </a>
            <a href="#dm-testimonials" className="hover:text-[#E91E63] transition-colors">
              Testimonials
            </a>
            <a href="#dm-blog" className="hover:text-[#E91E63] transition-colors">
              Blog
            </a>
            <a href="#dm-contact" className="hover:text-[#E91E63] transition-colors">
              Contact
            </a>
          </nav>

          {/* Header CTA Button: "Get a free quote ->" */}
          <a
            href="#dm-contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#9C27B0] via-[#E91E63] to-[#FF3D00] text-white font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-[#E91E63]/25 transition-all active:scale-95 cursor-pointer"
          >
            Get a free quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION - Exact Match with Screenshot */}
      <section id="dm-home" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Badge: "GROW YOUR BUSINESS ONLINE 🚀" */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9C27B0]/10 border border-[#9C27B0]/20 text-[#9C27B0] font-bold text-xs uppercase tracking-wider">
                GROW YOUR BUSINESS ONLINE 🚀
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black text-[#0E121E] tracking-tight leading-[1.1]">
                Digital Marketing That{" "}
                <span className="text-[#E91E63]">Drives</span>{" "}
                <span className="text-[#FF3D00]">Real Results</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                We help businesses grow online with data-driven digital marketing
                strategies that increase leads, boost conversions, and maximize
                ROI.
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#dm-services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9C27B0] via-[#E91E63] to-[#FF3D00] text-white font-bold text-sm shadow-md hover:shadow-xl hover:shadow-[#E91E63]/30 transition-all active:scale-95"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#dm-contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-purple-300 text-[#0E121E] font-bold text-sm hover:bg-purple-50 transition-colors active:scale-95"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Bottom Feature Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-6 text-xs sm:text-sm font-semibold text-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FF5722] text-white flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Data-Driven Strategies</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#7A1CA9] text-white flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Transparent Reporting</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#E91E63] text-white flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>ROI Focused</span>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Hero Image with Neon DM Sign */}
            <div className="lg:col-span-6">
              <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80"
                  alt="Delhi Marketing Hub Team"
                  className="w-full h-[360px] sm:h-[460px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUSTED BY LOGO BANNER */}
      <section className="bg-gray-50 py-10 border-y border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-6">
            TRUSTED BY 100+ BUSINESSES WORLDWIDE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-gray-400 font-bold text-xl sm:text-2xl grayscale hover:grayscale-0 transition-all">
            <span className="hover:text-[#4285F4] transition-colors">Google</span>
            <span className="hover:text-[#FF7A59] transition-colors">HubSpot</span>
            <span className="hover:text-[#0668E1] transition-colors">Meta</span>
            <span className="hover:text-[#FF9900] transition-colors">Amazon</span>
            <span className="hover:text-[#4A154B] transition-colors">Slack</span>
            <span className="hover:text-[#96BF48] transition-colors">Shopify</span>
            <span className="hover:text-[#00A4EF] transition-colors">Microsoft</span>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="dm-services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-[#7A1CA9] text-xs uppercase font-bold tracking-wider">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0E121E] tracking-tight">
            Our Digital Marketing Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Build authority, generate high-intent inbound leads, and accelerate
            revenue with our full-stack growth systems.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${s.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0E121E] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <a
                    href="#dm-contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7A1CA9] group-hover:text-[#E91E63] transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. STATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#6A1B9A] via-[#C2185B] to-[#FF5722] p-8 sm:p-12 text-white shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 opacity-80 mb-2" />
            <div className="text-3xl sm:text-5xl font-black">200+</div>
            <div className="text-xs sm:text-sm font-medium opacity-90 mt-1">
              Happy Clients
            </div>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="w-8 h-8 opacity-80 mb-2" />
            <div className="text-3xl sm:text-5xl font-black">350+</div>
            <div className="text-xs sm:text-sm font-medium opacity-90 mt-1">
              Projects Done
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-8 h-8 opacity-80 mb-2" />
            <div className="text-3xl sm:text-5xl font-black">98%</div>
            <div className="text-xs sm:text-sm font-medium opacity-90 mt-1">
              Client Satisfaction
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 opacity-80 mb-2" />
            <div className="text-3xl sm:text-5xl font-black">5+</div>
            <div className="text-xs sm:text-sm font-medium opacity-90 mt-1">
              Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section id="dm-about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80"
                alt="Why choose Delhi Marketing Hub"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-[#7A1CA9] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-[#0E121E]">
                  Strategic Growth
                </div>
                <div className="text-xs text-gray-500">Market Insights</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-[#7A1CA9] text-xs uppercase font-bold tracking-wider">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0E121E] tracking-tight leading-tight">
              We Don&apos;t Just Market, We{" "}
              <span className="text-[#E91E63]">Grow Your Business</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At Delhi Marketing Hub, we combine market insights, data, and
              creativity to deliver measurable business growth.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Best market insights for every business",
                "Proven track record of generating leads",
                "Transparent reporting & dedicated team",
                "Focus on long-term client ROI",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 font-semibold text-gray-800 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#E91E63] shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#dm-contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#7A1CA9] hover:bg-[#6A1B9A] text-white font-bold text-sm shadow-md transition-colors"
              >
                Know More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR COURSES */}
      <section id="dm-courses" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-[#7A1CA9] text-xs uppercase font-bold tracking-wider">
              OUR COURSES
            </span>
            <h2 className="text-3xl font-black text-[#0E121E] tracking-tight">
              Master Modern In-Demand Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-gray-200/70 shadow-lg hover:shadow-xl transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${c.color} text-white flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0E121E] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {c.desc}
                  </p>
                  <a
                    href="#dm-contact"
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#7A1CA9] hover:text-[#E91E63]"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS */}
      <section id="dm-testimonials" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-[#7A1CA9] text-xs uppercase font-bold tracking-wider">
            WHAT OUR CLIENT SAYS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0E121E] tracking-tight">
            Trusted by Leaders &amp; Fast-Growing Brands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="text-3xl font-serif text-[#7A1CA9] font-black">
                  “
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                  {t.review}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-purple-200"
                  />
                  <div>
                    <div className="font-bold text-sm text-[#0E121E]">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-2">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-[#7A1CA9] text-xs uppercase font-bold tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-black text-[#0E121E] tracking-tight">
              Got Questions? We&apos;ve Got Answers
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-[#0E121E] hover:text-[#7A1CA9] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openFaq === idx ? "rotate-180 text-[#7A1CA9]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-sm text-gray-600 border-t border-gray-50 pt-2 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BLOG SECTION */}
      <section id="dm-blog" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-[#7A1CA9] text-xs uppercase font-bold tracking-wider">
            FROM OUR BLOG
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0E121E] tracking-tight">
            Latest Insights &amp; Growth Tactics
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-xs uppercase font-bold text-[#E91E63]">
                    {b.category} • {b.read}
                  </span>
                  <h3 className="font-bold text-base text-[#0E121E] group-hover:text-[#7A1CA9] transition-colors leading-snug">
                    {b.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="text-xs font-bold text-[#7A1CA9] inline-flex items-center gap-1">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. GET IN TOUCH / CONTACT FORM */}
      <section id="dm-contact" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-[#7A1CA9] text-xs uppercase font-bold tracking-wider">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0E121E] tracking-tight">
              We&apos;d Love to Hear From You!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Contact Info & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#7A1CA9] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Call Us</div>
                    <div className="font-bold text-gray-800">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 text-[#E91E63] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Email Us</div>
                    <div className="font-bold text-gray-800">hello@delhimarketinghub.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Office Location</div>
                    <div className="font-bold text-gray-800">Connaught Place, New Delhi, India</div>
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200 h-48 bg-slate-200 relative">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&auto=format&fit=crop&q=80"
                  alt="Office Map Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-[1px] flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-white text-xs font-bold text-gray-800 shadow-lg flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#E91E63]" /> Delhi Marketing Hub HQ
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0E121E]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you, {formData.name || "friend"}! Our growth strategist will review your proposal and get in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Aayush Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#7A1CA9] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="aayush@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#7A1CA9] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#7A1CA9] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Your Message / Project Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand goals, target audience, and timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#7A1CA9] text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#9C27B0] via-[#E91E63] to-[#FF3D00] text-white font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-[#E91E63]/30 transition-all active:scale-98 cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#6A1B9A] via-[#E91E63] to-[#FF3D00] p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black">
                Ready to Grow Your Business Online?
              </h3>
              <p className="text-sm opacity-90 font-medium">
                Let&apos;s build a custom growth system that delivers measurable results.
              </p>
            </div>
          </div>

          <a
            href="#dm-contact"
            className="px-8 py-4 rounded-full bg-white text-[#0E121E] font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors shadow-lg shrink-0 active:scale-95 cursor-pointer"
          >
            Get a Free Quote <ArrowRight className="inline w-4 h-4 ml-1" />
          </a>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-[#0E121E] text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Col */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6A1B9A] to-[#FF3D00] flex items-center justify-center text-white font-black text-base">
                  DM
                </div>
                <div>
                  <span className="block font-black text-lg tracking-tight leading-tight">
                    DELHI
                  </span>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400 -mt-0.5">
                    MARKETING HUB
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                We empower modern brands to reach their full revenue potential with
                integrated performance marketing, high-converting design, and
                strategic content.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E91E63] flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E91E63] flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E91E63] flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E91E63] flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <div className="font-bold text-sm uppercase tracking-wider text-[#FF3D00]">
                Quick Links
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#dm-home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#dm-about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#dm-services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#dm-courses" className="hover:text-white transition-colors">Our Courses</a></li>
                <li><a href="#dm-testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="space-y-3">
              <div className="font-bold text-sm uppercase tracking-wider text-[#FF3D00]">
                Our Services
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#dm-services" className="hover:text-white transition-colors">SEO Optimization</a></li>
                <li><a href="#dm-services" className="hover:text-white transition-colors">Social Media Marketing</a></li>
                <li><a href="#dm-services" className="hover:text-white transition-colors">PPC &amp; Paid Ads</a></li>
                <li><a href="#dm-services" className="hover:text-white transition-colors">Email Campaigns</a></li>
                <li><a href="#dm-services" className="hover:text-white transition-colors">Web Design &amp; UI/UX</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <div className="font-bold text-sm uppercase tracking-wider text-[#FF3D00]">
                Newsletter
              </div>
              <p className="text-xs text-gray-400">
                Subscribe for weekly digital marketing growth tactics &amp; insights.
              </p>
              <div className="flex items-center gap-2 bg-white/10 rounded-full p-1 border border-white/10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-3 py-1.5 text-xs text-white placeholder-gray-400 focus:outline-none w-full"
                />
                <button className="w-8 h-8 rounded-full bg-gradient-to-r from-[#E91E63] to-[#FF3D00] text-white flex items-center justify-center shrink-0">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>© {new Date().getFullYear()} Delhi Marketing Hub. Designed by Aayush Thakur.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
