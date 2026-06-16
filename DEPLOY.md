# 部署指南

本项目为纯静态站点（`output: 'export'`），可部署到任意静态托管平台。以下为最推荐的两种方案。

---

## 方案 A：Vercel（推荐 ✅）

**优点**：push 即部署、自动 HTTPS、全球 CDN、免费、配置零成本。

### 步骤

**第一步：把代码推到 GitHub**

```bash
# 如果还没有 GitHub 仓库，先在 GitHub 上创建一个空仓库（比如叫 hoho-site），
# 然后把本地仓库关联上去：

git remote add origin https://github.com/<你的用户名>/hoho-site.git
git branch -M main
git push -u origin main
```

**第二步：Vercel 导入**

1. 打开 [vercel.com/new](https://vercel.com/new)
2. 点击 **Import Git Repository**
3. 选择刚推上去的仓库 `hoho-site`
4. **Framework Preset** 会自动识别为 `Next.js`，无需改动
5. **Build Command** 保持默认 `npm run build`
6. **Output Directory** 保持默认 `out`（Vercel 会自动识别 `output: 'export'`）
7. 点击 **Deploy**

**第三步：等待构建完成**

约 30–60 秒后，你会拿到一个 `xxx.vercel.app` 链接，比如：

```
https://hoho-site.vercel.app
```

直接把这个链接发微信朋友圈，别人就能打开。

---

### 自动更新（每次 push 代码）

**是的，会自动重新部署**，全程零手动操作：

```
你 git push
    ↓
Vercel 检测到新 commit
    ↓
自动运行 npm run build
    ↓
静态文件部署到全球 CDN
```

你只需要往 GitHub 推代码，Vercel 会自动处理剩下的事。**不需要进 Vercel 后台点任何按钮**。

### 自定义域名（可选）

1. 在 Vercel Project → **Settings** → **Domains 添加你的域名（如 `hoho.studio`）
2. 按提示在域名注册商（阿里云 / 腾讯云 / GoDaddy 等）配置 DNS
   - 添加一条 **CNAME 记录**，指向 `cname.vercel-dns.com`
3. 等待几分钟生效，**完全免费**

---

## 方案 B：GitHub Pages（纯免费，需多一步配置）

> 适合已有域名、想完全用 GitHub 生态的情况。

### 步骤

**1. 修改 `next.config.ts`**（仓库名改成你的实际名字）：

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hoho-site",   // ← 改成你的 GitHub 仓库名
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
```

**2. 推送代码到 GitHub（同上第一步）**

**3. 配置 GitHub Actions 自动构建**

在仓库根目录创建 `.github/workflows/deploy.yml`（项目里还没有这个文件，需要新建）：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          publish_branch: gh-pages
```

**4. 开启 GitHub Pages**

仓库 → **Settings** → **Pages** → **Source** 选 `gh-pages` 分支，`/(root)`。

约 1 分钟后网站会在 `https://<你的用户名>.github.io/hoho-site/` 上线。

---

## 两种方案对比

| | Vercel | GitHub Pages |
|---|---|---|
| 部署速度 | 30–60s | ~2 min（含 Action） |
| CDN | 全球 CDN | GitHub CDN（国内较慢） |
| 自定义域名 | 免费 | 免费 |
| 自动更新 | ✅ 自动 | ✅ 自动（Action） |
| 国内访问 | 较好 | 一般 |
| 配置难度 | **零配置** | 需配 Action |

**推荐用 Vercel**，国内访问快，配置最简单。
