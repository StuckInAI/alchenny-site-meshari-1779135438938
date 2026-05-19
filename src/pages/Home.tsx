import styles from './Home.module.css';
import { recipes, stats } from '@/lib/data';
import type { StatItem } from '@/lib/data';
import RecipeCard from '@/components/RecipeCard';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import StatItemComponent from '@/components/StatItem';
import NewsletterBlock from '@/components/NewsletterBlock';
import FoodImage from '@/components/FoodImage';
import PolaroidCollage from '@/components/PolaroidCollage';

const featured = recipes.filter((r) => r.featured).slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <div className="eyebrow">Pastry School Graduate &amp; Recipe Developer</div>
            <h1 className={styles.heroTitle}>
              Baking that's both <em>beautiful</em> and approachable
            </h1>
            <p className={styles.heroSub}>
              Hi, I'm Alchen — a Sydney-based pastry chef sharing honest recipes, school diaries,
              and the occasional burnt croissant. Pull up a chair.
            </p>
            <div className={styles.heroCtas}>
              <Button as="link" to="/recipes" variant="primary">Browse Recipes</Button>
              <Button as="link" to="/about" variant="secondary">About Me</Button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <PolaroidCollage />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsRow}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s: StatItem) => (
              <StatItemComponent key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className={styles.featuredSection}>
        <div className="container">
          <SectionHeader
            eyebrow="From The Kitchen"
            title="Featured Recipes"
            action={<Button as="link" to="/recipes" variant="ghost">View all recipes →</Button>}
          />
          <div className={styles.recipeGrid}>
            {featured.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className={styles.aboutTeaser}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={styles.aboutImg}>
            <FoodImage tone="rose" ratio="portrait" alt="Alchen in the kitchen" />
          </div>
          <div className={styles.aboutText}>
            <div className="eyebrow">A little about me</div>
            <h2 className={styles.aboutTitle}>From finance to flour</h2>
            <p>
              I quit a comfortable corporate job to enrol in pastry school — best decision I ever made.
              Now I spend my days laminating dough, writing about bread, and building a community of people
              who believe that good food is one of life's great joys.
            </p>
            <Button as="link" to="/about" variant="secondary">Read My Story</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterBlock />
    </>
  );
}
