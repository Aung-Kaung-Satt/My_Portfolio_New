import { LanguageFieldData } from "./types";

export const languageFieldData: Record<"en" | "ja", LanguageFieldData> = {
  en: {
    title: "Languages & Communication",
    subtitle: "Multilingual proficiency with official language certifications directly integrated.",
    relatedCertificationsLabel: "Official Certifications",
    languages: [
      {
        language: "Japanese",
        symbol: "🗻",
        proficiency: "Professional Working (JLPT N2)",
        details:
          "2+ years of professional engineering experience in Japan. Handled calculation templates, complex specifications, test documentation, and daily team meetings entirely in Japanese.",
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
        details:
          "Comfortable with technical reading, API documentation, developer RFCs, and everyday collaboration.",
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
  ja: {
    title: "語学分野・公式資格",
    subtitle: "実務を通じた語学運用力と、取得済みの公式語学資格です。",
    relatedCertificationsLabel: "関連する公式資格",
    languages: [
      {
        language: "日本語",
        symbol: "🗻",
        proficiency: "ビジネスレベル (JLPT N2)",
        details:
          "日本の土木積算システム開発現場において、2年以上の実務経験があります。仕様書や図面の読解、Excelテンプレートやテスト仕様書の作成、日常的な進捗会議などをすべて日本語で遂行可能です。",
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
        details:
          "技術ドキュメントやAPIリファレンスの読解、日常的な技術ディスカッションに対応可能です。",
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
};
