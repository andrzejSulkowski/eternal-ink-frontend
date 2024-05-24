import { useEffect, useRef, useState } from "react";

/// Deprecated - This code is not working as expected


function easeInOutQuad(x: number, t: number, b: number, c: number, d: number) {
  if ((t /= d / 2) < 1) {
    return (c / 2) * t * t + b;
  } else {
    return (-c / 2) * ((--t) * (t - 2) - 1) + b;
  }
}

export const useDecelerator = (from: number = 1, till: number = 2, duration: number = 1000) => {
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const [phase, setPhase] = useState<"idle" | "decelerating" | "accelerating">("idle");
  const [value, setValue] = useState(from);

  useEffect(() => {
    const decelerate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      const newValue = easeInOutQuad(elapsed, elapsed, from, till - from, duration);
      setValue(newValue);

      if (elapsed < duration) {
        requestRef.current = requestAnimationFrame(decelerate);
      } else {
        cancelAnimationFrame(requestRef.current!);
        setValue(till);
        setPhase("idle");
      }
    };

    const accelerate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      const newValue = easeInOutQuad(elapsed, elapsed, till, from - till, duration);
      setValue(newValue);

      if (elapsed < duration) {
        requestRef.current = requestAnimationFrame(accelerate);
      } else {
        cancelAnimationFrame(requestRef.current!);
        setValue(from);
        setPhase("idle");
      }
    };

    if (phase === "decelerating") {
      requestRef.current = requestAnimationFrame(decelerate);
    } else if (phase === "accelerating") {
      requestRef.current = requestAnimationFrame(accelerate);
    }

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [phase, from, till, duration]);

  const decelerate = () => {
    // setPhase("decelerating");
    setValue(till)
    startTimeRef.current = null; // Reset start time for deceleration
  };

  const reset = () => {
    // setPhase("accelerating");
    setValue(from)
    startTimeRef.current = null; // Reset start time for acceleration
  };

  return {
    decelerate,
    reset,
    value,
  };
};