"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function useCountdown(totalSeconds: number) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const timerId = useRef<number | null>(null);

  useEffect(() => {
    timerId.current = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerId.current) window.clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => {
    if (secondsLeft === 0 && timerId.current) {
      window.clearInterval(timerId.current);
      timerId.current = null;
    }
  }, [secondsLeft]);

  const isExpired = secondsLeft === 0;
  const isLast30 = secondsLeft > 0 && secondsLeft <= 30;

  const mmss = useMemo(() => {
    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }, [secondsLeft]);

  return { secondsLeft, mmss, isExpired, isLast30 };
}
