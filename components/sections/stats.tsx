"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  hint: string;
};

const stats: Stat[] = [
  { value: 300, suffix: "+", label: "累计演出", hint: "横跨 4 年，珠三角为主" },
  { value: 6, suffix: "", label: "原创单曲", hint: "网易云、QQ 音乐可听" },
  { value: 30, suffix: "+", label: "合作品牌", hint: "含 4A 公司直签" },
  { value: 4.9, suffix: "★", label: "客户评分", hint: "驻唱期间稳定不掉" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const isFloat = !Number.isInteger(value);
    const duration = 1200;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = value * eased;
      setDisplay(isFloat ? Math.round(current * 10) / 10 : Math.floor(current));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative">
      <div className="mx-auto grid w-[min(96vw,1180px)] grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-start gap-1 bg-black/40 p-6 md:p-8"
          >
            <div className="text-4xl font-semibold leading-none tracking-tight text-amber-200 md:text-5xl">
              <AnimatedNumber value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium text-zinc-200">
              {s.label}
            </div>
            <div className="text-xs text-zinc-500">{s.hint}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}