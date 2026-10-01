import { ProjectItem } from "./types";

export const projectsData: Record<"en" | "ja", ProjectItem[]> = {
  en: [
    {
      id: "project-1",
      title: "Civil Construction Estimating System",
      badge: "Desktop & Delphi",
      description:
        "Civil-engineering estimation system module built with Delphi. Automates calculation formulas, processes construction specification sheets, and exports structured templates.",
      tags: ["Delphi", "Excel"],
      codeUrl: "",
      liveUrl: "",
      instructions: "Edit this card in DATA.en.projects and DATA.ja.projects in App.tsx",
    },
    {
      id: "project-2",
      title: "Coffee Shop Web Application",
      badge: "React & Tailwind CSS",
      description:
        "A responsive and welcoming coffee shop website featuring fresh coffee selections, bakery menu highlights, shop information, customer FAQs, and an online ordering form.",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      codeUrl: "https://github.com/Aung-Kaung-Satt/CoffeeShop_portfolio",
      liveUrl: "https://aung-kaung-satt.github.io/CoffeeShop_portfolio/",
      instructions: "Coffee Shop portfolio project",
    },
  ],
  ja: [
    {
      id: "project-1",
      title: "土木積算・自動計算システム",
      badge: "デスクトップ・Delphi",
      description:
        "Delphiで開発された土木建設向け積算システムモジュール。積算基準に基づく複雑な計算式を自動処理し、Excelテンプレートへ正確に出力します。",
      tags: ["Delphi", "Excel"],
      codeUrl: "",
      liveUrl: "",
      instructions: "App.tsx の DATA.ja.projects でこのカードを編集できます",
    },
    {
      id: "project-2",
      title: "コーヒーショップ Webアプリケーション",
      badge: "React & Tailwind CSS",
      description:
        "おすすめのこだわりコーヒーやベーカリーメニュー、店舗案内、よくある質問、オンライン注文フォームを備えた、シンプルで親しみやすいカフェのWebサイトです。",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      codeUrl: "https://github.com/Aung-Kaung-Satt/CoffeeShop_portfolio",
      liveUrl: "https://aung-kaung-satt.github.io/CoffeeShop_portfolio/",
      instructions: "Coffee Shop ポートフォリオプロジェクト",
    },
  ],
};
