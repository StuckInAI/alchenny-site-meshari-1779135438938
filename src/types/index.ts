export type RecipeCategory = 'Pastries' | 'Cakes' | 'Desserts' | 'Cookies' | 'Basics' | 'Savory';

export type Recipe = {
  id: string;
  title: string;
  category: RecipeCategory;
  description: string;
  date: string;
  tone: 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry';
  image?: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  cta: string;
  href?: string;
  tone: 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry';
  image?: string;
};

export type TimelineEntry = {
  year: string;
  events: string[];
};
