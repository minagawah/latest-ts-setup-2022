import { useEffect, useRef } from 'react';

export const useTimeout = (fn: () => void, delay: number) => {
  const saved = useRef(fn);

  useEffect(() => {
    saved.current = fn;
  }, [fn]);

  useEffect(() => {
    if (!delay && delay === null) return;

    const timer_id = setTimeout(() => saved.current(), delay);

    return () => {
      clearTimeout(timer_id);
    };
  }, [delay]);
};
