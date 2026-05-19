export type RecipeCategory = 'bread' | 'pastry' | 'cake' | 'cookies' | 'savory' | 'drinks';

export type Recipe = {
  slug: string;
  title: string;
  description: string;
  category: RecipeCategory;
  tone: 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry';
  featured?: boolean;
  imageSrc?: string;
};

export type TipBox = {
  title: string;
  body: string;
  tips?: string[];
};

export type RecipeSection = {
  heading: string;
  items?: string[];
  body?: string;
};

export type RecipeDetail = Recipe & {
  category: RecipeCategory;
  tone: 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry';
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  difficulty?: string;
  intro?: string;
  sections?: RecipeSection[];
  tips?: TipBox[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageTone?: 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry';
  tag?: string;
  link?: string;
};
