import { AboutData } from "./types";

export const aboutData: Record<"en" | "ja", AboutData> = {
  en: {
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
  ja: {
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
};
