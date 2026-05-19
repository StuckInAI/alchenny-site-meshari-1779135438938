import { useEffect, useRef, useState, RefObject } from 'react';

export function useReveal(
  ref?: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit
): [RefObject<HTMLElement | null>, boolean] {
  const internalRef = useRef<HTMLElement | null>(null);
  const resolvedRef = ref ?? internalRef;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = resolvedRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [resolvedRef, options]);

  return [resolvedRef, visible];
}
