"use client";

import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#121210] border-t border-[#ECE7E1]/10 py-8 sm:py-12 text-[#A1A19A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1A1A18] border border-[#D4AF37]/40 flex items-center justify-center font-serif text-[#D4AF37] font-bold text-sm">
              S
            </div>
            <div>
              <span className="text-lg font-serif font-bold text-[#ECE7E1] tracking-wide">
                Saima Kosser
              </span>
              <p className="text-xs text-[#A1A19A] font-mono">MCA Postgraduate & Full-Stack Web Developer</p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#A1A19A]">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#D4AF37] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#D4AF37] transition-colors">Projects</a>
            <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#1A1A18] hover:bg-white/10 border border-[#ECE7E1]/10 text-[#ECE7E1] transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4 text-[#D4AF37]" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#1A1A18] hover:bg-white/10 border border-[#ECE7E1]/10 text-[#ECE7E1] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-[#D4AF37]" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#1A1A18] hover:bg-white/10 border border-[#ECE7E1]/10 text-[#ECE7E1] transition-all group ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#D4AF37] group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[#ECE7E1]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A1A19A] gap-4">
          <p>© 2026 Saima Kosser. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono">
            Engineered with Next.js, React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
