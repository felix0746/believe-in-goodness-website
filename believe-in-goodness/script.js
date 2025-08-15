/**
 * 網站全域腳本
 * 功能：
 * 1. 手機版導覽列開關
 * 2. 下拉選單功能 (適用所有裝置)
 * 3. 頁首滾動時的黏性效果
 * 4. 元素滾動至可視範圍時的淡入動畫
 * 5. 頁尾「聯繫我們」按鈕的展開/收合功能
 * 6. 多國語言切換功能 (中、英、越)
 */
window.addEventListener('DOMContentLoaded', () => {
  // 獲取所有需要的 DOM 元素
  const header = document.getElementById('main-header');
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.main-nav');
  const contactBtn = document.getElementById('contact-toggle-btn');
  const contactInfo = document.getElementById('contact-info-panel');
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  const dropdowns = document.querySelectorAll('.main-nav .dropdown');

  // 1. 手機版導覽列開關
  navToggle?.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const isVisible = nav.getAttribute('data-visible') === 'true';
    nav.setAttribute('data-visible', String(!isVisible));
    navToggle.setAttribute('aria-expanded', String(!isVisible));
    document.body.classList.toggle('no-scroll', !isVisible);
  });

  // 2. 下拉選單功能 (點擊切換)
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link?.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation(); 
      const parent = link.parentElement;
      const isExpanded = parent.getAttribute('aria-expanded') === 'true';

      document.querySelectorAll('.main-nav .dropdown[aria-expanded="true"]').forEach(d => {
        if (d !== parent) d.setAttribute('aria-expanded', 'false');
      });

      parent.setAttribute('aria-expanded', String(!isExpanded));
    });
  });

  // 點擊頁面其他地方，關閉所有選單
  document.addEventListener('click', () => {
    document.querySelectorAll('.main-nav .dropdown[aria-expanded="true"]').forEach(d => {
      d.setAttribute('aria-expanded', 'false');
    });
    if (nav?.getAttribute('data-visible') === 'true') {
        nav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    }
  });


  // 3. 頁首滾動時的黏性效果
  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }
  });

  // 4. 元素滾動至可視範圍時的淡入動畫
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeInSections.forEach(section => {
    sectionObserver.observe(section);
  });

  // 5. 頁尾「聯繫我們」按鈕的展開/收合功能
  contactBtn?.addEventListener('click', () => {
    const isExpanded = contactBtn.getAttribute('aria-expanded') === 'true';
    contactBtn.setAttribute('aria-expanded', String(!isExpanded));
    contactInfo?.classList.toggle('visible');
  });
  
  // --- 6. 多國語言切換功能 ---
  
  const langSwitcherContainer = document.getElementById('lang-switcher-container');
  const availableLanguages = {
    'zh-Hant': '繁中',
    'en': 'EN',
    'vi': 'VI'
  };
  let currentLang = localStorage.getItem('lang') || 'zh-Hant';
  let translations = {};

  // 建立語言選單
  function createLangSwitcher() {
      if (!langSwitcherContainer) return;

      const mainButton = document.createElement('button');
      mainButton.className = 'lang-switcher-btn';
      mainButton.id = 'lang-switcher-main-btn';

      const dropdown = document.createElement('div');
      dropdown.className = 'lang-dropdown';

      Object.entries(availableLanguages).forEach(([langCode, langName]) => {
          const optionButton = document.createElement('button');
          optionButton.className = 'lang-option';
          optionButton.textContent = langName;
          optionButton.dataset.lang = langCode;
          optionButton.addEventListener('click', (e) => {
              e.stopPropagation();
              setLanguage(langCode);
              dropdown.classList.remove('show');
          });
          dropdown.appendChild(optionButton);
      });

      langSwitcherContainer.appendChild(mainButton);
      langSwitcherContainer.appendChild(dropdown);

      mainButton.addEventListener('click', (e) => {
          e.stopPropagation();
          dropdown.classList.toggle('show');
      });
      
      // 點擊其他地方關閉語言選單
      document.addEventListener('click', () => {
        if(dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
      });
  }
  
  // 載入翻譯檔案
  async function loadTranslations() {
    try {
      const response = await fetch('languages.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      translations = await response.json();
      createLangSwitcher();
      setLanguage(currentLang);
    } catch (error) {
      console.error("無法載入翻譯檔案:", error);
    }
  }
  
  // 設定語言
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    
    const mainButton = document.getElementById('lang-switcher-main-btn');
    if(mainButton) {
        mainButton.textContent = availableLanguages[lang];
    }
  }
  
  // 初始化
  loadTranslations();
});
