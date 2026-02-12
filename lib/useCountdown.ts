"use client";

import { useEffect, useMemo, useState } from "react";

// Хук для отсчёта времени в секундах. Принимает общее количество секунд и возвращает оставшиеся секунды, а также флаги истечения и последних 30 секунд.

export const useCountdown = (totalSeconds: number) => {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  // Запускаем интервал, который каждую секунду уменьшает secondsLeft на 1

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const isExpired = secondsLeft === 0;
  const isLast30 = secondsLeft > 0 && secondsLeft <= 30;

  // Форматируем в mm:ss

  const mmss = useMemo(() => {
    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }, [secondsLeft]);

  return { secondsLeft, isExpired, isLast30, mmss };
};
