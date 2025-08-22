'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

// Define the content for each tab
const tabContent = {
  messages: {
    titleKey: 'navStoryMessages',
    contentKey: 'storyMessagesContent',
  },
  news: {
    titleKey: 'navStoryNews',
    contentKey: 'storyNewsContent',
  },
  milestones: {
    titleKey: 'navStoryMilestones',
    contentKey: 'storyMilestonesContent',
  },
};

type TabKey = keyof typeof tabContent;

export default function StoryTabs() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabKey>('messages');

  return (
    <main className="story-page-main">
      <div className="container">
        <h1 className="page-title">{t('navStory')}</h1>

        <div className="tabs-container">
          <div className="tab-list" role="tablist" aria-label="善良故事">
            {Object.keys(tabContent).map((key) => (
              <button
                key={key}
                id={`tab-${key}`}
                className={`tab-item ${activeTab === key ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`panel-${key}`}
                onClick={() => setActiveTab(key as TabKey)}
              >
                {t(tabContent[key as TabKey].titleKey)}
              </button>
            ))}
          </div>

          <div className="tab-panels">
            {Object.keys(tabContent).map((key) => (
              <div
                key={key}
                id={`panel-${key}`}
                className="tab-panel"
                role="tabpanel"
                tabIndex={0}
                aria-labelledby={`tab-${key}`}
                hidden={activeTab !== key}
              >
                <h2>{t(tabContent[key as TabKey].titleKey)}</h2>
                <p>{t(tabContent[key as TabKey].contentKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
