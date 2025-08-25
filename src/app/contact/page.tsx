import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: '聯繫我們｜相信善良｜公益合作與企業社會責任(CSR)諮詢',
  description: '歡迎與相信善良聯繫，我們提供品牌策略、永續營運藍圖與團隊賦能等服務，協助您的企業實踐社會責任(CSR)，共創良善的社會影響力。',
  openGraph: {
    title: '聯繫我們｜相信善良｜公益合作與企業社會責任(CSR)諮詢',
    description: '歡迎與相信善良聯繫，我們提供品牌策略、永續營運藍圖與團隊賦能等服務，協助您的企業實踐社會責任(CSR)，共創良善的社會影響力。',
    url: 'https://believe-in-goodness-website.vercel.app/contact',
    images: [{
      url: 'https://believe-in-goodness-website.vercel.app/images/footer-bg.jpg', // 使用頁尾背景圖作為預設分享圖
      width: 1200,
      height: 630,
      alt: '聯繫相信善良',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '聯繫我們｜相信善良｜公益合作與企業社會責任(CSR)諮詢',
    description: '歡迎與相信善良聯繫，我們提供品牌策略、永續營運藍圖與團隊賦能等服務，協助您的企業實踐社會責任(CSR)，共創良善的社會影響力。',
    images: ['https://believe-in-goodness-website.vercel.app/images/footer-bg.jpg'],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
