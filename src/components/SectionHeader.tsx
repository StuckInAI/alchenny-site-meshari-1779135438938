import styles from './SectionHeader.module.css';
import clsx from 'clsx';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={clsx(styles.wrap, align === 'center' && styles.center)}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.desc}>{description}</p>}
    </div>
  );
}
