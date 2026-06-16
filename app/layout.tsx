import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-serif-cn",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hoho.example.com";

export const metadata: Metadata = {
  title: {
    default: "Hoho · 珠三角商演驻唱 / 婚礼歌手，擅长周杰伦金曲",
    template: "%s · Hoho",
  },
  description:
    "Hoho — 广州/佛山驻唱歌手，承接商演、婚礼、周年庆典、品牌发布会。歌单 300+ 首，主打周杰伦及华语流行金曲，珠三角 24h 可达。",
  keywords: [
    "Hoho",
    "广州驻唱",
    "佛山驻唱",
    "珠三角商演",
    "婚礼歌手",
    "周杰伦翻唱",
    "商演乐队",
    "广州婚庆歌手",
  ],
  authors: [{ name: "Hoho" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    title: "Hoho · 珠三角商演驻唱 / 婚礼歌手",
    description:
      "广州/佛山驻唱，擅长周杰伦及华语流行金曲。商演、婚礼、周年庆典档期预约。",
    siteName: "Hoho Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoho · 珠三角商演驻唱 / 婚礼歌手",
    description: "广州/佛山驻唱，擅长周杰伦及华语流行金曲。",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSerifSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08080a] text-zinc-100">
        {children}
      </body>
    </html>
  );
}