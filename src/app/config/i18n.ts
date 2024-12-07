import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nBackend from 'i18next-http-backend';

const getCurrentHost =
  process.env.REACT_APP_MODE === 'development' ? 'http://localhost:3000' : 'LINK TO PROD';

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getCurrentHost}/translation/{{lng}}.json`,
    },
  });

export default i18n;
