import useReveal from '@/hooks/useReveal';
import styles from './WorkWithMe.module.css';
import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import SectionHeader from '@/components/SectionHeader';
import NewsletterBlock from '@/components/NewsletterBlock';

const SERVICES = [
  {
    emoji: '📸',
    title: 'Food Photography',
    desc: 'Beautiful, editorial-quality food photography for brands, cookbooks, and editorial features. Shot in natural light with a warm, inviting aesthetic.',
    price: 'From $800 / half day',
  },
  {
    emoji: '🎨',
    title: 'Recipe Development',
    desc: 'Original recipe creation tested to perfection, with full write-ups, ingredient lists, and styled photography. Ideal for food brands and publications.',
    price: 'From $400 / recipe',
  },
  {
    emoji: '✍️',
    title: 'Content & Copywriting',
    desc: 'Engaging food content, blog posts, newsletters, and social captions that reflect your brand voice and connect with your audience.',
    price: 'From $250 / piece',
  },
  {
    emoji: '🤝',
    title: 'Brand Partnerships',
    desc: 'Long-term ambassador relationships with food, kitchen, and lifestyle brands. Includes social content, newsletter features, and event appearances.',
    price: 'Packages from $2,000',
  },
  {
    emoji: '🎓',
    title: 'Workshops & Classes',
    desc: 'Private and group pastry workshops, corporate team events, and online masterclasses. Tailored to skill level and hosted at your location or online.',
    price: 'From $150 / person',
  },
  {
    emoji: '📱',
    title: 'Social Media Consulting',
    desc: 'Strategy, content planning, and hands-on coaching for food brands and creators looking to grow their social presence authentically.',
    price: 'From $500 / month',
  },
];

const BRANDS = [
  'Le Creuset', 'KitchenAid', 'Whole Foods', 'Williams Sonoma',
  'Sur La Table', 'Food52', 'Bon Appétit', 'NYT Cooking',
];

const FAQS = [
  {
    q: 'What is your typical turnaround time?',
    a: 'For recipe development and photography, I typically deliver within 2–3 weeks of project start. Rush timelines can be accommodated for an additional fee.',
  },
  {
    q: 'Do you work with international brands?',
    a: 'Absolutely. I work with brands globally and can accommodate remote projects, video calls across time zones, and international shipping for product features.',
  },
  {
    q: 'Can you handle both recipe development and photography?',
    a: 'Yes — full-service packages that include recipe creation, testing, styling, and photography are my most popular offering.',
  },
  {
    q: 'What information do you need to provide a quote?',
    a: 'A brief overview of the project scope, timeline, usage rights needed, and budget range helps me put together an accurate proposal.',
  },
];

export default function WorkWithMe() {
  const ref = useReveal();

  return (
    <main ref={ref as React.RefObject<HTMLElement>}>
      <PageHero
        eyebrow="Collaborate"
        title="Work With Me"
        description="Bringing brands and stories to life through the lens of food. Let's create something beautiful together."
      />

      {/* Services */}
      <section className={styles.servicesSection}>
        <div className="container">
          <SectionHeader eyebrow="Services" title="What I Offer" />
          <div className={styles.servicesGrid}>
            {SERVICES.map((s) => (
              <div key={s.title} className={`${styles.serviceCard} reveal`}>
                <div className={styles.serviceEmoji}>{s.emoji}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <div className={styles.servicePrice}>{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Brands */}
      <section className={styles.brandsSection}>
        <div className="container">
          <SectionHeader eyebrow="Past Collaborations" title="Brands I've Worked With" centered />
          <div className={styles.brandsGrid}>
            {BRANDS.map((b) => (
              <div key={b} className={`${styles.brandChip} reveal`}>{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container">
          <SectionHeader eyebrow="FAQ" title="Common Questions" />
          <div className={styles.faqList}>
            {FAQS.map((f) => (
              <div key={f.q} className={`${styles.faqItem} reveal`}>
                <h4 className={styles.faqQ}>{f.q}</h4>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={`${styles.contactInner} reveal`}>
            <h2 className={styles.contactTitle}>Let's Start a Conversation</h2>
            <p className={styles.contactDesc}>
              Have a project in mind? I'd love to hear about it. Send me a message and
              I'll get back to you within 48 hours.
            </p>
            <Button as="link" to="mailto:hello@alchenny.com" variant="primary">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </main>
  );
}
