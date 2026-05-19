export type RecipeCategory =
  | 'Croissants'
  | 'Viennoiserie'
  | 'Chocolate'
  | 'Pastry'
  | 'Tarts'
  | 'Petit Fours'
  | 'Cakes'
  | 'Breads';

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  category: RecipeCategory;
  description: string;
  image?: string;
  imageFallback?: string;
  tone?: string;
  tag?: string;
  time?: string;
  difficulty?: string;
}

export interface NavItem {
  label: string;
  to: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image?: string;
  tone?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  events: string[];
}

export interface FunFact {
  emoji: string;
  text: string;
}
