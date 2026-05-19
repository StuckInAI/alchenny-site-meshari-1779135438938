import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import SectionHeader from '@/components/SectionHeader';
import RecipeCard from '@/components/RecipeCard';
import NewsletterBlock from '@/components/NewsletterBlock';
import StatItem from '@/components/StatItem';
import Button from '@/components/Button';
import PolaroidCollage from '@/components/PolaroidCollage';
import { useReveal } from '@/hooks/useReveal';
import { recipes } from '@/lib/data';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const featuredRef = useReveal();
  const aboutRef = useReveal();
  const statsRef = useReveal();

  const featured = recipes.filter((r) => r.featured).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <div className="eyebrow">Pastry school grad · Food writer</div>
            <h1 className={styles.heroTitle}>
              Baking from scratch,<br />always from the heart.
            </h1>
            <p className={styles.heroSub}>
              Hi, I'm Alchen — a pastry school graduate sharing honest recipes,
              behind-the-scenes baking, and the occasional croissant obsession.
            </p>
            <div className={styles.heroCta}>
              <Button as="link" to="/recipes" variant="primary">Browse Recipes</Button>
              <Button as="link" to="/about" variant="secondary">About Me</Button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <PolaroidCollage />
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section ref={featuredRef as React.RefObject<HTMLElement>} className={styles.featured}>
        <div className="container">
          <SectionHeader
            eyebrow="Fresh from the oven"
            title="Featured Recipes"
            action={<Button as="link" to="/recipes" variant="ghost">View all recipes →</Button>}
          />
          <div className={styles.recipeGrid}>
            {featured.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section ref={aboutRef as React.RefObject<HTMLElement>} className={styles.about}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={styles.aboutText}>
            <div className="eyebrow">About Alchen</div>
            <h2 className={styles.aboutTitle}>Pastry school, flour-dusted notebooks &amp; a serious croissant obsession.</h2>
            <p>I graduated from pastry school in 2021 and immediately started writing down every technique, tip, and disaster — so you don't have to repeat my mistakes. This site is my recipe archive, my test kitchen, and my little corner of the internet.</p>
            <Button as="link" to="/about" variant="secondary" className={styles.aboutBtn}>My Story →</Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef as React.RefObject<HTMLElement>} className={styles.stats}>
        <div className={`container ${styles.statsInner}`}>
          <StatItem value={120} suffix="+" label="Recipes Published" />
          <StatItem value={14000} suffix="+" label="Newsletter Subscribers" />
          <StatItem value={3} label="Years Baking Professionally" />
          <StatItem value={50} suffix="+" label="Brand Collaborations" />
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterBlock />
    </main>
  );
}
