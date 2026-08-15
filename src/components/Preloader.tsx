"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#121210] text-[#ECE7E1] selection:bg-none pointer-events-auto"
        >
          {/* Animated Glowing Dual Rings Container */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-8">
            
            {/* Outer Spinning Gold Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#D4AF37] border-r-[#D4AF37]/40 shadow-[0_0_25px_rgba(212,175,55,0.3)]"
            />

            {/* Inner Counter-Spinning Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute inset-2 sm:inset-3 rounded-full border-2 border-transparent border-b-[#ECE7E1] border-l-[#ECE7E1]/30 shadow-[0_0_20px_rgba(236,231,225,0.2)]"
            />

            {/* Pulsing Ambient Backlight Glow */}
            <div className="absolute inset-4 rounded-full bg-[#D4AF37]/15 blur-xl animate-pulse" />

            {/* Center Monogram Badge */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1A1A18] border border-[#D4AF37]/50 flex items-center justify-center shadow-xl">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-gradient-gold tracking-wider">
                SK
              </span>
            </div>

          </div>

          {/* Loading Indicator Text & Animated Bar */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#D4AF37] font-semibold uppercase animate-pulse">
              LOADING...
            </span>

            {/* Subtly Animated Progress Line */}
            <div className="w-32 sm:w-40 h-0.5 bg-[#1A1A18] rounded-full overflow-hidden border border-[#ECE7E1]/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20"
              />
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
