import type { Recipe, Product } from '@/types/index';

export const recipes: Recipe[] = [
  {
    slug: 'classic-croissant',
    title: 'Classic Croissant',
    description: 'Buttery, flaky, golden — the croissant that started it all.',
    category: 'pastry',
    tone: 'caramel',
    featured: true,
  },
  {
    slug: 'sourdough-loaf',
    title: 'Sourdough Loaf',
    description: 'A tangy, open-crumb sourdough baked in a Dutch oven.',
    category: 'bread',
    tone: 'mocha',
    featured: true,
  },
  {
    slug: 'brown-butter-cake',
    title: 'Brown Butter Cake',
    description: 'Nutty brown butter folded into a tender vanilla sponge.',
    category: 'cake',
    tone: 'peach',
    featured: true,
  },
  {
    slug: 'chocolate-chip-cookies',
    title: 'Chocolate Chip Cookies',
    description: 'Crispy edges, chewy centres, and pools of dark chocolate.',
    category: 'cookies',
    tone: 'cocoa',
    featured: false,
  },
  {
    slug: 'almond-croissant',
    title: 'Almond Croissant',
    description: 'Day-old croissants soaked in syrup, filled with frangipane.',
    category: 'pastry',
    tone: 'cream',
    featured: false,
  },
  {
    slug: 'matcha-latte',
    title: 'Matcha Latte',
    description: 'Ceremonial-grade matcha whisked with oat milk.',
    category: 'drinks',
    tone: 'pistachio',
    featured: false,
  },
];

export const products: Product[] = [
  {
    id: 'baking-guide',
    name: 'The Pastry School Baking Guide',
    description: 'A 60-page digital guide covering laminated doughs, choux, and tarts.',
    price: '$24',
    imageTone: 'caramel',
    tag: 'Best seller',
    link: '#',
  },
  {
    id: 'sourdough-starter-kit',
    name: 'Sourdough Starter Kit',
    description: 'Everything you need to start your sourdough journey at home.',
    price: '$18',
    imageTone: 'mocha',
    link: '#',
  },
  {
    id: 'recipe-cards',
    name: 'Printable Recipe Card Set',
    description: '20 beautifully designed recipe cards to print and keep.',
    price: '$9',
    imageTone: 'cream',
    tag: 'New',
    link: '#',
  },
  {
    id: 'cookie-masterclass',
    name: 'Cookie Masterclass Video',
    description: 'A 2-hour deep-dive into perfecting every style of cookie.',
    price: '$32',
    imageTone: 'cocoa',
    link: '#',
  },
];
