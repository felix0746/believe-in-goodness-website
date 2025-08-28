'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  
  return (
    <main className="privacy-policy-page">
      <div className="container">
        <div className="privacy-policy-content">
          <h1>隱私權政策 (Privacy Policy)</h1>
          <p className="last-updated">最後更新：2025年1月</p>
          
          <section>
            <h2>1. 資訊收集</h2>
            <p>我們收集以下類型的資訊：</p>
            <ul>
              <li><strong>個人資訊：</strong>姓名、電子郵件地址、電話號碼</li>
              <li><strong>帳戶資訊：</strong>用戶名、密碼、帳戶偏好設定</li>
              <li><strong>使用資訊：</strong>應用程式使用情況、功能使用統計</li>
              <li><strong>技術資訊：</strong>設備資訊、IP地址、瀏覽器類型</li>
            </ul>
          </section>

          <section>
            <h2>2. 資訊使用</h2>
            <p>我們使用收集的資訊來：</p>
            <ul>
              <li>提供、維護和改進我們的服務</li>
              <li>處理交易和發送相關通知</li>
              <li>回應客戶服務請求</li>
              <li>發送行銷和促銷資訊（經您同意）</li>
              <li>防止詐騙和確保安全</li>
            </ul>
          </section>

          <section>
            <h2>3. 資訊分享</h2>
            <p>我們不會出售、交易或轉讓您的個人資訊給第三方，除非：</p>
            <ul>
              <li>經您明確同意</li>
              <li>法律要求或政府機關要求</li>
              <li>保護我們的權利和財產</li>
              <li>與可信賴的服務提供商合作（僅限於提供服務所需）</li>
            </ul>
          </section>

          <section>
            <h2>4. 資料安全</h2>
            <p>我們實施適當的技術和組織措施來保護您的個人資訊：</p>
            <ul>
              <li>使用加密技術保護資料傳輸</li>
              <li>定期更新安全措施</li>
              <li>限制員工對個人資訊的存取</li>
              <li>定期進行安全審計</li>
            </ul>
          </section>

          <section>
            <h2>5. 您的權利</h2>
            <p>根據適用法律，您有權：</p>
            <ul>
              <li>存取您的個人資訊</li>
              <li>更正不準確的資訊</li>
              <li>刪除您的個人資訊</li>
              <li>限制資訊處理</li>
              <li>反對資訊處理</li>
              <li>資料可攜性</li>
            </ul>
          </section>

          <section>
            <h2>6. Cookie 和追蹤技術</h2>
            <p>我們使用 Cookie 和類似技術來：</p>
            <ul>
              <li>記住您的偏好設定</li>
              <li>分析網站使用情況</li>
              <li>提供個人化內容</li>
              <li>改善用戶體驗</li>
            </ul>
          </section>

          <section>
            <h2>7. 第三方服務</h2>
            <p>我們的服務可能包含第三方連結或服務，這些第三方有自己的隱私權政策。我們建議您閱讀這些政策。</p>
          </section>

          <section>
            <h2>8. 兒童隱私</h2>
            <p>我們的服務不針對13歲以下的兒童。我們不會故意收集13歲以下兒童的個人資訊。</p>
          </section>

          <section>
            <h2>9. 國際資料傳輸</h2>
            <p>您的資訊可能在台灣境外處理。我們確保所有國際資料傳輸都符合適用的資料保護法律。</p>
          </section>

          <section>
            <h2>10. 政策變更</h2>
            <p>我們可能會更新此隱私權政策。重大變更將通過電子郵件或應用程式內通知告知您。</p>
          </section>

          <section>
            <h2>11. 聯絡我們</h2>
            <p>如果您對此隱私權政策有任何問題，請聯絡我們：</p>
            <div className="contact-info">
              <p>✉️ Email: service@wowmiss.com</p>
              <p>📞 電話: 02 2559 0960</p>
              <p>📍 地址: 台北市中正區羅斯福路二段168號6樓之1</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
