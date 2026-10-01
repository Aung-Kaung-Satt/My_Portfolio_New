import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExperienceItem, Language } from "../../data/types";
import { SectionTitle } from "../ui/SectionTitle";

interface ExperienceProps {
  experience: ExperienceItem[];
  title: string;
  lang: Language;
  responsibilitiesHeading: string;
  isDarkMode: boolean;
}

export function Experience({
  experience,
  title,
  lang,
  responsibilitiesHeading,
  isDarkMode,
}: ExperienceProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-36 lg:scroll-mt-12"
    >
      <SectionTitle id="experience" title={title} isDarkMode={isDarkMode} />

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <article
            key={index}
            className={`border p-6 rounded-lg transition-colors ${
              isDarkMode
                ? "border-slate-800 bg-slate-900 shadow-xs"
                : "border-slate-200 bg-white shadow-xs"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3
                className={`text-base font-semibold ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {exp.role}{" "}
                <span
                  className={isDarkMode ? "text-indigo-400" : "text-indigo-700"}
                >
                  · {exp.company}
                </span>
              </h3>
              <time
                className={`text-xs font-medium shrink-0 tabular-nums ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {exp.period}
              </time>
            </div>

            <p
              className={`mt-1.5 text-xs font-medium ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {exp.project}
            </p>

            <p
              className={`mt-3 text-sm leading-relaxed ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {exp.summary}
            </p>

            {/* Stack tags */}
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Technology stack">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${
                    isDarkMode
                      ? "bg-slate-800 text-indigo-300 border-slate-700"
                      : "bg-indigo-50 text-indigo-700 border-indigo-100"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Expand/Collapse Button */}
            <div
              className={`mt-6 pt-4 border-t flex items-center justify-between ${
                isDarkMode ? "border-slate-800" : "border-slate-100"
              }`}
            >
              <motion.button
                whileTap={{ scale: 0.96 }}
                type="button"
                aria-expanded={isExpanded}
                aria-controls="experience-details"
                onClick={() => setIsExpanded((prev) => !prev)}
                className={`inline-flex items-center text-xs font-medium px-3.5 py-2 rounded-lg border transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  isExpanded
                    ? isDarkMode
                      ? "bg-indigo-950/60 text-indigo-300 border-indigo-800/80 shadow-xs"
                      : "bg-indigo-100/90 text-indigo-800 border-indigo-200 shadow-xs"
                    : isDarkMode
                    ? "bg-slate-800 text-indigo-300 border-transparent hover:bg-slate-700"
                    : "bg-indigo-50/80 text-indigo-700 border-transparent hover:bg-indigo-100"
                }`}
              >
                <span>
                  {isExpanded ? exp.hideButtonText : exp.showButtonText}
                </span>
                <svg
                  className={`ml-2 h-3.5 w-3.5 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>
              <span
                className={`text-xs ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {exp.accomplishmentsNote}
              </span>
            </div>

            {/* Animated Collapsible Details Dropdown Container */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="experience-details"
                  id="experience-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className={`mt-4 rounded-xl border p-4 sm:p-5 transition-colors ${
                      isDarkMode
                        ? "border-slate-800/90 bg-slate-950/70 shadow-inner"
                        : "border-indigo-100/90 bg-indigo-50/40 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-200/50 dark:border-slate-800/50">
                      <h4
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          isDarkMode ? "text-indigo-400" : "text-indigo-700"
                        }`}
                      >
                        {responsibilitiesHeading}
                      </h4>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                          isDarkMode
                            ? "bg-slate-900 text-slate-400 border-slate-800"
                            : "bg-white text-slate-500 border-slate-200"
                        }`}
                      >
                        {exp.details.length} {lang === "en" ? "points" : "項目"}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-xs leading-relaxed">
                      {exp.details.map((item, itemIdx) => (
                        <motion.li
                          key={itemIdx}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.08 + itemIdx * 0.05,
                            duration: 0.24,
                            ease: "easeOut",
                          }}
                          className="flex items-start group"
                        >
                          <span className="mr-2.5 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400 group-hover:scale-125 transition-transform" />
                          <span
                            className={`${
                              isDarkMode
                                ? "text-slate-300 group-hover:text-slate-100"
                                : "text-slate-600 group-hover:text-slate-900"
                            } transition-colors`}
                          >
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        ))}
      </div>
    </section>
  );
}
