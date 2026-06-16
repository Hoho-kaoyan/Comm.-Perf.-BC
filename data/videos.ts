export type Video = {
  id: string;
  title: string;
  venue: string;
  date: string;
  cover: string;
  duration: string;
};

export const videos: Video[] = [
  {
    id: "gz-live-01",
    title: "《晴天 + 七里香》串烧 Live · 广州 TU 凸空间",
    venue: "广州 TU 凸空间",
    date: "2025.04",
    cover:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&auto=format&fit=crop&q=80",
    duration: "05:21",
  },
  {
    id: "fs-festival",
    title: "草莓音乐节 · 佛山站压轴",
    venue: "佛山岭南天地 · 草莓音乐节",
    date: "2024.10",
    cover:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&auto=format&fit=crop&q=80",
    duration: "12:48",
  },
  {
    id: "bar-sessions",
    title: "JZ Club 七月驻唱",
    venue: "广州 JZ Club",
    date: "2024.07",
    cover:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80",
    duration: "08:12",
  },
  {
    id: "wedding-custom",
    title: "私人订制 · 草坪婚礼",
    venue: "顺德 · 私人草坪婚礼",
    date: "2024.05",
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80",
    duration: "06:34",
  },
];
