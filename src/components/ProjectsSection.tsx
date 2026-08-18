"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight, CheckCircle, Play, Globe } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import LiveDemoModal from "@/components/LiveDemoModal";

interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Web Apps" | "Data Analysis" | "Database";
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  isFeatured?: boolean;
  highlights: string[];
  roleBadge?: string;
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
      title: "Baba Ghulam Shah Badshah University Portal (bgsbu.ac.in)",
      category: "Web Apps",
      roleBadge: "Frontend Developer",
      description:
        "Frontend developer for the official Baba Ghulam Shah Badshah University portal (bgsbu.ac.in). Built responsive web pages, department notice boards, and student resource portals.",
      image: "/images/bgsbu_editorial.jpg",
      tags: ["Next.js", "React", "Node.js", "JavaScript", "Responsive UI"],
      liveUrl: "https://bgsbu.ac.in",
      githubUrl: "https://github.com",
      isFeatured: true,
      highlights: [
        "Built responsive web layouts for university departments & student portals",
        "Optimized mobile rendering and navigation menus for fast page access",
      ],
    },
    {
      id: "nep-fyup-feedback",
      title: "Student Feedback System with NLP Sentiment Analysis",
      category: "Full-Stack",
      roleBadge: "Full-Stack Developer",
      description:
        "Full-stack feedback web app with built-in NLP Sentiment Analysis that automatically classifies student reviews into Positive, Neutral, and Negative categories.",
      image: "/images/nep_editorial.jpg",
      tags: ["Full-Stack", "PHP", "JavaScript", "NLP", "Sentiment Analysis", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      videoUrl: "/website%20video/20260812-1206-03.9459778%20(1).mp4",
      isFeatured: true,
      highlights: [
        "Built full-stack student feedback portal & admin analytics dashboard",
        "Implemented automated NLP sentiment classification for course reviews",
      ],
    },
    {
      id: "python-data-analysis-normal-distribution",
      title: "Python Data Analysis & Probability Modeling",
      category: "Data Analysis",
      roleBadge: "Data Analysis Intern @ IIIT Una",
      description:
        "Data analysis and Gaussian Normal Distribution probability modeling built during IIIT Una research internship using Python, NumPy, SciPy, and Matplotlib.",
      image: "/images/data_editorial.jpg",
      tags: ["Python", "Data Analysis", "Normal Distribution", "NumPy", "Pandas", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      isFeatured: false,
      highlights: [
        "Performed statistical Gaussian distribution modeling and probability curve fitting",
        "Calculated dataset mean, variance, z-scores, and probability density functions",
      ],
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
    <section id="projects" className="relative py-12 sm:py-20 md:py-28 lg:py-36 bg-[#121210]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Selected Works
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            Featured <span className="text-gradient-gold">Projects & Case Studies</span>
          </h2>
          <p className="text-[#A1A19A] text-sm sm:text-base md:text-lg font-sans">
            Real-world web engineering experience including university portal development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center sm:justify-center gap-2 mb-8 sm:mb-12 md:mb-16 overflow-x-auto no-scrollbar pb-2 max-w-full px-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#D4AF37] text-[#121210] font-bold shadow-md"
                  : "bg-[#1A1A18] text-[#A1A19A] border border-[#ECE7E1]/10 hover:text-[#ECE7E1] hover:border-[#D4AF37]/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Showcase Cards Grid */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1A1A18] p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-[#ECE7E1]/10 hover:border-[#D4AF37]/40 transition-all duration-300 group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
            >
              
              {/* Project Image Preview */}
              <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#121210] border border-[#ECE7E1]/10 shadow-xl group-hover:border-[#D4AF37]/30 transition-colors">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {project.isFeatured && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#121210]/90 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Featured Project
                  </div>
                )}

                {project.roleBadge && (
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#121210]/90 backdrop-blur-md text-[#ECE7E1] text-[10px] sm:text-xs font-mono border border-[#ECE7E1]/10">
                    Role: {project.roleBadge}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] sm:text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-[#ECE7E1] group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#A1A19A] text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-[#ECE7E1]/10">
                  <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Technical Impact & Deliverables:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-[11px] sm:text-xs md:text-sm text-[#A1A19A]">
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-mono rounded-md sm:rounded-lg bg-[#121210] border border-[#ECE7E1]/10 text-[#ECE7E1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-[#ECE7E1]/10">
                  <button
                    onClick={() => handleLiveDemoClick(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg sm:rounded-xl bg-[#D4AF37] hover:bg-[#e2bd46] text-[#121210] text-[11px] sm:text-xs font-mono uppercase font-bold tracking-wider transition-all hover:scale-105"
                  >
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <>
                        <Globe className="w-4 h-4" />
                        <span>Visit bgsbu.ac.in</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-[#121210]" />
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg sm:rounded-xl bg-[#121210] hover:bg-[#252522] text-[#ECE7E1] border border-[#ECE7E1]/15 text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all hover:scale-105"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub Code</span>
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}
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
