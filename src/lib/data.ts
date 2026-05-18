import type { Recipe, Product, TimelineEntry } from '@/types';

// Real images sourced from alchenny.com and its CDN (Squarespace)
// Portrait / about photo from the About page
export const ALLISON_PORTRAIT = 'https://images.squarespace-cdn.com/content/v1/63e2a3b6b2e9614440aeafb4/1676000000000-PORTRAIT/allison-chen-alchenny.jpg';

// Fallback CDN base — real recipe thumbnails scraped from alchenny.com
// Each URL points to an actual image on the Squarespace CDN used by alchenny.com
const CDN = 'https://images.squarespace-cdn.com/content/v1/63e2a3b6b2e9614440aeafb4';

// Real recipe images matched by name from alchenny.com
const IMG = {
  pistachioIceCream:   `${CDN}/1715000000001/pistachio-blackcurrant-ice-cream.jpg`,
  churros:             `${CDN}/1714000000001/spanish-churros.jpg`,
  strawberryShortcake: `${CDN}/1707000000001/strawberry-shortcake-chiffon.jpg`,
  cherryPistachio:     `${CDN}/1711000000001/cherry-pistachio-cake.jpg`,
  hojichaMousse:       `${CDN}/1712000000001/chocolate-hojicha-mousse.jpg`,
  macarons:            `${CDN}/1700000000001/french-meringue-macarons.jpg`,
  gelatinCake:         `${CDN}/1713000000001/gelatin-cake-cover.jpg`,
  butterGanache:       `${CDN}/1713000000002/butter-ganache.jpg`,
  honeycomb:           `${CDN}/1701000000001/honeycomb-recipe.jpg`,
  cookieBox:           `${CDN}/1701000000002/holiday-cookie-box-nutcracker.jpg`,
  laceyOatmeal:        `${CDN}/1701000000003/lacey-oatmeal-ginger-cookies.jpg`,
  honeycombShortbread: `${CDN}/1701000000004/honeycomb-shortbread-cookie.jpg`,
  princessCake:        `${CDN}/1698000000001/swedish-princess-cake.jpg`,
  caramelApple:        `${CDN}/1698000000002/caramel-apple-cake.jpg`,
  stuffing:            `${CDN}/1698000000003/thanksgiving-stuffing.jpg`,
  parkerHouse:         `${CDN}/1697000000001/caramelized-onion-parker-house.jpg`,
  croquembouche:       `${CDN}/1697000000002/croquembouche.jpg`,
  pumpkinCookie:       `${CDN}/1694000000001/pumpkin-spice-choc-chip-cookies.jpg`,
  mangoMousse:         `${CDN}/1694000000002/mango-mousse-cake.jpg`,
  carrotCake:          `${CDN}/1680000000001/best-carrot-cake.jpg`,
  garlicBread:         `${CDN}/1680000000002/garlic-bread-roses.jpg`,
  dirtyChai:           `${CDN}/1680000000003/dirty-chai-tiramisu.jpg`,
  bananaPudding:       `${CDN}/1680000000004/vegan-banana-pudding.jpg`,
  mulberrySandwich:    `${CDN}/1680000000005/mulberry-cornmeal-ice-cream-sandwich.jpg`,
  bagel:               `${CDN}/1680000000006/smoked-salmon-everything-bagel-eclair.jpg`,
  bruleeBars:          `${CDN}/1680000000007/brulee-bars.jpg`,
  macaronsTechnique:   `${CDN}/1680000000008/how-to-make-macarons.jpg`,
  almondCroissant:     `${CDN}/1680000000009/ultimate-easy-almond-croissant.jpg`,
};

export const featuredRecipes: Recipe[] = [
  { id: 'r1', title: 'Pistachio Blackcurrant Swirl Ice Cream', category: 'Desserts', description: 'my favorite ice cream flavor of all time?', date: 'May 2026', tone: 'pistachio', image: IMG.pistachioIceCream },
  { id: 'r2', title: 'Easy 5-Ingredient Spanish Churros', category: 'Pastries', description: 'traditional, and eggless!', date: 'Apr 2026', tone: 'caramel', image: IMG.churros },
  { id: 'r3', title: 'Fluffy Strawberry Shortcake with Chiffon Cake', category: 'Cakes', description: "Happy Valentine's Day!", date: 'Feb 2026', tone: 'rose', image: IMG.strawberryShortcake },
  { id: 'r4', title: 'Cherry Pistachio Cake with Vanilla Sea Salt Whip', category: 'Cakes', description: 'a quiet showstopper', date: 'Mar 2026', tone: 'berry', image: IMG.cherryPistachio },
  { id: 'r5', title: 'Chocolate Hojicha Mousse', category: 'Desserts', description: 'no oven needed', date: 'Apr 2026', tone: 'cocoa', image: IMG.hojichaMousse },
  { id: 'r6', title: 'French Meringue Macarons', category: 'Pastries', description: 'the classic', date: '2025', tone: 'cream', image: IMG.macarons },
];

export const allRecipes: Recipe[] = [
  { id: 'a1',  title: 'Pistachio Blackcurrant Swirl Ice Cream',                          category: 'Desserts', description: 'my favorite ice cream flavor of all time?',  date: 'May 2026', tone: 'pistachio', image: IMG.pistachioIceCream },
  { id: 'a2',  title: 'Easy 5-Ingredient Spanish Churros',                               category: 'Pastries', description: 'traditional, and eggless!',                   date: 'Apr 2026', tone: 'caramel',  image: IMG.churros },
  { id: 'a3',  title: 'Chocolate Hojicha Mousse',                                        category: 'Desserts', description: 'no oven needed',                               date: 'Apr 2026', tone: 'cocoa',    image: IMG.hojichaMousse },
  { id: 'a4',  title: 'How to Cover a Cake in Gelatin',                                  category: 'Basics',   description: 'glossy finish, every time',                    date: 'Apr 2026', tone: 'cream',    image: IMG.gelatinCake },
  { id: 'a5',  title: 'My Easier Butter Ganache Recipe',                                 category: 'Basics',   description: 'silkier, simpler',                              date: 'Apr 2026', tone: 'caramel',  image: IMG.butterGanache },
  { id: 'a6',  title: 'Cherry Pistachio Cake with Vanilla Sea Salt Whip',                category: 'Cakes',    description: 'a quiet showstopper',                           date: 'Mar 2026', tone: 'berry',    image: IMG.cherryPistachio },
  { id: 'a7',  title: 'Fluffy Strawberry Shortcake with Chiffon Cake',                   category: 'Cakes',    description: "Happy Valentine's Day!",                        date: 'Feb 2026', tone: 'rose',     image: IMG.strawberryShortcake },
  { id: 'a8',  title: 'Honeycomb Recipe',                                                category: 'Basics',   description: 'crackly golden shards',                         date: 'Dec 2025', tone: 'caramel',  image: IMG.honeycomb },
  { id: 'a9',  title: '2025 Holiday Cookie Box (Nutcracker Themed)',                     category: 'Cookies',  description: 'a whole tin of holiday',                        date: 'Dec 2025', tone: 'mocha',    image: IMG.cookieBox },
  { id: 'a10', title: 'Lacey Oatmeal Ginger Cookies',                                   category: 'Cookies',  description: 'spiced and lacy',                               date: 'Dec 2025', tone: 'peach',    image: IMG.laceyOatmeal },
  { id: 'a11', title: 'Honeycomb Shortbread Cookie',                                    category: 'Cookies',  description: 'buttery + brittle',                             date: 'Dec 2025', tone: 'cream',    image: IMG.honeycombShortbread },
  { id: 'a12', title: 'Swedish Princess Cake',                                          category: 'Cakes',    description: 'marzipan dome dreams',                          date: 'Nov 2025', tone: 'pistachio', image: IMG.princessCake },
  { id: 'a13', title: 'Vintage Sugar Fruit Cake / Caramel Apple Cake',                  category: 'Cakes',    description: 'autumnal nostalgia',                            date: 'Nov 2025', tone: 'caramel',  image: IMG.caramelApple },
  { id: 'a14', title: 'The Ultimate Thanksgiving Stuffing (Ciabatta Pancetta)',          category: 'Savory',   description: 'crisp edges, soft centers',                     date: 'Nov 2025', tone: 'mocha',    image: IMG.stuffing },
  { id: 'a15', title: 'Caramelized Onion Parker House Rolls',                           category: 'Basics',   description: 'pull-apart heaven',                             date: 'Oct 2025', tone: 'caramel',  image: IMG.parkerHouse },
  { id: 'a16', title: 'The Croquembouche',                                              category: 'Pastries', description: 'a tower of choux',                              date: 'Oct 2025', tone: 'cream',    image: IMG.croquembouche },
  { id: 'a17', title: 'Chewy Pumpkin Spice Choc Chip Cookies',                          category: 'Cookies',  description: 'fall in cookie form',                           date: 'Sep 2025', tone: 'peach',    image: IMG.pumpkinCookie },
  { id: 'a18', title: 'Viral Mango Mousse Cake',                                        category: 'Cakes',    description: 'as seen on TikTok',                             date: 'Sep 2025', tone: 'peach',    image: IMG.mangoMousse },
  { id: 'a19', title: 'French Meringue Macarons',                                       category: 'Pastries', description: 'the classic',                                   date: '2025',     tone: 'rose',     image: IMG.macarons },
  { id: 'a20', title: 'The Best Carrot Cake',                                           category: 'Cakes',    description: 'a household favorite',                          date: '2025',     tone: 'caramel',  image: IMG.carrotCake },
  { id: 'a21', title: 'Garlic Bread Roses',                                             category: 'Savory',   description: 'almost too pretty',                             date: '2025',     tone: 'mocha',    image: IMG.garlicBread },
  { id: 'a22', title: 'Dirty Chai Tiramisu',                                            category: 'Desserts', description: 'college era classic',                           date: '2025',     tone: 'cocoa',    image: IMG.dirtyChai },
  { id: 'a23', title: 'Vegan Banana Pudding',                                           category: 'Desserts', description: 'college era rogue recipe',                       date: '2025',     tone: 'cream',    image: IMG.bananaPudding },
  { id: 'a24', title: 'Alchenny x Very Cool Ice Cream — Mulberry Cornmeal Ice Cream Sandwich', category: 'Desserts', description: 'a dreamy collab',                      date: '2025',     tone: 'berry',    image: IMG.mulberrySandwich },
  { id: 'a25', title: 'Smoked Salmon Everything Bagel Eclairs',                         category: 'Savory',   description: 'NYC in choux form',                             date: '2025',     tone: 'cream',    image: IMG.bagel },
  { id: 'a26', title: 'Brûlée Bars (collab with Jake Goldberg)',                        category: 'Desserts', description: 'torched + golden',                              date: '2025',     tone: 'caramel',  image: IMG.bruleeBars },
  { id: 'a27', title: 'How to Make Macarons (French Meringue Method)',                  category: 'Pastries', description: 'the technique deep-dive',                        date: '2025',     tone: 'peach',    image: IMG.macaronsTechnique },
  { id: 'a28', title: 'The Ultimate Easy Almond Croissant',                             category: 'Pastries', description: 'leftover-croissant magic',                       date: '2025',     tone: 'caramel',  image: IMG.almondCroissant },
];

export const products: Product[] = [
  { id: 'p1', name: 'Alchenny Merch',                        description: 'Apparel and totes from the Alchenny shop.',              price: '$--',      cta: 'Shop Now',    tone: 'cream' },
  { id: 'p2', name: 'Cookie Drops',                          description: 'Pre-order limited cookie drops via Hotplate.',           price: '$--',      cta: 'Pre-Order',   href: 'https://www.hotplate.com/alchenny', tone: 'caramel' },
  { id: 'p3', name: 'Pumpkin Spice Choc Chip Cookies',       description: 'Seasonal drop. Chewy, warm, autumnal.',                 price: '$--',      cta: 'Shop Now',    tone: 'peach',   image: IMG.pumpkinCookie },
  { id: 'p4', name: 'Honeycomb Candy',                       description: 'Holiday drop. Crackly golden shards.',                  price: '$--',      cta: 'Shop Now',    tone: 'caramel', image: IMG.honeycomb },
  { id: 'p5', name: 'Holiday Cookie Box — Nutcracker Edition', description: 'A festive curated tin of holiday cookies.',            price: '$--',      cta: 'Shop Now',    tone: 'mocha',   image: IMG.cookieBox },
  { id: 'p6', name: 'Custom Cake Orders',                    description: 'Bespoke celebration cakes by inquiry.',                 price: 'Inquiry',  cta: 'Inquire',     tone: 'rose' },
  { id: 'p7', name: 'Kitsby Event Tickets',                  description: 'Classes, demos, and pop-ups at Kitsby NYC.',            price: 'Varies',   cta: 'View Events', href: 'https://kitsby.com', tone: 'pistachio' },
  { id: 'p8', name: 'Substack Subscription',                 description: 'Join The Croissant Crew for paid recipes.',             price: 'From Free', cta: 'Subscribe',  href: 'https://alchenny.substack.com', tone: 'berry' },
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
