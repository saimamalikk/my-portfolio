"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface NavbarProps {
  onOpenCVModal: () => void;
}

export default function Navbar({ onOpenCVModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121210]/90 backdrop-blur-md border-b border-[#ECE7E1]/10 py-3.5 shadow-xl"
          : "bg-transparent py-3.5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram & Title */}
        <a href="#home" className="group focus:outline-none flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1A1A18] border border-[#D4AF37]/40 flex items-center justify-center font-serif text-[#D4AF37] font-bold text-sm sm:text-base group-hover:border-[#D4AF37] transition-all">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-serif font-bold text-[#ECE7E1] tracking-wide group-hover:text-[#D4AF37] transition-colors">
              Saima Kosser
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#A1A19A] uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Full-Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#1A1A18]/80 backdrop-blur-lg px-4 py-1.5 rounded-full border border-[#ECE7E1]/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-[#121210] bg-[#ECE7E1] font-bold shadow-sm"
                    : "text-[#A1A19A] hover:text-[#ECE7E1] hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Theme Toggle & Download CV */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-[#1A1A18] hover:bg-[#252522] border border-[#D4AF37]/40 text-[#D4AF37] transition-all duration-300 hover:scale-105"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-[#D4AF37]" /> : <Moon className="w-4 h-4 text-[#D4AF37]" />}
          </button>

          <button
            onClick={onOpenCVModal}
            className="flex items-center gap-2 px-5 py-2 text-xs font-mono tracking-wider uppercase text-[#ECE7E1] rounded-full bg-[#1A1A18] hover:bg-[#252522] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-[#D4AF37] hover:text-white rounded-lg bg-[#1A1A18] border border-[#D4AF37]/30"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#ECE7E1] hover:text-[#D4AF37] rounded-lg bg-[#1A1A18] border border-[#ECE7E1]/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121210]/98 backdrop-blur-xl border-b border-[#ECE7E1]/10 px-4 pt-4 pb-6 space-y-3 mt-2 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-[#ECE7E1] hover:bg-white/5 font-mono text-xs uppercase tracking-wider transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#ECE7E1]/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-[#121210] font-bold rounded-xl bg-[#D4AF37]"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
