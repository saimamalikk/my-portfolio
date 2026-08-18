"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Send, Copy, Check, Sparkles, MessageSquare, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

interface ContactSectionProps {
  selectedServiceSubject?: string;
}

export default function ContactSection({ selectedServiceSubject }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: selectedServiceSubject || "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const emailAddress = "saimakossermalik@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all required fields.");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Trigger celebratory confetti effect
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D4AF37", "#ECE7E1", "#10B981", "#E5C07B"],
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage("Network error occurred. Please try emailing directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-20 md:py-28 lg:py-36 bg-transparent">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main CTA Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#ECE7E1] tracking-tight">
            Let&apos;s Build Something <span className="text-gradient-gold">Great Together</span>.
          </h2>
          <p className="text-[#A1A19A] text-sm sm:text-base md:text-lg font-sans">
            Have a project in mind, a freelance inquiry, or a full-time web developer position? I&apos;d love to connect with you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 bg-[#1A1A18] p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-[#ECE7E1]/10">
            
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#ECE7E1] flex items-center gap-2.5 sm:gap-3">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />
                Contact Information
              </h3>
              <p className="text-xs text-[#A1A19A] leading-relaxed font-sans">
                Feel free to send an email directly or reach out via LinkedIn and GitHub profiles below.
              </p>
            </div>

            {/* Email Card with Copy Button */}
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#121210] border border-[#D4AF37]/30 space-y-2.5 sm:space-y-3">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#A1A19A] uppercase tracking-wider block">
                Primary Email Address
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-xs sm:text-sm md:text-base font-mono text-[#D4AF37] hover:text-[#ECE7E1] transition-colors truncate font-semibold"
                >
                  {emailAddress}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#1A1A18] hover:bg-white/10 text-[#A1A19A] hover:text-[#ECE7E1] border border-[#ECE7E1]/10 transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#D4AF37]" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <span className="text-xs font-mono text-emerald-400 block animate-fade-in">
                  ✓ Email copied to clipboard!
                </span>
              )}
            </div>

            {/* Social Buttons */}
            <div className="space-y-3">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#A1A19A] uppercase tracking-wider block">
                Professional Profiles
              </span>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-2.5 p-3 sm:p-3.5 rounded-xl bg-[#121210] hover:bg-white/5 text-[#ECE7E1] border border-[#ECE7E1]/10 transition-all font-mono text-xs uppercase"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-2.5 p-3 sm:p-3.5 rounded-xl bg-[#121210] hover:bg-white/5 text-[#ECE7E1] border border-[#ECE7E1]/10 transition-all font-mono text-xs uppercase"
                >
                  <GithubIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="pt-4 border-t border-[#ECE7E1]/10 flex items-center justify-between text-xs font-mono text-[#A1A19A]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Response: Within 24 hours
              </span>
              <span>MCA Student</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#1A1A18] p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-[#ECE7E1]/10">
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Name field */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-[#A1A19A] uppercase tracking-wider block">
                    Your Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl glass-input text-xs font-sans focus:ring-2 focus:ring-[#D4AF37]/50 bg-[#121210]"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-[#A1A19A] uppercase tracking-wider block">
                    Your Email <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl glass-input text-xs font-sans focus:ring-2 focus:ring-[#D4AF37]/50 bg-[#121210]"
                  />
                </div>
              </div>

              {/* Subject field */}
              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="subject" className="text-xs font-mono text-[#A1A19A] uppercase tracking-wider block">
                  Subject / Inquiry Type
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Website Development / Full-Time Developer Role"
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl glass-input text-xs font-sans focus:ring-2 focus:ring-[#D4AF37]/50 bg-[#121210]"
                />
              </div>

              {/* Message field */}
              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-[#A1A19A] uppercase tracking-wider block">
                  Message Details <span className="text-[#D4AF37]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project requirements, job offer, or questions..."
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl glass-input text-xs font-sans focus:ring-2 focus:ring-[#D4AF37]/50 resize-none bg-[#121210]"
                />
              </div>

              {/* Error Feedback */}
              {submitStatus === "error" && (
                <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Success Feedback */}
              {submitStatus === "success" && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. Saima will get back to you soon.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-3.5 text-[11px] sm:text-xs font-mono uppercase font-bold tracking-wider text-[#121210] rounded-xl bg-[#D4AF37] hover:bg-[#e2bd46] transition-all shadow-lg disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
