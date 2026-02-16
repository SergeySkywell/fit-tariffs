"use client";

import { Tariff } from "@/lib/types";
import TariffCard from "./TariffCard";

type Props = {
  tariffs: Tariff[];
  selectedId: string;
  onSelect: (id: string) => void;
  isExpired: boolean;
};

export default function TariffGrid({
  tariffs,
  selectedId,
  onSelect,
  isExpired,
}: Props) {
  const sorted = [...tariffs].sort(
    (a, b) => Number(b.is_best) - Number(a.is_best),
  );

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 ">
      {sorted.map((t) => (
        <TariffCard
          key={t.id}
          tariff={t}
          selected={t.id === selectedId}
          onSelect={() => onSelect(t.id)}
          isExpired={isExpired}
        />
      ))}
    </div>
  );
}
