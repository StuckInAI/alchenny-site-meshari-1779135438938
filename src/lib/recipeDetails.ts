import { RecipeDetail } from '../types';

export const recipeDetails: RecipeDetail[] = [
  {
    slug: 'perfect-croissants',
    title: 'Perfect Croissants',
    description:
      'Three days, a lot of butter, and the most satisfying bake of your life. This is the croissant recipe I developed during my first year at pastry school — refined over 200+ test batches.',
    prepTime: '3 days',
    cookTime: '20 min',
    totalTime: '3 days',
    servings: '12 croissants',
    difficulty: 'Advanced',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80',
    imageFallback:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80',
    sections: [
      {
        title: 'Détrempe (Base Dough)',
        ingredients: [
          '500g strong bread flour (13% protein)',
          '10g fine sea salt',
          '80g caster sugar',
          '10g instant yeast',
          '300ml whole milk, cold',
          '40g unsalted butter, softened',
        ],
      },
      {
        title: 'Beurrage (Butter Block)',
        ingredients: ['280g European-style unsalted butter (84% fat)'],
      },
      {
        title: 'Egg Wash',
        ingredients: ['2 egg yolks', '2 tbsp whole milk', 'Pinch of salt'],
      },
    ],
    instructions: [
      'Mix flour, salt, sugar and yeast in a stand mixer. Add cold milk and mix 4 minutes on low, then 6 minutes on medium until smooth. Add soft butter and mix until incorporated. Shape into rectangle, wrap in cling film, refrigerate overnight.',
      'Beat butter into a 19cm square between two sheets of parchment. Refrigerate until same consistency as dough (pliable but not soft).',
      'Roll dough to 38x20cm. Place butter block on one half, fold dough over, seal edges. Roll to 60x20cm. Complete first double fold (book fold). Wrap and rest 30 minutes in fridge.',
      'Repeat with a second double fold. Wrap and rest another 30 minutes minimum (or overnight).',
      'Roll dough to 4mm thick, approximately 60x40cm. Cut into tall triangles (base 9cm). Stretch slightly and roll from base to tip. Place on lined trays, tip underneath.',
      'Prove at 24-26°C for 2-3 hours until jiggly and visibly puffed. Apply egg wash gently — do not let it drip down the cut edges.',
      'Bake at 190°C fan for 18-20 minutes until deep amber. Cool on a wire rack for at least 20 minutes before eating.',
    ],
    notes: [
      'Temperature is everything. If your kitchen is warm, work quickly and chill more frequently.',
      'The butter should be the same temperature as the dough. Too cold and it shatters; too warm and it merges.',
      'Visible layers in the cross-section means you nailed the lamination.',
    ],
  },
  {
    slug: 'sourdough-country-loaf',
    title: 'Sourdough Country Loaf',
    description:
      'My go-to open-crumb sourdough for everyday baking. Works with 70-80% hydration and a reasonably active starter.',
    prepTime: '30 min active',
    cookTime: '45 min',
    totalTime: '24–36 hours',
    servings: '1 large loaf',
    difficulty: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=1200&q=80',
    imageFallback:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1200&q=80',
    sections: [
      {
        title: 'Levain (build night before)',
        ingredients: [
          '30g active starter',
          '60g bread flour',
          '60g water at 26°C',
        ],
      },
      {
        title: 'Final Dough',
        ingredients: [
          '375g bread flour',
          '75g whole wheat flour',
          '340g water at 32°C',
          '9g fine sea salt',
          '150g levain (all of above)',
        ],
      },
    ],
    instructions: [
      'Build levain night before: mix 30g starter, 60g bread flour, 60g water. Leave at room temp (20-22°C) 10-12 hours until domed and passes float test.',
      'Mix flours and 300g of water, autolyse 1 hour. Add levain and remaining water, mix well. Rest 30 minutes then add salt with a splash of water.',
      'Perform 4 sets of stretch-and-folds over 2 hours (30 min apart). After that, let bulk ferment undisturbed at 24-26°C until 50-75% grown and dough is airy (2-4 hours total).',
      'Turn onto lightly floured surface. Pre-shape into a round, rest 30 minutes uncovered.',
      'Final shape: flip, pull toward you to build tension, fold sides, roll forward. Place seam-up in a floured banneton.',
      'Cold proof in the fridge 12-16 hours. Do not skip this — it develops flavour and makes scoring easier.',
      'Preheat oven with Dutch oven inside to 250°C for 1 hour. Score dough straight from fridge. Bake covered 20 min, then uncovered 22-25 min until deeply coloured.',
    ],
    notes: [
      'If the dough spreads flat when you tip it out, it over-proofed. Reduce bulk ferment time next bake.',
      'An active starter should double within 4-8 hours of feeding at room temperature.',
      'Every oven is different — trust colour over timing.',
    ],
  },
  {
    slug: 'brown-butter-financiers',
    title: 'Brown Butter Financiers',
    description:
      'The definitive small-batch financier: burnished, nutty, intensely almond. A French patisserie staple that takes 25 minutes start to finish.',
    prepTime: '10 min',
    cookTime: '12 min',
    totalTime: '25 min',
    servings: '12 financiers',
    difficulty: 'Easy',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=80',
    imageFallback:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1200&q=80',
    sections: [
      {
        title: 'Ingredients',
        ingredients: [
          '100g unsalted butter',
          '120g icing sugar, sifted',
          '50g ground almonds',
          '35g plain flour',
          'Pinch of fine sea salt',
          '3 egg whites (about 100g)',
          '1 tsp vanilla extract',
          'Optional: 12 raspberries or flaked almonds for topping',
        ],
      },
    ],
    instructions: [
      'Preheat oven to 200°C fan. Butter a 12-hole financier or mini loaf tin generously.',
      'Brown the butter: melt over medium heat, swirling often, until milk solids turn hazelnut-brown and it smells nutty. Pour immediately into a cold bowl to stop cooking.',
      'Whisk together icing sugar, ground almonds, flour and salt. Add egg whites and vanilla, stir until smooth. Pour in warm brown butter and fold in.',
      'Fill moulds to about 90% full. Press a raspberry or a pinch of flaked almonds on top if using.',
      'Bake 11-13 minutes until edges are deep golden and tops spring back. Cool in tin 5 minutes then turn out.',
    ],
    notes: [
      'Do not over-bake. The centre should be just set — they firm up as they cool.',
      'The batter keeps in the fridge for 3 days, ready to bake fresh.',
      'Brown butter is done when it smells like toffee popcorn and the foam subsides to reveal brown flecks.',
    ],
  },
  {
    slug: 'lemon-curd',
    title: 'Microwave Lemon Curd',
    description:
      'I discovered the microwave method for lemon curd almost by accident. I was making curd on the stovetop, got distracted, curdled the eggs, and in a moment of desperate improvisation tried the microwave. Reader, it was perfect. The short bursts of heat mean you can\'t scramble the eggs, and the constant stirring gives you full control over the texture. I haven\'t made stovetop curd since.',
    prepTime: '5 min',
    cookTime: '5\u20136 min',
    totalTime: '~10 min',
    servings: '1\u00bd cups (360ml)',
    difficulty: 'Easy',
    image:
      'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=1200&q=80',
    imageFallback:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&q=80',
    sections: [
      {
        title: 'Ingredients',
        ingredients: [
          '3 large eggs',
          '150g caster sugar',
          'Zest of 2 lemons',
          '120ml fresh lemon juice (about 3-4 lemons)',
          '60g unsalted butter, cubed',
          'Pinch of fine sea salt',
        ],
      },
    ],
    instructions: [
      'Whisk eggs, sugar, lemon zest, lemon juice and salt together in a large microwave-safe bowl or jug.',
      'Microwave on full power for 1 minute. Whisk vigorously.',
      'Continue microwaving in 30-second bursts, whisking after each, until the curd is thick enough to coat a spoon — usually 4-5 minutes total.',
      'Remove from microwave. Add butter cubes and whisk until melted and smooth.',
      'Pour through a fine sieve into a jar or bowl. Press cling film directly onto the surface.',
      'Refrigerate until set, at least 1 hour. Keeps for 2 weeks in the fridge.',
    ],
    notes: [
      'The curd will look too runny when hot \u2014 don\'t keep microwaving. It thickens dramatically as it cools. Trust the process.',
      'All microwaves are different. If yours runs hot, use 80% power and check more frequently.',
      'For a more intensely lemony curd, add the zest of a third lemon.',
      'Use as a tart filling, spread on scones, swirl into cheesecake, or eat straight from the jar.',
    ],
  },
];
