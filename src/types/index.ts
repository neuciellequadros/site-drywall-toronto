export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  image: string;
  tag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "residential" | "ceilings" | "commercial";
  categoryLabel: string;
  location: string;
  description: string;
  specs: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  isPlaceholder?: boolean;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  details: string;
  honeypot?: string;
}

