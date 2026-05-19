export type Recipe = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  tags: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Intermediate' | 'Advanced';
  date: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
};
