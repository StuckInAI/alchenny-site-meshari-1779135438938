import type { Recipe, TimelineEntry } from '@/types/index';

export const recipes: Recipe[] = [
  {
    slug: 'classic-croissants',
    title: 'Classic Croissants',
    description: 'Buttery, flaky croissants made the traditional French way.',
    category: 'Pastry',
    time: '3 hours',
    difficulty: 'Hard',
    servings: 12,
    tags: ['pastry', 'french', 'butter'],
    tone: 'caramel',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600',
    imageFallback: '',
  },
  {
    slug: 'sourdough-boule',
    title: 'Sourdough Boule',
    description: 'A rustic, tangy sourdough with a perfect open crumb.',
    category: 'Bread',
    time: '24 hours',
    difficulty: 'Medium',
    servings: 8,
    tags: ['bread', 'sourdough', 'fermented'],
    tone: 'mocha',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600',
    imageFallback: '',
  },
  {
    slug: 'tarte-tatin',
    title: 'Tarte Tatin',
    description: 'Caramelized upside-down apple tart with flaky pastry.',
    category: 'Dessert',
    time: '1.5 hours',
    difficulty: 'Medium',
    servings: 8,
    tags: ['french', 'apple', 'tart'],
    tone: 'peach',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600',
    imageFallback: '',
  },
  {
    slug: 'pain-au-chocolat',
    title: 'Pain au Chocolat',
    description: 'Pillowy laminated dough wrapped around dark chocolate.',
    category: 'Pastry',
    time: '3 hours',
    difficulty: 'Hard',
    servings: 10,
    tags: ['pastry', 'chocolate', 'french'],
    tone: 'cocoa',
    image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=600',
    imageFallback: '',
  },
  {
    slug: 'lemon-tart',
    title: 'Lemon Tart',
    description: 'Silky lemon curd in a crisp buttery shell.',
    category: 'Dessert',
    time: '2 hours',
    difficulty: 'Medium',
    servings: 8,
    tags: ['lemon', 'tart', 'citrus'],
    tone: 'cream',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600',
    imageFallback: '',
  },
  {
    slug: 'madeleines',
    title: 'Madeleines',
    description: 'Light shell-shaped French cakes with a hint of lemon.',
    category: 'Cake',
    time: '45 min',
    difficulty: 'Easy',
    servings: 20,
    tags: ['french', 'cake', 'lemon'],
    tone: 'rose',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=600',
    imageFallback: '',
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: '2016',
    title: 'Culinary School',
    body: 'Enrolled at Le Cordon Bleu Paris. Fell in love with viennoiserie on day one.',
  },
  {
    year: '2018',
    title: 'Patisserie Stage',
    body: 'Staged at a two-star Michelin restaurant in Lyon, learning precision and patience.',
  },
  {
    year: '2020',
    title: 'Blog Launch',
    body: 'Started alchenny.com during lockdown to share recipes and pastry school notes.',
  },
  {
    year: '2022',
    title: 'Substack Growth',
    body: 'The Croissant Crew newsletter hit 10,000 subscribers — completely organic.',
  },
  {
    year: '2024',
    title: 'Brand Partnerships',
    body: 'Began collaborating with kitchenware and specialty ingredient brands worldwide.',
  },
];

export const funFacts: string[] = [
  'I have tested over 200 croissant recipes.',
  'My sourdough starter is named "Gérard".',
  'I can laminate dough blindfolded (almost).',
  'Favourite kitchen tool: offset spatula.',
  'I drink my coffee black, no exceptions.',
];

export const ALLISON_PORTRAIT = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800';
export const ALLISON_PORTRAIT_FALLBACK = '';

export const POLAROID_PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
    fallback: '',
    caption: 'paris, 2018',
    rotate: '-6deg',
    z: 4,
  },
  {
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
    fallback: '',
    caption: 'sourdough days',
    rotate: '3deg',
    z: 3,
  },
  {
    src: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400',
    fallback: '',
    caption: 'lemon tart',
    rotate: '-2deg',
    z: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=400',
    fallback: '',
    caption: 'pain au choc',
    rotate: '5deg',
    z: 1,
  },
];

export const POLAROID_FALLBACKS = POLAROID_PHOTOS.map((p) => p.fallback);

export const products = [
  {
    id: 'p1',
    name: 'The Croissant Masterclass',
    description: 'A 3-hour video course walking through every step of classic French croissants.',
    price: '$49',
    tag: 'Course',
    tone: 'caramel' as const,
  },
  {
    id: 'p2',
    name: 'Pastry School Notes',
    description: 'My complete Le Cordon Bleu notes digitised — 120 pages of technique.',
    price: '$19',
    tag: 'eBook',
    tone: 'mocha' as const,
  },
  {
    id: 'p3',
    name: 'Recipe Bundle Vol. 1',
    description: '25 tested recipes from the blog, formatted for print and digital use.',
    price: '$12',
    tag: 'PDF',
    tone: 'cream' as const,
  },
];
