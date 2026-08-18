"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Cpu, Database, Wrench, Terminal, Layout, Layers, ShieldCheck, Zap, Globe } from "lucide-react";

interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  focus: string;
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
      icon: Zap,
    },
    {
      name: "React",
      category: "Frontend",
      focus: "Component UI",
      icon: Code2,
    },
    {
      name: "TypeScript",
      category: "Frontend",
      focus: "Type Safety",
      icon: ShieldCheck,
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      focus: "Responsive Grid",
      icon: Layout,
    },
    {
      name: "JavaScript",
      category: "Frontend",
      focus: "ES6+ & Async",
      icon: Terminal,
    },

    // Backend & Analytics
    {
      name: "Python (Data)",
      category: "Backend",
      focus: "Analytics & Pandas",
      icon: Cpu,
    },
    {
      name: "Node.js",
      category: "Backend",
      focus: "REST APIs",
      icon: Layers,
    },
    {
      name: "PHP",
      category: "Backend",
      focus: "Server Logic",
      icon: Globe,
    },

    // Database
    {
      name: "PostgreSQL",
      category: "Database",
      focus: "Relational Schemas",
      icon: Database,
    },
    {
      name: "Supabase",
      category: "Database",
      focus: "BaaS & Postgres",
      icon: Zap,
    },
    {
      name: "MySQL",
      category: "Database",
      focus: "SQL Queries",
      icon: Database,
    },

    // Tools
    {
      name: "Git & GitHub",
      category: "Tools",
      focus: "Version Control",
      icon: Wrench,
    },
  ];

  const tabs = ["All", "Frontend", "Backend", "Database", "Tools"];

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const skillProficiency: Record<string, number> = {
    "Next.js": 92,
    "React": 95,
    "TypeScript": 88,
    "Tailwind CSS": 94,
    "JavaScript": 90,
    "Python (Data)": 88,
    "Node.js": 85,
    "PHP": 82,
    "PostgreSQL": 86,
    "Supabase": 90,
    "MySQL": 84,
    "Git & GitHub": 92,
  };

  return (
    <section id="skills" className="relative py-10 sm:py-16 md:py-24 bg-transparent">
      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A18] border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] sm:text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Technical Expertise
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            My <span className="text-gradient-gold">Skills</span>
          </h2>
          <p className="text-[#A1A19A] text-xs sm:text-base font-sans">
            Core toolkit built across software engineering & data analysis projects.
          </p>
        </div>

        {/* Compact Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 overflow-x-auto no-scrollbar pb-2 max-w-full px-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-200 shrink-0 ${
                activeTab === tab
                  ? "bg-[#D4AF37] text-[#121210] font-bold shadow-sm"
                  : "bg-[#1A1A18] text-[#A1A19A] border border-[#ECE7E1]/10 hover:text-[#ECE7E1] hover:border-[#D4AF37]/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile-Optimized 2-Column Compact Grid (Responsive for Phone & Tablet) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            const pct = skillProficiency[skill.name] || 85;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="bg-[#1A1A18] p-3 sm:p-4.5 rounded-xl sm:rounded-2xl border border-[#ECE7E1]/10 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#121210] border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#121210] transition-colors">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-[#121210] text-[#A1A19A] border border-[#ECE7E1]/10 truncate max-w-[80px] sm:max-w-none">
                      {skill.category}
                    </span>
                  </div>

                  {/* Title & Focus */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs sm:text-base font-serif font-bold text-[#ECE7E1] group-hover:text-[#D4AF37] transition-colors truncate">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-[#D4AF37] ml-1 shrink-0">{pct}%</span>
                    </div>

                    <span className="text-[9px] sm:text-[10px] font-mono text-[#D4AF37] block mt-0.5 font-semibold truncate">
                      {skill.focus}
                    </span>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#121210] h-1.5 rounded-full overflow-hidden mt-2 border border-[#ECE7E1]/10">
                      <div
                        className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E5C07B] rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-[#ECE7E1]/10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#A1A19A]">
                  <span className="truncate hidden xs:inline">Level</span>
                  <span className="text-emerald-400 font-bold ml-auto">✓ {pct}% Applied</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
