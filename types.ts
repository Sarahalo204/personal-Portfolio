export interface Profile {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'Professional' | 'Co-op' | 'Internship';
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string; // For the project detail page
  image?: string; // URL for the project screenshot
  techStack: string[];
  link?: string;
  github?: string;
  category: 'AI' | 'Cybersecurity' | 'Web' | 'Software Development' | 'Other';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  achievements?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface VolunteerItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string; // e.g., "Native", "C1", "Fluent"
  level: number; // 0-100 for progress bar
}