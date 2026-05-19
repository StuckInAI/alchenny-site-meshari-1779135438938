import { useParams, Link } from 'react-router-dom';
import { recipeDetails } from '@/lib/recipeDetails';
import type { TipBox } from '@/types';
import styles from './RecipeDetail.module.css';

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipeDetails.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <div className={styles.notFound}>
        <p>Recipe not found. <Link to="/recipes">Back to Recipes</Link></p>
      </div>
    );
  }

  return (
    <article className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className="eyebrow">{recipe.category}</div>
            <h1 className={styles.title}>{recipe.title}</h1>
            <p className={styles.desc}>{recipe.description}</p>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <span className={styles.metaLabel}>Time</span>
                <span className={styles.metaValue}>{recipe.time}</span>
              </span>
              <span className={styles.metaItem}>
                <span className={styles.metaLabel}>Difficulty</span>
                <span className={styles.metaValue}>{recipe.difficulty}</span>
              </span>
              {recipe.servings && (
                <span className={styles.metaItem}>
                  <span className={styles.metaLabel}>Servings</span>
                  <span className={styles.metaValue}>{recipe.servings}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className="container">
          {recipe.sections.map((section, i) => (
            <div key={i} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.content && <p className={styles.sectionContent}>{section.content}</p>}
              {section.items && (
                <ul className={styles.list}>
                  {section.items.map((item: string, i: number) => (
                    <li key={i} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {recipe.tips && recipe.tips.length > 0 && (
            <div className={styles.tips}>
              {recipe.tips.map((tip: TipBox, i: number) => (
                <div key={i} className={styles.tipBox}>
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                  <p className={styles.tipBody}>{tip.body ?? tip.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
