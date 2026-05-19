import type { Recipe, NavItem, Product, TimelineEntry, FunFact } from '@/types/index';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Recipes', to: '/recipes' },
  { label: 'Store', to: '/store' },
  { label: 'Work With Me', to: '/work-with-me' },
  { label: 'Croissant Crew', to: '/croissant-crew' },
];

export const RECIPES: Recipe[] = [
  {
    id: '1',
    slug: 'classic-butter-croissant',
    title: 'Classic Butter Croissant',
    category: 'Viennoiserie',
    description: 'The gold standard of laminated dough — 27 layers of butter and patience.',
    tone: 'caramel',
    tag: 'Signature',
    time: '3 days',
    difficulty: 'Advanced',
  },
  {
    id: '2',
    slug: 'dark-chocolate-tart',
    title: 'Dark Chocolate Tart',
    category: 'Chocolate',
    description: 'Silky ganache in a pâte sablée shell — simple, stunning, and deeply satisfying.',
    tone: 'cocoa',
    tag: 'Fan Favourite',
    time: '2 hours',
    difficulty: 'Intermediate',
  },
  {
    id: '3',
    slug: 'paris-brest',
    title: 'Paris-Brest',
    category: 'Pastry',
    description: 'Choux ring filled with praline mousseline — a bicycle race in pastry form.',
    tone: 'cream',
    tag: 'Classic',
    time: '4 hours',
    difficulty: 'Advanced',
  },
  {
    id: '4',
    slug: 'lemon-curd-tartlets',
    title: 'Lemon Curd Tartlets',
    category: 'Tarts',
    description: 'Bright, tart, and perfectly balanced — with a buttery shortcrust shell.',
    tone: 'peach',
    tag: 'Seasonal',
    time: '90 min',
    difficulty: 'Intermediate',
  },
  {
    id: '5',
    slug: 'almond-pain-au-chocolat',
    title: 'Almond Pain au Chocolat',
    category: 'Viennoiserie',
    description: 'Day-old croissants transformed with frangipane and dark chocolate.',
    tone: 'mocha',
    tag: 'Weekend Special',
    time: '1.5 hours',
    difficulty: 'Easy',
  },
  {
    id: '6',
    slug: 'financiers',
    title: 'Brown Butter Financiers',
    category: 'Petit Fours',
    description: 'Nutty, golden, and impossibly moist — the perfect tea-time treat.',
    tone: 'caramel',
    tag: 'Quick Bake',
    time: '45 min',
    difficulty: 'Easy',
  },
];

export const allRecipes = RECIPES;
export const featuredRecipes = RECIPES.slice(0, 3);

export const products: Product[] = [
  {
    id: 'p1',
    name: 'The Lamination Guide',
    price: '$24',
    description: 'A 60-page deep-dive into croissant and laminated dough technique — printable PDF.',
    tone: 'caramel',
  },
  {
    id: 'p2',
    name: 'Pastry Fundamentals Course',
    price: '$89',
    description: 'Eight video modules covering the essential French pastry techniques.',
    tone: 'cream',
  },
  {
    id: 'p3',
    name: 'Croissant Crew Membership',
    price: '$9/mo',
    description: 'Monthly recipe drops, live Q&As, and a private community of serious bakers.',
    tone: 'mocha',
  },
  {
    id: 'p4',
    name: 'Kitchen Tool Bundle',
    price: '$45',
    description: 'My personally curated list of must-have pastry tools — with affiliate links.',
    tone: 'peach',
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: '2016',
    title: 'Le Cordon Bleu, Paris',
    events: [
      'Earned Grand Diplôme in Pastry & Cuisine',
      'Stage at Maison Kayser',
      'Fell in love with laminated dough',
    ],
  },
  {
    year: '2017–2019',
    title: 'Tokyo & Singapore',
    events: [
      'Worked at Dominique Ansel Bakery Tokyo',
      'Pop-up residency in Singapore',
      'Began documenting recipes online',
    ],
  },
  {
    year: '2020',
    title: 'Went Digital',
    events: [
      'Launched YouTube channel (now 820K subscribers)',
      'Started Substack newsletter',
      'First viral video: croissant lamination time-lapse',
    ],
  },
  {
    year: '2021–Now',
    title: 'Building the Community',
    events: [
      'Launched Croissant Crew membership',
      'Brand partnerships with KitchenAid, Valrhona & more',
      'Growing to 14K+ newsletter subscribers',
    ],
  },
];

export const funFacts: FunFact[] = [
  { emoji: '🥐', text: 'Has made over 3,000 croissants — and counting' },
  { emoji: '🌍', text: 'Has baked in 11 countries across 4 continents' },
  { emoji: '📚', text: 'Owns 200+ cookbooks, mostly in French' },
  { emoji: '☕', text: 'Drinks exactly two flat whites per day, no more' },
  { emoji: '🎵', text: 'Bakes exclusively to 70s French pop music' },
  { emoji: '🌙', text: 'Most productive baking hours: 5–9am' },
];

export const brandPartners: string[] = [
  'KitchenAid',
  'Valrhona',
  'Le Creuset',
  'Breville',
  'Nielsen-Massey',
  'King Arthur Baking',
];

export const ALLISON_PORTRAIT = '';

export const POLAROID_PHOTOS = [
  { src: '/images/polaroid-1.jpg', alt: 'Allison shaping croissants in Paris', rotate: '-6deg', zIndex: 4 },
  { src: '/images/polaroid-2.jpg', alt: 'Fresh croissants out of the oven', rotate: '3deg', zIndex: 3 },
  { src: '/images/polaroid-3.jpg', alt: 'Tokyo bakery morning prep', rotate: '-2deg', zIndex: 2 },
  { src: '/images/polaroid-4.jpg', alt: 'Le Cordon Bleu graduation day', rotate: '5deg', zIndex: 1 },
];
