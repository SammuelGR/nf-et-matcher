import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
    lng: 'pt-BR',
    ns: ['notFound'],
  });

export default i18n;
