'use client';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';

// This component will be rendered inside a tab panel.
// We'll use mock data for now, but it's structured to accept real data via props in the future.

const mockNews = [
  {
    titleKey: 'storyNewsTitle1',
    dateKey: 'storyNewsDate1',
    excerptKey: 'storyNewsExcerpt1',
    image: '/images/image_58d59d.jpg',
    link: '#',
  },
  {
    titleKey: 'storyNewsTitle2',
    dateKey: 'storyNewsDate2',
    excerptKey: 'storyNewsExcerpt2',
    image: '/images/footer-bg.jpg',
    link: '#',
  },
];

const NewsUpdates = () => {
  const { t } = useTranslation();

  return (
    <div className="news-list">
      {mockNews.map((item, index) => (
        <article key={index} className="news-card">
          <div className="news-card-image-wrapper">
            <Image src={item.image} alt={t(item.titleKey)} layout="fill" objectFit="cover" className="news-card-image" />
          </div>
          <div className="news-card-content">
            <p className="news-card-date">{t(item.dateKey)}</p>
            <h3 className="news-card-title">
              <a href={item.link}>{t(item.titleKey)}</a>
            </h3>
            <p className="news-card-excerpt">{t(item.excerptKey)}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsUpdates;
