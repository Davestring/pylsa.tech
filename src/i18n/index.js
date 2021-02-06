import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';

import LanguageDetector from 'i18next-browser-languagedetector';

import homepage_es from 'i18n/locales/es/homepage.json';
import footer_es from 'i18n/locales/es/footer.json';

const translationsJson = {
  es: {
    homepage: homepage_es,
    footer: footer_es,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'es',
    lng: 'es',
    ns: ['homepage'],
    interpolation: {
      escapeValue: true,
    },
    resources: translationsJson,
  });

export default i18n;
