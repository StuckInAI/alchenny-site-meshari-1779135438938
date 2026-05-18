import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import FoodImage from '@/components/FoodImage';
import NewsletterBlock from '@/components/NewsletterBlock';
import { products } from '@/lib/data';
import styles from './Store.module.css';

export default function Store() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="The Shop"
        title="Store"
        description="Limited cookie drops, seasonal treats, custom cakes, and event tickets — all in one place."
      />

      <section className={styles.section}>
        <div className="container">
          <div className="reveal">
            <SectionHeader eyebrow="Products" title="Shop Alchenny" />
          </div>
          <div className={styles.grid}>
            {products.map((p) => (
              <div key={p.id} className={`${styles.card} reveal`}>
                <div className={styles.imageWrap}>
                  <FoodImage tone={p.tone} ratio="landscape" />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{p.name}</h3>
                  <p className={styles.cardDesc}>{p.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.price}>{p.price}</span>
                    {p.href ? (
                      <a href={p.href} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
                        {p.cta} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <button className={styles.ctaBtn}>{p.cta}</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.hotplateSection}`}>
        <div className="container">
          <div className={`${styles.hotplateInner} reveal`}>
            <div className="eyebrow">Cookie Drops</div>
            <h2 className={styles.hotplateTitle}>Order from Hotplate</h2>
            <p className={styles.hotplateDesc}>
              Pre-order limited seasonal cookie drops directly through Hotplate. Shipped fresh from NYC.
            </p>
            <a
              href="https://www.hotplate.com/alchenny"
              target="_blank"
              rel="noreferrer"
              className={styles.hotplateBtn}
            >
              Visit Hotplate Store ↗
            </a>
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
