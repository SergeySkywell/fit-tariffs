"use client";

export default function GuaranteeBlock() {
  return (
    <div className="mt-17 rounded-[30px] border border-[#484D4E] p-5">
      <div className="inline-flex items-center rounded-[30px] border border-[#81FE95] px-6.5 py-3">
        <span className="text-[#81FE95] font-medium text-[28px]">
          гарантия возврата 30 дней
        </span>
      </div>

      <p className="mt-8 text-[#DCDCDC] leading-7.5 text-[24px]">
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые
        результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
        деньги в течение 30 дней с момента покупки, если ты не получишь видимых
        результатов.
      </p>
    </div>
  );
}
