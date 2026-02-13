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
        "relative rounded-2xl border p-4 text-left transition",
        "bg-white/5 border-white/10 hover:border-white/20",
        selected && "border-[#FDB056]",
        tariff.is_best && "md:col-span-3",
      )}
    >
      {/* Плашка скидки */}
      {!isExpired && discount > 0 && (
        <span className="absolute left-4 top-3 rounded-md bg-[#ff5a5f] px-2 py-1 text-xs font-semibold">
          -{discount}%
        </span>
      )}

      {/* Хит */}
      {tariff.is_best && (
        <span className="absolute right-4 top-3 rounded-md bg-[#FDB056] px-2 py-1 text-xs font-semibold text-black">
          хит!
        </span>
      )}

      <div className="mt-6 md:mt-2">
        <div className="text-lg font-semibold">{tariff.period}</div>
        <div className="mt-1 text-white/70 text-sm">{tariff.text}</div>
      </div>

      {/* Цены */}
      <div className="mt-4">
        {!isExpired ? (
          <>
            <div className="text-3xl font-extrabold">{tariff.price} ₽</div>
            <div className="text-white/50 line-through">
              {tariff.full_price} ₽
            </div>
          </>
        ) : (
          <div className="text-3xl font-extrabold">{tariff.full_price} ₽</div>
        )}
      </div>
    </button>
  );
}
