import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ar from './i18n/ar.json';
import en from './i18n/en.json';
import fr from './i18n/fr.json';
i18n.use(initReactI18next).init({

 
  compatibilityJSON: 'v3',
    lng: 'ar',
    fallbackLng: 'en',
    resources: {
      en: en,
      ar: ar,
      fr:fr },
    interpolation: {
      skipOnVariables: false,
      escapeValue: false // react already safes from xss
    }
  });
    
  export default i18n;