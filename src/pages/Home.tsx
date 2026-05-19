import { Link } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import RecipeCard from '@/components/RecipeCard';
import Button from '@/components/Button';
import StatItem from '@/components/StatItem';
import NewsletterBlock from '@/components/NewsletterBlock';
import FoodImage from '@/components/FoodImage';
import { recipes, stats } from '@/lib/data';
import styles from './Home.module.css';

export default function Home() {
  const featured = recipes.filter((r) => r.featured).slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <div className="eyebrow">Pastry School & Beyond</div>
            <h1 className={styles.heroTitle}>
              Baking, one
              <br />
              <em>layer</em> at a time.
            </h1>
            <p className={styles.heroSub}>
              Hi, I'm Al — baker, food creator, and perpetual croissant-chaser.
              I share honest recipes, pastry school diaries, and the occasional
              kitchen disaster.
            </p>
            <div className={styles.heroCta}>
              <Button as="link" to="/recipes">Explore Recipes</Button>
              <Button as="link" to="/about" variant="secondary">My Story</Button>
            </div>
          </div>
          <div className={styles.heroImages}>
            <FoodImage tone="caramel" ratio="portrait" className={styles.heroImg1} alt="Freshly baked croissants" />
            <FoodImage tone="mocha"   ratio="square"   className={styles.heroImg2} alt="Sourdough loaf" />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className={styles.statsBar}>
        <div className={`container ${styles.statsInner}`}>
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* ── Featured Recipes ── */}
      <section className={styles.featuredSection}>
        <div className="container">
          <SectionHeader
            eyebrow="From the Kitchen"
            title="Featured Recipes"
            linkTo="/recipes"
            linkLabel="View all recipes"
          />
          <div className={styles.recipeGrid}>
            {featured.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About Strip ── */}
      <section className={styles.aboutStrip}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={styles.aboutImage}>
            <FoodImage tone="rose" ratio="square" alt="Al in the kitchen" />
          </div>
          <div className={styles.aboutText}>
            <div className="eyebrow">About Al</div>
            <h2 className={styles.aboutTitle}>From spreadsheets to sourdough</h2>
            <p className={styles.aboutBody}>
              I spent five years in finance before a croissant changed my life.
              Now I'm in pastry school, sharing every rise, fold, and failure with
              280k+ followers who love baking as much as I do.
            </p>
            <Button as="link" to="/about" variant="secondary">Read My Story</Button>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterBlock />

      {/* ── Work With Me teaser ── */}
      <section className={styles.workTeaser}>
        <div className="container">
          <div className={styles.workTeaserInner}>
            <div>
              <div className="eyebrow">Collaborations</div>
              <h2 className={styles.workTitle}>Work With Me</h2>
              <p className={styles.workBody}>
                Brand partnerships, recipe development, content creation,
                and sponsored posts. Let's make something delicious together.
              </p>
            </div>
            <Link to="/work-with-me" className={styles.workLink}>
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
