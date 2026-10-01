import { SkillCategory } from "./types";

export const skillsData: Record<"en" | "ja", SkillCategory[]> = {
  en: [
    {
      category: "Web & Frontend",
      items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "AI & Modern Tooling",
      items: ["AI / LLM Integration", "Prompt Engineering", "REST APIs", "Vite", "Node.js"],
    },
    {
      category: "Desktop & Other Languages",
      items: ["Delphi", "Python", "Java"],
    },
    {
      category: "Tools & Systems",
      items: ["Git", "MySQL", "Excel", "Windows", "macOS"],
    },
  ],
  ja: [
    {
      category: "Web & フロントエンド",
      items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "AI・モダンツール (独学・実践)",
      items: ["AI / LLM活用", "プロンプト設計", "REST API", "Vite", "Node.js"],
    },
    {
      category: "デスクトップ・その他言語",
      items: ["Delphi", "Python", "Java"],
    },
    {
      category: "ツール・開発環境",
      items: ["Git", "MySQL", "Excel", "Windows", "macOS"],
    },
  ],
};
