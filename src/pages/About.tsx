import styles from './About.module.css';
import PageHero from '@/components/PageHero';
import FoodImage from '@/components/FoodImage';
import StatItem from '@/components/StatItem';
import NewsletterBlock from '@/components/NewsletterBlock';
import { timeline, funFacts } from '@/lib/data';
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
      <PageHero
        eyebrow="About"
        title="Hi, I'm Allison."
        description="Paris-trained pastry chef turned recipe educator. I believe the best baking is honest, technical, and wildly delicious."
      />

      {/* Portrait + Bio */}
      <section className={styles.bioSection}>
        <div className="container">
          <div className={styles.bioGrid}>
            <div className={styles.bioImage}>
              <FoodImage tone="caramel" ratio="portrait" alt="Allison Chen portrait" />
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
