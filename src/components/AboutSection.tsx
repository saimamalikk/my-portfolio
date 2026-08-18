"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Briefcase, GraduationCap, Code2, Globe, Cpu } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-12 sm:py-20 md:py-28 lg:py-36 bg-[#121210]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header (Reference Screenshot 2 Format) */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            Who Am <span className="text-gradient-gold">I?</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Content Layout: Left Profile Card, Right Easy English Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Sleek Interactive Profile Card (Reference Image 2 Format) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-[#1A1A18] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-2xl relative flex flex-col items-center text-center space-y-4">
              
              {/* Profile Avatar Container with Ring & Online Status */}
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 shadow-lg bg-[#121210]">
                  <div className="w-full h-full relative rounded-full overflow-hidden">
                    <Image
                      src="/images/saima_profile.jpg"
                      alt="Saima Kosser Profile Picture"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Online Status Dot (Reference Image 2) */}
                <div className="absolute bottom-1 right-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121210] border border-emerald-500/40 text-emerald-400 text-[10px] font-mono shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online</span>
                </div>
              </div>

              {/* Name & Tag */}
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#ECE7E1]">Saima Kosser</h3>
                <p className="text-xs font-mono text-[#D4AF37] mt-0.5">MCA Student | J&K 📍</p>
              </div>

              {/* Floating Pill Badges (Reference Image 2 Format) */}
              <div className="flex flex-wrap justify-center gap-2 pt-2 text-[11px] font-mono">
                <span className="px-3 py-1 rounded-full bg-[#121210] text-[#ECE7E1] border border-[#ECE7E1]/10 flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-[#D4AF37]" /> Full-Stack Dev
                </span>
                <span className="px-3 py-1 rounded-full bg-[#121210] text-[#ECE7E1] border border-[#ECE7E1]/10 flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-[#D4AF37]" /> Data Analyst
                </span>
                <span className="px-3 py-1 rounded-full bg-[#121210] text-[#ECE7E1] border border-[#ECE7E1]/10 flex items-center gap-1">
                  <GraduationCap className="w-3 h-3 text-[#D4AF37]" /> MCA &apos;26
                </span>
                <span className="px-3 py-1 rounded-full bg-[#121210] text-[#ECE7E1] border border-[#ECE7E1]/10 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-[#D4AF37]" /> bgsbu.ac.in
                </span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: 50% Reduced Simple English Bio (Reference Image 2 Format) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-base sm:text-lg text-[#A1A19A] font-sans leading-relaxed">
              <p className="text-xl sm:text-2xl font-serif text-[#ECE7E1] leading-snug">
                I&apos;m a <span className="text-[#D4AF37] font-semibold">Full-Stack Web Developer</span> and <span className="text-[#D4AF37] font-semibold">Data Analyst</span> from the beautiful valley of Jammu & Kashmir, currently pursuing my MCA.
              </p>

              <p className="text-sm sm:text-base text-[#A1A19A]">
                I build clean, fast web applications and analyze data. From developing university portals at <strong className="text-[#ECE7E1]">bgsbu.ac.in</strong> to statistical data research at <strong className="text-[#ECE7E1]">IIIT Una</strong>, I blend clean code with analytical problem solving.
              </p>
            </div>

            {/* Quick Status Items (Reference Image 2 Format) */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm font-mono text-[#ECE7E1]">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                <span className="text-base">🏔️</span>
                <span>Based in Jammu & Kashmir, India</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 ml-auto" />
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                <span className="text-base">💼</span>
                <span>Open for freelance web development projects</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                <span className="text-base">🤝</span>
                <span>Open to full-time developer roles & collaborations</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-mono uppercase tracking-wider text-[#121210] font-bold rounded-xl bg-[#D4AF37] hover:bg-[#e2bd46] transition-all shadow-lg hover:scale-[1.02]"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
