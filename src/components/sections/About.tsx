import { AboutData, Language } from "../../data/types";
import { aboutData } from "../../data/about";
import { navigationData } from "../../data/profile";
import { SectionTitle } from "../ui/SectionTitle";

export interface AboutProps {
  about?: AboutData;
  title?: string;
  lang?: Language;
  isDarkMode: boolean;
}

export function About({ about, title, lang = "en", isDarkMode }: AboutProps) {
  const currentAbout = about || aboutData[lang];
  const currentTitle = title || navigationData[lang][0].label;

  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-36 lg:scroll-mt-12">
      <SectionTitle id="about" title={currentTitle} isDarkMode={isDarkMode} />

      <div
        className={`space-y-4 text-sm leading-relaxed ${
          isDarkMode ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {currentAbout.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
