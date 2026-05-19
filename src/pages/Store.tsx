import styles from './Store.module.css';
import PageHero from '@/components/PageHero';
import FoodImage from '@/components/FoodImage';
import NewsletterBlock from '@/components/NewsletterBlock';
import Button from '@/components/Button';
import { products } from '@/lib/data';
import type { Product } from '@/types/index';

export default function Store() {
  return (
    <>
      <PageHero
        eyebrow="Store"
        title="Resources & Courses"
        description="Everything I've made to help you bake better — from video courses to recipe bundles."
      />
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {products.map((product: Product) => (
              <div key={product.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <FoodImage tone={product.tone} ratio="landscape" alt={product.name} />
                </div>
                <div className={styles.body}>
                  <div className={styles.tag}>{product.tag}</div>
                  <h3 className={styles.name}>{product.name}</h3>
                  <p className={styles.desc}>{product.description}</p>
                  <div className={styles.footer}>
                    <span className={styles.price}>{product.price}</span>
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
