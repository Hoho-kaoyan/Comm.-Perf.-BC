import {
  Mic2,
  HeartHandshake,
  Music4,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  unit: string;
  icon: LucideIcon;
  highlights: string[];
};

export const services: Service[] = [
  {
    id: "commercial",
    title: "商演驻唱",
    description: "酒吧 / Livehouse / 品牌活动 / 发布会现场驻唱",
    price: "¥3,000",
    unit: "起 / 场",
    icon: Mic2,
    highlights: ["专业返听设备", "歌单定制", "可配乐队"],
  },
  {
    id: "wedding",
    title: "婚礼定制",
    description: "草坪婚礼 / 酒店宴会 / 教堂仪式，可中英双语",
    price: "¥6,800",
    unit: "起 / 套",
    icon: HeartHandshake,
    highlights: ["流程策划", "原创改编", "全天跟拍"],
  },
  {
    id: "original",
    title: "原创委托",
    description: "为品牌 / 个人 / 影视剧量身创作词曲并演唱",
    price: "¥18,000",
    unit: "起 / 首",
    icon: Music4,
    highlights: ["词曲创作", "录音棚制作", "版权清晰"],
  },
  {
    id: "arrange",
    title: "编曲翻唱",
    description: "高质感编曲翻唱、视频发布、社交平台传播",
    price: "¥1,500",
    unit: "起 / 首",
    icon: Headphones,
    highlights: ["48h 出片", "字幕封面", "商用授权"],
  },
];