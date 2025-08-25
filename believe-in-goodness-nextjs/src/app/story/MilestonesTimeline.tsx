'use client';
import { useTranslation } from '@/hooks/useTranslation';

// This component will be rendered inside a tab panel.
// We'll use mock data for now, but it's structured to accept real data via props in the future.

const mockMilestones = [
  {
    dateKey: 'storyMilestoneDate1',
    titleKey: 'storyMilestoneTitle1',
    descKey: 'storyMilestoneDesc1',
    icon: 'fas fa-flag',
  },
  {
    dateKey: 'storyMilestoneDate2',
    titleKey: 'storyMilestoneTitle2',
    descKey: 'storyMilestoneDesc2',
    icon: 'fas fa-user-graduate',
  },
  {
    dateKey: 'storyMilestoneDate3',
    titleKey: 'storyMilestoneTitle3',
    descKey: 'storyMilestoneDesc3',
    icon: 'fas fa-handshake-angle',
  },
];

const MilestonesTimeline = () => {
  const { t } = useTranslation();

  return (
    <div className="milestones-timeline">
      {mockMilestones.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"><i className={item.icon}></i></div>
          <div className="timeline-content">
            <p className="timeline-date">{t(item.dateKey)}</p>
            <h3 className="timeline-title">{t(item.titleKey)}</h3>
            <p className="timeline-desc">{t(item.descKey)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MilestonesTimeline;
