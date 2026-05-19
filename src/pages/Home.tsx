import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { recipes, stats } from '@/lib/data';
import RecipeCard from '@/components/RecipeCard';
import NewsletterBlock from '@/components/NewsletterBlock';
import StatItem from '@/components/StatItem';
import SectionHeader from '@/components/SectionHeader';
import FoodImage from '@/components/FoodImage';
import Button from '@/components/Button';

const featured = recipes.filter((r) => r.featured).slice(0, 3);

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className="eyebrow">Pastry School Graduate &amp; Food Writer</div>
              <h1 className={styles.heroTitle}>
                Baking with<br />precision &amp; soul
              </h1>
              <p className={styles.heroSub}>
                Classic French technique meets honest home cooking. Recipes, guides,
                and the occasional pastry school confession.
              </p>
              <div className={styles.heroActions}>
                <Button as="link" to="/recipes" variant="primary">Explore Recipes</Button>
                <Button as="link" to="/about" variant="secondary">About Al</Button>
              </div>
            </div>
            <div className={styles.heroImage}>
              <FoodImage tone="caramel" ratio="portrait" alt="Fresh croissants" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className={styles.featuredSection}>
        <div className="container">
          <SectionHeader
            eyebrow="From the kitchen"
            title="Featured recipes"
            linkLabel="All recipes"
            linkHref="/recipes"
          />
          <div className={styles.recipeGrid}>
            {featured.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImg}>
              <FoodImage tone="peach" ratio="portrait" alt="Al in the kitchen" />
            </div>
            <div className={styles.aboutText}>
              <div className="eyebrow">About Al</div>
              <h2 className={styles.aboutTitle}>Pastry school dropout turned food writer</h2>
              <p className={styles.aboutSub}>
                I spent three years training in classical French pastry in Lyon before deciding
                I'd rather write about it than do it professionally. Now I teach what I learned
                through recipes, guides, and a newsletter read by 14,000 people.
              </p>
              <Link to="/about" className={styles.aboutLink}>Read my story →</Link>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </main>
  );
}
