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
      title: "Baba Ghulam Shah Badshah University Website (bgsbu.ac.in)",
      category: "Web Apps",
      roleBadge: "Frontend Developer",
      description:
        "Contributed as Frontend Developer for the official university portal of Baba Ghulam Shah Badshah University (bgsbu.ac.in). Built responsive web pages, academic department layouts, student notice boards, and user-friendly navigation components.",
      image: "/images/bgsbu_editorial.jpg",
      tags: ["React", "Node.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
      liveUrl: "https://bgsbu.ac.in",
      githubUrl: "https://github.com",
      isFeatured: true,
      highlights: [
        "Frontend developer for official university web portal bgsbu.ac.in",
        "Responsive cross-device design for academic departments and notice boards",
        "Optimized navigation menus and user-friendly student portals",
        "Cross-browser testing and performance optimization",
      ],
    },
    {
      id: "nep-fyup-feedback",
      title: "NEP/FYUP Student Feedback System with NLP Sentiment Analysis",
      category: "Full-Stack",
      roleBadge: "Full-Stack Developer",
      description:
        "Full-stack web application designed for students under NEP/FYUP curriculum frameworks to submit course feedback. Integrated Natural Language Processing (NLP) Sentiment Analysis to automatically classify student remarks into Positive, Neutral, and Negative sentiment categories.",
      image: "/images/nep_editorial.jpg",
      tags: ["Full-Stack", "PHP", "JavaScript", "NLP", "Sentiment Analysis", "HTML5", "CSS3", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      videoUrl: "/website%20video/20260812-1206-03.9459778%20(1).mp4",
      isFeatured: true,
      highlights: [
        "Built complete Full-Stack web application (custom Frontend UI & Backend processing)",
        "Implemented NLP Sentiment Analysis on student text feedback (Positive, Neutral, Negative classification)",
        "Curriculum-aligned NEP/FYUP student feedback & course rating workflow",
        "Real-time administrative dashboard with sentiment distribution analytics & course metrics",
      ],
    },
    {
      id: "python-data-analysis-normal-distribution",
      title: "Python Data Analysis & Normal Distribution Modeling",
      category: "Data Analysis",
      roleBadge: "Data Analysis Intern @ IIIT Una",
      description:
        "Statistical data analysis project performed during internship at IIIT Una (Himachal Pradesh). Utilized Python, NumPy, SciPy, and Matplotlib to perform data preprocessing, statistical probability modeling, and Normal Distribution (Gaussian Bell Curve) analysis.",
      image: "/images/data_editorial.jpg",
      tags: ["Python", "Data Analysis", "Normal Distribution", "NumPy", "Pandas", "SciPy", "Matplotlib", "IIIT Una"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      isFeatured: false,
      highlights: [
        "Normal Distribution (Gaussian Bell Curve) statistical probability modeling on dataset",
        "Calculated mean (μ), standard deviation (σ), variance, z-scores, and probability density functions (PDF)",
        "Data visualization and histogram probability plotting using Matplotlib & Seaborn",
        "Data cleaning, exploratory data analysis (EDA), and statistical modeling with Python",
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
    <section id="projects" className="relative py-24 md:py-36 bg-[#121210]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Selected Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            Featured <span className="text-gradient-gold">Projects & Case Studies</span>
          </h2>
          <p className="text-[#A1A19A] text-base sm:text-lg font-sans">
            Real-world web engineering experience including university portal development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center sm:justify-center gap-2 mb-16 overflow-x-auto no-scrollbar pb-2 max-w-full px-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-200 ${
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
        <div className="space-y-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1A1A18] p-6 sm:p-10 rounded-3xl border border-[#ECE7E1]/10 hover:border-[#D4AF37]/40 transition-all duration-300 group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              
              {/* Project Image Preview */}
              <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#121210] border border-[#ECE7E1]/10 shadow-xl group-hover:border-[#D4AF37]/30 transition-colors">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {project.isFeatured && (
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#121210]/90 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Featured Project
                  </div>
                )}

                {project.roleBadge && (
                  <div className="absolute bottom-4 left-4 px-3.5 py-1 rounded-full bg-[#121210]/90 backdrop-blur-md text-[#ECE7E1] text-xs font-mono border border-[#ECE7E1]/10">
                    Role: {project.roleBadge}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#ECE7E1] group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#A1A19A] text-sm sm:text-base leading-relaxed mt-3 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-[#ECE7E1]/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Technical Impact & Deliverables:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A1A19A]">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-[#121210] border border-[#ECE7E1]/10 text-[#ECE7E1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#ECE7E1]/10">
                  <button
                    onClick={() => handleLiveDemoClick(project)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#e2bd46] text-[#121210] text-xs font-mono uppercase font-bold tracking-wider transition-all hover:scale-105"
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
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#121210] hover:bg-[#252522] text-[#ECE7E1] border border-[#ECE7E1]/15 text-xs font-mono uppercase tracking-wider transition-all hover:scale-105"
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
