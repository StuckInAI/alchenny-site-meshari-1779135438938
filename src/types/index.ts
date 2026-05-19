export type Tone = 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry';

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  category: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  servings: number;
  tags: string[];
  tone: Tone;
  image?: string;
  imageFallback?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  body: string;
}

export interface FunFact {
  text: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  tag: string;
  tone: Tone;
}
