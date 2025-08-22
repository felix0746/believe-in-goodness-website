'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

// Define the content for each tab
const domesticContent = [
  {
    titleKey: 'domesticOrphanageTitle',
    textKey: 'domesticOrphanageText',
    image: '/images/ooo.png',
    alt: '一名孩童專注地望著遠方',
  },
  {
    titleKey: 'domesticDisabilityTitle',
    textKey: 'domesticDisabilityText',
    image: '/images/11.png',
    alt: '一群人手疊手，象徵團結',
  },
  {
    titleKey: 'domesticRehabilitationTitle',
    textKey: 'domesticRehabilitationText',
    image: '/images/sss.png',
    alt: '一雙手溫柔地捧著一顆小樹苗',
  },
  {
    titleKey: 'domesticRemoteAreaTitle',
    textKey: 'domesticRemoteAreaText',
    image: '/images/org.png',
    alt: '許多隻手共同伸向天空',
  },
  {
    titleKey: 'Silver-haired people',
    textKey: 'Silver-haired peopleText',
    image: '/images/Minimalist Pizza Photo Blog Banner.png',
    alt: '一位長者正在專注地製作食物',
  },
];

const internationalContent = [
    {
      titleKey: 'internationalOverseasTitle',
      textKey: 'internationalOverseasText',
    },
    {
      titleKey: 'internationalForeignTitle',
      textKey: 'internationalForeignText',
    },
];

const tabConfig = {
  domestic: {
    titleKey: 'navCareDomestic',
    content: domesticContent,
  },
  international: {
    titleKey: 'navCareInternational',
    content: internationalContent,
  },
};

type TabKey = keyof typeof tabConfig;

// Reusable component for Domestic Care content (Cards/Accordion)
const DomesticCareContent = ({ content }: { content: typeof domesticContent }) => {
  const { t } = useTranslation();
  const [openAccordion, setOpenAccordion] = useState<string | null>(content.length > 0 ? content[0].titleKey : null);

  const handleAccordionClick = (titleKey: string) => {
    setOpenAccordion(openAccordion === titleKey ? null : titleKey);
  };
  
  return (
    <>
      {/* Desktop Cards */}
      <div className="desktop-care-cards">
        {content.map((item, index) => (
          <section key={item.titleKey} className={`care-card ${index % 2 !== 0 ? 'reversed' : ''}`}>
            <div className="care-card-image">
              <Image src={item.image} alt={item.alt} width={500} height={281} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </div>
            <div className="care-card-text">
              <h3>{t(item.titleKey)}</h3>
              <p dangerouslySetInnerHTML={{ __html: t(item.textKey) }} />
            </div>
          </section>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="mobile-accordion">
        {content.map((item) => (
          <div key={item.titleKey} className="accordion-item">
            <button className="accordion-header" onClick={() => handleAccordionClick(item.titleKey)} aria-expanded={openAccordion === item.titleKey}>
              {t(item.titleKey)}
            </button>
            <div className="accordion-content" style={{ maxHeight: openAccordion === item.titleKey ? '1000px' : '0' }}>
              <div className="accordion-content-inner">
                <div className="care-card-image">
                  <Image src={item.image} alt={item.alt} width={500} height={281} />
                </div>
                <div className="care-card-text">
                  <p dangerouslySetInnerHTML={{ __html: t(item.textKey) }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Reusable component for International Care content
const InternationalCareContent = ({ content }: { content: typeof internationalContent }) => {
    const { t } = useTranslation();
    return (
        <section className="international-care-section">
            <div className="international-care-bg">
                <Image src="/images/image_58d59d.jpg" alt="夕陽下的城市剪影，象徵異鄉生活" layout="fill" objectFit="cover" quality={80} />
            </div>
            <div className="international-care-content-wrapper">
                {content.map((item) => (
                    <div key={item.titleKey} className="international-care-text-block">
                        <h3>{t(item.titleKey)}</h3>
                        <p dangerouslySetInnerHTML={{ __html: t(item.textKey) }} />
                    </div>
                ))}
            </div>
        </section>
    );
};


export default function CareTabs() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabKey>('domestic');

  return (
    <main className="story-page-main">
      <div className="container">
        <h1 className="page-title">{t('navCare')}</h1>

        <div className="tabs-container">
          <div className="tab-list" role="tablist" aria-label="關懷與溫暖">
            {Object.keys(tabConfig).map((key) => (
              <button key={key} id={`tab-${key}`} className={`tab-item ${activeTab === key ? 'active' : ''}`} role="tab" aria-selected={activeTab === key} aria-controls={`panel-${key}`} onClick={() => setActiveTab(key as TabKey)}>
                {t(tabConfig[key as TabKey].titleKey)}
              </button>
            ))}
          </div>

          <div className="tab-panels">
             <div id="panel-domestic" className="tab-panel" role="tabpanel" tabIndex={0} aria-labelledby="tab-domestic" hidden={activeTab !== 'domestic'}>
                <DomesticCareContent content={domesticContent} />
             </div>
             <div id="panel-international" className="tab-panel" role="tabpanel" tabIndex={0} aria-labelledby="tab-international" hidden={activeTab !== 'international'}>
                <InternationalCareContent content={internationalContent} />
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
