import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
  };

  return (
    <button onClick={toggleLanguage} className="flex items-center">
      {isEnglish ? (
        <span>EN</span>
      ) : (
        <span>RU</span>
      )}
    </button>
  );
};

export default LanguageSwitcher;
