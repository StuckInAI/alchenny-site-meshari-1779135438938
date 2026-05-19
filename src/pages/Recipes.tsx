import { useState } from 'react';
import styles from './Recipes.module.css';
import PageHero from '@/components/PageHero';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/lib/data';
import type { RecipeCategory } from '@/types/index';

const categories: { label: string; value: RecipeCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Pastry', value: 'pastry' },
  { label: 'Bread', value: 'bread' },
  { label: 'Cake', value: 'cake' },
  { label: 'Cookies', value: 'cookies' },
  { label: 'Savory', value: 'savory' },
  { label: 'Drinks', value: 'drinks' },
];

export default function Recipes() {
  const [active, setActive] = useState<RecipeCategory | 'all'>('all');
  const filtered = active === 'all' ? recipes : recipes.filter((r) => r.category === active);

  return (
    <>
      <PageHero
        eyebrow="Archive"
        title="All Recipes"
        description="From flaky laminated pastries to crusty sourdough — every recipe tested, refined, and worth your time."
      />
      <section className={styles.section}>
        <div className="container">
          <div className={styles.filters}>
            {categories.map((c) => (
              <button
                key={c.value}
                className={`${styles.filter} ${active === c.value ? styles.active : ''}`}
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
    </>
  );
}
