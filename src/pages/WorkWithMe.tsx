import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import FoodImage from '@/components/FoodImage';
import NewsletterBlock from '@/components/NewsletterBlock';
import styles from './WorkWithMe.module.css';

const services = [
  {
    icon: '🎬',
    title: 'Sponsored Content',
    desc: 'Short-form and long-form video across TikTok, Instagram Reels, and YouTube. On-brand storytelling woven naturally into my content.',
  },
  {
    icon: '📸',
    title: 'Photography & Stills',
    desc: 'Recipe-driven still photography for social, editorial, and commercial use.',
  },
  {
    icon: '🧑‍🍳',
    title: 'Recipe Development',
    desc: 'Original recipes developed for brands, tested thoroughly, and written for any home baker.',
  },
  {
    icon: '🎙️',
    title: 'Events & Appearances',
    desc: 'Pop-ups, live demos, and brand activations. I also host classes at Kitsby in NYC.',
  },
  {
    icon: '✍️',
    title: 'Editorial & Writing',
    desc: 'Long-form content, newsletter features, and editorial recipe writing for print or digital.',
  },
  {
    icon: '🤝',
    title: 'Product Collabs',
    desc: 'Co-creation and co-branding on food products, packaging, and limited edition drops.',
  },
];

const stats = [
  { value: '1.5M+', label: 'Combined Followers' },
  { value: '34.4M', label: 'TikTok Likes' },
  { value: '542K', label: 'Instagram Followers' },
  { value: '14K+', label: 'Substack Subscribers' },
  { value: '584K', label: 'TikTok Followers' },
  { value: '70%+', label: 'Audience Female 18–34' },
];

export default function WorkWithMe() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Work With Me"
        description="Brand partnerships, sponsored content, recipe development, and events. Let's make something delicious together."
      />

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={`${styles.stat} reveal`}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.section}>
        <div className="container">
          <div className="reveal">
            <SectionHeader eyebrow="What I Offer" title="Services" />
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <div key={s.title} className={`${styles.serviceCard} reveal`}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Brands */}
      <section className={`${styles.section} ${styles.brandsSection}`}>
        <div className="container">
          <div className="reveal">
            <SectionHeader eyebrow="Past Partnerships" title="Brands I've Worked With" />
          </div>
          <div className={`${styles.brandList} reveal`}>
            {['Microsoft', 'Instacart', 'KitchenAid', 'Pique', 'Very Cool Ice Cream', 'Kitsby', 'Brûlée Bars'].map((b) => (
              <span key={b} className={styles.brandTag}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className="reveal">
              <FoodImage tone="caramel" ratio="landscape" />
            </div>
            <div className={`${styles.contactCopy} reveal`}>
              <div className="eyebrow">Get In Touch</div>
              <h2 className={styles.contactTitle}>Let's work together</h2>
              <p>
                For brand partnerships, sponsored content, and recipe development,
                reach out directly. I work with my management team at Palette.
              </p>
              <ul className={styles.contactList}>
                <li>
                  <span>Partnerships</span>
                  <a href="mailto:partnerships@alchenny.com">partnerships@alchenny.com</a>
                </li>
                <li>
                  <span>Talent Management</span>
                  <a href="mailto:alchenny@palettemgmt.com">alchenny@palettemgmt.com</a>
                </li>
                <li>
                  <span>General Inquiries</span>
                  <a href="mailto:hello@alchenny.com">hello@alchenny.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
