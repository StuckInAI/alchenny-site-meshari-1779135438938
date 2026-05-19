import styles from './SectionHeader.module.css';
import type { ReactNode } from 'react';

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: 'left' | 'center';
};

export default function SectionHeader({ eyebrow, title, description, action, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={styles.header} style={{ textAlign: align }}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.desc}>{description}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
