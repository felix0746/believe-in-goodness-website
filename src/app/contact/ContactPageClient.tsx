'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import ContactFormModal from '@/components/ContactFormModal'; // 引入新的表單元件

export default function ContactPageClient() {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('jobseekers'); // 預設顯示求職者頁籤
  const [isNavSticky, setIsNavSticky] = useState(false);
  const tabsNavRef = useRef<HTMLDivElement>(null);

  // 移除舊的 body scroll 邏輯，因為新元件會自己處理
  const openContactForm = () => setIsFormOpen(true);
  const closeContactForm = () => setIsFormOpen(false);

  // 檢測導覽列是否處於 sticky 狀態
  useEffect(() => {
    const handleScroll = () => {
      if (tabsNavRef.current) {
        const rect = tabsNavRef.current.getBoundingClientRect();
        const isSticky = rect.top <= 120; // 120px 是我們設定的 top 值
        setIsNavSticky(isSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始檢查

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const address = t('address');
  
  // 為不同語言版本提供更精確的地址格式
  const getPreciseAddress = () => {
    const currentLang = document.documentElement.lang || 'zh-Hant';
    
    // 根據語言提供更精確的地址格式
    switch (currentLang) {
      case 'en':
        return '168 Roosevelt Road Section 2, Zhongzheng District, Taipei City, Taiwan';
      case 'vi':
        return '168 Roosevelt Road Section 2, Zhongzheng District, Taipei City, Taiwan';
      case 'zh-Hant':
      default:
        return '台北市中正區羅斯福路二段168號6樓之1';
    }
  };
  
  const preciseAddress = getPreciseAddress();
  
  // 使用精確地址生成 Google Maps URL
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(preciseAddress)}`;
  
  // 為嵌入式地圖也建立一個動態 URL，使用精確地址
  // 使用標準的 Google Maps 嵌入格式
  // 羅斯福路二段168號的大概座標：25.0330, 121.5654
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(preciseAddress)}&t=&z=18&ie=UTF8&iwloc=&output=embed`;
  
  // 添加調試信息（開發時使用）
  console.log('Current Language:', document.documentElement.lang);
  console.log('Precise Address:', preciseAddress);
  console.log('Google Maps Embed URL:', googleMapsEmbedUrl);
  
  // 嘗試使用更精確的地址格式
  const alternativeAddress = '台北市中正區羅斯福路二段168號';
  const alternativeEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(alternativeAddress)}&t=&z=18&ie=UTF8&iwloc=&output=embed`;
  console.log('Alternative Address:', alternativeAddress);
  console.log('Alternative Embed URL:', alternativeEmbedUrl);

  return (
    <main className="contact-page-main">
      {/* 合作諮詢區塊 */}
      <section className="contact-intro-section">
        <div className="container">
          <h1>{t('contactTitle')}</h1>
          <p className="section-subtitle">{t('contactIntro')}</p>
        </div>
      </section>

      {/* 核心價值區塊 */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="services-grid">
            {/* 卡片 1 - 求職者 */}
            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>{t('contactService1Title')}</h3>
              <p>{t('contactService1Desc')}</p>
            </div>
            {/* 卡片 2 - 企業 */}
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>{t('contactService2Title')}</h3>
              <p>{t('contactService2Desc')}</p>
            </div>
            {/* 卡片 3 - 學校 */}
            <div className="service-card">
              <div className="service-icon">👥</div>
              <h3>{t('contactService3Title')}</h3>
              <p>{t('contactService3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* App 功能詳解區塊 - 頁籤式設計 */}
      <section className="app-features-section">
        <div className="container">
          <div className="app-ecosystem-header">
            <h2>{t('appEcosystemTitle')}</h2>
            <p className="app-ecosystem-subtitle">{t('appEcosystemSubtitle')}</p>
          </div>
          
          {/* 響應式頁籤佈局 */}
          <div className="app-tabs-container">
            {/* 手機版水平 Tab Bar */}
            <div className="app-tabs-nav-mobile">
              <button 
                className={`app-tab-btn ${activeTab === 'jobseekers' ? 'active' : ''}`}
                onClick={() => setActiveTab('jobseekers')}
              >
                <span className="tab-icon">💡</span>
                <span className="tab-text">{t('appJobSeekersTitle')}</span>
                <span className="tab-text-mobile">求職者</span>
              </button>
              <button 
                className={`app-tab-btn ${activeTab === 'businesses' ? 'active' : ''}`}
                onClick={() => setActiveTab('businesses')}
              >
                <span className="tab-icon">📈</span>
                <span className="tab-text">{t('appBusinessesTitle')}</span>
                <span className="tab-text-mobile">企業</span>
              </button>
              <button 
                className={`app-tab-btn ${activeTab === 'schools' ? 'active' : ''}`}
                onClick={() => setActiveTab('schools')}
              >
                <span className="tab-icon">👥</span>
                <span className="tab-text">{t('appSchoolsTitle')}</span>
                <span className="tab-text-mobile">學校</span>
              </button>
            </div>

            {/* 桌面版左側頁籤導航 */}
            <div 
              ref={tabsNavRef}
              className={`app-tabs-nav ${isNavSticky ? 'sticky-active' : ''}`}
            >
              <button 
                className={`app-tab-btn ${activeTab === 'jobseekers' ? 'active' : ''}`}
                onClick={() => setActiveTab('jobseekers')}
              >
                <span className="tab-icon">💡</span>
                <span className="tab-text">{t('appJobSeekersTitle')}</span>
                <span className="tab-text-mobile">求職者</span>
              </button>
              <button 
                className={`app-tab-btn ${activeTab === 'businesses' ? 'active' : ''}`}
                onClick={() => setActiveTab('businesses')}
              >
                <span className="tab-icon">📈</span>
                <span className="tab-text">{t('appBusinessesTitle')}</span>
                <span className="tab-text-mobile">企業</span>
              </button>
              <button 
                className={`app-tab-btn ${activeTab === 'schools' ? 'active' : ''}`}
                onClick={() => setActiveTab('schools')}
              >
                <span className="tab-icon">👥</span>
                <span className="tab-text">{t('appSchoolsTitle')}</span>
                <span className="tab-text-mobile">學校</span>
              </button>
            </div>
            
            {/* 頁籤內容區域 */}
            <div className="app-tabs-content">
              {/* 求職者頁籤 */}
              <div className={`app-tab-panel ${activeTab === 'jobseekers' ? 'active' : ''}`}>
                <div className="tab-panel-header">
                  <h3>{t('appJobSeekersTitle')}</h3>
                  <p className="tab-panel-subtitle">為求職者打造的安全透明平台</p>
                </div>
                <ul className="feature-list">
                  <li>{t('appJobSeekersFeature1')}</li>
                  <li>{t('appJobSeekersFeature2')}</li>
                  <li>{t('appJobSeekersFeature3')}</li>
                </ul>
                <div className="app-buttons">
                  <button className="app-store-btn">
                    <i className="fab fa-apple"></i>
                    {t('appDownloadAppStore')}
                  </button>
                  <button className="google-play-btn">
                    <i className="fab fa-google-play"></i>
                    {t('appDownloadGooglePlay')}
                  </button>
                </div>
              </div>

              {/* 企業頁籤 */}
              <div className={`app-tab-panel ${activeTab === 'businesses' ? 'active' : ''}`}>
                <div className="tab-panel-header">
                  <h3>{t('appBusinessesTitle')}</h3>
                  <p className="tab-panel-subtitle">為企業打造的全球人才媒合平台</p>
                </div>
                <ul className="feature-list">
                  <li>{t('appBusinessesFeature1')}</li>
                  <li>{t('appBusinessesFeature2')}</li>
                  <li>{t('appBusinessesFeature3')}</li>
                </ul>
                <div className="app-buttons">
                  <button className="business-plan-btn">
                    <span className="button-icon">💼</span>
                    {t('appLearnBusinessPlan')}
                  </button>
                  <button className="business-login-btn">
                    <span className="button-icon">🔐</span>
                    {t('appLoginBusiness')}
                  </button>
                </div>
              </div>

              {/* 學校頁籤 */}
              <div className={`app-tab-panel ${activeTab === 'schools' ? 'active' : ''}`}>
                <div className="tab-panel-header">
                  <h3>{t('appSchoolsTitle')}</h3>
                  <p className="tab-panel-subtitle">為學校打造的高效產學合作平台</p>
                </div>
                <ul className="feature-list">
                  <li>{t('appSchoolsFeature1')}</li>
                  <li>{t('appSchoolsFeature2')}</li>
                  <li>{t('appSchoolsFeature3')}</li>
                </ul>
                <div className="app-buttons">
                  <button className="business-plan-btn">
                    <span className="button-icon">🏫</span>
                    {t('appLearnSchoolPlan')}
                  </button>
                  <button className="business-login-btn">
                    <span className="button-icon">🔐</span>
                    {t('appLoginSchool')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 我們的位置 */}
      <section className="location-section">
          <div className="location-header">
              <h2>{t('locationTitle')}</h2>
              <p>{t('locationDesc')}</p>
          </div>
                     <div className="map-card-container">
               <div className="map-container">
                   <iframe
                       src={googleMapsEmbedUrl}
                       width="100%"
                       height="450"
                       style={{ border:0 }}
                       allowFullScreen={true}
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Our Location">
                   </iframe>
               </div>
           </div>
          
          {/* 手機版整合聯絡資訊 */}
          <div className="mobile-contact-info">
              <h3>{t('contactDetailsTitle')}</h3>
              <div className="mobile-contact-grid">
                  <div className="mobile-contact-item">
                      <div className="mobile-contact-icon">
                          <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="mobile-contact-text">
                          <h4>{t('addressTitle')}</h4>
                          <p>{t('address')}</p>
                      </div>
                  </div>
                  <div className="mobile-contact-item">
                      <div className="mobile-contact-icon">
                          <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="mobile-contact-text">
                          <h4>{t('phoneTitle')}</h4>
                          <a href={`tel:${t('phone')}`}>{t('phone')}</a>
                      </div>
                  </div>
                  <div className="mobile-contact-item">
                      <div className="mobile-contact-icon">
                          <i className="fas fa-envelope"></i>
                      </div>
                      <div className="mobile-contact-text">
                          <h4>{t('emailTitle')}</h4>
                          <a href={`mailto:${t('email')}`}>{t('email')}</a>
                      </div>
                  </div>
                  <div className="mobile-contact-item">
                      <div className="mobile-contact-icon">
                          <i className="fas fa-clock"></i>
                      </div>
                      <div className="mobile-contact-text">
                          <h4>{t('hoursTitle')}</h4>
                          <p>{t('hours')}</p>
                      </div>
                  </div>
              </div>
              
              {/* 手機版線上表單按鈕 */}
              <div className="mobile-form-action">
                  <button className="mobile-contact-form-btn" onClick={openContactForm}>
                      <i className="fas fa-edit"></i>
                      <span>{t('contactFormBtn')}</span>
                  </button>
              </div>
          </div>
      </section>

      {/* 聯絡資訊 */}
      <section className="contact-details-section">
          <div className="container">
              <h2>{t('contactDetailsTitle')}</h2>
              <div className="contact-grid">
                  <div className="contact-card">
                      <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                      <div className="contact-text">
                          <h3>{t('addressTitle')}</h3>
                          <p>
                            <a href={googleMapsSearchUrl} target="_blank" rel="noopener noreferrer">
                              {address}
                            </a>
                          </p>
                      </div>
                  </div>
                  <div className="contact-card">
                      <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                      <div className="contact-text">
                          <h3>{t('phoneTitle')}</h3>
                          <p><a href={`tel:${t('phone')}`}>{t('phone')}</a></p>
                      </div>
                  </div>
                  <div className="contact-card">
                      <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                      <div className="contact-text">
                          <h3>{t('emailTitle')}</h3>
                          <p><a href={`mailto:${t('email')}`}>{t('email')}</a></p>
                      </div>
                  </div>
                  <div className="contact-card">
                    <div className="contact-icon"><i className="far fa-id-card"></i></div>
                    <div className="contact-text">
                      <h3>{t('taxIdTitle')}</h3>
                      <p>{t('taxId')}</p>
                    </div>
                  </div>
                  <div className="contact-card">
                      <div className="contact-icon"><i className="fas fa-clock"></i></div>
                      <div className="contact-text">
                          <h3>{t('hoursTitle')}</h3>
                          <p>{t('hours')}</p>
                      </div>
                  </div>
                  <div className="contact-card">
                      <div className="contact-icon"><i className="fas fa-train"></i></div>
                      <div className="contact-text">
                          <h3>{t('transportTitle')}</h3>
                          <p>{t('transport')}</p>
                      </div>
                  </div>
              </div>
              
              {/* 電腦版表單按鈕 */}
              <div className="desktop-form-action">
                  <button className="desktop-contact-form-btn" onClick={openContactForm}>
                      <i className="fas fa-edit"></i>
                      <span>{t('contactFormBtn')}</span>
                  </button>
              </div>
          </div>
      </section>

      {/* 使用新的客製化表單元件 */}
      <ContactFormModal isOpen={isFormOpen} onClose={closeContactForm} />
    </main>
  );
}
