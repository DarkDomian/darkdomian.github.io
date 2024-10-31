import './index.css'
import ThemeSwitcher from './ThemeSwitcher';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import en from '../locales/en.json';
import ru from '../locales/ru.json';

i18n
  .use(initReactI18next)
  .init({
    // we can manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: { en: { translation: en }, ru: { translation: ru } },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });



function App() {
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen flex items-center justify-center">
      <ThemeSwitcher />
      <button
        onClick={toggleLanguage}
        className="p-2 border rounded-md bg-gray-200 hover:bg-gray-300 m-4"
      >
        {i18n.language === 'en' ? 'RU' : 'EN'}
      </button>

      <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1>
      <p className="text-lg">{t('description')}</p>
      
    </div>
  )
}

export default App
