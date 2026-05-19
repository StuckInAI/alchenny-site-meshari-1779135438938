import { useReveal } from '@/hooks/useReveal';
import { useRef, useEffect, useState } from 'react';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import RecipeCard from '@/components/RecipeCard';
import SectionHeader from '@/components/SectionHeader';
import BrandRow from '@/components/BrandRow';
import NewsletterBlock from '@/components/NewsletterBlock';
import StatItem from '@/components/StatItem';
import styles from './Home.module.css';
import { featuredRecipes, brandPartners, ALLISON_PORTRAIT } from '@/lib/data';

const stats = [
  { icon: '📱', value: '1.5M+', label: 'Total Followers' },
  { icon: '🎂', value: '584K',  label: 'TikTok · 34.4M Likes' },
  { icon: '📸', value: '542K',  label: 'Instagram Followers' },
  { icon: '📬', value: '14K+',  label: 'Substack Subscribers' },
];

export default function Home() {
  useReveal();

  // Parallax hero
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      heroRef.current.style.setProperty('--parallax-y', `${y * 0.35}px`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [portraitError, setPortraitError] = useState(false);

  // Fallback: if local image 404s, use an Unsplash portrait
  const portraitSrc = portraitError
    ? 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'
    : ALLISON_PORTRAIT;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero} ref={heroRef}>
        <div className={`container ${styles.heroInner}`}>
          <div className={`${styles.heroCopy} reveal`}>
            <div className="eyebrow">Alchenny · NYC · Est. 2022</div>
            <h1 className={styles.headline}>
              Pastry Chef. <em>Recipe Developer.</em> Content Creator.
            </h1>
            <p className={styles.sub}>
              Classic French technique. Playful storytelling. An approachable love of
              dessert — based in New York City.
            </p>
            <Divider />
            <div className={styles.ctas}>
              <Button as="link" to="/recipes" variant="primary">Explore Recipes</Button>
              <Button as="link" to="/about" variant="secondary">About Allison</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className="reveal">
                <StatItem icon={s.icon} value={s.value} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST RECIPES ───────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <div className="reveal">
            <SectionHeader eyebrow="From The Kitchen" title="Latest Recipes" description="Seasonal bakes, technique-driven desserts, and the occasional savory detour." />
          </div>
          <div className={styles.recipeGrid}>
            {featuredRecipes.map((r) => (
              <div key={r.id} className="reveal">
                <RecipeCard recipe={r} />
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Button as="link" to="/recipes" variant="ghost">View All Recipes →</Button>
          </div>
        </div>
      </section>

      {/* ── ABOUT MINI ───────────────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.aboutMini}`}>
        <div className="container">
          <div className={styles.aboutGrid}>

            {/* Portrait photo */}
            <div className={`${styles.aboutImgWrap} reveal`}>
              <img
                src={portraitSrc}
                alt="Allison Chen smiling in her kitchen wearing a white and orange sweater"
                className={styles.aboutImg}
                onError={() => setPortraitError(true)}
                loading="lazy"
              />
              {/* Warm overlay vignette */}
              <div className={styles.portraitOverlay} />
            </div>

            <div className={`${styles.aboutCopy} reveal`}>
              <div className="eyebrow">A Quick Hello</div>
              <h2 className={styles.aboutTitle}>
                Hi, I'm Allison <span aria-hidden="true">👋</span>
              </h2>
              <p>
                I'm a pastry chef, recipe developer, and content creator based in NYC. I went to French
                pastry school (so you don't have to), ran a viral tasting menu out of my college apartment,
                and have been documenting my pastry adventures ever since. Welcome to Alchenny.
              </p>
              <Button as="link" to="/about" variant="secondary">Read My Story →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND ROW ────────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <div className="reveal">
            <SectionHeader align="center" eyebrow="As Seen Working With" title="Trusted by brands big & small" />
          </div>
          <div className="reveal">
            <BrandRow brands={brandPartners} />
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
