import clsx from 'clsx';
import styles from './FoodImage.module.css';

type Tone = 'peach' | 'caramel' | 'mocha' | 'rose' | 'cream' | 'cocoa' | 'pistachio' | 'berry';

type FoodImageProps = {
  tone?: Tone;
  ratio?: 'square' | 'portrait' | 'landscape' | 'tall';
  className?: string;
  label?: string;
};

export default function FoodImage({ tone = 'cream', ratio = 'square', className, label }: FoodImageProps) {
  return (
    <div className={clsx(styles.wrap, styles[tone], styles[ratio], className)} aria-hidden="true">
      <div className={styles.grain} />
      <div className={styles.dotA} />
      <div className={styles.dotB} />
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
