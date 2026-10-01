import { SkillCategory } from "../../data/types";
import { SectionTitle } from "../ui/SectionTitle";

interface SkillsProps {
  skills: SkillCategory[];
  title: string;
  isDarkMode: boolean;
}

export function Skills({ skills, title, isDarkMode }: SkillsProps) {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-36 lg:scroll-mt-12">
      <SectionTitle id="skills" title={title} isDarkMode={isDarkMode} />

      <div className="space-y-4">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className={`border p-4 sm:p-5 rounded-lg shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-colors ${
              isDarkMode
                ? "border-slate-800 bg-slate-900"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="sm:w-44 shrink-0">
              <h3
                className={`text-sm font-semibold ${
                  isDarkMode ? "text-slate-200" : "text-slate-900"
                }`}
              >
                {skillGroup.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 flex-1 justify-start sm:justify-end">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className={`text-xs font-medium px-2.5 py-1 rounded-lg border whitespace-nowrap ${
                    isDarkMode
                      ? "bg-slate-800 text-slate-300 border-slate-700"
                      : "bg-slate-100 text-slate-800 border-slate-200"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
