'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import translations from '../languages.json';

// Define the shape of the context
interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define the props for the provider
interface LanguageProviderProps {
  children: ReactNode;
}

// Type assertion for the translations object
type TranslationsType = typeof translations;

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState('zh-Hant');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage as keyof TranslationsType]) {
      setLanguageState(savedLanguage);
      // 初始載入時設定 HTML 的 lang 屬性
      if (typeof document !== 'undefined') {
        document.documentElement.lang = savedLanguage;
      }
    }
  }, []);

  const setLanguage = (lang: string) => {
    if (translations[lang as keyof TranslationsType]) {
      localStorage.setItem('language', lang);
      setLanguageState(lang);
      // 動態更新 HTML 的 lang 屬性
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
    } else {
      console.warn(`Language '${lang}' not found. Defaulting to 'zh-Hant'.`);
      localStorage.setItem('language', 'zh-Hant');
      setLanguageState('zh-Hant');
      // 動態更新 HTML 的 lang 屬性
      if (typeof document !== 'undefined') {
        document.documentElement.lang = 'zh-Hant';
      }
    }
  };

  const t = (key: string): string => {
    const langKey = language as keyof TranslationsType;
    
    // Ensure the language exists in translations, fallback to default if not
    const effectiveLangKey = translations[langKey] ? langKey : 'zh-Hant';

    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = translations[effectiveLangKey];

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; // Return the key itself if path is invalid
      }
    }

    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
