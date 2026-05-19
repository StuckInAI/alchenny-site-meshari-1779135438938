export type RecipeCategory =
  | 'Bread'
  | 'Pastry'
  | 'Cake'
  | 'Cookie'
  | 'Viennoiserie'
  | 'Petit Fours'
  | 'Chocolate'
  | 'Tarts';

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  category: RecipeCategory;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  time: string;
  description: string;
  image?: string;
  tone?: 'caramel' | 'cream' | 'mocha' | 'peach';
  featured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  tone?: 'caramel' | 'cream' | 'mocha' | 'peach';
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  events: string[];
}

export interface FunFact {
  emoji: string;
  text: string;
}

export interface RecipeSection {
  heading: string;
  steps: string[];
}

export interface TipBox {
  title: string;
  tips: string[];
}

export interface RecipeDetail {
  slug: string;
  title: string;
  category: RecipeCategory;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  time: string;
  description: string;
  image?: string;
  tone?: 'caramel' | 'cream' | 'mocha' | 'peach';
  ingredients: string[];
  sections: RecipeSection[];
  tipBox?: TipBox;
  yield?: string;
}
