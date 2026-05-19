import styles from './SectionHeader.module.css';
import clsx from 'clsx';

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeader({ eyebrow, title, description, centered }: SectionHeaderProps) {
  return (
    <div className={clsx(styles.header, centered && styles.centered)}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.desc}>{description}</p>}
    </div>
  );
}
