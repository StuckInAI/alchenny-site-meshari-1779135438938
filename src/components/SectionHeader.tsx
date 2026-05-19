import styles from './SectionHeader.module.css';
import { Link } from 'react-router-dom';

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  linkLabel?: string;
  linkHref?: string;
};

export default function SectionHeader({ eyebrow, title, linkLabel, linkHref }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2 className={styles.title}>{title}</h2>
      </div>
      {linkLabel && linkHref && (
        <Link to={linkHref} className={styles.link}>{linkLabel}</Link>
      )}
    </div>
  );
}
