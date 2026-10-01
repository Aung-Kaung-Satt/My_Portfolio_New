import { Language, PortfolioData } from "./types";
import { profileData, navigationData } from "./profile";
import { aboutData } from "./about";
import { experienceData } from "./experience";
import { projectsData } from "./projects";
import { skillsData } from "./skills";
import { itFieldData } from "./itField";
import { languageFieldData } from "./languageField";
import { uiData } from "./ui";

export * from "./types";
export * from "./profile";
export * from "./about";
export * from "./experience";
export * from "./projects";
export * from "./skills";
export * from "./itField";
export * from "./languageField";
export * from "./ui";

export const DATA: Record<Language, PortfolioData> = {
  en: {
    profile: profileData.en,
    navigation: navigationData.en,
    about: aboutData.en,
    experience: experienceData.en,
    projects: projectsData.en,
    skills: skillsData.en,
    itField: itFieldData.en,
    languageField: languageFieldData.en,
    ui: uiData.en,
  },
  ja: {
    profile: profileData.ja,
    navigation: navigationData.ja,
    about: aboutData.ja,
    experience: experienceData.ja,
    projects: projectsData.ja,
    skills: skillsData.ja,
    itField: itFieldData.ja,
    languageField: languageFieldData.ja,
    ui: uiData.ja,
  },
};
