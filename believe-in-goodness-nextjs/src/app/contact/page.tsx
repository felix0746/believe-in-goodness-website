import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: '聯繫我們｜相信善良｜公益合作與企業社會責任(CSR)諮詢',
  description: '歡迎與相信善良聯繫，我們提供品牌策略、永續營運藍圖與團隊賦能等服務，協助您的企業實踐社會責任(CSR)，共創良善的社會影響力。',
  openGraph: {
    title: '聯繫我們｜相信善良｜公益合作與企業社會責任(CSR)諮詢',
    description: '歡迎與相信善良聯繫，我們提供品牌策略、永續營運藍圖與團隊賦能等服務，協助您的企業實踐社會責任(CSR)，共創良善的社會影響力。',
    url: '/contact',
    // 您需要提供一個絕對路徑的圖片 URL
    // images: ['/images/og-image-contact.jpg'], 
  },
  twitter: {
    card: 'summary_large_image',
    title: '聯繫我們｜相信善良｜公益合作與企業社會責任(CSR)諮詢',
    description: '歡迎與相信善良聯繫，我們提供品牌策略、永續營運藍圖與團隊賦能等服務，協助您的企業實踐社會責任(CSR)，共創良善的社會影響力。',
    // images: ['/images/og-image-contact.jpg'],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
