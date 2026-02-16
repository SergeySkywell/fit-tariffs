"use client";

import { useMemo, useState } from "react";
import { Tariff } from "@/lib/types";
import { useCountdown } from "@/lib/useCountdown";
import StickyHeader from "./StickyHeader";
import TariffGrid from "./TariffGrid";
import PurchaseBar from "./PurchaseBar";
import GuaranteeBlock from "./GuaranteeBlock";
import Image from "next/image";

export default function OfferPage({ tariffs }: { tariffs: Tariff[] }) {
  const { mmss, isExpired, isLast30 } = useCountdown(120); // 2 минуты

  // Выбираем лучший или первый тариф

  const defaultId = useMemo(() => {
    const best = tariffs.find((t) => t.is_best);
    return (best ?? tariffs[0])?.id ?? "";
  }, [tariffs]);

  // Состояния

  const [selectedId, setSelectedId] = useState<string>(defaultId);
  const [agree, setAgree] = useState(false);
  const [agreeError, setAgreeError] = useState(false);

  // Выбранный тариф

  const selected = tariffs.find((t) => t.id === selectedId) ?? tariffs[0];

  // Обработчик покупки

  function onBuy() {
    if (!agree) {
      setAgreeError(true);
      return;
    }
    setAgreeError(false);
    alert(`Вы выбрали тариф за ${selected.price}`);
  }

  return (
    <main className="min-h-screen bg-[#232829] text-white">
      <StickyHeader time={mmss} isLast30={isLast30} />

      <section className="mx-auto max-w-312 px-4 pt-11 pb-12 tracking-wide">
        <h1 className="text-2xl sm:text-[40px] font-bold">
          Выбери подходящий для себя{" "}
          <span className="text-[#FDB056]">тариф</span>
        </h1>

        <div className="mt-26 flex flex-col sm:flex-row sm:items-start sm:gap-10 justify-between">
          {/* Фотография */}
          <div className="sm:w-95 pt-14.5">
            <Image
              src="/man.png"
              alt="Fitness coach"
              className="sm:max-w-full"
              width={380}
              height={767}
            />
          </div>

          {/* Правая часть */}
          <div className="max-w-187">
            <TariffGrid
              tariffs={tariffs}
              selectedId={selectedId}
              onSelect={setSelectedId}
              isExpired={isExpired}
            />

            <PurchaseBar
              agree={agree}
              setAgree={(v) => {
                setAgree(v);
                if (v) setAgreeError(false);
              }}
              agreeError={agreeError}
              onBuy={onBuy}
            />

            <GuaranteeBlock />
          </div>
        </div>
      </section>
    </main>
  );
}
