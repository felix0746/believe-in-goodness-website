'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  return (
    <div className="lang-switcher-container" ref={wrapperRef}>
      <button className="lang-switcher-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Language switcher">
        <i className="fas fa-globe"></i>
      </button>
      <div className={`lang-dropdown ${isOpen ? 'show' : ''}`}>
        <button onClick={() => handleLanguageChange('zh-Hant')} className="lang-option">繁體中文</button>
        <button onClick={() => handleLanguageChange('en')} className="lang-option">English</button>
        <button onClick={() => handleLanguageChange('vi')} className="lang-option">Tiếng Việt</button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
