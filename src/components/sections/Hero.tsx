import React from "react";
import { motion, type Variants } from "motion/react";
import { Language, ProfileData } from "../../data/types";
import { SocialIcon } from "../ui/SocialIcon";

interface HeroProps {
  profile: ProfileData;
  lang: Language;
  isDarkMode: boolean;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeInUpBlur: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Hero({ profile, lang, isDarkMode }: HeroProps) {
  return (
    <header className="lg:sticky lg:top-20 lg:flex lg:h-[calc(100vh-5.5rem)] lg:max-h-[calc(100vh-5.5rem)] lg:w-5/12 lg:flex-col lg:justify-start lg:py-6 pt-6 pb-6 px-3 -mx-3 overflow-y-auto scrollbar-none">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Identity & Status */}
        <div>
          <motion.h1
            variants={fadeInUpBlur}
            className={`text-3xl font-bold tracking-tight sm:text-4xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {profile.name}
          </motion.h1>

          {profile.katakanaName && (
            <motion.p
              variants={fadeInUpBlur}
              className={`mt-1.5 text-base sm:text-lg font-semibold tracking-wide ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              （{profile.katakanaName}）
            </motion.p>
          )}

          <motion.p
            variants={fadeInUpBlur}
            className={`mt-2.5 text-base font-medium leading-snug ${
              isDarkMode ? "text-indigo-400" : "text-indigo-700"
            }`}
          >
            {profile.role}
          </motion.p>

          {/* Subtle Availability Status Indicator */}
          <motion.div
            variants={fadeInUpBlur}
            className="mt-3.5 flex items-center space-x-2 text-xs"
          >
            <span className="h-2 w-2 rounded-lg bg-emerald-500 animate-none shrink-0" />
            <span
              className={`font-medium ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {profile.status}
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUpBlur}
            className={`mt-4 text-sm leading-relaxed max-w-md ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {profile.intro}
          </motion.p>
        </div>

        {/* Profiles & Contact Section */}
        <motion.div
          variants={fadeInUpBlur}
          className={`pt-6 border-t ${
            isDarkMode ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <div className="flex flex-col space-y-2">
            <span
              className={`text-xs font-medium ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {lang === "en" ? "Profiles & Contact" : "連絡先・プロフィール"}
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  title={link.note}
                  className={`relative inline-flex items-center justify-start px-3.5 py-1.5 overflow-hidden text-xs font-semibold rounded-full group transition-all shadow-xs hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    isDarkMode
                      ? "bg-slate-900/90 text-indigo-300"
                      : "bg-white text-indigo-700"
                  }`}
                >
                  <span
                    className={`w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 pointer-events-none ${
                      isDarkMode ? "bg-indigo-400 opacity-[5%]" : "bg-indigo-500 opacity-[4%]"
                    }`}
                  />
                  <span
                    className={`absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 group-hover:-translate-x-4 pointer-events-none opacity-100 ${
                      isDarkMode ? "bg-indigo-600" : "bg-indigo-600"
                    }`}
                  />
                  <span className="relative z-10 flex items-center space-x-1.5 transition-colors duration-200 ease-in-out group-hover:text-white">
                    <SocialIcon type={link.type} className="h-3.5 w-3.5 shrink-0 transition-colors duration-200" />
                    <span>{link.label}</span>
                  </span>
                  <span
                    className={`absolute inset-0 border-2 rounded-full pointer-events-none transition-colors duration-300 ${
                      isDarkMode
                        ? "border-indigo-500/80 group-hover:border-indigo-400"
                        : "border-indigo-600/80 group-hover:border-indigo-700"
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
