// ============================================================
// hooks.js  —  Custom React hooks used across the portfolio
// ============================================================

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a number from `start` to `end` over `duration` ms,
 * triggering only once the returned `ref` enters the viewport.
 *
 * @param {number} end       - The target number to count up to.
 * @param {number} duration  - Animation length in milliseconds (default 2000).
 * @param {number} start     - Starting number (default 0).
 * @returns {[React.Ref, number]} - [ref to attach to DOM element, current count]
 */
export function useCounter(end, duration = 2000, start = 0) {
  const [count, setCount]   = useState(start);
  const ref                 = useRef(null);
  const isInView            = useInView(ref, { once: true });

  // Internal refs so we don't create stale closures inside rAF
  const countRef      = useRef(start);
  const frameRef      = useRef();
  const startTimeRef  = useRef();

  useEffect(() => {
    if (!isInView) return;

    // Edge-case: target is 0, nothing to animate
    if (end === 0) {
      setCount(0);
      return;
    }

    const step = (timestamp) => {
      // Record the very first timestamp so we can measure progress
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const progress      = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easeOutQuart  = 1 - Math.pow(1 - progress, 4);   // smooth deceleration
      const currentCount  = start + (end - start) * easeOutQuart;

      if (Math.abs(countRef.current - currentCount) > 0.01) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setCount(end); // snap to exact value at the end
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isInView, end, duration, start]);

  return [ref, count];
}