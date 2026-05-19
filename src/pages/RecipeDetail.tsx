import { useParams, Link } from 'react-router-dom';
import { RECIPE_DETAILS } from '@/lib/recipeDetails';
import type { RecipeDetail as RecipeDetailType, RecipeSection, TipBox } from '@/types';
import styles from './RecipeDetail.module.css';
import PageHero from '@/components/PageHero';
import FoodImage from '@/components/FoodImage';

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = RECIPE_DETAILS.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <div className={styles.notFound}>
        <h2>Recipe not found</h2>
        <Link to="/recipes">← Back to Recipes</Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Recipe"
        title={recipe.title}
        description={recipe.description}
      />
      <div className="container">
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <FoodImage
              tone={(recipe.tone as 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry') ?? 'caramel'}
              ratio="square"
              src={recipe.image}
              alt={recipe.title}
              className={styles.heroImg}
            />
            <div className={styles.meta}>
              {recipe.time && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Time</span>
                  <span className={styles.metaValue}>{recipe.time}</span>
                </div>
              )}
              {recipe.difficulty && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Difficulty</span>
                  <span className={styles.metaValue}>{recipe.difficulty}</span>
                </div>
              )}
              {recipe.servings && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Servings</span>
                  <span className={styles.metaValue}>{recipe.servings}</span>
                </div>
              )}
            </div>
          </aside>

          <main className={styles.main}>
            {recipe.sections.map((section: RecipeSection) => (
              <div key={section.heading} className={styles.section}>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                <ul className={styles.list}>
                  {section.items.map((item: string, i: number) => (
                    <li key={i} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {recipe.tips && recipe.tips.length > 0 && (
              <div className={styles.tipsWrap}>
                <h2 className={styles.sectionHeading}>Tips & Notes</h2>
                {recipe.tips.map((tip: TipBox, i: number) => (
                  <div key={i} className={styles.tipBox}>
                    {tip.title && <strong className={styles.tipTitle}>{tip.title}</strong>}
                    <p className={styles.tipBody}>{tip.body}</p>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.backLink}>
              <Link to="/recipes">← Back to all recipes</Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
