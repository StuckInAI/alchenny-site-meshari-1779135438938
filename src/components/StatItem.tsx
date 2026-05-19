import { useRef } from 'react';
import styles from './StatItem.module.css';
import { useCountUp } from '@/hooks/useCountUp';
import { useReveal } from '@/hooks/useReveal';

type StatItemProps = {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  duration?: number;
};

export default function StatItem({ value, suffix = '', label, decimals = 0, duration = 2000 }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useReveal(ref);

  const display = useCountUp({
    end: value,
    duration,
    decimals,
    enabled: revealed,
  });

  return (
    <div ref={ref} className={styles.item}>
      <div className={styles.value}>
        {display}{suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
