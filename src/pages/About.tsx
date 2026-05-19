import styles from './About.module.css';
import PageHero from '@/components/PageHero';
import PolaroidCollage from '@/components/PolaroidCollage';
import NewsletterBlock from '@/components/NewsletterBlock';
import CdnImage from '@/components/CdnImage';
import { timeline, funFacts, ALLISON_PORTRAIT, ALLISON_PORTRAIT_FALLBACK } from '@/lib/data';
import type { TimelineEntry } from '@/types/index';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Hi, I'm Allison"
        description="Pastry chef, recipe developer, and the voice behind alchenny. I write about baking, butter, and everything in between."
      />

      {/* Portrait + intro */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.portraitWrap}>
              <CdnImage
                src={ALLISON_PORTRAIT}
                fallbackSrc={ALLISON_PORTRAIT_FALLBACK}
                alt="Allison Chen"
                className={styles.portrait}
              />
            </div>
            <div className={styles.introText}>
              <div className="eyebrow">My Story</div>
              <h2 className={styles.introHeading}>From Culinary School to Your Kitchen</h2>
              <p>
                I trained at Le Cordon Bleu in Paris before staging at a two-star Michelin restaurant
                in Lyon. When the world slowed down in 2020, I started this blog to share everything
                I'd learned — the techniques, the failures, the obsessive recipe testing.
              </p>
              <p>
                Today alchenny reaches over 150,000 readers a month. The newsletter, The Croissant
                Crew, has 14,000+ subscribers who get my best work before anyone else.
              </p>
              <p>
                I believe good pastry is about patience, not perfection. You don't need a professional
                kitchen — just a willingness to try again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun facts */}
      <section className={styles.factsSection}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '2rem' }}>Quick Facts</div>
          <ul className={styles.factsList}>
            {funFacts.map((fact, i) => (
              <li key={i} className={styles.factItem}>
                <span className={styles.factIcon}>✦</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '2.5rem' }}>Journey</div>
          <h2 className={styles.timelineHeading}>How I Got Here</h2>
          <div className={styles.timeline}>
            {timeline.map((entry: TimelineEntry) => (
              <div key={entry.year} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{entry.year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{entry.title}</h3>
                  <p className={styles.timelineBody}>{entry.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Polaroid collage */}
      <section className={styles.collageSection}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '1rem' }}>Snapshots</div>
        </div>
        <PolaroidCollage />
      </section>

      <NewsletterBlock />
    </>
  );
}
