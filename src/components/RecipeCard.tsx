import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';
import FoodImage from '@/components/FoodImage';
import { Clock, ChefHat } from 'lucide-react';
import { RECIPE_DETAILS } from '@/lib/recipeDetails';
import type { Recipe } from '@/types/index';

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const hasDetail = recipe.slug ? RECIPE_DETAILS.some((r: { slug: string }) => r.slug === recipe.slug) : false;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <FoodImage
          tone={recipe.tone}
          ratio="landscape"
          src={recipe.image}
          alt={recipe.title}
          className={styles.image}
        />
        {recipe.tag && (
          <span className={styles.tag}>{recipe.tag}</span>
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
          {recipe.time && (
            <span className={styles.metaItem}>
              <Clock size={13} />
              {recipe.time}
            </span>
          )}
          {recipe.difficulty && (
            <span className={styles.metaItem}>
              <ChefHat size={13} />
              {recipe.difficulty}
            </span>
          )}
        </div>
        {hasDetail && recipe.slug && (
          <Link to={`/recipes/${recipe.slug}`} className={styles.link}>
            View Full Recipe →
          </Link>
        )}
      </div>
    </article>
  );
}
