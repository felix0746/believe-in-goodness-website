import type { Metadata } from 'next';
import ImpactPageClient from './ImpactPageClient';

export const metadata: Metadata = {
  title: '我們的影響力｜相信善良｜共創社會價值',
  description: '了解相信善良如何透過解決偏鄉教育資源落差、協助弱勢青年升學與就業、以及幫助更生人重返社會等方式，創造正面的社會影響力。',
  openGraph: {
    title: '我們的影響力｜相信善良｜共創社會價值',
    description: '了解相信善良如何透過解決偏鄉教育資源落差、協助弱勢青年升學與就業、以及幫助更生人重返社會等方式，創造正面的社會影響力。',
    url: 'https://believe-in-goodness-website.vercel.app/impact',
    images: [
      {
        url: 'https://believe-in-goodness-website.vercel.app/images/child-looking-out.png',
        width: 500,
        height: 300,
        alt: '一個望向窗外的小男孩的背影',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '我們的影響力｜相信善良｜共創社會價值',
    description: '了解相信善良如何透過解決偏鄉教育資源落差、協助弱勢青年升學與就業、以及幫助更生人重返社會等方式，創造正面的社會影響力。',
    images: ['https://believe-in-goodness-website.vercel.app/images/child-looking-out.png'],
  },
};

export default function ImpactPage() {
  return <ImpactPageClient />;
}
