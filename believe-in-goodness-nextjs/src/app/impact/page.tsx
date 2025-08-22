import type { Metadata } from 'next';
import ImpactPageClient from './ImpactPageClient';

export const metadata: Metadata = {
  title: '我們的影響力｜相信善良｜共创社会价值',
  description: '了解相信善良如何通过解决偏乡教育资源落差、协助弱势青年升学与就业、以及帮助更生人重返社会等方式，创造正面的社会影响力。',
  openGraph: {
    title: '我們的影響力｜相信善良｜共创社会价值',
    description: '了解相信善良如何通过解决偏乡教育资源落差、协助弱势青年升学与就业、以及帮助更生人重返社会等方式，创造正面的社会影响力。',
    url: '/impact',
  },
  twitter: {
    card: 'summary_large_image',
    title: '我們的影響力｜相信善良｜共创社会价值',
    description: '了解相信善良如何通过解决偏乡教育资源落差、协助弱势青年升学与就业、以及帮助更生人重返社会等方式，创造正面的社会影响力。',
  },
};

export default function ImpactPage() {
  return <ImpactPageClient />;
}
