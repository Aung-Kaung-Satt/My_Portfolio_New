import { ITFieldData } from "./types";

export const itFieldData: Record<"en" | "ja", ITFieldData> = {
  en: {
    title: "IT & Technical Qualifications",
    subtitle: "Professional certifications in software engineering, frontend development, and computer science fundamentals.",
    certifications: [
      {
        name: "Meta Front-End Developer Professional Certificate",
        issuer: "Meta (Coursera)",
        date: "Aug 2024",
        badge: "Frontend & Web",
        skills: ["React", "JavaScript", "HTML5 & CSS3", "Version Control", "UX/UI"],
        url: "https://www.coursera.org/account/accomplishments/professional-cert/ASE12MXZOGKA",
        urlLabel: "Credential",
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
  ja: {
    title: "IT分野・認定資格",
    subtitle: "ソフトウェア開発および情報工学の基礎知識を証明する認定資格です。",
    certifications: [
      {
        name: "Meta フロントエンド開発者 プロフェッショナル認定証",
        issuer: "Meta (Coursera)",
        date: "2024年8月",
        badge: "Web・フロントエンド",
        skills: ["React", "JavaScript", "HTML5 & CSS3", "Gitバージョン管理", "UI/UX設計"],
        url: "https://www.coursera.org/account/accomplishments/professional-cert/ASE12MXZOGKA",
        urlLabel: "認証",
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
};
