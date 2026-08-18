"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Camera, RotateCcw, GraduationCap, Code2, Globe, Cpu } from "lucide-react";

export default function AboutSection() {
  const [profilePic, setProfilePic] = useState<string>("/images/saima_profile.jpg");
  const [isCustomPic, setIsCustomPic] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedPic = localStorage.getItem("user_custom_profile_pic");
    if (savedPic) {
      setProfilePic(savedPic);
      setIsCustomPic(true);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setProfilePic(result);
        setIsCustomPic(true);
        localStorage.setItem("user_custom_profile_pic", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPic = () => {
    setProfilePic("/images/saima_profile.jpg");
    setIsCustomPic(false);
    localStorage.removeItem("user_custom_profile_pic");
  };

  return (
    <section id="about" className="relative py-12 sm:py-20 md:py-28 lg:py-36 bg-transparent">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            Who Am <span className="text-gradient-gold">I?</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Content Layout: Aligned Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Profile Card with Photo Upload Option */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 h-full flex flex-col justify-center"
          >
            <div className="bg-[#1A1A18] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-2xl relative flex flex-col items-center text-center space-y-4 my-auto">
              
              {/* Profile Avatar Container with Upload Overlay */}
              <div className="relative group">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 shadow-xl bg-[#121210] relative">
                  <div className="w-full h-full relative rounded-full overflow-hidden">
                    <img
                      src={profilePic}
                      alt="Saima Kosser Profile Picture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Change Photo Camera Button */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-1 right-1 p-2.5 rounded-full bg-[#D4AF37] hover:bg-[#e2bd46] text-[#121210] shadow-lg border border-[#121210] transition-transform hover:scale-110 active:scale-95 group/cam"
                  title="Change Profile Photo"
                >
                  <Camera className="w-4 h-4" />
                </button>

                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />

                {/* Online Status Dot */}
                <div className="absolute top-1 left-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#121210]/90 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] font-mono shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online</span>
                </div>
              </div>

              {/* Custom Photo Reset Link */}
              {isCustomPic && (
                <button
                  onClick={handleResetPic}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[#D4AF37] hover:underline"
                >
                  <RotateCcw className="w-3 h-3" /> Restore Default Photo
                </button>
              )}

              {/* Name & Tag */}
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#ECE7E1]">Saima Kosser</h3>
                <p className="text-xs font-mono text-[#D4AF37] mt-0.5 font-semibold">MCA Student | J&K 📍</p>
              </div>

              {/* Floating Pill Badges */}
              <div className="flex flex-wrap justify-center gap-2 pt-1 text-[11px] font-mono">
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

          {/* Right Column: Aligned Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4 text-base sm:text-lg text-[#A1A19A] font-sans leading-relaxed">
              <p className="text-xl sm:text-2xl font-serif text-[#ECE7E1] leading-snug">
                I&apos;m a <span className="text-[#D4AF37] font-semibold">Full-Stack Web Developer</span> and <span className="text-[#D4AF37] font-semibold">Data Analyst</span> from the beautiful valley of Jammu & Kashmir, currently pursuing my MCA.
              </p>

              <p className="text-sm sm:text-base text-[#A1A19A]">
                I build clean, fast web applications and analyze data. From developing university portals at <strong className="text-[#ECE7E1]">bgsbu.ac.in</strong> to statistical data research at <strong className="text-[#ECE7E1]">IIIT Una</strong>, I blend clean code with analytical problem solving.
              </p>
            </div>

            {/* Quick Status Items */}
            <div className="space-y-3 text-xs sm:text-sm font-mono text-[#ECE7E1]">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                <span className="text-base">🏔️</span>
                <span>Based in Jammu & Kashmir, India</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 ml-auto" />
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                <span className="text-base">💼</span>
                <span>Open for freelance web development projects</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                <span className="text-base">🤝</span>
                <span>Open to full-time developer roles & collaborations</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
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
