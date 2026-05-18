import { useMemo, useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import RecipeCard from '@/components/RecipeCard';
import Button from '@/components/Button';
import { allRecipes } from '@/lib/data';
import type { RecipeCategory } from '@/types';
import styles from './Recipes.module.css';

const categories: ('All' | RecipeCategory)[] = ['All', 'Pastries', 'Cakes', 'Desserts', 'Cookies', 'Basics', 'Savory'];
const INITIAL_COUNT = 12;
const STEP = 9;

export default function Recipes() {
  useReveal();
  const [active, setActive] = useState<'All' | RecipeCategory>('All');
  const [visible, setVisible] = useState(INITIAL_COUNT);

  const filtered = useMemo(() => {
    if (active === 'All') return allRecipes;
    return allRecipes.filter((r) => r.category === active);
  }, [active]);

  const shown = filtered.slice(0, visible);

  return (
    <>
      <PageHero
        eyebrow="The Archive"
        title="Recipes"
        description="Classic pastry technique made approachable. Inspired by French pastry school and Asian American nostalgia."
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.tabs} role="tablist">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                className={`${styles.tab} ${active === c ? styles.tabActive : ''}`}
                onClick={() => { setActive(c); setVisible(INITIAL_COUNT); }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {shown.map((r) => (
              <div key={r.id} className="reveal">
                <RecipeCard recipe={r} />
              </div>
            ))}
          </div>

          {shown.length === 0 && (
            <p className={styles.empty}>No recipes in this category yet. Check back soon.</p>
          )}

          {visible < filtered.length && (
            <div className={styles.loadMore}>
              <Button variant="ghost" onClick={() => setVisible((v) => v + STEP)}>Load More</Button>
              <p className={styles.count}>Showing {shown.length} of {filtered.length}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
