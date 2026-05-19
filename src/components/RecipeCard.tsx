import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';
import type { Recipe } from '@/types/index';
import { useState } from 'react';

type RecipeCardProps = { recipe: Recipe };

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [imgError, setImgError] = useState(false);

  const imageContent = () => {
    if (!recipe.image || imgError) {
      return (
        <div className={styles.imgPlaceholder}>
          <span className={styles.emoji}>🥐</span>
        </div>
      );
    }
    return (
      <img
        src={recipe.image}
        alt={recipe.title}
        className={styles.img}
        onError={() => setImgError(true)}
        loading="lazy"
      />
    );
  };

  return (
    <Link to={`/recipes/${recipe.slug}`} className={styles.card}>
      <div className={styles.imgWrap}>
        {imageContent()}
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{recipe.category}</span>
          <span className={styles.difficulty}>{recipe.difficulty}</span>
        </div>
        <h3 className={styles.title}>{recipe.title}</h3>
        <p className={styles.desc}>{recipe.description}</p>
        <div className={styles.stats}>
          <span>⏱ {recipe.prepTime} prep</span>
          <span>🔥 {recipe.cookTime}</span>
          <span>🍽 {recipe.servings} servings</span>
        </div>
      </div>
    </Link>
  );
}
