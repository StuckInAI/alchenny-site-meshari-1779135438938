import { Link } from 'react-router-dom';
import styles from './SectionHeader.module.css';

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  linkTo?: string;
  linkLabel?: string;
};

export default function SectionHeader({ eyebrow, title, linkTo, linkLabel }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2 className={styles.title}>{title}</h2>
      </div>
      {linkTo && linkLabel && (
        <Link to={linkTo} className={styles.link}>
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
