export type Language = "en" | "ja";

export type SocialLinkType = "linkedin" | "email" | "github" | "external";

export interface SocialLink {
  label: string;
  url: string;
  note: string;
  type: SocialLinkType;
}

export interface ProfileData {
  name: string;
  katakanaName?: string;
  role: string;
  intro: string;
  status: string;
  email: string;
  links: SocialLink[];
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface BridgeItem {
  title: string;
  description: string;
  desktopTitle: string;
  desktopItems: string[];
  webTitle: string;
  webItems: string[];
}

export interface AboutData {
  paragraphs: string[];
  bridge?: BridgeItem;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  project: string;
  summary: string;
  stack: string[];
  details: string[];
  showButtonText: string;
  hideButtonText: string;
  accomplishmentsNote: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
  codeUrl: string;
  liveUrl: string;
  instructions?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ITCertification {
  name: string;
  issuer: string;
  date: string;
  badge: string;
  skills: string[];
  url?: string;
  urlLabel?: string;
}

export interface ITFieldData {
  title: string;
  subtitle: string;
  certifications: ITCertification[];
}

export interface LanguageCertification {
  name: string;
  date: string;
  issuer: string;
}

export interface LanguageItem {
  language: string;
  symbol: string;
  proficiency: string;
  details: string;
  certifications: LanguageCertification[];
}

export interface LanguageFieldData {
  title: string;
  subtitle: string;
  relatedCertificationsLabel: string;
  languages: LanguageItem[];
}

export interface UIData {
  filterLabel: string;
  allTag: string;
  noProjectsFound: string;
  clearFilter: string;
  codeLabel: string;
  liveLabel: string;
  responsibilitiesHeading: string;
  themeDark: string;
  themeLight: string;
  languageName: string;
  switchLanguageLabel: string;
}

export interface PortfolioData {
  profile: ProfileData;
  navigation: NavigationItem[];
  about: AboutData;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  itField: ITFieldData;
  languageField: LanguageFieldData;
  ui: UIData;
}
