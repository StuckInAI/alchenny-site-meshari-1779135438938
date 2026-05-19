import styles from './Store.module.css';
import PageHero from '@/components/PageHero';
import FoodImage from '@/components/FoodImage';
import Button from '@/components/Button';
import { products } from '@/lib/data';
import type { Product } from '@/types/index';

export default function Store() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="The Bakery Store"
        description="Digital guides, printable recipe cards, and video masterclasses — everything to level up your baking."
      />
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {products.map((product: Product) => (
              <div key={product.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <FoodImage tone={product.imageTone ?? 'caramel'} ratio="square" alt={product.name} />
                  {product.tag && <span className={styles.tag}>{product.tag}</span>}
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>{product.name}</h3>
                  <p className={styles.desc}>{product.description}</p>
                  <div className={styles.footer}>
                    <span className={styles.price}>{product.price}</span>
                    {product.link && (
                      <Button as="link" to={product.link} variant="primary">Buy Now</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
