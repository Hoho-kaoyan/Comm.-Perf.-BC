"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  { href: "#services", label: "服务" },
  { href: "#songs", label: "原创" },
  { href: "#videos", label: "舞台" },
  { href: "#contact", label: "预约" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-white/5 bg-black/70 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-[min(96vw,1180px)] items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 text-zinc-50"
          aria-label="返回首页"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full border border-amber-300/40 text-amber-200 text-xs font-semibold">
            Ho
          </span>
          <span className="text-sm font-medium tracking-wide">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="rounded-full px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-zinc-50"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-300/5 px-4 py-1.5 text-sm font-medium text-amber-200 transition-colors hover:bg-amber-300/15 md:inline-flex"
        >
          预约档期
        </a>
      </div>
    </header>
  );
}