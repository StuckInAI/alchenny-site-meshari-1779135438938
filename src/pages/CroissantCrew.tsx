import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import FoodImage from '@/components/FoodImage';
import NewsletterBlock from '@/components/NewsletterBlock';
import styles from './CroissantCrew.module.css';

const perks = [
  { icon: '🥐', title: 'Free Tier', items: ['Weekly recipe posts', 'Behind-the-scenes baking', 'NYC food recs & notes'] },
  { icon: '✨', title: 'Paid Tier', items: ['Full step-by-step recipe archives', 'Technique deep-dives from pastry school', 'Early access to drops & events', 'Monthly subscriber Q&As', 'Exclusive Kitsby event discounts'] },
];

const posts = [
  { title: 'How to Make a Proper Croissant (From My Notes at École)', emoji: '🥐', tag: 'Technique' },
  { title: 'The Macaron Method I Use Every Single Time', emoji: '🫧', tag: 'Technique' },
  { title: 'My Go-To Ganache Ratios (And Why They Work)', emoji: '🍫', tag: 'Basics' },
  { title: 'Paris Food Diary: What I Ate at École', emoji: '🗼', tag: 'Diary' },
  { title: 'NYC Bakeries I Keep Coming Back To', emoji: '🗽', tag: 'Guide' },
  { title: 'Building a Tasting Menu in a College Apartment', emoji: '🎭', tag: 'Story' },
];

export default function CroissantCrew() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="The Croissant Crew"
        title="Join the Newsletter"
        description="Baking guides from French pastry school, recipe archives, NYC food notes, and life updates — straight to your inbox."
      />

      {/* Tiers */}
      <section className={styles.section}>
        <div className="container">
          <div className="reveal">
            <SectionHeader eyebrow="Membership" title="What You Get" />
          </div>
          <div className={styles.tiersGrid}>
            {perks.map((tier) => (
              <div key={tier.title} className={`${styles.tierCard} reveal`}>
                <div className={styles.tierIcon}>{tier.icon}</div>
                <h3 className={styles.tierTitle}>{tier.title}</h3>
                <ul className={styles.tierList}>
                  {tier.items.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">—</span> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://alchenny.substack.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.tierCta}
                >
                  {tier.title === 'Free Tier' ? 'Subscribe Free ↗' : 'Go Paid ↗'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Posts */}
      <section className={`${styles.section} ${styles.postsSection}`}>
        <div className="container">
          <div className="reveal">
            <SectionHeader eyebrow="From The Archive" title="Recent Posts" />
          </div>
          <div className={styles.postsGrid}>
            {posts.map((p) => (
              <a
                key={p.title}
                href="https://alchenny.substack.com"
                target="_blank"
                rel="noreferrer"
                className={`${styles.postCard} reveal`}
              >
                <span className={styles.postEmoji} aria-hidden="true">{p.emoji}</span>
                <div className={styles.postBody}>
                  <span className={styles.postTag}>{p.tag}</span>
                  <h3 className={styles.postTitle}>{p.title}</h3>
                  <span className={styles.postLink}>Read on Substack ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className="reveal">
              <FoodImage tone="caramel" ratio="portrait" />
            </div>
            <div className={`${styles.aboutCopy} reveal`}>
              <div className="eyebrow">About The Newsletter</div>
              <h2 className={styles.aboutTitle}>Written by Allison, for bakers</h2>
              <p>
                The Croissant Crew started as a way to share what I learned at French pastry school
                with everyone who couldn't be there. Now it's a home for recipes, technique breakdowns,
                NYC food guides, and honest notes on life as a pastry creator.
              </p>
              <p>
                14,000+ subscribers and growing. Free to start. Upgrade anytime.
              </p>
              <a
                href="https://alchenny.substack.com"
                target="_blank"
                rel="noreferrer"
                className={styles.substackBtn}
              >
                Open on Substack ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
