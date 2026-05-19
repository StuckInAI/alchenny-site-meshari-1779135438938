import type { Recipe, Product, TimelineEntry } from '@/types';
import { RECIPE_IMAGES } from '@/lib/recipeDetails';

// ─────────────────────────────────────────────────────────────────────────────
// REAL uploaded images — served from /public/images/
// ─────────────────────────────────────────────────────────────────────────────

// Portrait used on About page and Home "About Mini" section
export const ALLISON_PORTRAIT = RECIPE_IMAGES.allisonPortrait;

// The 4 polaroid collage photos
export const POLAROID_PHOTOS = [
  {
    src: RECIPE_IMAGES.polaroid1,
    alt: 'Allison in her kitchen baking',
    rotate: '-4deg',
    zIndex: 4,
  },
  {
    src: RECIPE_IMAGES.polaroid2,
    alt: 'Allison decorating a cake',
    rotate: '3deg',
    zIndex: 3,
  },
  {
    src: RECIPE_IMAGES.polaroid3,
    alt: 'Allison plating desserts',
    rotate: '-2deg',
    zIndex: 2,
  },
  {
    src: RECIPE_IMAGES.polaroid4,
    alt: 'Allison smiling in the kitchen',
    rotate: '5deg',
    zIndex: 1,
  },
];

const IMG = {
  pistachioIceCream:   'https://images.unsplash.com/photo-1567206563114-c179706e3d8b?w=800&q=80',
  churros:             'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
  strawberryShortcake: RECIPE_IMAGES.strawberryShortcake,
  cherryPistachio:     'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80',
  hojichaMousse:       'https://images.unsplash.com/photo-1541795795328-f073b763494e?w=800&q=80',
  macarons:            RECIPE_IMAGES.macarons,
  gelatinCake:         'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80',
  butterGanache:       'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
  honeycomb:           'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80',
  cookieBox:           'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
  laceyOatmeal:        'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
  honeycombShortbread: 'https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=800&q=80',
  princessCake:        'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80',
  caramelApple:        'https://images.unsplash.com/photo-1602351447937-745cb720612f?w=800&q=80',
  stuffing:            'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
  parkerHouse:         'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=800&q=80',
  croquembouche:       'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&q=80',
  pumpkinCookie:       RECIPE_IMAGES.pumpkinCookie,
  mangoMousse:         'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
  carrotCake:          'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&q=80',
  garlicBread:         'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=800&q=80',
  dirtyChai:           'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
  bananaPudding:       'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=80',
  mulberrySandwich:    'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80',
  bagel:               'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=80',
  bruleeBars:          'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80',
  macaronsTechnique:   RECIPE_IMAGES.macarons,
  almondCroissant:     RECIPE_IMAGES.almondCroissant,
  lemonCurd:           RECIPE_IMAGES.lemonCurd,
};

export const featuredRecipes: Recipe[] = [
  { id: 'r1', slug: 'r1', title: 'Pistachio Blackcurrant Swirl Ice Cream',           category: 'Desserts', description: 'my favorite ice cream flavor of all time?',  date: 'May 2026', tone: 'pistachio', image: IMG.pistachioIceCream },
  { id: 'r2', slug: 'r2', title: 'Easy 5-Ingredient Spanish Churros',                category: 'Pastries', description: 'traditional, and eggless!',                   date: 'Apr 2026', tone: 'caramel',  image: IMG.churros },
  { id: 'r3', slug: 'strawberry-shortcake', title: 'Fluffy Strawberry Shortcake with Chiffon Cake', category: 'Cakes', description: "Happy Valentine's Day!", date: 'Feb 2026', tone: 'rose', image: IMG.strawberryShortcake },
  { id: 'r4', slug: 'r4', title: 'Cherry Pistachio Cake with Vanilla Sea Salt Whip', category: 'Cakes',    description: 'a quiet showstopper',                           date: 'Mar 2026', tone: 'berry',    image: IMG.cherryPistachio },
  { id: 'r5', slug: 'r5', title: 'Chocolate Hojicha Mousse',                         category: 'Desserts', description: 'no oven needed',                               date: 'Apr 2026', tone: 'cocoa',    image: IMG.hojichaMousse },
  { id: 'r6', slug: 'macarons', title: 'French Meringue Macarons',                   category: 'Pastries', description: 'the classic',                                   date: '2025',     tone: 'cream',    image: IMG.macarons },
];

export const allRecipes: Recipe[] = [
  { id: 'a1',  slug: 'a1',                  title: 'Pistachio Blackcurrant Swirl Ice Cream',                                  category: 'Desserts', description: 'my favorite ice cream flavor of all time?',  date: 'May 2026', tone: 'pistachio', image: IMG.pistachioIceCream },
  { id: 'a2',  slug: 'a2',                  title: 'Easy 5-Ingredient Spanish Churros',                                       category: 'Pastries', description: 'traditional, and eggless!',                   date: 'Apr 2026', tone: 'caramel',  image: IMG.churros },
  { id: 'a3',  slug: 'a3',                  title: 'Chocolate Hojicha Mousse',                                                category: 'Desserts', description: 'no oven needed',                               date: 'Apr 2026', tone: 'cocoa',    image: IMG.hojichaMousse },
  { id: 'a4',  slug: 'a4',                  title: 'How to Cover a Cake in Gelatin',                                          category: 'Basics',   description: 'glossy finish, every time',                    date: 'Apr 2026', tone: 'cream',    image: IMG.gelatinCake },
  { id: 'a5',  slug: 'a5',                  title: 'My Easier Butter Ganache Recipe',                                         category: 'Basics',   description: 'silkier, simpler',                              date: 'Apr 2026', tone: 'caramel',  image: IMG.butterGanache },
  { id: 'a6',  slug: 'a6',                  title: 'Cherry Pistachio Cake with Vanilla Sea Salt Whip',                        category: 'Cakes',    description: 'a quiet showstopper',                           date: 'Mar 2026', tone: 'berry',    image: IMG.cherryPistachio },
  { id: 'a7',  slug: 'strawberry-shortcake', title: 'Fluffy Strawberry Shortcake with Chiffon Cake',                          category: 'Cakes',    description: "Happy Valentine's Day!",                        date: 'Feb 2026', tone: 'rose',     image: IMG.strawberryShortcake },
  { id: 'a8',  slug: 'a8',                  title: 'Honeycomb Recipe',                                                        category: 'Basics',   description: 'crackly golden shards',                         date: 'Dec 2025', tone: 'caramel',  image: IMG.honeycomb },
  { id: 'a9',  slug: 'a9',                  title: '2025 Holiday Cookie Box (Nutcracker Themed)',                             category: 'Cookies',  description: 'a whole tin of holiday',                        date: 'Dec 2025', tone: 'mocha',    image: IMG.cookieBox },
  { id: 'a10', slug: 'a10',                 title: 'Lacey Oatmeal Ginger Cookies',                                           category: 'Cookies',  description: 'spiced and lacy',                               date: 'Dec 2025', tone: 'peach',    image: IMG.laceyOatmeal },
  { id: 'a11', slug: 'a11',                 title: 'Honeycomb Shortbread Cookie',                                            category: 'Cookies',  description: 'buttery + brittle',                             date: 'Dec 2025', tone: 'cream',    image: IMG.honeycombShortbread },
  { id: 'a12', slug: 'a12',                 title: 'Swedish Princess Cake',                                                  category: 'Cakes',    description: 'marzipan dome dreams',                          date: 'Nov 2025', tone: 'pistachio', image: IMG.princessCake },
  { id: 'a13', slug: 'a13',                 title: 'Vintage Sugar Fruit Cake / Caramel Apple Cake',                          category: 'Cakes',    description: 'autumnal nostalgia',                            date: 'Nov 2025', tone: 'caramel',  image: IMG.caramelApple },
  { id: 'a14', slug: 'a14',                 title: 'The Ultimate Thanksgiving Stuffing (Ciabatta Pancetta)',                 category: 'Savory',   description: 'crisp edges, soft centers',                     date: 'Nov 2025', tone: 'mocha',    image: IMG.stuffing },
  { id: 'a15', slug: 'a15',                 title: 'Caramelized Onion Parker House Rolls',                                   category: 'Basics',   description: 'pull-apart heaven',                             date: 'Oct 2025', tone: 'caramel',  image: IMG.parkerHouse },
  { id: 'a16', slug: 'a16',                 title: 'The Croquembouche',                                                      category: 'Pastries', description: 'a tower of choux',                              date: 'Oct 2025', tone: 'cream',    image: IMG.croquembouche },
  { id: 'a17', slug: 'pumpkin-cookies',     title: 'Chewy Pumpkin Spice Choc Chip Cookies',                                  category: 'Cookies',  description: 'fall in cookie form',                           date: 'Sep 2025', tone: 'peach',    image: IMG.pumpkinCookie },
  { id: 'a18', slug: 'a18',                 title: 'Viral Mango Mousse Cake',                                                category: 'Cakes',    description: 'as seen on TikTok',                             date: 'Sep 2025', tone: 'peach',    image: IMG.mangoMousse },
  { id: 'a19', slug: 'macarons',            title: 'French Meringue Macarons',                                               category: 'Pastries', description: 'the classic',                                   date: '2025',     tone: 'rose',     image: IMG.macarons },
  { id: 'a20', slug: 'a20',                 title: 'The Best Carrot Cake',                                                   category: 'Cakes',    description: 'a household favorite',                          date: '2025',     tone: 'caramel',  image: IMG.carrotCake },
  { id: 'a21', slug: 'a21',                 title: 'Garlic Bread Roses',                                                     category: 'Savory',   description: 'almost too pretty',                             date: '2025',     tone: 'mocha',    image: IMG.garlicBread },
  { id: 'a22', slug: 'a22',                 title: 'Dirty Chai Tiramisu',                                                    category: 'Desserts', description: 'college era classic',                           date: '2025',     tone: 'cocoa',    image: IMG.dirtyChai },
  { id: 'a23', slug: 'a23',                 title: 'Vegan Banana Pudding',                                                   category: 'Desserts', description: 'college era rogue recipe',                       date: '2025',     tone: 'cream',    image: IMG.bananaPudding },
  { id: 'a24', slug: 'a24',                 title: 'Alchenny x Very Cool Ice Cream — Mulberry Cornmeal Ice Cream Sandwich', category: 'Desserts', description: 'a dreamy collab',                               date: '2025',     tone: 'berry',    image: IMG.mulberrySandwich },
  { id: 'a25', slug: 'a25',                 title: 'Smoked Salmon Everything Bagel Eclairs',                                 category: 'Savory',   description: 'NYC in choux form',                             date: '2025',     tone: 'cream',    image: IMG.bagel },
  { id: 'a26', slug: 'a26',                 title: 'Brûlée Bars (collab with Jake Goldberg)',                                category: 'Desserts', description: 'torched + golden',                              date: '2025',     tone: 'caramel',  image: IMG.bruleeBars },
  { id: 'a27', slug: 'macarons',            title: 'How to Make Macarons (French Meringue Method)',                          category: 'Pastries', description: 'the technique deep-dive',                        date: '2025',     tone: 'peach',    image: IMG.macaronsTechnique },
  { id: 'a28', slug: 'almond-croissant',    title: 'The Ultimate Easy Almond Croissant Recipe',                              category: 'Pastries', description: 'leftover-croissant magic',                       date: '2025',     tone: 'caramel',  image: IMG.almondCroissant },
  { id: 'a29', slug: 'lemon-curd',          title: 'Quick and Easy Microwave Lemon Curd',                                   category: 'Basics',   description: 'done in under 10 minutes',                      date: '2025',     tone: 'peach',    image: IMG.lemonCurd },
];

export const products: Product[] = [
  { id: 'p1', name: 'Alchenny Merch',                          description: 'Apparel and totes from the Alchenny shop.',            price: '$--',       cta: 'Shop Now',    tone: 'cream' },
  { id: 'p2', name: 'Cookie Drops',                            description: 'Pre-order limited cookie drops via Hotplate.',         price: '$--',       cta: 'Pre-Order',   href: 'https://www.hotplate.com/alchenny', tone: 'caramel' },
  { id: 'p3', name: 'Pumpkin Spice Choc Chip Cookies',         description: 'Seasonal drop. Chewy, warm, autumnal.',               price: '$--',       cta: 'Shop Now',    tone: 'peach',   image: IMG.pumpkinCookie },
  { id: 'p4', name: 'Honeycomb Candy',                         description: 'Holiday drop. Crackly golden shards.',                price: '$--',       cta: 'Shop Now',    tone: 'caramel', image: IMG.honeycomb },
  { id: 'p5', name: 'Holiday Cookie Box — Nutcracker Edition', description: 'A festive curated tin of holiday cookies.',           price: '$--',       cta: 'Shop Now',    tone: 'mocha',   image: IMG.cookieBox },
  { id: 'p6', name: 'Custom Cake Orders',                      description: 'Bespoke celebration cakes by inquiry.',               price: 'Inquiry',   cta: 'Inquire',     tone: 'rose' },
  { id: 'p7', name: 'Kitsby Event Tickets',                    description: 'Classes, demos, and pop-ups at Kitsby NYC.',          price: 'Varies',    cta: 'View Events', href: 'https://kitsby.com', tone: 'pistachio' },
  { id: 'p8', name: 'Substack Subscription',                   description: 'Join The Croissant Crew for paid recipes.',           price: 'From Free', cta: 'Subscribe',   href: 'https://alchenny.substack.com', tone: 'berry' },
];

export const timeline: TimelineEntry[] = [
  { year: '2020', events: ['Started Duke University'] },
  { year: '2022', events: ['Studied at the National School of Pastry, France', 'Launched Alchenny LLC & TikTok blew up'] },
  { year: '2023', events: ['[Stage] viral apartment tasting menu', 'Collab with Ken Jeong', 'Microsoft paid partnership', '300K+ TikTok followers · Featured in Spoon University'] },
  { year: '2024', events: ['Launched 4fold bakery', 'Brand deals with Instacart & KitchenAid'] },
  { year: '2025', events: ['Opened baking studio in NYC', 'Launched The Croissant Crew on Substack', 'Joined Kitsby as Chief Baking Officer'] },
  { year: '2026', events: ['1.5M+ combined followers · 584K TikTok · 542K Instagram', '34.4M TikTok likes · 14K+ Substack subscribers'] },
];

export const brandPartners: string[] = ['Microsoft', 'Instacart', 'KitchenAid', 'Pique', 'Very Cool Ice Cream', 'Kitsby'];

export const funFacts: { icon: string; text: string }[] = [
  { icon: '🥐', text: 'Went to French pastry school in France' },
  { icon: '🎓', text: 'Duke University alumna' },
  { icon: '🗽', text: 'Based in NYC' },
  { icon: '📹', text: '34.4 Million TikTok likes' },
  { icon: '🎂', text: 'Baked a birthday cake for "the Rizzler"' },
  { icon: '👨\u200d🍳', text: 'Collaborated with actor Ken Jeong' },
  { icon: '🧁', text: 'Runs Kitsby baking studio in NYC' },
  { icon: '♏', text: 'Leo, born August 21, 2002' },
];
