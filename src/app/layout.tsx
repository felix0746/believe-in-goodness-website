import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/hooks/useTranslation";
import Script from "next/script";

const notoSerif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const notoSans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "相信善良｜用生命影響生命｜官方網站",
  description: "我們致力於為弱勢群體（包含外籍生、偏鄉孩童、更生人）提供教育與就業機會，培養餐旅菁英，深信善良是改變世界的最大力量。",
  openGraph: {
    title: "相信善良｜用生命影響生命｜官方網站",
    description: "我們致力於為弱勢群體提供教育與就業機會，培養餐旅菁英，深信善良是改變世界的最大力量。",
    url: "https://believe-in-goodness-website.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://believe-in-goodness-website.vercel.app/images/Black-1.png", // 提供一個預設的分享圖片
        width: 500,
        height: 500,
        alt: "孩子們伸出手，眼神充滿希望",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "相信善良｜用生命影響生命｜官方網站",
    description: "我們致力於為弱勢群體提供教育與就業機會，培養餐旅菁英，深信善良是改變世界的最大力量。",
    images: ["https://believe-in-goodness-website.vercel.app/images/Black-1.png"], // 提供一個預設的分享圖片
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="google-site-verification" content="wry9ix6DEHAyH4l-rcrpVhbVGC8mXgO_hFMEOj412BI" />
      </head>
      <body className={`${notoSerif.variable} ${notoSans.variable}`}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <Script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous" />
        </LanguageProvider>
      </body>
    </html>
  );
}
