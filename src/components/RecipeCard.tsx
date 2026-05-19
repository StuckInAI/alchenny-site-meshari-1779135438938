import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';
import FoodImage from './FoodImage';
import clsx from 'clsx';
import { Recipe } from '@/types';

type Tone = 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry';

const VALID_TONES: Tone[] = ['peach', 'caramel', 'mocha', 'rose', 'cream', 'cocoa', 'pistachio', 'berry'];

function isTone(value: string | undefined): value is Tone {
  return VALID_TONES.includes(value as Tone);
}

type RecipeCardProps = {
  recipe: Recipe;
  featured?: boolean;
};

export default function RecipeCard({ recipe, featured = false }: RecipeCardProps) {
  const tone = isTone(recipe.tone) ? recipe.tone : undefined;

  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className={clsx(styles.card, featured && styles.featured)}
    >
      <div className={styles.imageWrap}>
        <FoodImage
          tone={tone}
          ratio={featured ? 'landscape' : 'portrait'}
          src={recipe.image}
          alt={recipe.title}
        />
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
