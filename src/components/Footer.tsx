'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';

const Footer = () => {
  const { t } = useTranslation();
  const [isContactInfoVisible, setIsContactInfoVisible] = useState(false);

  const toggleContactInfo = () => {
    setIsContactInfoVisible(!isContactInfoVisible);
  };
  
  return (
    <footer className="footer-container">
      <div className="footer-banner" id="footer-banner">
        <div className="footer-dark-overlay"></div>
        <div className="footer-overlay">
          <div className="footer-left">
            <h2 dangerouslySetInnerHTML={{ __html: t('footerSlogan') }} />
            <p className="footer-subtext">{t('footerSubtext')}</p>
          </div>
          <div className="footer-right">
            <button 
              className="contact-btn" 
              onClick={toggleContactInfo}
              aria-controls="contact-info-panel" 
              aria-expanded={isContactInfoVisible}
            >
              {t('footerContactBtn')}
            </button>
          </div>
        </div>
      </div>
      <div 
        id="contact-info-panel" 
        className={`contact-info-panel ${isContactInfoVisible ? 'visible' : ''}`}
      >
        <h3>{t('footerContactTitle')}</h3>
        <p>✉️ service@wowmiss.com</p>
        <p>📞 02 2559 0960</p>
        <p>📍 台北市中正區羅斯福路二段168號6號樓之1</p>
      </div>
    </footer>
  );
};

export default Footer;
