import { useParams, Navigate } from 'react-router-dom';
import { recipeDetails } from '@/lib/recipeDetails';
import styles from './RecipeDetail.module.css';
import PageHero from '@/components/PageHero';
import FoodImage from '@/components/FoodImage';
import type { RecipeDetail as RecipeDetailType, TipBox } from '@/types/index';

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe: RecipeDetailType | undefined = recipeDetails.find((r) => r.slug === slug);

  if (!recipe) return <Navigate to="/recipes" replace />;

  return (
    <>
      <PageHero
        eyebrow={recipe.category}
        title={recipe.title}
      />
      <section className={styles.section}>
        <div className={`container ${styles.layout}`}>
          <aside className={styles.sidebar}>
            <FoodImage tone={recipe.tone} ratio="square" alt={recipe.title} />
            <div className={styles.meta}>
              {recipe.prepTime && <div className={styles.metaItem}><span>Prep</span><strong>{recipe.prepTime}</strong></div>}
              {recipe.cookTime && <div className={styles.metaItem}><span>Cook</span><strong>{recipe.cookTime}</strong></div>}
              {recipe.servings && <div className={styles.metaItem}><span>Serves</span><strong>{recipe.servings}</strong></div>}
              <div className={styles.metaItem}><span>Difficulty</span><strong>{recipe.difficulty}</strong></div>
            </div>
          </aside>
          <article className={styles.content}>
            {recipe.intro && <p className={styles.intro}>{recipe.intro}</p>}
            {recipe.sections && recipe.sections.map((section, i) => (
              <div key={i} className={styles.section}>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                {section.body && <p>{section.body}</p>}
                {section.items && (
                  <ul className={styles.list}>
                    {section.items.map((item: string, j: number) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {recipe.tips && Array.isArray(recipe.tips) && recipe.tips.map((tip: TipBox, i: number) => (
              <div key={i} className={styles.tipBox}>
                <h3 className={styles.tipTitle}>{tip.title}</h3>
                <p>{tip.body}</p>
                {tip.tips && (
                  <ul className={styles.list}>
                    {tip.tips.map((t: string, j: number) => (
                      <li key={j}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
