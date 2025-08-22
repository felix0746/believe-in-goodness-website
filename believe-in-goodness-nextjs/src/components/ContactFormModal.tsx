'use client';

import { useState, FormEvent } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  // ==================================================================
  // TODO: 請您依照下方的說明，手動替換這裡的 Google 表單資訊
  // ==================================================================
  // 1. 請用您的 Google 表單的 'formResponse' URL 替換掉下面的 actionUrl
  const actionUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeKGwmG_iN_snK02IIUBNbdM_AdFUp6QrPL0Fjwu4dcSCtNiQ/formResponse';
  
  // 2. 請用您表單中對應欄位的 'name' 屬性 (例如 "entry.123456789") 替換掉下面的四個 entryId
  const nameEntryId = 'entry.1463989167';       // 姓名欄位的 ID
  const phoneEntryId = 'entry.945279779';      // 電話欄位的 ID
  const emailEntryId = 'entry.725019466';      // Email 欄位的 ID
  const messageEntryId = 'entry.1823457188';    // 訊息欄位的 ID
  // ==================================================================

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData();
    formData.append(nameEntryId, name);
    formData.append(emailEntryId, email);
    formData.append(phoneEntryId, phone);
    formData.append(messageEntryId, message);

    try {
      await fetch(actionUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Google Forms 需要這個模式
      });
      setStatus('success');
      // 清空表單
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleClose = () => {
    // 只有在非提交中狀態下才能關閉
    if (status !== 'submitting') {
      onClose();
      // 延遲一點重置狀態，讓關閉動畫更流暢
      setTimeout(() => setStatus('idle'), 300);
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="custom-form-modal" onClick={handleBackdropClick}>
      <div className="custom-form-content">
        <button className="custom-form-close-btn" onClick={handleClose}>&times;</button>
        
        {status === 'idle' || status === 'submitting' ? (
          <>
            <h2>{t('contactTitle')}</h2>
            <p className="custom-form-subtitle">{t('contactIntro')}</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('formName')}</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('formNamePlaceholder')}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('formEmail')}</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('formEmailPlaceholder')}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{t('formPhone')}</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('formPhonePlaceholder')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('formMessage')}</label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('formMessagePlaceholder')}
                  required
                ></textarea>
              </div>
              <button type="submit" className="custom-form-submit-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? t('formSubmitting') : t('formSubmit')}
              </button>
            </form>
          </>
        ) : (
          <div className="submission-status">
            {status === 'success' ? (
              <>
                <div className="status-icon success"><i className="fas fa-check-circle"></i></div>
                <h3>{t('formSuccessTitle')}</h3>
                <p>{t('formSuccessText')}</p>
                <button onClick={handleClose} className="custom-form-submit-btn">{t('formClose')}</button>
              </>
            ) : (
              <>
                <div className="status-icon error"><i className="fas fa-times-circle"></i></div>
                <h3>{t('formErrorTitle')}</h3>
                <p>{t('formErrorText')}</p>
                <button onClick={handleClose} className="custom-form-submit-btn error">{t('formClose')}</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
