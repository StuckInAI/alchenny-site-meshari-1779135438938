export type Recipe = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  tone?: string;
  time?: string;
  difficulty?: string;
  servings?: string;
};

export type Stat = {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
};

export type RecipeDetail = {
  slug: string;
  title: string;
  description?: string;
  image?: string;
  tone?: string;
  time?: string;
  difficulty?: string;
  servings?: string;
  sections: RecipeSection[];
  tips?: TipBox[];
};

export type RecipeSection = {
  heading: string;
  items: string[];
};

export type TipBox = {
  title?: string;
  body: string;
};
