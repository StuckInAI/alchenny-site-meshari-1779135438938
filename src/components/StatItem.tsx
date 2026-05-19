import { useRef } from 'react';
import styles from './StatItem.module.css';
import useReveal from '@/hooks/useReveal';
import useCountUp from '@/hooks/useCountUp';

type StatItemProps = {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export default function StatItem({ value, suffix = '', label, decimals = 0 }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useReveal(ref);
  const count = useCountUp({ end: value, decimals, enabled: revealed });

  return (
    <div ref={ref} className={styles.item}>
      <div className={styles.value}>
        {count}{suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
