import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export default function useInView(options: UseInViewOptions = {}) {
  const { triggerOnce = false, ...observerOptions } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let hasTriggered = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            hasTriggered = true;
            observer.disconnect();
          }
        } else {
          if (!triggerOnce) setInView(false);
        }
      },
      {
        threshold: observerOptions.threshold ?? 0.1,
        root: observerOptions.root ?? null,
        rootMargin: observerOptions.rootMargin ?? '0px',
      }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line
  }, [ref.current, triggerOnce, observerOptions.threshold, observerOptions.root, observerOptions.rootMargin]);

  return { ref, inView };
}
