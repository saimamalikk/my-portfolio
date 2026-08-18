"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Cpu,
  Zap,
  Award,
  GraduationCap,
} from "lucide-react";
import Rotating3DObject from "@/components/Rotating3DObject";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[auto] md:min-h-screen pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 flex flex-col items-center justify-center overflow-hidden bg-transparent">
      
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Subtle Ambient Glow Ring */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Layered 3D Depth Background Object (Positioned Behind Text) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl aspect-square pointer-events-none opacity-45 sm:opacity-55 z-0 flex items-center justify-center">
          <Rotating3DObject />
        </div>

        <div className="flex flex-col items-center justify-center text-center relative z-10 max-w-4xl mx-auto space-y-5 sm:space-y-6">
          
          {/* Top Pill Badge (Reference Image 1 Format) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A18]/90 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for freelance & full-time roles</span>
          </motion.div>

          {/* Greeting & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-2"
          >
            <span className="text-[#A1A19A] text-lg sm:text-2xl font-serif italic block">
              Hey, I&apos;m
            </span>

            <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-[#ECE7E1] tracking-tight leading-none drop-shadow-xl">
              Saima <span className="text-gradient-gold">Kosser</span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl font-mono text-[#D4AF37] pt-2 font-semibold tracking-wide">
              Full-Stack Developer • Data Analyst • MCA Student
            </p>
          </motion.div>

          {/* Simple English Subtitle (50% Text Reduced) */}
          <p className="text-sm sm:text-base md:text-lg text-[#A1A19A] font-sans leading-relaxed max-w-2xl bg-[#121210]/50 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/5">
            Building clean, fast web applications and analyzing data from the beautiful mountains of <span className="text-[#ECE7E1] font-semibold">J&K 🏔️</span>
          </p>

          {/* Work Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-[#ECE7E1] pt-1">
            <span className="px-3 py-1.5 rounded-full bg-[#1A1A18]/90 backdrop-blur-md border border-[#ECE7E1]/10 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" /> Frontend Dev @ bgsbu.ac.in
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#1A1A18]/90 backdrop-blur-md border border-[#ECE7E1]/10 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" /> Data Analysis @ IIIT Una
            </span>
          </div>

          {/* 3 Action Buttons (Reference Image 1 Format) */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-mono uppercase tracking-wider text-[#121210] font-bold rounded-xl bg-[#D4AF37] hover:bg-[#e2bd46] transition-all shadow-lg hover:scale-[1.02]"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-mono uppercase tracking-wider text-[#ECE7E1] rounded-xl bg-[#1A1A18]/90 backdrop-blur-md hover:bg-[#252522] border border-[#ECE7E1]/15 transition-all hover:scale-[1.02]"
            >
              <span>Contact Me</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            </a>
          </div>

        </div>

        {/* Editorial Stat Badges */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {[
            { label: "Degree", val: "MCA Student", icon: GraduationCap },
            { label: "Frontend", val: "bgsbu.ac.in", icon: Globe },
            { label: "Internship", val: "IIIT Una", icon: Award },
            { label: "Core Stack", val: "Next.js & SQL", icon: Zap },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-[#1A1A18] p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#ECE7E1]/10 flex items-center gap-2.5 sm:gap-3.5"
              >
                <div className="p-2 sm:p-2.5 rounded-md sm:rounded-lg bg-[#121210] border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-serif font-bold text-[#ECE7E1] truncate">{stat.val}</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-[#A1A19A] uppercase tracking-wider truncate">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
