import type { RecipeDetail } from '@/types/index';

export const recipeDetails: RecipeDetail[] = [
  {
    slug: 'classic-croissant',
    title: 'Classic Croissant',
    description: 'Buttery, flaky, golden — the croissant that started it all.',
    category: 'pastry',
    tone: 'caramel',
    featured: true,
    prepTime: '3 hours',
    cookTime: '20 minutes',
    servings: '8 croissants',
    difficulty: 'Advanced',
    intro: 'The classic croissant is a labour of love — but the result is worth every fold.',
    sections: [
      {
        heading: 'Ingredients',
        items: [
          '500g strong white flour',
          '10g salt',
          '80g sugar',
          '10g instant yeast',
          '300ml cold whole milk',
          '280g unsalted butter (for lamination)',
        ],
      },
      {
        heading: 'Method',
        items: [
          'Combine flour, salt, sugar, and yeast in a bowl.',
          'Add cold milk and mix to a shaggy dough.',
          'Knead briefly and refrigerate overnight.',
          'Flatten butter into a 20cm square.',
          'Enclose butter in dough and perform 3 letter folds.',
          'Shape, proof, and bake at 200°C for 18–20 minutes.',
        ],
      },
    ],
    tips: [
      {
        title: 'Baker\'s Tips',
        body: 'Keep everything cold. Warm butter breaks through the dough and ruins the layers.',
        tips: [
          'Rest the dough in the fridge between folds.',
          'Use a sharp knife or bench scraper for clean cuts.',
        ],
      },
    ],
  },
  {
    slug: 'sourdough-loaf',
    title: 'Sourdough Loaf',
    description: 'A tangy, open-crumb sourdough baked in a Dutch oven.',
    category: 'bread',
    tone: 'mocha',
    featured: true,
    prepTime: '24 hours',
    cookTime: '45 minutes',
    servings: '1 loaf',
    difficulty: 'Intermediate',
    intro: 'Good sourdough takes time — but the hands-on work is minimal.',
    sections: [
      {
        heading: 'Ingredients',
        items: [
          '450g bread flour',
          '50g whole wheat flour',
          '375g water',
          '100g active starter',
          '10g salt',
        ],
      },
      {
        heading: 'Method',
        items: [
          'Mix flour and water, autolyse 1 hour.',
          'Add starter and salt, mix well.',
          'Perform 4 sets of stretch and folds over 2 hours.',
          'Bulk ferment at room temperature 4–5 hours.',
          'Shape, place in banneton, cold proof overnight.',
          'Bake in Dutch oven at 250°C: 20 min lid on, 25 min lid off.',
        ],
      },
    ],
    tips: [
      {
        title: 'Starter Tips',
        body: 'Your starter should be bubbly and active — feed it 4–6 hours before use.',
        tips: [
          'Use the float test: a spoonful of starter should float in water.',
          'Whole wheat flour gives a more complex flavour.',
        ],
      },
    ],
  },
  {
    slug: 'brown-butter-cake',
    title: 'Brown Butter Cake',
    description: 'Nutty brown butter folded into a tender vanilla sponge.',
    category: 'cake',
    tone: 'peach',
    featured: true,
    prepTime: '25 minutes',
    cookTime: '35 minutes',
    servings: '8 slices',
    difficulty: 'Easy',
    intro: 'Brown butter transforms an ordinary sponge into something extraordinary.',
    sections: [
      {
        heading: 'Ingredients',
        items: [
          '200g unsalted butter',
          '200g caster sugar',
          '3 large eggs',
          '200g self-raising flour',
          '1 tsp vanilla extract',
          '2 tbsp whole milk',
        ],
      },
      {
        heading: 'Method',
        items: [
          'Brown butter in a saucepan until nutty and amber.',
          'Cool completely, then beat with sugar.',
          'Add eggs one at a time.',
          'Fold in flour, vanilla, and milk.',
          'Bake at 180°C for 30–35 minutes.',
        ],
      },
    ],
    tips: [
      {
        title: 'Pro Tips',
        body: 'Don\'t rush the browning — the milk solids need to caramelise fully for maximum flavour.',
      },
    ],
  },
];
