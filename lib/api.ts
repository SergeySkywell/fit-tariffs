import { Tariff } from "./types";

export const getTariffs = async (): Promise<Tariff[]> => {
  const res = await fetch("https://t-core.fit-hub.pro/Test/GetTariffs", {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Не удалось загрузить тарифы");
  }
  return res.json();
};
