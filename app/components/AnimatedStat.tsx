"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AnimatedStat({
  value,
  fallback = "—",
  duration = 900,
  format = (n: number) => n.toLocaleString(),
  className,
}: {
  value: number | undefined | null;
  fallback?: string;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}) {
  const target = typeof value === "number" && Number.isFinite(value) ? value : null;
  const [display, setDisplay] = useState<number | null>(target);
  const fromRef = useRef<number>(target ?? 0);
  const frameRef = useRef<number | null>(null);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    if (target === null) {
      setDisplay(null);
      return;
    }

    const from = hasMountedRef.current ? fromRef.current : 0;
    hasMountedRef.current = true;

    if (prefersReducedMotion() || duration <= 0 || from === target) {
      fromRef.current = target;
      setDisplay(target);
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(from + (target - from) * eased);
      fromRef.current = next;
      setDisplay(next);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = target;
        setDisplay(target);
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [target, duration]);

  if (display === null) {
    return <span className={className}>{fallback}</span>;
  }

  return <span className={className}>{format(display)}</span>;
}
