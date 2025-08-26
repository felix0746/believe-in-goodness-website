'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // This state is no longer needed if there are no dropdowns
  // const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (isMobileMenuOpen) {
      htmlElement.classList.add('no-scroll');
      bodyElement.classList.add('no-scroll');
    } else {
      htmlElement.classList.remove('no-scroll');
      bodyElement.classList.remove('no-scroll');
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      htmlElement.classList.remove('no-scroll');
      bodyElement.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`} id="main-header">
      <div className="logo-container">
        <Link href="/" onClick={closeMobileMenu}>
          <Image src="/images/logo-text.png" alt="相信善良 logo" width={150} height={50} priority style={{ height: '50px', width: 'auto' }}/>
        </Link>
      </div>

      <button 
        className="mobile-nav-toggle" 
        aria-controls="main-navigation" 
        aria-expanded={isMobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav className="main-nav-wrapper" data-visible={isMobileMenuOpen}>
        <ul id="main-navigation" className="main-nav">
          <li>
            <Link href="/story" className="nav-link" onClick={closeMobileMenu}>
              {t('navStory')}
            </Link>
          </li>
          <li>
            <Link href="/impact" className="nav-link" onClick={closeMobileMenu}>
              {t('navImpact')}
            </Link>
          </li>
          <li>
            <Link href="/care" className="nav-link" onClick={closeMobileMenu}>
              {t('navCare')}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link" onClick={closeMobileMenu}>
              {t('navContact')}
            </Link>
          </li>
          <li className="lang-switcher-li">
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
