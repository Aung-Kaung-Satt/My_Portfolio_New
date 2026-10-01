import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectItem, UIData } from "../../data/types";
import { SectionTitle } from "../ui/SectionTitle";
import { ProjectCard } from "../ui/ProjectCard";

interface ProjectsProps {
  projects: ProjectItem[];
  title: string;
  ui: UIData;
  isDarkMode: boolean;
}

export function Projects({
  projects,
  title,
  ui,
  isDarkMode,
}: ProjectsProps) {
  const [selectedTag, setSelectedTag] = useState<string>(ui.allTag);

  // Derive unique tags for project filter chips (excluding OS-level platform "Windows")
  const allProjectTags = [
    ui.allTag,
    ...Array.from(new Set(projects.flatMap((project) => project.tags))).filter(
      (tag) => tag.toLowerCase() !== "windows"
    ),
  ];

  // Reset filter when language switches
  useEffect(() => {
    setSelectedTag(ui.allTag);
  }, [ui.allTag]);

  // Filter projects based on selected tag
  const filteredProjects =
    selectedTag === ui.allTag
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-36 lg:scroll-mt-12"
    >
      <SectionTitle id="projects" title={title} isDarkMode={isDarkMode} />

      {/* Technology Filter Chips */}
      <div className="mb-6 space-y-2">
        <span
          className={`text-xs font-medium ${
            isDarkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {ui.filterLabel}
        </span>
        <div
          role="toolbar"
          aria-label="Filter projects by technology"
          className="flex flex-wrap gap-2"
        >
          {allProjectTags.map((tag) => {
            const isPressed = selectedTag === tag;
            return (
              <motion.button
                key={tag}
                layout
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                aria-pressed={isPressed}
                onClick={() => setSelectedTag(tag)}
                className={`relative text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  isPressed
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                    : isDarkMode
                    ? "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tag}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with Animated Layout and Pop Transitions */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isDarkMode={isDarkMode}
              codeLabel={ui.codeLabel}
              liveLabel={ui.liveLabel}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div
          className={`text-center py-8 border rounded-lg ${
            isDarkMode
              ? "border-slate-800 bg-slate-900 text-slate-400"
              : "border-slate-200 bg-white text-slate-600"
          }`}
        >
          <p className="text-xs">
            {ui.noProjectsFound} "{selectedTag}".
          </p>
          <button
            type="button"
            onClick={() => setSelectedTag(ui.allTag)}
            className="mt-3 text-xs font-medium text-indigo-600 hover:text-indigo-700 underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-lg px-2 py-1"
          >
            {ui.clearFilter}
          </button>
        </div>
      )}
    </section>
  );
}
