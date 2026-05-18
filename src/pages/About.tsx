import { useReveal } from '@/hooks/useReveal';
import FoodImage from '@/components/FoodImage';
import SectionHeader from '@/components/SectionHeader';
import BrandRow from '@/components/BrandRow';
import { timeline, funFacts } from '@/lib/data';
import styles from './About.module.css';

const brands = ['Microsoft', 'Instacart', 'KitchenAid', 'Pique', 'Very Cool Ice Cream', 'Kitsby', 'Brûlée Bars'];

export default function About() {
  useReveal();
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className="reveal">
              <FoodImage tone="caramel" ratio="tall" />
            </div>
            <div className={`${styles.heroCopy} reveal`}>
              <div className="eyebrow">Meet The Pastry Chef</div>
              <h1 className={styles.name}>Allison Chen</h1>
              <p className={styles.role}>Pastry Chef · Recipe Developer · Content Creator</p>
              <div className={styles.locTag}>
                <span aria-hidden="true">📍</span> Based in New York City
              </div>
              <div className={styles.contactBox}>
                <div className="eyebrow">Contact</div>
                <ul>
                  <li><span>Partnerships</span><a href="mailto:partnerships@alchenny.com">partnerships@alchenny.com</a></li>
                  <li><span>General</span><a href="mailto:hello@alchenny.com">hello@alchenny.com</a></li>
                  <li><span>Talent Mgmt</span><a href="mailto:alchenny@palettemgmt.com">alchenny@palettemgmt.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className="reveal">
            <SectionHeader eyebrow="Biography" title="About Allison" />
          </div>
          <div className={`${styles.bio} reveal`}>
            <p>
              Allison Chen is a pastry chef, recipe developer, and content creator based in New York City. Born August 21, 2002, she grew up in a food-oriented household where cooking and baking with family were a constant. That passion followed her to Duke University, where she began studying in 2020.
            </p>
            <p>
              In 2022, she studied at the National School of Pastry in France — one of the world's most prestigious culinary programs — bringing home techniques in croissants, macarons, choux, croquembouche, and classic French patisserie.
            </p>
            <p>
              While still in college, she co-created <em>[Stage]</em>, a viral apartment tasting menu she ran with friends that took off on social media. She also sold cookies from her parents' home, operated <em>4fold bakery</em>, and launched Alchenny LLC — her official brand and content business.
            </p>
            <p>
              Through Alchenny, she shares original recipes rooted in classic pastry technique, playful storytelling, and an approachable love of dessert. Her content blends her French pastry background with her Asian American upbringing — think macarons alongside mochi-inspired flavors, croissants alongside carrot cake.
            </p>
            <p>
              She is the Chief Baking Officer at <a href="https://kitsby.com" target="_blank" rel="noreferrer">Kitsby</a>, a baking community and studio in NYC. She also opened a baking studio in 2025 and hosts events, classes, and pop-up drops there.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`${styles.section} ${styles.timelineSection}`}>
        <div className="container">
          <div className="reveal">
            <SectionHeader eyebrow="Journey" title="The road so far" description="From Duke dorms to a French pastry school to a 1.5M+ following." />
          </div>
          <ol className={styles.timeline}>
            {timeline.map((t) => (
              <li key={t.year} className={`${styles.tItem} reveal`}>
                <div className={styles.tYear}>{t.year}</div>
                <div className={styles.tBody}>
                  <span className={styles.tDot} aria-hidden="true" />
                  <ul>
                    {t.events.map((e) => <li key={e}>{e}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fun Facts */}
      <section className={styles.section}>
        <div className="container">
          <div className="reveal">
            <SectionHeader eyebrow="Fun Facts" title="A few things you should know" />
          </div>
          <div className={styles.factsGrid}>
            {funFacts.map((f) => (
              <div key={f.text} className={`${styles.fact} reveal`}>
                <div className={styles.factIcon}>{f.icon}</div>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Collabs */}
      <section className={`${styles.section} ${styles.brandSection}`}>
        <div className="container">
          <div className="reveal">
            <SectionHeader align="center" eyebrow="Past Partnerships" title="Brands I've Worked With" />
          </div>
          <div className="reveal">
            <BrandRow brands={brands} />
          </div>
        </div>
      </section>
    </>
  );
}
