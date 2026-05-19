import { RecipeDetail } from '@/types';

export const RECIPE_DETAILS: RecipeDetail[] = [
  {
    slug: 'perfect-croissants',
    title: 'Perfect Croissants',
    subtitle: 'The definitive guide to laminated dough at home',
    description: 'After three years of pastry school and hundreds of failed attempts, I finally cracked the code on home croissants. This is everything I know.',
    heroTone: 'caramel',
    prepTime: '45 min',
    chillTime: '12–16 hrs',
    cookTime: '20 min',
    yield: '12 croissants',
    difficulty: 'Advanced',
    tags: ['pastry', 'french', 'laminated dough', 'weekend project'],
    ingredients: [
      { group: 'Dough (Détrempe)', items: [
        '500g bread flour (12–13% protein)',
        '10g fine sea salt',
        '80g caster sugar',
        '10g instant yeast',
        '300ml whole milk, cold',
        '40g unsalted butter, softened',
      ]},
      { group: 'Butter Block (Beurrage)', items: [
        '280g European-style unsalted butter (84% fat), cold',
      ]},
      { group: 'Egg Wash', items: [
        '1 egg yolk',
        '2 tbsp whole milk',
        'Pinch of salt',
      ]},
    ],
    steps: [
      {
        title: 'Make the détrempe',
        body: 'Combine flour, salt, sugar, and yeast in a stand mixer fitted with the dough hook. Add cold milk and mix on low for 3 minutes, then medium for 5 minutes until a smooth, elastic dough forms. Add softened butter and mix for 2 more minutes. The dough should be slightly tacky but not sticky.',
        tip: 'Keep everything cold. Warm dough is the enemy of lamination — the butter will melt into the dough instead of staying as distinct layers.',
      },
      {
        title: 'First chill',
        body: 'Shape into a rectangle, wrap tightly in plastic, and refrigerate for at least 2 hours or overnight. The gluten needs to relax so you can roll without it springing back.',
      },
      {
        title: 'Prepare the butter block',
        body: 'Beat cold butter between sheets of parchment into an even 19×19cm square. It should be pliable but still cold — about 15°C. If it cracks when you bend it, it\'s too cold; if it\'s soft and greasy, it\'s too warm.',
        tip: 'The butter and dough should have the same consistency when you laminate. Press both — they should yield with similar resistance.',
      },
      {
        title: 'Enclose the butter',
        body: 'Roll the chilled dough into a 38×20cm rectangle. Place the butter block in the center and fold the dough edges over it like an envelope, sealing completely. Roll out carefully to about 60×20cm, working from center outward.',
      },
      {
        title: 'Letter fold × 3',
        body: 'Fold the dough into thirds like a letter (this is a single fold). Wrap and chill for 30 minutes. Repeat twice more, rotating 90° each time. You now have 27 layers. Mark the dough with fingerprints so you remember how many folds you\'ve done.',
        tip: 'Never rush the resting periods. Overworked gluten tears, and tears mean butter leaks.',
      },
      {
        title: 'Roll, cut, and shape',
        body: 'Roll to 4mm thickness in a long rectangle (about 60×30cm). Cut into tall triangles with a 9cm base. Make a 1cm snip at the base, then gently stretch and roll from base to tip, curling the ends inward to form the classic crescent. Place on lined baking sheets.',
      },
      {
        title: 'Proof',
        body: 'Proof at 24–26°C for 2–3 hours until visibly puffed and the layers are visible through the dough. Gently jiggle the tray — they should wobble. If they don\'t move, keep going.',
        tip: 'Too hot and the butter melts; too cold and the yeast barely works. A switched-off oven with just the light on is often perfect.',
      },
      {
        title: 'Egg wash and bake',
        body: 'Gently brush with egg wash, avoiding the cut layers on the sides (it glues them together). Bake at 200°C fan for 18–20 minutes until deeply golden. Resist opening the oven for the first 15 minutes.',
      },
    ],
    notes: [
      'Day 1: Make détrempe, overnight chill.',
      'Day 2: Laminate (3 folds), shape, refrigerator proof overnight.',
      'Day 3: Finish proofing, bake.',
      'Unbaked shaped croissants freeze beautifully for up to 1 month. Thaw in fridge overnight before proofing.',
    ],
  },
  {
    slug: 'brown-butter-financiers',
    title: 'Brown Butter Financiers',
    subtitle: 'Crisp edges, fudgy center, intensely nutty',
    description: 'The financier is a masterclass in doing very little very well. Brown butter, almond flour, and whipped whites. That\'s basically it.',
    heroTone: 'mocha',
    prepTime: '15 min',
    chillTime: '1 hr',
    cookTime: '12 min',
    yield: '24 mini financiers',
    difficulty: 'Intermediate',
    tags: ['french', 'petit four', 'almond', 'brown butter', 'quick'],
    ingredients: [
      { group: 'Financiers', items: [
        '170g unsalted butter',
        '200g icing sugar, sifted',
        '75g plain flour',
        '100g almond flour (blanched)',
        '5 large egg whites (about 175g), room temperature',
        '1 tsp vanilla extract',
        'Flaky sea salt to finish',
      ]},
    ],
    steps: [
      {
        title: 'Brown the butter',
        body: 'Melt butter in a light-colored saucepan over medium heat. Swirl occasionally. After the foam subsides, watch closely for golden-brown milk solids and a nutty aroma. Pour immediately into a bowl to stop cooking. Cool to room temperature.',
        tip: 'Use a light-colored pan so you can see the color change. The difference between nutty brown and bitter black is about 30 seconds.',
      },
      {
        title: 'Mix the dry ingredients',
        body: 'Whisk icing sugar, plain flour, and almond flour together in a large bowl until no lumps remain.',
      },
      {
        title: 'Combine',
        body: 'Add the egg whites and vanilla to the dry ingredients. Fold until just combined — no need to whip. Add the cooled brown butter and fold until homogeneous. Don\'t overmix.',
      },
      {
        title: 'Rest the batter',
        body: 'Cover and refrigerate for at least 1 hour, or up to 48 hours. Resting hydrates the flours and gives a better crust.',
        tip: 'Made-ahead batter is the secret of every patisserie. The financiers will be noticeably better after 24 hours.',
      },
      {
        title: 'Bake',
        body: 'Preheat oven to 210°C fan. Butter the financier moulds generously (or use a mini muffin tin). Fill each 3/4 full. Sprinkle with flaky salt. Bake 10–12 minutes until the edges are deeply golden and the center is just set. Cool in moulds for 5 minutes before unmoulding.',
      },
    ],
    notes: [
      'Batter keeps refrigerated for up to 48 hours.',
      'Add 1 tsp matcha, 1 tbsp cocoa, or citrus zest to the dry ingredients for variations.',
      'A raspberry or blueberry pressed into each before baking is never a bad idea.',
    ],
  },
  {
    slug: 'paris-brest',
    title: 'Paris-Brest',
    subtitle: 'Choux pastry with praline mousseline',
    description: 'A wheel of choux filled with the most indulgent praline cream you\'ve ever tasted. This is the recipe I made for my final assessment at school.',
    heroTone: 'caramel',
    prepTime: '1.5 hrs',
    chillTime: '3 hrs',
    cookTime: '45 min',
    yield: '1 large (serves 8)',
    difficulty: 'Advanced',
    tags: ['french', 'choux', 'praline', 'showstopper'],
    ingredients: [
      { group: 'Choux Pastry', items: [
        '125ml whole milk',
        '125ml water',
        '110g unsalted butter',
        '5g caster sugar',
        '3g fine salt',
        '140g plain flour, sifted',
        '4–5 large eggs (about 240g cracked weight)',
        'Flaked almonds for topping',
      ]},
      { group: 'Praline Paste', items: [
        '200g blanched hazelnuts (or half hazelnuts, half almonds)',
        '200g caster sugar',
        '50ml water',
      ]},
      { group: 'Praline Mousseline', items: [
        '500ml whole milk',
        '4 egg yolks',
        '100g caster sugar',
        '40g cornflour',
        '250g unsalted butter, room temperature, cut in cubes',
        '150g praline paste (from above)',
      ]},
    ],
    steps: [
      {
        title: 'Make the praline paste',
        body: 'Toast hazelnuts at 180°C for 12 minutes until golden. Rub in a towel to remove skins. Make a dry caramel by cooking sugar to a deep amber without stirring. Off heat, add nuts and pour onto oiled parchment. Cool completely, break into pieces, and blitz in a food processor for 5–8 minutes until it becomes a smooth, oily paste.',
        tip: 'The processor will go through stages: crumbs, clumps, a ball, then finally paste. Be patient — it takes longer than you think.',
      },
      {
        title: 'Make the pastry cream',
        body: 'Heat milk to a simmer. Whisk yolks, sugar, and cornflour to a pale ribbon. Temper in hot milk, return to pan, and cook over medium heat, whisking constantly, until it thickens and large bubbles pop on the surface. Cook 1 more minute, then pour into a shallow tray, cover with plastic directly on surface, and refrigerate.',
      },
      {
        title: 'Make choux',
        body: 'Bring milk, water, butter, sugar, and salt to a boil. Off heat, add all flour at once and beat vigorously. Return to medium heat and cook, stirring, for 2 minutes until the paste pulls away from the sides and a film forms on the bottom. Transfer to mixer, beat briefly to cool, then add eggs one at a time until the paste falls in a slow, thick ribbon.',
        tip: 'The right consistency: lift the paddle and the batter should fall in a thick V-shape and hold for a moment before dropping. Too stiff = dense choux. Too loose = choux that spreads.',
      },
      {
        title: 'Pipe and bake choux',
        body: 'Draw a 22cm circle on parchment. Pipe two rings of choux around the circle, then a third ring on top in the gap. Brush with egg wash, scatter flaked almonds generously. Bake at 180°C fan for 40–45 minutes. Do not open the oven. Cool completely on a rack before cutting.',
      },
      {
        title: 'Make the mousseline',
        body: 'Beat room-temperature butter until very pale and fluffy (5+ minutes). Add cold pastry cream a spoonful at a time, beating continuously. Add praline paste and beat until smooth and homogeneous. The cream should be light, airy, and hold stiff peaks.',
        tip: 'If it looks curdled, the cream and butter were different temperatures. Gently warm the bowl with a blowtorch or warm water bath while beating.',
      },
      {
        title: 'Assemble',
        body: 'Split the choux ring horizontally. Pipe mousseline generously into the base using a star nozzle. Replace the lid. Dust with icing sugar. Refrigerate for 30 minutes before serving so the cream firms up.',
      },
    ],
    notes: [
      'Praline paste can be made up to 2 weeks ahead and stored in an airtight jar.',
      'Assemble maximum 2 hours before serving or the choux softens.',
      'Individual Paris-Brests (mini version): pipe 7cm rings, bake 28–30 minutes.',
    ],
  },
  {
    slug: 'lemon-curd-tart',
    title: 'Lemon Curd Tart',
    subtitle: 'Sharp, silky, and impossibly smooth',
    description: 'The curd is everything here — bright, sharp, with just enough butter to make it silky without becoming heavy. Poured into a blind-baked shell while still warm.',
    heroTone: 'cream',
    prepTime: '45 min',
    chillTime: '4 hrs',
    cookTime: '35 min',
    yield: '1 x 23cm tart (serves 10)',
    difficulty: 'Intermediate',
    tags: ['french', 'tart', 'lemon', 'citrus', 'summer'],
    ingredients: [
      { group: 'Pâte Sucrée', items: [
        '200g plain flour',
        '25g almond flour',
        '90g icing sugar',
        '120g cold unsalted butter, cubed',
        '1 egg yolk',
        '2 tbsp cold water',
        'Pinch of salt',
      ]},
      { group: 'Lemon Curd', items: [
        '4 large eggs + 2 yolks',
        '200g caster sugar',
        'Zest of 3 unwaxed lemons',
        '160ml fresh lemon juice (about 4–5 lemons)',
        '160g cold unsalted butter, cubed',
      ]},
    ],
    steps: [
      {
        title: 'Make pâte sucrée',
        body: 'Pulse flour, almond flour, icing sugar, salt, and butter in a food processor until it resembles breadcrumbs. Add yolk and water, pulse until it just comes together. Press into a disc, wrap, and chill for at least 1 hour.',
      },
      {
        title: 'Line and blind bake',
        body: 'Roll to 3mm and line a 23cm tart tin with removable base. Press well into the edges. Chill for 20 minutes. Line with parchment and baking beans. Bake at 170°C fan for 18 minutes. Remove beans and parchment, bake a further 12–15 minutes until evenly golden. Cool slightly.',
      },
      {
        title: 'Make the curd',
        body: 'Whisk eggs, yolks, sugar, zest, and juice together in a heatproof bowl. Set over a saucepan of barely simmering water (bowl shouldn\'t touch water). Cook, stirring constantly, for 8–12 minutes until thick enough to coat the back of a spoon (around 82°C). Remove from heat.',
        tip: 'The key is short bursts with thorough whisking in between. If you go too long between whisks, the edges of the bowl will overcook and you\'ll get scrambled egg bits. The sieving step at the end is your safety net — even if you get a little cooked egg, straining will catch it.',
      },
      {
        title: 'Butter and strain',
        body: 'Add cold butter a few pieces at a time, stirring until completely melted and incorporated. Strain through a fine sieve into a jug.',
      },
      {
        title: 'Fill and set',
        body: 'Pour warm curd into the still-warm tart shell. Tilt to level. Refrigerate for at least 4 hours until set. Serve cold, plain or with softly whipped cream.',
      },
    ],
    notes: [
      'The tart shell can be baked 2 days ahead, stored airtight at room temperature.',
      'Curd keeps refrigerated for 2 weeks in a jar.',
      'For Meyer lemon: reduce sugar by 20g and use the same method.',
    ],
  },
];
