"use client";

import { motion } from "framer-motion";
import { Play, MapPin } from "lucide-react";
import { videos } from "@/data/videos";

export function Videos() {
  return (
    <section id="videos" className="relative">
      <div className="mx-auto w-[min(96vw,1180px)]">
        <div className="flex flex-col gap-3">
          <span className="w-fit text-xs font-medium tracking-[0.3em] text-amber-200/80 uppercase">
            Stage Footage
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            舞台视频
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
            商演、驻唱、音乐节、婚礼现场实录。抖音 / B 站搜索「Hoho」看完整版。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {videos.map((v, i) => (
            <motion.a
              key={v.id}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative block overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative aspect-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.cover}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-amber-300/95 text-zinc-950 shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 fill-current" />
                  </span>
                </div>

                <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1">
                  <div className="text-base font-semibold text-zinc-50 md:text-lg">
                    {v.title}
                  </div>
                  <div className="flex items-center justify-between text-xs text-zinc-300">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {v.venue}
                    </span>
                    <span>
                      {v.date} · {v.duration}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}