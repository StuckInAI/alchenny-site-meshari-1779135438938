import styles from './About.module.css';
import PageHero from '@/components/PageHero';
import { timeline, funFacts, ALLISON_PORTRAIT, ALLISON_PORTRAIT_FALLBACK } from '@/lib/data';
import type { TimelineEntry } from '@/types/index';
import PolaroidCollage from '@/components/PolaroidCollage';

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Hey, I'm Allison"
        description="Pastry-obsessed baker, self-taught turned school-trained, and the person behind every recipe on this site."
      />

      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.portraitWrap}>
              {ALLISON_PORTRAIT ? (
                <img
                  src={ALLISON_PORTRAIT}
                  alt="Allison Chen"
                  className={styles.portrait}
                  onError={(e) => {
                    if (ALLISON_PORTRAIT_FALLBACK) {
                      (e.target as HTMLImageElement).src = ALLISON_PORTRAIT_FALLBACK;
                    }
                  }}
                />
              ) : (
                <div className={styles.portraitPlaceholder}>👩‍🍳</div>
              )}
            </div>
            <div className={styles.introText}>
              <h2 className={styles.introHeading}>From burnt cookies to Paris pastry school</h2>
              <p>I started baking in my college apartment with a hand-me-down mixer and absolutely no idea what I was doing. My first croissant attempt was a flat, greasy disaster — and I loved every bite of it.</p>
              <p>After a few years of obsessive home baking, I enrolled in a professional pastry program in Paris. It changed everything. I came back with callused hands, a French rolling pin, and a deep conviction that good technique is what separates a good bake from a great one.</p>
              <p>This site is my attempt to pass those techniques on — without the $30,000 tuition.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.collageSection}>
        <div className="container">
          <PolaroidCollage />
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className="container">
          <div className="eyebrow">My Story</div>
          <h2 className={styles.sectionTitle}>A (brief) timeline</h2>
          <div className={styles.timeline}>
            {timeline.map((entry: TimelineEntry) => (
              <div key={entry.year} className={styles.timelineEntry}>
                <div className={styles.timelineYear}>{entry.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{entry.title}</h3>
                  <p className={styles.timelineBody}>{entry.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.funFactsSection}>
        <div className="container">
          <div className="eyebrow">Random Facts</div>
          <h2 className={styles.sectionTitle}>A few things about me</h2>
          <ul className={styles.funFacts}>
            {funFacts.map((fact: string, i: number) => (
              <li key={i} className={styles.funFact}>
                <span className={styles.funFactIcon}>✦</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
