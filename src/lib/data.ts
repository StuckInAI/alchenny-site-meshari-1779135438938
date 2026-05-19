import type { Recipe } from '@/types/index';

// ─── Recipe Data ────────────────────────────────────────────────────────────
export const recipes: Recipe[] = [
  {
    slug: 'classic-croissants',
    title: 'Classic Croissants',
    description: 'Buttery, flaky, and golden — the quintessential French pastry made at home.',
    image: '',
    category: 'Pastry',
    tags: ['french', 'laminated', 'breakfast'],
    prepTime: '3 hours',
    cookTime: '25 min',
    servings: 12,
    difficulty: 'Advanced',
    date: '2024-01-15',
  },
  {
    slug: 'brown-butter-chocolate-chip-cookies',
    title: 'Brown Butter Chocolate Chip Cookies',
    description: 'Nutty brown butter and dark chocolate chips make these the ultimate cookie.',
    image: '',
    category: 'Cookies',
    tags: ['cookies', 'chocolate', 'brown-butter'],
    prepTime: '20 min',
    cookTime: '12 min',
    servings: 24,
    difficulty: 'Easy',
    date: '2024-02-10',
  },
  {
    slug: 'lemon-tart',
    title: 'Classic Lemon Tart',
    description: 'A bright, silky lemon curd in a buttery pâte sucrée shell.',
    image: '',
    category: 'Tarts',
    tags: ['french', 'citrus', 'tart'],
    prepTime: '45 min',
    cookTime: '30 min',
    servings: 8,
    difficulty: 'Intermediate',
    date: '2024-03-05',
  },
  {
    slug: 'sourdough-boule',
    title: 'Sourdough Boule',
    description: 'A crackling crust and open crumb — your first sourdough loaf made simple.',
    image: '',
    category: 'Bread',
    tags: ['sourdough', 'bread', 'fermented'],
    prepTime: '12 hours',
    cookTime: '45 min',
    servings: 8,
    difficulty: 'Intermediate',
    date: '2024-03-20',
  },
  {
    slug: 'opera-cake',
    title: 'Opéra Cake',
    description: 'Layers of almond joconde, coffee buttercream, and ganache — pure elegance.',
    image: '',
    category: 'Cakes',
    tags: ['french', 'coffee', 'chocolate', 'cake'],
    prepTime: '2 hours',
    cookTime: '15 min',
    servings: 12,
    difficulty: 'Advanced',
    date: '2024-04-01',
  },
  {
    slug: 'matcha-financiers',
    title: 'Matcha Financiers',
    description: 'Brown butter almond cakes with a vivid matcha twist — crisp edges, tender center.',
    image: '',
    category: 'Petit Fours',
    tags: ['matcha', 'almond', 'brown-butter'],
    prepTime: '15 min',
    cookTime: '14 min',
    servings: 16,
    difficulty: 'Easy',
    date: '2024-04-18',
  },
];

// ─── Products ───────────────────────────────────────────────────────────────
export const products: Product[] = [
  {
    id: 'p1',
    name: 'The Croissant Blueprint',
    description: 'A comprehensive 60-page PDF guide to mastering laminated dough at home.',
    price: 18,
    category: 'Digital Guides',
    image: '',
    badge: 'Bestseller',
  },
  {
    id: 'p2',
    name: 'Pastry Fundamentals Course',
    description: '8-week video course covering every foundational pastry technique.',
    price: 129,
    category: 'Courses',
    image: '',
    badge: 'Most Popular',
  },
  {
    id: 'p3',
    name: 'Flavor Pairing Workbook',
    description: 'A printable workbook for building intuitive flavor intuition.',
    price: 12,
    category: 'Digital Guides',
    image: '',
  },
  {
    id: 'p4',
    name: 'Bread Baking Bootcamp',
    description: 'A 4-week deep dive into sourdough, enriched breads, and artisan loaves.',
    price: 89,
    category: 'Courses',
    image: '',
  },
  {
    id: 'p5',
    name: 'Pastry Toolkit Checklist',
    description: 'The exact tools every home baker needs, organized by skill level.',
    price: 0,
    category: 'Freebies',
    image: '',
    badge: 'Free',
  },
];

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
};

// ─── About Page Data ─────────────────────────────────────────────────────────
export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: '2016',
    title: 'First Croissant (Disaster)',
    body: 'Attempted a croissant from a YouTube tutorial. It was a buttery, flat, delicious disaster. I was hooked.',
  },
  {
    year: '2018',
    title: 'Pastry School, Paris',
    body: 'Enrolled in a professional pastry program in Paris. Learned lamination, sugar work, and the French art of mise en place.',
  },
  {
    year: '2020',
    title: 'Started the Blog',
    body: 'Launched alchenny.com during the pandemic to share recipes and techniques with home bakers stuck at home.',
  },
  {
    year: '2022',
    title: 'Croissant Crew Newsletter',
    body: 'Launched a Substack newsletter that grew to 14,000 subscribers in its first year.',
  },
  {
    year: '2024',
    title: 'First Digital Course',
    body: 'Released the Pastry Fundamentals Course — an 8-week video series that sold out in 48 hours.',
  },
];

export const funFacts: string[] = [
  'I own 4 different types of rolling pins',
  'I have a ranking spreadsheet of every croissant I\'ve eaten (127 and counting)',
  'My sourdough starter is named Gerald',
  'I will always choose a plain croissant over a filled one',
  'Coffee is a non-negotiable part of my baking process',
];

export const ALLISON_PORTRAIT = '';
export const ALLISON_PORTRAIT_FALLBACK = '';

// ─── Polaroid Photos ─────────────────────────────────────────────────────────
export type PolaroidPhoto = {
  src: string;
  caption: string;
  rotate: number;
  z: number;
};

export const POLAROID_PHOTOS: PolaroidPhoto[] = [
  { src: '', caption: 'paris, 2018', rotate: -6, z: 1 },
  { src: '', caption: 'first lamination', rotate: 3, z: 2 },
  { src: '', caption: 'croissant #127', rotate: -2, z: 3 },
  { src: '', caption: 'pastry school', rotate: 5, z: 4 },
];
