import styles from './RecipeCard.module.css';
import type { Recipe } from '@/types';
import { useState } from 'react';

type RecipeCardProps = { recipe: Recipe };

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [imgError, setImgError] = useState(false);

  // Tone-based fallback colors
  const toneBg: Record<string, string> = {
    peach:     '#F9E4D4',
    caramel:   '#F2DDB3',
    mocha:     '#D9C4A8',
    rose:      '#F5D5DC',
    cream:     '#FAF0DC',
    cocoa:     '#D4B896',
    pistachio: '#D6E8C8',
    berry:     '#E2D0F0',
  };
  const toneEmoji: Record<string, string> = {
    peach: '🍑', caramel: '🥐', mocha: '☕', rose: '🌹',
    cream: '🎂', cocoa: '🍫', pistachio: '🍦', berry: '🫐',
  };

  const bg = toneBg[recipe.tone ?? 'caramel'];
  const emoji = toneEmoji[recipe.tone ?? 'caramel'];
  const showImage = recipe.image && !imgError;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap} style={showImage ? {} : { background: bg }}>
        {showImage ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            className={styles.image}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderEmoji}>{emoji}</span>
            <span className={styles.placeholderText}>{recipe.title}</span>
          </div>
        )}
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
