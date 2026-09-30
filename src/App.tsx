/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import Aurora from "./components/Aurora.tsx";
import { DotField } from "./components/DotField.tsx";

type Language = "en" | "ja";

/**
 * All content is stored in this single DATA object at the top of the file
 * for straightforward editing and customization in both English and Japanese.
 */
export const DATA = {
  en: {
    profile: {
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
    navigation: [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "it-field", label: "IT Field" },
      { id: "language-field", label: "Language Field" },
    ],
    about: {
      paragraphs: [
        "I am a versatile software developer who values both the architectural rigor of desktop systems and the dynamic versatility of modern web platforms. For over two years, I worked within a collaborative Japanese-speaking team developing and testing mission-critical estimation software ('Gaia') widely trusted across Japan's civil engineering and construction industry.",
        "Throughout this experience, I developed disciplined engineering habits: translating complex mathematical algorithms and technical Japanese blueprints into precise calculation templates, ensuring strict numerical accuracy, and collaborating on technical specifications entirely in Japanese.",
        "Driven by continuous curiosity and self-study, I actively expand my capabilities across modern web development (React, TypeScript, Tailwind CSS) and artificial intelligence (LLMs, intelligent workflows, and modern tooling). I believe combining enterprise-grade desktop discipline with modern web and AI agility creates dependable, forward-looking software.",
      ],
      bridge: {
        title: "Desktop Precision Meets Modern Web & AI",
        description:
          "How two years of enterprise software engineering in Japan powers my work in modern web development and AI experimentation:",
        desktopTitle: "Enterprise Desktop Systems (Delphi & Windows)",
        desktopItems: [
          "Complex mathematical algorithms for construction cost estimation",
          "Translating intricate Japanese engineering specs and PDF drawings",
          "Rigorous unit and integration testing with detailed test sheets",
          "Daily professional collaboration and technical communication in Japanese",
        ],
        webTitle: "Modern Web & AI Integration (React, Tailwind & AI)",
        webItems: [
          "Component-driven architecture with clean, reactive state management",
          "Accessible, responsive interfaces styled with utility-first Tailwind",
          "Integrating modern AI capabilities, prompt engineering, and intelligent features",
          "Continuous self-directed learning in TypeScript, modern tooling, and web standards",
        ],
      },
    },
    experience: [
      {
        company: "Being Myanmar Co., Ltd.",
        role: "Developer and Tester",
        period: "Dec 2021 – Mar 2024",
        project: 'Civil-engineering estimating system "Gaia", used in Japanese construction',
        summary:
          "Developer and tester on Gaia, a civil-engineering estimating system relied upon by Japanese construction firms for precise project estimation and bidding.",
        stack: ["Delphi", "Excel", "Windows"],
        details: [
          "Read Japanese design documents and construction PDF data, then built Excel templates for each estimate type.",
          "Wrote Delphi code that loads template data, calculates estimates and exports them to Excel.",
          "Ran unit and integration tests; wrote specifications, cautions and test sheets in Japanese.",
          "Joined meetings and progress checks in Japanese, in teams of 1-2 people.",
        ],
        showButtonText: "Show what I did",
        hideButtonText: "Hide details",
        accomplishmentsNote: "4 key accomplishments",
      },
    ],
    projects: [
      {
        id: "project-1",
        title: "Civil Construction Estimating System",
        badge: "Desktop & Delphi",
        description:
          "Civil-engineering estimation system module built with Delphi. Automates calculation formulas, processes construction specification sheets, and exports structured templates.",
        tags: ["Delphi", "Excel"],
        codeUrl: "https://github.com/Aung-Kaung-Satt/delphi-civil-estimation",
        liveUrl: "https://example.com/project-one",
        instructions: "Edit this card in DATA.en.projects and DATA.ja.projects in App.tsx",
      },
      {
        id: "project-2",
        title: "Modern Web & Calculation Dashboard",
        badge: "Web & Delphi Integration",
        description:
          "Interactive estimation dashboard connecting desktop calculation principles with a responsive React and Tailwind interface for real-time cost breakdown.",
        tags: ["Delphi", "React", "JavaScript", "Tailwind CSS"],
        codeUrl: "https://github.com/Aung-Kaung-Satt/project-two",
        liveUrl: "https://example.com/project-two",
        instructions: "Edit this card in DATA.en.projects and DATA.ja.projects in App.tsx",
      },
    ],
    skills: [
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
    itField: {
      title: "IT & Technical Qualifications",
      subtitle: "Professional certifications in software engineering, frontend development, and computer science fundamentals.",
      certifications: [
        {
          name: "Meta Front-End Developer Professional Certificate",
          issuer: "Meta (Coursera)",
          date: "Aug 2024",
          badge: "Frontend & Web",
          skills: ["React", "JavaScript", "HTML5 & CSS3", "Version Control", "UX/UI"],
        },
        {
          name: "Fundamental Information Technology Engineer Exam (FE)",
          issuer: "Information-technology Promotion Agency, Japan (IPA / ITPEC)",
          date: "Feb 2022",
          badge: "National Standard",
          skills: ["Algorithms & Data Structures", "Software Engineering", "Databases", "Networks & Security"],
        },
        {
          name: "IT Passport Exam (IP)",
          issuer: "Information-technology Promotion Agency, Japan (IPA / ITPEC)",
          date: "Feb 2019",
          badge: "IT Literacy",
          skills: ["IT Strategy", "System Management", "Security & Compliance"],
        },
      ],
    },
    languageField: {
      title: "Languages & Communication",
      subtitle: "Multilingual proficiency with official language certifications directly integrated.",
      relatedCertificationsLabel: "Official Certifications",
      languages: [
        {
          language: "Japanese",
          symbol: "🗻",
          proficiency: "Professional Working (JLPT N2)",
          details: "2+ years of professional engineering experience in Japan. Handled calculation templates, complex specifications, test documentation, and daily team meetings entirely in Japanese.",
          certifications: [
            {
              name: "JLPT N2 (Japanese-Language Proficiency Test)",
              date: "Aug 2026",
              issuer: "Japan Educational Exchanges and Services",
            },
            {
              name: "TOP J Practical Japanese (Intermediate B)",
              date: "400 / 500",
              issuer: "The Foundation for International Youth Exchange",
            },
            {
              name: "JLPT N3",
              date: "Jan 2024",
              issuer: "Japan Educational Exchanges and Services",
            },
            {
              name: "JLPT N4",
              date: "Aug 2022",
              issuer: "Japan Educational Exchanges and Services",
            },
          ],
        },
        {
          language: "English",
          symbol: "🌐",
          proficiency: "Everyday & Technical Level",
          details: "Comfortable with technical reading, API documentation, developer RFCs, and everyday collaboration.",
          certifications: [],
        },
        {
          language: "Burmese",
          symbol: "🇲🇲",
          proficiency: "Native",
          details: "Native fluency in written and spoken communication.",
          certifications: [],
        },
      ],
    },
    ui: {
      filterLabel: "Filter by technology:",
      allTag: "All",
      noProjectsFound: "No projects found for tag",
      clearFilter: "Clear filter",
      codeLabel: "Source",
      liveLabel: "Live demo",
      responsibilitiesHeading: "Key responsibilities and contributions",
      themeDark: "Dark mode",
      themeLight: "Light mode",
      languageName: "English",
      switchLanguageLabel: "日本語に切替",
    },
  },
  ja: {
    profile: {
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
    navigation: [
      { id: "about", label: "概要" },
      { id: "experience", label: "職務経歴" },
      { id: "projects", label: "プロジェクト" },
      { id: "skills", label: "スキル" },
      { id: "it-field", label: "IT分野・資格" },
      { id: "language-field", label: "語学・資格" },
    ],
    about: {
      paragraphs: [
        "デスクトップアプリケーションからモダンなWebフロントエンドまで、幅広く関心を持つソフトウェア開発者です。これまでの約2年余り、日本の土木・建設業界で広く導入されている積算システム「Gaia（ガイア）」の開発および品質検証業務に携わってきました。",
        "実務では、複雑な積算基準や日本語の設計図面・PDF資料を的確に読解し、誤差のない高精度なExcel計算テンプレートの作成を担当しました。また、不具合を早期に発見・防止するための単体・結合テストの実施、日本語での仕様書やテスト手順書の作成など、品質管理を徹底する開発プロセスを経験しました。",
        "現在は持ち前の学習意欲を活かし、React、TypeScript、Tailwind CSSを用いたモダンWebフロントエンド開発に取り組んでいます。さらに、LLMなどのAIツールを活用した開発効率化や機能実装についても積極的に探求しています。デスクトップ開発で培った『正確で堅牢なモノづくり』の姿勢を、WebやAI領域でも発揮していきたいと考えています。",
      ],
      bridge: {
        title: "デスクトップ開発の経験をモダンWeb・AI領域へ応用",
        description:
          "日本向け業務システム開発で培った強みを、WebフロントエンドやAI技術の習得に活かしています：",
        desktopTitle: "業務向けデスクトップ開発 (Delphi & Windows)",
        desktopItems: [
          "土木積算における複雑な計算基準と、厳密な数値計算処理の実装",
          "日本語の仕様書・建設図面・PDF資料の的確な読解とテンプレート作成",
          "単体・結合テストの実施および日本語によるテスト仕様書の作成",
          "少人数チームにおける毎日の日本語朝会・進捗報告および課題共有",
        ],
        webTitle: "モダンWeb・AI技術 (React, Tailwind & AI)",
        webItems: [
          "可読性と保守性を意識した、再利用性の高いコンポーネント設計",
          "Tailwind CSSを活用した、マルチデバイス対応のレスポンシブUI実装",
          "LLMやAIツールの活用による開発効率化と新しい機能表現の探求",
          "TypeScriptやモダンフロントエンド技術の継続的なキャッチアップ",
        ],
      },
    },
    experience: [
      {
        company: "Being Myanmar Co., Ltd. (株式会社ビーイング ミャンマー)",
        role: "開発・テストエンジニア",
        period: "2021年12月 – 2024年3月",
        project: "日本の土木建設業界向け土木積算システム「Gaia」",
        summary:
          "日本の土木・建設業界で広く利用されている積算システム「Gaia」の開発および品質検証を担当しました。",
        stack: ["Delphi", "Excel", "Windows"],
        details: [
          "日本語の設計仕様書や図面・PDF資料を読解し、自動積算用Excelテンプレートを作成。",
          "テンプレートからデータを読み込み、集計・演算およびExcel出力を行うDelphiプログラムを開発・改修。",
          "動作検証・不具合修正を行い、日本語での仕様書・テスト仕様書・特記事項のドキュメントを作成。",
          "少人数のチームにて、日本語での進捗管理や技術ミーティングを円滑に実施。",
        ],
        showButtonText: "担当業務の詳細を見る",
        hideButtonText: "担当業務の詳細を閉じる",
        accomplishmentsNote: "主な担当業務 4項目",
      },
    ],
    projects: [
      {
        id: "project-1",
        title: "土木積算・自動計算システム",
        badge: "デスクトップ・Delphi",
        description:
          "Delphiで開発された土木建設向け積算システムモジュール。積算基準に基づく複雑な計算式を自動処理し、Excelテンプレートへ正確に出力します。",
        tags: ["Delphi", "Excel"],
        codeUrl: "https://github.com/Aung-Kaung-Satt/delphi-civil-estimation",
        liveUrl: "https://example.com/project-one",
        instructions: "App.tsx の DATA.ja.projects でこのカードを編集できます",
      },
      {
        id: "project-2",
        title: "インタラクティブ積算・Webダッシュボード",
        badge: "Web & Delphi 連携",
        description:
          "Delphiで培った積算ロジックとReact・Tailwind CSSのモダンWeb技術を融合させた、リアルタイム集計と直感的なUIを備えたWebアプリケーション。",
        tags: ["Delphi", "React", "JavaScript", "Tailwind CSS"],
        codeUrl: "https://github.com/Aung-Kaung-Satt/project-two",
        liveUrl: "https://example.com/project-two",
        instructions: "App.tsx の DATA.ja.projects でこのカードを編集できます",
      },
    ],
    skills: [
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
    itField: {
      title: "IT分野・認定資格",
      subtitle: "ソフトウェア開発および情報工学の基礎知識を証明する認定資格です。",
      certifications: [
        {
          name: "Meta フロントエンド開発者 プロフェッショナル認定証",
          issuer: "Meta (Coursera)",
          date: "2024年8月",
          badge: "Web・フロントエンド",
          skills: ["React", "JavaScript", "HTML5 & CSS3", "Gitバージョン管理", "UI/UX設計"],
        },
        {
          name: "基本情報技術者試験 (FE / ITPEC)",
          issuer: "情報処理推進機構 (IPA) / ITPEC",
          date: "2022年2月",
          badge: "国家試験相当",
          skills: ["アルゴリズムとデータ構造", "ソフトウェア設計", "データベース", "ネットワーク・セキュリティ"],
        },
        {
          name: "ITパスポート試験 (IP / ITPEC)",
          issuer: "情報処理推進機構 (IPA) / ITPEC",
          date: "2019年2月",
          badge: "情報処理リテラシー",
          skills: ["ITストラテジ", "システムマネジメント", "コンプライアンス・セキュリティ"],
        },
      ],
    },
    languageField: {
      title: "語学分野・公式資格",
      subtitle: "実務を通じた語学運用力と、取得済みの公式語学資格です。",
      relatedCertificationsLabel: "関連する公式資格",
      languages: [
        {
          language: "日本語",
          symbol: "🗻",
          proficiency: "ビジネスレベル (JLPT N2)",
          details: "日本の土木積算システム開発現場において、2年以上の実務経験があります。仕様書や図面の読解、Excelテンプレートやテスト仕様書の作成、日常的な進捗会議などをすべて日本語で遂行可能です。",
          certifications: [
            {
              name: "日本語能力試験 N2 (JLPT N2)",
              date: "2026年8月",
              issuer: "日本国際教育支援協会 (JEES)",
            },
            {
              name: "TOP J 実用日本語運用能力試験 中級B",
              date: "400 / 500点",
              issuer: "実用日本語運用能力試験実施委員会",
            },
            {
              name: "日本語能力試験 N3 (JLPT N3)",
              date: "2024年1月",
              issuer: "日本国際教育支援協会 (JEES)",
            },
            {
              name: "日本語能力試験 N4 (JLPT N4)",
              date: "2022年8月",
              issuer: "日本国際教育支援協会 (JEES)",
            },
          ],
        },
        {
          language: "英語",
          symbol: "🌐",
          proficiency: "日常会話・技術英語レベル",
          details: "技術ドキュメントやAPIリファレンスの読解、日常的な技術ディスカッションに対応可能です。",
          certifications: [],
        },
        {
          language: "ビルマ語（ミャンマー語）",
          symbol: "🇲🇲",
          proficiency: "母語",
          details: "母語（ネイティブ）。口頭および文書での高度なコミュニケーションに対応可能です。",
          certifications: [],
        },
      ],
    },
    ui: {
      filterLabel: "技術で絞り込み:",
      allTag: "すべて",
      noProjectsFound: "該当するプロジェクトが見つかりませんでした:",
      clearFilter: "絞り込みを解除",
      codeLabel: "ソースコード",
      liveLabel: "公開サイト",
      responsibilitiesHeading: "主な担当業務と実績",
      themeDark: "ダークモード",
      themeLight: "ライトモード",
      languageName: "日本語",
      switchLanguageLabel: "English",
    },
  },
};

/**
 * Clean SVG Brand and Action Icons
 */
function SocialIcon({ type, className = "h-4 w-4" }: { type: string; className?: string }) {
  if (type === "linkedin") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V10.13H5.06v8.37h2.8z" />
      </svg>
    );
  }
  if (type === "email") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

/**
 * Modern Staggered Entrance & Subtle Blur-In Variants (Linear / Apple style)
 */
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

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isExperienceExpanded, setIsExperienceExpanded] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const mobileNavRef = useRef<HTMLDivElement>(null);
  const isNavClickingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const currentData = DATA[lang];

  // Derive unique tags for project filter chips (excluding OS-level platform "Windows")
  const allProjectTags = [
    currentData.ui.allTag,
    ...Array.from(new Set(currentData.projects.flatMap((project) => project.tags))).filter(
      (tag) => tag.toLowerCase() !== "windows"
    ),
  ];

  // Reset filter if language switches and tag doesn't match
  useEffect(() => {
    setSelectedTag(currentData.ui.allTag);
  }, [lang]);

  // Filter projects based on selected tag
  const filteredProjects =
    selectedTag === currentData.ui.allTag
      ? currentData.projects
      : currentData.projects.filter((project) => project.tags.includes(selectedTag));

  // Automatically scroll mobile horizontal nav bar to center the active item (e.g. language-field)
  useEffect(() => {
    if (!mobileNavRef.current) return;
    const container = mobileNavRef.current;
    const activeTab = container.querySelector<HTMLElement>(`[data-nav-id="${activeSection}"]`);
    if (activeTab) {
      const activeRect = activeTab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const currentScroll = container.scrollLeft;
      const tabCenter = activeRect.left - containerRect.left + currentScroll + activeRect.width / 2;
      const targetScrollLeft = tabCenter - containerRect.width / 2;

      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  // Accurate scrollspy implementation based on actual viewport scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isNavClickingRef.current) return;

      const mainNav = document.querySelector('nav[aria-label="Main navigation"]');
      const headerHeight = mainNav ? mainNav.getBoundingClientRect().height : 70;
      const triggerLine = headerHeight + 50;

      // 1. Check if user reached near the bottom of the page
      // This guarantees the bottom section (e.g. "language-field") activates cleanly
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        const lastSection = currentData.navigation[currentData.navigation.length - 1];
        if (lastSection) {
          setActiveSection(lastSection.id);
        }
        return;
      }

      // If user is at or near the top of the page, ensure "about" is active
      if (window.scrollY <= 60) {
        setActiveSection("about");
        return;
      }

      // 2. Scan section positions in DOM order
      const sectionElements = currentData.navigation
        .map((item) => ({
          id: item.id,
          el: document.getElementById(item.id),
        }))
        .filter((item): item is { id: string; el: HTMLElement } => item.el !== null);

      let currentActiveId = sectionElements[0]?.id || "about";

      for (const section of sectionElements) {
        const rect = section.el.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          currentActiveId = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [lang, currentData.navigation]);

  // Smooth scroll handler with programmatic lock and accurate header offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    // Immediately highlight the clicked section
    setActiveSection(id);
    isNavClickingRef.current = true;
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    // Lock scrollspy for 850ms so intermediate sections don't steal the active state while smooth scrolling
    scrollTimeoutRef.current = window.setTimeout(() => {
      isNavClickingRef.current = false;
    }, 850);

    // Measure the exact height of the sticky main navigation bar
    const mainNav = document.querySelector('nav[aria-label="Main navigation"]');
    const headerHeight = mainNav ? mainNav.getBoundingClientRect().height : 64;

    // Generous top clearance so the full title and divider are completely visible
    const clearance = headerHeight + 16;

    const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const targetScrollY = Math.max(0, elementTop - clearance);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: targetScrollY,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    if (window.history.pushState) {
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // Scroll directly to the very top div (the nav bar container above the header)
  const scrollToTop = () => {
    setActiveSection("about");
    isNavClickingRef.current = true;
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      isNavClickingRef.current = false;
    }, 850);

    const topDiv = document.getElementById("site-top");
    if (topDiv) {
      topDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    document.body.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });

    // Also reset desktop left sidebar if it was scrolled internally
    const sidebar = document.querySelector("header");
    if (sidebar) {
      sidebar.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }

    if (window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ja" : "en"));
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen relative transition-colors duration-200 antialiased ${
        isDarkMode
          ? "bg-slate-950 text-slate-100 selection:bg-indigo-900 selection:text-indigo-200"
          : "bg-slate-50 text-slate-800 selection:bg-indigo-100 selection:text-indigo-900"
      }`}
    >
      {/* React Bits Pro Backgrounds: Isolated canvas container */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {isDarkMode ? (
          <Aurora
            colorStops={["#7cff67", "#B497CF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        ) : (
          <DotField
            dotRadius={1.5}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            gradientFrom="rgba(99, 102, 241, 0.4)"
            gradientTo="rgba(168, 85, 247, 0.25)"
            glowColor="rgba(99, 102, 241, 0.15)"
          />
        )}
      </div>

      {/* Always-Visible Sticky Main Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -12, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Main navigation"
        className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors ${
          isDarkMode
            ? "border-slate-800/80 bg-slate-950/85 text-slate-200 shadow-xs"
            : "border-slate-200/80 bg-white/85 text-slate-800 shadow-xs"
        }`}
      >
        <div id="site-top" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Left: Brand / Logo */}
            <div className="flex items-center space-x-3">
              <a
                href="#site-top"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                aria-label={currentData.profile.name}
                title={currentData.profile.name}
                className="flex items-center group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-lg p-1 cursor-pointer"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-xs group-hover:bg-indigo-500 transition-colors">
                  AK
                </span>
              </a>
            </div>

            {/* Center: Desktop Horizontal Navigation Links (md and up) */}
            <ul className="hidden md:flex items-center space-x-1 text-xs">
              {currentData.navigation.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="relative">
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`relative block px-3 py-1.5 rounded-lg text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                        isActive
                          ? "text-white"
                          : isDarkMode
                          ? "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeTopNav"
                          className="absolute inset-0 bg-indigo-600 rounded-lg shadow-xs -z-0"
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Right: Quick Controls (Language & Theme Toggles) */}
            <div className="flex items-center space-x-2">
              {/* Language Switch Button */}
              <motion.button
                whileTap={{ scale: 0.94 }}
                type="button"
                onClick={toggleLanguage}
                aria-label={`Switch to ${lang === "en" ? "Japanese" : "English"}`}
                className={`inline-flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  isDarkMode
                    ? "border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {lang === "en" ? (
                  <>
                    <span role="img" aria-label="Mount Fuji" className="text-sm select-none leading-none">
                      🗻
                    </span>
                    <span>日本語</span>
                  </>
                ) : (
                  <>
                    <span role="img" aria-label="Global" className="text-sm select-none leading-none">
                      🌐
                    </span>
                    <span>English</span>
                  </>
                )}
              </motion.button>

              {/* Theme Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={toggleTheme}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                className={`p-2 rounded-lg border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 overflow-hidden relative ${
                  isDarkMode
                    ? "border-slate-800 bg-slate-900 text-amber-300 hover:bg-slate-800"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDarkMode ? (
                    <motion.div
                      key="top-dark-sun"
                      initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="flex items-center justify-center"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="top-light-moon"
                      initial={{ rotate: 90, scale: 0.4, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: -90, scale: 0.4, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="flex items-center justify-center"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile/Tablet Horizontal Scrollable Section Links (< md) */}
          <div
            ref={mobileNavRef}
            className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50 py-2 overflow-x-auto scrollbar-none"
          >
            <ul className="flex space-x-1 text-xs whitespace-nowrap px-1">
              {currentData.navigation.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li
                    key={item.id}
                    data-nav-id={item.id}
                    className="relative shrink-0"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`relative block px-3 py-1 rounded-lg text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                        isActive
                          ? "text-white"
                          : isDarkMode
                          ? "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeMobileNav"
                          className="absolute inset-0 bg-indigo-600 rounded-lg shadow-xs -z-0"
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Desktop Sticky Left Sidebar */}
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
                  {currentData.profile.name}
                </motion.h1>
                {currentData.profile.katakanaName && (
                  <motion.p
                    variants={fadeInUpBlur}
                    className={`mt-1.5 text-base sm:text-lg font-semibold tracking-wide ${
                      isDarkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    （{currentData.profile.katakanaName}）
                  </motion.p>
                )}
                <motion.p
                  variants={fadeInUpBlur}
                  className={`mt-2.5 text-base font-medium leading-snug ${
                    isDarkMode ? "text-indigo-400" : "text-indigo-700"
                  }`}
                >
                  {currentData.profile.role}
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
                    {currentData.profile.status}
                  </span>
                </motion.div>

                <motion.p
                  variants={fadeInUpBlur}
                  className={`mt-4 text-sm leading-relaxed max-w-md ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {currentData.profile.intro}
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
                    {currentData.profile.links.map((link) => (
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

          {/* Right Column: Scrolling Content */}
          <motion.main
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-7/12 py-8 lg:py-20 space-y-16"
          >
            {/* About Section */}
            <section id="about" aria-labelledby="about-heading" className="scroll-mt-36 lg:scroll-mt-12">
              <div className="flex items-center space-x-3 mb-6">
                <h2
                  id="about-heading"
                  className={`text-xl font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {currentData.navigation[0].label}
                </h2>
                <div
                  className={`h-px flex-1 ${
                    isDarkMode ? "bg-slate-800" : "bg-slate-200"
                  }`}
                />
              </div>

              <div
                className={`space-y-4 text-sm leading-relaxed ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {currentData.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              aria-labelledby="experience-heading"
              className="scroll-mt-36 lg:scroll-mt-12"
            >
              <div className="flex items-center space-x-3 mb-6">
                <h2
                  id="experience-heading"
                  className={`text-xl font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {currentData.navigation[1].label}
                </h2>
                <div
                  className={`h-px flex-1 ${
                    isDarkMode ? "bg-slate-800" : "bg-slate-200"
                  }`}
                />
              </div>

              <div className="space-y-6">
                {currentData.experience.map((exp, index) => (
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
                        aria-expanded={isExperienceExpanded}
                        aria-controls="experience-details"
                        onClick={() => setIsExperienceExpanded((prev) => !prev)}
                        className={`inline-flex items-center text-xs font-medium px-3.5 py-2 rounded-lg border transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                          isExperienceExpanded
                            ? isDarkMode
                              ? "bg-indigo-950/60 text-indigo-300 border-indigo-800/80 shadow-xs"
                              : "bg-indigo-100/90 text-indigo-800 border-indigo-200 shadow-xs"
                            : isDarkMode
                            ? "bg-slate-800 text-indigo-300 border-transparent hover:bg-slate-700"
                            : "bg-indigo-50/80 text-indigo-700 border-transparent hover:bg-indigo-100"
                        }`}
                      >
                        <span>
                          {isExperienceExpanded
                            ? exp.hideButtonText
                            : exp.showButtonText}
                        </span>
                        <svg
                          className={`ml-2 h-3.5 w-3.5 transition-transform duration-300 ${
                            isExperienceExpanded ? "rotate-180" : ""
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
                      {isExperienceExpanded && (
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
                                {currentData.ui.responsibilitiesHeading}
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

            {/* Projects Section */}
            <section
              id="projects"
              aria-labelledby="projects-heading"
              className="scroll-mt-36 lg:scroll-mt-12"
            >
              <div className="flex items-center space-x-3 mb-6">
                <h2
                  id="projects-heading"
                  className={`text-xl font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {currentData.navigation[2].label}
                </h2>
                <div
                  className={`h-px flex-1 ${
                    isDarkMode ? "bg-slate-800" : "bg-slate-200"
                  }`}
                />
              </div>

              {/* Technology Filter Chips */}
              <div className="mb-6 space-y-2">
                <span
                  className={`text-xs font-medium ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {currentData.ui.filterLabel}
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
                    <motion.article
                      layout
                      key={project.id}
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

                      <div
                        className={`px-5 py-3 border-t flex items-center justify-between text-xs ${
                          isDarkMode
                            ? "border-slate-800 bg-slate-950/40"
                            : "border-slate-100 bg-slate-50/60"
                        }`}
                      >
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
                          <span>{currentData.ui.codeLabel}</span>
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
                          <span>{currentData.ui.liveLabel}</span>
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
                      </div>
                    </motion.article>
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
                    {currentData.ui.noProjectsFound} "{selectedTag}".
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedTag(currentData.ui.allTag)}
                    className="mt-3 text-xs font-medium text-indigo-600 hover:text-indigo-700 underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-lg px-2 py-1"
                  >
                    {currentData.ui.clearFilter}
                  </button>
                </div>
              )}
            </section>

            {/* Skills Section */}
            <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-36 lg:scroll-mt-12">
              <div className="flex items-center space-x-3 mb-6">
                <h2
                  id="skills-heading"
                  className={`text-xl font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {currentData.navigation[3].label}
                </h2>
                <div
                  className={`h-px flex-1 ${
                    isDarkMode ? "bg-slate-800" : "bg-slate-200"
                  }`}
                />
              </div>

              <div className="space-y-4">
                {currentData.skills.map((skillGroup) => (
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

            {/* IT Field Section */}
            <section
              id="it-field"
              aria-labelledby="it-field-heading"
              className="scroll-mt-36 lg:scroll-mt-12"
            >
              <div className="flex items-center space-x-3 mb-2">
                <h2
                  id="it-field-heading"
                  className={`text-xl font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {currentData.itField.title}
                </h2>
                <div
                  className={`h-px flex-1 ${
                    isDarkMode ? "bg-slate-800" : "bg-slate-200"
                  }`}
                />
              </div>
              <p
                className={`text-xs mb-6 ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {currentData.itField.subtitle}
              </p>

              <div className="space-y-4">
                {currentData.itField.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`border p-4 sm:p-5 rounded-lg shadow-xs transition-colors flex flex-col justify-between gap-3 ${
                      isDarkMode
                        ? "border-slate-800 bg-slate-900 hover:border-slate-700"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3
                            className={`text-sm font-semibold ${
                              isDarkMode ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {cert.name}
                          </h3>
                          {cert.badge && (
                            <span
                              className={`text-[10px] font-medium font-mono px-2 py-0.5 rounded border ${
                                isDarkMode
                                  ? "text-indigo-300 bg-indigo-950/60 border-indigo-800/80"
                                  : "text-indigo-700 bg-indigo-50 border-indigo-200"
                              }`}
                            >
                              {cert.badge}
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-xs mt-0.5 ${
                            isDarkMode ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {cert.issuer}
                        </p>
                      </div>
                      <time
                        className={`text-xs font-medium px-2.5 py-1 rounded-lg border tabular-nums self-start sm:self-auto shrink-0 ${
                          isDarkMode
                            ? "text-indigo-300 bg-slate-800 border-slate-700"
                            : "text-indigo-700 bg-indigo-50 border-indigo-100"
                        }`}
                      >
                        {cert.date}
                      </time>
                    </div>

                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`text-[11px] px-2 py-0.5 rounded-md border ${
                              isDarkMode
                                ? "bg-slate-950/60 text-slate-300 border-slate-800"
                                : "bg-slate-50 text-slate-700 border-slate-200"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Language Field Section */}
            <section
              id="language-field"
              aria-labelledby="language-field-heading"
              className="scroll-mt-36 lg:scroll-mt-12"
            >
              <div className="flex items-center space-x-3 mb-2">
                <h2
                  id="language-field-heading"
                  className={`text-xl font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {currentData.languageField.title}
                </h2>
                <div
                  className={`h-px flex-1 ${
                    isDarkMode ? "bg-slate-800" : "bg-slate-200"
                  }`}
                />
              </div>
              <p
                className={`text-xs mb-6 ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {currentData.languageField.subtitle}
              </p>

              <div className="grid grid-cols-1 gap-4">
                {currentData.languageField.languages.map((langItem) => (
                  <div
                    key={langItem.language}
                    className={`border p-4 sm:p-5 rounded-lg shadow-xs flex flex-col justify-between transition-colors ${
                      isDarkMode
                        ? "border-slate-800 bg-slate-900"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                        <div className="flex items-center space-x-2">
                          {langItem.symbol && (
                            <span className="text-base select-none leading-none" role="img" aria-hidden="true">
                              {langItem.symbol}
                            </span>
                          )}
                          <h3
                            className={`text-sm font-semibold ${
                              isDarkMode ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {langItem.language}
                          </h3>
                        </div>
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-lg border tabular-nums shrink-0 self-start sm:self-auto leading-tight ${
                            isDarkMode
                              ? "text-indigo-300 bg-slate-800 border-slate-700"
                              : "text-indigo-700 bg-indigo-50 border-indigo-100"
                          }`}
                        >
                          {langItem.proficiency}
                        </span>
                      </div>

                      <p
                        className={`mt-2.5 text-xs leading-relaxed ${
                          isDarkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {langItem.details}
                      </p>

                      {/* Related Certifications directly under the language */}
                      {langItem.certifications && langItem.certifications.length > 0 && (
                        <div className="mt-4 pt-3.5 border-t border-dashed border-slate-200 dark:border-slate-800">
                          <span
                            className={`text-[11px] font-semibold uppercase tracking-wider block mb-2 ${
                              isDarkMode ? "text-indigo-400" : "text-indigo-700"
                            }`}
                          >
                            {currentData.languageField.relatedCertificationsLabel}
                          </span>
                          <ul className="grid grid-cols-1 gap-2.5">
                            {langItem.certifications.map((cert, certIdx) => (
                              <li
                                key={certIdx}
                                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 text-xs sm:text-sm p-3 rounded-md border transition-colors ${
                                  isDarkMode
                                    ? "bg-slate-950/70 border-slate-800 text-slate-200"
                                    : "bg-slate-50 border-slate-200/80 text-slate-800"
                                }`}
                              >
                                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                                  <span
                                    className={`font-semibold ${
                                      isDarkMode ? "text-slate-100" : "text-slate-900"
                                    }`}
                                  >
                                    {cert.name}
                                  </span>
                                  {cert.issuer && (
                                    <span
                                      className={`text-xs ${
                                        isDarkMode ? "text-slate-400" : "text-slate-500"
                                      }`}
                                    >
                                      ({cert.issuer})
                                    </span>
                                  )}
                                </div>
                                <time
                                  className={`text-xs font-mono shrink-0 font-medium tabular-nums ${
                                    isDarkMode ? "text-indigo-400" : "text-indigo-600"
                                  }`}
                                >
                                  {cert.date}
                                </time>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Unified Footer with Copyright Mark */}
            <footer
              className={`pt-10 pb-8 border-t text-xs transition-colors ${
                isDarkMode
                  ? "border-slate-800 text-slate-400"
                  : "border-slate-200 text-slate-600"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p>
                  © {new Date().getFullYear()} {currentData.profile.name}.{" "}
                  {lang === "en" ? "All rights reserved." : "無断転載を禁じます。"}
                </p>
                <div className="flex items-center space-x-4">
                  <span>
                    {lang === "en"
                      ? "Designed & built with React and Tailwind CSS"
                      : "React & Tailwind CSS で制作"}
                  </span>
                  <button
                    type="button"
                    onClick={scrollToTop}
                    aria-label={lang === "en" ? "Back to top" : "ページ上部へ"}
                    className={`group relative overflow-hidden bg-transparent cursor-pointer transition-colors duration-250 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[104px] sm:w-[110px] lg:w-[126px] h-[38px] flex items-center shrink-0 before:content-[''] before:absolute before:h-[2px] before:bottom-0 before:left-0 before:w-full before:scale-x-0 before:origin-bottom-right before:bg-current before:transition-transform before:duration-250 before:ease-out hover:before:scale-x-100 hover:before:origin-bottom-left ${
                      isDarkMode
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-600 hover:text-indigo-800"
                    }`}
                  >
                    {/* Primary text layer */}
                    <div className="absolute inset-0 flex items-center pr-4 sm:pr-4 lg:pr-5 font-semibold text-xs sm:text-sm tracking-tight pointer-events-none select-none">
                      {lang === "en" ? (
                        <>
                          <span className="inline-block transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[0ms]">
                            Back
                          </span>
                          <span className="inline-block ml-1 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[50ms]">
                            to
                          </span>
                          <span className="inline-block ml-1 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[100ms]">
                            top
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="inline-block transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[0ms]">
                            ページ
                          </span>
                          <span className="inline-block ml-0.5 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[50ms]">
                            上部
                          </span>
                          <span className="inline-block ml-0.5 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[100ms]">
                            へ
                          </span>
                        </>
                      )}
                    </div>

                    {/* Clone text layer (slides in from bottom) */}
                    <div className="absolute inset-0 flex items-center pr-4 sm:pr-4 lg:pr-5 font-semibold text-xs sm:text-sm tracking-tight pointer-events-none select-none">
                      {lang === "en" ? (
                        <>
                          <span className="inline-block translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[100ms]">
                            Back
                          </span>
                          <span className="inline-block ml-1 translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[150ms]">
                            to
                          </span>
                          <span className="inline-block ml-1 translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[200ms]">
                            top
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="inline-block translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[100ms]">
                            ページ
                          </span>
                          <span className="inline-block ml-0.5 translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[150ms]">
                            上部
                          </span>
                          <span className="inline-block ml-0.5 translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[200ms]">
                            へ
                          </span>
                        </>
                      )}
                    </div>

                    {/* Arrow icon that rotates to point straight up on hover */}
                    <svg
                      strokeWidth="2.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="absolute right-0.5 sm:right-1 top-1/2 -translate-y-1/2 w-4 h-4 transition-transform duration-250 ease-out -rotate-45 group-hover:-rotate-90 pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </footer>
          </motion.main>
        </div>
      </div>
    </div>
  );
}
