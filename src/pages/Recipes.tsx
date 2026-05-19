import { useState } from 'react';
import styles from './Recipes.module.css';
import PageHero from '@/components/PageHero';
import RecipeCard from '@/components/RecipeCard';
import NewsletterBlock from '@/components/NewsletterBlock';
import { RECIPES } from '@/lib/data';
import type { Recipe, RecipeCategory } from '@/types/index';

const CATEGORIES: ('All' | RecipeCategory)[] = [
  'All',
  'Viennoiserie',
  'Chocolate',
  'Pastry',
  'Tarts',
  'Petit Fours',
];

export default function Recipes() {
  const [active, setActive] = useState<'All' | RecipeCategory>('All');

  const shown: Recipe[] = active === 'All'
    ? RECIPES
    : RECIPES.filter((r: Recipe) => r.category === active);

  return (
    <>
      <PageHero
        eyebrow="Recipes"
        title="From the Archive"
        description="Every recipe is tested, refined, and written with the home baker in mind. Filter by category or browse everything."
      />

      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <div className="container">
          <div className={styles.filters}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {shown.map((r: Recipe) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
