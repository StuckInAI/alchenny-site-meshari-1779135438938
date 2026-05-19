import { useEffect, useState, type RefObject } from 'react';

export default function useReveal(
  ref: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit
): [RefObject<HTMLElement | null>, boolean] {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, revealed];
}
