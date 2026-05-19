import { useState } from 'react';
import styles from './About.module.css';
import PageHero from '@/components/PageHero';
import StatItem from '@/components/StatItem';
import NewsletterBlock from '@/components/NewsletterBlock';
import PolaroidCollage from '@/components/PolaroidCollage';
import { timeline, funFacts, ALLISON_PORTRAIT, ALLISON_PORTRAIT_FALLBACK } from '@/lib/data';
import type { TimelineEntry, FunFact } from '@/types/index';

const STATS = [
  { value: 820, suffix: 'K', label: 'YouTube Subscribers' },
  { value: 14, suffix: 'K+', label: 'Newsletter Readers' },
  { value: 3000, suffix: '+', label: 'Croissants Made' },
  { value: 11, suffix: '', label: 'Countries Baked In' },
];

export default function About() {
  return (
    <>
      {/* Hero with polaroid collage */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <div className="eyebrow">About</div>
              <h1 className={styles.heroTitle}>Hi, I'm Allison.</h1>
              <p className={styles.heroItalic}><em>Welcome.</em></p>
              <p className={styles.heroDesc}>
                Paris-trained pastry chef turned recipe educator. I believe the best baking
                is honest, technical, and wildly delicious.
              </p>
            </div>
            <div className={styles.heroPolaroids}>
              <PolaroidCollage />
            </div>
          </div>
        </div>
      </section>

      {/* Portrait + Bio */}
      <section className={styles.bioSection}>
        <div className="container">
          <div className={styles.bioGrid}>
            <div className={styles.bioImage}>
              <AllisonPortrait />
            </div>
            <div className={styles.bioText}>
              <div className="eyebrow">My Story</div>
              <h2 className={styles.bioHeading}>From Engineering to Eclairs</h2>
              <p>
                I spent three years studying mechanical engineering before I realised the only
                equations I cared about were butter-to-flour ratios. I quit, enrolled at Le Cordon
                Bleu Paris, and never looked back.
              </p>
              <p>
                After graduating, I staged at bakeries across Tokyo and Singapore — learning that
                great pastry is both a science and a cultural conversation. In 2020, I started
                documenting my process online, and somehow 820,000 people decided they wanted to
                watch me laminate dough.
              </p>
              <p>
                These days I split my time between recipe development, teaching, and building the
                Croissant Crew — a community of home bakers who take their craft seriously without
                taking themselves too seriously.
              </p>
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

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '3rem' }}>Journey</div>
          <div className={styles.timeline}>
            {timeline.map((t: TimelineEntry) => (
              <div key={t.year} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{t.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{t.title}</h3>
                  <ul className={styles.timelineEvents}>
                    {t.events.map((e: string) => <li key={e}>{e}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className={styles.factsSection}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '2rem' }}>Fun Facts</div>
          <div className={styles.factsGrid}>
            {funFacts.map((f: FunFact) => (
              <div key={f.text} className={styles.factCard}>
                <span className={styles.factEmoji}>{f.emoji}</span>
                <p className={styles.factText}>{f.text}</p>
              </div>
            ))}
          </div>
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
          alt="Allison Chen smiling in the kitchen"
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
