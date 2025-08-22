import type { Metadata } from 'next';
import CareTabs from './CareTabs';

export const metadata: Metadata = {
  title: '關懷與溫wärm｜相信善良',
  description: '相信善良在國內致力於關懷育幼院、身心障礙人士、更生人、偏鄉原住民及銀髮族。同時我們也關注來台求學的僑生與外籍生，提供工作機會與產學合作，幫助他們解決經濟壓力，並快速融入台灣的文化與生活。',
};

export default function CarePage() {
  return <CareTabs />;
}
