import type { Metadata } from 'next';
import StoryTabs from './StoryTabs';

export const metadata: Metadata = {
  title: '善良故事｜相信善良',
  description: '集結來自社會各界對「相信善良」的支持與鼓勵、最新動態與活動報導，並一同回顧我們自成立以來的重要里程碑。',
};

export default function StoryPage() {
  return <StoryTabs />;
}
