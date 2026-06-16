"use client";

import { motion } from "framer-motion";
import { Clock, Play } from "lucide-react";
import { songs } from "@/data/songs";

export function Songs() {
  return (
    <section id="songs" className="relative">
      <div className="mx-auto w-[min(96vw,1180px)]">
        <div className="flex flex-col gap-3">
          <span className="w-fit text-xs font-medium tracking-[0.3em] text-amber-200/80 uppercase">
            Originals
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            原创歌曲
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
            原创单曲 6 首 + 翻唱/串烧曲库 300+。周杰伦全专辑 + 2000 年代华语流行均可点歌，网易云、QQ 音乐搜索「Hoho」收听。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {songs.map((song, i) => (
            <motion.a
              key={song.id}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={song.cover}
                  alt={song.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] text-zinc-200 backdrop-blur">
                    <Clock className="h-3 w-3" /> {song.duration}
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-amber-300 text-zinc-950 opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <div className="truncate text-sm font-medium text-zinc-100 group-hover:text-amber-200">
                  {song.title}
                </div>
                <div className="truncate text-xs text-zinc-500">
                  {song.subtitle}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}