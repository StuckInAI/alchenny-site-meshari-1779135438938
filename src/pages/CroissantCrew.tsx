import useReveal from '@/hooks/useReveal';
import styles from './CroissantCrew.module.css';
import PageHero from '@/components/PageHero';
import NewsletterBlock from '@/components/NewsletterBlock';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';

const PERKS = [
  {
    emoji: '🥐',
    title: 'Weekly Recipes',
    desc: 'Tested, detailed, and beautifully photographed recipes delivered every week.',
  },
  {
    emoji: '🎓',
    title: 'Technique Deep-Dives',
    desc: 'In-depth guides on pastry techniques, from lamination to tempering chocolate.',
  },
  {
    emoji: '📦',
    title: 'Ingredient Sourcing',
    desc: 'Where to find the best ingredients, tools, and equipment for your kitchen.',
  },
  {
    emoji: '🌍',
    title: 'Travel & Inspiration',
    desc: 'Bakery visits, food market finds, and pastry inspiration from around the world.',
  },
  {
    emoji: '💬',
    title: 'Community Access',
    desc: 'Join a growing community of passionate bakers sharing tips and creations.',
  },
  {
    emoji: '🎁',
    title: 'Exclusive Content',
    desc: 'Paid subscribers get access to recipe archives, video tutorials, and more.',
  },
];

const STATS = [
  { value: '14,000+', label: 'Subscribers' },
  { value: '200+', label: 'Issues Published' },
  { value: '4.8/5', label: 'Average Rating' },
  { value: '62%', label: 'Open Rate' },
];

const TESTIMONIALS = [
  {
    quote: "Alice's newsletter completely changed how I approach pastry. The technique breakdowns are unlike anything else out there.",
    name: 'Sarah M.',
    role: 'Home Baker',
  },
  {
    quote: 'I look forward to Tuesday mornings because of The Croissant Crew. Worth every penny of the paid subscription.',
    name: 'James T.',
    role: 'Pastry Enthusiast',
  },
  {
    quote: 'Finally, a newsletter that treats readers as intelligent adults who actually want to learn the craft.',
    name: 'Priya K.',
    role: 'Professional Chef',
  },
];

export default function CroissantCrew() {
  const ref = useReveal();

  return (
    <main ref={ref as React.RefObject<HTMLElement>}>
      <PageHero
        eyebrow="Newsletter"
        title="The Croissant Crew"
        description="A weekly newsletter for people who take baking seriously — and have fun doing it. Join 14,000+ subscribers."
      />

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={`${styles.statCard} reveal`}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className={styles.perksSection}>
        <div className="container">
          <SectionHeader eyebrow="What You Get" title="Everything Inside The Crew" centered />
          <div className={styles.perksGrid}>
            {PERKS.map((p) => (
              <div key={p.title} className={`${styles.perkCard} reveal`}>
                <div className={styles.perkEmoji}>{p.emoji}</div>
                <h3 className={styles.perkTitle}>{p.title}</h3>
                <p className={styles.perkDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <SectionHeader eyebrow="Readers Say" title="From The Community" centered />
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={`${styles.testimonialCard} reveal`}>
                <blockquote className={styles.quote}>"{t.quote}"</blockquote>
                <div className={styles.testimonialAuthor}>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={`${styles.ctaInner} reveal`}>
            <h2 className={styles.ctaTitle}>Ready to Level Up Your Baking?</h2>
            <p className={styles.ctaDesc}>
              Join thousands of bakers getting weekly recipes, techniques, and inspiration.
              Free to start — upgrade anytime.
            </p>
            <Button as="link" to="https://substack.com" variant="primary">
              Subscribe on Substack
            </Button>
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </main>
  );
}
