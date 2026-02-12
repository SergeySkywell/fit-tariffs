"use client";

import { useMemo, useState } from "react";
import { Tariff } from "@/lib/types";
import { useCountdown } from "@/lib/useCountdown";
import StickyHeader from "./StickyHeader";
import TariffGrid from "./TariffGrid";
import PurchaseBar from "./PurchaseBar";

export default function OfferPage({ tariffs }: { tariffs: Tariff[] }) {
  const { mmss, isExpired, isLast30 } = useCountdown(120); // 2 минуты

  // Выбираем лучший или первый тариф

  const defaultId = useMemo(() => {
    const best = tariffs.find((t) => t.is_best);
    return (best ?? tariffs[0])?.id;
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

      <section className="mx-auto max-w-304 px-4 pt-8 pb-12">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Выбери подходящий для себя{" "}
          <span className="text-[#FDB056]">тариф</span>
        </h1>

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

        {/* блок гарантии доделаю */}
      </section>
    </main>
  );
}
