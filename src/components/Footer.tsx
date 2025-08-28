'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer-container">
      {/* 主要頁尾內容 - 三欄式佈局 */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* 欄位一：關於我們 */}
            <div className="footer-column">
              <h3 className="footer-column-title">{t('footerAboutUs')}</h3>
              <ul className="footer-links">
                <li>
                  <Link href="/" className="footer-link">
                    {t('footerAboutCompany')}
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="footer-link">
                    {t('footerOurImpact')}
                  </Link>
                </li>
                <li>
                  <Link href="/story" className="footer-link">
                    {t('footerKindnessStories')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">
                    {t('footerContactUs')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* 欄位二：法律與支援 */}
            <div className="footer-column">
              <h3 className="footer-column-title">{t('footerLegalSupport')}</h3>
              <ul className="footer-links">
                <li>
                  <Link href="/privacy-policy" className="footer-link">
                    {t('footerPrivacyPolicy')}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use" className="footer-link">
                    {t('footerTermsOfUse')}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="footer-link">
                    {t('footerFAQ')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* 欄位三：保持聯繫 */}
            <div className="footer-column">
              <h3 className="footer-column-title">{t('footerStayConnected')}</h3>
              <div className="footer-contact-info">
                <p className="footer-email">
                  <a href="mailto:service@wowmiss.com" className="footer-contact-link">
                    ✉️ service@wowmiss.com
                  </a>
                </p>
                <p className="footer-phone">
                  <a href="tel:02 2559 0960" className="footer-contact-link">
                    📞 02 2559 0960
                  </a>
                </p>
                <p className="footer-address">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=台北市中正區羅斯福路二段168號6樓之1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer-contact-link"
                  >
                    📍 台北市中正區羅斯福路二段168號6樓之1
                  </a>
                </p>
              </div>
                             <div className="footer-social">
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                   <i className="fab fa-facebook"></i>
                 </a>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                   <i className="fab fa-instagram"></i>
                 </a>
                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                   <i className="fab fa-linkedin"></i>
                 </a>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 版權宣告橫條 */}
      <div className="footer-copyright">
        <div className="container">
          <p className="copyright-text">{t('footerCopyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
