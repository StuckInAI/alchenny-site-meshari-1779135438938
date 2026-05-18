import styles from './Divider.module.css';

export default function Divider() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <span className={styles.line} />
      <span className={styles.icon}>🥐</span>
      <span className={styles.line} />
    </div>
  );
}
