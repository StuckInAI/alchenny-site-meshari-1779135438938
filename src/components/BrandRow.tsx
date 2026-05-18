import styles from './BrandRow.module.css';

type BrandRowProps = { brands: string[] };

export default function BrandRow({ brands }: BrandRowProps) {
  return (
    <div className={styles.row}>
      {brands.map((b) => (
        <div key={b} className={styles.brand}>{b}</div>
      ))}
    </div>
  );
}
