import React from "react";
import { motion } from "motion/react";
import { ProjectItem } from "../../data/types";

interface ProjectCardProps {
  project: ProjectItem;
  isDarkMode: boolean;
  codeLabel: string;
  liveLabel: string;
}

export function ProjectCard({
  project,
  isDarkMode,
  codeLabel,
  liveLabel,
}: ProjectCardProps) {
  // Check if both the badge span and tag span contain "Delphi" (Delphi condition)
  const hasDelphiInBadge = /delphi/i.test(project.badge);
  const hasDelphiInTag = project.tags.some((tag) => /delphi/i.test(tag));
  const isDelphiCondition =
    hasDelphiInBadge &&
    hasDelphiInTag &&
    (/desktop|デスクトップ/i.test(project.badge) || !/web/i.test(project.badge));

  const shouldShowLinks = !isDelphiCondition && Boolean(project.codeUrl || project.liveUrl);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`border rounded-lg flex flex-col justify-between overflow-hidden shadow-xs ${
        isDarkMode
          ? "border-slate-800 bg-slate-900"
          : "border-slate-200 bg-white"
      }`}
    >
      <div>
        {/* Subtle Window Chrome Header */}
        <div
          className={`px-4 py-2 border-b flex items-center justify-between ${
            isDarkMode
              ? "border-slate-800 bg-slate-950/60"
              : "border-slate-100 bg-slate-50"
          }`}
        >
          <div className="flex items-center space-x-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-lg bg-slate-400 opacity-60" />
            <span className="h-2 w-2 rounded-lg bg-slate-400 opacity-60" />
            <span className="h-2 w-2 rounded-lg bg-slate-400 opacity-60" />
          </div>
          <span
            className={`text-xs font-medium font-mono ${
              isDarkMode ? "text-indigo-400" : "text-indigo-700"
            }`}
          >
            {project.badge}
          </span>
        </div>

        <div className="p-5">
          <h3
            className={`text-sm font-semibold ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`mt-2.5 text-xs leading-relaxed ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-medium px-2 py-0.5 rounded-lg ${
                  isDarkMode
                    ? "bg-slate-800 text-slate-300 border border-slate-700"
                    : "bg-slate-100 text-slate-700 border border-slate-200"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {shouldShowLinks && (
        <div
          className={`px-5 py-3 border-t flex items-center justify-between text-xs ${
            isDarkMode
              ? "border-slate-800 bg-slate-950/40"
              : "border-slate-100 bg-slate-50/60"
          }`}
        >
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center font-medium rounded-lg px-2 py-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                isDarkMode
                  ? "text-indigo-400 hover:text-indigo-300"
                  : "text-indigo-700 hover:text-indigo-800"
              }`}
            >
              <span>{codeLabel}</span>
              <svg
                className="ml-1 h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center font-medium rounded-lg px-2 py-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                isDarkMode
                  ? "text-slate-300 hover:text-indigo-400"
                  : "text-slate-700 hover:text-indigo-700"
              }`}
            >
              <span>{liveLabel}</span>
              <svg
                className="ml-1 h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
