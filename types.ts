export interface Round {
  id: number;
  title: string;
  description: string;
  icon: string; // Icon name reference
  details: string[];
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface Highlight {
  id: number;
  text: string;
  icon: string;
}

export interface Prize {
  id: number;
  position: string;
  amount: string;
  description: string;
  icon: string;
  color: string;
}

export interface AppConfig {
  eventName: string;
  organizer: string;
  tagline: string;
  eventDate: string; // ISO format
  about: {
    title: string;
    description: string;
    highlights: Highlight[];
  };
  rounds: Round[];
  prizes: Prize[];
  timeline: TimelineItem[];
  faqs: FAQItem[];
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };
}

export interface User {
  name: string;
  email: string;
  branch: string;
  rollNo: string;
  quizCompleted?: boolean;
}