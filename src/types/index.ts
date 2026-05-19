export type RecipeCategory = 'Bread' | 'Cake' | 'Pastry' | 'Cookie' | 'Savory' | 'Drink';

export interface Recipe {
  slug: string;
  title: string;
  category: RecipeCategory;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  imageSrc?: string;
  tone?: string;
  featured?: boolean;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description?: string;
  events: string[];
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface PolaroidPhoto {
  src: string;
  caption: string;
  rotate: number;
  z: number;
}

export interface RecipeSection {
  title: string;
  content?: string;
  items?: string[];
}

export interface TipBox {
  title: string;
  content?: string;
  body?: string;
}

export interface RecipeDetail {
  slug: string;
  title: string;
  category: RecipeCategory;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  imageSrc?: string;
  servings?: string;
  sections: RecipeSection[];
  tips?: TipBox[];
}

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  linkTo?: string;
  linkLabel?: string;
}
