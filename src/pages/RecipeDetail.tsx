import { useParams, Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { recipeDetails } from '@/lib/recipeDetails';
import { useState } from 'react';
import styles from './RecipeDetail.module.css';

export default function RecipeDetail() {
  useReveal();
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipeDetails.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h1>Recipe not found</h1>
          <p>This recipe doesn't have a detail page yet.</p>
          <Link to="/recipes" className={styles.backLink}>← Back to Recipes</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero image */}
      <HeroImage src={recipe.image} alt={recipe.title} />

      <article className={styles.article}>
        <div className="container">
          {/* Back link */}
          <Link to="/recipes" className={`${styles.backLink} reveal`}>← Back to Recipes</Link>

          {/* Header */}
          <header className={`${styles.header} reveal`}>
            <div className="eyebrow">{recipe.category}</div>
            <h1 className={styles.title}>{recipe.title}</h1>
            <div className={styles.meta}>
              <span>⏱ Prep: {recipe.prepTime}</span>
              <span>🔥 Cook: {recipe.cookTime}</span>
              <span>🍽 {recipe.yield}</span>
            </div>
          </header>

          {/* Intro */}
          <div className={`${styles.intro} reveal`}>
            <p>{recipe.intro}</p>
          </div>

          {/* Sections */}
          {recipe.sections.map((section, si) => (
            <section key={si} className={`${styles.section} reveal`}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>

              {section.ingredients && section.ingredients.length > 0 && (
                <div className={styles.ingredients}>
                  <h3 className={styles.subHeading}>Ingredients</h3>
                  <ul className={styles.ingredientList}>
                    {section.ingredients.map((ing, ii) => (
                      <li key={ii}>{ing}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.steps && section.steps.length > 0 && (
                <div className={styles.steps}>
                  <h3 className={styles.subHeading}>Instructions</h3>
                  <ol className={styles.stepList}>
                    {section.steps.map((step, sti) => (
                      <li key={sti}>
                        <span className={styles.stepNum}>{sti + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {section.tip && (
                <div className={styles.tipBox}>
                  <span className={styles.tipIcon}>💡</span>
                  <p>{section.tip}</p>
                </div>
              )}

              {section.note && (
                <div className={styles.noteBox}>
                  <span className={styles.noteIcon}>📝</span>
                  <p>{section.note}</p>
                </div>
              )}
            </section>
          ))}

          {/* Notes */}
          {recipe.notes && recipe.notes.length > 0 && (
            <section className={`${styles.notesSection} reveal`}>
              <h2 className={styles.sectionHeading}>Notes & Tips</h2>
              <ul className={styles.notesList}>
                {recipe.notes.map((note, ni) => (
                  <li key={ni}>{note}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </>
  );
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  return (
    <div className={styles.heroWrap}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          className={styles.heroImg}
          onError={() => setError(true)}
        />
      ) : (
        <div className={styles.heroFallback}>
          <span>🥐</span>
        </div>
      )}
      <div className={styles.heroOverlay} />
    </div>
  );
}
