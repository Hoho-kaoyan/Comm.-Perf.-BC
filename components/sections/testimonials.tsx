"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative">
      <div className="mx-auto w-[min(96vw,1180px)]">
        <div className="flex flex-col gap-3">
          <span className="w-fit text-xs font-medium tracking-[0.3em] text-amber-200/80 uppercase">
            Words From Clients
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            客户怎么说
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
            >
              <Quote className="h-5 w-5 text-amber-300/70" />
              <blockquote className="mt-4 text-base leading-relaxed text-zinc-200 md:text-lg">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4 text-sm">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-amber-300/80 to-amber-500/60 text-sm font-semibold text-zinc-950">
                  {t.name.slice(0, 1)}
                </div>
                <div>
                  <div className="font-medium text-zinc-100">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}