export interface RecipeSection {
  title: string;
  ingredients: string[];
  steps: string[];
}

export interface TipBox {
  text: string;
}

export interface RecipeDetail {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: string;
  difficulty: string;
  image: string;
  imageFallback: string;
  sections: RecipeSection[];
  tips?: TipBox[];
  notes: string[];
}

// All image URLs point to alchenny.com's Squarespace CDN.
// If the CDN returns a 403, the component falls back to imageFallback.
export const RECIPE_DETAILS: RecipeDetail[] = [
  {
    slug: 'almond-croissant',
    title: 'The Ultimate Easy Almond Croissant Recipe',
    subtitle: 'Crispy, frangipane-filled, powdered-sugar-dusted perfection',
    description:
      'I first encountered the almond croissant during a stage at Breads Bakery in France. Their version — soaked in simple syrup, stuffed and topped with almond cream, blanketed in flaked almonds and powdered sugar — was a revelation. The magic trick? You start with day-old croissants. This is the perfect "make something incredible out of yesterday\'s bake" recipe.',
    prepTime: '20 min',
    cookTime: '20–25 min',
    totalTime: '40–45 min',
    servings: '4 croissants',
    difficulty: 'Easy',
    image:
      'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/a30ae2cc-85bc-4c5a-b516-aca39fe4d1ba/almond-croissant.jpg?format=1500w',
    imageFallback:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80',
    sections: [
      {
        title: 'Simple Syrup',
        ingredients: [
          '100g (½ cup) granulated sugar',
          '120ml (½ cup) water',
          '1 tsp almond extract (optional)',
        ],
        steps: [
          'Combine sugar and water in a small saucepan over medium heat.',
          'Stir until sugar dissolves completely. Remove from heat.',
          'Add almond extract if using. Cool to room temperature.',
        ],
      },
      {
        title: 'Almond Cream (Frangipane)',
        ingredients: [
          '115g (½ cup) unsalted butter, softened',
          '100g (½ cup) granulated sugar',
          '2 large eggs, room temperature',
          '1 tsp vanilla extract',
          '100g (1 cup) almond flour / blanched ground almonds',
          '2 tbsp all-purpose flour',
          'Pinch of salt',
        ],
        steps: [
          'Beat softened butter and sugar together until light and fluffy, about 3 minutes.',
          'Add eggs one at a time, beating well after each addition.',
          'Mix in vanilla extract.',
          'Fold in almond flour, all-purpose flour, and salt until just combined.',
          'Set aside at room temperature if using immediately, or refrigerate up to 3 days.',
        ],
      },
      {
        title: 'Assembly & Baking',
        ingredients: [
          '4 day-old croissants',
          '60g (½ cup) sliced almonds',
          'Powdered sugar, for dusting',
        ],
        steps: [
          'Preheat oven to 175°C (350°F). Line a baking sheet with parchment paper.',
          'Slice each croissant in half horizontally, like a sandwich.',
          'Generously brush the cut sides of each croissant half with simple syrup. Don't be shy — the croissant should be noticeably moist.',
          'Spread 2–3 tablespoons of almond cream on the bottom half of each croissant.',
          'Replace the top and spread another 1–2 tablespoons of almond cream over the top.',
          'Press sliced almonds generously onto the top of each croissant.',
          'Bake for 20–25 minutes until the almond cream is set and the almonds are golden brown.',
          'Cool for 10 minutes, then dust generously with powdered sugar. Serve warm.',
        ],
      },
    ],
    notes: [
      'Day-old croissants are essential — fresh croissants are too soft and will get soggy. The slight staleness helps them absorb the syrup without falling apart.',
      'Don't skip the simple syrup. It's what keeps the inside moist and adds that characteristic sweetness.',
      'Leftover frangipane keeps in the fridge for up to a week, or freeze for 3 months. Use it in tarts or galette des rois.',
      'These reheat beautifully at 160°C for 8 minutes the next day.',
    ],
  },
  {
    slug: 'strawberry-shortcake',
    title: 'Fluffy Strawberry Shortcake with Chiffon Cake',
    subtitle: 'Impossibly light layers of chiffon, cream, and strawberries',
    description:
      'This is my take on the classic Japanese strawberry shortcake — a cake so light it barely seems real. The secret is a proper chiffon cake base and a whipped cream that actually holds its structure. The cream cheese trick is a game-changer: just a small amount stabilises the whipped cream so it holds for hours without weeping or deflating.',
    prepTime: '30 min',
    cookTime: '30–35 min',
    totalTime: '60–65 min',
    servings: '8–10 servings',
    difficulty: 'Intermediate',
    image:
      'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/5f4d7e3a-df6e-4c9d-b5f1-2b8a9f3e1d2c/strawberry-shortcake.jpg?format=1500w',
    imageFallback:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&q=80',
    sections: [
      {
        title: 'Chiffon Cake',
        ingredients: [
          '6 large eggs, separated, room temperature',
          '150g (¾ cup) granulated sugar, divided',
          '120ml (½ cup) neutral oil (vegetable or canola)',
          '120ml (½ cup) whole milk',
          '1 tsp vanilla extract',
          '150g (1¼ cups) cake flour (not all-purpose)',
          '1½ tsp baking powder',
          '¼ tsp salt',
          '¼ tsp cream of tartar',
        ],
        steps: [
          'Preheat oven to 165°C (325°F). Do not grease a 23cm (9-inch) tube or angel food pan — the batter needs to cling to the sides to rise.',
          'In a large bowl, whisk yolks with 100g of the sugar until pale and ribbony. Whisk in oil, milk, and vanilla.',
          'Sift in cake flour, baking powder, and salt. Fold until a smooth batter forms.',
          'In a spotlessly clean bowl, beat egg whites with cream of tartar on medium speed until foamy. Gradually add remaining 50g sugar and beat to stiff, glossy peaks. This is the most critical step — under-whipped whites make a dense cake.',
          'Fold one-third of the meringue into the yolk batter to lighten it. Then gently fold in remaining meringue in two additions, working quickly but carefully to preserve volume.',
          'Pour into ungreased pan. Bake 30–35 minutes until a skewer comes out clean and the top springs back when lightly pressed.',
          'Immediately invert the pan onto a wire rack and cool completely upside down — this prevents the cake from collapsing.',
        ],
      },
      {
        title: 'Stabilised Whipped Cream',
        ingredients: [
          '480ml (2 cups) cold heavy whipping cream',
          '60g (2 oz) cream cheese, softened to room temperature',
          '60g (½ cup) powdered sugar, sifted',
          '1 tsp vanilla extract',
        ],
        steps: [
          'Beat softened cream cheese until completely smooth with no lumps.',
          'Add powdered sugar and vanilla, beat until combined.',
          'With the mixer running, slowly drizzle in the cold heavy cream.',
          'Increase speed to medium-high and beat until the cream holds firm peaks. It should be spreadable but not grainy.',
          'Refrigerate until ready to use — this cream holds its shape for 4–6 hours.',
        ],
      },
      {
        title: 'Assembly',
        ingredients: [
          '500g (about 1 lb) fresh strawberries, hulled and sliced',
          '2 tbsp granulated sugar',
          'Extra strawberries and mint for decoration',
        ],
        steps: [
          'Toss sliced strawberries with sugar and let macerate for 15 minutes — they'll release their juices.',
          'Slice cooled cake horizontally into two even layers.',
          'Place the bottom layer on a cake board or plate. Spread a generous layer of whipped cream.',
          'Arrange the macerated strawberry slices evenly over the cream.',
          'Top with the second cake layer. Frost the outside and top with remaining whipped cream.',
          'Decorate with whole strawberries, sliced berries, or a simple fan pattern. Serve immediately or refrigerate for up to 4 hours.',
        ],
      },
    ],
    notes: [
      'The key to chiffon cake is whipping your egg whites to STIFF peaks — they should hold their shape and not slide when you tilt the bowl. Under-whipped whites are the #1 reason chiffon cakes are dense.',
      'Do not grease the pan. The batter needs to grip the sides of the pan to climb and stay tall.',
      'The cream cheese trick: even a small amount (60g to 480ml cream) dramatically stabilises whipped cream. It won't taste like cream cheese — it just keeps the cream from deflating.',
      'Cool the cake completely upside-down. This is non-negotiable for a tall, airy chiffon.',
      'Cake flour makes a noticeably more tender crumb than all-purpose. Don't substitute.',
    ],
  },
  {
    slug: 'macarons',
    title: 'How to Make Macarons (French Meringue Method)',
    subtitle: 'Crisp shells, chewy centres — demystified',
    description:
      'Let me say something controversial: macarons are not that hard. They have a reputation for being finicky and temperamental, and yes, some days they are. But most failures come from a small number of fixable mistakes. This recipe uses the French meringue method — no hot sugar syrup, no candy thermometer. Just egg whites, sugar, and patience.',
    prepTime: '45 min + 30 min resting',
    cookTime: '12–15 min',
    totalTime: '~1.5 hours',
    servings: '24 sandwich cookies (48 shells)',
    difficulty: 'Advanced',
    image:
      'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/3a1d5e9b-7c4f-4b2a-8e6d-1f9a2b3c4d5e/macarons.jpg?format=1500w',
    imageFallback:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=80',
    tips: [
      {
        text: '💡 Age your egg whites. Leave them uncovered in the fridge for 24 hours. This reduces moisture and produces a more stable meringue.',
      },
      {
        text: '💡 Weigh everything. Macarons are unforgiving — a 5g difference in almond flour can mean the difference between smooth shells and lumpy ones.',
      },
      {
        text: '💡 The "lava" test for macaronnage: the batter should fall off the spatula in a thick, slow ribbon and the ribbon should dissolve back into the batter within 10 seconds. If it dissolves instantly, you've over-mixed. If it stays in a ribbon, keep folding.',
      },
      {
        text: '💡 On hollow shells: the internet is obsessed with hollow macarons. A small air pocket is fine. A thick band of air is usually caused by under-baking or oven temperature issues. Don't stress — they still taste exactly the same.',
      },
    ],
    sections: [
      {
        title: 'Tant Pour Tant (Almond-Sugar Base)',
        ingredients: [
          '150g almond flour, finely ground',
          '150g powdered sugar',
          'Gel food colouring (optional)',
        ],
        steps: [
          'Sift almond flour and powdered sugar together into a large bowl. Discard any large almond pieces that don't pass through the sieve.',
          'For very smooth shells, pulse in a food processor before sifting.',
          'Set aside.',
        ],
      },
      {
        title: 'The French Meringue',
        ingredients: [
          '110g aged egg whites (about 3 large eggs), room temperature',
          '150g granulated sugar',
          '¼ tsp cream of tartar',
        ],
        steps: [
          'In a clean, grease-free bowl, beat egg whites and cream of tartar on medium speed until foamy.',
          'Add sugar in a slow, steady stream. Increase to medium-high speed.',
          'Beat until stiff, glossy peaks form. The meringue should be smooth and shiny, not dry or clumpy.',
          'Add gel food colouring now if using. Beat briefly to incorporate.',
        ],
      },
      {
        title: 'The Macaronnage (Folding)',
        ingredients: [],
        steps: [
          'Add the tant pour tant to the meringue all at once.',
          'Using a flexible spatula, fold with deliberate strokes — press the batter against the bowl, scrape under, fold over. This intentionally deflates the meringue.',
          'Test for the lava consistency: lift your spatula — the batter should fall off in a thick ribbon and dissolve back into itself in about 10 seconds.',
          'Stop folding the moment you hit lava consistency. Over-mixed batter produces flat, spread-out shells.',
        ],
      },
      {
        title: 'Piping & Baking',
        ingredients: [],
        steps: [
          'Transfer batter to a piping bag fitted with a round 1cm tip.',
          'Pipe 4cm circles onto parchment-lined baking sheets, spacing 3cm apart. Hold the bag perpendicular and release pressure before lifting.',
          'Tap the trays firmly on the counter 3–4 times to release air bubbles. Pop any remaining bubbles with a toothpick.',
          'REST the piped shells at room temperature for 30–60 minutes until a dry skin forms. The surface should not stick to your finger when lightly touched.',
          'Preheat oven to 150°C (300°F). Bake one tray at a time in the center of the oven for 12–15 minutes.',
          'Cool completely on the tray before removing. The shells should peel cleanly off the parchment.',
        ],
      },
      {
        title: 'Basic Vanilla Buttercream Filling',
        ingredients: [
          '115g (½ cup) unsalted butter, softened',
          '240g (2 cups) powdered sugar, sifted',
          '2 tbsp heavy cream',
          '1 tsp vanilla extract',
          'Pinch of salt',
        ],
        steps: [
          'Beat butter until pale and fluffy, about 3 minutes.',
          'Add powdered sugar gradually, beating on low to avoid a cloud of sugar.',
          'Add cream, vanilla, and salt. Beat on medium-high for 2 minutes until light.',
          'Pipe a small amount onto half the shells. Sandwich with matching shells.',
          'Refrigerate sandwiched macarons for 24 hours — this is called maturation and makes the shells softer and chewier.',
        ],
      },
    ],
    notes: [
      'Hollow shells: A minor air pocket is completely normal and doesn't affect flavour. Severe hollowness usually means under-baking or oven is too hot.',
      'Cracked shells: Usually means the resting time was too short — the skin hadn't fully formed.',
      'Spreading flat: Batter is over-mixed, or meringue wasn't stiff enough.',
      'Feet too small or absent: Oven temperature too low, or batter too stiff.',
      'Aged egg whites really do make a difference — the reduced moisture creates a more stable foam.',
      'Save the leftover egg yolks for lemon curd, pastry cream, or crème brûlée!',
    ],
  },
  {
    slug: 'pumpkin-cookies',
    title: 'Chewy Pumpkin Spice Choc Chip Cookies',
    subtitle: 'Brown-buttered, molasses-spiked, and perfectly chewy',
    description:
      'The problem with most pumpkin cookies? They're cakey. That spongey, bread-like texture happens because pumpkin puree adds moisture and structure — great for muffins, terrible for cookies. My solution removes excess moisture at every turn: brown butter (which evaporates water), egg yolk only (no egg white), and a mandatory fridge chill to prevent spreading.',
    prepTime: '20 min + 1 hour chilling',
    cookTime: '13–15 min',
    totalTime: '~1.5 hours',
    servings: '~10 large cookies',
    difficulty: 'Easy',
    image:
      'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/6b2e8f1a-4d3c-4e5b-9f7a-2c1d3e4f5a6b/pumpkin-cookies.jpg?format=1500w',
    imageFallback:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1200&q=80',
    tips: [
      {
        text: '💡 Got leftover egg whites from this recipe? They're perfect for macarons. Store in the fridge for up to 24 hours (aged whites = more stable meringue).',
      },
    ],
    sections: [
      {
        title: 'Ingredients',
        ingredients: [
          '170g (¾ cup) unsalted butter',
          '200g (1 cup) granulated sugar',
          '1 tbsp molasses (not blackstrap) — this IS your brown sugar',
          '1 large egg yolk (save the white for macarons!)',
          '100g (scant ½ cup) pumpkin puree (from a can, not pie filling)',
          '1 tsp vanilla extract',
          '250g (2 cups) all-purpose flour',
          '1 tsp baking soda',
          '½ tsp salt',
          '1½ tsp cinnamon',
          '¾ tsp ginger',
          '¼ tsp nutmeg',
          '¼ tsp cloves',
          '170g (1 cup) chocolate chips (dark or semi-sweet)',
        ],
        steps: [
          'Brown the butter: melt butter in a light-coloured saucepan over medium heat, stirring occasionally, until it smells nutty and turns deep amber. Pour into a large mixing bowl and cool for 10 minutes.',
          'Whisk granulated sugar and molasses into the browned butter. The molasses replaces brown sugar and adds deeper flavour without extra moisture.',
          'Add egg yolk, pumpkin puree, and vanilla. Whisk vigorously until combined.',
          'In a separate bowl, whisk together flour, baking soda, salt, and spices.',
          'Fold dry ingredients into wet until just combined — a few streaks of flour are fine.',
          'Fold in chocolate chips.',
          'Cover the bowl and refrigerate for at least 1 hour, or up to 48 hours. This step is non-negotiable for chewy, non-spreading cookies.',
          'Preheat oven to 175°C (350°F). Line baking sheets with parchment.',
          'Scoop dough into large balls (about 60g each — a heaped ice cream scoop). Place 6 per tray.',
          'Bake 13–15 minutes until the edges are set but the centres look slightly underdone. They will firm up as they cool.',
          'Let cool on the tray for 10 minutes before transferring. Resist the urge to eat immediately — they're much better once fully cooled.',
        ],
      },
    ],
    notes: [
      'Why molasses instead of brown sugar? Molasses is pure flavour without the extra moisture that brown sugar (which contains molasses + water) would add. The less moisture, the chewier the cookie.',
      'Egg yolk only: egg whites add lift and moisture, which gives you cakey cookies. The yolk provides richness and structure without fluffiness.',
      'Brown butter removes water: when you brown butter, the water in the butter evaporates. Less water = less steam = denser, chewier cookie.',
      'The chill is mandatory. Cold dough spreads slowly in the oven, giving cookies time to develop flavour and set into a chewy rather than crispy texture.',
      'These taste even better the next day. The spices deepen and the texture firms up into something genuinely special.',
    ],
  },
  {
    slug: 'lemon-curd',
    title: 'Quick and Easy Microwave Lemon Curd',
    subtitle: 'Silky, tangy, and done in under 10 minutes',
    description:
      'I discovered the microwave method for lemon curd almost by accident. I was making curd on the stovetop, got distracted, curdled the eggs, and in a moment of desperate improvisation tried the microwave. Reader, it was perfect. The short bursts of heat mean you can't scramble the eggs, and the constant stirring gives you full control over the texture. I haven't made stovetop curd since.',
    prepTime: '5 min',
    cookTime: '5–6 min',
    totalTime: '~10 min',
    servings: '1½ cups (360ml)',
    difficulty: 'Easy',
    image:
      'https://images.squarespace-cdn.com/content/v1/6573a1c1b144cd6a7cf16342/7c3f9a2b-5e4d-4f6c-8a1b-3d2e4f5a6b7c/lemon-curd.jpg?format=1500w',
    imageFallback:
      'https://images.unsplash.com/photo-1621955511258-5b3a6c7e8a8d?w=1200&q=80',
    sections: [
      {
        title: 'Ingredients',
        ingredients: [
          '3 large eggs',
          '150g (¾ cup) granulated sugar',
          '120ml (½ cup) fresh lemon juice (3–4 lemons)',
          'Zest of 2 lemons',
          '85g (6 tbsp) unsalted butter, cut into small cubes',
          'Pinch of salt',
        ],
        steps: [
          'In a large microwave-safe bowl (use bigger than you think — the curd bubbles up), whisk eggs and sugar until combined.',
          'Add lemon juice, lemon zest, and salt. Whisk until smooth.',
          'ROUND 1: Microwave on HIGH for 1 minute. Remove and whisk vigorously.',
          'ROUND 2: Microwave for another 1 minute. Whisk again — the mixture will look thin and slightly foamy.',
          'ROUND 3: Microwave for 1 minute. Whisk. You should start to see it thickening slightly around the edges.',
          'ROUND 4: Microwave for 45 seconds. Whisk well.',
          'ROUND 5: Microwave for 30–45 seconds. At this point the curd should be noticeably thicker and coat the back of a spoon. It will look too thin when hot — it thickens significantly as it cools.',
          'Remove from microwave. Add butter cubes a few at a time, whisking after each addition until fully melted and incorporated.',
          'Strain through a fine-mesh sieve into a clean jar or container to remove the zest and any bits of cooked egg.',
          'Press plastic wrap directly onto the surface of the curd (to prevent a skin forming). Refrigerate for at least 2 hours until fully set.',
        ],
      },
    ],
    notes: [
      'The curd will look too runny when hot — don't keep microwaving. It thickens dramatically as it cools. Trust the process.',
      'All microwaves are different. If yours runs hot, use 80% power and check more frequently.',
      'Straining is optional but recommended — it gives you a silky-smooth curd with no chewy bits.',
      'Storage: keeps in the fridge for up to 2 weeks in a sealed jar.',
      'Uses: tart filling, macaron filling, spread on toast, swirled into yogurt, stirred into whipped cream.',
      'Make it orange curd: substitute the lemon for blood orange or navel orange juice and reduce sugar slightly (oranges are sweeter).',
    ],
  },
];
