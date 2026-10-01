import { ExperienceItem } from "./types";

export const experienceData: Record<"en" | "ja", ExperienceItem[]> = {
  en: [
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
  ja: [
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
};
