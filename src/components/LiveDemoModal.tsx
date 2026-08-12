"use client";

import { useState } from "react";
import { X, Star, Send, CheckCircle2, Sparkles, UserCheck, BarChart3, Video, Cpu, Activity, Sliders, Code, Brain } from "lucide-react";

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectId?: string;
  videoUrl?: string;
}

export default function LiveDemoModal({ isOpen, onClose, projectTitle, projectId, videoUrl }: LiveDemoModalProps) {
  // NEP/FYUP Form state
  const [course, setCourse] = useState("NEP-101: Full-Stack Web Development");
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Live NLP Sentiment Analysis Result State
  const [sentimentResult, setSentimentResult] = useState<{
    category: "POSITIVE 😊" | "NEUTRAL 😐" | "NEGATIVE 🙁";
    polarityScore: string;
    confidence: number;
    tokens: string[];
  }>({
    category: "POSITIVE 😊",
    polarityScore: "+0.85",
    confidence: 92,
    tokens: ["engaging", "excellent"],
  });

  // Mock feedback stats state
  const [stats, setStats] = useState({
    totalFeedbacks: 142,
    averageRating: 4.8,
    positiveSentimentPct: 82,
    neutralSentimentPct: 12,
    negativeSentimentPct: 6,
  });

  // Python Data Analysis - Normal Distribution interactive states
  const [mean, setMean] = useState<number>(0);
  const [stdDev, setStdDev] = useState<number>(1.0);
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<"visualizer" | "python-code">("visualizer");

  if (!isOpen) return null;

  // Perform NLP Sentiment Analysis on feedback text
  const analyzeSentiment = (text: string) => {
    const lowerText = text.toLowerCase();
    const positiveWords = ["good", "great", "excellent", "engaging", "helpful", "awesome", "clear", "best", "love", "useful", "informative", "nice"];
    const negativeWords = ["bad", "poor", "difficult", "boring", "hard", "slow", "confusing", "useless", "worst", "hate", "issue", "problem"];

    const foundPos = positiveWords.filter(w => lowerText.includes(w));
    const foundNeg = negativeWords.filter(w => lowerText.includes(w));

    if (foundPos.length > foundNeg.length) {
      setSentimentResult({
        category: "POSITIVE 😊",
        polarityScore: `+${(0.70 + Math.min(foundPos.length * 0.1, 0.25)).toFixed(2)}`,
        confidence: Math.min(85 + foundPos.length * 4, 98),
        tokens: foundPos.length > 0 ? foundPos : ["constructive feedback"],
      });
    } else if (foundNeg.length > foundPos.length) {
      setSentimentResult({
        category: "NEGATIVE 🙁",
        polarityScore: `-${(0.60 + Math.min(foundNeg.length * 0.1, 0.3)).toFixed(2)}`,
        confidence: Math.min(80 + foundNeg.length * 5, 96),
        tokens: foundNeg.length > 0 ? foundNeg : ["improvement areas"],
      });
    } else {
      setSentimentResult({
        category: "NEUTRAL 😐",
        polarityScore: "+0.15",
        confidence: 78,
        tokens: ["general remarks"],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback) return;
    
    analyzeSentiment(feedback);
    setSubmitted(true);
    setStats((prev) => ({
      ...prev,
      totalFeedbacks: prev.totalFeedbacks + 1,
    }));
  };

  const handleReset = () => {
    setSubmitted(false);
    setFeedback("");
    setRating(5);
  };

  // Gaussian Bell Curve SVG Path Calculation
  const generateGaussianPath = () => {
    const points: string[] = [];
    const width = 500;
    const height = 180;
    const padding = 20;

    for (let i = 0; i <= 100; i++) {
      const xVal = -4 + (i / 100) * 8;
      const pdf = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((xVal - mean) / stdDev, 2));

      const svgX = padding + (i / 100) * (width - 2 * padding);
      const svgY = height - padding - pdf * (height - 2 * padding) * 1.8;

      points.push(`${i === 0 ? "M" : "L"} ${svgX.toFixed(1)} ${svgY.toFixed(1)}`);
    }

    return points.join(" ");
  };

  const isDataAnalysis = projectId === "python-data-analysis-normal-distribution";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-[#D4AF37]/30 shadow-2xl p-6 sm:p-8 bg-[#1A1A18] text-[#ECE7E1]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ECE7E1]/10 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#121210] border border-[#D4AF37]/40 text-[#D4AF37]">
              {isDataAnalysis ? <Cpu className="w-5 h-5 text-[#D4AF37]" /> : <Brain className="w-5 h-5 text-[#D4AF37]" />}
            </div>
            <div>
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
                {isDataAnalysis ? "Python Statistical Analysis Showcase" : "Full-Stack & NLP Sentiment Analysis Live Preview"}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#ECE7E1]">{projectTitle}</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#121210] hover:bg-white/10 text-[#A1A19A] hover:text-[#ECE7E1] border border-[#ECE7E1]/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player (if videoUrl provided) */}
        {videoUrl && (
          <div className="mb-6 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-serif font-bold text-[#ECE7E1] flex items-center gap-2">
                <Video className="w-4 h-4 text-[#D4AF37]" /> Project Demonstration Video
              </h3>
              <span className="text-[11px] font-mono text-[#D4AF37] bg-[#121210] border border-[#D4AF37]/30 px-3 py-0.5 rounded-full uppercase">
                Website Video Demo
              </span>
            </div>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-[#D4AF37]/30 shadow-xl">
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain rounded-2xl"
                src={videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* DATA ANALYSIS MODAL CONTENT */}
        {isDataAnalysis ? (
          <div className="space-y-6">
            
            {/* Tab Controls */}
            <div className="flex items-center gap-3 border-b border-[#ECE7E1]/10 pb-4">
              <button
                onClick={() => setActiveAnalysisTab("visualizer")}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeAnalysisTab === "visualizer"
                    ? "bg-[#D4AF37] text-[#121210] font-bold shadow"
                    : "bg-[#121210] text-[#A1A19A] border border-[#ECE7E1]/10 hover:text-[#ECE7E1]"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Normal Distribution Chart</span>
              </button>

              <button
                onClick={() => setActiveAnalysisTab("python-code")}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeAnalysisTab === "python-code"
                    ? "bg-[#D4AF37] text-[#121210] font-bold shadow"
                    : "bg-[#121210] text-[#A1A19A] border border-[#ECE7E1]/10 hover:text-[#ECE7E1]"
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Python Script (SciPy / NumPy)</span>
              </button>
            </div>

            {activeAnalysisTab === "visualizer" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left: SVG Gaussian Bell Curve Visualizer */}
                <div className="lg:col-span-7 bg-[#121210] p-6 rounded-2xl border border-[#ECE7E1]/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-serif font-bold text-[#ECE7E1] flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#D4AF37]" /> Interactive Gaussian Probability Curve
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      Python SciPy Simulation
                    </span>
                  </div>

                  {/* SVG Rendered Curve */}
                  <div className="relative w-full aspect-[5/2] bg-[#1A1A18] rounded-xl border border-[#ECE7E1]/10 p-2 flex flex-col justify-end">
                    <svg viewBox="0 0 500 180" className="w-full h-full">
                      <line x1="20" y1="160" x2="480" y2="160" stroke="#ECE7E1" strokeOpacity="0.2" strokeWidth="1" />
                      <line x1="250" y1="20" x2="250" y2="160" stroke="#D4AF37" strokeOpacity="0.4" strokeDasharray="4" strokeWidth="1" />

                      <path
                        d={`${generateGaussianPath()} L 480 160 L 20 160 Z`}
                        fill="url(#goldGradient)"
                        opacity="0.35"
                      />

                      <path
                        d={generateGaussianPath()}
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="3"
                      />

                      <defs>
                        <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="flex justify-between text-[10px] font-mono text-[#A1A19A] px-4 pt-1">
                      <span>-4σ</span>
                      <span>-2σ</span>
                      <span className="text-[#D4AF37] font-bold">Mean (μ = {mean})</span>
                      <span>+2σ</span>
                      <span>+4σ</span>
                    </div>
                  </div>

                  {/* Interactive Sliders */}
                  <div className="space-y-4 pt-2">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#A1A19A]">Mean (μ):</span>
                        <span className="text-[#D4AF37] font-bold">{mean}</span>
                      </div>
                      <input
                        type="range"
                        min="-3"
                        max="3"
                        step="0.5"
                        value={mean}
                        onChange={(e) => setMean(parseFloat(e.target.value))}
                        className="w-full accent-[#D4AF37] bg-[#1A1A18] rounded-lg cursor-pointer"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#A1A19A]">Standard Deviation (σ):</span>
                        <span className="text-[#D4AF37] font-bold">{stdDev}</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="2.5"
                        step="0.1"
                        value={stdDev}
                        onChange={(e) => setStdDev(parseFloat(e.target.value))}
                        className="w-full accent-[#D4AF37] bg-[#1A1A18] rounded-lg cursor-pointer"
                      />
                    </div>
                  </div>

                </div>

                {/* Right: Key Statistical Metrics & IIIT Una Context */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-[#121210] p-6 rounded-2xl border border-[#ECE7E1]/10 space-y-4">
                    <h3 className="text-sm font-serif font-bold text-[#ECE7E1] flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-[#D4AF37]" /> Statistical Parameters
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                        <span className="text-[10px] font-mono text-[#A1A19A] block uppercase">Mean (μ)</span>
                        <span className="text-xl font-bold font-mono text-[#ECE7E1]">{mean}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                        <span className="text-[10px] font-mono text-[#A1A19A] block uppercase">Std Dev (σ)</span>
                        <span className="text-xl font-bold font-mono text-[#D4AF37]">{stdDev}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                        <span className="text-[10px] font-mono text-[#A1A19A] block uppercase">Variance (σ²)</span>
                        <span className="text-xl font-bold font-mono text-[#ECE7E1]">{(stdDev * stdDev).toFixed(2)}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                        <span className="text-[10px] font-mono text-[#A1A19A] block uppercase">Confidence (1σ)</span>
                        <span className="text-xl font-bold font-mono text-emerald-400">68.27%</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10 text-xs text-[#A1A19A] space-y-1.5 font-mono">
                      <span className="font-bold text-[#D4AF37] block uppercase">Empirical 68-95-99.7 Rule:</span>
                      <p>✓ 68.27% data within ±1σ ({ (mean - stdDev).toFixed(1) } to { (mean + stdDev).toFixed(1) })</p>
                      <p>✓ 95.45% data within ±2σ ({ (mean - 2*stdDev).toFixed(1) } to { (mean + 2*stdDev).toFixed(1) })</p>
                      <p>✓ 99.73% data within ±3σ ({ (mean - 3*stdDev).toFixed(1) } to { (mean + 3*stdDev).toFixed(1) })</p>
                    </div>

                  </div>

                  <div className="p-4 rounded-xl bg-[#121210] border border-[#ECE7E1]/10 text-xs text-[#A1A19A] space-y-1">
                    <span className="font-bold text-[#D4AF37] block">📍 IIIT Una Internship Context:</span>
                    <p>Performed Python statistical data modeling, data cleaning, Z-score standardization, and Gaussian distribution fitting on datasets during the 1-month internship at IIIT Una (HP).</p>
                  </div>
                </div>

              </div>
            ) : (
              /* Python Code Showcase Tab */
              <div className="bg-[#121210] p-6 rounded-2xl border border-[#ECE7E1]/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#D4AF37] font-bold">normal_distribution_analysis.py</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 uppercase">
                    Python 3.11 / SciPy
                  </span>
                </div>

                <pre className="font-mono text-xs text-[#ECE7E1] bg-[#1A1A18] p-5 rounded-xl border border-[#ECE7E1]/10 overflow-x-auto leading-relaxed">
{`import numpy as np
import scipy.stats as stats
import matplotlib.pyplot as plt
import seaborn as sns

# IIIT Una Data Analysis Project - Normal Distribution Modeling
# Step 1: Generate Dataset & Calculate Parameters
data = np.random.normal(loc=0.0, scale=1.0, size=1000)
mean = np.mean(data)
std_dev = np.std(data)
variance = np.var(data)

print(f"Dataset Mean (μ): {mean:.4f}")
print(f"Standard Deviation (σ): {std_dev:.4f}")
print(f"Variance (σ²): {variance:.4f}")

# Step 2: Probability Density Function (PDF) & Gaussian Curve
x = np.linspace(mean - 4*std_dev, mean + 4*std_dev, 200)
pdf = stats.norm.pdf(x, mean, std_dev)

# Step 3: Statistical Plotting using Matplotlib & Seaborn
plt.figure(figsize=(10, 5))
sns.histplot(data, kde=False, stat="density", color="#D4AF37", alpha=0.3, label="Data Histogram")
plt.plot(x, pdf, color="#D4AF37", linewidth=2.5, label="Gaussian Normal Distribution Curve")

plt.axvline(mean, color="#ECE7E1", linestyle="--", label=f"Mean (μ = {mean:.2f})")
plt.axvline(mean + std_dev, color="#10B981", linestyle=":", label="+1 Std Dev (+1σ)")
plt.axvline(mean - std_dev, color="#10B981", linestyle=":", label="-1 Std Dev (-1σ)")

plt.title("Normal Distribution Statistical Modeling - IIIT Una Internship", fontsize=12)
plt.xlabel("Values")
plt.ylabel("Probability Density")
plt.legend()
plt.grid(True, alpha=0.15)
plt.show()`}
                </pre>
              </div>
            )}

          </div>
        ) : (
          /* NEP/FYUP FULL-STACK & NLP SENTIMENT ANALYSIS DEMO CONTENT */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7 space-y-5 bg-[#121210] p-6 rounded-2xl border border-[#ECE7E1]/10">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-serif font-bold text-[#ECE7E1] flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#D4AF37]" /> Student Feedback Portal (Full-Stack)
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                  NLP Sentiment Analysis Active
                </span>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Course Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#A1A19A] block uppercase">Select Course Module</label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs font-sans focus:ring-2 focus:ring-[#D4AF37]/50 bg-[#1A1A18]"
                    >
                      <option value="NEP-101: Full-Stack Web Development">NEP-101: Full-Stack Web Development</option>
                      <option value="NEP-202: Database Systems & MySQL">NEP-202: Database Systems & MySQL</option>
                      <option value="NEP-303: Natural Language Processing (NLP)">NEP-303: Natural Language Processing (NLP)</option>
                      <option value="FYUP-404: Software Engineering & PHP">FYUP-404: Software Engineering & PHP</option>
                    </select>
                  </div>

                  {/* Rating Stars */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#A1A19A] block uppercase">Course Content & Instructor Rating</label>
                    <div className="flex items-center gap-2 bg-[#1A1A18] p-3 rounded-xl border border-[#ECE7E1]/10">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1 text-[#D4AF37] hover:scale-125 transition-transform"
                        >
                          <Star className={`w-6 h-6 ${star <= rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-600"}`} />
                        </button>
                      ))}
                      <span className="text-xs font-mono text-[#D4AF37] ml-2 font-bold">{rating} / 5 Stars</span>
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#A1A19A] block uppercase">Student Text Feedback (Evaluated by NLP Engine)</label>
                    <textarea
                      rows={3}
                      required
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="e.g. The course content was extremely clear and engaging, but lab exercises could be slightly longer..."
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs font-sans resize-none bg-[#1A1A18]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#e2bd46] text-[#121210] text-xs font-mono font-bold uppercase tracking-wider transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Run Live NLP Sentiment Analysis</span>
                  </button>

                </form>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  <div className="p-5 text-center space-y-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-serif font-bold text-[#ECE7E1]">Feedback Submitted & Analyzed!</h4>
                    <p className="text-xs text-[#A1A19A]">
                      Your feedback for <strong className="text-[#D4AF37]">{course}</strong> has been processed by the NLP Sentiment Engine.
                    </p>
                  </div>

                  {/* Live NLP Sentiment Evaluation Output */}
                  <div className="p-4 rounded-xl bg-[#1A1A18] border border-[#D4AF37]/30 space-y-2 font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#D4AF37] uppercase font-bold flex items-center gap-1.5">
                        <Brain className="w-4 h-4 text-[#D4AF37]" /> NLP Sentiment Analysis Engine
                      </span>
                      <span className="text-[10px] px-2.5 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 font-bold uppercase">
                        {sentimentResult.category} ({sentimentResult.confidence}% confidence)
                      </span>
                    </div>
                    <div className="text-xs text-[#ECE7E1] space-y-1 pt-1">
                      <p>• Polarity Score: <strong className="text-[#D4AF37]">{sentimentResult.polarityScore}</strong></p>
                      <p>• Extracted Keywords: <span className="text-[#A1A19A] font-sans">{sentimentResult.tokens.join(", ")}</span></p>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#e2bd46] text-[#121210] text-xs font-mono font-bold uppercase"
                  >
                    Submit Another Student Feedback
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Live Administrative Analytics Dashboard */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#121210] p-6 rounded-2xl border border-[#ECE7E1]/10 space-y-4">
                <h3 className="text-sm font-serif font-bold text-[#ECE7E1] flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#D4AF37]" /> Admin NLP Analytics Dashboard
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                    <span className="text-[11px] font-mono text-[#A1A19A] block uppercase">Total Submissions</span>
                    <span className="text-2xl font-bold font-mono text-[#ECE7E1]">{stats.totalFeedbacks}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1A1A18] border border-[#ECE7E1]/10">
                    <span className="text-[11px] font-mono text-[#A1A19A] block uppercase">Avg Rating</span>
                    <span className="text-2xl font-bold font-mono text-[#D4AF37]">★ {stats.averageRating}</span>
                  </div>
                </div>

                {/* NLP Sentiment Breakdown */}
                <div className="space-y-2 pt-1 font-mono text-xs">
                  <span className="text-[#D4AF37] font-bold uppercase block">NLP Sentiment Classification:</span>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-emerald-400">Positive 😊</span>
                      <span className="text-[#ECE7E1] font-bold">{stats.positiveSentimentPct}%</span>
                    </div>
                    <div className="w-full bg-[#1A1A18] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[82%]" />
                    </div>

                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#D4AF37]">Neutral 😐</span>
                      <span className="text-[#ECE7E1] font-bold">{stats.neutralSentimentPct}%</span>
                    </div>
                    <div className="w-full bg-[#1A1A18] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#D4AF37] h-full w-[12%]" />
                    </div>

                    <div className="flex justify-between text-[11px]">
                      <span className="text-rose-400">Negative 🙁</span>
                      <span className="text-[#ECE7E1] font-bold">{stats.negativeSentimentPct}%</span>
                    </div>
                    <div className="w-full bg-[#1A1A18] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-rose-400 h-full w-[6%]" />
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#A1A19A] leading-relaxed font-mono">
                  ✓ Architecture: Complete Full-Stack App (Frontend & Backend)<br />
                  ✓ Analytics: NLP Sentiment Processing Engine<br />
                  ✓ Framework: NEP 2020 / FYUP Student Portal
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121210] border border-[#ECE7E1]/10 text-xs text-[#A1A19A] space-y-1">
                <span className="font-bold text-[#D4AF37] block">💡 Full-Stack & NLP Note:</span>
                <p>Built by Saima Kosser with full custom Frontend UI, Backend database integration, and Natural Language Processing (NLP) sentiment classification on student remarks.</p>
              </div>
            </div>

          </div>
        )}

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-[#ECE7E1]/10 flex items-center justify-between">
          <span className="text-xs font-mono text-[#A1A19A]">Developed by Saima Kosser</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#121210] hover:bg-white/10 text-[#A1A19A] hover:text-[#ECE7E1] border border-[#ECE7E1]/10 text-xs font-mono uppercase"
          >
            Close Showcase
          </button>
        </div>

      </div>
    </div>
  );
}
