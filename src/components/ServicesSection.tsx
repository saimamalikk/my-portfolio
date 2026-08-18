"use client";

import { Smartphone, Layout, Building2, User, Code2, Database, Sparkles, ArrowRight, Check } from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      icon: Smartphone,
      title: "Responsive Web Development",
      description:
        "Building mobile-first, cross-device optimized websites that render flawlessly across desktop monitors, tablets, and smartphones.",
      features: ["Mobile-first layout grid", "Cross-browser compatibility", "Touch-friendly UI elements"],
    },
    {
      icon: Layout,
      title: "Frontend Engineering",
      description:
        "Crafting high-speed, interactive user interfaces with Next.js, React, TypeScript, and modern styling systems.",
      features: ["Modular React components", "Clean state management", "Smooth micro-animations"],
    },
    {
      icon: Building2,
      title: "Business & Agency Sites",
      description:
        "Designing professional digital presences for companies, startups, and services to convert visitors into clients.",
      features: ["SEO-optimized structure", "Fast page loading", "Clear call-to-action sections"],
    },
    {
      icon: User,
      title: "Custom Portfolio Websites",
      description:
        "Creating custom, high-end developer and creative professional showcase sites with rich editorial dark themes.",
      features: ["Tailored brand aesthetic", "Project showcase galleries", "Resume download integration"],
    },
    {
      icon: Code2,
      title: "Full-Stack Web Applications",
      description:
        "Developing scalable web applications with dynamic routing, server-side rendering, and form processing.",
      features: ["Next.js App Router", "API endpoint integrations", "Input validation & security"],
    },
    {
      icon: Database,
      title: "Database Systems",
      description:
        "Connecting web frontends to relational PostgreSQL, Supabase, and MySQL databases for persistent data storage.",
      features: ["Relational schema design", "CRUD operation handlers", "Secure query processing"],
    },
  ];

  return (
    <section id="services" className="relative py-12 sm:py-20 md:py-28 lg:py-36 bg-transparent">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Core Services
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            Services & <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-[#A1A19A] text-sm sm:text-base md:text-lg font-sans">
            Professional web development services tailored to modern performance and design standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-[#1A1A18] p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-[#ECE7E1]/10 hover:border-[#D4AF37]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Service Icon */}
                  <div className="p-3 sm:p-4 w-fit rounded-xl sm:rounded-2xl bg-[#121210] border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#121210] transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#ECE7E1] group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#A1A19A] leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Features Bullet List */}
                  <div className="pt-2 space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] sm:text-xs text-[#A1A19A]">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-4 mt-4 sm:pt-6 sm:mt-6 border-t border-[#ECE7E1]/10">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#D4AF37] hover:text-[#ECE7E1] transition-colors group/btn"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
