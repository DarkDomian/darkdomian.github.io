import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from '../../locales/en.json';
import ru from '../../locales/ru.json';

i18n
  .use(initReactI18next)
  .init({
    // we can manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: { en: { translation: en }, ru: { translation: ru } },
    lng: localStorage.getItem('language') || "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;