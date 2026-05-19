export interface RecipeSection {
  title: string;
  ingredients: string[];
  steps: string[];
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
  sections: RecipeSection[];
  notes: string[];
  image?: string;
}

export const RECIPE_DETAILS: RecipeDetail[] = [
  {
    slug: 'croissants',
    title: 'Classic Butter Croissants',
    subtitle: 'The definitive guide to laminated dough at home',
    description: 'After three years of pastry school and hundreds of test batches, this is the croissant recipe I always come back to. Flaky, buttery, and deeply laminated.',
    prepTime: '2 hours',
    cookTime: '20 minutes',
    totalTime: '3 days',
    servings: '12 croissants',
    difficulty: 'Advanced',
    sections: [
      {
        title: 'Détrempe (Base Dough)',
        ingredients: [
          '500g bread flour',
          '10g salt',
          '80g sugar',
          '10g instant yeast',
          '300ml whole milk, cold',
          '30g unsalted butter, softened',
        ],
        steps: [
          'Combine flour, salt, sugar, and yeast in a stand mixer bowl. Keep salt and yeast on opposite sides.',
          'Add cold milk and mix on low for 3 minutes, then medium for 5 minutes until a smooth dough forms.',
          'Add softened butter and mix until incorporated.',
          'Shape into a rectangle, wrap tightly in plastic, and refrigerate overnight.',
        ],
      },
      {
        title: 'Beurrage (Butter Block)',
        ingredients: [
          '280g European-style butter (84% fat minimum), cold',
        ],
        steps: [
          'Pound cold butter between parchment paper into a 19cm square.',
          'Butter should be pliable but still cold — around 13°C.',
        ],
      },
      {
        title: 'Lamination',
        ingredients: [],
        steps: [
          'Roll détrempe into a 40x20cm rectangle. Encase the butter block.',
          'Roll to 60x20cm. Perform a letter fold (3-fold). Wrap and refrigerate 30 min.',
          'Repeat the roll and fold two more times, chilling between each.',
          'After three folds, you have 27 layers.',
        ],
      },
      {
        title: 'Shaping & Baking',
        ingredients: [
          '1 egg yolk',
          '1 tbsp heavy cream',
        ],
        steps: [
          'Roll laminated dough to 4mm thickness. Cut long triangles (base 10cm).',
          'Gently stretch each triangle and roll from base to tip. Curve the ends.',
          'Proof at 24–26°C for 2.5–3 hours until jiggly and doubled.',
          'Egg wash gently. Bake at 190°C (375°F) for 18–20 minutes until deep amber.',
        ],
      },
    ],
    notes: [
      'Temperature is everything — if butter breaks or smears, chill immediately.',
      'Use a scale, not cups. Croissants are unforgiving with measurements.',
      'The dough should never feel warm during lamination.',
      'Under-proofed croissants won\'t open up. Look for the jiggle.',
    ],
  },
  {
    slug: 'brown-butter-brownies',
    title: 'Brown Butter Brownies',
    subtitle: 'Crisp edges, fudgy center, intensely nutty',
    description: 'Browned butter adds a nutty, caramel depth that makes these the best brownies I\'ve ever eaten. The key is using more chocolate than you think you need.',
    prepTime: '20 minutes',
    cookTime: '25 minutes',
    totalTime: '45 minutes',
    servings: '16 brownies',
    difficulty: 'Beginner',
    sections: [
      {
        title: 'Ingredients',
        ingredients: [
          '170g unsalted butter',
          '200g dark chocolate (70%), chopped',
          '300g granulated sugar',
          '3 large eggs + 1 yolk',
          '2 tsp vanilla extract',
          '100g all-purpose flour',
          '30g Dutch cocoa powder',
          '1 tsp flaky sea salt',
        ],
        steps: [
          'Preheat oven to 175°C (350°F). Line a 23cm square pan with parchment.',
          'Brown the butter in a saucepan over medium heat until deep amber and nutty. Pour over chopped chocolate and stir to melt.',
          'Whisk in sugar, then eggs one at a time, then vanilla. Whisk vigorously for 2 minutes — this creates the shiny top.',
          'Fold in flour and cocoa. Do not overmix.',
          'Pour into pan, sprinkle with sea salt. Bake 23–25 minutes.',
          'Cool completely before cutting. The center will look underdone — trust the process.',
        ],
      },
    ],
    notes: [
      'Brown the butter until you smell hazelnuts — it should be deep amber.',
      'The vigorous whisking with eggs is what gives you that crinkly, shiny top.',
      'These are better the next day. Seriously.',
    ],
  },
  {
    slug: 'paris-brest',
    title: 'Paris-Brest',
    subtitle: 'Choux pastry with praline mousseline',
    description: 'A classic French pastry shaped like a bicycle wheel, filled with hazelnut praline mousseline cream. This is a showstopper that\'s deeply worth the effort.',
    prepTime: '1.5 hours',
    cookTime: '35 minutes',
    totalTime: '3 hours',
    servings: '8 servings',
    difficulty: 'Intermediate',
    sections: [
      {
        title: 'Choux Pastry',
        ingredients: [
          '250ml water',
          '100g unsalted butter',
          '5g salt',
          '10g sugar',
          '150g bread flour',
          '4–5 eggs',
          'Sliced almonds for topping',
          'Pearl sugar (optional)',
        ],
        steps: [
          'Bring water, butter, salt, and sugar to a boil.',
          'Add flour all at once and stir vigorously until dough pulls from sides and a film forms on the pan.',
          'Transfer to mixer. Add eggs one at a time until dough falls in a slow ribbon.',
          'Pipe two concentric rings on a lined baking sheet. Top with almonds.',
          'Bake at 200°C (390°F) for 30–35 minutes without opening the oven.',
        ],
      },
      {
        title: 'Praline Mousseline',
        ingredients: [
          '120g hazelnuts, roasted',
          '120g granulated sugar',
          '500ml whole milk',
          '4 egg yolks',
          '80g sugar',
          '50g cornstarch',
          '200g unsalted butter, softened',
        ],
        steps: [
          'Make praline: Cook sugar to amber caramel, add hazelnuts. Pour on parchment to cool. Blitz to a smooth paste.',
          'Make pastry cream: Whisk yolks, sugar, and cornstarch. Heat milk, temper into eggs, cook until thick. Cool completely.',
          'Beat softened butter until light, add pastry cream spoon by spoon, then fold in praline paste.',
          'Slice choux ring horizontally, pipe mousseline generously, cap and dust with powdered sugar.',
        ],
      },
    ],
    notes: [
      'Don\'t open the oven during choux baking — it will collapse.',
      'Pastry cream must be completely cold before making mousseline.',
      'Praline paste can be made days ahead and stored in the fridge.',
    ],
  },
  {
    slug: 'lemon-tart',
    title: 'French Lemon Tart',
    subtitle: 'Sharp, silky, and impossibly smooth',
    description: 'This is the lemon tart I learned in my second year of pastry school. The filling is more curd than custard — intense, citrusy, and impossibly smooth.',
    prepTime: '45 minutes',
    cookTime: '30 minutes',
    totalTime: '4 hours',
    servings: '8 servings',
    difficulty: 'Intermediate',
    sections: [
      {
        title: 'Pâte Sucrée',
        ingredients: [
          '200g all-purpose flour',
          '80g powdered sugar',
          '25g almond flour',
          '2g salt',
          '120g unsalted butter, cold, cubed',
          '1 egg yolk',
          '20ml heavy cream',
        ],
        steps: [
          'Mix flour, sugar, almond flour, and salt. Cut in cold butter until sandy.',
          'Add yolk and cream. Mix just until dough comes together.',
          'Press into tart shell. Freeze 20 minutes. Blind bake at 170°C for 18–20 min until golden.',
        ],
      },
      {
        title: 'Lemon Curd Filling',
        ingredients: [
          '180ml fresh lemon juice (4–5 lemons)',
          'Zest of 3 lemons',
          '200g granulated sugar',
          '4 whole eggs',
          '150g unsalted butter, cold, cubed',
        ],
        steps: [
          'Whisk lemon juice, zest, sugar, and eggs in a saucepan.',
          'Cook over medium heat, stirring constantly, until thick (82°C).',
          'Remove from heat. Strain into a blender. Blend in cold butter piece by piece.',
          'Pour into warm tart shell. Refrigerate 2 hours minimum.',
        ],
      },
    ],
    notes: [
      'Use a thermometer — 82°C is the sweet spot for set without scrambled eggs.',
      'The blender emulsification gives an unreal silky texture.',
      'Serve at room temperature for the best flavor.',
    ],
  },
];

export const RECIPE_IMAGES: Record<string, string> = {
  croissants: '/images/croissants.jpg',
  'brown-butter-brownies': '/images/brownies.jpg',
  'paris-brest': '/images/paris-brest.jpg',
  'lemon-tart': '/images/lemon-tart.jpg',
};
