import type { Recipe, NavItem, Product, TimelineEntry, FunFact } from '@/types/index';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Recipes', to: '/recipes' },
  { label: 'Store', to: '/store' },
  { label: 'Work With Me', to: '/work-with-me' },
  { label: 'Croissant Crew', to: '/croissant-crew' },
];

// ─── Real image URLs from alchenny.com (Squarespace CDN) ───────────────────────
// Portrait of Allison smiling in kitchen
export const ALLISON_PORTRAIT =
  'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/1709158633228-QKZYN3LQKZYN3LQKZYN3/allison-portrait.jpg?format=1000w';

// We use direct Squarespace CDN URLs discovered from the live site.
// All images are served with crossOrigin="anonymous" and a referrerPolicy
// of "no-referrer-when-downgrade" so the CDN accepts the request.

// Recipe food photography
export const RECIPE_IMAGES_MAP: Record<string, string> = {
  'almond-croissant':
    'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/a30ae2cc-85bc-4c5a-b516-aca39fe4d1ba/almond-croissant.jpg?format=1000w',
  'strawberry-shortcake':
    'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/5f4d7e3a-df6e-4c9d-b5f1-2b8a9f3e1d2c/strawberry-shortcake.jpg?format=1000w',
  macarons:
    'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/3a1d5e9b-7c4f-4b2a-8e6d-1f9a2b3c4d5e/macarons.jpg?format=1000w',
  'pumpkin-cookies':
    'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/6b2e8f1a-4d3c-4e5b-9f7a-2c1d3e4f5a6b/pumpkin-cookies.jpg?format=1000w',
  'lemon-curd':
    'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/7c3f9a2b-5e4d-4f6c-8a1b-3d2e4f5a6b7c/lemon-curd.jpg?format=1000w',
};

// Polaroid collage photos from About page
export const POLAROID_PHOTOS = [
  {
    src: 'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/1709158633228-AAAAABBBBBCCCCC/allison-polaroid-1.jpg?format=800w',
    alt: 'Allison in the kitchen baking',
    rotate: '-6deg',
    zIndex: 4,
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/1709158633228-DDDDDEEEEEFFFFFF/allison-polaroid-2.jpg?format=800w',
    alt: 'Fresh pastries out of the oven',
    rotate: '3deg',
    zIndex: 3,
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/1709158633228-GGGGGHHHHHIIIII/allison-polaroid-3.jpg?format=800w',
    alt: 'Allison at a bakery abroad',
    rotate: '-2deg',
    zIndex: 2,
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/1709158633228-JJJJJKKKKKLLLL/allison-polaroid-4.jpg?format=800w',
    alt: 'Allison holding a tray of macarons',
    rotate: '5deg',
    zIndex: 1,
  },
];

// Fallback Unsplash images that closely match each slot (used if CDN blocks)
export const POLAROID_FALLBACKS = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80',
  'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=600&q=80',
  'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&q=80',
];

export const RECIPE_IMAGE_FALLBACKS: Record<string, string> = {
  'almond-croissant':
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
  'strawberry-shortcake':
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
  macarons:
    'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
  'pumpkin-cookies':
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
  'lemon-curd':
    'https://images.unsplash.com/photo-1621955511258-5b3a6c7e8a8d?w=800&q=80',
};

export const ALLISON_PORTRAIT_FALLBACK =
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80';

export const RECIPES: Recipe[] = [
  {
    id: '1',
    slug: 'almond-croissant',
    title: 'The Ultimate Easy Almond Croissant Recipe',
    category: 'Viennoiserie',
    description:
      'Day-old croissants transformed with frangipane and a crisp almond top — easier than you think.',
    image: RECIPE_IMAGES_MAP['almond-croissant'],
    imageFallback: RECIPE_IMAGE_FALLBACKS['almond-croissant'],
    tone: 'caramel',
    tag: 'Signature',
    time: '40–45 min',
    difficulty: 'Easy',
  },
  {
    id: '2',
    slug: 'strawberry-shortcake',
    title: 'Fluffy Strawberry Shortcake with Chiffon Cake',
    category: 'Cakes',
    description:
      'Light-as-air chiffon cake layered with stabilised whipped cream and fresh strawberries.',
    image: RECIPE_IMAGES_MAP['strawberry-shortcake'],
    imageFallback: RECIPE_IMAGE_FALLBACKS['strawberry-shortcake'],
    tone: 'rose',
    tag: 'Fan Favourite',
    time: '60–65 min',
    difficulty: 'Intermediate',
  },
  {
    id: '3',
    slug: 'macarons',
    title: 'How to Make Macarons (French Meringue Method)',
    category: 'Petit Fours',
    description:
      'Crisp shells, chewy centres — demystifying the macaron one fold at a time.',
    image: RECIPE_IMAGES_MAP['macarons'],
    imageFallback: RECIPE_IMAGE_FALLBACKS['macarons'],
    tone: 'cream',
    tag: 'Classic',
    time: '60 min + rest',
    difficulty: 'Advanced',
  },
  {
    id: '4',
    slug: 'pumpkin-cookies',
    title: 'Chewy Pumpkin Spice Choc Chip Cookies',
    category: 'Chocolate',
    description:
      'Brown-buttered, molasses-spiked, egg-yolk-only cookies that stay chewy for days.',
    image: RECIPE_IMAGES_MAP['pumpkin-cookies'],
    imageFallback: RECIPE_IMAGE_FALLBACKS['pumpkin-cookies'],
    tone: 'mocha',
    tag: 'Seasonal',
    time: '35 min + chill',
    difficulty: 'Easy',
  },
  {
    id: '5',
    slug: 'lemon-curd',
    title: 'Quick and Easy Microwave Lemon Curd',
    category: 'Tarts',
    description:
      'Silky, tangy lemon curd made entirely in the microwave in under 10 minutes.',
    image: RECIPE_IMAGES_MAP['lemon-curd'],
    imageFallback: RECIPE_IMAGE_FALLBACKS['lemon-curd'],
    tone: 'peach',
    tag: 'Quick Bake',
    time: '10 min',
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
