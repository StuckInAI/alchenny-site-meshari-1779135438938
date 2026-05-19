import { useState } from 'react';
import PageHero from '@/components/PageHero';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/lib/data';
import type { RecipeCategory } from '@/types';
import styles from './Recipes.module.css';

const CATEGORIES: Array<RecipeCategory | 'All'> = [
  'All',
  'Bread',
  'Cake',
  'Pastry',
  'Cookie',
  'Savory',
  'Drink',
];

export default function Recipes() {
  const [active, setActive] = useState<RecipeCategory | 'All'>('All');

  const filtered =
    active === 'All' ? recipes : recipes.filter((r) => r.category === active);

  return (
    <>
      <PageHero
        eyebrow="Recipes"
        title="From the Kitchen"
        description="Tested recipes with the home baker in mind — organised by category."
      />
      <section className={styles.section}>
        <div className="container">
          <div className={styles.filters}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.pill} ${active === cat ? styles.active : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className={styles.grid}>
            {filtered.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
