"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto w-[min(96vw,1180px)]">
        <SectionHeader
          eyebrow="业务范围"
          title="可承接的演出 / 创作"
          description="广州、佛山、深圳 24h 内可达。全国差旅另议。商演、婚礼、周年庆典、品牌发布会、原创词曲委托均可按需打包。"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="group h-full transition-colors hover:border-amber-300/30 hover:bg-white/[0.04]">
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-300/30 bg-amber-300/5 text-amber-200 transition-transform group-hover:-translate-y-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="mt-4">{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-semibold text-amber-200">
                        {s.price}
                      </span>
                      <span className="text-xs text-zinc-500">{s.unit}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {s.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-sm text-zinc-300"
                        >
                          <Check className="h-3.5 w-3.5 text-amber-300" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="w-fit text-xs font-medium tracking-[0.3em] text-amber-200/80 uppercase">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
        {description}
      </p>
    </div>
  );
}
