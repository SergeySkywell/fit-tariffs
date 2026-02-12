// Считаем процент скидки от полной цены до текущей

export function calcDiscountPercent(price: number, full: number): number {
  if (!full || full <= 0) return 0;

  const raw = (1 - price / full) * 100;
  return Math.round(raw);
}

// Форматируем число в рублях, добавляя пробелы и символ ₽

export function formatRubles(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}
    