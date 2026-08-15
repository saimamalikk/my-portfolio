"use client";

import { motion } from "framer-motion";
import { GraduationCap, Layout, Sparkles, Globe, Award } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "MCA Student",
      description: "Master of Computer Applications (MCA) student with strong foundations in software engineering and web technologies.",
    },
    {
      icon: Award,
      title: "Data Analysis Intern",
      description: "Completed 1-month Data Analysis Internship at IIIT Una (Himachal Pradesh), mastering Python & data modeling.",
    },
    {
      icon: Globe,
      title: "University Frontend Dev",
      description: "Contributed as Frontend Developer for Baba Ghulam Shah Badshah University official website (bgsbu.ac.in).",
    },
    {
      icon: Layout,
      title: "Full-Stack Web Dev",
      description: "Crafting intuitive, responsive web applications with Next.js, React, TypeScript, Node.js & PostgreSQL.",
    },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-20 md:py-28 lg:py-36 bg-[#121210]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> About Me
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            Passionate About <span className="text-gradient-gold">Web Engineering & Design</span>
          </h2>
          <p className="text-[#A1A19A] text-sm sm:text-base md:text-lg font-sans leading-relaxed">
            MCA student with hands-on full-stack web development and data analytics experience.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
          
          {/* Main Story Text Card */}
          <div className="lg:col-span-7 bg-[#1A1A18] p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-[#ECE7E1]/10 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#ECE7E1]">
              Hello, I&apos;m Saima Kosser 👋
            </h3>
            
            <p className="text-[#A1A19A] text-xs sm:text-sm md:text-base leading-relaxed font-sans">
              I am an MCA student and full-stack web developer based in Jammu & Kashmir, India. I specialize in building modern, performant, and user-centric web applications using cutting-edge tools like Next.js, React, TypeScript, and PostgreSQL.
            </p>

            <p className="text-[#A1A19A] text-xs sm:text-sm md:text-base leading-relaxed font-sans">
              During my academic journey, I served as a Frontend Developer for the official portal of <strong className="text-[#ECE7E1]">Baba Ghulam Shah Badshah University (bgsbu.ac.in)</strong> and completed a specialized Data Analysis Internship at <strong className="text-[#ECE7E1]">IIIT Una</strong>.
            </p>

            <div className="pt-4 border-t border-[#ECE7E1]/10 flex flex-wrap gap-4 sm:gap-6 text-[11px] sm:text-xs font-mono text-[#D4AF37]">
              <div>
                <span className="text-[#A1A19A] block uppercase">Education</span>
                <span className="font-bold text-[#ECE7E1]">MCA (Master of Computer Applications)</span>
              </div>
              <div>
                <span className="text-[#A1A19A] block uppercase">Location</span>
                <span className="font-bold text-[#ECE7E1]">Jammu & Kashmir, India</span>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1A1A18] p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#ECE7E1]/10 hover:border-[#D4AF37]/40 transition-colors space-y-2 sm:space-y-3"
                >
                  <div className="p-2.5 rounded-xl bg-[#121210] border border-[#D4AF37]/30 text-[#D4AF37] w-fit">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-serif font-bold text-[#ECE7E1]">{h.title}</h4>
                    <p className="text-[11px] sm:text-xs text-[#A1A19A] leading-relaxed mt-1">{h.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
