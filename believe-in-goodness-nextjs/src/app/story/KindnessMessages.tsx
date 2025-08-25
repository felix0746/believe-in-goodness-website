'use client';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';

// This component will be rendered inside a tab panel.
// We'll use mock data for now, but it's structured to accept real data via props in the future.

const mockMessages = [
  {
    quoteKey: 'storyMessageQuote1',
    authorKey: 'storyMessageAuthor1',
    image: '/images/Black-1.png', // Placeholder image
  },
  {
    quoteKey: 'storyMessageQuote2',
    authorKey: 'storyMessageAuthor2',
    image: '/images/Black.png', // Placeholder image
  },
  {
    quoteKey: 'storyMessageQuote3',
    authorKey: 'storyMessageAuthor3',
    image: '/images/child-looking-out.png', // Placeholder image
  },
];

const KindnessMessages = () => {
  const { t } = useTranslation();

  return (
    <div className="kindness-wall">
      {mockMessages.map((msg, index) => (
        <figure key={index} className="kindness-card">
          <div className="kindness-card-image-wrapper">
            <Image src={msg.image} alt={t(msg.authorKey)} width={100} height={100} className="kindness-card-image" />
          </div>
          <blockquote className="kindness-card-quote">
            <p>&quot;{t(msg.quoteKey)}&quot;</p>
          </blockquote>
          <figcaption className="kindness-card-author">
            — {t(msg.authorKey)}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default KindnessMessages;
