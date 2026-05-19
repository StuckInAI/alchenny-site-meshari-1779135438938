import { RECIPE_IMAGES } from '@/lib/recipeDetails';
import type { Recipe, NavItem } from '@/types/index';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Recipes', path: '/recipes' },
  { label: 'Store', path: '/store' },
  { label: 'Work With Me', path: '/work-with-me' },
  { label: 'Croissant Crew', path: '/croissant-crew' },
];

export const RECIPES: Recipe[] = [
  {
    id: '1',
    slug: 'croissants',
    title: 'Classic Butter Croissants',
    description: 'Three days of laminating, folding, and chilling — every step worth it.',
    category: 'Viennoiserie',
    tag: 'Signature',
    time: '3 days',
    difficulty: 'Advanced',
    tone: 'caramel',
    image: RECIPE_IMAGES['croissants'],
  },
  {
    id: '2',
    slug: 'brown-butter-brownies',
    title: 'Brown Butter Brownies',
    description: 'Crisp edges, fudgy center, and a deep nuttiness from browned butter.',
    category: 'Chocolate',
    tag: 'Fan Favourite',
    time: '45 min',
    difficulty: 'Beginner',
    tone: 'cocoa',
    image: RECIPE_IMAGES['brown-butter-brownies'],
  },
  {
    id: '3',
    slug: 'paris-brest',
    title: 'Paris-Brest',
    description: 'Choux ring filled with hazelnut praline mousseline. A French classic.',
    category: 'Pastry',
    tag: 'Advanced',
    time: '3 hours',
    difficulty: 'Intermediate',
    tone: 'mocha',
    image: RECIPE_IMAGES['paris-brest'],
  },
  {
    id: '4',
    slug: 'lemon-tart',
    title: 'French Lemon Tart',
    description: 'A sharp, silky lemon curd in a buttery pâte sucrée shell.',
    category: 'Tarts',
    tag: 'Seasonal',
    time: '4 hours',
    difficulty: 'Intermediate',
    tone: 'peach',
    image: RECIPE_IMAGES['lemon-tart'],
  },
  {
    id: '5',
    slug: '',
    title: 'Kouign-Amann',
    description: 'Caramelized Breton pastry with flaky, buttery, sugared layers.',
    category: 'Viennoiserie',
    tag: 'Coming Soon',
    time: '4 hours',
    difficulty: 'Advanced',
    tone: 'caramel',
  },
  {
    id: '6',
    slug: '',
    title: 'Financiers',
    description: 'Brown butter almond cakes with crisp edges and moist centers.',
    category: 'Petit Fours',
    tag: 'Coming Soon',
    time: '30 min',
    difficulty: 'Beginner',
    tone: 'cream',
  },
];

export const POLAROID_PHOTOS = [
  {
    src: '/images/polaroid-1.jpg',
    alt: 'Allison shaping croissants at the bench',
    rotate: '-4deg',
    zIndex: 3,
  },
  {
    src: '/images/polaroid-2.jpg',
    alt: 'Golden croissants fresh from the oven',
    rotate: '2deg',
    zIndex: 2,
  },
  {
    src: '/images/polaroid-3.jpg',
    alt: 'Paris-Brest with praline cream',
    rotate: '-1.5deg',
    zIndex: 4,
  },
  {
    src: '/images/polaroid-4.jpg',
    alt: 'Lemon tart with candied zest',
    rotate: '3.5deg',
    zIndex: 1,
  },
];

export const STATS = [
  { value: 14000, label: 'Newsletter subscribers', suffix: '+' },
  { value: 3, label: 'Years of pastry school', suffix: '' },
  { value: 47, label: 'Countries reached', suffix: '' },
  { value: 200, label: 'Recipes tested', suffix: '+' },
];

export const BRANDS = [
  'Le Creuset',
  'KitchenAid',
  'Valrhona',
  'Nordic Ware',
  'Microplane',
  'de Buyer',
];

export const STORE_ITEMS = [
  {
    id: 's1',
    title: 'The Lamination Guide',
    description: 'A 40-page deep dive into croissant and danish dough. Includes temperature charts, troubleshooting, and step-by-step photos.',
    price: '$24',
    tag: 'Digital PDF',
    tone: 'caramel' as const,
  },
  {
    id: 's2',
    title: 'Pastry School Notes: Year One',
    description: 'Everything I learned in my first year — techniques, flavor theory, mise en place systems, and recipes from class.',
    price: '$18',
    tag: 'Digital PDF',
    tone: 'cream' as const,
  },
  {
    id: 's3',
    title: 'The Chocolate Module',
    description: 'Tempering, ganaches, bonbons, and glazes. Built from professional patisserie training.',
    price: '$22',
    tag: 'Digital PDF',
    tone: 'cocoa' as const,
  },
];
