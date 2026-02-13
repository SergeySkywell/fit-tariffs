"use client";

import clsx from "clsx";

type Props = {
  agree: boolean;
  setAgree: (v: boolean) => void;
  agreeError: boolean;
  onBuy: () => void;
  disabled?: boolean;
};

export default function PurchaseBar({
  agree,
  setAgree,
  agreeError,
  onBuy,
  disabled = false,
}: Props) {
  return (
    <div className="mt-6 rounded-2xl bg-white/5 p-4 border border-white/10">
      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className={clsx(
            "mt-1 h-5 w-5 rounded border",
            agreeError ? "accent-red-500" : "accent-[#FDB056]",
          )}
        />

        <span
          className={clsx("text-sm leading-5", agreeError && "text-red-400")}
        >
          Я согласен(на) с условиями оферты и обработкой персональных данных
          {agreeError && (
            <span className="block mt-1 text-xs">Нужно поставить галочку</span>
          )}
        </span>
      </label>

      <button
        type="button"
        onClick={onBuy}
        disabled={disabled}
        className={clsx(
          "mt-4 w-full rounded-xl py-3 font-semibold text-black transition",
          "bg-[#FDB056] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed",
          "animate-pulse",
        )}
      >
        Купить
      </button>
    </div>
  );
}
