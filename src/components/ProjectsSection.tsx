"use client";

import { useState } from "react";
import { Sparkles, ArrowUpRight, Play, Globe, Cpu, Layers, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import LiveDemoModal from "@/components/LiveDemoModal";

interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Web Apps" | "Data Analysis";
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  isFeatured?: boolean;
  icon: any;
  statusBadge: string;
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeDemoTitle, setActiveDemoTitle] = useState("");
  const [activeDemoId, setActiveDemoId] = useState("");
  const [activeDemoVideo, setActiveDemoVideo] = useState<string | undefined>(undefined);

  const projects: Project[] = [
    {
      id: "bgsbu-university-portal",
      title: "bgsbu.ac.in Web Portal",
      category: "Web Apps",
      description:
        "Official university website frontend development for Baba Ghulam Shah Badshah University. Built for fast navigation, notice boards, and department resources.",
      tags: ["Next.js", "React", "Node.js", "JavaScript"],
      liveUrl: "https://bgsbu.ac.in",
      githubUrl: "https://github.com/saimamalikk",
      isFeatured: true,
      icon: Globe,
      statusBadge: "Live",
    },
    {
      id: "nep-fyup-feedback",
      title: "Student Feedback App",
      category: "Full-Stack",
      description:
        "Full-stack web application with built-in NLP Sentiment Analysis that automatically classifies student reviews into Positive, Neutral, and Negative categories.",
      tags: ["Full-Stack", "PHP", "NLP", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/saimamalikk",
      videoUrl: "/website%20video/20260812-1206-03.9459778%20(1).mp4",
      isFeatured: true,
      icon: Layers,
      statusBadge: "Live",
    },
    {
      id: "python-data-analysis-normal-distribution",
      title: "Python Data Analysis",
      category: "Data Analysis",
      description:
        "Data preprocessing and Gaussian Normal Distribution probability modeling built during research internship at IIIT Una (Himachal Pradesh).",
      tags: ["Python", "NumPy", "Pandas", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "https://github.com/saimamalikk",
      isFeatured: false,
      icon: Cpu,
      statusBadge: "IIIT Una",
    },
  ];

  const filters = ["All", "Full-Stack", "Web Apps", "Data Analysis"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleLiveDemoClick = (project: Project) => {
    if (project.liveUrl && project.liveUrl !== "#") {
      window.open(project.liveUrl, "_blank");
    } else {
      setActiveDemoTitle(project.title);
      setActiveDemoId(project.id);
      setActiveDemoVideo(project.videoUrl);
      setDemoModalOpen(true);
    }
  };

  return (
    <section id="projects" className="relative py-12 sm:py-20 md:py-28 lg:py-36 bg-transparent">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Selected Projects
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            Featured <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="text-[#A1A19A] text-sm sm:text-base md:text-lg font-sans">
            Clean, functional web applications and data analysis projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center sm:justify-center gap-2 mb-10 sm:mb-14 overflow-x-auto no-scrollbar pb-2 max-w-full px-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#D4AF37] text-[#121210] font-bold shadow-md"
                  : "bg-[#1A1A18] text-[#A1A19A] border border-[#ECE7E1]/10 hover:text-[#ECE7E1] hover:border-[#D4AF37]/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid (Reference Screenshot 3-Column Format) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-[#1A1A18] p-6 sm:p-7 rounded-3xl border border-[#ECE7E1]/10 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden"
              >
                {/* Top Row: Icon & Status Badges (Reference Format) */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#121210] border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#121210] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-2">
                    {project.isFeatured && (
                      <span className="px-2.5 py-1 rounded-full bg-[#121210] border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-mono font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full bg-[#121210] border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {project.statusBadge}
                    </span>
                  </div>
                </div>

                {/* Project Title & Short Description */}
                <div className="space-y-3 flex-grow">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#ECE7E1] group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A19A] leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges (Reference Format) */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-[#121210] border border-[#ECE7E1]/10 text-[#ECE7E1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons at Bottom (Reference Format) */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#ECE7E1]/10">
                  <button
                    onClick={() => handleLiveDemoClick(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#e2bd46] text-[#121210] text-xs font-mono font-bold transition-all shadow-md hover:scale-[1.02]"
                  >
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <>
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Visit Site</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-[#121210]" />
                        <span>Live Demo</span>
                      </>
                    )}
                  </button>

                  <a
                    href={project.githubUrl || "https://github.com/saimamalikk"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#121210] hover:bg-[#252522] text-[#ECE7E1] border border-[#ECE7E1]/15 text-xs font-mono transition-all hover:scale-[1.02]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>

              </div>
            );
          })}

          {/* Third Card: "More on GitHub" (Reference Screenshot Format) */}
          <div className="bg-[#1A1A18] p-6 sm:p-7 rounded-3xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 group flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-[#121210] border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#121210] transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#121210] border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-mono font-bold">
                ⚡ Active
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-3 flex-grow">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#ECE7E1] group-hover:text-[#D4AF37] transition-colors">
                More on GitHub
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A19A] leading-relaxed font-sans">
                Multiple projects covering web apps, UI tools, and data experiments. All open source and actively maintained.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-[#121210] border border-[#ECE7E1]/10 text-[#ECE7E1]">
                Various
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-[#121210] border border-[#ECE7E1]/10 text-[#ECE7E1]">
                Open Source
              </span>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-[#ECE7E1]/10">
              <a
                href="https://github.com/saimamalikk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#e2bd46] text-[#121210] text-xs font-mono font-bold transition-all shadow-md hover:scale-[1.02]"
              >
                <span>View All →</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Video Live Demo Modal */}
      <LiveDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        projectTitle={activeDemoTitle}
        projectId={activeDemoId}
        videoUrl={activeDemoVideo}
      />
    </section>
  );
}
