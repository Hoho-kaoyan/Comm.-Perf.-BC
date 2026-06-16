export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Hoho 把我们整个晚宴唱活了。周杰伦串烧一开口直接炸场，氛围一下就起来了，老板当场续了下一场。",
    name: "Wendy Lin",
    role: "蔚来汽车 · 品牌活动负责人",
  },
  {
    id: "t2",
    quote:
      "婚礼上他改编的《晴天 + 七里香》串烧，我老婆哭到妆都花了。能控住整场又懂得分寸的歌手，太难找了。",
    name: "Leon Gao",
    role: "新郎 · 佛山",
  },
  {
    id: "t3",
    quote:
      "Brief 给到三天，原曲交付质量比预期高一档。词里那句『夜火不灭，只等你回头』直接被我们拿去做了 campaign 主视觉。",
    name: "Marco Zhou",
    role: "方太集团 · 市场总监",
  },
  {
    id: "t4",
    quote:
      "驻唱三个月，JZ Club 那段时间的评分没掉下过 4.9。周杰伦歌单点唱率最高，他都能接住，台风稳。",
    name: "Tony Hu",
    role: "JZ Club · 主理人",
  },
];