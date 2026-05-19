import { useState } from 'react';
import styles from './Home.module.css';
import Button from '@/components/Button';
import RecipeCard from '@/components/RecipeCard';
import BrandRow from '@/components/BrandRow';
import NewsletterBlock from '@/components/NewsletterBlock';
import PolaroidCollage from '@/components/PolaroidCollage';
import SectionHeader from '@/components/SectionHeader';
import StatItem from '@/components/StatItem';
import { featuredRecipes, brandPartners, ALLISON_PORTRAIT, ALLISON_PORTRAIT_FALLBACK } from '@/lib/data';
import type { Recipe } from '@/types/index';

const STATS = [
  { value: 820, suffix: 'K', label: 'YouTube Subscribers' },
  { value: 14, suffix: 'K+', label: 'Newsletter Readers' },
  { value: 200, suffix: '+', label: 'Recipes Published' },
  { value: 11, suffix: '', label: 'Countries Baked In' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <div className="eyebrow">Paris-trained pastry chef & recipe educator</div>
              <h1 className={styles.heroTitle}>
                Baking that's <em>honest</em>,<br />
                technical & wildly<br />
                <span className={styles.accent}>delicious.</span>
              </h1>
              <p className={styles.heroSub}>
                I teach home bakers the real techniques behind great pastry — from laminating
                croissants to tempering chocolate — with recipes that actually work.
              </p>
              <div className={styles.heroCtas}>
                <Button as="link" to="/recipes">Browse Recipes</Button>
                <Button as="link" to="/about" variant="secondary">My Story</Button>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <PolaroidCollage />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeader
            eyebrow="From the Kitchen"
            title="Featured Recipes"
            linkTo="/recipes"
            linkLabel="View All Recipes"
          />
          <div className={styles.recipeGrid}>
            {featuredRecipes.map((r: Recipe) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <AllisonPortrait />
            </div>
            <div className={styles.aboutText}>
              <div className="eyebrow">About Allison</div>
              <h2 className={styles.aboutHeading}>Le Cordon Bleu grad turned YouTube baker</h2>
              <p>
                I spent three years in engineering before I realised the only equations that excited
                me were butter-to-flour ratios. I trained in Paris, staged in Tokyo, and somehow
                ended up teaching 820K subscribers how to laminate dough on the internet.
              </p>
              <p style={{ marginTop: '1rem' }}>
                My recipes are tested obsessively, written clearly, and designed to make you a
                better baker — not just someone who followed instructions once.
              </p>
              <Button as="link" to="/about" variant="secondary" className={styles.aboutCta}>
                Read My Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className={styles.brandsSection}>
        <div className="container">
          <div className={styles.brandsLabel}>Trusted by & partnered with</div>
          <BrandRow brands={brandPartners} />
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}

function AllisonPortrait() {
  const [src, setSrc] = useState<string>(ALLISON_PORTRAIT);
  const [usedFallback, setUsedFallback] = useState<boolean>(false);

  function handleError() {
    if (!usedFallback && src !== ALLISON_PORTRAIT_FALLBACK) {
      setSrc(ALLISON_PORTRAIT_FALLBACK);
      setUsedFallback(true);
    }
  }

  return (
    <div className={styles.portraitWrap}>
      {src ? (
        <img
          src={src}
          alt="Allison Chen in the kitchen"
          className={styles.portraitImg}
          onError={handleError}
          referrerPolicy="no-referrer-when-downgrade"
          crossOrigin="anonymous"
          loading="lazy"
        />
      ) : (
        <div className={styles.portraitPlaceholder} />
      )}
      <div className={styles.portraitOverlay} />
    </div>
  );
}
