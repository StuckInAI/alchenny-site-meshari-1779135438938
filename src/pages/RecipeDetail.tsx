import { useParams } from 'react-router-dom';
import type { TipBox, RecipeSection } from '@/types';
import recipeDetails from '@/lib/recipeDetails';
import PageHero from '@/components/PageHero';
import FoodImage from '@/components/FoodImage';
import styles from './RecipeDetail.module.css';

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? recipeDetails[slug] : null;

  if (!recipe) {
    return (
      <main>
        <PageHero title="Recipe not found" />
        <div className="container" style={{ padding: '4rem 0' }}>
          <p>Sorry, we couldn't find that recipe.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow={recipe.category}
        title={recipe.title}
        description={recipe.description}
      />
      <div className="container">
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <FoodImage tone={recipe.tone} ratio="square" alt={recipe.title} />
            <div className={styles.meta}>
              {recipe.prepTime && <div className={styles.metaItem}><span>Prep</span><strong>{recipe.prepTime}</strong></div>}
              {recipe.cookTime && <div className={styles.metaItem}><span>Cook</span><strong>{recipe.cookTime}</strong></div>}
              {recipe.servings && <div className={styles.metaItem}><span>Serves</span><strong>{recipe.servings}</strong></div>}
              <div className={styles.metaItem}><span>Difficulty</span><strong>{recipe.difficulty}</strong></div>
            </div>
          </aside>
          <div className={styles.content}>
            {recipe.sections.map((section: RecipeSection, i: number) => (
              <div key={i} className={styles.section}>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                <ul className={styles.list}>
                  {section.items.map((item: string, j: number) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {recipe.tips && (
              <div className={styles.tipBox}>
                <h3 className={styles.tipTitle}>{(recipe.tips as TipBox).title}</h3>
                <ul className={styles.list}>
                  {(recipe.tips as TipBox).tips.map((tip: string, i: number) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
