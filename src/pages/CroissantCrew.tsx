import React from 'react';
import styles from './CroissantCrew.module.css';
import PageHero from '@/components/PageHero';
import NewsletterBlock from '@/components/NewsletterBlock';
import Button from '@/components/Button';
import useReveal from '@/hooks/useReveal';
import clsx from 'clsx';

const perks = [
  {
    emoji: '📬',
    title: 'Weekly Deep-Dives',
    desc: 'Technique breakdowns, recipe development journals, and behind-the-scenes from pastry school.',
  },
  {
    emoji: '🎥',
    title: 'Video Walkthroughs',
    desc: 'Paid subscribers get full-length video companions for every complex recipe.',
  },
  {
    emoji: '💬',
    title: 'Community Chat',
    desc: 'Ask questions, share your bakes, and connect with 14k+ fellow croissant lovers.',
  },
  {
    emoji: '📚',
    title: 'Recipe Archive',
    desc: 'Access to every recipe ever published — fully searchable and indexed.',
  },
  {
    emoji: '🎓',
    title: 'Pastry School Notes',
    desc: 'Real class notes, diagrams, and vocabulary from professional training.',
  },
  {
    emoji: '💌',
    title: 'Early Access',
    desc: 'New recipes and guides land in your inbox before they hit the blog.',
  },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/ month',
    features: ['Weekly newsletter', 'Selected free recipes', 'Community access'],
    cta: 'Subscribe Free',
    href: 'https://substack.com',
    accent: false,
  },
  {
    name: 'Crew Member',
    price: '$7',
    period: '/ month',
    features: [
      'Everything in Free',
      'Full recipe archive',
      'Video walkthroughs',
      'Pastry school notes',
      'Early access drops',
    ],
    cta: 'Join the Crew',
    href: 'https://substack.com',
    accent: true,
  },
  {
    name: 'Annual',
    price: '$60',
    period: '/ year',
    features: [
      'Everything in Crew Member',
      'Two months free',
      'Exclusive annual recipe book (PDF)',
    ],
    cta: 'Go Annual',
    href: 'https://substack.com',
    accent: false,
  },
];

export default function CroissantCrew() {
  const [ref, visible] = useReveal();

  return (
    <main ref={ref as React.RefObject<HTMLElement>}>
      <PageHero
        eyebrow="The Croissant Crew"
        title="Join 14,000+ baking enthusiasts"
        description="A newsletter for people who take their pastry seriously. Technique, recipes, and the odd butter-fuelled rant."
      />

      {/* Perks */}
      <section className={styles.perksSection}>
        <div className="container">
          <div className={clsx('reveal', visible && 'is-visible')}>
            <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '1rem' }}>What you get</div>
            <h2 className={styles.sectionTitle}>Everything a serious baker needs</h2>
          </div>
          <div className={styles.perksGrid}>
            {perks.map((p) => (
              <div key={p.title} className={styles.perkCard}>
                <div className={styles.perkEmoji}>{p.emoji}</div>
                <h3 className={styles.perkTitle}>{p.title}</h3>
                <p className={styles.perkDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '1rem' }}>Pricing</div>
          <h2 className={styles.sectionTitle}>Simple, honest pricing</h2>
          <div className={styles.plansGrid}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={clsx(styles.planCard, plan.accent && styles.planCardAccent)}
              >
                <div className={styles.planName}>{plan.name}</div>
                <div className={styles.planPrice}>
                  <span className={styles.planAmount}>{plan.price}</span>
                  <span className={styles.planPeriod}>{plan.period}</span>
                </div>
                <ul className={styles.planFeatures}>
                  {plan.features.map((f) => (
                    <li key={f} className={styles.planFeature}>
                      <span className={styles.check}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  as="link"
                  to={plan.href}
                  variant={plan.accent ? 'primary' : 'secondary'}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </main>
  );
}
