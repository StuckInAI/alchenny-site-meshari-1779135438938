import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';
import FoodImage from './FoodImage';
import type { Recipe } from '@/types/index';

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = !imgError && !!recipe.image;

  return (
    <Link to={`/recipes/${recipe.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        {showImage ? (
          <img
            className={styles.image}
            src={imgError ? (recipe.imageFallback ?? '') : (recipe.image ?? '')}
            alt={recipe.title}
            onError={() => {
              if (!imgError && recipe.imageFallback) {
                setImgError(true);
              } else {
                setImgError(true);
              }
            }}
            loading="lazy"
          />
        ) : recipe.imageFallback ? (
          <img
            className={styles.image}
            src={recipe.imageFallback}
            alt={recipe.title}
            loading="lazy"
          />
        ) : (
          <FoodImage
            tone={recipe.tone}
            ratio="landscape"
            alt={recipe.title}
          />
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{recipe.category}</span>
          <span className={styles.difficulty} data-level={recipe.difficulty.toLowerCase()}>
            {recipe.difficulty}
          </span>
        </div>
        <h3 className={styles.title}>{recipe.title}</h3>
        <p className={styles.desc}>{recipe.description}</p>
        <div className={styles.stats}>
          <span>⏱ {recipe.time}</span>
          <span>🍽 {recipe.servings} servings</span>
        </div>
      </div>
    </Link>
  );
}
