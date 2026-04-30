import { useEffect, useRef, useState, type Ref } from "react";

type UseVisibleOptions = {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean; // optional: trigger only once
};

export function useVisible(options: UseVisibleOptions = {}): [
    Ref<HTMLDivElement | null>,
    boolean
] {
  const {
    rootMargin = "0px",
    threshold = 0,
    once = false,
  } = options;

  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let hasTriggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        if (visible) {
          if (once) {
            if (!hasTriggered) {
              setIsVisible(true);
              hasTriggered = true;
            }
          } else {
            setIsVisible(true);
          }
        } else {
          if (!once) setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return [ref, isVisible];
}