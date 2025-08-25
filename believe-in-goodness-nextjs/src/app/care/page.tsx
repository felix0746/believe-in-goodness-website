import type { Metadata } from 'next';
import CareTabs from './CareTabs';

export const metadata: Metadata = {
  title: '關懷與溫暖｜相信善良｜弱勢群體扶助計畫',
  description: '相信善良在國內致力於關懷育幼院、身心障礙人士、更生人、偏鄉原住民及銀髮族。同時我們也關注來台求學的僑生與外籍生，提供工作機會與產學合作，幫助他們解決經濟壓力，並快速融入台灣的文化與生活。',
  openGraph: {
    title: '關懷與溫暖｜相信善良｜弱勢群體扶助計畫',
    description: '了解我們如何為國內各個弱勢群體，以及來台求學的外籍生，提供實際的支援與機會。',
    url: 'https://believe-in-goodness-website.vercel.app/care',
    images: [
      {
        url: 'https://believe-in-goodness-website.vercel.app/images/Black.png', // 假設一張相關圖片
        width: 1200,
        height: 630,
        alt: '相信善良團隊與受助者合照',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '關懷與溫暖｜相信善良｜弱勢群體扶助計畫',
    description: '了解我們如何為國內各個弱勢群體，以及來台求學的外籍生，提供實際的支援與機會。',
    images: ['https://believe-in-goodness-website.vercel.app/images/Black.png'],
  },
};

export default function CarePage() {
  return <CareTabs />;
}
