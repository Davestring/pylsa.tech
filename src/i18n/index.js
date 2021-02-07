import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';

import LanguageDetector from 'i18next-browser-languagedetector';

import accessControl_es from 'i18n/locales/es/access-control-page.json';
import cctv_es from 'i18n/locales/es/cctv-page.json';
import fireprev_es from 'i18n/locales/es/fire-prev-page.json';
import footer_es from 'i18n/locales/es/footer.json';
import homepage_es from 'i18n/locales/es/home-page.json';
import ips_es from 'i18n/locales/es/ips-page.json';
import networks_es from 'i18n/locales/es/networks-page.json';
import rtc_es from 'i18n/locales/es/rtc-page.json';

const translationsJson = {
  es: {
    accessControl: accessControl_es,
    cctv: cctv_es,
    footer: footer_es,
    homepage: homepage_es,
    fireprev: fireprev_es,
    ips: ips_es,
    networks: networks_es,
    rtc: rtc_es,
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
