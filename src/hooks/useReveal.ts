import { useEffect, useState, RefObject } from 'react';

export function useReveal(
  ref: RefObject<Element | null>,
  options?: IntersectionObserverInit
): boolean {
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

  return revealed;
}

export default useReveal;
