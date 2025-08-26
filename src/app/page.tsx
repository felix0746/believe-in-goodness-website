'use client';

import OptimizedImage from '@/components/OptimizedImage';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      {/* 🌿 區塊 1：背景緣由 */}
      <section className="section">
        <div className="section-image">
          <OptimizedImage src="/images/lll-1.png" alt="一張寫著相信善良的卡片放在植物中" width={500} height={500} style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="section-text">
          <h2>{t('homeReasonTitle')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('homeReasonText') }} />
        </div>
      </section>

      {/* 🌟 區塊 2：我們的承諾 */}
      <section className="section section-reversed">
        <div className="section-image">
          <OptimizedImage src="/images/Black-1.png" alt="孩子們伸出手，眼神充滿希望" width={500} height={500} style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="section-text">
          <h2>{t('homeCommitmentTitle')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('homeCommitmentText') }} />
        </div>
      </section>

      {/* 💡 區塊 3：信念與期望 */}
      <section className="belief-section">
        <div className="belief-banner">
          <OptimizedImage src="/images/logo-1.png" alt="相信善良 Banner Logo" width={450} height={150} style={{ width: '90%', maxWidth: '450px', height: 'auto' }} />
        </div>
        <div className="belief-description">
          <p dangerouslySetInnerHTML={{ __html: t('homeBeliefText') }} />
        </div>
      </section>
    </main>
  );
}
