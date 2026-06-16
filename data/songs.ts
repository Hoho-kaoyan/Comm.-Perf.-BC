export type Song = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  released: string;
  cover: string;
  url?: string;
};

export const songs: Song[] = [
  {
    id: "ye-huo",
    title: "夜火",
    subtitle: "单曲 · 2025",
    duration: "04:12",
    released: "2025.03",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: "bei-chuang",
    title: "北窗",
    subtitle: "单曲 · 2024",
    duration: "03:48",
    released: "2024.11",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: "hong-yan",
    title: "红颜",
    subtitle: "EP · 2024",
    duration: "05:21",
    released: "2024.07",
    cover:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: "yu-yan",
    title: "余焰",
    subtitle: "单曲 · 2024",
    duration: "03:33",
    released: "2024.04",
    cover:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: "wang-luo",
    title: "望鹿",
    subtitle: "单曲 · 2023",
    duration: "04:05",
    released: "2023.09",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: "shu-guang",
    title: "曙光里的人",
    subtitle: "EP · 2023",
    duration: "04:48",
    released: "2023.02",
    cover:
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=900&auto=format&fit=crop&q=80",
  },
];