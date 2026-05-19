import { useRef, useEffect } from 'react';
import styles from './StatItem.module.css';
import useCountUp from '@/hooks/useCountUp';

type StatItemProps = {
  value: number | string;
  suffix?: string;
  label: string;
};

function StatDisplay({ value, suffix }: { value: number | string; suffix?: string }) {
  const numValue = typeof value === 'number' ? value : parseFloat(value);
  const isNumeric = !isNaN(numValue);
  const count = useCountUp(isNumeric ? numValue : 0);

  if (!isNumeric) {
    return <>{value}{suffix}</>
  }
  return <>{count}{suffix}</>;
}

export default function StatItem({ value, suffix, label }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.item} ref={ref}>
      <div className={styles.value}>
        <StatDisplay value={value} suffix={suffix} />
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
