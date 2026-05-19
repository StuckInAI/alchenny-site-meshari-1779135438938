import styles from './WorkWithMe.module.css';
import PageHero from '@/components/PageHero';
import BrandRow from '@/components/BrandRow';
import Button from '@/components/Button';
import NewsletterBlock from '@/components/NewsletterBlock';
import { useReveal } from '@/hooks/useReveal';

const brands = [
  'KitchenAid', 'Le Creuset', 'Valrhona', 'Nordic Ware',
  'OXO', 'Staub', 'Bob\'s Red Mill', 'King Arthur Flour',
];

const services = [
  {
    title: 'Recipe Development',
    desc: 'Tested, refined recipes tailored to your brand voice, dietary needs, and production requirements.',
    icon: '📋',
  },
  {
    title: 'Food Photography',
    desc: 'Natural-light food photography styled to match your brand — ideal for packaging, menus, and social media.',
    icon: '📷',
  },
  {
    title: 'Brand Partnerships',
    desc: 'Long-form and short-form sponsored content across Instagram, YouTube, and this site — 80k+ combined reach.',
    icon: '🤝',
  },
  {
    title: 'Workshops & Events',
    desc: 'In-person and virtual baking workshops for brands, corporates, and private groups.',
    icon: '🎓',
  },
];

const faqs = [
  { q: 'What\'s your typical turnaround time?', a: 'Recipe development projects usually take 2–3 weeks from brief to delivery. Photography turnaround is 1–2 weeks after shoot day.' },
  { q: 'Do you work with international brands?', a: 'Absolutely — the majority of my partnerships are remote. I ship or source locally where needed.' },
  { q: 'Do you offer usage rights for content?', a: 'Yes. All packages include standard web/social usage. Extended or exclusive rights are available at an additional cost.' },
  { q: 'What\'s the best way to get started?', a: 'Send me an email with a brief overview of your project and I\'ll respond within 48 hours to schedule a discovery call.' },
];

export default function WorkWithMe() {
  const servicesRef = useReveal();
  const brandsRef = useReveal();
  const faqRef = useReveal();

  return (
    <>
      <PageHero
        eyebrow="Collaborate"
        title="Work With Me"
        description="Recipe development, food photography, and brand partnerships — let's make something delicious together."
      />

      {/* Services */}
      <section ref={servicesRef as React.RefObject<HTMLElement>} className={styles.services}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '2rem' }}>What I Offer</div>
          <div className={styles.grid}>
            {services.map((s) => (
              <div key={s.title} className={styles.card}>
                <span className={styles.icon}>{s.icon}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section ref={brandsRef as React.RefObject<HTMLElement>} className={styles.brandsSection}>
        <div className="container">
          <div className={styles.brandHeader}>
            <div className="eyebrow">Trusted by</div>
            <h2 className={styles.brandTitle}>Brands I've Worked With</h2>
          </div>
          <BrandRow brands={brands} />
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef as React.RefObject<HTMLElement>} className={styles.faq}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '2rem' }}>FAQs</div>
          <div className={styles.faqGrid}>
            {faqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className="eyebrow">Let's Talk</div>
            <h2 className={styles.ctaTitle}>Ready to collaborate?</h2>
            <p className={styles.ctaDesc}>Drop me an email and let's make something great together.</p>
            <Button as="link" to="mailto:hello@alchenny.com" variant="primary">Get in Touch</Button>
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
