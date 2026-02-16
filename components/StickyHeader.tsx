"use client";

import clsx from "clsx";
import StarIcon from "./StarIcon";

type Props = {
  time: string;
  isLast30: boolean;
};

export default function StickyHeader({ time, isLast30 }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-[#1D5B43]">
      <div className="mx-auto max-w-312 px-4 py-2 flex flex-col items-center justify-center">
        <span
          className={clsx(
            "text-white font-semibold text-center",
            "text-[14px] leading-tight",
            "min-[375px]:text-[18px]",
            "sm:text-[24px]",
          )}
        >
          Успейте открыть пробную неделю
        </span>

        <div
          className={clsx(
            "flex mt-1 items-center gap-2 transition-colors",
            "font-heading",
            "text-[28px] min-[375px]:text-[32px] sm:text-[40px]",
            "font-bold",
            "leading-tight tracking-widest",
            isLast30 ? "text-[#FF4E4E] animate-pulse" : "text-[#FFBB00]",
          )}
        >
          <StarIcon />
          <span>{time}</span>
          <StarIcon />
        </div>
      </div>
    </header>
  );
}
