import { useEffect, useRef, useState } from 'react';

function parseValue(val: string): { num: number; suffix: string; prefix: string } {
  const prefix = val.startsWith('$') ? '$' : '';
  const stripped = val.replace(/[$]/g, '');
  const match = stripped.match(/^([\d.,]+)([A-Za-z+%]*)$/);
  if (!match) return { num: 0, suffix: val, prefix: '' };
  const num = parseFloat(match[1].replace(/,/g, ''));
  const suffix = match[2] || '';
  return { num, suffix, prefix };
}

export function useCountUp(target: string, duration = 1800) {
  const { num, suffix, prefix } = parseValue(target);
  const [display, setDisplay] = useState(prefix + '0' + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (num === 0) { setDisplay(target); return; }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * num;
            // Format: if num >= 1000 use K
            let formatted: string;
            if (num >= 1000) {
              formatted = (current / 1000).toFixed(current >= num * 0.99 ? (Number.isInteger(num / 1000) ? 0 : 1) : 1) + 'K';
            } else if (Number.isInteger(num)) {
              formatted = Math.round(current).toString();
            } else {
              formatted = current.toFixed(1);
            }
            setDisplay(prefix + formatted + (num >= 1000 ? '' : suffix));
            if (progress < 1) requestAnimationFrame(step);
            else setDisplay(target); // snap to exact final value
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, num, suffix, prefix, duration]);

  return { display, ref };
}
