import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface OnigiriPreloaderProps {
  onComplete?: () => void;
  lang?: "en" | "ja";
}

export const OnigiriPreloader: React.FC<OnigiriPreloaderProps> = ({
  onComplete,
  lang = "en",
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Lock scroll during preloader
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Progress counter animation from 0 to 100 over ~1.3 seconds
    const startTime = performance.now();
    const duration = 1350; // ms

    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(1, elapsed / duration);
      // Ease-out cubic curve for natural snappy loading feel
      const easedProgress = 1 - Math.pow(1 - rawProgress, 2.5);
      const percent = Math.round(easedProgress * 100);

      setProgress(percent);

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Small pause at 100% before smooth fade out
        const timer = setTimeout(() => {
          setIsLoaded(true);
          if (onComplete) {
            onComplete();
          }
        }, 220);
        return () => clearTimeout(timer);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  // Loading phase messages
  const getStatusText = (pct: number) => {
    if (lang === "ja") {
      if (pct < 45) return "ほかほかご飯を準備中...";
      if (pct < 85) return "美味しい海苔を巻いています...";
      return "どうぞ召し上がれ！";
    }
    if (pct < 45) return "Preparing warm rice...";
    if (pct < 85) return "Wrapping crispy nori...";
    return "Ready & welcome!";
  };

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="onigiri-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(6px)",
            transition: { duration: 0.45, ease: "easeOut" },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100 select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading Aung Kaung Satt portfolio"
        >
          {/* Ambient background glow */}
          <div className="absolute w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none -top-10" />
          <div className="absolute w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none -bottom-10" />

          {/* Centered Content Container */}
          <div className="relative flex flex-col items-center px-6 text-center max-w-sm">
            {/* Mascot Container with floating steam & soft bounce */}
            <div className="relative mb-5 flex flex-col items-center justify-center">
              {/* Animated Steam Puffs */}
              <div className="absolute -top-7 flex space-x-2.5 opacity-75 pointer-events-none">
                <motion.div
                  animate={{
                    y: [0, -10, -18],
                    opacity: [0, 0.8, 0],
                    scale: [0.7, 1, 1.2],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                    ease: "easeOut",
                  }}
                  className="w-1.5 h-3 rounded-full bg-white/40 blur-[0.5px]"
                />
                <motion.div
                  animate={{
                    y: [0, -12, -22],
                    opacity: [0, 0.85, 0],
                    scale: [0.7, 1.1, 1.3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.8,
                    delay: 0.35,
                    ease: "easeOut",
                  }}
                  className="w-1.5 h-3.5 rounded-full bg-white/45 blur-[0.5px]"
                />
                <motion.div
                  animate={{
                    y: [0, -9, -17],
                    opacity: [0, 0.75, 0],
                    scale: [0.7, 1, 1.2],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: 0.7,
                    ease: "easeOut",
                  }}
                  className="w-1.5 h-3 rounded-full bg-white/40 blur-[0.5px]"
                />
              </div>

              {/* Gentle bouncing Onigiri mascot */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.7,
                  ease: "easeInOut",
                }}
                className="relative flex items-center justify-center p-3 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-xl shadow-black/40 backdrop-blur-sm"
              >
                {/* 16x16 Pixel Art Animated SVG with crisp pixelated rendering */}
                <img
                  src="/favicon.svg"
                  alt="Pixel Onigiri Mascot"
                  width={68}
                  height={68}
                  className="w-16 h-16 sm:w-[72px] sm:h-[72px] select-none [image-rendering:pixelated]"
                  draggable={false}
                />

                {/* Soft ground shadow beneath */}
                <div className="absolute -bottom-2 w-12 h-1.5 bg-black/40 rounded-full blur-[2px]" />
              </motion.div>
            </div>

            {/* Bilingual Warm Subtitle Header */}
            <div className="space-y-1 mb-6">
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center justify-center space-x-2">
                <span>Aung Kaung Satt</span>
                <span className="text-slate-600 font-light">•</span>
                <span className="text-emerald-400 font-medium tracking-wide">
                  ようこそ
                </span>
              </h2>
              <p className="text-xs text-slate-400 font-mono tracking-wider">
                {getStatusText(progress)}
              </p>
            </div>

            {/* Smooth Progress Bar */}
            <div className="w-48 sm:w-56 space-y-2">
              <div className="h-1.5 w-full rounded-full bg-slate-800/80 overflow-hidden border border-slate-700/60 p-[1px]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 shadow-xs shadow-emerald-400/50"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Percentage & Skip note */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-0.5">
                <span>LOADING</span>
                <span className="text-slate-300 font-semibold">{progress}%</span>
              </div>
            </div>
          </div>

          {/* Discreet click to skip prompt */}
          <button
            type="button"
            onClick={() => {
              setIsLoaded(true);
              if (onComplete) onComplete();
            }}
            className="absolute bottom-6 text-[11px] text-slate-500 hover:text-slate-300 transition-colors tracking-wide underline underline-offset-4 cursor-pointer"
          >
            Skip loading &rarr;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OnigiriPreloader;
