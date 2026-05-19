import type { Recipe, TimelineEntry, StatItem, PolaroidPhoto } from '@/types';

export const recipes: Recipe[] = [
  {
    slug: 'classic-sourdough',
    title: 'Classic Sourdough Loaf',
    category: 'Bread',
    time: '24 hr',
    difficulty: 'Hard',
    description: 'A beautifully tangy, open-crumb sourdough with a crackling crust.',
    tone: 'caramel',
    featured: true,
  },
  {
    slug: 'croissants',
    title: 'Buttery Croissants',
    category: 'Pastry',
    time: '3 days',
    difficulty: 'Hard',
    description: 'Flaky, laminated croissants with honeyed layers and a glossy finish.',
    tone: 'peach',
    featured: true,
  },
  {
    slug: 'burnt-basque-cheesecake',
    title: 'Burnt Basque Cheesecake',
    category: 'Cake',
    time: '1.5 hr',
    difficulty: 'Easy',
    description: 'Crustless, creamy Basque cheesecake with a caramelised top.',
    tone: 'mocha',
    featured: true,
  },
  {
    slug: 'brown-butter-cookies',
    title: 'Brown Butter Cookies',
    category: 'Cookie',
    time: '45 min',
    difficulty: 'Easy',
    description: 'Nutty, chewy cookies with crisp edges and pools of chocolate.',
    tone: 'cocoa',
    featured: false,
  },
  {
    slug: 'focaccia',
    title: 'Rosemary Focaccia',
    category: 'Bread',
    time: '4 hr',
    difficulty: 'Medium',
    description: 'Dimpled, olive-oil-soaked focaccia topped with rosemary and flaky salt.',
    tone: 'pistachio',
    featured: false,
  },
  {
    slug: 'miso-caramel-tart',
    title: 'Miso Caramel Tart',
    category: 'Pastry',
    time: '2 hr',
    difficulty: 'Medium',
    description: 'A buttery tart shell filled with silky miso-spiked caramel.',
    tone: 'rose',
    featured: false,
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: '2018',
    title: 'The First Loaf',
    description: 'Where it all started.',
    events: [
      'Baked first sourdough loaf — dense enough to use as a doorstop',
      'Started documenting failures on a private Instagram',
      'Ordered way too many bannetons',
    ],
  },
  {
    year: '2019',
    title: 'Going Public',
    description: 'Sharing the journey.',
    events: [
      'Launched @alchenny on Instagram with 12 followers (all family)',
      'First croissant attempt — 47 layers, mostly tears',
      'Enrolled in weekend patisserie course at local culinary school',
    ],
  },
  {
    year: '2020',
    title: 'The Pivot Year',
    description: 'Pandemic baking explodes.',
    events: [
      'Sourdough content took off during lockdown — +50k followers in 90 days',
      'Launched free PDF: The Beginner\'s Sourdough Field Guide',
      'Collaborated with 3 flour brands on sponsored posts',
      'Hit 100k subscribers on YouTube',
    ],
  },
  {
    year: '2021–Now',
    title: 'Full Time & Pastry School',
    description: 'Levelling up.',
    events: [
      'Left corporate job to pursue baking full-time',
      'Enrolled in 6-month intensive at a French pastry school',
      'Launched The Croissant Crew newsletter (14k+ subscribers)',
      'Brand partnerships with KitchenAid, Valrhona & King Arthur Flour',
      'Currently developing debut cookbook',
    ],
  },
];

export const stats: StatItem[] = [
  { value: 280, suffix: 'k+', label: 'Instagram Followers' },
  { value: 100, suffix: 'k+', label: 'YouTube Subscribers' },
  { value: 14,  suffix: 'k+', label: 'Newsletter Readers' },
  { value: 3,   suffix: 'M+', label: 'Annual Recipe Views' },
];

export const polaroids: PolaroidPhoto[] = [
  { src: '', caption: 'first sourdough 🍞', rotate: -6, z: 1 },
  { src: '', caption: 'pastry school 👨‍🍳', rotate: 3,  z: 2 },
  { src: '', caption: 'croissant day 🥐',  rotate: -3, z: 3 },
  { src: '', caption: 'cake collab 🎂',    rotate: 5,  z: 4 },
];

export const brands: string[] = [
  'KitchenAid',
  'Valrhona',
  'King Arthur Flour',
  'Le Creuset',
  'Cuisinart',
  'Staub',
];
