import styles from './Store.module.css';
import PageHero from '@/components/PageHero';
import { products } from '@/lib/data';
import type { Product } from '@/types/index';

export default function Store() {
  return (
    <main>
      <PageHero
        eyebrow="Shop"
        title="The Bake Shop"
        description="Digital guides, courses, and resources to level up your baking."
      />
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {products.map((product: Product) => (
              <div key={product.id} className={styles.card}>
                <div className={styles.imgWrap}>
                  {product.image ? (
                    <img src={product.image} alt={product.name} className={styles.img} loading="lazy" />
                  ) : (
                    <div className={styles.imgPlaceholder}>📦</div>
                  )}
                  {product.badge && (
                    <span className={styles.badge}>{product.badge}</span>
                  )}
                </div>
                <div className={styles.body}>
                  <div className={styles.category}>{product.category}</div>
                  <h3 className={styles.name}>{product.name}</h3>
                  <p className={styles.desc}>{product.description}</p>
                  <div className={styles.footer}>
                    <span className={styles.price}>
                      {product.price === 0 ? 'Free' : `$${product.price}`}
                    </span>
                    <button className={styles.btn}>
                      {product.price === 0 ? 'Download' : 'Buy Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
