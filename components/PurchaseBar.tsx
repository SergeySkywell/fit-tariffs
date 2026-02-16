"use client";

import clsx from "clsx";

type Props = {
  agree: boolean;
  setAgree: (v: boolean) => void;
  agreeError: boolean;
  onBuy: () => void;
};

export default function PurchaseBar({
  agree,
  setAgree,
  agreeError,
  onBuy,
}: Props) {
  return (
    <div className="mt-6 rounded-2xl">
      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="sr-only"
        />

        <span
          className={clsx(
            "mt-1 inline-flex h-8 w-8 items-center justify-center rounded-sm border transition-colors border-white/30 bg-transparent",
            agreeError && !agree && "border-[#FF4E4E]",
          )}
        >
          {agree && (
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              className="text-[#FDB056]"
            >
              <path
                d="M1 5L5 9L13 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>

        <span
          className={clsx(
            "text-[16px] leading-5 text-[#CDCDCD]",
            agreeError && !agree && "text-[#FF4E4E]",
          )}
        >
          Я согласен с{" "}
          <a
            href="#"
            className="underline underline-offset-2 text-white/90 hover:text-white"
          >
            офертой рекуррентных платежей
          </a>{" "}
          и{" "}
          <a
            href="#"
            className="underline underline-offset-2 text-white/90 hover:text-white"
          >
            Политикой конфиденциальности
          </a>
        </span>
      </label>

      <button
        type="button"
        onClick={onBuy}
        className="mt-4 w-full max-w-88 min-h-[62px] rounded-[20px] py-3 font-bold text-black text-[20px] bg-[#FDB056] hover:brightness-110 transition animate-pulse"
      >
        Купить
      </button>

      <div className="mt-4 text-sm text-[#9B9B9B] leading-4">
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
        денежных средств для получения пожизненного доступа к приложению.
        Пользователь соглашается, что данные кредитной/дебетовой карты будут
        сохранены для осуществления покупок дополнительных услуг сервиса в
        случае желания пользователя.
      </div>
    </div>
  );
}
