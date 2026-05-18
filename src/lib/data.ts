import type { Recipe, Product, TimelineEntry } from '@/types';

export const featuredRecipes: Recipe[] = [
  { id: 'r1', title: 'Pistachio Blackcurrant Swirl Ice Cream', category: 'Desserts', description: 'my favorite ice cream flavor of all time?', date: 'May 2026', tone: 'pistachio' },
  { id: 'r2', title: 'Easy 5-Ingredient Spanish Churros', category: 'Pastries', description: 'traditional, and eggless!', date: 'Apr 2026', tone: 'caramel' },
  { id: 'r3', title: 'Fluffy Strawberry Shortcake with Chiffon Cake', category: 'Cakes', description: "Happy Valentine's Day!", date: 'Feb 2026', tone: 'rose' },
  { id: 'r4', title: 'Cherry Pistachio Cake with Vanilla Sea Salt Whip', category: 'Cakes', description: 'a quiet showstopper', date: 'Mar 2026', tone: 'berry' },
  { id: 'r5', title: 'Chocolate Hojicha Mousse', category: 'Desserts', description: 'no oven needed', date: 'Apr 2026', tone: 'cocoa' },
  { id: 'r6', title: 'French Meringue Macarons', category: 'Pastries', description: 'the classic', date: '2025', tone: 'cream' },
];

export const allRecipes: Recipe[] = [
  // 2026
  { id: 'a1', title: 'Pistachio Blackcurrant Swirl Ice Cream', category: 'Desserts', description: 'my favorite ice cream flavor of all time?', date: 'May 2026', tone: 'pistachio' },
  { id: 'a2', title: 'Easy 5-Ingredient Spanish Churros', category: 'Pastries', description: 'traditional, and eggless!', date: 'Apr 2026', tone: 'caramel' },
  { id: 'a3', title: 'Chocolate Hojicha Mousse', category: 'Desserts', description: 'no oven needed', date: 'Apr 2026', tone: 'cocoa' },
  { id: 'a4', title: 'How to Cover a Cake in Gelatin', category: 'Basics', description: 'glossy finish, every time', date: 'Apr 2026', tone: 'cream' },
  { id: 'a5', title: 'My Easier Butter Ganache Recipe', category: 'Basics', description: 'silkier, simpler', date: 'Apr 2026', tone: 'caramel' },
  { id: 'a6', title: 'Cherry Pistachio Cake with Vanilla Sea Salt Whip', category: 'Cakes', description: 'a quiet showstopper', date: 'Mar 2026', tone: 'berry' },
  { id: 'a7', title: 'Fluffy Strawberry Shortcake with Chiffon Cake', category: 'Cakes', description: "Happy Valentine's Day!", date: 'Feb 2026', tone: 'rose' },
  // 2025
  { id: 'a8', title: 'Honeycomb Recipe', category: 'Basics', description: 'crackly golden shards', date: 'Dec 2025', tone: 'caramel' },
  { id: 'a9', title: '2025 Holiday Cookie Box (Nutcracker Themed)', category: 'Cookies', description: 'a whole tin of holiday', date: 'Dec 2025', tone: 'mocha' },
  { id: 'a10', title: 'Lacey Oatmeal Ginger Cookies', category: 'Cookies', description: 'spiced and lacy', date: 'Dec 2025', tone: 'peach' },
  { id: 'a11', title: 'Honeycomb Shortbread Cookie', category: 'Cookies', description: 'buttery + brittle', date: 'Dec 2025', tone: 'cream' },
  { id: 'a12', title: 'Swedish Princess Cake', category: 'Cakes', description: 'marzipan dome dreams', date: 'Nov 2025', tone: 'pistachio' },
  { id: 'a13', title: 'Vintage Sugar Fruit Cake / Caramel Apple Cake', category: 'Cakes', description: 'autumnal nostalgia', date: 'Nov 2025', tone: 'caramel' },
  { id: 'a14', title: 'The Ultimate Thanksgiving Stuffing (Ciabatta Pancetta)', category: 'Savory', description: 'crisp edges, soft centers', date: 'Nov 2025', tone: 'mocha' },
  { id: 'a15', title: 'Caramelized Onion Parker House Rolls', category: 'Basics', description: 'pull-apart heaven', date: 'Oct 2025', tone: 'caramel' },
  { id: 'a16', title: 'The Croquembouche', category: 'Pastries', description: 'a tower of choux', date: 'Oct 2025', tone: 'cream' },
  { id: 'a17', title: 'Chewy Pumpkin Spice Choc Chip Cookies', category: 'Cookies', description: 'fall in cookie form', date: 'Sep 2025', tone: 'peach' },
  { id: 'a18', title: 'Viral Mango Mousse Cake', category: 'Cakes', description: 'as seen on TikTok', date: 'Sep 2025', tone: 'peach' },
  { id: 'a19', title: 'French Meringue Macarons', category: 'Pastries', description: 'the classic', date: '2025', tone: 'rose' },
  { id: 'a20', title: 'The Best Carrot Cake', category: 'Cakes', description: 'a household favorite', date: '2025', tone: 'caramel' },
  { id: 'a21', title: 'Garlic Bread Roses', category: 'Savory', description: 'almost too pretty', date: '2025', tone: 'mocha' },
  { id: 'a22', title: 'Dirty Chai Tiramisu', category: 'Desserts', description: 'college era classic', date: '2025', tone: 'cocoa' },
  { id: 'a23', title: 'Vegan Banana Pudding', category: 'Desserts', description: 'college era rogue recipe', date: '2025', tone: 'cream' },
  { id: 'a24', title: 'Alchenny x Very Cool Ice Cream — Mulberry Cornmeal Ice Cream Sandwich', category: 'Desserts', description: 'a dreamy collab', date: '2025', tone: 'berry' },
  { id: 'a25', title: 'Smoked Salmon Everything Bagel Eclairs', category: 'Savory', description: 'NYC in choux form', date: '2025', tone: 'cream' },
  { id: 'a26', title: 'Brûlée Bars (collab with Jake Goldberg)', category: 'Desserts', description: 'torched + golden', date: '2025', tone: 'caramel' },
  { id: 'a27', title: 'How to Make Macarons (French Meringue Method)', category: 'Pastries', description: 'the technique deep-dive', date: '2025', tone: 'peach' },
  { id: 'a28', title: 'The Ultimate Easy Almond Croissant', category: 'Pastries', description: 'leftover-croissant magic', date: '2025', tone: 'caramel' },
];

export const products: Product[] = [
  { id: 'p1', name: 'Alchenny Merch', description: 'Apparel and totes from the Alchenny shop.', price: '$--', cta: 'Shop Now', tone: 'cream' },
  { id: 'p2', name: 'Cookie Drops', description: 'Pre-order limited cookie drops via Hotplate.', price: '$--', cta: 'Pre-Order', href: 'https://www.hotplate.com/alchenny', tone: 'caramel' },
  { id: 'p3', name: 'Pumpkin Spice Choc Chip Cookies', description: 'Seasonal drop. Chewy, warm, autumnal.', price: '$--', cta: 'Shop Now', tone: 'peach' },
  { id: 'p4', name: 'Honeycomb Candy', description: 'Holiday drop. Crackly golden shards.', price: '$--', cta: 'Shop Now', tone: 'caramel' },
  { id: 'p5', name: 'Holiday Cookie Box — Nutcracker Edition', description: 'A festive curated tin of holiday cookies.', price: '$--', cta: 'Shop Now', tone: 'mocha' },
  { id: 'p6', name: 'Custom Cake Orders', description: 'Bespoke celebration cakes by inquiry.', price: 'Inquiry', cta: 'Inquire', tone: 'rose' },
  { id: 'p7', name: 'Kitsby Event Tickets', description: 'Classes, demos, and pop-ups at Kitsby NYC.', price: 'Varies', cta: 'View Events', href: 'https://kitsby.com', tone: 'pistachio' },
  { id: 'p8', name: 'Substack Subscription', description: 'Join The Croissant Crew for paid recipes.', price: 'From Free', cta: 'Subscribe', href: 'https://alchenny.substack.com', tone: 'berry' },
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
