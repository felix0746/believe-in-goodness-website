'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function FAQPage() {
  const { t } = useTranslation();
  
  return (
    <main className="faq-page">
      <div className="container">
        <div className="faq-content">
          <h1>常見問題 (FAQ)</h1>
          <p className="faq-intro">以下是關於「相信善良」平台最常見的問題和答案。如果您找不到您需要的資訊，請隨時聯絡我們。</p>
          
          <div className="faq-sections">
            {/* 一般問題 */}
            <section className="faq-section">
              <h2>一般問題</h2>
              
              <div className="faq-item">
                <h3>什麼是「相信善良」平台？</h3>
                <p>「相信善良」是一個一站式產學合作生態系平台，致力於連接求職者、企業和學校，創造互利共贏的合作機會。我們相信善良的力量可以改變世界。</p>
              </div>

              <div className="faq-item">
                <h3>平台的主要功能有哪些？</h3>
                <p>我們提供三大核心服務：</p>
                <ul>
                  <li><strong>求職服務：</strong>安全透明的求職平台，提供經審核的實習、工讀與正職機會</li>
                  <li><strong>企業服務：</strong>全球人才媒合，從履歷管理到跨國徵才的一站式解決方案</li>
                  <li><strong>學校服務：</strong>專為學校設計的行政管理系統，高效管理產學合作專案</li>
                </ul>
              </div>

              <div className="faq-item">
                <h3>如何開始使用平台？</h3>
                <p>根據您的身份，可以：</p>
                <ul>
                  <li><strong>求職者：</strong>下載我們的 App，註冊帳戶並完善個人資料</li>
                  <li><strong>企業：</strong>聯絡我們了解企業方案，或直接登入企業後台</li>
                  <li><strong>學校：</strong>聯絡我們了解校園方案，或直接登入學校後台</li>
                </ul>
              </div>
            </section>

            {/* 求職者問題 */}
            <section className="faq-section">
              <h2>求職者相關</h2>
              
              <div className="faq-item">
                <h3>平台上的職缺都經過審核嗎？</h3>
                <p>是的，我們嚴格審核所有企業和職缺，確保：</p>
                <ul>
                  <li>企業資訊真實可靠</li>
                  <li>薪資待遇透明公開</li>
                  <li>工作條件符合法規</li>
                  <li>職缺描述準確詳實</li>
                </ul>
              </div>

              <div className="faq-item">
                <h3>如何保護我的個人隱私？</h3>
                <p>我們非常重視您的隱私保護：</p>
                <ul>
                  <li>所有個人資料都經過加密處理</li>
                  <li>只有您授權的企業才能查看您的履歷</li>
                  <li>您可以隨時控制資料的分享範圍</li>
                  <li>詳細的隱私權政策保護您的權益</li>
                </ul>
              </div>

              <div className="faq-item">
                <h3>平台是否收費？</h3>
                <p>求職者使用平台完全免費！我們相信每個人都應該有平等的機會找到理想工作。</p>
              </div>
            </section>

            {/* 企業問題 */}
            <section className="faq-section">
              <h2>企業相關</h2>
              
              <div className="faq-item">
                <h3>如何發布職缺？</h3>
                <p>發布職缺的步驟：</p>
                <ol>
                  <li>註冊企業帳戶並完成驗證</li>
                  <li>選擇適合的招募方案</li>
                  <li>填寫職缺詳細資訊</li>
                  <li>提交審核（通常24小時內完成）</li>
                  <li>職缺上線，開始接收應徵</li>
                </ol>
              </div>

              <div className="faq-item">
                <h3>平台上有哪些類型的人才？</h3>
                <p>我們擁有豐富多元的人才庫：</p>
                <ul>
                  <li>在台外籍生</li>
                  <li>海外留學生</li>
                  <li>本地優秀人才</li>
                  <li>跨國專業人士</li>
                  <li>實習生和畢業生</li>
                </ul>
              </div>

              <div className="faq-item">
                <h3>企業方案有哪些選擇？</h3>
                <p>我們提供彈性的企業方案：</p>
                <ul>
                  <li><strong>基礎方案：</strong>適合小型企業，基本招募功能</li>
                  <li><strong>專業方案：</strong>適合中型企業，進階人才管理功能</li>
                  <li><strong>企業方案：</strong>適合大型企業，完整解決方案</li>
                  <li><strong>客製方案：</strong>根據企業需求量身定制</li>
                </ul>
              </div>
            </section>

            {/* 學校問題 */}
            <section className="faq-section">
              <h2>學校相關</h2>
              
              <div className="faq-item">
                <h3>如何與平台建立合作關係？</h3>
                <p>建立合作的流程：</p>
                <ol>
                  <li>學校代表聯絡我們</li>
                  <li>了解學校需求和目標</li>
                  <li>制定合作方案</li>
                  <li>簽署合作協議</li>
                  <li>系統導入和人員培訓</li>
                  <li>正式啟動合作</li>
                </ol>
              </div>

              <div className="faq-item">
                <h3>平台如何幫助學校管理產學合作？</h3>
                <p>我們提供完整的解決方案：</p>
                <ul>
                  <li>學生實習追蹤系統</li>
                  <li>企業合作管理</li>
                  <li>專案進度監控</li>
                  <li>數據分析和報告</li>
                  <li>溝通協作工具</li>
                </ul>
              </div>

              <div className="faq-item">
                <h3>學校需要支付費用嗎？</h3>
                <p>我們為學校提供優惠的合作方案，具體費用根據合作規模和需求而定。我們相信教育投資是對未來的投資。</p>
              </div>
            </section>

            {/* 技術支援 */}
            <section className="faq-section">
              <h2>技術支援</h2>
              
              <div className="faq-item">
                <h3>忘記密碼怎麼辦？</h3>
                <p>您可以：</p>
                <ul>
                  <li>使用「忘記密碼」功能重設密碼</li>
                  <li>聯絡客服協助處理</li>
                  <li>透過註冊的電子郵件重設</li>
                </ul>
              </div>

              <div className="faq-item">
                <h3>App 支援哪些作業系統？</h3>
                <p>我們的 App 支援：</p>
                <ul>
                  <li>iOS 12.0 或更新版本</li>
                  <li>Android 8.0 或更新版本</li>
                  <li>網頁版支援所有現代瀏覽器</li>
                </ul>
              </div>

              <div className="faq-item">
                <h3>如何回報問題或建議？</h3>
                <p>我們歡迎您的回饋：</p>
                <ul>
                  <li>App 內建回報功能</li>
                  <li>客服專線：02 2559 0960</li>
                  <li>客服信箱：service@wowmiss.com</li>
                  <li>線上客服聊天</li>
                </ul>
              </div>
            </section>
          </div>

          {/* 聯絡我們 */}
          <section className="faq-contact">
            <h2>還有其他問題？</h2>
            <p>如果您在 FAQ 中找不到答案，請隨時聯絡我們。我們的客服團隊很樂意為您提供協助。</p>
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
