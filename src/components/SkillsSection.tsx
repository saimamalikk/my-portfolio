"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Cpu, Database, Wrench, Terminal, Layout, Layers, ShieldCheck, Zap, Globe } from "lucide-react";

interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  focus: string;
  description: string;
  icon: any;
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const skills: SkillItem[] = [
    // Frontend
    {
      name: "Next.js",
      category: "Frontend",
      focus: "App Router & SSR",
      description: "Building production web apps with Server Components, API routes, and optimized rendering.",
      icon: Zap,
    },
    {
      name: "React",
      category: "Frontend",
      focus: "Component Architecture",
      description: "State management, custom hooks, reusable UI components, and reactive user interfaces.",
      icon: Code2,
    },
    {
      name: "TypeScript",
      category: "Frontend",
      focus: "Type Safety & DX",
      description: "Interfaces, generics, type-safe API responses, and clean component interfaces.",
      icon: ShieldCheck,
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      focus: "Responsive UI",
      description: "Custom UI tokens, dark glassmorphism, responsive grids, and clean layout animations.",
      icon: Layout,
    },
    {
      name: "JavaScript (ES6+)",
      category: "Frontend",
      focus: "Core Logic & Async",
      description: "Async/await, DOM APIs, event handling, promises, and modern functional JS methods.",
      icon: Terminal,
    },

    // Backend & Analytics
    {
      name: "Python (Data Analysis)",
      category: "Backend",
      focus: "Analytics & Pandas",
      description: "Data preprocessing, statistical analysis, and visual reporting (IIIT Una Internship).",
      icon: Cpu,
    },
    {
      name: "Node.js",
      category: "Backend",
      focus: "REST APIs & Middleware",
      description: "Building asynchronous backend services, API endpoints, JSON processing, and server logic.",
      icon: Layers,
    },
    {
      name: "PHP",
      category: "Backend",
      focus: "Server Scripting",
      description: "Form processing, database queries, and dynamic server-side rendering for web portals.",
      icon: Globe,
    },

    // Database
    {
      name: "PostgreSQL",
      category: "Database",
      focus: "Relational Schemas",
      description: "Designing database tables, foreign key constraints, SQL queries, and data indexing.",
      icon: Database,
    },
    {
      name: "Supabase",
      category: "Database",
      focus: "BaaS & Postgres",
      description: "Cloud database integration, Row Level Security (RLS) policies, and direct client queries.",
      icon: Zap,
    },
    {
      name: "MySQL",
      category: "Database",
      focus: "Relational Querying",
      description: "Data modeling, normalization, CRUD operations, and relational database management.",
      icon: Database,
    },

    // Tools
    {
      name: "Git & GitHub",
      category: "Tools",
      focus: "Version Control",
      description: "Branching workflows, version tracking, pull requests, and collaborative code management.",
      icon: Wrench,
    },
  ];

  const tabs = ["All", "Frontend", "Backend", "Database", "Tools"];

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const categoryIcons = [
    { label: "Frontend", icon: Layout, tab: "Frontend" },
    { label: "Backend", icon: Layers, tab: "Backend" },
    { label: "Database", icon: Database, tab: "Database" },
    { label: "Analytics", icon: Cpu, tab: "Backend" },
    { label: "Responsive", icon: Globe, tab: "Frontend" },
    { label: "Security", icon: ShieldCheck, tab: "Frontend" },
    { label: "Logic", icon: Terminal, tab: "Frontend" },
    { label: "Tools", icon: Wrench, tab: "Tools" },
  ];

  const skillProficiency: Record<string, number> = {
    "Next.js": 92,
    "React": 95,
    "TypeScript": 88,
    "Tailwind CSS": 94,
    "JavaScript (ES6+)": 90,
    "Python (Data Analysis)": 88,
    "Node.js": 85,
    "PHP": 82,
    "PostgreSQL": 86,
    "Supabase": 90,
    "MySQL": 84,
    "Git & GitHub": 92,
  };

  return (
    <section id="skills" className="relative py-12 sm:py-20 md:py-28 lg:py-36 bg-transparent">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Technical Expertise
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            My <span className="text-gradient-gold">Skills</span>
          </h2>
          <p className="text-[#A1A19A] text-sm sm:text-base md:text-lg font-sans">
            A comprehensive toolkit built over years of hands-on software engineering & data analysis experience.
          </p>
        </div>

        {/* Quick Category Icon Grid (Sample 4 Format) */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
          {categoryIcons.map((cat, i) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.tab;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(cat.tab)}
                className={`p-3.5 sm:p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                  isSelected
                    ? "bg-[#1A1A18] border-[#D4AF37] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)] scale-105"
                    : "bg-[#1A1A18]/60 border-[#ECE7E1]/10 text-[#A1A19A] hover:text-[#ECE7E1] hover:border-[#D4AF37]/40"
                }`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-[10px] font-mono uppercase tracking-wider hidden sm:block">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center sm:justify-center gap-2 mb-8 sm:mb-12 md:mb-14 overflow-x-auto no-scrollbar pb-2 max-w-full px-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#D4AF37] text-[#121210] font-bold shadow-md"
                  : "bg-[#1A1A18] text-[#A1A19A] border border-[#ECE7E1]/10 hover:text-[#ECE7E1] hover:border-[#D4AF37]/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Editorial Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            const pct = skillProficiency[skill.name] || 85;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="bg-[#1A1A18] p-4.5 sm:p-6 rounded-xl sm:rounded-2xl border border-[#ECE7E1]/10 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#121210] border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#121210] transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-[#121210] text-[#A1A19A] border border-[#ECE7E1]/10">
                      {skill.category}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[#ECE7E1] group-hover:text-[#D4AF37] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-xs font-mono font-bold text-[#D4AF37]">{pct}%</span>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-mono text-[#D4AF37] block mt-0.5 font-semibold">
                      Focus: {skill.focus}
                    </span>

                    {/* Skill Proficiency Progress Bar Line Fill */}
                    <div className="w-full bg-[#121210] h-2 rounded-full overflow-hidden mt-3 border border-[#ECE7E1]/10">
                      <div
                        className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E5C07B] rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Practical Experience Badge */}
                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-[#ECE7E1]/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#A1A19A]">
                  <span className="group-hover:text-[#ECE7E1] transition-colors">Proficiency Level</span>
                  <span className="text-emerald-400 font-bold">✓ {pct}% Applied</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
