import { useCountUp } from '@/hooks/useCountUp';
import styles from './StatItem.module.css';

type StatItemProps = {
  icon: string;
  value: string;
  label: string;
};

export default function StatItem({ icon, value, label }: StatItemProps) {
  const { display, ref } = useCountUp(value);
  return (
    <div className={styles.stat}>
      <div className={styles.icon}>{icon}</div>
      <span ref={ref} className={styles.value}>{display}</span>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
