import { ProfileData, NavigationItem } from "./types";

export const profileData: Record<"en" | "ja", ProfileData> = {
  en: {
    name: "Aung Kaung Satt",
    katakanaName: "",
    role: "Software Developer | Desktop & Modern Web Applications | Exploring AI",
    intro:
      "Two years engineering and testing enterprise construction estimating software in Delphi, working daily in Japanese. Passionate about both robust desktop systems and modern web technologies, with an active focus on self-studying React, TypeScript, and AI integrations.",
    status: "Open to Software & Web Development Opportunities",
    email: "agkgsatt@gmail.com",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/aung-kaung-satt-bb309822b/?isSelfProfile=true",
        note: "Connect on LinkedIn",
        type: "linkedin",
      },
      {
        label: "Email",
        url: "mailto:agkgsatt@gmail.com",
        note: "agkgsatt@gmail.com",
        type: "email",
      },
      {
        label: "GitHub",
        url: "https://github.com/Aung-Kaung-Satt",
        note: "github.com/Aung-Kaung-Satt",
        type: "github",
      },
    ],
  },
  ja: {
    name: "Aung Kaung Satt",
    katakanaName: "アウン カウン サット",
    role: "ソフトウェア開発者 | デスクトップ＆Web開発 · AI技術の実践・学習",
    intro:
      "日本の土木積算システム（Delphi）の開発および品質検証に約2年間従事しました。日本語による仕様書の作成や図面の読解、日々のミーティングなど実務をすべて日本語で遂行した経験があります。デスクトップ開発で培った正確な実装力を基盤に、現在はReactやAI技術を積極的に学習し、Webアプリケーション開発に取り組んでいます。",
    status: "ソフトウェア / Webエンジニアのポジションを探しています（就職・転職活動中）",
    email: "agkgsatt@gmail.com",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/aung-kaung-satt-bb309822b/?isSelfProfile=true",
        note: "LinkedInプロフィール",
        type: "linkedin",
      },
      {
        label: "Email",
        url: "mailto:agkgsatt@gmail.com",
        note: "agkgsatt@gmail.com",
        type: "email",
      },
      {
        label: "GitHub",
        url: "https://github.com/Aung-Kaung-Satt",
        note: "GitHubプロフィール",
        type: "github",
      },
    ],
  },
};

export const navigationData: Record<"en" | "ja", NavigationItem[]> = {
  en: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "it-field", label: "IT Field" },
    { id: "language-field", label: "Language Field" },
  ],
  ja: [
    { id: "about", label: "概要" },
    { id: "experience", label: "職務経歴" },
    { id: "projects", label: "プロジェクト" },
    { id: "skills", label: "スキル" },
    { id: "it-field", label: "IT分野・資格" },
    { id: "language-field", label: "語学・資格" },
  ],
};
