"use client";

export default function GuaranteeBlock() {
  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="inline-flex items-center rounded-full border border-[#2fe37b]/60 bg-[#0b2a1a] px-4 py-2">
        <span className="text-[#2fe37b] font-semibold">
          гарантия возврата 30 дней
        </span>
      </div>

      <p className="mt-4 text-white/70 leading-6">
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые
        результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
        деньги в течение 30 дней с момента покупки, если ты не получишь видимых
        результатов.
      </p>
    </div>
  );
}
