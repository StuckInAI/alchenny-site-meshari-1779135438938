export type Recipe = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: RecipeCategory;
  tone: string;
  ratio: string;
  time?: string;
  difficulty?: string;
  featured?: boolean;
  image?: string;
};

export type RecipeCategory = 'pastry' | 'bread' | 'cake' | 'cookies' | 'savory' | 'drinks' | 'other';

export type RecipeDetail = {
  slug: string;
  title: string;
  description: string;
  sections: RecipeSection[];
  tips?: TipBox[];
};

export type RecipeSection = {
  heading?: string;
  body: string;
  items?: string[];
};

export type TipBox = {
  title?: string;
  body: string;
};
