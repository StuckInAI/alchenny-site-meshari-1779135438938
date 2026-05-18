import PageHero from '@/components/PageHero';
import NewsletterBlock from '@/components/NewsletterBlock';
import Divider from '@/components/Divider';

const perks = [
  {
    title: 'Weekly Letters',
    description: 'Long-form essays from pastry school, behind-the-scenes notes, and seasonal recipe drops.',
  },
  {
    title: 'Members Recipe Archive',
    description: 'Full access to the paid archive — laminated doughs, entremets, and tested techniques.',
  },
  {
    title: 'Live Q&A',
    description: 'Monthly live sessions where we troubleshoot bakes and chat technique in real time.',
  },
  {
    title: 'Early Access',
    description: 'First dibs on workshops, retreats, and limited collaborations before anyone else.',
  },
];

export default function CroissantCrew() {
  return (
    <>
      <PageHero
        eyebrow="The Croissant Crew"
        title="A Letter For The Curious Baker"
        description="A warm corner of the internet for people who love butter, layered doughs, and slow Sunday mornings. Free and paid tiers available."
        emoji="🥐"
      />

      <section className="section">
        <div className="container">
          <Divider />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              marginTop: '2rem',
            }}
          >
            {perks.map((p) => (
              <article key={p.title} className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 500 }}>{p.title}</h3>
                <p style={{ color: 'var(--color-text-soft)' }}>{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
