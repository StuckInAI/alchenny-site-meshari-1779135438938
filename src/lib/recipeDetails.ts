import { RecipeDetail } from '../types';

export const recipeDetails: RecipeDetail[] = [
  {
    slug: 'classic-croissant',
    title: 'Classic Croissant',
    description: 'A step-by-step guide to buttery, flaky croissants made entirely from scratch.',
    tone: 'caramel',
    time: '3 days',
    difficulty: 'Advanced',
    servings: '12 croissants',
    sections: [
      {
        heading: 'Ingredients',
        items: [
          '500g bread flour',
          '10g salt',
          '80g sugar',
          '10g instant yeast',
          '300ml whole milk, cold',
          '280g unsalted butter (block), cold',
        ],
      },
      {
        heading: 'Détrempe (Dough)',
        items: [
          'Combine flour, salt, sugar, and yeast in a bowl.',
          'Add cold milk and mix until a shaggy dough forms.',
          'Knead briefly — do not overdevelop the gluten.',
          'Flatten into a rectangle, wrap, and refrigerate overnight.',
        ],
      },
      {
        heading: 'Lamination',
        items: [
          'Beat butter into a flat 7-inch square.',
          'Encase butter in dough and roll out to a long rectangle.',
          'Perform a letter fold (3 layers). Chill 30 min.',
          'Repeat the fold 2 more times for 27 layers total.',
        ],
      },
      {
        heading: 'Shaping & Baking',
        items: [
          'Roll dough to 4mm thickness and cut long triangles.',
          'Roll triangles from base to tip to form a crescent.',
          'Proof at room temperature for 2–3 hours until jiggling.',
          'Egg-wash and bake at 200°C (390°F) for 18–22 minutes.',
        ],
      },
    ],
    tips: [
      {
        title: 'Keep Everything Cold',
        body: 'If at any point the butter feels greasy or the dough is warm, refrigerate for 30 minutes before continuing.',
      },
      {
        title: 'The Jiggle Test',
        body: 'Properly proofed croissants will jiggle like jelly when the tray is gently shaken. Under-proofed croissants will explode.',
      },
    ],
  },
  {
    slug: 'sourdough-boule',
    title: 'Sourdough Boule',
    description: 'A crackling crust and open crumb achieved through long cold fermentation.',
    tone: 'mocha',
    time: '2 days',
    difficulty: 'Intermediate',
    servings: '1 loaf',
    sections: [
      {
        heading: 'Ingredients',
        items: [
          '450g bread flour',
          '50g whole wheat flour',
          '375g water (80°F)',
          '100g active starter (100% hydration)',
          '10g salt',
        ],
      },
      {
        heading: 'Autolyse & Mix',
        items: [
          'Mix flours and 350g water. Rest 1 hour (autolyse).',
          'Add starter and remaining water; squeeze through dough.',
          'Add salt and mix fully. Rest 30 minutes.',
        ],
      },
      {
        heading: 'Bulk Fermentation',
        items: [
          'Perform 4 sets of stretch-and-folds over 2 hours.',
          'Bulk ferment at room temperature until 50–75% rise.',
        ],
      },
      {
        heading: 'Shape & Bake',
        items: [
          'Pre-shape into a round. Rest 20 minutes.',
          'Final shape and place seam-up in a floured banneton.',
          'Cold retard overnight in the fridge.',
          'Preheat Dutch oven at 250°C (480°F). Score and bake covered 20 min, uncovered 25 min.',
        ],
      },
    ],
    tips: [
      {
        title: 'Starter Readiness',
        body: 'Your starter is ready when it doubles in 4–8 hours, smells pleasantly sour, and passes the float test.',
      },
    ],
  },
  {
    slug: 'paris-brest',
    title: 'Paris-Brest',
    description: 'Choux pastry ring filled with hazelnut praline cream — a French classic.',
    tone: 'cream',
    time: '4 hours',
    difficulty: 'Advanced',
    servings: '8 servings',
    sections: [
      {
        heading: 'Choux Pastry',
        items: [
          '250ml water',
          '100g unsalted butter',
          '150g plain flour',
          '4 eggs',
          'Pinch of salt & sugar',
        ],
      },
      {
        heading: 'Praline Cream',
        items: [
          '200g hazelnuts, toasted',
          '200g caster sugar',
          '500ml whole milk',
          '6 egg yolks',
          '50g cornstarch',
          '200g unsalted butter, softened',
        ],
      },
      {
        heading: 'Method',
        items: [
          'Make choux: boil water and butter, beat in flour, add eggs one by one.',
          'Pipe a ring onto baking paper. Sprinkle flaked almonds.',
          'Bake at 200°C for 25 minutes, then 15 minutes at 170°C.',
          'Make praline by caramelising sugar over hazelnuts. Blitz to a paste.',
          'Make pastry cream, cool, then beat in butter and praline.',
          'Slice ring, fill generously with praline cream, dust with icing sugar.',
        ],
      },
    ],
    tips: [
      {
        title: 'Dry Out the Panade',
        body: 'After adding flour, stir the dough over heat until it pulls away from the pan and forms a film on the bottom. This removes excess water for better lift.',
      },
    ],
  },
];

export const RECIPE_DETAILS = recipeDetails;
