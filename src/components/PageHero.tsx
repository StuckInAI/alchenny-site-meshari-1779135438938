import styles from './PageHero.module.css';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.desc}>{description}</p>}
        </div>
      </div>
    </section>
  );
}
