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

  return (
    <section id="skills" className="relative py-12 sm:py-20 md:py-28 lg:py-36 bg-[#121210]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Technical Expertise
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            Skills & <span className="text-gradient-gold">Capabilities</span>
          </h2>
          <p className="text-[#A1A19A] text-sm sm:text-base md:text-lg font-sans">
            Core technologies, frameworks, and developer tools used to build modern digital products.
          </p>
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
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#ECE7E1] group-hover:text-[#D4AF37] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#D4AF37] block mt-0.5 font-semibold">
                      Focus: {skill.focus}
                    </span>
                    <p className="text-[11px] sm:text-xs text-[#A1A19A] leading-relaxed mt-2 sm:mt-2.5">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Practical Experience Badge */}
                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-[#ECE7E1]/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#A1A19A]">
                  <span className="group-hover:text-[#ECE7E1] transition-colors">Applied Experience</span>
                  <span className="text-emerald-400 font-bold">✓ Applied</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
