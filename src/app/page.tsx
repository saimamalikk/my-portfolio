"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import GlobalBackground3D from "@/components/GlobalBackground3D";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CVModal from "@/components/CVModal";

export default function Home() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [selectedServiceSubject, setSelectedServiceSubject] = useState("");

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceSubject(`Inquiry regarding: ${serviceTitle}`);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07070E] text-gray-100 selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Top Glowing Gold Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Global Interactive 3D Particle & Wireframe Background */}
      <GlobalBackground3D />

      {/* Initial Animated Preloader */}
      <Preloader />

      {/* Sticky Glassmorphism Header */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection onOpenCVModal={() => setIsCVModalOpen(true)} />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Featured Projects Section */}
        <ProjectsSection />

        {/* Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Contact Section */}
        <ContactSection selectedServiceSubject={selectedServiceSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Preview & Download Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}
