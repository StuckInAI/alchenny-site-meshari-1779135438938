import React from 'react';
import styles from './WorkWithMe.module.css';
import PageHero from '@/components/PageHero';
import BrandRow from '@/components/BrandRow';
import NewsletterBlock from '@/components/NewsletterBlock';
import Button from '@/components/Button';
import useReveal from '@/hooks/useReveal';
import clsx from 'clsx';

const services = [
  {
    emoji: '📸',
    title: 'Food Photography',
    desc: 'High-end styled food photography for cookbooks, menus, packaging, and social campaigns. Natural light, editorial aesthetic.',
    price: 'From $800 / half day',
  },
  {
    emoji: '✍️',
    title: 'Recipe Development',
    desc: 'Original, tested recipes developed to brief — for brands, publications, or product launches. Full write-up and headnote included.',
    price: 'From $350 / recipe',
  },
  {
    emoji: '🎬',
    title: 'Video Content',
    desc: 'Short-form recipe videos for Instagram Reels, TikTok, or YouTube. Scripting, filming, and light editing handled in-house.',
    price: 'From $600 / video',
  },
  {
    emoji: '📣',
    title: 'Brand Partnerships',
    desc: 'Long-form sponsored content, newsletter integrations, and product features — crafted to fit my audience, not interrupt it.',
    price: 'Enquire for rates',
  },
  {
    emoji: '🎓',
    title: 'Workshops & Events',
    desc: 'Private and corporate baking workshops, pop-up masterclasses, and culinary event appearances.',
    price: 'Enquire for rates',
  },
  {
    emoji: '📖',
    title: 'Writing & Editing',
    desc: 'Food writing for magazines, brand copy, and cookbook editing. Precise, voice-led work that meets editorial standards.',
    price: 'From $200 / 1000 words',
  },
];

const brands = [
  'Le Creuset', 'Valrhona', 'KitchenAid', 'Thermomix',
  'Lurpak', 'Borough Market', 'Ottolenghi', 'Waitrose',
];

const faqs = [
  {
    q: 'What is your typical turnaround time?',
    a: 'Recipe development takes 1–2 weeks per recipe. Photography bookings are typically scheduled 3–4 weeks out. Video content takes 2–3 weeks from brief to delivery.',
  },
  {
    q: 'Do you work with international brands?',
    a: 'Absolutely. I work with clients across Europe, North America, and Australia. Remote briefings and digital delivery make collaboration seamless.',
  },
  {
    q: 'Can I see a portfolio or media kit?',
    a: 'Yes — email me at hello@alchenny.com and I will send over my full portfolio and media kit within 24 hours.',
  },
  {
    q: 'Do you offer package deals?',
    a: 'Yes. Combining recipe development with photography or video attracts a bundled rate. Get in touch to discuss your project scope.',
  },
];

export default function WorkWithMe() {
  const [ref, visible] = useReveal();

  return (
    <main ref={ref as React.RefObject<HTMLElement>}>
      <PageHero
        eyebrow="Work With Me"
        title="Let's make something delicious"
        description="Available for food photography, recipe development, video content, brand partnerships, and editorial work."
      />

      {/* Services */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={clsx('reveal', visible && 'is-visible')}>
            <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '1rem' }}>Services</div>
            <h2 className={styles.sectionTitle}>What I offer</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.serviceEmoji}>{s.emoji}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <div className={styles.servicePrice}>{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className={styles.brandsSection}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Past collaborations</div>
          <BrandRow brands={brands} />
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>FAQ</div>
          <h2 className={styles.sectionTitle}>Common questions</h2>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <div key={item.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{item.q}</h3>
                <p className={styles.faqA}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className="eyebrow" style={{ color: 'rgba(255,252,245,0.7)' }}>Get in touch</div>
            <h2 className={styles.ctaTitle}>Ready to collaborate?</h2>
            <p className={styles.ctaSub}>Send me a brief and I'll respond within 48 hours with availability and rates.</p>
            <Button as="link" to="mailto:hello@alchenny.com" variant="secondary">
              hello@alchenny.com
            </Button>
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </main>
  );
}
