# Hoho · 名片网站 (Hoho Studio)

一个**单页名片网站**，用于展示歌手「Hoho」的原创作品、舞台现场、承接的商演与婚礼驻唱业务（**擅长周杰伦与华语流行金曲**，广州 / 佛山就近档期）。

> 纯静态站点，可免费部署到 **Vercel / Netlify / Cloudflare Pages / GitHub Pages**，无需服务器。

## 技术栈

- **Next.js 16** (App Router, 静态导出)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** 风格的 Card / Button
- **Framer Motion** 滚动与微交互
- **@splinetool/react-spline** 3D 场景
- **Lucide React** 图标

## 目录结构

```
.
├── app/
│   ├── layout.tsx          # 根布局 + 字体 + SEO
│   ├── page.tsx            # 单页组合所有 section
│   └── globals.css         # Tailwind v4 主题（黑金）
├── components/
│   ├── ui/                 # 基础组件：Card / Button / Spline / Spotlight
│   ├── sections/           # 业务 section：Hero / Stats / Services / ...
│   ├── site-header.tsx
│   └── site-footer.tsx
├── data/                   # 静态数据：songs / videos / services / testimonials / profile
├── lib/utils.ts            # cn() 工具
├── public/                 # favicon / 静态资源
├── DEPLOY.md               # Vercel / GitHub Pages 部署指南
└── next.config.ts          # output: 'export'
```

## 本地开发

```bash
npm install
npm run dev          # http://localhost:3000
```

## 静态构建

```bash
npm run build
# 产物输出到 ./out/ ，纯 HTML/CSS/JS
```

本地预览构建产物：

```bash
npx serve out
```

## 部署

详见 [DEPLOY.md](./DEPLOY.md) — 推荐 Vercel（push 即部署，免费，CDN 加速）。

## 数据修改

所有内容（歌曲、视频、服务、客户评价、联系方式）都集中在 `data/` 目录下，直接修改对应 `.ts` 文件即可，刷新页面生效。

## License

MIT — 拿去做你自己的名片网站吧。
