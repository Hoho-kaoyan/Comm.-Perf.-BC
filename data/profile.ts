export type SiteProfile = {
  name: string;
  stageName: string;
  tagline: string;
  bio: string;
  city: string[];
  contacts: {
    wechat: string;
    email: string;
    phone: string;
  };
  social: { label: string; href: string }[];
};

export const profile: SiteProfile = {
  name: "Hoho",
  stageName: "Hoho",
  tagline: "珠三角驻唱 · 商演 / 婚礼 / 周年庆典，擅长周杰伦与华语流行金曲",
  bio: "坐标广州 / 佛山，珠三角驻唱经验。歌单 300+ 首，涵盖周杰伦全专辑及 2000 年代华语流行，应酬、晚宴、品牌发布会全程控场。",
  city: ["广州", "佛山"],
  contacts: {
    wechat: "hoho_booking",
    email: "book@hoho.studio",
    phone: "微信预约 · 24h 回复",
  },
  social: [
    { label: "网易云音乐", href: "https://music.163.com/" },
    { label: "QQ 音乐", href: "https://y.qq.com/" },
    { label: "抖音", href: "https://www.douyin.com/" },
    { label: "小红书", href: "https://www.xiaohongshu.com/" },
  ],
};
