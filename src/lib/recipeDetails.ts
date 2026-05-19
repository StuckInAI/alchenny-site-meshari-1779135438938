import type { RecipeDetail } from '@/types';

const recipeDetails: Record<string, RecipeDetail> = {
  'classic-croissant': {
    slug: 'classic-croissant',
    title: 'Classic Croissant',
    description: 'The perfect laminated dough croissant with 27 layers of buttery goodness.',
    category: 'pastry',
    tone: 'caramel',
    time: '3 hours',
    difficulty: 'Advanced',
    featured: true,
    prepTime: '45 min',
    cookTime: '20 min',
    servings: '8 croissants',
    sections: [
      {
        heading: 'Ingredients — Détrempe (base dough)',
        items: [
          '500 g bread flour (plus extra for dusting)',
          '10 g fine sea salt',
          '80 g caster sugar',
          '10 g instant yeast',
          '300 ml whole milk (lukewarm)',
          '40 g unsalted butter (softened)',
        ],
      },
      {
        heading: 'Ingredients — Beurrage (butter block)',
        items: [
          '280 g European-style unsalted butter (84%+ fat), cold',
        ],
      },
      {
        heading: 'Method',
        items: [
          'Combine flour, salt, sugar, and yeast. Add milk and softened butter; mix to a smooth dough. Do not over-knead.',
          'Shape into a rectangle, wrap, and refrigerate overnight (12–16 h).',
          'Pound cold butter into a 20 × 20 cm square between parchment sheets.',
          'Enclose butter in dough and complete three double turns (book folds), chilling 30 min between each.',
          'Roll dough to 4 mm thick. Cut triangles and roll into croissants.',
          'Prove at 24–26 °C for 2–3 h until jiggly and visibly grown.',
          'Brush with egg wash and bake at 200 °C for 16–20 min until deep mahogany.',
        ],
      },
    ],
    tips: {
      title: 'Chef Tips',
      tips: [
        'Temperature is everything — butter should flex, not crack or smear.',
        'A slow cold prove overnight develops far more flavour than a fast room-temp prove.',
        'Under-proving is the #1 beginner mistake; look for wobble, not just size.',
      ],
    },
  },
  'pain-au-chocolat': {
    slug: 'pain-au-chocolat',
    title: 'Pain au Chocolat',
    description: 'Flaky pastry wrapped around rich dark chocolate. A French bakery staple.',
    category: 'pastry',
    tone: 'mocha',
    time: '3 hours',
    difficulty: 'Advanced',
    featured: true,
    prepTime: '45 min',
    cookTime: '20 min',
    servings: '10 pieces',
    sections: [
      {
        heading: 'Ingredients',
        items: [
          '1 batch croissant dough (see Classic Croissant)',
          '200 g dark chocolate batons (70% cocoa)',
          '1 egg + 1 tbsp milk (egg wash)',
        ],
      },
      {
        heading: 'Method',
        items: [
          'Roll laminated dough to 5 mm thick. Cut 10 × 15 cm rectangles.',
          'Place one chocolate baton at the base of each rectangle. Roll up tightly.',
          'Place seam-side down on lined trays.',
          'Prove at 24–26 °C for 2–3 h until puffy.',
          'Egg wash and bake at 200 °C for 16–18 min.',
        ],
      },
    ],
    tips: {
      title: 'Chef Tips',
      tips: [
        'Use chocolate batons rather than chips — they melt more evenly.',
        'Two batons per pastry give a better chocolate-to-dough ratio.',
      ],
    },
  },
  'sourdough-boule': {
    slug: 'sourdough-boule',
    title: 'Sourdough Boule',
    description: 'A rustic round loaf with a crisp crust and open, chewy crumb.',
    category: 'bread',
    tone: 'peach',
    time: '24 hours',
    difficulty: 'Intermediate',
    featured: true,
    prepTime: '30 min active',
    cookTime: '45 min',
    servings: '1 large loaf',
    sections: [
      {
        heading: 'Ingredients',
        items: [
          '450 g bread flour',
          '50 g whole-wheat flour',
          '375 g water (75% hydration)',
          '100 g active starter (100% hydration)',
          '10 g fine sea salt',
        ],
      },
      {
        heading: 'Method',
        items: [
          'Mix flour and water; autolyse 30–60 min.',
          'Add starter and salt; incorporate by hand.',
          'Bulk ferment at room temperature (4–6 h), performing stretch-and-folds every 30 min for the first 2 h.',
          'Pre-shape, bench rest 20 min, final shape into a boule.',
          'Retard in the fridge overnight (8–12 h).',
          'Preheat oven with a Dutch oven to 250 °C. Score and bake covered 20 min, then uncovered 25 min at 230 °C.',
        ],
      },
    ],
    tips: {
      title: 'Chef Tips',
      tips: [
        'Your starter should pass the float test before use.',
        'A cold retard gives a more sour, complex flavour.',
        'Steam (trapped by Dutch oven lid) is essential for crust spring.',
      ],
    },
  },
};

export default recipeDetails;
