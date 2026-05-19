import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RECIPE_DETAILS } from '@/lib/recipeDetails';
import type { RecipeDetail, RecipeSection, TipBox } from '@/lib/recipeDetails';
import styles from './RecipeDetail.module.css';

export default function RecipeDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const recipe: RecipeDetail | undefined = RECIPE_DETAILS.find(
    (r: RecipeDetail) => r.slug === slug
  );

  if (!recipe) {
    return (
      <div className={styles.notFound}>
        <h2>Recipe not found</h2>
        <Link to="/recipes">← Back to Recipes</Link>
      </div>
    );
  }

  return (
    <main className={styles.page}>
      {/* Hero image */}
      <HeroImage src={recipe.image} fallback={recipe.imageFallback} alt={recipe.title} />

      <div className="container">
        <div className={styles.header}>
          <Link to="/recipes" className={styles.back}>← All Recipes</Link>
          <div className={styles.eyebrow}>{recipe.difficulty} · {recipe.totalTime}</div>
          <h1 className={styles.title}>{recipe.title}</h1>
          {recipe.subtitle && <p className={styles.subtitle}>{recipe.subtitle}</p>}
          <p className={styles.description}>{recipe.description}</p>
          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Prep</span>
              <span className={styles.metaValue}>{recipe.prepTime}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Cook</span>
              <span className={styles.metaValue}>{recipe.cookTime}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Total</span>
              <span className={styles.metaValue}>{recipe.totalTime}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Yield</span>
              <span className={styles.metaValue}>{recipe.servings}</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          {/* Tip boxes at the top if present */}
          {recipe.tips && recipe.tips.length > 0 && (
            <div className={styles.tipsBlock}>
              {recipe.tips.map((tip: TipBox, ti: number) => (
                <div key={ti} className={styles.tipBox}>
                  {tip.text}
                </div>
              ))}
            </div>
          )}

          {recipe.sections.map((section: RecipeSection, si: number) => (
            <div key={si} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.ingredients.length > 0 && (
                <div className={styles.ingredients}>
                  <h3 className={styles.subhead}>Ingredients</h3>
                  <ul className={styles.ingredientList}>
                    {section.ingredients.map((ing: string, ii: number) => (
                      <li key={ii} className={styles.ingredient}>{ing}</li>
                    ))}
                  </ul>
                </div>
              )}
              {section.steps.length > 0 && (
                <div className={styles.steps}>
                  <h3 className={styles.subhead}>Method</h3>
                  <ol className={styles.stepList}>
                    {section.steps.map((step: string, sti: number) => (
                      <li key={sti} className={styles.step}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ))}

          {recipe.notes && recipe.notes.length > 0 && (
            <div className={styles.notes}>
              <h2 className={styles.sectionTitle}>Baker's Notes</h2>
              <ul className={styles.noteList}>
                {recipe.notes.map((note: string, ni: number) => (
                  <li key={ni} className={styles.note}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function HeroImage({
  src,
  fallback,
  alt,
}: {
  src: string;
  fallback: string;
  alt: string;
}) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [usedFallback, setUsedFallback] = useState<boolean>(false);

  function handleError() {
    if (!usedFallback && fallback && imgSrc !== fallback) {
      setImgSrc(fallback);
      setUsedFallback(true);
    }
  }

  return (
    <div className={styles.heroWrap}>
      <img
        src={imgSrc}
        alt={alt}
        className={styles.heroImg}
        onError={handleError}
        referrerPolicy="no-referrer-when-downgrade"
        crossOrigin="anonymous"
        loading="eager"
      />
      <div className={styles.heroOverlay} />
    </div>
  );
}
