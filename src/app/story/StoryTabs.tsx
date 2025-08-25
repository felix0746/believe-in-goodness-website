'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import KindnessMessages from './KindnessMessages';
import NewsUpdates from './NewsUpdates';
import MilestonesTimeline from './MilestonesTimeline';

// Define the content for each tab
const tabConfig = {
  messages: {
    titleKey: 'navStoryMessages',
    component: <KindnessMessages />,
  },
  news: {
    titleKey: 'navStoryNews',
    component: <NewsUpdates />,
  },
  milestones: {
    titleKey: 'navStoryMilestones',
    component: <MilestonesTimeline />,
  },
};

type TabKey = keyof typeof tabConfig;

export default function StoryTabs() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabKey>('messages');

  return (
    <main className="story-page-main">
      <div className="container">
        <h1 className="page-title">{t('navStory')}</h1>

        <div className="tabs-container">
          <div className="tab-list" role="tablist" aria-label="善良故事">
            {Object.keys(tabConfig).map((key) => (
              <button
                key={key}
                id={`tab-${key}`}
                className={`tab-item ${activeTab === key ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`panel-${key}`}
                onClick={() => setActiveTab(key as TabKey)}
              >
                {t(tabConfig[key as TabKey].titleKey)}
              </button>
            ))}
          </div>

          <div className="tab-panels">
            {Object.keys(tabConfig).map((key) => (
              <div
                key={key}
                id={`panel-${key}`}
                className="tab-panel"
                role="tabpanel"
                tabIndex={0}
                aria-labelledby={`tab-${key}`}
                hidden={activeTab !== key}
              >
                {tabConfig[key as TabKey].component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
