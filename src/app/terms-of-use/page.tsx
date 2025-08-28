'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function TermsOfUsePage() {
  const { t } = useTranslation();
  
  return (
    <main className="terms-of-use-page">
      <div className="container">
        <div className="terms-of-use-content">
          <h1>服務條款 (Terms of Use)</h1>
          <p className="last-updated">最後更新：2025年1月</p>
          
          <section>
            <h2>1. 接受條款</h2>
            <p>使用我們的服務即表示您同意遵守這些服務條款。如果您不同意這些條款，請不要使用我們的服務。</p>
          </section>

          <section>
            <h2>2. 服務描述</h2>
            <p>我們提供以下服務：</p>
            <ul>
              <li><strong>求職平台：</strong>連接求職者與企業的媒合服務</li>
              <li><strong>企業服務：</strong>人才招募和管理解決方案</li>
              <li><strong>學校合作：</strong>產學合作專案管理平台</li>
              <li><strong>社群功能：</strong>善良故事分享和互動功能</li>
            </ul>
          </section>

          <section>
            <h2>3. 用戶責任</h2>
            <p>使用我們的服務時，您同意：</p>
            <ul>
              <li>提供準確、完整和最新的資訊</li>
              <li>保護您的帳戶安全</li>
              <li>遵守所有適用的法律和法規</li>
              <li>不從事任何非法、有害或欺詐活動</li>
              <li>尊重其他用戶的權利和隱私</li>
            </ul>
          </section>

          <section>
            <h2>4. 禁止行為</h2>
            <p>您不得：</p>
            <ul>
              <li>發布虛假、誤導或有害的資訊</li>
              <li>騷擾、威脅或恐嚇其他用戶</li>
              <li>侵犯他人的智慧財產權</li>
              <li>嘗試未經授權存取我們的系統</li>
              <li>使用自動化工具進行垃圾訊息或惡意活動</li>
            </ul>
          </section>

          <section>
            <h2>5. 智慧財產權</h2>
            <p>我們的服務及其內容（包括但不限於文字、圖形、標誌、圖像、軟體）均受智慧財產權法保護。未經我們明確許可，您不得複製、分發或修改這些內容。</p>
          </section>

          <section>
            <h2>6. 隱私權</h2>
            <p>我們如何收集、使用和保護您的個人資訊，請參閱我們的<a href="/privacy-policy" className="link">隱私權政策</a>。</p>
          </section>

          <section>
            <h2>7. 服務可用性</h2>
            <p>我們努力提供可靠的服務，但我們不保證服務將始終可用或無錯誤。我們可能會暫時中斷服務進行維護或更新。</p>
          </section>

          <section>
            <h2>8. 免責聲明</h2>
            <p>在法律允許的最大範圍內，我們不對以下情況承擔責任：</p>
            <ul>
              <li>服務中斷或資料遺失</li>
              <li>第三方內容或服務</li>
              <li>用戶之間的糾紛</li>
              <li>間接或附帶損害</li>
            </ul>
          </section>

          <section>
            <h2>9. 責任限制</h2>
            <p>我們對任何索賠的總責任限額為您在使用我們的服務期間支付的費用總額，或新台幣1,000元，以較高者為準。</p>
          </section>

          <section>
            <h2>10. 終止</h2>
            <p>我們可能會在以下情況下終止或暫停您的帳戶：</p>
            <ul>
              <li>違反這些服務條款</li>
              <li>從事非法或有害活動</li>
              <li>長期不使用帳戶</li>
              <li>法律要求</li>
            </ul>
          </section>

          <section>
            <h2>11. 爭議解決</h2>
            <p>任何與這些條款相關的爭議應首先通過友好協商解決。如果無法解決，爭議應提交給台灣台北地方法院管轄。</p>
          </section>

          <section>
            <h2>12. 條款變更</h2>
            <p>我們可能會更新這些服務條款。重大變更將通過電子郵件或應用程式內通知告知您。繼續使用服務即表示您接受更新後的條款。</p>
          </section>

          <section>
            <h2>13. 聯絡我們</h2>
            <p>如果您對這些服務條款有任何問題，請聯絡我們：</p>
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
