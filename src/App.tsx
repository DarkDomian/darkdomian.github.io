import './index.css'
import ThemeSwitcher from './components/ThemeSwitcher';
import AnimatedLink from './components/AnimatedLink'

// localization
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
    <div className="bg-light dark:bg-dark text-dark dark:text-light min-h-screen flex flex-col items-center justify-center">
      <ThemeSwitcher />
      <button
        onClick={toggleLanguage}
        className="switcher"
      >
        {i18n.language === 'en' ? 'RU' : 'EN'}
      </button>

      <h1 className="text-3xl font-bold mb-4 text-accent">{t('welcome')}</h1>
      <p className="text-lg">{t('description')}</p>
      <AnimatedLink icon='link' children='random link' href='' />
      <AnimatedLink />
      
    </div>
  )
}

export default App
