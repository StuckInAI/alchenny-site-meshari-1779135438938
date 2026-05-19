export type RecipeCategory = 'Pastries' | 'Cakes' | 'Desserts' | 'Cookies' | 'Basics' | 'Savory';

export type Recipe = {
  id: string;
  title: string;
  category: RecipeCategory;
  description: string;
  date: string;
  tone: 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry';
  image?: string;
  slug?: string;
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

export type RecipeDetail = {
  slug: string;
  title: string;
  category: RecipeCategory;
  image: string;
  prepTime: string;
  cookTime: string;
  yield: string;
  intro: string;
  sections: {
    heading: string;
    ingredients?: string[];
    steps?: string[];
    note?: string;
    tip?: string;
  }[];
  notes?: string[];
};
