import { useEffect, useRef, RefObject } from 'react';

export function useReveal(
  ref?: RefObject<Element | null>,
  options?: IntersectionObserverInit
) {
  const localRef = useRef<HTMLDivElement>(null);
  const targetRef = ref ?? localRef;

  useEffect(() => {
    const els = targetRef.current
      ? [targetRef.current]
      : Array.from(document.querySelectorAll('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [targetRef, options]);

  return localRef;
}
