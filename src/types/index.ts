export type Tone = 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry';

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  category: RecipeCategory;
  tone: Tone;
  time: string;
  difficulty: string;
  image?: string;
  featured?: boolean;
}

export type RecipeCategory = 'pastry' | 'bread' | 'cake' | 'cookie' | 'tart' | 'savory' | 'cream' | 'other';

export interface RecipeSection {
  heading: string;
  items: string[];
}

export interface TipBox {
  title: string;
  tips: string[];
}

export interface RecipeDetail extends Recipe {
  sections: RecipeSection[];
  tips?: TipBox;
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  ingredients?: string[];
  instructions?: string[];
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}
