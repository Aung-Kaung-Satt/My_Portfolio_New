import { UIData } from "./types";

export const uiData: Record<"en" | "ja", UIData> = {
  en: {
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
  ja: {
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
};
