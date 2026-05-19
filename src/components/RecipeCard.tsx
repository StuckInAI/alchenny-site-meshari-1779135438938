import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';
import clsx from 'clsx';
import type { Recipe } from '@/types';

type RecipeCardProps = {
  recipe: Recipe;
  featured?: boolean;
};

export default function RecipeCard({ recipe, featured = false }: RecipeCardProps) {
  const [imgError, setImgError] = useState<boolean>(false);

  const showImage = !imgError && !!recipe.image;

  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className={clsx(styles.card, featured && styles.featured)}
    >
      <div className={styles.imageWrap}>
        {showImage ? (
          <img
            src={imgError ? (recipe.imageFallback ?? '') : (recipe.image ?? '')}
            alt={recipe.title}
            className={styles.cardImg}
            onError={() => {
              if (!imgError && recipe.imageFallback) {
                setImgError(true);
              }
            }}
            referrerPolicy="no-referrer-when-downgrade"
            crossOrigin="anonymous"
            loading="lazy"
          />
        ) : recipe.imageFallback ? (
          <img
            src={recipe.imageFallback}
            alt={recipe.title}
            className={styles.cardImg}
            loading="lazy"
          />
        ) : (
          <div className={clsx(styles.placeholder, recipe.tone && styles[`tone-${recipe.tone}`])} />
        )}
      </div>
      <div className={styles.body}>
        {recipe.category && (
          <div className={styles.category}>{recipe.category}</div>
        )}
        <h3 className={styles.title}>{recipe.title}</h3>
        {recipe.description && (
          <p className={styles.desc}>{recipe.description}</p>
        )}
        <div className={styles.meta}>
          {recipe.time && <span>{recipe.time}</span>}
          {recipe.difficulty && <span>{recipe.difficulty}</span>}
        </div>
      </div>
    </Link>
  );
}
