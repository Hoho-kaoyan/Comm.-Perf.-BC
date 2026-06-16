"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_20%,rgba(212,175,55,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_15%_80%,rgba(255,255,255,0.04),transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
      </div>

      <Card className="relative mx-auto mt-24 w-[min(96vw,1180px)] overflow-hidden border-white/10 bg-black/60">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          color="rgba(212,175,55,0.22)"
        />

        <div className="grid h-full min-h-[560px] grid-cols-1 md:grid-cols-2">
          {/* Left content */}
          <div className="relative z-10 flex flex-col justify-center gap-7 p-8 md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/5 px-3 py-1 text-xs font-medium tracking-widest text-amber-200"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>珠三角驻唱 · 擅长周杰伦 · 商演/婚礼/庆典</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-500/80 bg-clip-text text-transparent">
                {profile.name}
              </span>
              <span className="ml-3 text-zinc-400 text-2xl font-light align-middle">
                {profile.stageName}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="max-w-md text-base leading-relaxed text-zinc-300 md:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
              className="max-w-md text-sm leading-relaxed text-zinc-400"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
              className="mt-2 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" href="#contact">
                预约档期 <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" href="#songs">
                <Play className="h-4 w-4" /> 听一首
              </Button>
            </motion.div>
          </div>

          {/* Right 3D */}
          <div className="relative min-h-[420px] md:min-h-[560px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </Card>
    </section>
  );
}