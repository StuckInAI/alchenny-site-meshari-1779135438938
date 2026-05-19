import { useState } from 'react';
import type { RecipeCategory } from '@/types';
import { recipes } from '@/lib/data';
import PageHero from '@/components/PageHero';
import RecipeCard from '@/components/RecipeCard';
import styles from './Recipes.module.css';

const categories: { label: string; value: RecipeCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Pastry', value: 'pastry' },
  { label: 'Bread', value: 'bread' },
  { label: 'Cake', value: 'cake' },
  { label: 'Tart', value: 'tart' },
  { label: 'Cookie', value: 'cookie' },
  { label: 'Savory', value: 'savory' },
];

export default function Recipes() {
  const [active, setActive] = useState<RecipeCategory | 'all'>('all');
  const filtered = active === 'all' ? recipes : recipes.filter((r) => r.category === active);

  return (
    <main>
      <PageHero
        eyebrow="Recipes"
        title="All recipes"
        description="From beginner-friendly bakes to advanced pastry techniques."
      />
      <section>
        <div className="container">
          <div className={styles.filters}>
            {categories.map((c) => (
              <button
                key={c.value}
                className={`${styles.filterBtn} ${active === c.value ? styles.active : ''}`}
                onClick={() => setActive(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className={styles.grid}>
            {filtered.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
