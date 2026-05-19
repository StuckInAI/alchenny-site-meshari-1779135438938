export type Recipe = {
  slug: string;
  title: string;
  category: RecipeCategory;
  description: string;
  image?: string;
  imageFallback?: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags?: string[];
};

export type RecipeCategory = 'Pastry' | 'Bread' | 'Cakes' | 'Cookies' | 'Confectionery' | 'Seasonal';

export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  link?: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type FunFact = {
  emoji: string;
  label: string;
  value: string;
};
