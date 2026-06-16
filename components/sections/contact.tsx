"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto w-[min(96vw,1180px)]">
        <div className="flex flex-col gap-3">
          <span className="w-fit text-xs font-medium tracking-[0.3em] text-amber-200/80 uppercase">
            Book Me
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            预约档期
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
            商演、婚礼、周年庆典、品牌发布会均可。附上日期 / 地点 / 人数 / 歌单偏好，24 小时内回复报价。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-5">
          {/* Booking card */}
          <Card className="relative overflow-hidden lg:col-span-3">
            <Spotlight
              className="-top-32 left-1/2"
              color="rgba(212,175,55,0.18)"
            />
            <CardContent className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 md:p-8">
              <ContactItem
                icon={MessageCircle}
                label="微信"
                value={profile.contacts.wechat}
                hint="加好友请注明来意"
              />
              <ContactItem
                icon={Mail}
                label="邮箱"
                value={profile.contacts.email}
                href={`mailto:${profile.contacts.email}`}
                hint="合同 / 报价单首选"
              />
              <ContactItem
                icon={Calendar}
                label="下一档可约"
                value="2026 / 07"
                hint="广州/佛山 24h 可达，全国差旅另议"
              />
              <ContactItem
                icon={MessageCircle}
                label="所在地"
                value={profile.city.join(" · ")}
                hint="珠三角就近，全国可外差"
              />
            </CardContent>
          </Card>

          {/* Quick CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="relative h-full overflow-hidden bg-gradient-to-br from-amber-300/15 via-amber-300/5 to-transparent">
              <CardContent className="flex h-full flex-col justify-between gap-6 p-6 md:p-8">
                <div>
                  <div className="text-xs font-medium tracking-[0.3em] text-amber-200/80 uppercase">
                    Ready when you are
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-zinc-50 md:text-3xl">
                    一封邮件，
                    <br />
                    启动一段合作。
                  </div>
                  <p className="mt-3 text-sm text-zinc-400">
                    附上日期、地点、人数、风格偏好即可。预算不必精确，先聊方向。
                  </p>
                </div>
                <Button
                  size="lg"
                  className="self-start"
                  href={`mailto:${profile.contacts.email}`}
                >
                  立即发邮件 <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  hint,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  hint?: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-amber-200">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs tracking-widest text-zinc-500 uppercase">
          {label}
        </div>
        <div className="mt-1 truncate text-base font-medium text-zinc-100">
          {value}
        </div>
        {hint && <div className="mt-0.5 text-xs text-zinc-500">{hint}</div>}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="group block">
      {inner}
    </a>
  ) : (
    inner
  );
}