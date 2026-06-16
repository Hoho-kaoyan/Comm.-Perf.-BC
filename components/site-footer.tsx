import { profile } from "@/data/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-white/5">
      <div className="mx-auto flex w-[min(96vw,1180px)] flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-sm text-zinc-300">
            <span className="text-amber-200">{profile.name}</span>
            <span className="ml-1 text-zinc-500">· {profile.stageName}</span>
          </div>
          <div className="text-xs text-zinc-500">
            © {year} Hoho Studio. All rights reserved.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400">
          {profile.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-amber-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}