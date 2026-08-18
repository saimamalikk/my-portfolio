"use client";

import { Smartphone, Layout, Building2, User, Code2, Database, Sparkles, ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      icon: Smartphone,
      title: "Responsive Web Dev",
      category: "Mobile-First",
      description: "Fast, mobile-first websites optimized for phones, tablets, and desktops.",
    },
    {
      icon: Layout,
      title: "Frontend Engineering",
      category: "Next.js & React",
      description: "Interactive, modern user interfaces built with React, Next.js, and TypeScript.",
    },
    {
      icon: Code2,
      title: "Full-Stack Web Apps",
      category: "Web Apps",
      description: "Scalable full-stack web applications with API routing and dynamic forms.",
    },
    {
      icon: Database,
      title: "Database Systems",
      category: "PostgreSQL & SQL",
      description: "Relational database schema design, CRUD processing, and Supabase integration.",
    },
    {
      icon: Building2,
      title: "Business Websites",
      category: "SEO & Speed",
      description: "Professional digital presences built to convert visitors into clients.",
    },
    {
      icon: User,
      title: "Custom Portfolios",
      category: "Custom UI",
      description: "High-end developer and creative professional showcase websites.",
    },
  ];

  return (
    <section id="services" className="relative py-10 sm:py-16 md:py-24 bg-transparent">
      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A18] border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] sm:text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Core Services
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            Services & <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-[#A1A19A] text-xs sm:text-base font-sans">
            Clean, high-performance web development services.
          </p>
        </div>

        {/* Compact Services Grid (Skills Format) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-[#1A1A18] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-[#ECE7E1]/10 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#121210] border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#121210] transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-[#121210] text-[#D4AF37] border border-[#D4AF37]/30 font-semibold truncate max-w-[90px] sm:max-w-none">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xs sm:text-base font-serif font-bold text-[#ECE7E1] group-hover:text-[#D4AF37] transition-colors truncate">
                      {service.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#A1A19A] leading-normal font-sans mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Compact Action CTA */}
                <div className="pt-2 sm:pt-3 mt-3 border-t border-[#ECE7E1]/10">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#D4AF37] hover:text-[#ECE7E1] transition-colors group/btn font-bold"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
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
