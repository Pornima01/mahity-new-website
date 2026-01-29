export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent?: 'cyan' | 'amber';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface PhilosophyPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SolutionCategory {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface Platform {
  id: string;
  name: string;
  icon: string;
  href: string;
}

export type Page = 'home' | 'solutions' | 'platforms' | 'resources' | 'audit';