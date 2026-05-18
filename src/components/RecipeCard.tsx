import FoodImage from './FoodImage';
import styles from './RecipeCard.module.css';
import type { Recipe } from '@/types';

type RecipeCardProps = { recipe: Recipe };

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <FoodImage
          tone={recipe.tone}
          ratio="landscape"
          src={recipe.image}
          alt={recipe.title}
        />
        <span className={styles.tag}>{recipe.category}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{recipe.title}</h3>
        <p className={styles.desc}>{recipe.description}</p>
        <div className={styles.meta}>
          <span className={styles.date}>{recipe.date}</span>
          <span className={styles.link}>View Recipe <span aria-hidden="true">→</span></span>
        </div>
      </div>
    </article>
  );
}
