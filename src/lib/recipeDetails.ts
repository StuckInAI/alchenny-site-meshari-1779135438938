import type { RecipeDetail } from '@/types';

export const recipeDetails: RecipeDetail[] = [
  {
    slug: 'classic-sourdough',
    title: 'Classic Sourdough Loaf',
    category: 'Bread',
    time: '24 hr',
    difficulty: 'Hard',
    description: 'A beautifully tangy, open-crumb sourdough with a crackling crust.',
    servings: '1 large loaf',
    sections: [
      {
        title: 'Ingredients',
        items: [
          '450g bread flour',
          '325g water (75% hydration)',
          '90g active starter',
          '9g fine sea salt',
        ],
      },
      {
        title: 'Levain',
        items: [
          'Mix starter with equal parts flour and water',
          'Ferment 4–6 hours at room temperature until doubled',
        ],
      },
      {
        title: 'Autolyse & Mix',
        items: [
          'Combine flour and water; rest 1 hour',
          'Add levain, mix thoroughly',
          'Add salt with a splash of water; incorporate fully',
        ],
      },
      {
        title: 'Bulk Fermentation',
        items: [
          '4 sets of stretch & folds every 30 minutes',
          'Continue bulk for 4–5 hours total at 24–26°C',
          'Dough should be domed, jiggly, and ~50% risen',
        ],
      },
    ],
    tips: [
      {
        title: 'Starter Readiness',
        body: 'Use your starter at peak — when it has doubled and shows a domed top. A float test can help, but peak activity is the best indicator.',
      },
      {
        title: 'Temperature Matters',
        body: 'Bulk fermentation times vary significantly with temperature. Cooler kitchens mean longer fermentation. Use a probe thermometer.',
      },
    ],
  },
  {
    slug: 'croissants',
    title: 'Buttery Croissants',
    category: 'Pastry',
    time: '3 days',
    difficulty: 'Hard',
    description: 'Flaky, laminated croissants with honeyed layers and a glossy finish.',
    servings: '12 croissants',
    sections: [
      {
        title: 'Détrempe (Dough)',
        items: [
          '500g bread flour',
          '10g fine salt',
          '80g sugar',
          '10g instant yeast',
          '300ml whole milk, cold',
          '50g unsalted butter, softened',
        ],
      },
      {
        title: 'Beurrage (Butter Block)',
        items: [
          '280g European-style butter (84%+ fat)',
          'Beat to a pliable 19cm square',
        ],
      },
      {
        title: 'Lamination',
        items: [
          'Lock butter into dough',
          'Give 3 letter folds with 1-hour rests in fridge between each',
          'Final overnight rest in fridge',
        ],
      },
      {
        title: 'Shaping & Proofing',
        items: [
          'Roll dough to 4mm thickness',
          'Cut triangles, roll tightly from base to tip',
          'Proof at 24°C for 2–3 hours until jiggly',
        ],
      },
      {
        title: 'Baking',
        items: [
          'Egg wash twice (before proof and just before baking)',
          'Bake at 190°C fan for 16–18 minutes',
          'Cool on wire rack for at least 15 minutes',
        ],
      },
    ],
    tips: [
      {
        title: 'Butter Temperature',
        body: 'Both dough and butter should be at a similar cool temperature (around 15°C) during lamination. Warm butter will absorb into the dough instead of forming layers.',
      },
    ],
  },
  {
    slug: 'burnt-basque-cheesecake',
    title: 'Burnt Basque Cheesecake',
    category: 'Cake',
    time: '1.5 hr',
    difficulty: 'Easy',
    description: 'Crustless, creamy Basque cheesecake with a caramelised top.',
    servings: '8–10 slices',
    sections: [
      {
        title: 'Ingredients',
        items: [
          '900g full-fat cream cheese, room temperature',
          '300g caster sugar',
          '5 large eggs',
          '500ml heavy cream',
          '1 tsp vanilla extract',
          '30g plain flour',
          '1/2 tsp fine salt',
        ],
      },
      {
        title: 'Method',
        items: [
          'Preheat oven to 220°C fan. Line a 24cm springform tin with overlapping sheets of parchment.',
          'Beat cream cheese and sugar until smooth.',
          'Add eggs one at a time, mixing well.',
          'Stream in cream, vanilla, flour, and salt; mix until silky.',
          'Pour into tin; bake 50–55 minutes until deeply golden on top but still jiggly in the centre.',
          'Cool completely at room temperature, then refrigerate overnight.',
        ],
      },
    ],
    tips: [
      {
        title: 'The Wobble',
        body: 'The cake should look alarmingly underdone when you pull it from the oven — a large, jiggly centre is what you want. It firms up beautifully as it cools.',
      },
    ],
  },
];
