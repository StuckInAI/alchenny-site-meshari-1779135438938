import { useEffect, useState, RefObject } from 'react';

export default function useReveal(ref: RefObject<HTMLElement | null>): boolean {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setRevealed(true);
    }
  }, [ref]);

  return revealed;
}
