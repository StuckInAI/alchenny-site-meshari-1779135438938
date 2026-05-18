import styles from './PageHero.module.css';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  emoji?: string;
};

export default function PageHero({ eyebrow, title, description, emoji }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={`${styles.inner} reveal`}>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1 className={styles.title}>
            {title} {emoji && <span aria-hidden="true">{emoji}</span>}
          </h1>
          {description && <p className={styles.desc}>{description}</p>}
        </div>
      </div>
    </section>
  );
}
