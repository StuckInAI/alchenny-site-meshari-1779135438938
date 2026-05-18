import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import FoodImage from '@/components/FoodImage';
import Button from '@/components/Button';
import { products } from '@/lib/data';
import styles from './Store.module.css';

export default function Store() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="The Shop"
        title="Shop Alchenny"
        description="Small-batch desserts, handmade goods, and merch by Alchenny."
      />

      <section className={styles.bannerSection}>
        <div className="container">
          <div className={`${styles.banner} reveal`}>
            <span aria-hidden="true">🍪</span>
            <p>
              <strong>Cookie drops</strong> happen on Hotplate — follow{' '}
              <a href="https://www.instagram.com/al.chenny/" target="_blank" rel="noreferrer">@alchenny</a>{' '}
              to catch the next one!
            </p>
            <a href="https://www.hotplate.com/alchenny" target="_blank" rel="noreferrer" className={styles.bannerLink}>Visit Hotplate ↗</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {products.map((p) => (
              <article key={p.id} className={`${styles.card} reveal`}>
                <div className={styles.imageWrap}>
                  <FoodImage tone={p.tone} ratio="square" />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.desc}>{p.description}</p>
                  <div className={styles.row}>
                    <span className={styles.price}>{p.price}</span>
                    {p.href ? (
                      <Button as="a" href={p.href} target="_blank" rel="noreferrer" variant="secondary">{p.cta}</Button>
                    ) : (
                      <Button variant="secondary">{p.cta}</Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
