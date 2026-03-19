export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface StakeholderCard {
  title: string;
  description: string;
  bullets: string[];
  href: string;
}

export interface ProcessStep {
  eyebrow: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageHeroContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ValueCard {
  title: string;
  description: string;
  bullets?: string[];
}
