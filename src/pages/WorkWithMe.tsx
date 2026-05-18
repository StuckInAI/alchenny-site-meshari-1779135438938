import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import NewsletterBlock from '@/components/NewsletterBlock';
import FoodImage from '@/components/FoodImage';

const services = [
  {
    title: 'Recipe Development',
    description:
      'Custom pastry and viennoiserie recipes developed and tested for your brand, cookbook, or campaign.',
    tone: 'caramel' as const,
  },
  {
    title: 'Content Creation',
    description:
      'Photography, short-form video, and editorial styling rooted in Parisian café aesthetics.',
    tone: 'rose' as const,
  },
  {
    title: 'Brand Partnerships',
    description:
      'Sponsored stories, ambassadorships, and long-form integrations with brands I genuinely love.',
    tone: 'mocha' as const,
  },
  {
    title: 'Workshops & Speaking',
    description:
      'In-person and virtual baking classes, panels, and event appearances around the world.',
    tone: 'pistachio' as const,
  },
];

export default function WorkWithMe() {
  return (
    <>
      <PageHero
        eyebrow="Work With Me"
        title="Let's Make Something Beautiful"
        description="I partner with thoughtful brands, publications, and culinary teams on recipe development, content, and creative direction."
        emoji="✉️"
      />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {services.map((s) => (
              <article key={s.title} className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <FoodImage tone={s.tone} ratio="landscape" />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500 }}>{s.title}</h3>
                <p style={{ color: 'var(--color-text-soft)' }}>{s.description}</p>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }} className="reveal">
            <Button as="a" href="mailto:hello@alchenny.com" variant="primary">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
