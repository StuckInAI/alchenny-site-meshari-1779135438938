import styles from './Store.module.css';
import PageHero from '@/components/PageHero';
import FoodImage from '@/components/FoodImage';
import Button from '@/components/Button';
import NewsletterBlock from '@/components/NewsletterBlock';
import { products } from '@/lib/data';
import type { Product } from '@/types/index';

export default function Store() {
  return (
    <>
      <PageHero
        eyebrow="Store"
        title="Tools & Resources"
        description="Guides, courses, and memberships to help you bake at the next level."
      />

      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <div className="container">
          <div className={styles.grid}>
            {products.map((p: Product) => (
              <div key={p.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <FoodImage
                    tone={(p.tone as 'caramel' | 'cream' | 'mocha' | 'peach') ?? 'caramel'}
                    ratio="landscape"
                    alt={p.name}
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{p.name}</h3>
                  <p className={styles.cardDesc}>{p.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.price}>{p.price}</span>
                    <Button variant="primary">Get Access</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
