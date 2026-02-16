"use client";

import clsx from "clsx";
import { Tariff } from "@/lib/types";

function calcDiscountPercent(price: number, full: number) {
  if (!full || full <= 0) return 0;
  const raw = (1 - price / full) * 100;
  return Math.max(0, Math.round(raw));
}

type Props = {
  tariff: Tariff;
  selected: boolean;
  onSelect: () => void;
  isExpired: boolean;
};

export default function TariffCard({
  tariff,
  selected,
  onSelect,
  isExpired,
}: Props) {
  const discount = calcDiscountPercent(tariff.price, tariff.full_price);

  return (
    <button
      type="button"
      onClick={onSelect}
      className={clsx(
        "relative rounded-[34px] border-2 h-84 pt-17.5 px-4.5 pb-5.75 flex flex-col items-center transition gap-10",
        "bg-[#313637] border-[#484D4E]",
        selected && "border-[#FDB056]",
        tariff.is_best &&
          "sm:col-span-3 sm:h-48 sm:flex-row sm:pt-8.5 sm:px-20 sm:pb-7.5",
      )}
    >
      {!isExpired && discount > 0 && (
        <span className="absolute -top-0.5 left-12 rounded-md bg-[#FD5656] px-2 py-1 text-[22px] font-extralight">
          -{discount}%
        </span>
      )}

      {tariff.is_best && (
        <span className="absolute right-3 top-1 rounded-md px-2 py-1 text-[22px] font-medium text-[#FDB056]">
          хит!
        </span>
      )}

      <div className={clsx("flex flex-col align-center ", tariff.is_best && "flex-8/12 ")}>
        <div className="text-[26px] font-medium">{tariff.period}</div>
        <div>
          {!isExpired ? (
              <div className="flex flex-col text-[50px] font-semibold align-center">
                {tariff.price} ₽
                <div className="text-[#919191] line-through font-medium text-[24px] text-right">
                  {tariff.full_price} ₽
                </div>
              </div>
          ) : (
            <div className="text-[50px] font-semibold text-center">
              {tariff.full_price} ₽
            </div>
          )}
        </div>
      </div>

      <div className="text-white text-[16px] text-left">{tariff.text}</div>

    </button>
  );
}
