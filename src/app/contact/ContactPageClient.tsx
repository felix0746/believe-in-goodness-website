'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import ContactFormModal from '@/components/ContactFormModal'; // 引入新的表單元件

export default function ContactPageClient() {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);

  // 移除舊的 body scroll 邏輯，因為新元件會自己處理
  const openContactForm = () => setIsFormOpen(true);
  const closeContactForm = () => setIsFormOpen(false);

  const address = t('address');
  // 改用 'search' API，這對於格式複雜的地址更為可靠
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  // 為嵌入式地圖也建立一個動態 URL
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <main className="contact-page-main">
      {/* 合作諮詢區塊 */}
      <section className="contact-intro-section">
        <div className="container">
          <h1>{t('contactTitle')}</h1>
          <p className="section-subtitle">{t('contactIntro')}</p>
        </div>
      </section>

      {/* 服務項目卡片 */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="services-grid">
            {/* 卡片 1 */}
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-lightbulb"></i></div>
              <h3>{t('contactService1Title')}</h3>
              <p>{t('contactService1Desc')}</p>
            </div>
            {/* 卡片 2 */}
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-chart-line"></i></div>
              <h3>{t('contactService2Title')}</h3>
              <p>{t('contactService2Desc')}</p>
            </div>
            {/* 卡片 3 */}
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-users"></i></div>
              <h3>{t('contactService3Title')}</h3>
              <p>{t('contactService3Desc')}</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* 立即聯繫我們 */}
      <section className="immediate-contact-section">
          <div className="immediate-contact-box">
              <h2>{t('contactImmediateTitle')}</h2>
              <div className="immediate-contact-details">
                  <div className="immediate-contact-item">
                      <a href={`tel:${t('phone')}`}><i className="fas fa-phone-alt"></i> {t('phone')}</a>
                  </div>
                  <div className="immediate-contact-item">
                      <a href={`mailto:${t('email')}`}><i className="fas fa-envelope"></i> {t('email')}</a>
                  </div>
              </div>
              <div className="contact-action">
                <button className="contact-form-btn" onClick={openContactForm}>
                  <i className="fas fa-edit"></i>
                  <span>{t('contactFormBtn')}</span>
                </button>
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
                      referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
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
          </div>
      </section>

      {/* 使用新的客製化表單元件 */}
      <ContactFormModal isOpen={isFormOpen} onClose={closeContactForm} />
    </main>
  );
}
