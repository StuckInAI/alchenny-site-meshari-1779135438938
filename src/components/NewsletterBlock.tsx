import { useState } from 'react';
import styles from './NewsletterBlock.module.css';

export default function NewsletterBlock() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.inner} reveal`}>
          <div className="eyebrow" style={{ color: 'rgba(255,252,245,0.7)' }}>Newsletter</div>
          <h2 className={styles.title}>Join The Croissant Crew</h2>
          <p className={styles.sub}>
            Baking guides straight from pastry school, recipe archives, and life updates —
            delivered to your inbox. 14,000+ subscribers.
          </p>
          <form className={styles.form} onSubmit={onSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={styles.input}
              aria-label="Email address"
            />
            <button type="submit" className={styles.button}>
              {submitted ? 'Thanks ✓' : 'Subscribe'}
            </button>
          </form>
          <p className={styles.note}>Hosted on Substack. Free and paid tiers available.</p>
        </div>
      </div>
    </section>
  );
}
