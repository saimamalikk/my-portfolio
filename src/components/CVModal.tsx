"use client";

import { X, Download, GraduationCap, Code2, Mail, Briefcase, Award, Sparkles, Globe, Database, User } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  // Download styled, print-ready HTML resume file that opens beautifully in any browser and prints cleanly to PDF
  const handleDownloadFormattedResume = () => {
    const htmlCVContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Saima Kosser - Professional Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      color: #1c1917;
      background-color: #f5f5f4;
      padding: 40px 20px;
      line-height: 1.6;
    }
    .resume-container {
      max-width: 850px;
      margin: 0 auto;
      background: #ffffff;
      padding: 48px;
      border-radius: 16px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
      border: 1px solid #e7e5e4;
    }
    .header {
      border-bottom: 2px solid #d4af37;
      padding-bottom: 24px;
      margin-bottom: 28px;
    }
    .name {
      font-family: 'Playfair Display', serif;
      font-size: 34px;
      font-weight: 800;
      color: #1c1917;
      letter-spacing: -0.5px;
    }
    .title {
      font-size: 15px;
      font-weight: 600;
      color: #b45309;
      margin-top: 4px;
      font-family: 'JetBrains Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .contact-info {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 14px;
      font-size: 13px;
      color: #57534e;
      font-family: 'JetBrains Mono', monospace;
    }
    
    .section { margin-bottom: 26px; }
    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: 18px;
      font-weight: 700;
      color: #1c1917;
      border-bottom: 1.5px solid #d6d3d1;
      padding-bottom: 6px;
      margin-bottom: 14px;
    }
    
    .experience-item, .education-item, .project-item {
      margin-bottom: 18px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 4px;
    }
    .item-title { font-size: 15px; font-weight: 700; color: #1c1917; }
    .item-subtitle { font-size: 13px; font-weight: 600; color: #b45309; font-family: 'JetBrains Mono', monospace; }
    .item-date { font-size: 12px; font-family: 'JetBrains Mono', monospace; color: #78716c; font-weight: 500; }
    
    ul.bullets {
      list-style-type: disc;
      padding-left: 20px;
      font-size: 13.5px;
      color: #44403c;
    }
    ul.bullets li { margin-bottom: 4px; }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .skill-card {
      background: #fafaf9;
      padding: 12px 14px;
      border-radius: 8px;
      border: 1px solid #e7e5e4;
    }
    .skill-label { font-size: 12px; font-weight: 700; color: #b45309; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; margin-bottom: 4px; }
    .skill-list { font-size: 13px; color: #44403c; }
    
    .print-btn {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #b45309;
      color: white;
      border: none;
      padding: 10px 22px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(180, 83, 9, 0.3);
    }
    @media print {
      body { padding: 0; background: white; }
      .resume-container { border: none; box-shadow: none; padding: 0; }
      .print-btn { display: none; }
    }
  </style>
</head>
<body>
  <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>

  <div class="resume-container">
    <div class="header">
      <h1 class="name">SAIMA KOSSER</h1>
      <div class="title">MCA Postgraduate (Result Awaited) | Full-Stack Web Developer & Data Analyst</div>
      <div class="contact-info">
        <span>📧 saimakossermalik@gmail.com</span>
        <span>🌐 saimakosser.dev</span>
        <span>🎓 MCA (Completed, Result Awaited)</span>
        <span>📍 Jammu & Kashmir, India</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Executive Summary</div>
      <p style="font-size: 13.5px; color: #44403c; line-height: 1.6;">
        Results-oriented Master of Computer Applications (MCA) postgraduate (coursework completed, final result awaited) specializing in full-stack web engineering and statistical data analysis. Proven experience as <strong>Frontend Developer for Baba Ghulam Shah Badshah University official portal (bgsbu.ac.in)</strong> and completed a 1-month <strong>Data Analysis Internship at IIIT Una (Himachal Pradesh)</strong> focusing on Python data preprocessing, statistical Gaussian distribution modeling, and EDA. Proficient in Next.js, React, TypeScript, Python, Node.js, PostgreSQL, and Supabase.
      </p>
    </div>

    <div class="section">
      <div class="section-title">Work & Internship Experience</div>
      
      <div class="experience-item">
        <div class="item-header">
          <div class="item-title">Data Analysis Intern</div>
          <div class="item-date">1 Month Internship</div>
        </div>
        <div class="item-subtitle">Indian Institute of Information Technology (IIIT) Una, Himachal Pradesh</div>
        <ul class="bullets">
          <li>Completed intensive 1-month Data Analysis Internship at IIIT Una, Himachal Pradesh.</li>
          <li>Applied Python (NumPy, SciPy, Pandas, Matplotlib) for statistical probability modeling & Normal Distribution (Gaussian Bell Curve) analysis.</li>
          <li>Calculated mean (μ), standard deviation (σ), variance, z-scores, and probability density functions (PDF) on dataset distributions.</li>
          <li>Conducted data cleaning, handling missing values, and exploratory data analysis (EDA).</li>
        </ul>
      </div>

      <div class="experience-item">
        <div class="item-header">
          <div class="item-title">Frontend Developer</div>
          <div class="item-date">University Web Portal</div>
        </div>
        <div class="item-subtitle">Baba Ghulam Shah Badshah University (bgsbu.ac.in)</div>
        <ul class="bullets">
          <li>Engineered responsive frontend web pages and navigation components for official university portal <strong>bgsbu.ac.in</strong>.</li>
          <li>Structured academic department sections, student notice boards, and digital resource portals.</li>
          <li>Ensured cross-browser compatibility, fast page loading, and responsive mobile rendering.</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Academic Qualifications</div>
      <div class="education-item">
        <div class="item-header">
          <div class="item-title">Master of Computer Applications (MCA)</div>
          <div class="item-date">Coursework Completed (Result Awaited)</div>
        </div>
        <div class="item-subtitle">Postgraduate Degree</div>
        <ul class="bullets">
          <li>Specialization: Full-Stack Web Development & Data Analytics.</li>
          <li>Core Coursework: Web Engineering, Database Management Systems (RDBMS), Data Structures & Algorithms, Object-Oriented Programming (OOP).</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Technical Skills & Core Competencies</div>
      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-label">Frontend Development</div>
          <div class="skill-list">Next.js (App Router), React, TypeScript, JavaScript (ES6+), Tailwind CSS</div>
        </div>
        <div class="skill-card">
          <div class="skill-label">Data Analysis & Python</div>
          <div class="skill-list">Python, Normal Distribution Modeling, NumPy, SciPy, Pandas, Matplotlib, Seaborn</div>
        </div>
        <div class="skill-card">
          <div class="skill-label">Backend & Web APIs</div>
          <div class="skill-list">Node.js, Express.js, PHP, RESTful APIs, Server Actions</div>
        </div>
        <div class="skill-card">
          <div class="skill-label">Databases & Cloud</div>
          <div class="skill-list">PostgreSQL, Supabase (RLS), MySQL, Git, GitHub</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Featured Projects</div>
      <div class="project-item">
        <div class="item-header">
          <div class="item-title">BGSBU Official University Website (bgsbu.ac.in)</div>
          <div class="item-subtitle">Live Portal: bgsbu.ac.in</div>
        </div>
        <p style="font-size: 13px; color: #44403c;">Official university website frontend development, layout design, and academic navigation architecture.</p>
      </div>

      <div class="project-item">
        <div class="item-header">
          <div class="item-title">NEP/FYUP Student Feedback System with NLP Sentiment Analysis</div>
          <div class="item-subtitle">Full-Stack Application (Frontend & Backend)</div>
        </div>
        <p style="font-size: 13px; color: #44403c;">Custom built full-stack web application featuring frontend UI, database backend, and Natural Language Processing (NLP) Sentiment Analysis engine to classify student feedback text into Positive, Neutral, and Negative categories.</p>
      </div>

      <div class="project-item">
        <div class="item-header">
          <div class="item-title">Python Data Analysis & Normal Distribution Modeling</div>
          <div class="item-subtitle">IIIT Una Research Project</div>
        </div>
        <p style="font-size: 13px; color: #44403c;">Statistical data modeling and Normal Distribution probability fitting using Python, NumPy, SciPy, and Matplotlib.</p>
      </div>
    </div>

  </div>
</body>
</html>`;

    const blob = new Blob([htmlCVContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Saima_Kosser_Professional_CV.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-[#D4AF37]/30 shadow-2xl p-4 sm:p-8 md:p-10 bg-[#1A1A18] text-[#ECE7E1]">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 rounded-xl bg-[#121210] hover:bg-white/10 text-[#A1A19A] hover:text-[#ECE7E1] border border-[#ECE7E1]/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 border-b border-[#ECE7E1]/10 pb-6 pr-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121210] border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] sm:text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-[#D4AF37] shrink-0" /> Executive MCA Developer & Data Analyst Resume
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#ECE7E1] tracking-tight">Saima Kosser</h2>
          <p className="text-[#D4AF37] font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold">
            MCA Postgraduate (Result Awaited) | Full-Stack Web Developer & Data Analyst
          </p>
          <p className="text-[11px] sm:text-xs text-[#A1A19A] font-mono flex flex-wrap gap-3 sm:gap-4 pt-1">
            <span>📧 saimakossermalik@gmail.com</span>
            <span>📍 Jammu & Kashmir, India</span>
            <span>🎓 MCA (Completed, Result Awaited)</span>
          </p>
        </div>

        {/* CV Content Body */}
        <div className="py-6 space-y-8 text-sm text-[#A1A19A]">
          
          {/* Executive Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Professional Summary
            </h3>
            <p className="leading-relaxed bg-[#121210] p-4 rounded-xl border border-[#ECE7E1]/10 text-[#ECE7E1] font-sans">
              Results-oriented Master of Computer Applications (MCA) postgraduate (coursework completed, final result awaited) specializing in full-stack web development and statistical data analysis. Experienced as a <strong className="text-[#D4AF37]">Frontend Developer for Baba Ghulam Shah Badshah University official website (bgsbu.ac.in)</strong> and completed a 1-month <strong className="text-[#D4AF37]">Data Analysis Internship at IIIT Una, Himachal Pradesh</strong> (focusing on Python, NumPy, SciPy & Normal Distribution statistical probability modeling).
            </p>
          </div>

          {/* Practical Work & Internship Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#D4AF37]" /> Work & Internship Experience
            </h3>
            
            {/* IIIT Una Internship */}
            <div className="p-5 rounded-2xl bg-[#121210] border border-[#D4AF37]/30 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-serif font-bold text-[#ECE7E1] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D4AF37]" /> Data Analysis Intern
                </h4>
                <span className="px-3 py-1 rounded-full bg-[#1A1A18] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono">
                  IIIT Una, Himachal Pradesh (1 Month)
                </span>
              </div>
              <p className="text-xs text-[#D4AF37] font-mono">Indian Institute of Information Technology Una — Data Analytics Training & Research</p>
              <ul className="text-xs text-[#A1A19A] space-y-1.5 pt-1 list-disc list-inside font-sans">
                <li>Completed intensive 1-month Data Analysis Internship at IIIT Una, Himachal Pradesh.</li>
                <li>Applied Python (NumPy, SciPy, Pandas, Matplotlib) for statistical probability modeling & Normal Distribution (Gaussian Bell Curve) analysis.</li>
                <li>Calculated mean (μ), standard deviation (σ), variance, z-scores, and probability density functions (PDF) on dataset distributions.</li>
                <li>Conducted data cleaning, handling missing values, and exploratory data analysis (EDA).</li>
              </ul>
            </div>

            {/* BGSBU Frontend Developer Experience */}
            <div className="p-5 rounded-2xl bg-[#121210] border border-[#ECE7E1]/10 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-serif font-bold text-[#ECE7E1] flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#D4AF37]" /> Frontend Developer
                </h4>
                <span className="px-3 py-1 rounded-full bg-[#1A1A18] border border-[#ECE7E1]/10 text-[#ECE7E1] text-xs font-mono">
                  bgsbu.ac.in Web Portal
                </span>
              </div>
              <p className="text-xs text-[#D4AF37] font-mono">Baba Ghulam Shah Badshah University Official Website</p>
              <ul className="text-xs text-[#A1A19A] space-y-1.5 pt-1 list-disc list-inside font-sans">
                <li>Developed responsive frontend web interfaces and navigation components for official portal <strong className="text-[#ECE7E1]">bgsbu.ac.in</strong>.</li>
                <li>Structured academic department sections, student notice boards, and digital resource portals.</li>
                <li>Ensured cross-browser compatibility and optimized mobile web rendering.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#D4AF37]" /> Academic Qualifications
            </h3>
            <div className="p-5 rounded-2xl bg-[#121210] border border-[#ECE7E1]/10 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-serif font-bold text-[#ECE7E1]">Master of Computer Applications (MCA)</h4>
                <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  Coursework Completed (Result Awaited)
                </span>
              </div>
              <p className="text-xs text-[#D4AF37] font-mono">Specialization: Full-Stack Web Development & Data Analytics</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#D4AF37]" /> Skills Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#121210] border border-[#ECE7E1]/10 space-y-2">
                <span className="text-xs font-mono text-[#D4AF37] font-semibold block uppercase">Frontend Development</span>
                <p className="text-xs text-[#A1A19A]">Next.js (App Router), React, TypeScript, JavaScript (ES6+), Tailwind CSS</p>
              </div>
              <div className="p-4 rounded-xl bg-[#121210] border border-[#ECE7E1]/10 space-y-2">
                <span className="text-xs font-mono text-[#D4AF37] font-semibold block uppercase">Data Analysis & Python</span>
                <p className="text-xs text-[#A1A19A]">Python, Normal Distribution Modeling, NumPy, SciPy, Pandas, Matplotlib, Seaborn</p>
              </div>
              <div className="p-4 rounded-xl bg-[#121210] border border-[#ECE7E1]/10 space-y-2">
                <span className="text-xs font-mono text-[#D4AF37] font-semibold block uppercase">Backend & Web APIs</span>
                <p className="text-xs text-[#A1A19A]">Node.js, Express.js, PHP, RESTful APIs, Server Actions</p>
              </div>
              <div className="p-4 rounded-xl bg-[#121210] border border-[#ECE7E1]/10 space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-semibold block uppercase">Databases & Cloud</span>
                <p className="text-xs text-[#A1A19A]">PostgreSQL, Supabase (RLS), MySQL, Git, GitHub</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-[#ECE7E1]/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A1A19A]">
            <Mail className="w-4 h-4 text-[#D4AF37]" />
            <span>saimakossermalik@gmail.com</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#121210] hover:bg-white/10 text-[#A1A19A] hover:text-[#ECE7E1] border border-[#ECE7E1]/10 text-xs font-mono uppercase text-center"
            >
              Close Preview
            </button>

            <button
              onClick={handleDownloadFormattedResume}
              className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#e2bd46] text-[#121210] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-lg text-center"
            >
              <Download className="w-4 h-4" />
              <span>Download Professional Resume (HTML/PDF)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
