import type { Metadata } from 'next';
import StoryTabs from './StoryTabs';

export const metadata: Metadata = {
  title: '善良故事｜相信善良｜媒體報導與里程碑',
  description: '集結來自社會各界對「相信善良」的支持與鼓勵、最新動態與活動報導，並一同回顧我們自成立以來的重要里程碑與動人時刻。',
  openGraph: {
    title: '善良故事｜相信善良｜媒體報導與里程碑',
    description: '集結來自社會各界對「相信善良」的支持與鼓勵、最新動態與活動報導，並一同回顧我們自成立以來的重要里程碑與動人時刻。',
    url: 'https://believe-in-goodness-website.vercel.app/story',
    images: [
      {
        url: 'https://believe-in-goodness-website.vercel.app/images/image_58d59d.jpg', // 假設一張相關圖片
        width: 1200,
        height: 630,
        alt: '相信善良活動現場照片',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '善良故事｜相信善良｜媒體報導與里程碑',
    description: '集結來自社會各界對「相信善良」的支持與鼓勵、最新動態與活動報導，並一同回顧我們自成立以來的重要里程碑與動人時刻。',
    images: ['https://believe-in-goodness-website.vercel.app/images/image_58d59d.jpg'],
  },
};

export default function StoryPage() {
  return <StoryTabs />;
}
